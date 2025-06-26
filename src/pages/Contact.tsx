import { Mail, Phone, MessageCircle, Users, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? Need support? We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mx-auto mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
            <p className="text-gray-300 mb-4">Get help via email</p>
            <a 
              href="mailto:rjlinks0@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              rjlinks0@gmail.com
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mx-auto mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
            <p className="text-gray-300 mb-4">Call us directly</p>
            <a 
              href="tel:+919346737647"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              +91 9346737647
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg w-fit mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Telegram Support</h3>
            <p className="text-gray-300 mb-4">Instant messaging</p>
            <a 
              href="https://t.me/rjlinkssupport"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              @rjlinkssupport
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg w-fit mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Payment Proofs</h3>
            <p className="text-gray-300 mb-4">See real earnings</p>
            <a 
              href="https://t.me/rjlinkspaymentproff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              @rjlinkspaymentproff
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all">
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="payment">Payment Issue</option>
                  <option value="partnership">Partnership</option>
                  <option value="bug">Bug Report</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Our Office</h3>
              </div>
              <div className="text-gray-300 space-y-1">
                <p>Road No. 9, Raghava Nagar Colony</p>
                <p>Meerpet, Hyderabad</p>
                <p>Telangana - 500058</p>
                <p>India</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Support Hours</h3>
              </div>
              <div className="text-gray-300 space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="border-t border-white/20 pt-2 mt-4">
                  <p className="text-sm text-purple-300">
                    Emergency support available 24/7 via Telegram
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Links */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Help</h3>
              <div className="space-y-3">
                <div className="text-gray-300">
                  <h4 className="font-medium text-white mb-2">Common Questions:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• How do I withdraw my earnings?</li>
                    <li>• Why are my links not working?</li>
                    <li>• How much can I earn per click?</li>
                    <li>• When do I get paid?</li>
                  </ul>
                </div>
                <p className="text-sm text-purple-300">
                  Check our Telegram support channel for instant answers to these and more questions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-300 mb-6">
              Join our Telegram community for instant support and connect with other RJLinks users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/rjlinkssupport"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105"
              >
                Join Support Channel
              </a>
              <a
                href="https://t.me/rjlinkspaymentproff"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                View Payment Proofs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}