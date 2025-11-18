export default function SecondarySectorSlide({ slide }) {
  const industryIcons = [
    // Автомобілебудування - Car
    <svg key="automotive" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>,
    // Модна індустрія - Sparkles/Fashion
    <svg key="fashion" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>,
    // Хімічна - Beaker/Flask
    <svg key="chemical" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.57.393A9.065 9.065 0 0021.75 12a9.065 9.065 0 00-2.077-.609M19.8 15.3l-1.344 1.344a1.125 1.125 0 01-1.591-1.591l1.344-1.344m-4.621 4.621a1.125 1.125 0 01-1.591 0l-1.344-1.344m4.621-4.621l-5.379-5.379a1.125 1.125 0 00-1.591 0L5 14.5m14.8.8v.568a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 0114.25 15.5v-1.086m-9 0V9.75m0 0a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v.75m0 0v.568a2.25 2.25 0 002.25 2.25h4.5A2.25 2.25 0 0014.25 9.75v-1.086" />
    </svg>,
    // Металургія - Cog/Gear
    <svg key="metallurgy" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    // Харчова - Cake/Food
    <svg key="food" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0l-1.5-.75m15 0v-2.628A3.131 3.131 0 0119.5 15.75m-15 0v2.628a3.131 3.131 0 003.75 2.622m15-3a3.131 3.131 0 003.75 2.622m-15 0a3.131 3.131 0 01-3.75-2.622m15 3v-1.5a3.131 3.131 0 00-3.75-2.622m-15 3c.19 1.106.49 2.16.897 3.142" />
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 flex-1 min-h-0">
        <div className="flex flex-col gap-2 xs:gap-2.5 sm:gap-3 justify-center min-h-0">
          {/* Опис */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 15px 45px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 0 rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.45) 0%, rgba(20, 20, 30, 0.55) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)';
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
                <p className="text-white text-xs xs:text-sm sm:text-base leading-relaxed" style={{ lineHeight: '1.4' }}>{slide.content.description}</p>
              </div>
            </div>
          </div>

          {/* Основні галузі */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 15px 45px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 0 rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.45) 0%, rgba(20, 20, 30, 0.55) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)';
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
                  className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-1.5 xs:mb-2 sm:mb-2.5 flex items-center gap-1.5 xs:gap-2"
                  style={{
                    color: '#009246',
                    textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                  }}
                >
                  Основні галузі
                </h3>
                <ul className="text-white text-xs xs:text-sm sm:text-base list-none space-y-1 xs:space-y-1.5">
                  {slide.content.industries.map((industry, index) => {
                    const parts = industry.split(':');
                    return (
                      <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1.5 relative break-words leading-tight flex items-start gap-1.5">
                        <span 
                          className="absolute left-0 top-1.5 w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full bg-white flex-shrink-0 mt-0.5" 
                          style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} 
                        />
                        <div className="flex items-start gap-1.5 xs:gap-2 flex-1">
                          {industryIcons[index] && (
                            <span className="flex-shrink-0 mt-0.5">
                              {industryIcons[index]}
                            </span>
                          )}
                          <div className="flex-1">
                            <strong className="block">{parts[0]}:</strong>
                            <span className="block opacity-90" style={{ marginTop: '0.125rem' }}>{parts[1]}</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Примітка про ВВП */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 15px 45px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 0 rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.45) 0%, rgba(20, 20, 30, 0.55) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)';
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
                <p className="text-white text-xs xs:text-sm sm:text-base opacity-90 leading-relaxed flex items-center gap-1.5" style={{ lineHeight: '1.4' }}>
                  <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  {slide.content.note}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center w-full h-full">
          <div className="relative group w-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '82%' }}>
            <div 
              className="relative w-full aspect-square max-w-full overflow-hidden"
              style={{ 
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
                isolation: 'isolate',
                clipPath: 'inset(0 round 1rem)',
              }}
            >
              <img
                src={slide.content.image}
                alt={slide.content.imageAlt}
                className="w-full h-full object-cover"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
