import { Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import './styles/styles.scss';
import RootLayout from './root/RootLayout';
import Home from './root/pages/Homepage/Home'
import ProfileDetails from './root/pages/profileDetails/profileDetails';
import AuthLayout from './auth/AuthLayout/AuthLayout'
import { Toaster } from "react-hot-toast";
import Signup from './auth/Signup';

function App() {
  return (
    <main>
      <Routes>
        {/* auth route  */}
        <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Login />} />
        </Route>


        {/* page route  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  )
}

export default App
