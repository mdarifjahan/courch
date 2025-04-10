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
        path:'/afterEffectsCTA',
        element:<AfterEffectsCTA/>
      },
    ]
  },
]);
import App from './App.jsx'
import MainLayout from './layout/MainLayout.jsx';
import Home from './page/Home.jsx';
import Contact from './page/Contact.jsx';
import Mentor from './components/Mentor.jsx';
import Fucher from './page/Fucher.jsx';
import AfterEffectsCTA from './components/AfterEffectsCTA.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
