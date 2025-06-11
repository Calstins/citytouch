import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white pb-20 pt-48">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body">
              Please read these terms carefully before using our services.
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

            {/* Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading flex items-center">
                <Scale className="h-8 w-8 text-blue-600 mr-3" />
                Agreement to Terms
              </h2>
              <p className="font-body">
                By accessing or using City Touch Services, you agree to be bound
                by these Terms of Service. If you disagree with any part of
                these terms, you may not access our services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading flex items-center">
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                Our Services
              </h2>
              <p className="font-body mb-4">City Touch Services provides:</p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>
                  <strong>Cleaning Services:</strong> Residential and commercial
                  cleaning
                </li>
                <li>
                  <strong>Mobile Barbing:</strong> Professional grooming
                  services at your location
                </li>
                <li>
                  <strong>Errand Services:</strong> Personal assistance and task
                  completion
                </li>
                <li>
                  <strong>Additional Services:</strong> Carpet cleaning, window
                  washing, sanitization
                </li>
              </ul>
            </div>

            {/* Booking and Payment */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Booking and Payment
              </h2>

              <h3 className="text-2xl font-semibold mb-4 font-heading">
                Service Booking
              </h3>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>All bookings are subject to availability</li>
                <li>
                  We reserve the right to refuse service at our discretion
                </li>
                <li>Accurate information must be provided when booking</li>
                <li>
                  Changes to bookings must be made at least 24 hours in advance
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 font-heading">
                Payment Terms
              </h3>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>
                  Payment is due upon completion of services unless otherwise
                  agreed
                </li>
                <li>We accept cash, card, and electronic payments</li>
                <li>Late payment fees may apply to overdue accounts</li>
                <li>All prices include VAT where applicable</li>
              </ul>
            </div>

            {/* Cancellation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Cancellation Policy
              </h2>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>
                  <strong>24+ hours notice:</strong> Full refund or reschedule
                </li>
                <li>
                  <strong>12-24 hours notice:</strong> 50% cancellation fee
                </li>
                <li>
                  <strong>Less than 12 hours:</strong> Full charge applies
                </li>
                <li>
                  <strong>Emergency cancellations:</strong> Considered case by
                  case
                </li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                User Responsibilities
              </h2>
              <p className="font-body mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>Provide accurate contact and location information</li>
                <li>Ensure safe access to your property</li>
                <li>Secure valuable items before service visits</li>
                <li>Inform us of any health or safety concerns</li>
                <li>Treat our staff with respect and courtesy</li>
                <li>Pay for services as agreed</li>
              </ul>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading flex items-center">
                <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
                Liability and Insurance
              </h2>

              <h3 className="text-2xl font-semibold mb-4 font-heading">
                Our Liability
              </h3>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>We carry comprehensive insurance for our services</li>
                <li>
                  Liability is limited to the cost of the service provided
                </li>
                <li>We are not responsible for pre-existing damage</li>
                <li>Claims must be reported within 24 hours of service</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 font-heading">
                Your Liability
              </h3>
              <ul className="list-disc pl-6 mb-6 font-body">
                <li>You are responsible for any damage to our equipment</li>
                <li>You must disclose any hazardous conditions</li>
                <li>False or misleading information may void agreements</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Contact Information
              </h2>
              <p className="font-body mb-4">
                For questions about these Terms of Service, contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg font-body">
                <p>
                  <strong>Email:</strong> legal@citytouchservices.com
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
