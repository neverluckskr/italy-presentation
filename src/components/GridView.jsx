import { useMemo, useState, useEffect, useImperativeHandle, forwardRef, useCallback } from 'react';

const GridView = forwardRef(({ slides, currentIndex, onSlideClick, onClose }, ref) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle close with animation
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  // Expose close method to parent
  useImperativeHandle(ref, () => ({
    closeWithAnimation: (callback) => {
      setIsClosing(true);
      setTimeout(() => {
        if (callback) {
          callback();
        } else {
          onClose();
        }
      }, 300);
    }
  }), [onClose]);

  // Animate in on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  // Calculate grid columns based on screen size
  const gridCols = useMemo(() => {
    if (slides.length <= 4) return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-4';
    if (slides.length <= 9) return 'grid-cols-3 sm:grid-cols-3';
    if (slides.length <= 16) return 'grid-cols-4 sm:grid-cols-4';
    return 'grid-cols-4 sm:grid-cols-4 lg:grid-cols-5';
  }, [slides.length]);

  return (
    <section
      className={`fixed inset-0 z-[100] overflow-hidden p-3 sm:p-4 md:p-5 grid-view-container ${isVisible && !isClosing ? 'grid-view-visible' : ''} ${isClosing ? 'grid-view-closing' : ''}`}
      aria-hidden={false}
      style={{ pointerEvents: 'auto' }}
    >
      {/* Main glass container */}
      <div
        className="w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden relative"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
          backdropFilter: 'blur(30px) saturate(200%)',
          WebkitBackdropFilter: 'blur(30px) saturate(200%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
        }}
      >
        {/* Animated background pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(0, 146, 70, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(206, 43, 55, 0.08) 0%, transparent 50%)
            `,
            animation: 'gridBackgroundShift 10s ease-in-out infinite',
            opacity: 0.6,
            zIndex: 0,
          }}
        />
        
        {/* Content wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div 
            className="flex-shrink-0 z-20" 
            style={{
              background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
              backdropFilter: 'blur(30px) saturate(200%)',
              WebkitBackdropFilter: 'blur(30px) saturate(200%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1rem 1.25rem 0.75rem 1.25rem',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            }}
          >
            <div className="flex items-center justify-between gap-3">
              {/* Title */}
              <div className="flex items-center gap-2.5">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 15" 
                  className="w-6 h-auto sm:w-7 filter drop-shadow-[0_0_10px_rgba(0,146,70,0.6)]" 
                  style={{ animation: 'flagWave 3s ease-in-out infinite' }}
                  aria-hidden="true"
                >
                  <path fill="#009246" d="M0 0h8v15H0z"/>
                  <path fill="#fff" d="M8 0h8v15H8z"/>
                  <path fill="#ce2b37" d="M16 0h8v15h-8z"/>
                </svg>
                <h2 
                  className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide"
                  style={{
                    background: 'linear-gradient(90deg, #009246 0%, #ffffff 50%, #CE2B37 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'italianFlagGradient 4s ease-in-out infinite',
                    filter: 'drop-shadow(0 0 10px rgba(0, 146, 70, 0.5))',
                  }}
                >
                  Вибір слайда
                </h2>
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="group relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-600 hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
                  backdropFilter: 'blur(30px) saturate(200%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(200%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(0, 146, 70, 0.12)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.5) 0%, rgba(20, 20, 30, 0.6) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)';
                }}
                aria-label="Закрити меню вибору слайдів"
              >
                {/* Inner animated glow border */}
                <div
                  className="absolute inset-[1px] rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-800 ease-in-out pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.5) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.5) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.5) 100%)',
                    backgroundSize: '300% 100%',
                    animation: 'italianFlagGradient 5s ease-in-out infinite',
                    filter: 'blur(3px)',
                    zIndex: 0,
                  }}
                />
                
                {/* Inner gradient overlay */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-800 ease-in-out pointer-events-none z-0"
                  style={{
                    background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.1) 0%, rgba(255, 255, 255, 0.08) 20%, rgba(0, 146, 70, 0.1) 40%, rgba(255, 255, 255, 0.08) 60%, rgba(206, 43, 55, 0.1) 80%, rgba(0, 146, 70, 0.1) 100%)',
                    backgroundSize: '400% 100%',
                    animation: 'italianFlagGradient 6s ease-in-out infinite',
                  }}
                />
                
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable content area */}
          <div 
            className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 relative" 
            style={{ 
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="p-3" style={{ paddingBottom: '4rem' }}>
              <div className={`grid ${gridCols} gap-2 sm:gap-2.5 md:gap-3`} style={{ gridAutoRows: 'minmax(140px, auto)', alignItems: 'stretch' }}>
                {/* Render cards 1-8 (index 0-7) */}
                {slides.slice(0, 8).map((slide, sliceIndex) => {
                  const index = sliceIndex;
                  const isActive = index === currentIndex;
                  const isHovered = hoveredIndex === index;
                  
                  // Handle click with logging - ensure it works everywhere
                  const handleClick = (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    console.log(`slide click: ${slide.id} (index: ${index})`);
                    onSlideClick(index);
                  };

                  // Handle mouse down - additional event for reliability
                  const handleMouseDown = (e) => {
                    e.stopPropagation();
                    // Don't prevent default to allow focus
                  };

                  // Handle touch events for mobile
                  const handleTouchStart = (e) => {
                    e.stopPropagation();
                  };

                  const handleTouchEnd = (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    console.log(`slide touch click: ${slide.id} (index: ${index})`);
                    onSlideClick(index);
                  };

                  // Handle keyboard navigation
                  const handleKeyDown = (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log(`slide keyboard click: ${slide.id} (index: ${index})`);
                      onSlideClick(index);
                    }
                  };

                  // Handle hover - update state
                  const handleMouseEnter = (e) => {
                    if (!isActive) {
                      setHoveredIndex(index);
                    }
                  };

                  const handleMouseLeave = (e) => {
                    setHoveredIndex(null);
                  };
                  
                  return (
                    <button
          key={slide.id}
                      type="button"
                      tabIndex={0}
                      data-slide-id={slide.id}
                      data-slide-index={index}
                      title=""
                      className="group relative w-full text-left focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg sm:rounded-xl"
                      onClick={handleClick}
                      onMouseDown={handleMouseDown}
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                      onKeyDown={handleKeyDown}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        animation: `slideIn 0.4s ease-out ${index * 0.03}s both`,
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        margin: 0,
                        cursor: 'pointer',
                        position: 'relative',
                        zIndex: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        minHeight: '140px',
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'transparent',
                        textDecoration: 'none',
                      }}
                    >
                      {/* Active glow */}
                      {isActive && (
                        <div
                          className="absolute inset-[-3px] rounded-lg opacity-60 pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.6) 0%, rgba(255, 255, 255, 0.4) 33%, rgba(206, 43, 55, 0.6) 66%, rgba(0, 146, 70, 0.6) 100%)',
                            backgroundSize: '300% 100%',
                            animation: 'italianFlagGradient 4s ease-in-out infinite',
                            filter: 'blur(10px)',
                            zIndex: 0,
                          }}
                        />
                      )}

                      {/* Card - hover effects controlled by state - ALL content is clickable via parent button */}
                      <div
                        className="relative rounded-lg sm:rounded-xl overflow-hidden transition-all duration-600 ease-out flex flex-col h-full slide-card"
                        style={{
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(15, 15, 25, 0.6) 0%, rgba(20, 20, 30, 0.7) 100%)'
                            : 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
                          backdropFilter: 'blur(30px) saturate(200%)',
                          WebkitBackdropFilter: 'blur(30px) saturate(200%)',
                          border: isActive
                            ? '1.5px solid rgba(255, 255, 255, 0.3)'
                            : isHovered
                            ? '1px solid rgba(255, 255, 255, 0.25)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: isActive
                            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255, 255, 255, 0.15), inset 0 0 40px rgba(0, 146, 70, 0.15), 0 0 20px rgba(0, 146, 70, 0.3)'
                            : isHovered
                            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(0, 146, 70, 0.12)'
                            : 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
                          transform: isActive 
                            ? 'translateY(-1px) scale(1.01)' 
                            : isHovered 
                            ? 'translateY(-2px) scale(1.02)' 
                            : 'translateY(0) scale(1)',
                          minHeight: '140px',
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                        }}
                      >
                        {/* Inner animated glow border */}
                        <div
                          className="absolute inset-[1px] rounded-lg sm:rounded-xl opacity-0 transition-opacity duration-800 ease-in-out pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.5) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.5) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.5) 100%)',
                            backgroundSize: '300% 100%',
                            animation: 'italianFlagGradient 5s ease-in-out infinite',
                            filter: 'blur(3px)',
                            zIndex: 0,
                            opacity: isHovered ? 0.25 : 0,
                            borderRadius: 'inherit',
                          }}
                        />
                        
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0 transition-opacity duration-800 ease-in-out pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.1) 0%, rgba(255, 255, 255, 0.08) 20%, rgba(0, 146, 70, 0.1) 40%, rgba(255, 255, 255, 0.08) 60%, rgba(206, 43, 55, 0.1) 80%, rgba(0, 146, 70, 0.1) 100%)',
                            backgroundSize: '400% 100%',
                            animation: 'italianFlagGradient 6s ease-in-out infinite',
                            zIndex: 0,
                            opacity: isHovered ? 0.5 : 0,
                            borderRadius: 'inherit',
                          }}
                        />

                        {/* Card header - fixed height */}
                        <div
                          className="relative px-2.5 py-2 sm:px-3 sm:py-2.5 border-b flex-shrink-0 pointer-events-none"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            background: isActive
                              ? 'linear-gradient(90deg, rgba(0, 146, 70, 0.15) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(206, 43, 55, 0.15) 100%)'
                              : 'rgba(255, 255, 255, 0.05)',
                            backgroundSize: isActive ? '300% 100%' : '100% 100%',
                            animation: isActive ? 'italianFlagGradient 4s ease-in-out infinite' : 'none',
                            zIndex: 1,
                            height: '3.5rem',
                            minHeight: '3.5rem',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <div className="flex items-center gap-2 w-full">
                            {/* Slide number */}
                            <div
                              className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-extrabold text-sm sm:text-base transition-all duration-300 group-hover:scale-110 pointer-events-none"
                              style={{
                                background: index % 3 === 0
                                  ? 'linear-gradient(135deg, rgba(0, 146, 70, 0.4) 0%, rgba(0, 146, 70, 0.6) 100%)'
                                  : index % 3 === 1
                                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.5) 100%)'
                                  : 'linear-gradient(135deg, rgba(206, 43, 55, 0.4) 0%, rgba(206, 43, 55, 0.6) 100%)',
                                color: index % 3 === 1 ? '#1a1a1f' : '#ffffff',
                                boxShadow: index % 3 === 0
                                  ? '0 0 8px rgba(0, 146, 70, 0.5)'
                                  : index % 3 === 1
                                  ? '0 0 8px rgba(255, 255, 255, 0.3)'
                                  : '0 0 8px rgba(206, 43, 55, 0.5)',
                                filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))',
                              }}
                            >
                              {index + 1}
                            </div>

                            {/* Slide title - only title, no numbers */}
                            <h3
                              className="flex-1 text-xs sm:text-sm font-bold leading-tight min-w-0 pointer-events-none"
                              style={{
                                color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                                textShadow: isActive ? '0 0 6px rgba(255, 255, 255, 0.3)' : 'none',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                userSelect: 'none',
                              }}
                            >
                              {slide.title || `Слайд ${index + 1}`}
                            </h3>
                          </div>
                        </div>

                        {/* Card preview area - NO text should appear here, even on hover */}
                        <div
                          className="relative px-2.5 py-3 sm:px-3 sm:py-3.5 flex items-center justify-center flex-1 min-h-0 pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(0, 146, 70, 0.05) 0%, transparent 70%)',
                            zIndex: 1,
                            overflow: 'hidden',
                            position: 'relative',
                          }}
                        >
                          {/* Decorative pattern */}
                          <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div
                              className="w-full h-full pointer-events-none"
                              style={{
                                background: `repeating-linear-gradient(
                                  45deg,
                                  transparent 0px,
                                  transparent 15px,
                                  rgba(0, 146, 70, 0.1) 15px,
                                  rgba(0, 146, 70, 0.1) 17px
                                )`,
                              }}
                            />
                          </div>

                          {/* Preview content placeholder - ONLY decorative elements, NO text or numbers */}
                          <div 
                            className="relative z-10 pointer-events-none" 
                            style={{ 
                              userSelect: 'none',
                              fontSize: 0,
                              lineHeight: 0,
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'transparent',
                              textIndent: '-9999px',
                              overflow: 'hidden',
                            }}
                            aria-hidden="true"
                          >
                            <div
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg pointer-events-none"
                              style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                fontSize: 0,
                                lineHeight: 0,
                                color: 'transparent',
                              }}
                              aria-hidden="true"
                            >
                              {/* Italian flag dots - decorative only, NO text */}
                              <div className="w-1.5 h-1.5 rounded-full bg-[#009246] pointer-events-none" style={{ boxShadow: '0 0 4px #009246', flexShrink: 0 }} aria-hidden="true" />
                              <div className="w-1.5 h-1.5 rounded-full bg-white pointer-events-none" style={{ boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)', flexShrink: 0 }} aria-hidden="true" />
                              <div className="w-1.5 h-1.5 rounded-full bg-[#CE2B37] pointer-events-none" style={{ boxShadow: '0 0 4px #CE2B37', flexShrink: 0 }} aria-hidden="true" />
                            </div>
                          </div>
                        </div>

                        {/* Active indicator */}
                        {isActive && (
                          <div
                            className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full animate-pulse pointer-events-none"
                            style={{
                              background: 'linear-gradient(90deg, #009246, #ffffff, #CE2B37)',
                              backgroundSize: '300% 100%',
                              animation: 'italianFlagGradient 2s ease-in-out infinite, pulse 2s ease-in-out infinite',
                              boxShadow: '0 0 10px rgba(0, 146, 70, 0.8)',
                            }}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}

                {/* Render cards 9-16 (index 8-15) - EXACT SAME CODE AS 1-8 */}
                {slides.slice(8, 16).map((slide, sliceIndex) => {
                  const index = sliceIndex + 8; // Map to actual index 8-15
                  const isActive = index === currentIndex;
                  const isHovered = hoveredIndex === index;
                  
                  // Handle click with logging - ensure it works everywhere
                  const handleClick = (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    console.log(`slide click: ${slide.id} (index: ${index})`);
                    onSlideClick(index);
                  };

                  // Handle mouse down - additional event for reliability
                  const handleMouseDown = (e) => {
                    e.stopPropagation();
                    // Don't prevent default to allow focus
                  };

                  // Handle touch events for mobile
                  const handleTouchStart = (e) => {
                    e.stopPropagation();
                  };

                  const handleTouchEnd = (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    console.log(`slide touch click: ${slide.id} (index: ${index})`);
                    onSlideClick(index);
                  };

                  // Handle keyboard navigation
                  const handleKeyDown = (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log(`slide keyboard click: ${slide.id} (index: ${index})`);
            onSlideClick(index);
                    }
                  };

                  // Handle hover - update state
                  const handleMouseEnter = (e) => {
                    if (!isActive) {
                      setHoveredIndex(index);
                    }
                  };

                  const handleMouseLeave = (e) => {
                    setHoveredIndex(null);
                  };
                  
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      tabIndex={0}
                      data-slide-id={slide.id}
                      data-slide-index={index}
                      title=""
                      className="group relative w-full text-left focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg sm:rounded-xl"
                      onClick={handleClick}
                      onMouseDown={handleMouseDown}
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                      onKeyDown={handleKeyDown}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        animation: `slideIn 0.4s ease-out ${index * 0.03}s both`,
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        margin: 0,
                        cursor: 'pointer',
                        position: 'relative',
                        zIndex: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        minHeight: '140px',
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'transparent',
                        textDecoration: 'none',
                      }}
                    >
                      {/* Active glow */}
                      {isActive && (
                        <div
                          className="absolute inset-[-3px] rounded-lg opacity-60 pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.6) 0%, rgba(255, 255, 255, 0.4) 33%, rgba(206, 43, 55, 0.6) 66%, rgba(0, 146, 70, 0.6) 100%)',
                            backgroundSize: '300% 100%',
                            animation: 'italianFlagGradient 4s ease-in-out infinite',
                            filter: 'blur(10px)',
                            zIndex: 0,
                          }}
                        />
                      )}

                      {/* Card - hover effects controlled by state - ALL content is clickable via parent button */}
                      <div
                        className="relative rounded-lg sm:rounded-xl overflow-hidden transition-all duration-600 ease-out flex flex-col h-full slide-card"
                        style={{
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(15, 15, 25, 0.6) 0%, rgba(20, 20, 30, 0.7) 100%)'
                            : 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
                          backdropFilter: 'blur(30px) saturate(200%)',
                          WebkitBackdropFilter: 'blur(30px) saturate(200%)',
                          border: isActive
                            ? '1.5px solid rgba(255, 255, 255, 0.3)'
                            : isHovered
                            ? '1px solid rgba(255, 255, 255, 0.25)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: isActive
                            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255, 255, 255, 0.15), inset 0 0 40px rgba(0, 146, 70, 0.15), 0 0 20px rgba(0, 146, 70, 0.3)'
                            : isHovered
                            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(0, 146, 70, 0.12)'
                            : 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
                          transform: isActive 
                            ? 'translateY(-1px) scale(1.01)' 
                            : isHovered 
                            ? 'translateY(-2px) scale(1.02)' 
                            : 'translateY(0) scale(1)',
                          minHeight: '140px',
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                        }}
                      >
                        {/* Inner animated glow border */}
                        <div
                          className="absolute inset-[1px] rounded-lg sm:rounded-xl opacity-0 transition-opacity duration-800 ease-in-out pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.5) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.5) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.5) 100%)',
                            backgroundSize: '300% 100%',
                            animation: 'italianFlagGradient 5s ease-in-out infinite',
                            filter: 'blur(3px)',
                            zIndex: 0,
                            opacity: isHovered ? 0.25 : 0,
                            borderRadius: 'inherit',
                          }}
                        />
                        
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0 transition-opacity duration-800 ease-in-out pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.1) 0%, rgba(255, 255, 255, 0.08) 20%, rgba(0, 146, 70, 0.1) 40%, rgba(255, 255, 255, 0.08) 60%, rgba(206, 43, 55, 0.1) 80%, rgba(0, 146, 70, 0.1) 100%)',
                            backgroundSize: '400% 100%',
                            animation: 'italianFlagGradient 6s ease-in-out infinite',
                            zIndex: 0,
                            opacity: isHovered ? 0.5 : 0,
                            borderRadius: 'inherit',
                          }}
                        />

                        {/* Card header - fixed height */}
                        <div
                          className="relative px-2.5 py-2 sm:px-3 sm:py-2.5 border-b flex-shrink-0 pointer-events-none"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            background: isActive
                              ? 'linear-gradient(90deg, rgba(0, 146, 70, 0.15) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(206, 43, 55, 0.15) 100%)'
                              : 'rgba(255, 255, 255, 0.05)',
                            backgroundSize: isActive ? '300% 100%' : '100% 100%',
                            animation: isActive ? 'italianFlagGradient 4s ease-in-out infinite' : 'none',
                            zIndex: 1,
                            height: '3.5rem',
                            minHeight: '3.5rem',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <div className="flex items-center gap-2 w-full">
                            {/* Slide number */}
                            <div
                              className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-extrabold text-sm sm:text-base transition-all duration-300 group-hover:scale-110 pointer-events-none"
                              style={{
                                background: index % 3 === 0
                                  ? 'linear-gradient(135deg, rgba(0, 146, 70, 0.4) 0%, rgba(0, 146, 70, 0.6) 100%)'
                                  : index % 3 === 1
                                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.5) 100%)'
                                  : 'linear-gradient(135deg, rgba(206, 43, 55, 0.4) 0%, rgba(206, 43, 55, 0.6) 100%)',
                                color: index % 3 === 1 ? '#1a1a1f' : '#ffffff',
                                boxShadow: index % 3 === 0
                                  ? '0 0 8px rgba(0, 146, 70, 0.5)'
                                  : index % 3 === 1
                                  ? '0 0 8px rgba(255, 255, 255, 0.3)'
                                  : '0 0 8px rgba(206, 43, 55, 0.5)',
                                filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))',
                              }}
                            >
              {index + 1}
                            </div>

                            {/* Slide title - only title, no numbers */}
                            <h3
                              className="flex-1 text-xs sm:text-sm font-bold leading-tight min-w-0 pointer-events-none"
                              style={{
                                color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                                textShadow: isActive ? '0 0 6px rgba(255, 255, 255, 0.3)' : 'none',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                userSelect: 'none',
                              }}
                            >
                              {slide.title || `Слайд ${index + 1}`}
          </h3>
                          </div>
                        </div>

                        {/* Card preview area - NO text should appear here, even on hover */}
                        <div
                          className="relative px-2.5 py-3 sm:px-3 sm:py-3.5 flex items-center justify-center flex-1 min-h-0 pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(0, 146, 70, 0.05) 0%, transparent 70%)',
                            zIndex: 1,
                            overflow: 'hidden',
                            position: 'relative',
                          }}
                        >
                          {/* Decorative pattern */}
                          <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div
                              className="w-full h-full pointer-events-none"
                              style={{
                                background: `repeating-linear-gradient(
                                  45deg,
                                  transparent 0px,
                                  transparent 15px,
                                  rgba(0, 146, 70, 0.1) 15px,
                                  rgba(0, 146, 70, 0.1) 17px
                                )`,
                              }}
                            />
                          </div>

                          {/* Preview content placeholder - ONLY decorative elements, NO text or numbers */}
                          <div 
                            className="relative z-10 pointer-events-none" 
                            style={{ 
                              userSelect: 'none',
                              fontSize: 0,
                              lineHeight: 0,
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'transparent',
                              textIndent: '-9999px',
                              overflow: 'hidden',
                            }}
                            aria-hidden="true"
                          >
                            <div
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg pointer-events-none"
                              style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                fontSize: 0,
                                lineHeight: 0,
                                color: 'transparent',
                              }}
                              aria-hidden="true"
                            >
                              {/* Italian flag dots - decorative only, NO text */}
                              <div className="w-1.5 h-1.5 rounded-full bg-[#009246] pointer-events-none" style={{ boxShadow: '0 0 4px #009246', flexShrink: 0 }} aria-hidden="true" />
                              <div className="w-1.5 h-1.5 rounded-full bg-white pointer-events-none" style={{ boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)', flexShrink: 0 }} aria-hidden="true" />
                              <div className="w-1.5 h-1.5 rounded-full bg-[#CE2B37] pointer-events-none" style={{ boxShadow: '0 0 4px #CE2B37', flexShrink: 0 }} aria-hidden="true" />
                            </div>
          </div>
        </div>

                        {/* Active indicator */}
                        {isActive && (
                          <div
                            className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full animate-pulse pointer-events-none"
                            style={{
                              background: 'linear-gradient(90deg, #009246, #ffffff, #CE2B37)',
                              backgroundSize: '300% 100%',
                              animation: 'italianFlagGradient 2s ease-in-out infinite, pulse 2s ease-in-out infinite',
                              boxShadow: '0 0 10px rgba(0, 146, 70, 0.8)',
                            }}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer - OUTSIDE scrollable area, at the bottom - must not block clicks */}
          <div 
            className="absolute bottom-0 left-0 right-0 px-3 sm:px-4 md:px-5 py-1.5 text-center border-t backdrop-blur-sm" 
            style={{ 
              borderColor: 'rgba(255, 255, 255, 0.1)',
              background: 'linear-gradient(180deg, transparent 0%, rgba(15, 15, 25, 0.98) 100%)',
              pointerEvents: 'none',
              zIndex: 0,
              userSelect: 'none',
            }}
          >
            <p
              className="text-xs sm:text-sm text-white/50"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.3) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(206, 43, 55, 0.3) 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'italianFlagGradient 4s ease-in-out infinite',
                pointerEvents: 'none',
              }}
            >
              Оберіть слайд • {slides.length} слайдів
            </p>
          </div>
          </div>
        </div>

      <style>{`
        .grid-view-container {
          opacity: 0;
          transform: scale(0.95) translateY(20px);
          filter: blur(8px);
          transition: opacity 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
        }

        .grid-view-container.grid-view-visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          filter: blur(0px);
          pointer-events: auto;
        }

        .grid-view-container.grid-view-closing {
          opacity: 0;
          transform: scale(0.96) translateY(-15px);
          filter: blur(4px);
          pointer-events: none;
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes gridBackgroundShift {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        /* Ensure all slide cards are fully interactive */
        .grid-view-container button[data-slide-id] {
          position: relative;
          z-index: 20;
        }

        .grid-view-container button[data-slide-id]:hover {
          z-index: 21;
        }

        /* Ensure grid items stretch properly */
        .grid-view-container [class*="grid"] > button {
          align-self: stretch;
        }

        /* Prevent any text from appearing in preview area on hover */
        .grid-view-container .slide-card > div[style*="flex items-center justify-center"]::before,
        .grid-view-container .slide-card > div[style*="flex items-center justify-center"]::after {
          content: none !important;
          display: none !important;
        }

        /* Prevent tooltip or text from appearing */
        .grid-view-container button[data-slide-id]::before,
        .grid-view-container button[data-slide-id]::after {
          content: none !important;
        }

        /* Hide any text content in preview area - prevent numbers from appearing */
        .grid-view-container .slide-card [style*="flex items-center justify-center"] {
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
        }

        /* Prevent text in preview area wrapper - STRICT - NO TEXT ALLOWED */
        .grid-view-container .slide-card [style*="pointer-events-none"][style*="z-10"] {
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
          text-indent: -9999px !important;
        }

        /* Prevent any text from appearing on hover in preview area */
        .grid-view-container button[data-slide-id]:hover .slide-card [style*="pointer-events-none"][style*="z-10"],
        .grid-view-container button[data-slide-id]:hover .slide-card [style*="flex items-center justify-center"] {
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
          text-indent: -9999px !important;
        }

        /* Hide all text nodes in preview area */
        .grid-view-container .slide-card [style*="flex items-center justify-center"] * {
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
        }

        /* Prevent any pseudo-elements from showing text */
        .grid-view-container .slide-card [style*="flex items-center justify-center"]::before,
        .grid-view-container .slide-card [style*="flex items-center justify-center"]::after,
        .grid-view-container button[data-slide-id]:hover .slide-card [style*="flex items-center justify-center"]::before,
        .grid-view-container button[data-slide-id]:hover .slide-card [style*="flex items-center justify-center"]::after {
          content: none !important;
          display: none !important;
        }

        /* Ensure preview area container hides all text */
        .grid-view-container .slide-card > div[style*="flex items-center justify-center"] {
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
        }

        .grid-view-container button[data-slide-id]:hover .slide-card > div[style*="flex items-center justify-center"] {
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
        }

        /* ABSOLUTE PREVENTION OF TEXT IN PREVIEW AREA ON HOVER */
        .grid-view-container button[data-slide-id]:hover .slide-card [style*="flex items-center justify-center"] *:not([class*="w-1.5"]):not([class*="rounded-full"]) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
          text-indent: -9999px !important;
          content: none !important;
        }

        /* Hide any text nodes that might appear */
        .grid-view-container .slide-card [style*="flex items-center justify-center"] text,
        .grid-view-container .slide-card [style*="flex items-center justify-center"]::text,
        .grid-view-container button[data-slide-id]:hover .slide-card [style*="flex items-center justify-center"] text,
        .grid-view-container button[data-slide-id]:hover .slide-card [style*="flex items-center justify-center"]::text {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          font-size: 0 !important;
          line-height: 0 !important;
          color: transparent !important;
        }

      `}</style>
    </section>
  );
});

GridView.displayName = 'GridView';

export default GridView;
