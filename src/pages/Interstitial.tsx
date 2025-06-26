import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { getDeviceType, getCountryFromIP } from '../utils/linkUtils'
import { Clock, ArrowRight, Zap } from 'lucide-react'

export default function Interstitial() {
  const { step, shortCode } = useParams<{ step: string; shortCode: string }>()
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(8) // 8 second timer
  const [linkData, setLinkData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!step || !shortCode) {
      navigate('/')
      return
    }

    fetchLinkData()
  }, [step, shortCode])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const fetchLinkData = async () => {
    try {
      const { data, error } = await supabase
        .from('links')
        .select('*')
        .eq('short_code', shortCode)
        .eq('is_active', true)
        .single()

      if (error || !data) {
        navigate('/')
        return
      }

      setLinkData(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching link data:', error)
      navigate('/')
    }
  }

  const handleContinue = async () => {
    if (timeLeft > 0) return

    const currentStep = parseInt(step!)
    
    // Record click analytics on first step only
    if (currentStep === 1) {
      try {
        const country = await getCountryFromIP()
        const device = getDeviceType()
        
        // Insert click record
        await supabase.from('clicks').insert({
          link_id: linkData.id,
          ip_address: 'hidden', // For privacy
          country,
          device,
          user_agent: navigator.userAgent
        })

        // Create earning record
        await supabase.from('earnings').insert({
          user_id: linkData.user_id,
          link_id: linkData.id,
          amount: 0.05 // 5 cents per click
        })
      } catch (error) {
        console.error('Error recording click:', error)
      }
    }

    if (currentStep < 3) {
      // Go to next interstitial
      navigate(`/interstitial/${currentStep + 1}/${shortCode}`)
      setTimeLeft(8) // Reset timer
    } else {
      // Redirect to final URL
      window.location.href = linkData.original_url
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          {/* Main Content */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                RJLinks
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Please wait while we prepare your link...
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Step {step} of 3 - Supporting creators like you!
            </p>

            {/* Timer */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Clock className="h-8 w-8 text-purple-400" />
                <div className="text-4xl font-bold text-white">
                  {timeLeft}s
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 mb-6">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${((8 - timeLeft) / 8) * 100}%` }}
                ></div>
              </div>
              
              <button
                onClick={handleContinue}
                disabled={timeLeft > 0}
                className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all transform ${
                  timeLeft > 0
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105'
                } flex items-center space-x-2`}
              >
                <span>{timeLeft > 0 ? `Please wait ${timeLeft}s` : 'Continue'}</span>
                {timeLeft === 0 && <ArrowRight className="h-5 w-5" />}
              </button>
            </div>

            {/* Ad Placeholder */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
              <div className="text-gray-400 text-sm mb-4">Advertisement</div>
              <div className="bg-gray-700/50 rounded-lg p-12 border-2 border-dashed border-gray-600">
                <div className="text-gray-400 text-center">
                  <div className="text-lg font-semibold mb-2">Google AdSense</div>
                  <div className="text-sm">Ad will appear here</div>
                  <div className="text-xs mt-2 opacity-75">728x90 or 300x250</div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full transition-all ${
                    i <= parseInt(step!)
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Ad Placeholder */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-gray-400 text-sm mb-4 text-center">Sponsored Content</div>
            <div className="bg-gray-700/50 rounded-lg p-8 border-2 border-dashed border-gray-600">
              <div className="text-gray-400 text-center">
                <div className="text-lg font-semibold mb-2">Additional Ad Space</div>
                <div className="text-sm">320x50 Mobile Banner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}