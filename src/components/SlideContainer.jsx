import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import GridView from './GridView';

export default function SlideContainer({ slides, currentIndex, onSlideClick, isGridView, onCloseGrid, onNext, onPrev }) {
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isClosingGrid, setIsClosingGrid] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingSlideIndex, setPendingSlideIndex] = useState(null);
  const gridViewRef = useRef(null);
  const prevIndexRef = useRef(currentIndex);

  const minSwipeDistance = 50;

  // Handle grid close with animation (used by X button and grid button)
  const handleCloseGrid = useCallback(() => {
    if (gridViewRef.current && typeof gridViewRef.current.closeWithAnimation === 'function') {
      setIsClosingGrid(true);
      // Start smooth transition for current slide (no new slide selected)
      setIsTransitioning(true);
      setPendingSlideIndex(null); // No pending slide, just closing menu
      
      gridViewRef.current.closeWithAnimation(() => {
        // Close the grid view after animation completes
        onCloseGrid();
        
        // Reset states after slide animation completes
        setTimeout(() => {
          setIsTransitioning(false);
          setPendingSlideIndex(null);
          setIsClosingGrid(false);
        }, 800);
      });
    } else {
      onCloseGrid();
    }
  }, [onCloseGrid]);

  // Handle slide click from GridView with smooth transition
  const handleSlideClickFromGrid = useCallback((index) => {
    // Set states for transition
    setPendingSlideIndex(index);
    setIsClosingGrid(true);
    setIsTransitioning(true);
    
    // Immediately change to the new slide, but it will start hidden
    onSlideClick(index);
    
    // Start closing menu animation
    if (gridViewRef.current && typeof gridViewRef.current.closeWithAnimation === 'function') {
      // Menu closes over 300ms
      gridViewRef.current.closeWithAnimation(() => {
        // After menu animation completes, close grid view
        onCloseGrid();
        
        // Reset states after slide animation completes (faster)
        setTimeout(() => {
          setIsTransitioning(false);
          setPendingSlideIndex(null);
          setIsClosingGrid(false);
        }, 800);
      });
    } else {
      // Fallback if animation method not available
      setTimeout(() => {
        onCloseGrid();
        setIsTransitioning(false);
        setPendingSlideIndex(null);
        setIsClosingGrid(false);
      }, 300);
    }
  }, [onSlideClick, onCloseGrid]);

  // Expose close method for Topbar button
  useEffect(() => {
    if (isGridView && !isClosingGrid) {
      // Store reference to GridView's close method
      window.__closeGridView = () => {
        handleCloseGrid();
      };
    } else {
      window.__closeGridView = null;
    }

    return () => {
      window.__closeGridView = null;
    };
  }, [isGridView, isClosingGrid, handleCloseGrid]);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsSwiping(true);
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    
    const deltaX = Math.abs(touchStartX.current - touchEndX.current);
    const deltaY = Math.abs(touchStartY.current - touchEndY.current);
    
    if (deltaY > deltaX && deltaY > 10) {
      setIsSwiping(false);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isSwiping) {
      touchStartX.current = 0;
      touchStartY.current = 0;
      touchEndX.current = 0;
      touchEndY.current = 0;
      return;
    }
    
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = touchStartY.current - touchEndY.current;
    
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaY) < 30;
    
    if (isHorizontalSwipe && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
    
    setIsSwiping(false);
    touchStartX.current = 0;
    touchStartY.current = 0;
    touchEndX.current = 0;
    touchEndY.current = 0;
  }, [isSwiping, onNext, onPrev]);

  // Optimize: Only render visible slides (current + 1 before + 1 after)
  const visibleSlides = useMemo(() => {
    const range = 1; // Render 1 slide before and after
    const start = Math.max(0, currentIndex - range);
    const end = Math.min(slides.length, currentIndex + range + 1);
    
    return slides.slice(start, end).map((slide, idx) => ({
      slide,
      index: start + idx,
    }));
  }, [slides, currentIndex]);

  return (
    <div 
      className="w-full max-w-7xl h-full relative touch-pan-y"
      role="main"
      aria-label="Контейнер слайдів презентації"
      aria-live="polite"
      aria-atomic="true"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ 
        contain: 'layout style paint',
        perspective: '2000px',
        transformStyle: 'preserve-3d',
        zIndex: 1,
        pointerEvents: 'auto',
      }}
    >
      {/* Always render slides, even when GridView is open (for smooth animation) */}
      {visibleSlides.map(({ slide, index }) => (
        <Slide
          key={slide.id}
          slide={slide}
          isActive={index === currentIndex}
          index={index}
          isTransitioning={isTransitioning && (index === currentIndex || index === pendingSlideIndex)}
          shouldAnimate={isTransitioning && index === currentIndex && (pendingSlideIndex === currentIndex || pendingSlideIndex === null)}
          isGridViewOpen={isGridView || isClosingGrid}
        />
      ))}
      
      {/* Show GridView on top when open */}
      {isGridView && (
        <GridView 
          ref={gridViewRef}
          slides={slides} 
          currentIndex={currentIndex} 
          onSlideClick={handleSlideClickFromGrid} 
          onClose={handleCloseGrid}
        />
      )}
    </div>
  );
}

SlideContainer.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onSlideClick: PropTypes.func.isRequired,
  isGridView: PropTypes.bool.isRequired,
  onCloseGrid: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
