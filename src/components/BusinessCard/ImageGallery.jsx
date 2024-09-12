import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

function ImageGallery({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [preloadedImages, setPreloadedImages] = useState([]);

    // Preload images when the component mounts
    useEffect(() => {
        const preloadImages = images.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });
        setPreloadedImages(preloadImages);
    }, [images]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsAnimating(false);
        }, 500);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setIsAnimating(false);
        }, 500);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
    });

    return (
        <div {...swipeHandlers} className="w-full flex flex-col items-center">
            <div className="w-full max-h-[700px] mb-4 rounded-lg overflow-hidden relative">
                {/* Display the current image */}
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className={`w-full h-auto rounded-lg object-cover transform transition-all duration-500 ease-in-out ${
                        isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
                />
            </div>
            <div className="flex justify-between w-full">
                <button
                    onClick={handlePrev}
                    className="bg-gray-300 px-4 rounded-lg"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="bg-gray-300 px-4 rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ImageGallery;
