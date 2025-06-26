import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import AboutUs from './pages/AboutUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import Contact from './pages/Contact'
import Interstitial from './pages/Interstitial'
import Redirect from './pages/Redirect'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              },
            }}
          />
          
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/about" element={<><Navbar /><AboutUs /><Footer /></>} />
            <Route path="/privacy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
            <Route path="/terms" element={<><Navbar /><TermsOfUse /><Footer /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </ProtectedRoute>
              } 
            />
            
            {/* Interstitial and Redirect Routes */}
            <Route path="/interstitial/:step/:shortCode" element={<Interstitial />} />
            <Route path="/r/:shortCode" element={<Redirect />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App