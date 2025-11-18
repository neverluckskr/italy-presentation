
export default function SettlementSlide({ slide }) {
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 flex-1 min-h-0">
        <div className="order-2 md:order-1 flex flex-col gap-3 xs:gap-3.5 sm:gap-4 min-h-0">
          <div className="flex-shrink-0">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span 
                style={{
                  color: '#009246',
                  textShadow: '0 0 5px rgba(0, 146, 70, 0.4), 0 0 10px rgba(0, 146, 70, 0.2)',
                }}
              >
                Найбільші міста
              </span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1 xs:gap-y-1.5 sm:gap-y-2 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl list-none">
              {slide.content.cities.map((city, index) => (
                <li key={index} className="pl-4 xs:pl-5 sm:pl-6 md:pl-7 py-0.5 xs:py-1 sm:py-1.5 relative break-words leading-relaxed text-white">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-white" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 flex flex-col min-h-0">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 flex items-center gap-2 flex-shrink-0">
              <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span 
                style={{
                  color: '#009246',
                  textShadow: '0 0 5px rgba(0, 146, 70, 0.4), 0 0 10px rgba(0, 146, 70, 0.2)',
                }}
              >
                Найбільші міста за населенням
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-1.5 xs:gap-2 sm:gap-2 md:gap-2.5 flex-1 min-h-0">
              {slide.content.diaspora.map((item, index) => (
                <div key={index} className="relative group" style={{ overflow: 'hidden' }}>
                  <div 
                    className="relative p-2 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-700 ease-out h-full flex flex-col"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                      backdropFilter: 'blur(40px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
                      overflow: 'hidden',
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
                    
                    <div className="relative z-10 flex flex-col flex-1">
                      <strong 
                        className="block text-xs xs:text-sm sm:text-base md:text-lg mb-1 xs:mb-1.5 break-words"
                        style={{
                          color: '#009246',
                          textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                        }}
                      >
                        {item.city}
                      </strong>
                      <div className="text-white text-xs xs:text-sm sm:text-base md:text-lg leading-tight font-medium">
                        <span className="block opacity-90 mb-0.5">{item.peak}</span>
                        <span className="block">{item.current}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white text-xs xs:text-sm sm:text-base opacity-70 text-center mt-2 sm:mt-3 md:mt-4 px-2 sm:px-3 md:px-4 flex-shrink-0 break-words">{slide.content.note}</p>
          </div>
        </div>
        
        <div className="order-1 md:order-2 hidden md:flex items-center justify-center w-full h-full" style={{ pointerEvents: 'none' }}>
          <div className="relative w-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '85%' }}>
            <div 
              className="relative w-full aspect-square max-w-full overflow-hidden"
              style={{ 
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
                isolation: 'isolate',
                clipPath: 'inset(0 round 1rem)',
                background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.2) 0%, rgba(20, 20, 30, 0.3) 100%)',
                backdropFilter: 'blur(10px) saturate(150%)',
                WebkitBackdropFilter: 'blur(10px) saturate(150%)',
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
