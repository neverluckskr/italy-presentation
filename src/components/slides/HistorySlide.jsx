export default function HistorySlide({ slide }) {
  const periodIcons = [
    // Античність та Римська імперія - Shield/Roman symbol
    <svg key="antiquity" className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // Середньовіччя та Ренесанс - Palette/art
    <svg key="renaissance" className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>,
    // Об'єднання та сучасність - Flag/unification
    <svg key="unification" className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
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
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 flex-1 min-h-0">
        <div className="order-2 md:order-1 flex flex-col gap-2 xs:gap-2.5 sm:gap-3 justify-center min-h-0">
          {slide.content.periods.map((period, index) => (
            <div key={index} className="relative group flex-shrink-0">
              {/* Animated glow border */}
              <div
                className="absolute inset-[-2px] rounded-lg sm:rounded-xl opacity-5 group-hover:opacity-30 transition-all duration-700 ease-out pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.6) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.6) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.6) 100%)',
                  backgroundSize: '300% 100%',
                  animation: 'italianFlagGradient 4s ease-in-out infinite',
                  filter: 'blur(8px)',
                  zIndex: 0,
                }}
              />
              
              <div 
                className="relative p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
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
                    {periodIcons[index] || periodIcons[0]}
                    {period.title}
                  </h3>
                  <ul className="text-white text-xs xs:text-sm sm:text-base list-none space-y-1 xs:space-y-1.5">
                    {period.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1.5 relative break-words leading-tight flex items-start gap-1.5">
                        <span 
                          className="absolute left-0 top-1.5 w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full bg-white flex-shrink-0 mt-0.5" 
                          style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} 
                        />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
              ))}
        </div>
        
        <div className="order-1 md:order-2 hidden md:flex items-center justify-center w-full h-full" style={{ pointerEvents: 'none' }}>
          <div className="relative group w-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '82%' }}>
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
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl"
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
    </div>
  );
}
