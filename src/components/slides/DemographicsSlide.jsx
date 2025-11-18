import AnimatedNumber from '../AnimatedNumber';

export default function DemographicsSlide({ slide, isActive }) {
  const icons = [
    <svg key="doc" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    <svg key="baby" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    <svg key="death" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>,
    <svg key="trend" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
    <svg key="city" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 flex-1 min-h-0">
        <div className="flex flex-col min-h-0" style={{ marginTop: '2rem', paddingTop: '1rem' }}>
          <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-2 xs:mb-3 sm:mb-4 md:mb-5 break-words">{slide.content.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
            {slide.content.cards.map((card, index) => (
              <div key={index} className={`relative group ${card.fullWidth ? 'col-span-1 sm:col-span-2' : ''}`} style={{ overflow: 'hidden' }}>
                <div 
                  className="relative p-2 xs:p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-700 ease-out"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
                    overflow: 'hidden',
                    height: 'fit-content',
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
                  
                  <div className="relative z-10 flex items-center gap-2 xs:gap-3 mb-1 sm:mb-1.5">
                    <div className="relative flex-shrink-0" style={{ filter: 'none' }}>
                      {icons[index] || icons[0]}
                    </div>
                    <strong 
                      className="block text-xs xs:text-sm sm:text-base md:text-lg break-words"
                      style={{
                        color: '#009246',
                        textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                      }}
                    >
                      {card.label}
                    </strong>
                  </div>
                  <span className="block text-white text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl font-semibold break-words" style={{ animation: 'numberFloat 3s ease-in-out infinite' }}>
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
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-full" style={{ alignSelf: 'flex-start', marginTop: '2rem', pointerEvents: 'none' }}>
          {slide.content.image ? (
            <div 
              className="relative aspect-square overflow-hidden"
              style={{
                width: '85%',
                maxWidth: '85%',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
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
                onError={(e) => {
                  console.error('Failed to load image:', slide.content.image);
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
