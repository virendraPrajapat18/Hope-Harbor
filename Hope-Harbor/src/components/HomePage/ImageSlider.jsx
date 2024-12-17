import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";

const images = [
  "https://media.assettype.com/sentinelassam-english%2F2024-07%2F515997f6-5bbc-495a-935b-03f0cea34914%2FOrgan%20copy.jpg?w=1024&auto=format%2Ccompress&fit=max",
  "https://i.pinimg.com/736x/b5/10/70/b510704a4747eacd9afaab035a18b757.jpg",
  "https://dehdan.org/ejournal/sepoct2019/youth-organ-donation.jpg",
  "https://www.kimssunshine.co.in/wp-content/uploads/2024/08/You-Can-Give-Someone-The-Gift-of-Life-Understanding-Organ-Donations-Vital-Role.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at first duplicated image
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = images.length;
  const intervalRef = useRef(null);

  // Extended images for smooth transitions
  const extendedImages = [
    images[images.length - 1], // Duplicate last image
    ...images,                // Original images
    images[0],                // Duplicate first image
  ];

  // Automatic sliding function
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 4000); // Slide every 3 seconds
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Clean up interval on unmount
  }, []);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides); // Snap to last original image
    } else if (currentIndex === totalSlides + 1) {
      setCurrentIndex(1); // Snap to first original image
    }
  };

  return (
    <div
      className="slider-container relative overflow-hidden w-screen"
      // onMouseEnter={stopAutoSlide} // Pause auto-slide on hover
      // onMouseLeave={startAutoSlide} // Resume auto-slide on leave
    >
      {/* Slider Wrapper */}
      <div
        className="slider-wrapper flex transition-transform duration-1000 ease-in-out "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className="slider-image w-screen h-[40rem]  flex-shrink-0"
        />
        
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="slider-button absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={nextImage}
        className="slider-button absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#9654;
      </button>

      {/* Indicators */}
      <div className="indicators absolute bottom-4 flex space-x-2 justify-center w-full">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index + 1)} // Adjust for duplicated images
            className={`indicator w-3 h-3 rounded-full ${
              index + 1 === currentIndex ? "bg-red-500" : "bg-gray-300"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;























