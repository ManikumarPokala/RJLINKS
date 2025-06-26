import { Link as LinkIcon, TrendingUp, Shield, Users, Zap } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <LinkIcon className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              RJLinks
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About RJLinks</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering creators and marketers to monetize their content through smart link sharing
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              RJLinks is a revolutionary URL shortening platform designed specifically for the Gen-Z creator economy. 
              We believe that every click should generate value for content creators, influencers, and digital marketers.
            </p>
            <p className="text-gray-300 mb-4">
              Founded in 2025, RJLinks has quickly become the go-to platform for creators who want to monetize their 
              content while providing value to their audience. Our innovative approach combines URL shortening with 
              fair revenue sharing, creating a win-win ecosystem for everyone involved.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Create Short Links</h3>
                  <p className="text-gray-300 text-sm">Paste any long URL and get a short, trackable link instantly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Share & Earn</h3>
                  <p className="text-gray-300 text-sm">Every click on your link generates revenue through our ad network</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Get Paid</h3>
                  <p className="text-gray-300 text-sm">Withdraw your earnings via UPI, Paytm, or PhonePe</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose RJLinks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">70% Revenue Share</h3>
              <p className="text-gray-300">We believe creators deserve the majority of earnings from their content</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Safe & Secure</h3>
              <p className="text-gray-300">Advanced security measures protect your links and earnings</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Optimized infrastructure ensures quick redirects and great user experience</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Driven</h3>
              <p className="text-gray-300">Join thousands of creators already earning with RJLinks</p>
            </div>
          </div>
        </div>

        {/* Revenue Model */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Our Revenue Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">For Creators</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Earn ₹0.05-0.15 per click (varies by geography)</li>
                <li>• 70% of advertising revenue goes to you</li>
                <li>• Minimum withdrawal: ₹50</li>
                <li>• Multiple payment options available</li>
                <li>• Real-time analytics and reporting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">How We Make Money</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Google AdSense integration</li>
                <li>• Premium advertising partnerships</li>
                <li>• 30% platform commission</li>
                <li>• Pro account features (coming soon)</li>
                <li>• API access for businesses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're committed to building a sustainable platform that benefits creators, advertisers, and users alike. 
            Our transparent approach and fair revenue sharing model sets us apart in the URL shortening industry.
          </p>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-lg text-white font-semibold mb-4">
              "Empowering the next generation of digital creators"
            </p>
            <p className="text-gray-300">
              Contact us at <a href="mailto:rjlinks0@gmail.com" className="text-purple-400 hover:text-purple-300">rjlinks0@gmail.com</a> for partnerships and inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}