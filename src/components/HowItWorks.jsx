import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      stepNumber: "1.",
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.desc'),
      image: "/step_1.png",
      alt: "Sign up illustration"
    },
    {
      stepNumber: "2.",
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.desc'),
      image: "/step_2.png",
      alt: "Booking illustration"
    },
    {
      stepNumber: "3.",
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.desc'),
      image: "/step_3.png",
      alt: "Therapy session"
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container center-content">
        <h2 className="section-title">{t('howItWorks.title')}</h2>
        <p className="section-subtitle">{t('howItWorks.subtitle')}</p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-image-wrapper">
                <img src={step.image} alt={step.alt} className="step-image" />
              </div>
              <div className="step-content">
                <h3 className="step-title">
                  <span className="step-number">{step.stepNumber}</span> {step.title}
                </h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works {
          padding: 80px 0;
          background-color: var(--bg-off-white); 
          background: linear-gradient(to bottom, #FFFFFF, #F8FAFC);
        }
        
        .center-content {
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--secondary);
          margin-bottom: 12px;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-muted);
          margin-bottom: 60px;
          position: relative;
          display: inline-block;
        }
        
        .section-subtitle::after {
            content: '';
            display: block;
            width: 60px;
            height: 3px;
            background: #E5E7EB;
            margin: 16px auto 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .step-card {
          background: white;
          border-radius: 12px;
          padding: 40px 24px;
          box-shadow: var(--shadow-sm);
          border: 1px solid #F3F4F6;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .step-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
        }

        .step-image-wrapper {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F0F9FF; /* Fallback/bg for transparent pngs */
        }
        
        .step-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .step-title {
          font-size: 1.25rem;
          color: var(--secondary);
          margin-bottom: 12px;
          font-weight: 700;
        }

        .step-number {
          color: var(--primary); /* Green number */
          font-weight: 700;
          margin-right: 8px;
          font-size: 1.5rem;
        }

        .step-description {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 280px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
