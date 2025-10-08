import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Menu from '../pages/menu/Menu';
import Contact from '../pages/contact/Contact';
import About from '../pages/about/About';
import Branches from '../pages/branches/Branches';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/menu', element: <Menu /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> },
  { path: '/branches', element: <Branches /> },
]);

export default router;
