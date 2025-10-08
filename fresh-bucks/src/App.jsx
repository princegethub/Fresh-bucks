import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { useEffect } from 'react';
import AOS from 'aos';  



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
