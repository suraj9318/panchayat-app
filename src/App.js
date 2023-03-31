import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

import AddCircular from './pages/dashboard/AddCircular';
import Home from './pages/dashboard/Home';
import ViewCirculars from './pages/dashboard/ViewCirculars';

import Landing from './pages/Landing';
import OfficialLogin from './pages/OfficialLogin';
import PublicLogin from './pages/PublicLogin';
import PublicRegistration from './pages/PublicRegistration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/add-circular' element={<AddCircular />} />
        <Route path='/view-circulars' element={<ViewCirculars />} />
      

        <Route path='/' element={<Landing />} />
        <Route path='/official-login' element={<OfficialLogin/>}/>
        <Route path='/public-registration' element={<PublicRegistration />} />
        <Route path='/public-login' element={<PublicLogin />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>


    // <Landing/>
    // <PublicRegistration/>
    // <OfficialLogin/>
    // <PublicLogin/>

    // <Home/>
    // <AddCircular/>
  );
}

export default App;
