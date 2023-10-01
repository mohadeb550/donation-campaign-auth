import { NavLink, useNavigate } from "react-router-dom";
import './navbar.css'
import { CiLogin} from 'react-icons/ci'
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import swal from "sweetalert";



export default function Navbar() {

  const navigate = useNavigate();
  const { currentUser , loading , logOut } = useAuth();
  if(loading){return <span className="loading loading-spinner absolute top-0 left-[50vw] w-16 text-amber-500"></span>}

  const handleSignOut = () => {
    logOut()
    .then(result => {
      swal("Logged Out", "You are log out successfully!", "success");
      navigate('/')
  })
  .catch(error =>  toast.error('An error occurred!'))
  }

  return (
    <div className="flex justify-between items-center py-8">
        <div>
            <img className="w-32 md:w-full" src="/logo.png"/>
        </div>
        
        <div className="flex gap-4 md:gap-8">
            <NavLink to='/'> <li className="list-none text-sm md:text-lg font-semibold"> Home </li> </NavLink>
            <NavLink to='/donation'> <li className="list-none text-sm md:text-lg font-semibold"> Donation </li> </NavLink>
            <NavLink to='/statistics'> <li className="list-none text-sm md:text-lg font-semibold"> Statistics </li> </NavLink>
            
            {currentUser?  <li className="list-none text-sm md:text-lg font-semibold border flex items-center gap-1 px-2 rounded cursor-pointer" onClick={handleSignOut}>  Sign Out <CiLogin/> </li>  :
            
            <NavLink to='/login'> <li className="list-none text-sm md:text-lg font-semibold border flex items-center gap-1 px-2 rounded ">  Login <CiLogin/> </li> </NavLink>}

          {currentUser &&  <div className="flex items-center gap-2 border py-1 px-2 rounded">
              <img src={currentUser?.photoURL} className="w-7 rounded-full "/>
              <h4 className="text-sm font-semibold"> {currentUser?.displayName} </h4>
            </div>}
           
        </div>
    </div>
  )
}
