import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"


const RootLayout = () => {
  
  return (
    <div className="">  
        <section >  
          <Outlet />
        </section>
    </div>
  )
}

export default RootLayout
