import { Component, useState } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, showDetails: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorDialog 
          error={this.state.error} 
          onReload={() => {
            this.setState({ hasError: false, error: null });
            window.location.reload();
          }}
          showDetails={this.state.showDetails}
          onToggleDetails={() => this.setState(prev => ({ showDetails: !prev.showDetails }))}
        />
      );
    }

    return this.props.children;
  }
}

function ErrorDialog({ error, onReload, showDetails, onToggleDetails }) {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-[9999] p-4 sm:p-6"
      style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(15, 15, 25, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Animated background pattern - Italian flag colors */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 146, 70, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(206, 43, 55, 0.1) 0%, transparent 50%)
          `,
          animation: 'errorBackgroundShift 8s ease-in-out infinite',
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      {/* Main dialog container */}
      <div
        className="relative z-10 max-w-2xl w-full rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.7) 0%, rgba(20, 20, 30, 0.8) 100%)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 146, 70, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          animation: 'errorDialogAppear 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Animated gradient border */}
        <div
          className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl opacity-60 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 146, 70, 0.4) 0%, rgba(255, 255, 255, 0.3) 33%, rgba(206, 43, 55, 0.4) 66%, rgba(0, 146, 70, 0.4) 100%)',
            backgroundSize: '300% 100%',
            animation: 'italianFlagGradient 4s ease-in-out infinite',
            filter: 'blur(8px)',
            zIndex: -1,
            margin: '-1px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 text-center">
          {/* Warning icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 146, 70, 0.3) 0%, rgba(0, 146, 70, 0.5) 100%)',
                boxShadow: '0 0 30px rgba(0, 146, 70, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                animation: 'errorIconPulse 2s ease-in-out infinite',
              }}
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  color: '#00FF7F',
                  filter: 'drop-shadow(0 0 8px rgba(0, 255, 127, 0.8))',
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4"
            style={{
              background: 'linear-gradient(90deg, #009246 0%, #ffffff 50%, #CE2B37 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'italianFlagGradient 4s ease-in-out infinite',
              filter: 'drop-shadow(0 0 10px rgba(0, 146, 70, 0.5))',
              textShadow: '0 0 20px rgba(0, 146, 70, 0.3)',
            }}
          >
            Помилка завантаження
          </h1>

          {/* Message */}
          <p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            Вибачте, сталася помилка при завантаженні презентації.
          </p>

          {/* Reload button */}
          <button
            onClick={onReload}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 mx-auto block"
            style={{
              background: 'linear-gradient(135deg, rgba(206, 43, 55, 0.8) 0%, rgba(206, 43, 55, 0.6) 100%)',
              color: '#ffffff',
              boxShadow: '0 4px 16px rgba(206, 43, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(206, 43, 55, 1) 0%, rgba(206, 43, 55, 0.8) 100%)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(206, 43, 55, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(206, 43, 55, 0.8) 0%, rgba(206, 43, 55, 0.6) 100%)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(206, 43, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
            }}
          >
            <span className="relative z-10">Перезавантажити сторінку</span>
            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(206, 43, 55, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(206, 43, 55, 0.4) 100%)',
                backgroundSize: '200% 100%',
                animation: 'italianFlagGradient 3s ease-in-out infinite',
                filter: 'blur(10px)',
                margin: '-2px',
              }}
            />
          </button>

          {/* Error details (development only) */}
          {process.env.NODE_ENV === 'development' && error && (
            <div className="mt-6 sm:mt-8 text-left">
              <button
                onClick={onToggleDetails}
                className="flex items-center gap-2 text-sm sm:text-base text-white/70 hover:text-white/90 transition-colors duration-200 cursor-pointer group"
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                }}
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${showDetails ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(206, 43, 55, 0.5))',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span
                  style={{
                    background: showDetails
                      ? 'linear-gradient(90deg, rgba(206, 43, 55, 0.6) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(206, 43, 55, 0.6) 100%)'
                      : 'linear-gradient(90deg, rgba(206, 43, 55, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(206, 43, 55, 0.4) 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: showDetails ? 'italianFlagGradient 3s ease-in-out infinite' : 'none',
                  }}
                >
                  Деталі помилки (тільки для розробки)
                </span>
              </button>
              {showDetails && (
                <div
                  className="mt-3 p-4 rounded-lg overflow-auto max-h-60 sm:max-h-80"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    animation: 'errorDetailsAppear 0.3s ease-out',
                  }}
                >
                  <pre
                    className="text-xs sm:text-sm text-white/70 leading-relaxed"
                    style={{
                      fontFamily: 'monospace',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {error.toString()}
                    {error.stack && `\n\n${error.stack}`}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes errorDialogAppear {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes errorBackgroundShift {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes errorIconPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 30px rgba(0, 146, 70, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(0, 146, 70, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.3);
          }
        }

        @keyframes errorDetailsAppear {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

ErrorDialog.propTypes = {
  error: PropTypes.object,
  onReload: PropTypes.func.isRequired,
  showDetails: PropTypes.bool.isRequired,
  onToggleDetails: PropTypes.func.isRequired,
};
