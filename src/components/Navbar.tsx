import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Link as LinkIcon, User, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function Navbar() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut()
      toast.success('Signed out successfully')
      navigate('/')
    } catch (error) {
      toast.error('Error signing out')
    }
  }

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <LinkIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              RJLinks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-gray-700 hover:text-purple-600 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-700 hover:text-purple-600 transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/about"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/privacy"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {user ? (
              <div className="space-y-4 pt-4 border-t border-white/20">
                <Link
                  to="/dashboard"
                  className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleSignOut()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left text-red-600 hover:text-red-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-4 border-t border-white/20">
                <Link
                  to="/login"
                  className="block text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}