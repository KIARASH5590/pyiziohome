import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="navbar">
      <div className="container navbar-content">
        {/* Logo */}
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 22V12H15V22" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="logo-text">Physio<span className="logo-highlight">Home</span></span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#how-it-works">{t('navbar.howItWorks')}</a>
          <a href="#therapists">{t('navbar.forTherapists')}</a>
          <a href="#about">{t('navbar.about')}</a>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button className="lang-btn" onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'TR' : 'EN'}
          </button>
          <a href="#login" className="login-link">{t('navbar.login')}</a>
          <button className="btn btn-primary">{t('navbar.signup')}</button>
        </div>
      </div>

      <style>{`
        .navbar {
          background-color: rgb(255 255 255 / 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: var(--shadow-sm);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        
        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--secondary);
        }

        .logo-highlight {
          color: var(--primary);
        }

        .nav-links {
          display: none;
        }

        .nav-links a {
          font-weight: 500;
          color: var(--text-main);
          margin: 0 16px;
          font-size: 0.95rem;
        }

        .nav-links a:hover {
          color: var(--primary);
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .login-link {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--secondary);
        }
        
        .lang-btn {
          background: none;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 4px 8px;
          cursor: pointer;
          font-weight: 600;
          color: var(--text-muted);
          transition: all 0.2s;
        }
        
        .lang-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        @media (min-width: 768px) {
          .nav-links {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
