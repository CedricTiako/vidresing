import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Mail, Phone, MapPin, Camera, Bell, Lock, Shield, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { User as UserType } from '../types';

export default function Profile() {
  const { t } = useTranslation();
  const [user, setUser] = useState<UserType>({
    id: '123',
    email: 'user@example.com',
    role: 'seller',
    name: 'Alice Dubois',
    address: '75008 Paris, France',
    phone: '+33 6 12 34 56 78',
    created_at: '2024-01-01T00:00:00Z'
  });

  const [isEditing, setIsEditing] = useState(false);

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
        className="bg-white rounded-lg shadow-md p-8"
      >
        <div className="flex items-center space-x-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#7406c7] to-[#5c0599] flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <button className="absolute bottom-0 right-0 bg-[#7406c7] text-white p-2 rounded-full hover:bg-[#5c0599] transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            <p className="text-gray-600">
              {t('profile.memberSince', { 
                date: new Date(user.created_at).toLocaleDateString() 
              })}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg shadow-md p-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{t('profile.personalInfo')}</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="inline-flex items-center text-[#7406c7] font-medium hover:text-[#5c0599] transition-colors"
          >
            {isEditing ? t('profile.saveChanges') : t('profile.editProfile')}
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm text-gray-500">{t('profile.fields.email')}</p>
              {isEditing ? (
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7406c7] focus:ring focus:ring-[#7406c7] focus:ring-opacity-50"
                />
              ) : (
                <p className="mt-1">{user.email}</p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm text-gray-500">{t('profile.fields.phone')}</p>
              {isEditing ? (
                <input
                  type="tel"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7406c7] focus:ring focus:ring-[#7406c7] focus:ring-opacity-50"
                />
              ) : (
                <p className="mt-1">{user.phone}</p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm text-gray-500">{t('profile.fields.address')}</p>
              {isEditing ? (
                <input
                  type="text"
                  value={user.address}
                  onChange={(e) => setUser({ ...user, address: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7406c7] focus:ring focus:ring-[#7406c7] focus:ring-opacity-50"
                />
              ) : (
                <p className="mt-1">{user.address}</p>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg shadow-md p-8"
      >
        <h2 className="text-2xl font-semibold mb-6">{t('profile.accountSettings.title')}</h2>
        <div className="space-y-4">
          <button className="w-full flex items-center text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Lock className="w-5 h-5 mr-3 text-gray-400" />
            {t('profile.accountSettings.changePassword')}
          </button>
          <button className="w-full flex items-center text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Bell className="w-5 h-5 mr-3 text-gray-400" />
            {t('profile.accountSettings.notifications')}
          </button>
          <button className="w-full flex items-center text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Shield className="w-5 h-5 mr-3 text-gray-400" />
            {t('profile.accountSettings.privacy')}
          </button>
          <button className="w-full flex items-center text-left px-4 py-3 text-red-500 rounded-lg hover:bg-red-50 transition-colors">
            <Trash2 className="w-5 h-5 mr-3" />
            {t('profile.accountSettings.deleteAccount')}
          </button>
        </div>
      </motion.section>
    </motion.div>
  );
}