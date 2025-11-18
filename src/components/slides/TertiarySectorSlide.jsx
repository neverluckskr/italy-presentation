export default function TertiarySectorSlide({ slide }) {
  const serviceIcons = [
    // Туризм - Globe/Location
    <svg key="tourism" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36l.055.65a8 8 0 017.832 4.535l1.13 2.7a1.125 1.125 0 01-.582 1.498l-.17.057a1.5 1.5 0 01-1.531-.468l-1.004-1.557a2.376 2.376 0 00-1.369-.771l-.45-.134a2.5 2.5 0 01-2.26-2.25l-.007-.067a3.125 3.125 0 00-3.195-3.06l-1.887-.002a2.25 2.25 0 00-2.153 1.348l-.498.748a2.25 2.25 0 01-1.424 1.05l-1.712.282a.375.375 0 01-.282-.45l.113-.442a2.25 2.25 0 00.518-1.661l2.562-1.683a2.25 2.25 0 00-1.423-1.423l-1.684-2.562a2.25 2.25 0 00-1.661-.518l-.442.113a.375.375 0 01-.45-.282l-.282-1.712a2.25 2.25 0 011.05-1.424l.748-.498a2.25 2.25 0 011.348-2.153l1.887-.002z" />
    </svg>,
    // Банківська справа - Building/Chart
    <svg key="banking" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>,
    // Торгівля - Shopping bag
    <svg key="trade" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>,
    // Транспорт - Truck
    <svg key="transport" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>,
    // Освіта - Academic cap
    <svg key="education" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 4.193a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443a55.381 55.381 0 0 1 5.25 2.882V15" />
    </svg>,
    // Охорона здоров'я - Heart/Medical
    <svg key="healthcare" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>,
    // Мода - Sparkles
    <svg key="fashion" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>,
    // Державне управління - Building/Government
    <svg key="government" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
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
        <div className="order-1 hidden md:flex items-center justify-center w-full h-full">
          <div className="relative group w-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '82%' }}>
            <div 
              className="relative w-full aspect-square max-w-full overflow-hidden"
              style={{ 
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
                isolation: 'isolate',
                clipPath: 'inset(0 round 1rem)',
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
                }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
        
        <div className="order-2 flex flex-col gap-2 xs:gap-2.5 sm:gap-3 justify-center min-h-0">
          {/* Опис */}
          <div className="relative group flex-shrink-0">
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
                <p className="text-white text-xs xs:text-sm sm:text-base leading-relaxed" style={{ lineHeight: '1.4' }}>{slide.content.description}</p>
              </div>
            </div>
          </div>

          {/* Основні напрями */}
          <div className="relative group flex-shrink-0">
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
                  Основні напрями
                </h3>
                <ul className="text-white text-xs xs:text-sm sm:text-base list-none space-y-1 xs:space-y-1.5">
                  {slide.content.services.map((service, index) => (
                    <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 sm:py-1.5 relative break-words leading-tight flex items-start gap-1.5">
                      <span 
                        className="absolute left-0 top-1.5 w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full bg-white flex-shrink-0 mt-0.5" 
                        style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} 
                      />
                      <div className="flex items-start gap-1.5 xs:gap-2 flex-1">
                        {serviceIcons[index] && (
                          <span className="flex-shrink-0 mt-0.5">
                            {serviceIcons[index]}
                          </span>
                        )}
                        <span className="flex-1">{service}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Примітка про туризм */}
          <div className="relative group flex-shrink-0">
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
                <p className="text-white text-xs xs:text-sm sm:text-base opacity-90 leading-relaxed flex items-center gap-1.5" style={{ lineHeight: '1.4' }}>
                  <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  {slide.content.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
