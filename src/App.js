import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePageComponent from './components/HomePageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfilePageComponent from './components/ProfilePageComponent';
import UserContext from './UserContext/UserContext';
import UserHooks from './Hooks/UserHooks';


function App() {




  return (
    // Wrapping our application in browserRouter to enable Routing

    // provider allows access to its value which in this case is userhooks to all components we call user hooks through our usercontext withing our components
    <UserContext.Provider value={UserHooks()}>
      <BrowserRouter>
        <Routes>
          {/* '/' determines our homepage and default rendered page */}
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/profile' element={<ProfilePageComponent />} />

        </Routes>


      </ BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
