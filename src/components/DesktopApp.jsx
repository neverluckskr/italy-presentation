import { useState, useEffect, useCallback } from 'react';
import Topbar from './Topbar';
import SlideContainer from './SlideContainer';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import ToastContainer from './ToastContainer';
import { slidesData } from '../data/slides';
import { usePresentation } from '../hooks/usePresentation';
import { preloadAllImages, preloadNextSlideImage } from '../utils/preloadImages';

export default function DesktopApp() {
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const {
    currentSlide,
    goToNext,
    goToPrev,
    goToSlide,
    toggleGrid,
    isGridView,
    toggleFullscreen,
    toggleTheme,
    isDarkTheme,
  } = usePresentation(slidesData);

  // Предзагрузка всех изображений при монтировании
  useEffect(() => {
    preloadAllImages(slidesData);
  }, []);

  // Предзагрузка изображения следующего слайда при изменении текущего
  useEffect(() => {
    preloadNextSlideImage(slidesData, currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3300); // 3 секунды загрузки + 300мс на fade out
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (document.fullscreenElement) {
        document.body.classList.add('fullscreen-mode');
      } else {
        document.body.classList.remove('fullscreen-mode');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    handleFullscreenChange();

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't handle keyboard events if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return;
      }

      // Don't handle if GridView is open (let it handle its own navigation)
      if (isGridView) {
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          toggleGrid();
        }
        return;
      }

      // Handle navigation only when GridView is closed
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        goToPrev();
      } else if (e.key === 'f' || e.key === 'F') {
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          e.stopPropagation();
          toggleFullscreen();
        }
      } else if (e.key === 'g' || e.key === 'G') {
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          e.stopPropagation();
          toggleGrid();
        }
      } else if (e.key === 't' || e.key === 'T') {
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          e.stopPropagation();
          toggleTheme();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, true); // Use capture phase
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [goToNext, goToPrev, toggleGrid, isGridView, toggleFullscreen, toggleTheme]);

  return (
    <>
      {loading && <LoadingScreen />}
      <div 
        className={`presentation-container relative z-10 flex flex-col h-screen desktop-version ${isFullscreen ? 'fullscreen' : ''}`}
        role="application"
        aria-label="Презентація про Республіку Італія (Десктопна версія)"
      >
        <Topbar
          currentSlide={currentSlide}
          totalSlides={slidesData.length}
          onPrev={goToPrev}
          onNext={goToNext}
          onToggleGrid={toggleGrid}
          onToggleFullscreen={toggleFullscreen}
          onToggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          isFullscreen={isFullscreen}
          isGridView={isGridView}
        />
        
        <main 
          className="flex-1 p-2 sm:p-3 md:p-5 flex items-center justify-center overflow-hidden md:overflow-hidden relative"
          role="main"
          aria-label="Основний вміст презентації"
        >
          <SlideContainer
            slides={slidesData}
            currentIndex={currentSlide}
            onSlideClick={goToSlide}
            isGridView={isGridView}
            onCloseGrid={toggleGrid}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        </main>

        <Footer currentSlide={currentSlide} totalSlides={slidesData.length} />
      </div>
      <ToastContainer />
    </>
  );
}

