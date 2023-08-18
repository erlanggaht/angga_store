import { BrowserRouter,Route} from 'react-router-dom'
import SlideRoutes from 'react-slide-routes';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import Register from '@/pages/Register/Register';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <SlideRoutes>
          <Route path="/" element={<Home />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/buy/:id" element={<Register />} />
        </SlideRoutes>
      </BrowserRouter>
    </>
  )
}

export default App
