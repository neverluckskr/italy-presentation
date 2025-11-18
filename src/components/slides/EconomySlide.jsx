export default function EconomySlide({ slide }) {
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
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed" style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}>{slide.content.description}</p>
          
          <div>
            <h3 
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3"
              style={{
                color: '#009246',
                textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              Ключові особливості
            </h3>
            <ul className="text-white text-xs xs:text-sm sm:text-base md:text-lg list-none" style={{ overflow: 'visible' }}>
              {slide.content.features.map((feature, index) => (
                <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1 relative" style={{ userSelect: 'none', WebkitUserSelect: 'none', overflow: 'visible' }}>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full bg-white" style={{ 
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))',
                  }} />
                  <span style={{ position: 'relative', zIndex: 0 }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Glassmorphism container for warning/challenge */}
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
                <strong className="text-xs xs:text-sm sm:text-base md:text-lg block mb-0.5 sm:mb-1 flex items-center gap-2">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#FFC107', animation: 'yellowGlow 3s ease-in-out infinite' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-white">Виклик:</span>
                </strong>
                <span className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold block">{slide.content.warning}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center w-full">
          <div className="relative group w-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '85%' }}>
            <div 
              className="relative w-full max-w-full overflow-hidden"
              style={{ 
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
                isolation: 'isolate',
                clipPath: 'inset(0 round 1rem)',
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
                    minHeight: '200px',
                    aspectRatio: '4/3',
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
                    minHeight: '200px',
                    aspectRatio: '4/3',
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
