import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import Home from "./home/Home";
import Shop from "./shop/Shop";
import Contact from "./contact/Contact";
import Nopage from "./Components/Nopage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: "/", element:<Home/>},
      {path: "/shop", element:<Shop/>},
      {path: "/contact", element:<Contact/>},
      {path: "*", element:<Nopage/>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
