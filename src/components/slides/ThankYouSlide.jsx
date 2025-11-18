import PropTypes from 'prop-types';

export default function ThankYouSlide({ slide, isActive }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 xs:p-4 sm:p-5 md:p-6 relative overflow-visible">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 50px,
              rgba(0, 146, 70, 0.025) 50px,
              rgba(0, 146, 70, 0.025) 52px
            )`,
          }}
        />
      </div>

      {/* Main content - centered layout */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-2 xs:px-3 overflow-visible">
        {/* Main title - centered with animated gradient */}
        <div className="w-full overflow-visible flex flex-col items-center" style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
          <h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.3] tracking-tight text-center mb-3 xs:mb-4 sm:mb-5 break-words px-2"
            style={{
              background: 'linear-gradient(90deg, #009246 0%, #ffffff 25%, #009246 50%, #ffffff 75%, #CE2B37 100%)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'italianFlagGradient 4s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 40px rgba(0, 146, 70, 0.2))',
              overflow: 'visible',
              lineHeight: '1.3',
              display: 'block',
              minHeight: 'auto',
            }}
          >
            {slide.title}
          </h1>
        </div>

        {/* Subtitle - centered */}
        {slide.subtitle && (
          <div className="flex items-center justify-center gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6 w-full">
            <div 
              className="h-1 w-10 xs:w-12 sm:w-16 md:w-20 rounded-full flex-shrink-0"
              style={{
                background: 'linear-gradient(90deg, #009246, #ffffff, #CE2B37)',
                backgroundSize: '200% 100%',
                boxShadow: '0 0 12px rgba(0, 146, 70, 0.5)',
                animation: 'italianFlagGradient 3s ease-in-out infinite',
              }}
            />
            <h2 
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide text-center"
              style={{
                background: 'linear-gradient(90deg, #009246 0%, #ffffff 50%, #CE2B37 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'italianFlagGradient 3s ease-in-out infinite',
                filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))',
              }}
            >
              {slide.subtitle}
            </h2>
            <div 
              className="h-1 w-10 xs:w-12 sm:w-16 md:w-20 rounded-full flex-shrink-0"
              style={{
                background: 'linear-gradient(90deg, #009246, #ffffff, #CE2B37)',
                backgroundSize: '200% 100%',
                boxShadow: '0 0 12px rgba(206, 43, 55, 0.5)',
                animation: 'italianFlagGradient 3s ease-in-out infinite',
              }}
            />
          </div>
        )}

      </div>

      {/* Info card - enhanced glassmorphism with animated glow border */}
      <div className="relative z-10 w-full max-w-2xl mx-auto mt-3 xs:mt-4 sm:mt-5 px-2 xs:px-3">
        <div className="relative group">
          {/* Animated glow border - outside the card */}
          <div
            className="absolute inset-[-3px] rounded-2xl xs:rounded-3xl opacity-10 group-hover:opacity-40 transition-all duration-700 ease-out pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.6) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.6) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.6) 100%)',
              backgroundSize: '300% 100%',
              animation: 'italianFlagGradient 4s ease-in-out infinite',
              filter: 'blur(10px)',
              zIndex: 0,
            }}
          />
          
          <div 
            className="relative rounded-2xl xs:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-7 text-center cursor-pointer transition-all duration-700 ease-out overflow-hidden"
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
            {/* Animated gradient overlay on hover - main flow */}
            <div
              className="absolute inset-0 rounded-2xl xs:rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 ease-out pointer-events-none z-0"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.08) 0%, rgba(255, 255, 255, 0.06) 20%, rgba(0, 146, 70, 0.08) 40%, rgba(255, 255, 255, 0.06) 60%, rgba(206, 43, 55, 0.08) 80%, rgba(0, 146, 70, 0.08) 100%)',
                backgroundSize: '400% 100%',
                animation: 'italianFlagGradient 5s ease-in-out infinite',
              }}
            />
            
            {/* Secondary gradient layer for depth */}
            <div
              className="absolute inset-0 rounded-2xl xs:rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 ease-out pointer-events-none z-0"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 146, 70, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(206, 43, 55, 0.08) 0%, transparent 50%)',
                mixBlendMode: 'overlay',
              }}
            />
            
            {/* Light reflection effect */}
            <div
              className="absolute inset-0 rounded-2xl xs:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-out pointer-events-none z-0"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
              }}
            />

            <div className="relative z-10 space-y-3 xs:space-y-4 sm:space-y-5">
              {/* Materials */}
              {slide.content?.materials && (
                <div>
                  <div 
                    className="text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider font-bold mb-1.5 xs:mb-2"
                    style={{
                      color: '#009246',
                      textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
                    }}
                  >
                    Матеріали
                  </div>
                  <p className="text-xs xs:text-sm sm:text-base text-white/85 leading-relaxed break-words">
                    {slide.content.materials}
                  </p>
                </div>
              )}

              {/* Decorative dots - moderate */}
              <div className="flex items-center justify-center gap-2 pt-2 xs:pt-2.5">
                <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full bg-[#009246]" style={{ boxShadow: '0 0 8px #009246' }} />
                <div className="w-1 h-1 rounded-full bg-white/50" />
                <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full bg-[#CE2B37]" style={{ boxShadow: '0 0 8px #CE2B37' }} />
              </div>

              {/* Disclaimer - moderate */}
              <p 
                className="text-[10px] xs:text-xs text-white/40 italic text-center pt-2 xs:pt-3 border-t border-white/10 leading-tight"
              >
                Усі матеріали підготовлено на основі відкритих та офіційних інтернет-джерел.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ThankYouSlide.propTypes = {
  slide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    content: PropTypes.shape({
      message: PropTypes.string,
      materials: PropTypes.string,
    }),
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
};

