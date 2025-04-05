import { Outlet } from "react-router-dom"
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
