import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'
import { generateShortCode, isValidUrl } from '../utils/linkUtils'
import { Link as LinkIcon, Copy, TrendingUp, Shield, Zap, Users } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Home() {
  const { user } = useAuth()
  const [url, setUrl] = useState('')
  const [shortLink, setShortLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [stats, setStats] = useState({ totalLinks: 0, totalClicks: 0, totalUsers: 0 })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [linksResult, clicksResult] = await Promise.all([
        supabase.from('links').select('id', { count: 'exact' }),
        supabase.from('clicks').select('id', { count: 'exact' })
      ])
      
      setStats({
        totalLinks: linksResult.count || 0,
        totalClicks: clicksResult.count || 0,
        totalUsers: Math.floor((linksResult.count || 0) * 0.3) // Approximate users
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const handleShortenUrl = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!url.trim()) {
      toast.error('Please enter a URL')
      return
    }

    if (!isValidUrl(url)) {
      toast.error('Please enter a valid URL')
      return
    }

    if (!user) {
      toast.error('Please login to shorten URLs')
      return
    }

    setLoading(true)

    try {
      const shortCode = generateShortCode()
      
      const { error } = await supabase
        .from('links')
        .insert({
          user_id: user.id,
          original_url: url,
          short_code: shortCode,
        })

      if (error) throw error

      const newShortLink = `https://rjlinks.in/r/${shortCode}`
      setShortLink(newShortLink)
      toast.success('URL shortened successfully!')
      setUrl('')
    } catch (error) {
      console.error('Error shortening URL:', error)
      toast.error('Failed to shorten URL. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortLink)
      toast.success('Link copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy link')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Shorten Links,{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Earn Money
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              The ultimate Gen-Z URL shortener platform. Create short links, track analytics, and earn money with every click. Join thousands of creators making money online.
            </p>

            {/* URL Shortener Form */}
            <div className="max-w-4xl mx-auto mb-16">
              <form onSubmit={handleShortenUrl} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste your long URL here..."
                    className="w-full px-6 py-4 text-lg rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !user}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? 'Shortening...' : 'Shorten URL'}
                  <LinkIcon className="h-5 w-5" />
                </button>
              </form>

              {!user && (
                <p className="mt-4 text-gray-300">
                  <span className="text-purple-400">Login required</span> to shorten URLs and start earning
                </p>
              )}

              {/* Shortened URL Result */}
              {shortLink && (
                <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="text-gray-300 mb-2">Your shortened URL:</p>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      value={shortLink}
                      readOnly
                      className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{stats.totalLinks.toLocaleString()}+</div>
                <div className="text-purple-300">Links Shortened</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{stats.totalClicks.toLocaleString()}+</div>
                <div className="text-purple-300">Total Clicks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{stats.totalUsers.toLocaleString()}+</div>
                <div className="text-purple-300">Active Users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose RJLinks?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're not just another URL shortener. We're your partner in earning money online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Earn Money</h3>
              <p className="text-gray-300">Get paid for every click on your shortened links. 70% revenue share for you!</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Safe & Secure</h3>
              <p className="text-gray-300">Advanced security measures to protect your links and user data.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Instant link generation and super-fast redirects for the best user experience.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-300">Detailed analytics with country, device, and click tracking.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already making money with RJLinks. It's free to start!
            </p>
            {!user && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
                >
                  Get Started Free
                </a>
                <a
                  href="/login"
                  className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-2xl hover:bg-white/20 transition-all border border-white/20"
                >
                  Sign In
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}