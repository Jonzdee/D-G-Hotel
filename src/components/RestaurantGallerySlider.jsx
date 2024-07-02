import React, { useState, useEffect } from "react";

import ServicesCard from "./ServicesCard";

import { gallery } from "../data/galleryRestaurant";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RestaurantGallerySlider = () => {
  // states for active slider and number of sliders on screen
  const [activeSlider, setActiveSlider] = useState(0);
  const [slidersNumber, setSlidersNumber] = useState(4);

  // useEffect hook to handle screen size at page load
  useEffect(() => {
    handleScreenSizes();
  }, []);

  // function to handle number of cards depending on screen size
  const handleScreenSizes = () => {
    if (window.innerWidth < 600) {
      setSlidersNumber(1);
    } else if (window.innerWidth < 1200) {
      setSlidersNumber(2);
    } else if (window.innerWidth < 1600) {
      setSlidersNumber(3);
    } else {
      setSlidersNumber(4);
    }
  };

  // handle shift to left by one
  const handleShiftLeft = () => {
    if (activeSlider === 0) {
      setActiveSlider(0);
    } else {
      setActiveSlider(activeSlider - 1);
    }
  };

  //handles shift to right by one
  const handleShiftRight = () => {
    if (activeSlider === gallery.length - slidersNumber) {
      setActiveSlider(activeSlider);
    } else {
      setActiveSlider(activeSlider + 1);
    }
  };

  // slice arrays for card mapping
  let modifiedSlides = gallery.slice(
    activeSlider,
    activeSlider + slidersNumber
  );
  return (
    <div>
      <div className="flex items-center justify-between gap-5">
        {modifiedSlides.map((card) => (
          <div key={card.tag}>
            <ServicesCard tag={card.tag} url={card.url} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between max-w-5xl mx-auto pb-5 px-5">
        <div className="text-white">
          {activeSlider + 1}/{gallery.length}
        </div>
        <div>
          <button onClick={handleShiftLeft}>
            <FaChevronLeft size={30} fill="white" />
          </button>
          <button onClick={handleShiftRight}>
            <FaChevronRight size={30} fill="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantGallerySlider;