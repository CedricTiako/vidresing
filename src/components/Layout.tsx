import { Link, Outlet } from 'react-router-dom';
import { ShoppingBag, User as UserIcon, Menu } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="w-8 h-8 text-[#7406c7]" />
            <span className="text-xl font-semibold text-gray-900">Vidressing</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/collections" className="text-gray-700 hover:text-[#7406c7]">
              {t('nav.collections')}
            </Link>
            <Link to="/professionals" className="text-gray-700 hover:text-[#7406c7]">
              {t('nav.professionals')}
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-[#7406c7]">
              <UserIcon className="w-6 h-6" />
            </Link>
            <LanguageSwitcher />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link 
                to="/collections" 
                className="block py-2 text-gray-700 hover:text-[#7406c7]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.collections')}
              </Link>
              <Link 
                to="/professionals" 
                className="block py-2 text-gray-700 hover:text-[#7406c7]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.professionals')}
              </Link>
              <Link 
                to="/profile" 
                className="block py-2 text-gray-700 hover:text-[#7406c7]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.profile')}
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('footer.about.title')}</h3>
              <p className="mt-4 text-gray-600">
                {t('footer.about.description')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('footer.quickLinks.title')}</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-[#7406c7]">
                    {t('footer.quickLinks.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-[#7406c7]">
                    {t('footer.quickLinks.contact')}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-[#7406c7]">
                    {t('footer.quickLinks.privacy')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t('footer.contact.title')}</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600">{t('footer.contact.email')}</li>
                <li className="text-gray-600">{t('footer.contact.phone')}</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </div>
        </div>
      </footer>
    </div>
  );
}