import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export const Layout = () => {
    return (
        <>
            <div className="navbar" >
              <Navbar/>  
            </div>
            

            <main>
                <Outlet />
            </main>

            <div className="footer">
            <h1>Front end</h1>
            </div>
            
       </>
    )
}

export default Layout