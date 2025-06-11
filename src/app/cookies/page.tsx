import { Cookie, Settings, BarChart, Shield } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white pb-20 pt-48">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body">
              Learn how we use cookies to improve your experience on our
              website.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-12">
              <p className="text-gray-600 font-body">
                <strong>Last updated:</strong> December 2025
              </p>
            </div>

            {/* What are Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading flex items-center">
                <Cookie className="h-8 w-8 text-blue-600 mr-3" />
                What Are Cookies?
              </h2>
              <p className="font-body mb-4">
                Cookies are small text files that are stored on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences and understanding how
                you use our site.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Types of Cookies We Use
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-heading flex items-center">
                    <Settings className="h-6 w-6 text-blue-600 mr-2" />
                    Essential Cookies
                  </h3>
                  <p className="font-body text-sm">
                    These cookies are necessary for the website to function
                    properly. They enable basic features and cannot be disabled.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-heading flex items-center">
                    <BarChart className="h-6 w-6 text-green-600 mr-2" />
                    Analytics Cookies
                  </h3>
                  <p className="font-body text-sm">
                    These help us understand how visitors interact with our
                    website by collecting and reporting information anonymously.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-heading flex items-center">
                    <Settings className="h-6 w-6 text-purple-600 mr-2" />
                    Functional Cookies
                  </h3>
                  <p className="font-body text-sm">
                    These cookies remember your preferences and choices to
                    provide enhanced functionality and personalization.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 font-heading flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                    Marketing Cookies
                  </h3>
                  <p className="font-body text-sm">
                    These cookies track your online activity to help advertisers
                    deliver more relevant advertising.
                  </p>
                </div>
              </div>
            </div>

            {/* Specific Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Cookies We Use
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 font-body">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left font-heading">
                        Cookie Name
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-heading">
                        Purpose
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-heading">
                        Duration
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-heading">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">_session</td>
                      <td className="border border-gray-300 p-3">
                        Maintains user session
                      </td>
                      <td className="border border-gray-300 p-3">Session</td>
                      <td className="border border-gray-300 p-3">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">_ga</td>
                      <td className="border border-gray-300 p-3">
                        Google Analytics tracking
                      </td>
                      <td className="border border-gray-300 p-3">2 years</td>
                      <td className="border border-gray-300 p-3">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        preferences
                      </td>
                      <td className="border border-gray-300 p-3">
                        Remembers user preferences
                      </td>
                      <td className="border border-gray-300 p-3">1 year</td>
                      <td className="border border-gray-300 p-3">Functional</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        marketing_consent
                      </td>
                      <td className="border border-gray-300 p-3">
                        Tracks marketing consent
                      </td>
                      <td className="border border-gray-300 p-3">1 year</td>
                      <td className="border border-gray-300 p-3">Marketing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Managing Your Cookie Preferences
              </h2>

              <h3 className="text-2xl font-semibold mb-4 font-heading">
                Browser Settings
              </h3>
              <p className="font-body mb-4">
                You can control cookies through your browser settings. Most
                browsers allow you to:
              </p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>View cookies stored on your device</li>
                <li>Delete existing cookies</li>
                <li>Block all or specific cookies</li>
                <li>Set preferences for future cookies</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 font-heading">
                Cookie Consent
              </h3>
              <p className="font-body mb-4">
                When you first visit our website, we&apos;ll ask for your
                consent to use non-essential cookies. You can:
              </p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your preferences</li>
                <li>Change your mind at any time</li>
              </ul>
            </div>

            {/* Third Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Third-Party Cookies
              </h2>
              <p className="font-body mb-4">
                Some cookies are set by third-party services that appear on our
                pages:
              </p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>
                  <strong>Google Analytics:</strong> Website usage analytics
                </li>
                <li>
                  <strong>Google Maps:</strong> Location and mapping services
                </li>
                <li>
                  <strong>Social Media Widgets:</strong> Sharing and social
                  features
                </li>
                <li>
                  <strong>Payment Processors:</strong> Secure payment handling
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Contact Us
              </h2>
              <p className="font-body mb-4">
                If you have questions about our use of cookies, contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg font-body">
                <p>
                  <strong>Email:</strong> privacy@citytouchservices.com
                </p>
                <p>
                  <strong>Phone:</strong> 07XXX XXXXXX
                </p>
                <p>
                  <strong>Address:</strong> London, UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
