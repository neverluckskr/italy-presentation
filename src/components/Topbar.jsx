import PropTypes from 'prop-types';
import IconButton from './IconButton';
import AnimatedSlideNumber from './AnimatedSlideNumber';

export default function Topbar({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onToggleGrid,
  onToggleFullscreen,
  onToggleTheme,
  isFullscreen = false,
  isGridView = false,
}) {
  // Handle grid toggle with animation if closing
  const handleToggleGrid = () => {
    if (isGridView && window.__closeGridView) {
      // Menu is open, close it with animation
      window.__closeGridView();
    } else {
      // Menu is closed, open it
      onToggleGrid();
    }
  };
  return (
    <header 
      className="px-2 sm:px-3 md:px-5 py-2 sm:py-3 md:py-3.5 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden gap-2 sm:gap-0"
      style={{
        background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.6) 0%, rgba(25, 25, 40, 0.7) 100%)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        border: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: 
          '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.08)',
        zIndex: 50,
        pointerEvents: 'auto',
      }}
      role="banner"
      aria-label="Навігація презентації"
    >
      <div className="flex items-center gap-2 sm:gap-3.5 group relative z-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 15" 
          className="w-5 h-auto sm:w-6 md:w-7 filter drop-shadow-[0_0_8px_rgba(0,146,70,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
          style={{ animation: 'float 4s ease-in-out infinite, flagWave 2s ease-in-out infinite' }}
          aria-hidden="true"
        >
          <path fill="#009246" d="M0 0h8v15H0z"/>
          <path fill="#fff" d="M8 0h8v15H8z"/>
          <path fill="#ce2b37" d="M16 0h8v15h-8z"/>
        </svg>
        <span className="font-extrabold text-sm sm:text-base md:text-lg tracking-wide transition-all duration-300 group-hover:scale-105" style={{ 
          background: 'linear-gradient(90deg, #009246 0%, #ffffff 50%, #CE2B37 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'italianFlagGradient 4s ease-in-out infinite, textGlow 3s ease-in-out infinite'
        }}>
          <span className="hidden sm:inline">Презентація: </span>Італійська Республіка
        </span>
      </div>

      <nav className="flex items-center gap-1 sm:gap-2 relative flex-wrap justify-center" role="navigation" aria-label="Управління презентацією" style={{ zIndex: 51, pointerEvents: 'auto' }}>
        <IconButton onClick={onPrev} disabled={currentSlide === 0} ariaLabel="Попередній слайд">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        </IconButton>

        <span 
          className="font-extrabold h-8 sm:h-9 md:h-11 px-2.5 sm:px-3 md:px-3.5 rounded-lg sm:rounded-xl flex items-center justify-center gap-0.5 text-[10px] sm:text-xs md:text-sm relative overflow-hidden group"
          aria-label={`Слайд ${currentSlide + 1} з ${totalSlides}`}
          role="status"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: 
              '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.08)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            minWidth: 'fit-content',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.boxShadow = 
              '0 6px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255, 255, 255, 0.12), inset 0 0 40px rgba(0, 146, 70, 0.12)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.6) 0%, rgba(25, 25, 40, 0.7) 100%)';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.boxShadow = 
              '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(0, 146, 70, 0.08)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20, 20, 35, 0.5) 0%, rgba(25, 25, 40, 0.6) 100%)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          {/* Inner animated glow border - всередині індикатора */}
          <div
            className="absolute inset-[1px] rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-25 transition-opacity duration-800 ease-in-out pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.5) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.5) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.5) 100%)',
              backgroundSize: '300% 100%',
              animation: 'italianFlagGradient 5s ease-in-out infinite',
              filter: 'blur(3px)',
              zIndex: 0,
              borderRadius: '0.5rem',
            }}
          />
          
          {/* Inner gradient overlay on hover */}
          <div
            className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-800 ease-in-out pointer-events-none z-0"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.1) 0%, rgba(255, 255, 255, 0.08) 20%, rgba(0, 146, 70, 0.1) 40%, rgba(255, 255, 255, 0.08) 60%, rgba(206, 43, 55, 0.1) 80%, rgba(0, 146, 70, 0.1) 100%)',
              backgroundSize: '400% 100%',
              animation: 'italianFlagGradient 6s ease-in-out infinite',
            }}
          />
          
          <span 
            key={`slide-${currentSlide}`}
            className="relative z-10 text-white inline-flex items-center justify-center leading-none"
            style={{ 
              textShadow: '0 0 6px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 255, 255, 0.2)',
            }}
          >
            <AnimatedSlideNumber value={currentSlide + 1} />
          </span>
          <span 
            className="relative z-10 opacity-70 text-white leading-none"
            style={{ 
              textShadow: '0 0 4px rgba(255, 255, 255, 0.3)',
            }}
          >
            /
          </span>
          <span 
            className="relative z-10 text-white inline-flex items-center justify-center leading-none"
            style={{ 
              textShadow: '0 0 6px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 255, 255, 0.2)',
            }}
          >
            {totalSlides}
          </span>
        </span>

        <IconButton onClick={onNext} disabled={currentSlide === totalSlides - 1} ariaLabel="Наступний слайд">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </IconButton>

        <div 
          className="w-px h-4 sm:h-6 mx-0.5 sm:mx-1 opacity-30" 
          aria-hidden="true"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent)',
          }}
        />

        <IconButton onClick={handleToggleGrid} ariaLabel={isGridView ? "Закрити огляд слайдів" : "Огляд слайдів"}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6A2.25 2.25 0 0115.75 3.75h2.25A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25H15.75A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
        </IconButton>

        <IconButton onClick={onToggleFullscreen} ariaLabel={isFullscreen ? "Вийти з повноекранного режиму" : "Повноекранний режим"}>
          {isFullscreen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"/>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
          )}
        </IconButton>

        <IconButton onClick={onToggleTheme} ariaLabel="Змінити тему">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
        </IconButton>
      </nav>
    </header>
  );
}

Topbar.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onToggleGrid: PropTypes.func.isRequired,
  onToggleFullscreen: PropTypes.func.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool,
  isGridView: PropTypes.bool,
};
