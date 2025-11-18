import { useState, useEffect, useCallback } from 'react';
import Topbar from './Topbar';
import SlideContainer from './SlideContainer';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import ToastContainer from './ToastContainer';
import { slidesData } from '../data/slides';
import { usePresentation } from '../hooks/usePresentation';
import { preloadAllImages, preloadNextSlideImage } from '../utils/preloadImages';

export default function MobileApp() {
  const [loading, setLoading] = useState(true);
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

  return (
    <>
      {loading && <LoadingScreen />}
      <div 
        className="presentation-container relative z-10 flex flex-col h-screen mobile-version"
        role="application"
        aria-label="Презентація про Республіку Італія (Мобільна версія)"
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
          isGridView={isGridView}
        />
        
        <main 
          className="flex-1 p-2 flex items-center justify-center overflow-hidden relative"
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

