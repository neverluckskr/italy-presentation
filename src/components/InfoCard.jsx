import AnimatedNumber from './AnimatedNumber';

export default function InfoCard({ card, isActive, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(card);
    }
  };

  return (
    <div 
      className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-600 cursor-pointer touch-manipulation active:scale-95 relative overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
        backdropFilter: 'blur(30px) saturate(200%)',
        WebkitBackdropFilter: 'blur(30px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
        e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(0, 146, 70, 0.12)';
        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.5) 0%, rgba(20, 20, 30, 0.6) 100%)';
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)';
        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
      onTouchStart={(e) => {
        e.currentTarget.classList.add('touch-active');
        e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.5) 0%, rgba(20, 20, 30, 0.6) 100%)';
        e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(0, 146, 70, 0.12)';
      }}
      onTouchEnd={(e) => {
        setTimeout(() => {
          e.currentTarget.classList.remove('touch-active');
          e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)';
          e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)';
        }, 200);
      }}
      tabIndex={0}
      role="button"
      aria-label={`Картка: ${card.label}`}
    >
      {/* Inner animated glow border */}
      <div
        className="absolute inset-[1px] rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-800 ease-in-out pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.5) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.5) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.5) 100%)',
          backgroundSize: '300% 100%',
          animation: 'italianFlagGradient 5s ease-in-out infinite',
          filter: 'blur(3px)',
          zIndex: 0,
        }}
      />
      
      {/* Inner gradient overlay on hover */}
      <div
        className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-800 ease-in-out pointer-events-none z-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.1) 0%, rgba(255, 255, 255, 0.08) 20%, rgba(0, 146, 70, 0.1) 40%, rgba(255, 255, 255, 0.08) 60%, rgba(206, 43, 55, 0.1) 80%, rgba(0, 146, 70, 0.1) 100%)',
          backgroundSize: '400% 100%',
          animation: 'italianFlagGradient 6s ease-in-out infinite',
        }}
      />
      
      <div className="relative z-10">
        <strong className="block text-[10px] xs:text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1" style={{
          color: '#009246',
          textShadow: '0 0 8px rgba(0, 146, 70, 0.4)',
        }}>
          {card.label}
        </strong>
        <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl font-extrabold inline-block" style={{ animation: 'numberFloat 3s ease-in-out infinite' }}>
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
}
