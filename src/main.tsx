
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import './styles/styles.scss'
import SideBar from './root/component/Sidebar.tsx'
import Navbar from './root/component/Navbar.tsx'
import { TanstackProvider } from './lib/tanstackprovider/TanstackProvider.tsx'
import { AuthProvider } from './lib/context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <TanstackProvider>
  <BrowserRouter>
      <AuthProvider>
  <div className="custom-wrapper">
    <div className="custom-navbar">
      <Navbar />
    </div>
    <div className="custom-content">
      <div className="custom-sidebar">
        <SideBar />
      </div>
      <div className="custom-main">
        <App />
      </div>
    </div>
  </div>
      </AuthProvider>
</BrowserRouter>
</TanstackProvider>
)
