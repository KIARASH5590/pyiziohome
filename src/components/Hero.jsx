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
            <button className="btn btn-outline btn-lg">{t('hero.learnMore')}</button>
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
        .hero {
          position: relative;
          padding: 80px 0 140px; 
          background: linear-gradient(to right, #ffffff, #F0FDF4);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 24px;
          color: var(--secondary);
          line-height: 1.1;
        }
        
        .hero-title .text-secondary {
            color: var(--secondary);
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--text-muted);
          margin-bottom: 32px;
          max-width: 540px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
        }
        
        .btn-lg {
            padding: 14px 32px;
            font-size: 1.1rem;
        }

        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          height: 100%;
          min-height: 400px;
        }
        
        .image-frame {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
            aspect-ratio: 4/3; 
            max-height: 500px;
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

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
          }
          
          .hero {
            padding: 100px 0 180px;
          }
          
          .hero-title {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}
