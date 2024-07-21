import { Link, Outlet } from "react-router-dom";
import logo from '../UI/logo.svg'


  


const Layout = () => {
   
  return (
    <header className='flex justify-between items-center p-3 text-white header-wrapper bg-cyan-600'>
      <div className="logoContent flex items-center">
        <h2 className='mr-3 text-2xl ml-[30px]'><em>GreenWich</em></h2>
        <img src={logo} alt="Logo here" />
</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <div>

      <button className='signinButton mr-[40px]'>Sign in</button>
   
      <button className='bg-slate-100 text-black px-3 py-2 rounded-md trailButton transition duration-700 ease-in-out hover:bg-cyan-600 hover:text-white hover:border-2 hover:border-slate-100'>Start Free Trial</button>
      </div>
      {/* <Outlet/> */}
    </header>
  );
};
export default Layout;
