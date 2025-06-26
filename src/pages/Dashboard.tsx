import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'
import { Link as LinkIcon, Eye, MapPin, Smartphone, Calendar, DollarSign, TrendingUp, Copy, ExternalLink } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import toast from 'react-hot-toast'

interface LinkData {
  id: string
  original_url: string
  short_code: string
  title: string | null
  created_at: string
  clicks: number
}

interface ClickData {
  country: string
  device: string
  clicked_at: string
}

interface WithdrawalData {
  amount: number
  payment_method: string
  payment_details: string
  status: string
  requested_at: string
}

export default function Dashboard() {
  const { user } = useAuth()
  const [links, setLinks] = useState<LinkData[]>([])
  const [totalClicks, setTotalClicks] = useState(0)
  const [totalEarnings, setTotalEarnings] = useState(0)
  const [clicksData, setClicksData] = useState<ClickData[]>([])
  const [withdrawals, setWithdrawals] = useState<WithdrawalData[]>([])
  const [loading, setLoading] = useState(true)
  
  // Withdrawal form
  const [showWithdrawalForm, setShowWithdrawalForm] = useState(false)
  const [withdrawalAmount, setWithdrawalAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [paymentDetails, setPaymentDetails] = useState('')
  const [withdrawalLoading, setWithdrawalLoading] = useState(false)

  useEffect(() => {
    if (user) {
      fetchDashboardData()
    }
  }, [user])

  const fetchDashboardData = async () => {
    if (!user) return

    try {
      // Fetch user's links with click counts
      const { data: linksData, error: linksError } = await supabase
        .from('links')
        .select(`
          *,
          clicks:clicks(count)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (linksError) throw linksError

      // Process links data
      const processedLinks = linksData?.map(link => ({
        ...link,
        clicks: link.clicks?.length || 0
      })) || []

      setLinks(processedLinks)

      // Calculate total clicks
      const totalClicksCount = processedLinks.reduce((sum, link) => sum + link.clicks, 0)
      setTotalClicks(totalClicksCount)

      // Fetch earnings
      const { data: earningsData, error: earningsError } = await supabase
        .from('earnings')
        .select('amount')
        .eq('user_id', user.id)

      if (earningsError) throw earningsError

      const totalEarningsAmount = earningsData?.reduce((sum, earning) => sum + Number(earning.amount), 0) || 0
      setTotalEarnings(totalEarningsAmount)

      // Fetch click analytics
      const { data: clicksAnalytics, error: clicksError } = await supabase
        .from('clicks')
        .select('country, device, clicked_at')
        .in('link_id', processedLinks.map(link => link.id))

      if (clicksError) throw clicksError
      setClicksData(clicksAnalytics || [])

      // Fetch withdrawals
      const { data: withdrawalsData, error: withdrawalsError } = await supabase
        .from('withdrawals')
        .select('*')
        .eq('user_id', user.id)
        .order('requested_at', { ascending: false })

      if (withdrawalsError) throw withdrawalsError
      setWithdrawals(withdrawalsData || [])

    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      toast.error('Error loading dashboard data')
    } finally {
      setLoading(false)
    }
  }

  const handleWithdrawal = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const amount = parseFloat(withdrawalAmount)
    if (amount < 50) {
      toast.error('Minimum withdrawal amount is ₹50')
      return
    }

    if (amount > totalEarnings) {
      toast.error('Insufficient balance')
      return
    }

    setWithdrawalLoading(true)

    try {
      const { error } = await supabase
        .from('withdrawals')
        .insert({
          user_id: user!.id,
          amount,
          payment_method: paymentMethod,
          payment_details: paymentDetails,
        })

      if (error) throw error

      toast.success('Withdrawal request submitted successfully!')
      setShowWithdrawalForm(false)
      setWithdrawalAmount('')
      setPaymentDetails('')
      fetchDashboardData()
    } catch (error) {
      console.error('Error submitting withdrawal:', error)
      toast.error('Failed to submit withdrawal request')
    } finally {
      setWithdrawalLoading(false)
    }
  }

  const copyShortLink = async (shortCode: string) => {
    try {
      await navigator.clipboard.writeText(`https://rjlinks.in/r/${shortCode}`)
      toast.success('Link copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy link')
    }
  }

  // Prepare chart data
  const clicksOverTime = clicksData.reduce((acc: any[], click) => {
    const date = new Date(click.clicked_at).toLocaleDateString()
    const existing = acc.find(item => item.date === date)
    if (existing) {
      existing.clicks += 1
    } else {
      acc.push({ date, clicks: 1 })
    }
    return acc
  }, []).slice(-7) // Last 7 days

  const countryData = clicksData.reduce((acc: any[], click) => {
    const existing = acc.find(item => item.country === click.country)
    if (existing) {
      existing.value += 1
    } else {
      acc.push({ country: click.country, value: 1 })
    }
    return acc
  }, []).slice(0, 5) // Top 5 countries

  const deviceData = clicksData.reduce((acc: any[], click) => {
    const existing = acc.find(item => item.device === click.device)
    if (existing) {
      existing.value += 1
    } else {
      acc.push({ device: click.device, value: 1 })
    }
    return acc
  }, [])

  const colors = ['#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444']

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-300">Welcome back, {user?.email}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Links</p>
                <p className="text-3xl font-bold text-white">{links.length}</p>
              </div>
              <LinkIcon className="h-8 w-8 text-purple-400" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Clicks</p>
                <p className="text-3xl font-bold text-white">{totalClicks.toLocaleString()}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Earnings</p>
                <p className="text-3xl font-bold text-white">₹{totalEarnings.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Avg. CPM</p>
                <p className="text-3xl font-bold text-white">₹{totalClicks > 0 ? (totalEarnings / totalClicks * 1000).toFixed(2) : '0.00'}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-pink-400" />
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Clicks Over Time */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Clicks Over Time (Last 7 Days)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={clicksOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Line type="monotone" dataKey="clicks" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top Countries */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Top Countries</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={countryData}
                  dataKey="value"
                  nameKey="country"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {countryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Earnings & Withdrawal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Earnings Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Earnings</h3>
              <button
                onClick={() => setShowWithdrawalForm(true)}
                disabled={totalEarnings < 50}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Request Withdrawal
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Available Balance:</span>
                <span className="text-white font-semibold">₹{totalEarnings.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Minimum Withdrawal:</span>
                <span className="text-white">₹50.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Your Share:</span>
                <span className="text-green-400 font-semibold">70%</span>
              </div>
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Device Breakdown</h3>
            <div className="space-y-3">
              {deviceData.map((device, index) => (
                <div key={device.device} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300">{device.device}</span>
                  </div>
                  <span className="text-white font-semibold">{device.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links Table */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-white/20">
            <h3 className="text-xl font-semibold text-white">Your Links</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    URL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Short Link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Clicks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {links.map((link) => (
                  <tr key={link.id}>
                    <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                      {link.original_url}
                    </td>
                    <td className="px-6 py-4 text-sm text-purple-400">
                      rjlinks.in/r/{link.short_code}
                    </td>
                    <td className="px-6 py-4 text-sm text-white font-semibold">
                      {link.clicks}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {new Date(link.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button
                        onClick={() => copyShortLink(link.short_code)}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <a
                        href={link.original_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Withdrawal Form Modal */}
        {showWithdrawalForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-full max-w-md">
              <h3 className="text-xl font-semibold text-white mb-4">Request Withdrawal</h3>
              <form onSubmit={handleWithdrawal} className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    min="50"
                    max={totalEarnings}
                    step="0.01"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Minimum ₹50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Payment Method
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="upi">UPI</option>
                    <option value="paytm">Paytm</option>
                    <option value="phonepe">PhonePe</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Payment Details
                  </label>
                  <input
                    type="text"
                    value={paymentDetails}
                    onChange={(e) => setPaymentDetails(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="UPI ID / Phone Number"
                    required
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowWithdrawalForm(false)}
                    className="flex-1 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={withdrawalLoading}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all disabled:opacity-50"
                  >
                    {withdrawalLoading ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}