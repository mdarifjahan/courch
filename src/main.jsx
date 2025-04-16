import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/mentor',
        element:<Mentor/>
      },
      {              
        path:'/Fucher',
        element:<Fucher/>
      },
      {
        path:'/Courch-page',
        element:<Courch/>
      },
      {
        path:'/PhoneNumber-page',
        element:<PhoneNumber/>
      },
      {
        path:'/Signup-page',
        element:<Signup/>
      },
    ]
   
  },
]);
import App from './App.jsx'
import MainLayout from './layout/MainLayout.jsx';
import Home from './page/Home.jsx';

import Mentor from './components/Mentor.jsx';
import Fucher from './page/Fucher.jsx';

import Courch from './page/Courch.jsx';
import Signup from './components/Signup.jsx';
import PhoneNumber from './component/PhoneNumber.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
