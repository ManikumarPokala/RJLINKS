import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Redirect() {
  const { shortCode } = useParams<{ shortCode: string }>()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!shortCode) {
      navigate('/')
      return
    }

    checkLinkAndRedirect()
  }, [shortCode])

  const checkLinkAndRedirect = async () => {
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

      // Redirect to first interstitial page
      navigate(`/interstitial/1/${shortCode}`)
    } catch (error) {
      console.error('Error checking link:', error)
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Redirecting...</div>
      </div>
    )
  }

  return null
}