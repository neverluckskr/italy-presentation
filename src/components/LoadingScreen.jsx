import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Симуляция загрузки в течение 3 секунд
    const duration = 3000; // 3 секунды
    const interval = 30; // обновление каждые 30мс
    const increment = 100 / (duration / interval);
    
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(progressInterval);
        
        // Плавное исчезновение после завершения загрузки
        setTimeout(() => {
          setIsVisible(false);
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, interval);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{
        background: '#0e0e10',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.5s ease, visibility 0.5s ease',
      }}
      role="status"
      aria-label="Завантаження презентації"
      aria-live="polite"
    >
      {/* Круговая анимация загрузки */}
      <div 
        className="loading-spinner-container mb-6"
        style={{
          width: '64px',
          height: '64px',
          position: 'relative',
        }}
        aria-hidden="true"
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className="loading-spinner-svg"
        >
          {/* Фоновый круг */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(176, 176, 176, 0.1)"
            strokeWidth="2"
          />
          
          {/* Вращающийся круг зеленого цвета */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#009246"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="50 150"
            className="loading-circle-stroke"
          />
        </svg>
      </div>
      
      {/* Текст загрузки */}
      <p 
        className="mb-6"
        style={{
          fontSize: '16px',
          fontWeight: '300',
          color: '#b0b0b0',
          letterSpacing: '0.5px',
        }}
      >
        Завантаження презентації…
      </p>
      
      {/* Полоса прогресса под текстом */}
      <div 
        style={{
          width: '300px',
          height: '3px',
          background: 'rgba(176, 176, 176, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`Прогрес завантаження: ${Math.round(progress)}%`}
      >
        <div
          className="loading-progress-fill"
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #009246 0%, #ffffff 33%, #CE2B37 66%, #009246 100%)',
            backgroundSize: '300% 100%',
            borderRadius: '2px',
            transition: 'width 0.03s linear',
            animation: 'italianFlagGradient 3s ease-in-out infinite',
          }}
        />
      </div>
      
      <style>{`
        .loading-spinner-svg {
          animation: spin 1.5s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes italianFlagGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
