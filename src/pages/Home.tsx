import { Link } from 'react-router-dom';
import { ShoppingBag, Shield, Truck, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-16">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#7406c7] to-[#5c0599] opacity-90 rounded-2xl" />
        <div 
          className="relative h-[500px] rounded-2xl bg-cover bg-center flex items-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg")'
          }}
        >
          <div className="max-w-2xl mx-auto text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {t('home.hero.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-white mb-8"
            >
              {t('home.hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                to="/collections/new"
                className="inline-flex items-center bg-white text-[#7406c7] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t('home.howItWorks.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-[#7406c7] bg-opacity-10 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
              <ShoppingBag className="w-8 h-8 text-[#7406c7]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('home.howItWorks.steps.collection.title')}</h3>
            <p className="text-gray-600">
              {t('home.howItWorks.steps.collection.description')}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-[#7406c7] bg-opacity-10 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-[#7406c7]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('home.howItWorks.steps.valuation.title')}</h3>
            <p className="text-gray-600">
              {t('home.howItWorks.steps.valuation.description')}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-[#7406c7] bg-opacity-10 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
              <Truck className="w-8 h-8 text-[#7406c7]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{t('home.howItWorks.steps.sale.title')}</h3>
            <p className="text-gray-600">
              {t('home.howItWorks.steps.sale.description')}
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('home.why.title')}</h2>
          <p className="text-gray-600 mb-8">
            {t('home.why.description')}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center text-[#7406c7] font-semibold hover:text-[#5c0599] transition-colors"
          >
            {t('home.why.learnMore')}
          </Link>
        </div>
      </motion.section>
    </div>
  );
}