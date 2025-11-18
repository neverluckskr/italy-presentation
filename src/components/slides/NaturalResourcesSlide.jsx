export default function NaturalResourcesSlide({ slide }) {
  return (
    <div className="w-full h-full flex flex-col min-h-0" style={{ padding: '0 15px' }}>
      <h2 
        className="text-center text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 flex-shrink-0"
        style={{
          background: 'linear-gradient(90deg, #009246 0%, #ffffff 50%, #CE2B37 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'italianFlagGradient 4s ease-in-out infinite',
          filter: 'drop-shadow(0 0 10px rgba(0, 146, 70, 0.4))',
        }}
      >
        {slide.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1.25fr] gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 flex-1 min-h-0" style={{ alignItems: 'stretch' }}>
        {/* Square image on the left */}
        <div className="order-1 hidden md:flex items-center justify-center w-full" style={{ paddingLeft: '10px', paddingRight: '5px', alignSelf: 'center', marginTop: '-111px', pointerEvents: 'none' }}>
          <div className="relative group w-full flex items-center justify-center" style={{ isolation: 'isolate' }}>
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
            </div>
          </div>
        </div>
        
        <div className="order-2 flex flex-col gap-2 xs:gap-2.5 sm:gap-3 min-h-0 flex-1">
          {/* Text sections - centered between title and recreational window */}
          <div className="flex-1 flex flex-col justify-center gap-1 xs:gap-1.5 sm:gap-2 min-h-0" style={{ paddingLeft: '15px', paddingRight: '10px' }}>
            <div className="min-w-0 min-h-0 flex flex-col">
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-0.5 xs:mb-1 sm:mb-1.5 flex-shrink-0 flex items-center gap-2">
                <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span 
                  className="break-words"
                  style={{
                    color: '#009246',
                    textShadow: '0 0 5px rgba(0, 146, 70, 0.4), 0 0 10px rgba(0, 146, 70, 0.2)',
                  }}
                >
                  Мінеральні ресурси
                </span>
              </h3>
              <ul className="text-white text-xs xs:text-sm sm:text-base md:text-lg list-none" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {slide.content.mineral.map((item, index) => (
                  <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1 relative break-words leading-relaxed" style={{ position: 'relative', listStyle: 'none' }}>
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-white" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="min-w-0 min-h-0 flex flex-col">
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-0.5 xs:mb-1 sm:mb-1.5 flex-shrink-0 flex items-center gap-2">
                <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span 
                  className="break-words"
                  style={{
                    color: '#009246',
                    textShadow: '0 0 5px rgba(0, 146, 70, 0.4), 0 0 10px rgba(0, 146, 70, 0.2)',
                  }}
                >
                  Лісові ресурси
                </span>
              </h3>
              <ul className="text-white text-xs xs:text-sm sm:text-base md:text-lg list-none" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {slide.content.forest.map((item, index) => (
                  <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1 relative break-words leading-relaxed" style={{ position: 'relative', listStyle: 'none' }}>
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-white" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="min-w-0 min-h-0 flex flex-col">
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-0.5 xs:mb-1 sm:mb-1.5 flex-shrink-0 flex items-center gap-2">
                <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span 
                  className="break-words"
                  style={{
                    color: '#009246',
                    textShadow: '0 0 5px rgba(0, 146, 70, 0.4), 0 0 10px rgba(0, 146, 70, 0.2)',
                  }}
                >
                  Земельні ресурси
                </span>
              </h3>
              <ul className="text-white text-xs xs:text-sm sm:text-base md:text-lg list-none" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {slide.content.land.map((item, index) => (
                  <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1 relative break-words leading-relaxed" style={{ position: 'relative', listStyle: 'none' }}>
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-white" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Glassmorphism container for recreational resources */}
          <div className="relative group flex-shrink-0">
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
              className="relative p-2 xs:p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl transition-all duration-700 ease-out overflow-hidden flex flex-col"
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
              
              <div className="relative z-10 flex flex-col">
                <strong className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl block mb-1 xs:mb-1.5 sm:mb-2 flex-shrink-0 flex items-center gap-1.5 xs:gap-2">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4" />
                  </svg>
                  <span 
                    className="break-words"
                    style={{
                      color: '#009246',
                      textShadow: '0 0 5px rgba(0, 146, 70, 0.4), 0 0 10px rgba(0, 146, 70, 0.2)',
                    }}
                  >
                    Рекреаційні ресурси
                  </span>
                </strong>
                <span className="text-white text-xs xs:text-sm sm:text-base md:text-lg break-words block leading-relaxed">{slide.content.recreational}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
