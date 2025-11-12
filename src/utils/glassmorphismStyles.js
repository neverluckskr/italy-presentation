/**
 * Unified Glassmorphism Style System
 * Based on the card style from SettlementSlide.jsx
 * 
 * This utility provides consistent glassmorphism styles across all UI components:
 * - Cards, panels, modals, tooltips, buttons, badges
 * - Hover states and animations
 * - Badge styles (green/red/gray)
 */

// Base glassmorphism style
export const glassBase = {
  background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.4) 0%, rgba(20, 20, 30, 0.5) 100%)',
  backdropFilter: 'blur(30px) saturate(200%)',
  WebkitBackdropFilter: 'blur(30px) saturate(200%)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(0, 146, 70, 0.05)',
};

// Hover state
export const glassHover = {
  border: '1px solid rgba(255, 255, 255, 0.25)',
  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(0, 146, 70, 0.12)',
  background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.5) 0%, rgba(20, 20, 30, 0.6) 100%)',
};

// Active/Selected state
export const glassActive = {
  border: '1.5px solid rgba(255, 255, 255, 0.3)',
  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255, 255, 255, 0.15), inset 0 0 40px rgba(0, 146, 70, 0.15), 0 0 20px rgba(0, 146, 70, 0.3)',
  background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.6) 0%, rgba(20, 20, 30, 0.7) 100%)',
};

// Transition for smooth hover effects
export const glassTransition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

// Animated inner glow border (for hover)
export const getAnimatedGlowBorder = (opacity = 0.25) => ({
  position: 'absolute',
  inset: '1px',
  borderRadius: 'inherit',
  opacity: 0,
  transition: 'opacity 0.8s ease-in-out',
  pointerEvents: 'none',
  zIndex: 0,
  background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.5) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(0, 146, 70, 0.5) 50%, rgba(255, 255, 255, 0.4) 75%, rgba(206, 43, 55, 0.5) 100%)',
  backgroundSize: '300% 100%',
  animation: 'italianFlagGradient 5s ease-in-out infinite',
  filter: 'blur(3px)',
});

// Animated gradient overlay (for hover)
export const getAnimatedGradientOverlay = (opacity = 0.5) => ({
  position: 'absolute',
  inset: 0,
  borderRadius: 'inherit',
  opacity: 0,
  transition: 'opacity 0.8s ease-in-out',
  pointerEvents: 'none',
  zIndex: 0,
  background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.1) 0%, rgba(255, 255, 255, 0.08) 20%, rgba(0, 146, 70, 0.1) 40%, rgba(255, 255, 255, 0.08) 60%, rgba(206, 43, 55, 0.1) 80%, rgba(0, 146, 70, 0.1) 100%)',
  backgroundSize: '400% 100%',
  animation: 'italianFlagGradient 6s ease-in-out infinite',
});

// Badge styles (green/red/gray)
export const badgeStyles = {
  green: {
    background: 'linear-gradient(135deg, rgba(0, 146, 70, 0.4) 0%, rgba(0, 146, 70, 0.6) 100%)',
    color: '#ffffff',
    boxShadow: '0 0 8px rgba(0, 146, 70, 0.5)',
  },
  red: {
    background: 'linear-gradient(135deg, rgba(206, 43, 55, 0.4) 0%, rgba(206, 43, 55, 0.6) 100%)',
    color: '#ffffff',
    boxShadow: '0 0 8px rgba(206, 43, 55, 0.5)',
  },
  gray: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.5) 100%)',
    color: '#1a1a1f',
    boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
  },
};

// Get badge style by index (for cycling through colors)
export const getBadgeStyle = (index) => {
  const colors = ['green', 'gray', 'red'];
  return badgeStyles[colors[index % 3]];
};

// Hover handler for glass elements
export const createGlassHoverHandlers = (element) => ({
  onMouseEnter: (e) => {
    const target = e.currentTarget;
    Object.assign(target.style, glassHover);
    target.style.transform = 'translateY(-2px) scale(1.02)';
    
    // Show animated borders
    const glowBorder = target.querySelector('.glass-glow-border');
    const gradientOverlay = target.querySelector('.glass-gradient-overlay');
    if (glowBorder) glowBorder.style.opacity = '0.25';
    if (gradientOverlay) gradientOverlay.style.opacity = '0.5';
  },
  onMouseLeave: (e) => {
    const target = e.currentTarget;
    Object.assign(target.style, glassBase);
    target.style.transform = 'translateY(0) scale(1)';
    
    // Hide animated borders
    const glowBorder = target.querySelector('.glass-glow-border');
    const gradientOverlay = target.querySelector('.glass-gradient-overlay');
    if (glowBorder) glowBorder.style.opacity = '0';
    if (gradientOverlay) gradientOverlay.style.opacity = '0';
  },
});

// React component wrapper for glassmorphism elements
export const GlassWrapper = ({ children, className = '', style = {}, isActive = false, ...props }) => {
  const baseStyle = isActive ? { ...glassBase, ...glassActive } : glassBase;
  
  return (
    <div
      className={`relative group ${className}`}
      style={{
        ...baseStyle,
        ...style,
        transition: glassTransition,
      }}
      {...createGlassHoverHandlers()}
      {...props}
    >
      {/* Animated glow border */}
      <div
        className="glass-glow-border"
        style={getAnimatedGlowBorder()}
      />
      
      {/* Animated gradient overlay */}
      <div
        className="glass-gradient-overlay"
        style={getAnimatedGradientOverlay()}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Utility to merge glass styles
export const mergeGlassStyles = (base, overrides = {}) => ({
  ...glassBase,
  ...base,
  ...overrides,
});

