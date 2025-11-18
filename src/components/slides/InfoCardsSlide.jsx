import AnimatedNumber from '../AnimatedNumber';

export default function InfoCardsSlide({ slide, isActive }) {
  return (
    <div className="w-full">
      <h2 
        className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 xs:mb-5 sm:mb-6 md:mb-8"
        style={{
          background: 'linear-gradient(90deg, #009246 0%, #ffffff 50%, #CE2B37 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'italianFlagGradient 4s ease-in-out infinite',
          filter: 'drop-shadow(0 0 15px rgba(0, 146, 70, 0.5))',
        }}
      >
        {slide.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 items-center">
        <div className="grid gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {slide.content.cards.map((card, index) => {
            const icons = [
              <svg key="doc" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>,
              <svg key="map" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>,
              <svg key="people" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>,
              <svg key="pin" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ];
            return (
            <div key={index} className="relative group">
              {/* Animated glow border - outside the card */}
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
                className="relative p-3 xs:p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-700 ease-out overflow-hidden"
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
                  className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out pointer-events-none z-0"
                  style={{
                    background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.08) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(0, 146, 70, 0.08) 40%, rgba(255, 255, 255, 0.06) 60%, rgba(206, 43, 55, 0.08) 80%, rgba(0, 146, 70, 0.08) 100%)',
                    backgroundSize: '400% 100%',
                    animation: 'italianFlagGradient 5s ease-in-out infinite',
                  }}
                />
                
                <div className="relative z-10 flex items-center gap-2 xs:gap-3 mb-1 sm:mb-1.5">
                  <div className="relative flex-shrink-0">
                    {icons[index] || icons[0]}
                  </div>
                  <strong 
                    className="block text-xs xs:text-sm sm:text-base md:text-lg md:font-bold break-words"
                    style={{
                      color: '#009246',
                      textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                    }}
                  >
                    {card.label}
                  </strong>
                </div>
                <span className="block text-white text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-2xl md:font-extrabold lg:font-black break-words" style={{ animation: 'numberFloat 3s ease-in-out infinite' }}>
                  {card.animated && isActive ? (
                    <>
                      <AnimatedNumber value={card.value} decimals={card.value.includes('.') ? 1 : 0} isActive={isActive} />
                      {card.unit}
                    </>
                  ) : (
                    <>
                      {card.value}
                      {card.unit && ` ${card.unit}`}
                    </>
                  )}
                </span>
              </div>
            </div>
            );
          })}
        </div>
        <div className="hidden md:block relative group">
          {/* Glow border for image */}
          <div
            className="absolute inset-[-3px] rounded-xl sm:rounded-2xl md:rounded-3xl opacity-5 group-hover:opacity-35 transition-all duration-700 ease-out pointer-events-none"
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
            className="relative w-full h-auto rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[450px]"
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
