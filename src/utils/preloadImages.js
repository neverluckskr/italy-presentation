/**
 * Предзагрузка всех изображений из слайдов
 * @param {Array} slidesData - Массив данных слайдов
 */
export function preloadAllImages(slidesData) {
  const imageUrls = new Set();
  let priorityImages = []; // Приоритетные изображения (первые слайды и слайд 12)
  const normalImages = []; // Остальные изображения
  
  // Собираем все URL изображений из всех слайдов
  slidesData.forEach((slide, index) => {
    if (slide.content) {
      // Основное изображение слайда
      if (slide.content.image) {
        const url = slide.content.image;
        imageUrls.add(url);
        
        // Приоритет для первых 3 слайдов и слайда 12 (индекс 11)
        if (index < 3 || index === 11) {
          priorityImages.push(url);
        } else {
          normalImages.push(url);
        }
      }
      
      // Дополнительные изображения (если есть)
      if (slide.content.images && Array.isArray(slide.content.images)) {
        slide.content.images.forEach(img => {
          const url = typeof img === 'string' ? img : img.url;
          if (url && !imageUrls.has(url)) {
            imageUrls.add(url);
            normalImages.push(url);
          }
        });
      }
    }
  });
  
  // Функция для предзагрузки одного изображения
  const preloadImage = (url, isPriority = false) => {
    if (!url) return;
    
    // Метод 1: Link preload в head (самый быстрый способ)
    const existingLink = document.querySelector(`link[href="${url}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      link.fetchPriority = isPriority ? 'high' : 'auto';
      document.head.appendChild(link);
    }
    
    // Метод 2: Image объект для кеширования
    const img = new Image();
    img.src = url;
    img.loading = 'eager';
    img.fetchPriority = isPriority ? 'high' : 'auto';
    
    // Принудительно загружаем изображение
    img.onload = () => {
      // Изображение загружено и закешировано
    };
    
    // Метод 3: Fetch для принудительной загрузки в кеш (только для приоритетных)
    if (isPriority) {
      fetch(url, { 
        method: 'GET',
        cache: 'force-cache',
        priority: 'high'
      }).catch(() => {
        // Игнорируем ошибки fetch
      });
    }
  };
  
  // Сначала загружаем приоритетные изображения
  // Особый приоритет для изображения слайда 12 (Milan_skyline.jpg)
  const slide12Image = priorityImages.find(url => url.includes('Milan_skyline'));
  if (slide12Image) {
    // Загружаем изображение слайда 12 первым среди приоритетных
    preloadImage(slide12Image, true);
    // Дополнительная агрессивная загрузка
    setTimeout(() => {
      const img = new Image();
      img.src = slide12Image;
      img.loading = 'eager';
      img.fetchPriority = 'high';
      fetch(slide12Image, { 
        method: 'GET',
        cache: 'force-cache',
        priority: 'high'
      }).catch(() => {});
    }, 0);
    
    // Удаляем из массива, чтобы не загружать дважды
    priorityImages = priorityImages.filter(url => url !== slide12Image);
  }
  
  priorityImages.forEach(url => preloadImage(url, true));
  
  // Затем загружаем остальные с небольшой задержкой, чтобы не перегружать браузер
  let delay = 0;
  normalImages.forEach((url, index) => {
    setTimeout(() => {
      preloadImage(url, false);
    }, delay);
    // Добавляем небольшую задержку между загрузками (50ms)
    if ((index + 1) % 3 === 0) {
      delay += 50;
    }
  });
  
  console.log(`Предзагружено ${imageUrls.size} изображений (${priorityImages.length} приоритетных)`);
}

/**
 * Предзагрузка изображения следующего слайда
 * @param {Array} slidesData - Массив данных слайдов
 * @param {number} currentIndex - Текущий индекс слайда
 */
export function preloadNextSlideImage(slidesData, currentIndex) {
  const nextIndex = currentIndex + 1;
  if (nextIndex < slidesData.length && slidesData[nextIndex].content?.image) {
    const imageUrl = slidesData[nextIndex].content.image;
    
    // Проверяем, не загружено ли уже изображение
    const existingLink = document.querySelector(`link[href="${imageUrl}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageUrl;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      
      const img = new Image();
      img.src = imageUrl;
      img.loading = 'eager';
      img.fetchPriority = 'high';
      
      // Дополнительная загрузка через fetch для приоритетных слайдов (например, слайд 12)
      if (nextIndex === 11) {
        fetch(imageUrl, { 
          method: 'GET',
          cache: 'force-cache',
          priority: 'high'
        }).catch(() => {
          // Игнорируем ошибки fetch
        });
      }
    }
  }
  
  // Также предзагружаем изображение через один слайд для очень важных слайдов
  const nextNextIndex = currentIndex + 2;
  if (nextNextIndex === 11 && nextNextIndex < slidesData.length && slidesData[nextNextIndex].content?.image) {
    const imageUrl = slidesData[nextNextIndex].content.image;
    const existingLink = document.querySelector(`link[href="${imageUrl}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageUrl;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    }
  }
  
  // Специальная ранняя предзагрузка для изображения слайда 12 (Milan_skyline.jpg)
  // Начинаем загружать когда пользователь на слайде 10 или раньше
  if (currentIndex <= 10) {
    const slide12Index = 11;
    if (slide12Index < slidesData.length && slidesData[slide12Index].content?.image) {
      const slide12ImageUrl = slidesData[slide12Index].content.image;
      if (slide12ImageUrl.includes('Milan_skyline')) {
        const existingLink = document.querySelector(`link[href="${slide12ImageUrl}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = slide12ImageUrl;
          link.fetchPriority = 'high';
          document.head.appendChild(link);
          
          // Дополнительная загрузка через Image объект
          const img = new Image();
          img.src = slide12ImageUrl;
          img.loading = 'eager';
          img.fetchPriority = 'high';
        }
      }
    }
  }
}

