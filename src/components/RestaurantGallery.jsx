import React from 'react'
import RestaurantGallerySlider from './RestaurantGallerySlider'

const RestaurantGallery = () => {
  return (
    <div  className="bg-blackClr pt-20 px-5">
        <div className="text-4xl lg:text-6xl text-center w-full font-btnFont text-white pb-5">
            Restaurant Photo Gallery
        </div>
        <div className="text-center text-fontClrGrey font-semibold mb-10">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem.
        </div>
        <div>
            <RestaurantGallerySlider />
        </div>
    </div>
  )
}

export default RestaurantGallery