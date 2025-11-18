export default function NaturalConditionsSlide({ slide }) {
  return (
    <div className="w-full" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'auto' }}>
      <h2 
        className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 lg:mb-8 break-words px-2"
        style={{
          background: 'linear-gradient(90deg, #009246 0%, #ffffff 50%, #CE2B37 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'italianFlagGradient 4s ease-in-out infinite',
          filter: 'drop-shadow(0 0 15px rgba(0, 146, 70, 0.5))',
          lineHeight: '1.3',
          overflow: 'visible',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          display: 'block',
          minHeight: 'auto',
          wordBreak: 'normal',
          overflowWrap: 'break-word',
          hyphens: 'manual',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {slide.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-9 items-center" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 flex items-center gap-2" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}>
              <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l3-3m0 0l3 3m-3-3v12" />
              </svg>
              <span 
                style={{
                  color: '#009246',
                  textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                }}
              >
                Клімат
              </span>
            </h3>
            <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}>{slide.content.climate}</p>
          </div>
          
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 flex items-center gap-2" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}>
              <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span 
                style={{
                  color: '#009246',
                  textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                }}
              >
                Рельєф
              </span>
            </h3>
            <ul className="text-white text-xs xs:text-sm sm:text-base md:text-lg list-none" style={{ overflow: 'visible' }}>
              {slide.content.relief.map((item, index) => (
                <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1 relative" style={{ userSelect: 'none', WebkitUserSelect: 'none', overflow: 'visible' }}>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-white" style={{ 
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))',
                  }} />
                  <span style={{ position: 'relative', zIndex: 0 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 flex items-center gap-2" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}>
              <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span 
                style={{
                  color: '#009246',
                  textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                }}
              >
                Річки
              </span>
            </h3>
            <ul className="text-white text-xs xs:text-sm sm:text-base md:text-lg list-none" style={{ overflow: 'visible' }}>
              {slide.content.rivers.map((item, index) => (
                <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1 relative" style={{ userSelect: 'none', WebkitUserSelect: 'none', overflow: 'visible' }}>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-white" style={{ 
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))',
                  }} />
                  <span style={{ position: 'relative', zIndex: 0 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="hidden md:block relative group">
          {/* Glow border for image */}
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
