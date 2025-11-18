export default function GeographySlide({ slide }) {
  return (
    <div className="w-full" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'auto' }}>
      <h2 
        className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 lg:mb-8"
        style={{
          background: 'linear-gradient(90deg, #009246 0%, #ffffff 50%, #CE2B37 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'italianFlagGradient 4s ease-in-out infinite',
          filter: 'drop-shadow(0 0 15px rgba(0, 146, 70, 0.5))',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {slide.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-9 items-center" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
        <div>
          <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-7" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}>{slide.content.description}</p>
          
          <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-7">
            <div>
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 flex items-center gap-2" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}>
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span 
                  style={{
                    color: '#009246',
                    textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                  }}
                >
                  Сусідні країни
                </span>
              </h3>
              <ul className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl columns-1 sm:columns-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 list-none" style={{ overflow: 'visible' }}>
                {slide.content.neighbors.map((country, index) => (
              <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-1.5 xs:py-2 sm:py-3 relative" style={{ userSelect: 'none', WebkitUserSelect: 'none', overflow: 'visible' }}>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-white" style={{ 
                  filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))',
                }} />
                <span style={{ position: 'relative', zIndex: 0 }}>{country}</span>
              </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 flex items-center gap-2" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}>
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span 
                  style={{
                    color: '#009246',
                    textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                  }}
                >
                  Водні ресурси
                </span>
              </h3>
            <ul className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl list-none" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
              <li className="py-1 sm:py-1.5" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}><strong>Море:</strong> {slide.content.water.sea}</li>
              <li className="py-1 sm:py-1.5" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}><strong>Основні порти:</strong> {slide.content.water.ports}</li>
              <li className="py-1 sm:py-1.5" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}><strong>Головні річки:</strong> {slide.content.water.rivers}</li>
            </ul>
            </div>
            
            {/* Glassmorphism container for transit center */}
            <div className="relative group">
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
                className="relative p-2 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-700 ease-out overflow-hidden"
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
                
                <div className="relative z-10">
                  <strong 
                    className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl block mb-1 sm:mb-2 flex items-center gap-2"
                    style={{
                      color: '#009246',
                      textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                    }}
                  >
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                      <rect x="3" y="8" width="14" height="8" rx="1" strokeWidth={2} />
                      <rect x="15" y="10" width="6" height="4" rx="0.5" strokeWidth={2} />
                      <circle cx="7" cy="18" r="2" strokeWidth={2} />
                      <circle cx="17" cy="18" r="2" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h14M15 10v4" />
                    </svg>
                    Транзитний центр Середземномор'я
                  </strong>
                  <span className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold block">Стратегічне положення в центрі Середземномор'я</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block relative group">
          {/* Glow border for map image */}
          <div
            className="absolute inset-[-3px] rounded-xl md:rounded-2xl lg:rounded-3xl opacity-5 group-hover:opacity-35 transition-all duration-700 ease-out pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.6) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.6) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.6) 100%)',
              backgroundSize: '300% 100%',
              animation: 'italianFlagGradient 4s ease-in-out infinite',
              filter: 'blur(10px)',
              zIndex: 0,
            }}
          />
          <img
            src={slide.content.image}
            alt={slide.content.imageAlt}
            className="relative w-full h-auto rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl object-cover max-h-[400px] lg:max-h-[450px]"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 255, 255, 0.08)',
              zIndex: 1,
            }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
