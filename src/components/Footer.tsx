import { Link } from 'react-router-dom'
import { Link as LinkIcon, Mail, Phone, MessageCircle, Users } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                RJLinks
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              The ultimate Gen-Z URL shortener platform. Shorten links, earn money, and track your success with advanced analytics.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Road No. 9, Raghava Nagar Colony</p>
              <p>Meerpet, Hyderabad - 500058</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <a href="mailto:rjlinks0@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                  rjlinks0@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <a href="tel:+919346737647" className="text-gray-300 hover:text-purple-400 transition-colors">
                  +91 9346737647
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-purple-400" />
                <a 
                  href="https://t.me/rjlinkssupport" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Telegram Support
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-purple-400" />
                <a 
                  href="https://t.me/rjlinkspaymentproff" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Payment Proofs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RJLinks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}