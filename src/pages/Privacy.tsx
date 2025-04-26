import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <Shield className="w-16 h-16 text-[#7406c7] mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600">
          Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg shadow-md p-8 space-y-8"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Name and contact information</li>
            <li>Account credentials</li>
            <li>Transaction history</li>
            <li>Communication preferences</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Process your transactions</li>
            <li>Provide customer support</li>
            <li>Send important updates</li>
            <li>Improve our services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate technical and organizational measures to protect your personal data against 
            unauthorized or unlawful processing, accidental loss, destruction, or damage. We regularly review 
            and update these security measures to maintain the highest standards of data protection.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
            <br />
            <a href="mailto:privacy@vidressing.com" className="text-[#7406c7] hover:text-[#5c0599]">
              privacy@vidressing.com
            </a>
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
}