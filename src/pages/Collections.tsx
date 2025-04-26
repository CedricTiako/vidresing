import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Clock, CheckCircle, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Collection } from '../types';

export default function Collections() {
  const { t } = useTranslation();
  const [collections, setCollections] = useState<Collection[]>([
    {
      id: '1',
      user_id: '123',
      status: 'pending',
      location: 'Paris, France',
      items: [
        {
          id: '1',
          collection_id: '1',
          brand: 'Louis Vuitton',
          category: 'Bags',
          description: 'Neverfull MM Monogram',
          estimated_price: 800,
          status: 'pending',
          images: ['https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg']
        },
        {
          id: '2',
          collection_id: '1',
          brand: 'Chanel',
          category: 'Accessories',
          description: 'Classic Belt',
          estimated_price: 500,
          status: 'pending',
          images: ['https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg']
        }
      ],
      created_at: '2024-02-15T10:00:00Z'
    }
  ]);

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
        <h1 className="text-4xl font-bold mb-4">{t('collections.title')}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('collections.subtitle')}
        </p>
      </motion.section>

      <section className="grid grid-cols-1 gap-8">
        {collections.map((collection, index) => (
          <motion.div 
            key={collection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold">
                  {t('collections.collection.id', { id: collection.id })}
                </h3>
                <p className="text-gray-600">{collection.location}</p>
              </div>
              <div className="flex items-center">
                {collection.status === 'pending' && (
                  <span className="flex items-center text-orange-500">
                    <Clock className="w-5 h-5 mr-2" />
                    {t('collections.status.pending')}
                  </span>
                )}
                {collection.status === 'estimated' && (
                  <span className="flex items-center text-blue-500">
                    <Package className="w-5 h-5 mr-2" />
                    {t('collections.status.estimated')}
                  </span>
                )}
                {collection.status === 'completed' && (
                  <span className="flex items-center text-green-500">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {t('collections.status.completed')}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collection.items.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className="flex space-x-4 bg-gray-50 p-4 rounded-lg"
                >
                  <div className="w-32 h-32">
                    <img
                      src={item.images[0]}
                      alt={item.description}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.brand}</h4>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-[#7406c7] font-semibold mt-2">
                      {t('collections.collection.estimated', { price: item.estimated_price })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center"
      >
        <button className="inline-flex items-center bg-[#7406c7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5c0599] transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          {t('collections.newCollection')}
        </button>
      </motion.section>
    </motion.div>
  );
}