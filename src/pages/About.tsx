import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Award, Users, Linkedin, Mail, Phone } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">About Vidressing</h1>
        <p className="text-xl text-gray-600">
          Vidressing is the premier luxury resale platform connecting discerning sellers with professional vendors. 
          Our mission is to make luxury fashion more sustainable and accessible while ensuring authenticity and quality.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Shield className="w-12 h-12 text-[#7406c7] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Authentication Guarantee</h3>
          <p className="text-gray-600">Every item is thoroughly authenticated by our expert professionals</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Award className="w-12 h-12 text-[#7406c7] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
          <p className="text-gray-600">Rigorous quality checks ensure only the finest items are listed</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Users className="w-12 h-12 text-[#7406c7] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Expert Network</h3>
          <p className="text-gray-600">Access to a curated network of professional luxury resellers</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-16"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2024, Vidressing emerged from a vision to revolutionize the luxury resale market. 
            We recognized the need for a platform that not only facilitates the sale of pre-owned luxury items 
            but also ensures the highest standards of authenticity and service.
          </p>
          <p className="text-gray-600">
            Today, we're proud to be the trusted platform for thousands of sellers and professional vendors, 
            creating a sustainable future for luxury fashion while maintaining the excellence and sophistication 
            that our clients expect.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-8 md:p-16 shadow-md"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Founder</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img
                src="https://z-p3-scontent.fdla2-1.fna.fbcdn.net/v/t39.30808-6/490939407_9746087218781530_2903214336968920488_n.jpg"
                alt="Wilfried Fabove PIWO"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">Wilfried Fabove PIWO</h3>
              <p className="text-[#7406c7] font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-6">
                A visionary entrepreneur and graduate of École de Management de Normandie, Wilfried founded Vidressing 
                with a mission to revolutionize the luxury resale market. His passion for sustainable fashion and 
                circular economy led to the creation of a platform that allows affluent individuals to effortlessly 
                manage their luxury wardrobes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/wilfried-fabove-piwo-021022131/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-[#7406c7]"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="tel:+33773923709"
                  className="inline-flex items-center text-gray-600 hover:text-[#7406c7]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +33 7 73 92 37 09
                </a>
                <div className="inline-flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2" />
                  Colombes, Île-de-France, France
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}