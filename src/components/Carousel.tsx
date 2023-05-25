import { useCallback, useEffect, useState } from "react";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const images = [
    "https://dummyimage.com/600x400/000/fff&text=Image+1",
    "https://dummyimage.com/600x400/000/fff&text=Image+2",
    "https://dummyimage.com/600x400/000/fff&text=Image+3",
    "https://dummyimage.com/600x400/000/fff&text=Image+4",
    "https://dummyimage.com/600x400/000/fff&text=Image+5",
  ];

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  //   Research swiping and dragging effect /

  useEffect(() => {
    if (isAutoPlay) {
      const autoplayId = setInterval(() => {
        goToNextImage();
      }, 3000);

      return () => clearInterval(autoplayId);
    }
  }, [images.length, goToNextImage, isAutoPlay]);

  return (
    <div className="image-carousel" onClick={() => setIsAutoPlay(false)}>
      <div className="carousel-image">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <div className="carousel-controls">
        <button className="prev-button" onClick={goToPreviousImage}>
          Previous
        </button>
        <span className="image-count">
          {currentImageIndex + 1} / {images.length}
        </span>
        <button className="next-button" onClick={goToNextImage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
