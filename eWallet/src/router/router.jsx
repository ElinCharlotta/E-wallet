import { createBrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home';
import AddCard from '../Pages/AddCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/addcard', 
    element: <AddCard />,
  },

]);

export default router;
