import React from 'react';
import './fontawesome';
//components
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Room from './components/Room';
//pages
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import Restaurant from './pages/Restaurant';
import Contact from './pages/Contact';
import Spa from './pages/Spa';

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Service from './components/Service';
import Special from './components/Special';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  },
  {
    path: '/restaurants',
    element: <Restaurant />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

// const router = createBrowserRouter([
//       {
//         path: '/',
//         element: <Home />,
//       },
      // {
      //   path: '/room/:id',
      //   element: <RoomDetails />,
      // },
      // {
      //   path: '/restaurants',
      //   element: <Restaurant />,
      // },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/sign-up',
//         element: <SignUp />,
//       },
//       {
//         path: '/login',
//         element: <Login />,
//       },
// ]);
const App = () => {
  return <div>
    <Header />
    <RouterProvider router={router} />
    <Service />
  <Special />
    <Footer />
  </div>;
};

export default App;
