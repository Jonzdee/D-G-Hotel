import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
//import swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
//import required modules
import {EffectFade, Autoplay} from 'swiper';
//images
import Img1 from '../assets/img/heroSlider/1.jpg'
import Img2 from '../assets/img/heroSlider/2.jpg'
import Img3 from '../assets/img/heroSlider/3.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Sample data for counters and services, replace with your data
const counters = [
  {
    id: 1,
    number: 406,
    label: 'International Guests',
  },
  {
    id: 2,
    number: 132,
    label: 'Five stars rating',
  },
  {
    id: 3,
    number: 207,
    label: 'Served Breakfast',
  },
];

const services = [
  {
    id: 1,
    icon: 'hotel',
    label: 'Rooms',
  },
  {
    id: 2,
    icon: 'mug-hot',
    label: 'Restaurant',
  },
  {
    id: 3,
    icon: 'champagne-glasses',
    label: 'Luxury Bars',
  },
  {
    id: 4,
    icon: 'chair',
    label: 'Meeting Hall',
  },
];

const CounterBox = ({ counter }) => (
  <div className="mb-8">
    <h2 className="text-blue-600 text-4xl font-bold mb-2">
      <span className="counter" data-number={counter.number}>{counter.number}</span>+
    </h2>
    <h5 className="text-white">{counter.label}</h5>
  </div>
);

const ServiceBox = ({ service }) => (
  <div className="p-5 border text-center border-white bg-opacity-25 bg-black hover:bg-blue-800 transition duration-300">
    <div className="text-blue-600 text-4xl mb-4 ">
    <FontAwesomeIcon icon={['fa', service.icon]} />
    </div>
    <h4 className="text-white">{service.label}</h4>
  </div>
);

const OurSpecialization = () => (
  <Swiper>
    <section className="relative py-20 bg-black bg-opacity-60">
    <div className="absolute inset-0 bg-[url('../assets/img/rooms/1.jpg')] bg-cover"></div>
    <div className="container mx-auto relative z-10">
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold mb-2" data-title="Specialization">Our Specialization</h2>
        <div className="w-20 h-1 bg-blue-600"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="text-white mb-8">
            <h3 className="text-xl font-bold mb-2">Discover a hotel that defines a new dimension of luxury.</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {counters.map(counter => (
              <CounterBox key={counter.id} counter={counter} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {services.map(service => (
            <ServiceBox key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  </section>
  </Swiper>
);

export default OurSpecialization;
