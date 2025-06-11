import { Shield, Lock, Eye, Users } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white pb-20 pt-48">
        <div className="container mx-auto px-6 ">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
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

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Introduction
              </h2>
              <p className="font-body">
                City Touch Services (&apos;we,&apos; &apos;our,&apos; or
                &apos;us&apos;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading flex items-center">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                Information We Collect
              </h2>

              <h3 className="text-2xl font-semibold mb-4 font-heading">
                Personal Information
              </h3>
              <p className="font-body mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>
                  Name and contact information (email, phone number, address)
                </li>
                <li>Service preferences and requirements</li>
                <li>
                  Payment information (processed securely through third-party
                  providers)
                </li>
                <li>Communication history and feedback</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 font-heading">
                Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Usage data and website analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading flex items-center">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                How We Use Your Information
              </h2>
              <p className="font-body mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>
                  Providing and improving our cleaning, barbing, and errand
                  services
                </li>
                <li>Processing bookings and payments</li>
                <li>Communicating with you about services and appointments</li>
                <li>Sending promotional materials (with your consent)</li>
                <li>Analyzing website usage to improve user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading flex items-center">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                Information Sharing and Disclosure
              </h2>
              <p className="font-body mb-4">
                We do not sell your personal information. We may share
                information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>
                  <strong>Service Providers:</strong> With trusted third parties
                  who assist in our operations
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with
                  mergers or acquisitions
                </li>
                <li>
                  <strong>Consent:</strong> When you have given explicit
                  permission
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading flex items-center">
                <Lock className="h-8 w-8 text-blue-600 mr-3" />
                Data Security
              </h2>
              <p className="font-body mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and staff training</li>
                <li>Secure payment processing through certified providers</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Your Rights
              </h2>
              <p className="font-body mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Contact Us
              </h2>
              <p className="font-body mb-4">
                If you have questions about this Privacy Policy or wish to
                exercise your rights, contact us:
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
