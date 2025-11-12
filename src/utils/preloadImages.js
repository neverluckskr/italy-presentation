/**
 * Предзагрузка всех изображений из слайдов
 * @param {Array} slidesData - Массив данных слайдов
 */
export function preloadAllImages(slidesData) {
  const imageUrls = new Set();
  
  // Собираем все URL изображений из всех слайдов
  slidesData.forEach(slide => {
    if (slide.content) {
      // Основное изображение слайда
      if (slide.content.image) {
        imageUrls.add(slide.content.image);
      }
      
      // Дополнительные изображения (если есть)
      if (slide.content.images && Array.isArray(slide.content.images)) {
        slide.content.images.forEach(img => {
          if (typeof img === 'string') {
            imageUrls.add(img);
          } else if (img.url) {
            imageUrls.add(img.url);
          }
        });
      }
    }
  });
  
  // Предзагружаем все изображения через link preload и Image объекты
  imageUrls.forEach(url => {
    if (url) {
      // Метод 1: Link preload в head (самый быстрый способ)
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      
      // Метод 2: Image объект для кеширования
      const img = new Image();
      img.src = url;
      img.loading = 'eager';
      img.fetchPriority = 'high';
      
      // Принудительно загружаем изображение
      img.onload = () => {
        // Изображение загружено и закешировано
      };
    }
  });
  
  console.log(`Предзагружено ${imageUrls.size} изображений`);
}

