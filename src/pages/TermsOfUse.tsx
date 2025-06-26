import { FileText, AlertTriangle, DollarSign, Shield } from 'lucide-react'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl w-fit mx-auto mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-xl text-gray-300">
            Last updated: January 25, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                By accessing and using RJLinks ("the Service"), you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
              <p>
                These Terms of Use constitute a legally binding agreement between you and RJLinks 
                regarding your use of the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                RJLinks provides a URL shortening service that allows users to create shortened 
                versions of long URLs and earn money through advertising revenue when those links are clicked.
              </p>
              <p>Our service includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>URL shortening and custom link generation</li>
                <li>Click analytics and tracking</li>
                <li>Revenue sharing program</li>
                <li>Dashboard for link management</li>
                <li>Payment processing for earnings</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                To use certain features of our Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your account information</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>Be responsible for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
              <p>
                You must be at least 13 years old to create an account. Users under 18 must have 
                parental consent.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              <span>4. Prohibited Content and Conduct</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>You may not use our Service to shorten URLs that contain or link to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Illegal, harmful, or offensive content</li>
                <li>Malware, viruses, or malicious software</li>
                <li>Spam, phishing, or fraudulent content</li>
                <li>Adult content or pornography</li>
                <li>Hate speech, violence, or discrimination</li>
                <li>Copyright-infringing material</li>
                <li>Pyramid schemes or get-rich-quick schemes</li>
                <li>Content that violates any laws or regulations</li>
              </ul>
              
              <p>Prohibited activities include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Click fraud or artificial traffic generation</li>
                <li>Using bots, scripts, or automated tools</li>
                <li>Misleading users about link destinations</li>
                <li>Creating multiple accounts to circumvent limits</li>
                <li>Interfering with the Service's functionality</li>
                <li>Reverse engineering or attempting to extract source code</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-green-400" />
              <span>5. Revenue Sharing and Payments</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-semibold text-white">Earning Structure</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Users receive 70% of advertising revenue generated by their links</li>
                <li>RJLinks retains 30% to cover operational costs and platform development</li>
                <li>Earnings vary based on geography, device type, and advertising demand</li>
                <li>Typical earnings range from ₹0.05 to ₹0.15 per click</li>
              </ul>

              <h3 className="text-lg font-semibold text-white">Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Minimum withdrawal amount: ₹50</li>
                <li>Payment methods: UPI, Paytm, PhonePe</li>
                <li>Payment processing time: 3-7 business days</li>
                <li>Earnings are calculated monthly and available for withdrawal</li>
                <li>We reserve the right to hold payments for investigation of suspicious activity</li>
              </ul>

              <h3 className="text-lg font-semibold text-white">Tax Responsibilities</h3>
              <p>
                You are responsible for reporting and paying taxes on your earnings according to 
                your local tax laws. We may provide earnings statements for tax purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Service and its original content, features, and functionality are owned by RJLinks 
                and are protected by international copyright, trademark, patent, trade secret, and 
                other intellectual property laws.
              </p>
              <p>
                You retain ownership of content you submit, but grant us a license to use, display, 
                and distribute it as necessary to provide the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Privacy and Data Protection</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, 
                and protect your information when you use the Service. By using our Service, you 
                agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Service Availability</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We strive to maintain high availability but do not guarantee uninterrupted service. 
                We may temporarily suspend or restrict access for maintenance, updates, or other 
                operational reasons.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of the Service 
                at any time with or without notice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Account Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>We may terminate or suspend your account if you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate these Terms of Use</li>
                <li>Engage in fraudulent or suspicious activity</li>
                <li>Fail to pay applicable fees</li>
                <li>Remain inactive for an extended period</li>
              </ul>
              <p>
                You may terminate your account at any time by contacting us. Upon termination, 
                your right to use the Service will cease immediately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimers and Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Service is provided on an "as is" and "as available" basis. We make no warranties, 
                expressed or implied, regarding the Service's reliability, accuracy, or availability.
              </p>
              <p>
                To the maximum extent permitted by law, RJLinks shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or 
                revenues, whether incurred directly or indirectly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                You agree to indemnify and hold harmless RJLinks from any claims, damages, losses, 
                or expenses arising from your use of the Service, violation of these terms, or 
                infringement of any third-party rights.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, 
                Telangana.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any 
                material changes by posting the updated Terms on our website. Your continued use of 
                the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Severability</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If any provision of these Terms is held to be invalid or unenforceable, such provision 
                shall be struck and the remaining provisions shall remain in full force and effect.
              </p>
            </div>
          </section>

          <section>
  <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
    <Shield className="h-6 w-6 text-purple-400" />
    <span>15. Contact Information</span>
  </h2>
  <div className="space-y-4 text-gray-300">
    <p>For questions about these Terms of Use, please contact us:</p>
    <div className="bg-white/5 rounded-lg p-4 space-y-2">
      <p><strong>Email:</strong> <a href="mailto:rjlinks0@gmail.com" className="text-purple-400 hover:text-purple-300">rjlinks0@gmail.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:+919346737647" className="text-purple-400 hover:text-purple-300">+91 9346737647</a></p>
      <p><strong>Address:</strong> Road No. 9, Raghava Nagar Colony, Meerpet, Hyderabad - 500058</p>
      <p><strong>Telegram Support:</strong> <a href="https://t.me/rjlinkssupport" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">@rjlinkssupport</a></p>
    </div>
  </div>
</section>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <p className="text-white font-semibold mb-2">
              By using RJLinks, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
            <p className="text-gray-300 text-sm">
              These terms constitute the entire agreement between you and RJLinks regarding your use of the Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}