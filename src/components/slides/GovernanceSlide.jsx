import AnimatedNumber from '../AnimatedNumber';

export default function GovernanceSlide({ slide, isActive }) {
  if (slide.type === 'structure') {
    const listIcons = [
      <svg key="decentralized" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      <svg key="autonomy" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>,
      <svg key="powers" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      <svg key="constitution" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>,
    ];

    const divisionIcons = [
      <svg key="region" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      <svg key="province" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>,
      <svg key="comuni" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>,
    ];

    const listItems = [
      'Децентралізована система управління',
      'Регіони мають широку автономію',
      'Адміністративні одиниці мають власні повноваження',
      'Єдина конституція з регіональними особливостями',
    ];

    return (
      <div className="w-full h-full flex flex-col min-h-0">
        <h2 
          className="text-center text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 flex-shrink-0"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 flex-1">
          <div className="flex flex-col gap-3 xs:gap-3.5 sm:gap-4" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <div className="relative group flex-shrink-0">
              <div 
                className="relative p-3 xs:p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl text-center transition-all duration-700 ease-out"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.5) 0%, rgba(20, 20, 30, 0.6) 100%)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.12), inset 0 0 25px rgba(0, 146, 70, 0.08)',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255, 255, 255, 0.15), inset 0 0 35px rgba(0, 146, 70, 0.12)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.6) 0%, rgba(20, 20, 30, 0.7) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.12), inset 0 0 25px rgba(0, 146, 70, 0.08)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.5) 0%, rgba(20, 20, 30, 0.6) 100%)';
                }}
              >
                {/* Inner animated glow border */}
                <div
                  className="absolute inset-[1px] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-800 ease-in-out pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.4) 0%, rgba(255, 255, 255, 0.3) 25%, rgba(0, 146, 70, 0.4) 50%, rgba(255, 255, 255, 0.3) 75%, rgba(206, 43, 55, 0.4) 100%)',
                    backgroundSize: '300% 100%',
                    animation: 'italianFlagGradient 5s ease-in-out infinite',
                    filter: 'blur(3px)',
                    zIndex: 0,
                    borderRadius: '0.75rem',
                  }}
                />
                
                <div className="relative z-10">
                  <strong 
                    className="block text-xs xs:text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2"
                    style={{
                      color: '#009246',
                      textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                    }}
                  >
                    Форма державного устрою
                  </strong>
                  <span className="block text-white text-base xs:text-lg sm:text-xl md:text-2xl font-bold">
                    {slide.content.form}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <h3 
                className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 flex items-center gap-2"
                style={{
                  color: '#009246',
                  textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                }}
              >
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Що таке регіональна держава?
              </h3>
              <ul className="text-white text-xs xs:text-sm sm:text-base md:text-lg list-none space-y-1 xs:space-y-1.5">
                {listItems.map((item, index) => (
                  <li key={index} className="pl-4 xs:pl-5 sm:pl-6 md:pl-7 py-0.5 xs:py-1 sm:py-1.5 relative break-words leading-relaxed flex items-start gap-2">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-white flex-shrink-0 mt-1" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-shrink-0">
              <h3 
                className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 flex items-center gap-2 flex-shrink-0"
                style={{
                  color: '#009246',
                  textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                }}
              >
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Адміністративний поділ
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-3.5 sm:gap-4">
                {slide.content.divisions.map((div, index) => (
                  <div key={index} className="relative group">
                    {/* Animated glow border */}
                    <div
                      className="absolute inset-[-2px] rounded-xl sm:rounded-2xl opacity-5 group-hover:opacity-30 transition-all duration-700 ease-out pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.6) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.6) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.6) 100%)',
                        backgroundSize: '300% 100%',
                        animation: 'italianFlagGradient 4s ease-in-out infinite',
                        filter: 'blur(8px)',
                        zIndex: 0,
                      }}
                    />
                    
                    <div 
                      className="relative p-3 xs:p-4 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-700 ease-out overflow-hidden flex flex-col items-center text-center"
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
                        className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out pointer-events-none z-0"
                        style={{
                          background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.08) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(0, 146, 70, 0.08) 40%, rgba(255, 255, 255, 0.06) 60%, rgba(206, 43, 55, 0.08) 80%, rgba(0, 146, 70, 0.08) 100%)',
                          backgroundSize: '400% 100%',
                          animation: 'italianFlagGradient 5s ease-in-out infinite',
                        }}
                      />
                      
                      <div className="relative z-10 flex flex-col items-center w-full gap-2 xs:gap-2.5">
                        <div className="mb-1" style={{ filter: 'none' }}>
                          {divisionIcons[index] || divisionIcons[0]}
                        </div>
                        <strong 
                          className="block text-sm xs:text-base sm:text-lg md:text-xl break-words"
                          style={{
                            color: '#009246',
                            textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                          }}
                        >
                          {div.name}
                        </strong>
                        <span className="block text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                          {div.animated && isActive ? (
                            <AnimatedNumber value={div.count} decimals={0} isActive={isActive} />
                          ) : (
                            div.count.toLocaleString()
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center w-full" style={{ pointerEvents: 'none', alignSelf: 'center' }}>
            <div className="relative group w-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '82%' }}>
              <div 
                className="relative w-full max-w-full overflow-hidden"
                style={{ 
                  borderRadius: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
                  isolation: 'isolate',
                  clipPath: 'inset(0 round 1rem)',
                  minHeight: '200px',
                  aspectRatio: '4/3',
                  pointerEvents: 'none',
                }}
              >
                {slide.content.image ? (
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
                    }}
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : (
                  <div
                    style={{
                      background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.2) 0%, rgba(20, 20, 30, 0.3) 100%)',
                      backdropFilter: 'blur(10px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(10px) saturate(150%)',
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

  const icons = [
    <svg key="government" className="flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
    <svg key="president" className="flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    <svg key="executive" className="flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    <svg key="chamber" className="flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    <svg key="senate" className="flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px', color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
    </svg>
  ];

  const cards = [
    {
      icon: icons[0],
      label: 'Форма правління',
      value: slide.content.form,
      description: 'Парламентська система з розподілом влади між президентом, урядом та парламентом.',
      fullWidth: true,
    },
    {
      icon: icons[1],
      label: 'Глава держави',
      value: `Президент — ${slide.content.president}`,
      fullWidth: false,
    },
    {
      icon: icons[2],
      label: 'Виконавча влада',
      value: 'Уряд на чолі з прем\'єр-міністром.',
      fullWidth: false,
    },
    {
      icon: icons[3],
      label: 'Палата депутатів',
      value: slide.content.sejm,
      fullWidth: false,
    },
    {
      icon: icons[4],
      label: 'Сенат',
      value: slide.content.senate,
      fullWidth: false,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <h2 
        className="text-center text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 flex-shrink-0"
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 flex-1 min-h-0">
        <div className="flex flex-col items-center justify-center min-h-0" style={{ gap: '20px' }}>
          {cards.map((card, index) => (
            <div key={index} className="relative group w-full" style={{ overflow: 'hidden', maxWidth: '520px' }}>
              <div 
                className="relative rounded-xl sm:rounded-2xl transition-all duration-700 ease-out flex flex-col"
                style={{
                  padding: '20px 24px',
                  width: '100%',
                  height: 'auto',
                  boxSizing: 'border-box',
                  background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
                  overflow: 'visible',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.1)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.45) 0%, rgba(20, 20, 30, 0.55) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)';
                  }}
                >
                  {/* Inner animated glow border - всередині картки */}
                  <div
                    className="absolute inset-[1px] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-out pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.4) 0%, rgba(255, 255, 255, 0.3) 25%, rgba(0, 146, 70, 0.4) 50%, rgba(255, 255, 255, 0.3) 75%, rgba(206, 43, 55, 0.4) 100%)',
                      backgroundSize: '300% 100%',
                      animation: 'italianFlagGradient 4s ease-in-out infinite',
                      filter: 'blur(2px)',
                      zIndex: 0,
                      borderRadius: '0.75rem',
                    }}
                  />
                  
                  {/* Inner gradient overlay on hover */}
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out pointer-events-none z-0"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.08) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(0, 146, 70, 0.08) 40%, rgba(255, 255, 255, 0.06) 60%, rgba(206, 43, 55, 0.08) 80%, rgba(0, 146, 70, 0.08) 100%)',
                      backgroundSize: '400% 100%',
                      animation: 'italianFlagGradient 5s ease-in-out infinite',
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col">
                    <div className="flex items-center" style={{ gap: '12px', marginBottom: '10px' }}>
                      <div className="relative flex-shrink-0" style={{ filter: 'none' }}>
                        {card.icon}
                      </div>
                      <strong 
                        className="block break-words"
                        style={{
                          fontSize: '1.1rem',
                          lineHeight: '1.3',
                          color: '#009246',
                          textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                        }}
                      >
                        {card.label}
                      </strong>
                    </div>
                    <div className="text-white font-semibold break-words" style={{ fontSize: '1.05rem', lineHeight: '1.4', margin: 0 }}>
                      {card.value}
                    </div>
                    {card.description && (
                      <p className="text-white opacity-90 mt-3 break-words" style={{ fontSize: '0.95rem', lineHeight: '1.4', margin: 0 }}>
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        
               <div className="hidden md:flex items-center justify-center relative" style={{ pointerEvents: 'none' }}>
                 <div 
                   className="relative w-full max-w-full overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10"
                   style={{
                     boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
                     minHeight: '280px',
                     aspectRatio: '4/3',
                     pointerEvents: 'none',
                   }}
                 >
                   {slide.content.image ? (
                     <img
                       src={slide.content.image}
                       alt={slide.content.imageAlt}
                       className="w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-3xl"
                       style={{
                         display: 'block',
                         width: '100%',
                         height: '100%',
                         objectFit: 'cover',
                         pointerEvents: 'none',
                       }}
                       loading="eager"
                       fetchPriority="high"
                     />
                   ) : (
                     <div
                       style={{
                         background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.2) 0%, rgba(20, 20, 30, 0.3) 100%)',
                         backdropFilter: 'blur(10px) saturate(150%)',
                         WebkitBackdropFilter: 'blur(10px) saturate(150%)',
                         width: '100%',
                         height: '100%',
                         borderRadius: '0.75rem',
                       }}
                     />
                   )}
                 </div>
               </div>
      </div>
    </div>
  );
}
