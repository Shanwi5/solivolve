
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sun className="h-8 w-8 text-solar-yellow animate-pulse-grow" />
              <span className="ml-2 text-xl font-bold text-solar-blue">Solivolve</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-solar-blue">{t('navbar.home')}</Link>
              <Link to="/how-it-works" className="px-3 py-2 text-sm font-medium hover:text-solar-blue">{t('navbar.howItWorks')}</Link>
              <Link to="/benefits" className="px-3 py-2 text-sm font-medium hover:text-solar-blue">{t('navbar.benefits')}</Link>
              <Link to="/contact" className="px-3 py-2 text-sm font-medium hover:text-solar-blue">{t('navbar.contact')}</Link>
              <Button variant="default" className="bg-solar-blue hover:bg-solar-darkBlue text-white">
                {t('common.getStarted')}
              </Button>
              <LanguageSwitcher />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-solar-blue hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={cn("h-6 w-6", isOpen ? "hidden" : "block")} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={cn("h-6 w-6", isOpen ? "block" : "hidden")} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <Link 
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-solar-blue"
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.home')}
          </Link>
          <Link 
            to="/how-it-works"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-solar-blue"
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.howItWorks')}
          </Link>
          <Link 
            to="/benefits"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-solar-blue"
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.benefits')}
          </Link>
          <Link 
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-solar-blue"
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.contact')}
          </Link>
          <Button 
            variant="default" 
            className="w-full bg-solar-blue hover:bg-solar-darkBlue text-white mt-2"
            onClick={() => setIsOpen(false)}
          >
            {t('common.getStarted')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
