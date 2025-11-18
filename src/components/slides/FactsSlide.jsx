export default function FactsSlide({ slide }) {
  const categoryIcons = [
    // Історичні факти - Scroll/History
    <svg key="historical" className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>,
    // Культурні та наукові факти - Light bulb/Star
    <svg key="cultural" className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>,
    // Географічні факти - Mountain/Globe
    <svg key="geographical" className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Соціальні факти - Users/People
    <svg key="social" className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'white', animation: 'whiteGlow 3s ease-in-out infinite' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>,
  ];

  const FactCard = ({ icon, title, facts }) => (
    <div className="relative group h-full">
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
        className="relative h-full p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl transition-all duration-700 ease-out overflow-hidden flex flex-col"
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
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
          e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)';
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }}
      >
        <div
          className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out pointer-events-none z-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.08) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(0, 146, 70, 0.08) 40%, rgba(255, 255, 255, 0.06) 60%, rgba(206, 43, 55, 0.08) 80%, rgba(0, 146, 70, 0.08) 100%)',
            backgroundSize: '400% 100%',
            animation: 'italianFlagGradient 5s ease-in-out infinite',
          }}
        />
        
        <div className="relative z-10 flex flex-col h-full" style={{ marginLeft: '2px', marginRight: '2px' }}>
          <div className="flex items-center gap-1 xs:gap-1.5 mb-1 xs:mb-1.5 flex-shrink-0">
            {icon}
            <h3 
              className="text-xs xs:text-sm sm:text-base md:text-lg"
              style={{
                color: '#009246',
                textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
              }}
            >
              {title}
            </h3>
          </div>
          <ul className="text-white text-xs xs:text-sm list-none space-y-0.5 xs:space-y-1 flex-1 overflow-y-auto">
            {facts.map((fact, index) => (
              <li key={index} className="pl-4 xs:pl-5 sm:pl-6 py-0.5 xs:py-1 relative break-words leading-tight">
                <span 
                  className="absolute left-0 top-1.5 w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full bg-white flex-shrink-0 mt-0.5" 
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} 
                />
                <div className="flex-1">
                  <strong className="block mb-0.5 text-xs">{fact.title}:</strong>
                  <span className="block opacity-90 text-xs leading-tight">{fact.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <h2 
        className="text-center text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold mb-1 xs:mb-1.5 sm:mb-2 md:mb-2.5 flex-shrink-0"
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
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-1.5 xs:gap-2 sm:gap-2.5 flex-1 min-h-0">
        {/* Ліва частина - Фотобокс */}
        <div className="hidden md:flex items-center justify-center w-full h-full" style={{ pointerEvents: 'none' }}>
          <div className="relative group w-full h-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '80%' }}>
            <div 
              className="relative w-full h-full max-w-full max-h-full overflow-hidden"
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
                src={slide.content.images[0].src}
                alt={slide.content.images[0].alt}
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

        {/* Права частина - Grid з картками */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 xs:gap-2 sm:gap-2.5 min-h-0">
          <FactCard 
            icon={categoryIcons[0]} 
            title="Історичні факти" 
            facts={slide.content.historical} 
          />
          <FactCard 
            icon={categoryIcons[1]} 
            title="Культурні та наукові факти" 
            facts={slide.content.cultural} 
          />
          <FactCard 
            icon={categoryIcons[2]} 
            title="Географічні факти" 
            facts={slide.content.geographical} 
          />
          <FactCard 
            icon={categoryIcons[3]} 
            title="Соціальні факти" 
            facts={slide.content.social} 
          />
        </div>

        {/* Мобільна версія - фотобокс зверху */}
        <div className="md:hidden flex items-center justify-center w-full" style={{ maxHeight: '40%', pointerEvents: 'none' }}>
          <div className="relative group w-full h-full flex items-center justify-center" style={{ isolation: 'isolate', maxWidth: '80%' }}>
            <div 
              className="relative w-full h-full max-w-full max-h-full overflow-hidden"
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
                src={slide.content.images[0].src}
                alt={slide.content.images[0].alt}
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
      </div>
    </div>
  );
}
