'use client'
import { useState, useRef, TouchEvent } from 'react';

export default function CompaniesAssociated() {
  const logos: string[] = [
    "https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-L9HbCAQ5gYLogo.png?v=1716432430",
    "https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-BHA6NAd5p7Logo2.png?v=1716432445",
    "https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-bs5WM6Se3bLogo3.png?v=1716432562",
    "https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-UGPlx3mmHbLogo4.png?v=1716432576",
    "https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-DqQyYj4pNULogo5.png?v=1716432589",
    "https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-uo74lZ596eLogo6.png?v=1716432603"
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    setTranslateX(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
    setTranslateX(0);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndRef.current = e.touches[0].clientX;
    setTranslateX(touchStartRef.current - touchEndRef.current);
  };

  const handleTouchEnd = () => {
    handleSwipe();
    setTranslateX(0);
  };

  const handleSwipe = () => {
    if (touchStartRef.current - touchEndRef.current > 50) {
      nextSlide(); 
    } else if (touchEndRef.current - touchStartRef.current > 50) {
      prevSlide(); 
    }
  };

  return (
    <div className="bg-black p-6 px-8">
      <div className="hidden md:flex justify-between items-center">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-10" />
        ))}
      </div>

      <div 
        className="md:hidden relative flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          <img 
            src={logos[currentIndex]} 
            alt={`Logo ${currentIndex + 1}`} 
            className="h-10 opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
}
