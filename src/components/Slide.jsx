import PropTypes from 'prop-types';
import { useMemo, memo, useEffect, useState, useRef } from 'react';
import CoverSlide from './slides/CoverSlide';
import InfoCardsSlide from './slides/InfoCardsSlide';
import GeographySlide from './slides/GeographySlide';
import GovernanceSlide from './slides/GovernanceSlide';
import DemographicsSlide from './slides/DemographicsSlide';
import SettlementSlide from './slides/SettlementSlide';
import EconomySlide from './slides/EconomySlide';
import HistorySlide from './slides/HistorySlide';
import SecondarySectorSlide from './slides/SecondarySectorSlide';
import TertiarySectorSlide from './slides/TertiarySectorSlide';
import ServicesDetailSlide from './slides/ServicesDetailSlide';
import ThankYouSlide from './slides/ThankYouSlide';
import NaturalConditionsSlide from './slides/NaturalConditionsSlide';
import NaturalResourcesSlide from './slides/NaturalResourcesSlide';
import PrimarySectorSlide from './slides/PrimarySectorSlide';
import VideoSlide from './slides/VideoSlide';

const slideComponents = {
  cover: CoverSlide,
  video: VideoSlide,
  'info-cards': InfoCardsSlide,
  geography: GeographySlide,
  governance: GovernanceSlide,
  structure: GovernanceSlide,
  demographics: DemographicsSlide,
  settlement: SettlementSlide,
  economy: EconomySlide,
  history: HistorySlide,
  'secondary-sector': SecondarySectorSlide,
  'tertiary-sector': TertiarySectorSlide,
  'services-detail': ServicesDetailSlide,
  'thank-you': ThankYouSlide,
  'natural-conditions': NaturalConditionsSlide,
  'natural-resources': NaturalResourcesSlide,
  'primary-sector': PrimarySectorSlide,
};

function Slide({ slide, isActive, index, isTransitioning = false, shouldAnimate = false, isGridViewOpen = false }) {
  const SlideComponent = useMemo(() => slideComponents[slide.type] || InfoCardsSlide, [slide.type]);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationStartRef = useRef(false);

  const { isSimpleSlide, isCoverSlide, isThankYouSlide, isNaturalResourcesSlide, needsMobileFix, overflowClass } = useMemo(() => {
    const isSimpleSlide = slide.type === 'cover' || slide.type === 'info-cards' || slide.type === 'thank-you';
    const isCoverSlide = slide.type === 'cover';
    const isThankYouSlide = slide.type === 'thank-you';
    const isNaturalResourcesSlide = slide.type === 'natural-resources';
    
    const needsMobileFix = [
      'geography',
      'natural-conditions',
      'natural-resources',
      'demographics',
      'governance',
      'structure',
      'primary-sector',
      'secondary-sector',
      'services-detail'
    ].includes(slide.type);
    
    let overflowClass = 'overflow-x-hidden';
    if (isCoverSlide || isThankYouSlide) {
      overflowClass = '';
    } else if (isSimpleSlide || isNaturalResourcesSlide) {
      overflowClass = 'overflow-hidden';
    } else {
      overflowClass = 'overflow-y-auto overflow-x-hidden';
    }
    
    return { isSimpleSlide, isCoverSlide, isThankYouSlide, isNaturalResourcesSlide, needsMobileFix, overflowClass };
  }, [slide.type]);

  // Handle smooth appearance animation after GridView closes
  useEffect(() => {
    if (shouldAnimate && isActive && !animationStartRef.current) {
      animationStartRef.current = true;
      // Start slide animation faster - overlap with menu closing
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 200); // Start animation earlier for faster transition
      
      return () => {
        clearTimeout(timer);
      };
    } else if (!shouldAnimate) {
      // Reset animation state when not animating
      setIsAnimating(false);
      animationStartRef.current = false;
    }
  }, [shouldAnimate, isActive]);

  // Calculate opacity and transform separately so we can use them for content visibility
  const { slideOpacity, slideTransform, isFullyVisible } = useMemo(() => {
    let opacity, transform;
    
    // Priority: animation state (when transitioning) > GridView open state > normal states
    if (shouldAnimate && isActive) {
      // Animating from GridView (selection or closing) - use animation states
      if (!isAnimating) {
        // Initial state: hidden and slightly below (before animation starts)
        opacity = 0;
        transform = 'translate3d(0, 40px, 0) scale(0.92) rotateX(12deg)';
      } else {
        // Animated state: visible and in position (during animation)
        opacity = 1;
        transform = 'translate3d(0, 0, 0) scale(1) rotateX(0deg)';
      }
    } else if (isGridViewOpen && isActive) {
      // GridView is open - hide slide (will animate when closing)
      opacity = 0;
      transform = 'translate3d(0, 40px, 0) scale(0.92) rotateX(12deg)';
    } else if (isActive) {
      // Normal active state (GridView closed and not transitioning)
      opacity = 1;
      transform = 'translate3d(0, 0, 0) scale(1) rotateX(0deg)';
    } else {
      // Inactive state
      opacity = 0;
      transform = 'translate3d(0, 40px, 0) scale(0.9) rotateX(10deg)';
    }
    
    return {
      slideOpacity: opacity,
      slideTransform: transform,
      isFullyVisible: opacity === 1,
    };
  }, [isActive, shouldAnimate, isAnimating, isGridViewOpen, isTransitioning]);

  const slideStyle = useMemo(() => {
    return {
      background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
      backdropFilter: 'blur(30px) saturate(200%)',
      WebkitBackdropFilter: 'blur(30px) saturate(200%)',
      border: isFullyVisible ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
      boxShadow: isFullyVisible 
        ? 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)'
        : 'none',
      WebkitOverflowScrolling: 'touch',
      willChange: isActive ? 'transform, opacity' : 'auto',
      contain: isFullyVisible ? 'layout style paint' : 'strict',
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      opacity: slideOpacity,
      transform: slideTransform,
      // When not fully visible, force hide everything immediately
      overflow: isFullyVisible ? 'visible' : 'hidden',
      clipPath: isFullyVisible ? 'none' : 'inset(0)',
      // Ensure glow effects are not clipped on mobile
      overflowX: 'visible',
      overflowY: isFullyVisible ? 'auto' : 'hidden',
      // Disable pointer events for inactive slides to prevent blocking navigation buttons
      pointerEvents: isFullyVisible ? 'auto' : 'none',
      // Transition only opacity, transform and visibility - NOT border or boxShadow
      transition: shouldAnimate && isActive
        ? 'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), visibility 0.5s, pointer-events 0.5s'
        : (isActive 
          ? 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s, pointer-events 0.3s'
          : 'opacity 0s, transform 0s, visibility 0s, pointer-events 0s'),
    };
  }, [isActive, shouldAnimate, isAnimating, isGridViewOpen, isTransitioning, slideOpacity, slideTransform, isFullyVisible]);
  
  // Completely hide content when slide is not fully visible - use display:none for stronger hiding
  const contentDisplay = isFullyVisible ? 'block' : 'none';
  
  return (
    <article
      data-simple-slide={isSimpleSlide}
      data-mobile-fix={needsMobileFix}
      data-slide-type={slide.type}
      className={`
        absolute inset-0 m-auto rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[32px]
        p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 xl:p-14 flex flex-col items-center ${isSimpleSlide ? 'justify-center' : 'justify-start md:justify-center'} gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 ${overflowClass}
        ${isActive 
          ? 'visible z-10' 
          : 'invisible'
        }
      `}
      style={slideStyle}
      aria-label={`Слайд ${index + 1}: ${slide.title}`}
      aria-hidden={!isActive || !isFullyVisible}
      role="article"
      tabIndex={isActive && isFullyVisible ? 0 : -1}
      data-slide-visible={isFullyVisible}
    >
      {isFullyVisible ? (
        <div 
          style={{ 
            width: '100%',
            height: '100%',
            opacity: 1,
            visibility: 'visible',
            display: 'flex',
            flexDirection: 'column',
            animation: 'none',
            pointerEvents: 'auto',
          }}
    >
      <SlideComponent slide={slide} isActive={isActive} />
        </div>
      ) : null}
    </article>
  );
}

export default memo(Slide, (prevProps, nextProps) => {
  // Only re-render if slide data or active state changes
  // Return true if props are equal (skip re-render), false if different (re-render)
  return prevProps.slide.id === nextProps.slide.id && 
         prevProps.slide.type === nextProps.slide.type &&
         prevProps.isActive === nextProps.isActive &&
         prevProps.index === nextProps.index &&
         prevProps.isTransitioning === nextProps.isTransitioning &&
         prevProps.shouldAnimate === nextProps.shouldAnimate &&
         prevProps.isGridViewOpen === nextProps.isGridViewOpen;
});

Slide.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.object,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  isTransitioning: PropTypes.bool,
  shouldAnimate: PropTypes.bool,
  isGridViewOpen: PropTypes.bool,
};
