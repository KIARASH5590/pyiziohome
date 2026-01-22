import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const images = [
    "/hero_physio.png",
    "/hero_sports.png",
    "/hero_back.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('hero.titleLine1')} <br />
            <span className="text-secondary">{t('hero.titleLine2')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-lg">{t('hero.findTherapist')}</button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-frame">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Physiotherapy slide ${index + 1}`}
                className={`hero-img ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider SVG */}
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F0FDF4" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <style>{`
        /* --- Mobile First Hero Styles --- */
        .hero {
          position: relative;
          padding: 60px 0 100px; 
          background: linear-gradient(to right, #ffffff, #F0FDF4);
          overflow: hidden;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Content */
        .hero-content {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .hero-title {
          /* Uses base h1 size from index.css, no override needed unless specific */
          color: var(--secondary);
          line-height: 1.15;
          margin-bottom: 8px;
        }
        
        .hero-title .text-secondary {
            color: var(--secondary);
        }

        .hero-subtitle {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        /* Actions - Mobile: Full width buttons or side-by-side flex */
        .hero-actions {
          display: flex;
          gap: 12px;
        }
        
        .btn-lg {
            padding: 12px 24px;
            font-size: 1rem;
            flex: 1; /* Equal width on mobile */
            white-space: nowrap;
        }

        /* Image Area */
        .hero-image-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .image-frame {
            position: relative;
            width: 100%;
            height: 300px; /* specific height for mobile */
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
        }

        .hero-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        
        .hero-img.active {
            opacity: 1;
            z-index: 1;
        }
        
        .hero-wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            line-height: 0;
        }

        /* --- Desktop Scaling (min-width: 992px) --- */
        @media (min-width: 992px) {
          .hero {
             padding: 100px 0 160px;
          }

          .hero-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }
          
          .hero-title {
              /* Scaling up strictly for desktop hero */
              font-size: 3.5rem; 
          }
          
          .hero-subtitle {
              font-size: 1.125rem;
              max-width: 540px;
          }

          .btn-lg {
             flex: initial; /* Auto width on desktop */
             width: auto;
             padding: 14px 32px;
             font-size: 1.1rem;
          }

          .hero-image-wrapper {
              height: 100%;
          }
          
          .image-frame {
              height: 100%;
              min-height: 500px;
              aspect-ratio: 4/3;
          }
        }
      `}</style>
    </section>
  );
}
