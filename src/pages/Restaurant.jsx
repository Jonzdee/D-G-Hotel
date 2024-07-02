import React from 'react'
// Components
import RestaurantAbout from '../components/RestaurantAbout'
import RestaurantCapacity from '../components/RestaurantCapacity'
import RestaurantGallery from '../components/RestaurantGallery'
import RestaurantHero from '../components/RestaurantHero'
import RestaurantMenu from '../components/RestaurantMenu'
import RestaurantStaff from '../components/RestaurantStaff'
import RestaurantVideo from '../components/RestaurantVideo'
import RestaurantFeedback from '../components/RestaurantFeedback'
import { Component } from 'spinners-react'

const Restaurant = () => {
  return (
    <div>
      <RestaurantHero />
      <RestaurantAbout />
      <RestaurantMenu />
      <RestaurantGallery />
      <RestaurantCapacity />
      <RestaurantStaff />
      <RestaurantVideo />
      {/* Similar to Feedback */}
      <RestaurantFeedback />
    </div>
  )
}

export default Restaurant