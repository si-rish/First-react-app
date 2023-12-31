import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
   
    {
        path: '/about',
        element: <About/>
    },
   
    {
        path: '/contact',
        element: <Contact/>
    }
   
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
 