import { useTranslation } from 'react-i18next';
import { Star, Award, Shield, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Professionals() {
  const { t } = useTranslation();

  const professionals = [
    {
      id: 1,
      name: 'Sophie Martin',
      specialty: 'Luxury Handbags',
      rating: 4.9,
      sales: 234,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      description: 'Specializing in authentic luxury handbags with over 10 years of experience.',
    },
    {
      id: 2,
      name: 'Jean Dubois',
      specialty: 'Designer Clothing',
      rating: 4.8,
      sales: 189,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      description: 'Expert in high-end fashion and vintage designer pieces.',
    },
    {
      id: 3,
      name: 'Marie Laurent',
      specialty: 'Vintage Luxury',
      rating: 4.7,
      sales: 156,
      image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
      description: 'Passionate about rare vintage finds and luxury accessories.',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">{t('professionals.title')}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('professionals.subtitle')}
        </p>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {professionals.map((pro, index) => (
          <motion.div 
            key={pro.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={pro.image} 
                alt={pro.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{pro.name}</h3>
              <p className="text-[#7406c7] font-medium mb-3">{pro.specialty}</p>
              <p className="text-gray-600 mb-4">{pro.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="font-medium">{pro.rating}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-[#7406c7] mr-1" />
                  <span className="font-medium">{pro.sales} sales</span>
                </div>
              </div>
              <button className="w-full mt-4 flex items-center justify-center bg-[#7406c7] bg-opacity-10 text-[#7406c7] px-4 py-2 rounded-lg font-medium hover:bg-opacity-20 transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Shield className="w-12 h-12 text-[#7406c7] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t('professionals.features.verified.title')}</h3>
            <p className="text-gray-600">{t('professionals.features.verified.description')}</p>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 text-[#7406c7] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t('professionals.features.topRated.title')}</h3>
            <p className="text-gray-600">{t('professionals.features.topRated.description')}</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 text-[#7406c7] mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t('professionals.features.proven.title')}</h3>
            <p className="text-gray-600">{t('professionals.features.proven.description')}</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}