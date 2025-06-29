import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, X } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ImageItem {
  src: string;
  text: string;
}

interface Props {
  images?: ImageItem[];
}

export default function CustomCarousel({ images = [] }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const closeModalButton = () => setIsOpen(false);

  const handleNext = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  const currentImage = images[currentIndex];

  return (
 
      <>
        {!isOpen && (
          <div className="max-w-6xl mx-auto my-10 px-4 md:px-0">
            {images.length > 0 && (
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="pb-6"
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative group p-4"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      className="object-cover h-60 w-60 cursor-pointer group-hover:brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.text}
                    </div>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        )}
    
        {isOpen && currentImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 md:px-0 z-50"
            onClick={closeModal}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.text}
                className="w-full"
              />
              <div className="flex flex-col p-4">
                <div className="flex justify-between items-center pb-4">
                  <Instagram className="text-2xl" />
                  <h1 className="text-lg font-semibold">{currentImage.text}</h1>
                  <button onClick={closeModalButton}>
                    <X className="text-xl" />
                  </button>
                </div>
                <hr />
                <div className="flex justify-between py-5">
                  <button onClick={handlePrev}>
                    <ChevronLeft className="text-xl" />
                  </button>
                  <button onClick={handleNext}>
                    <ChevronRight className="text-xl" />
                  </button>
                </div>
                <div className="text-sm pb-10 md:pb-80 pt-4 text-center md:text-left">
                  {currentImage.text}
                </div>
                <hr className="my-2" />
                <div className="text-xs text-gray-500 text-center md:text-left">
                  Feb 3, 2025
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
    

}
