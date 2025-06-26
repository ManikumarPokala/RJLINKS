import { Shield, Eye, Cookie, Database, Mail } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl w-fit mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300">
            Last updated: January 25, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <Eye className="h-6 w-6 text-purple-400" />
              <span>Information We Collect</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-semibold text-white">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address (for account creation and communication)</li>
                <li>Payment information (UPI ID, Phone numbers for withdrawals)</li>
                <li>IP address (for analytics and fraud prevention)</li>
                <li>Device information (browser type, operating system)</li>
              </ul>

              <h3 className="text-lg font-semibold text-white">Usage Data</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Click data and analytics (country, device type, timestamp)</li>
                <li>Links created and their performance metrics</li>
                <li>User interaction patterns on our platform</li>
                <li>Referrer information when accessing shortened links</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <Database className="h-6 w-6 text-purple-400" />
              <span>How We Use Your Information</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our URL shortening service</li>
                <li>Process payments and manage your earnings</li>
                <li>Generate analytics and performance reports</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Send important account and service notifications</li>
                <li>Improve our services based on usage patterns</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
              <Cookie className="h-6 w-6 text-purple-400" />
              <span>Cookies and Tracking</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintain your login session</li>
                <li>Remember your preferences</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Serve personalized advertisements through Google AdSense</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
              <p>
                You can control cookie settings through your browser, but disabling cookies may affect 
                some functionality of our service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-semibold text-white">Google AdSense</h3>
              <p>
                We use Google AdSense to display advertisements. Google may use cookies to serve ads 
                based on your prior visits to our website or other websites. You can opt out of 
                personalized advertising by visiting Google's Ads Settings.
              </p>

              <h3 className="text-lg font-semibold text-white">Supabase</h3>
              <p>
                We use Supabase for database and authentication services. Your data is encrypted 
                and stored securely according to Supabase's privacy policy.
              </p>

              <h3 className="text-lg font-semibold text-white">Analytics Services</h3>
              <p>
                We may use analytics services to understand how users interact with our platform. 
                This helps us improve our services and user experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
            <div className="space-y-4 text-gray-300">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL encryption for all data transmission</li>
                <li>Secure database storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure payment processing for withdrawals</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <div className="space-y-4 text-gray-300">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access: Request a copy of your personal data</li>
                <li>Correction: Update or correct inaccurate information</li>
                <li>Deletion: Request deletion of your personal data</li>
                <li>Portability: Request transfer of your data to another service</li>
                <li>Objection: Object to processing of your personal data</li>
                <li>Withdrawal: Withdraw consent for data processing</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:rjlinks0@gmail.com" className="text-purple-400 hover:text-purple-300">rjlinks0@gmail.com</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We retain your personal information only as long as necessary to provide our services 
                and comply with legal obligations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information: Until account deletion</li>
                <li>Click analytics: Up to 2 years for reporting purposes</li>
                <li>Payment records: Up to 7 years for tax compliance</li>
                <li>Support communications: Up to 3 years</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our service is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you become aware that a child 
                has provided us with personal information, please contact us immediately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data in accordance with 
                this privacy policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date. We encourage 
                you to review this policy periodically.
              </p>
            </div>
          </section>

         <section>
  <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
    <Mail className="h-6 w-6 text-purple-400" />
    <span>Contact Us</span>
  </h2>
  <div className="space-y-4 text-gray-300">
    <p>If you have any questions about this privacy policy, please contact us:</p>
    <div className="bg-white/5 rounded-lg p-4 space-y-2">
      <p><strong>Email:</strong> <a href="mailto:rjlinks0@gmail.com" className="text-purple-400 hover:text-purple-300">rjlinks0@gmail.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:+919346737647" className="text-purple-400 hover:text-purple-300">+91 9346737647</a></p>
      <p><strong>Address:</strong> Road No. 9, Raghava Nagar Colony, Meerpet, Hyderabad - 500058</p>
      <p><strong>Telegram Support:</strong> <a href="https://t.me/rjlinkssupport" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">@rjlinkssupport</a></p>
    </div>
  </div>
</section>
        </div>
      </div>
    </div>
  )
}