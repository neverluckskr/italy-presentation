export default function IconButton({ onClick, disabled, ariaLabel, children }) {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    
    e.preventDefault();
    e.stopPropagation();
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseDown={(e) => {
        if (!disabled) {
          e.stopPropagation();
        }
      }}
      onTouchStart={(e) => {
        if (!disabled) {
          e.stopPropagation();
        }
      }}
      disabled={disabled}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-lg sm:rounded-xl cursor-pointer touch-manipulation relative overflow-hidden group disabled:opacity-40 disabled:cursor-not-allowed"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
        backdropFilter: 'blur(30px) saturate(200%)',
        WebkitBackdropFilter: 'blur(30px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 52,
        pointerEvents: disabled ? 'none' : 'auto',
        position: 'relative',
        isolation: 'isolate',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
          e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(0, 146, 70, 0.12)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.5) 0%, rgba(20, 20, 30, 0.6) 100%)';
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)';
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
        }
      }}
    >
      {/* Inner animated glow border - всередині кнопки */}
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
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 relative z-10 text-white transition-all duration-600 ease-in-out group-hover:scale-110"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))',
          animation: 'whiteGlow 3s ease-in-out infinite',
        }}
      >
        {children}
      </svg>
    </button>
  );
}
