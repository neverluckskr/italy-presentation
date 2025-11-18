import { useEffect, useState } from 'react';

export default function PrimarySectorSlide({ slide }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Агрессивная предзагрузка изображения при монтировании компонента
  useEffect(() => {
    if (slide.content?.image) {
      const imageUrl = slide.content.image;
      
      // Сразу проверяем, загружено ли изображение в кеше
      const checkCacheImmediately = () => {
        const testImg = new Image();
        testImg.onload = () => {
          setImageLoaded(true);
        };
        testImg.onerror = () => {
          // Если не в кеше, продолжаем предзагрузку
        };
        testImg.src = imageUrl;
      };
      
      // Проверяем кеш сразу
      checkCacheImmediately();
      
      // 1. Добавляем link preload (если еще нет)
      const existingLink = document.querySelector(`link[href="${imageUrl}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageUrl;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      }
      
      // 2. Создаем скрытое изображение для предзагрузки
      const preloadImg = new Image();
      preloadImg.src = imageUrl;
      preloadImg.loading = 'eager';
      preloadImg.fetchPriority = 'high';
      
      preloadImg.onload = () => {
        setImageLoaded(true);
        console.log('Image preloaded:', imageUrl);
      };
      preloadImg.onerror = () => {
        setImageError(true);
        console.error('Failed to preload image:', imageUrl);
      };
      
      // 3. Fetch для принудительной загрузки в кеш
      fetch(imageUrl, { 
        method: 'GET',
        cache: 'force-cache',
        priority: 'high'
      })
      .then(() => {
        checkCacheImmediately();
      })
      .catch(() => {
        checkCacheImmediately();
      });
    }
  }, [slide.content?.image]);

  const sectorIcons = [
    // Видобувна промисловість - Cube/Stone
    <svg key="mining" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>,
    // Сільське господарство - Sparkles/Plant growth
    <svg key="agriculture" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>,
    // Експорт - Arrow up/Export
    <svg key="export" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>,
  ];

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <h2 
        className="text-center text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-1.5 xs:mb-2 sm:mb-2.5 md:mb-3 flex-shrink-0"
        style={{
          background: 'linear-gradient(90deg, #009246 0%, #ffffff 50%, #CE2B37 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'italianFlagGradient 4s ease-in-out infinite',
        }}
      >
        {slide.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 flex-1 min-h-0">
        <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5 justify-center min-h-0" style={{ marginTop: '1rem', paddingTop: '0.5rem' }}>
          {/* Видобувна промисловість */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.08)',
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255, 255, 255, 0.12), inset 0 0 40px rgba(0, 146, 70, 0.12)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.6) 0%, rgba(25, 25, 40, 0.7) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.08)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)';
              }}
            >
              {/* Inner gradient overlay on hover */}
              <div
                className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.08) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(0, 146, 70, 0.08) 40%, rgba(255, 255, 255, 0.06) 60%, rgba(206, 43, 55, 0.08) 80%, rgba(0, 146, 70, 0.08) 100%)',
                  backgroundSize: '400% 100%',
                  animation: 'italianFlagGradient 5s ease-in-out infinite',
                }}
              />
              <div className="relative z-10">
                <h3 
                  className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-1 xs:mb-1.5 sm:mb-2 flex items-center gap-1 xs:gap-1.5"
                  style={{
                    color: '#009246',
                    textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                  }}
                >
                  {sectorIcons[0]}
                  Видобувна промисловість
                </h3>
                <p className="text-white text-xs xs:text-sm sm:text-base mb-1 xs:mb-1 leading-relaxed" style={{ lineHeight: '1.4' }}>{slide.content.mining[0]}</p>
                <ul className="text-white text-xs xs:text-sm sm:text-base list-none space-y-0.5 xs:space-y-1">
                  {slide.content.mining.slice(1).map((item, index) => (
                    <li key={index} className="pl-3 xs:pl-4 sm:pl-5 py-0.5 xs:py-0.5 relative break-words leading-tight flex items-start gap-1">
                      <span 
                        className="absolute left-0 top-1 w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-white flex-shrink-0 mt-0.5" 
                        style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} 
                      />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Сільське господарство */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.08)',
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255, 255, 255, 0.12), inset 0 0 40px rgba(0, 146, 70, 0.12)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.6) 0%, rgba(25, 25, 40, 0.7) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.08)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)';
              }}
            >
              {/* Inner gradient overlay on hover */}
              <div
                className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.08) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(0, 146, 70, 0.08) 40%, rgba(255, 255, 255, 0.06) 60%, rgba(206, 43, 55, 0.08) 80%, rgba(0, 146, 70, 0.08) 100%)',
                  backgroundSize: '400% 100%',
                  animation: 'italianFlagGradient 5s ease-in-out infinite',
                }}
              />
              <div className="relative z-10">
                <h3 
                  className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-1 xs:mb-1.5 sm:mb-2 flex items-center gap-1 xs:gap-1.5"
                  style={{
                    color: '#009246',
                    textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                  }}
                >
                  {sectorIcons[1]}
                  Сільське господарство
                </h3>
                
                <div className="mb-1 xs:mb-1.5">
                  <h4 className="text-xs xs:text-sm sm:text-base text-white mb-0.5 xs:mb-1 opacity-90" style={{ textShadow: '0 0 4px rgba(255, 255, 255, 0.3)' }}>Рослинництво:</h4>
                  <ul className="text-white text-xs xs:text-sm sm:text-base list-none space-y-0.5 xs:space-y-1">
                    {slide.content.agriculture.crops.map((crop, index) => (
                      <li key={index} className="pl-3 xs:pl-4 sm:pl-5 py-0.5 xs:py-0.5 relative break-words leading-tight flex items-start gap-1">
                        <span 
                          className="absolute left-0 top-1 w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-white flex-shrink-0 mt-0.5" 
                          style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} 
                        />
                        <span className="flex-1">{crop}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs xs:text-sm sm:text-base text-white mb-0.5 xs:mb-1 opacity-90" style={{ textShadow: '0 0 4px rgba(255, 255, 255, 0.3)' }}>Тваринництво:</h4>
                  <ul className="text-white text-xs xs:text-sm sm:text-base list-none space-y-0.5 xs:space-y-1">
                    {slide.content.agriculture.livestock.map((item, index) => (
                      <li key={index} className="pl-3 xs:pl-4 sm:pl-5 py-0.5 xs:py-0.5 relative break-words leading-tight flex items-start gap-1">
                        <span 
                          className="absolute left-0 top-1 w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-white flex-shrink-0 mt-0.5" 
                          style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} 
                        />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Експорт */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.08)',
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255, 255, 255, 0.12), inset 0 0 40px rgba(0, 146, 70, 0.12)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.6) 0%, rgba(25, 25, 40, 0.7) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.08)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)';
              }}
            >
              {/* Inner gradient overlay on hover */}
              <div
                className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.08) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(0, 146, 70, 0.08) 40%, rgba(255, 255, 255, 0.06) 60%, rgba(206, 43, 55, 0.08) 80%, rgba(0, 146, 70, 0.08) 100%)',
                  backgroundSize: '400% 100%',
                  animation: 'italianFlagGradient 5s ease-in-out infinite',
                }}
              />
              <div className="relative z-10">
                <h3 
                  className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-1 xs:mb-1.5 sm:mb-2 flex items-center gap-1 xs:gap-1.5"
                  style={{
                    color: '#009246',
                    textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                  }}
                >
                  {sectorIcons[2]}
                  Експорт
                </h3>
                <p className="text-white text-xs xs:text-sm sm:text-base leading-relaxed" style={{ lineHeight: '1.4' }}>{slide.content.export}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center w-full h-full" style={{ pointerEvents: 'none' }}>
          <div className="relative group w-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '82%' }}>
            <div 
              className="relative w-full aspect-square max-w-full overflow-hidden"
              style={{ 
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
                isolation: 'isolate',
                clipPath: 'inset(0 round 1rem)',
                pointerEvents: 'none',
              }}
            >
              {slide.content.image ? (
                <>
                  {/* Placeholder пока изображение загружается */}
                  {!imageLoaded && !imageError && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                        backdropFilter: 'blur(10px) saturate(150%)',
                        WebkitBackdropFilter: 'blur(10px) saturate(150%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          border: '3px solid rgba(255, 255, 255, 0.2)',
                          borderTopColor: 'rgba(255, 255, 255, 0.6)',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite',
                        }}
                      />
                    </div>
                  )}
                  <img
                    src={slide.content.image}
                    alt={slide.content.imageAlt}
                    className="w-full h-full object-cover"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      pointerEvents: 'none',
                      opacity: imageLoaded ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    onLoad={(e) => {
                      setImageLoaded(true);
                      e.target.style.opacity = '1';
                    }}
                    onError={(e) => {
                      setImageError(true);
                      console.error('Failed to load image:', slide.content.image);
                    }}
                  />
                </>
              ) : (
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.3) 0%, rgba(25, 25, 40, 0.4) 100%)',
                    backdropFilter: 'blur(20px) saturate(150%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                    width: '100%',
                    height: '100%',
                }}
              />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
