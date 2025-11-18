export default function ServicesDetailSlide({ slide }) {
  const sectorIcons = [
    // Фінансовий сектор - Bank/Chart
    <svg key="financial" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>,
    // Транспорт - Truck
    <svg key="transport" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>,
    // ІТ-сфера - Computer/Code
    <svg key="it" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>,
    // Результат - Chart/Bar
    <svg key="result" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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
          {/* Фінансовий сектор */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-1 xs:p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
                zIndex: 1,
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 xs:gap-2 mb-1.5 xs:mb-2 sm:mb-2.5">
                  {sectorIcons[0]}
                  <h3 
                    className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl"
                    style={{
                      color: '#009246',
                      textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                    }}
                  >
                    Фінансовий сектор
                  </h3>
                </div>
                <p className="text-white text-xs xs:text-sm sm:text-base leading-relaxed" style={{ lineHeight: '1.4' }}>{slide.content.financial}</p>
              </div>
            </div>
          </div>

          {/* Транспорт і логістика */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-1 xs:p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
                zIndex: 1,
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 xs:gap-2 mb-1.5 xs:mb-2 sm:mb-2.5">
                  {sectorIcons[1]}
                  <h3 
                    className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl"
                    style={{
                      color: '#009246',
                      textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                    }}
                  >
                    Транспорт і логістика
                  </h3>
                </div>
                <ul className="text-white text-xs xs:text-sm sm:text-base list-none space-y-1 xs:space-y-1.5">
                  {slide.content.transport.map((item, index) => (
                    <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1.5 relative break-words leading-tight flex items-start gap-1.5">
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

          {/* ІТ-сфера */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-1 xs:p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
                zIndex: 1,
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 xs:gap-2 mb-1.5 xs:mb-2 sm:mb-2.5">
                  {sectorIcons[2]}
                  <h3 
                    className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl"
                    style={{
                      color: '#009246',
                      textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                    }}
                  >
                    ІТ-сфера
                  </h3>
                </div>
                <ul className="text-white text-xs xs:text-sm sm:text-base list-none space-y-1 xs:space-y-1.5">
                  {slide.content.it.map((item, index) => (
                    <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1.5 relative break-words leading-tight flex items-start gap-1.5">
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

          {/* Результат */}
          <div className="relative group flex-shrink-0">
            <div
              className="relative p-1 xs:p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl transition-all duration-700 ease-out overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
                zIndex: 1,
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 xs:gap-2 mb-1.5 xs:mb-2 sm:mb-2.5">
                  {sectorIcons[3]}
                  <strong className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white">Результат:</strong>
                </div>
                <p className="text-white text-xs xs:text-sm sm:text-base leading-relaxed" style={{ lineHeight: '1.4' }}>{slide.content.result}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center w-full h-full" style={{ pointerEvents: 'none' }}>
          <div className="relative group w-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '82%' }}>
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
