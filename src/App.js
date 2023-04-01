import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

import AddCircular from './pages/dashboard/AddCircular';
import Home from './pages/dashboard/Home';
import ViewCirculars from './pages/dashboard/ViewCirculars';

import Landing from './pages/Landing';
import OfficialLogin from './pages/OfficialLogin';
import PublicLogin from './pages/PublicLogin';
import PublicRegistration from './pages/PublicRegistration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicWelcome from './pages/PublicWelcome';
import ProtectedRoute from './pages/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path='/home' element={<ProtectedRoute Component ={Home} />} />
        <Route path='/add-circular' element={<ProtectedRoute Component ={AddCircular} />} />
        <Route path='/view-circulars' element={<ProtectedRoute Component ={ViewCirculars} />} />
      

        <Route path='/' element={<Landing />} />
        <Route path='/official-login' element={<OfficialLogin/>}/>
        <Route path='/public-registration' element={<PublicRegistration />} />
        <Route path='/public-login' element={<PublicLogin />} />
        <Route path='/public-welcome/:data' element={<PublicWelcome />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>


  
  );
}

export default App;
