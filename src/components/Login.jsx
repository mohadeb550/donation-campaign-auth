import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Auth.jsx";
import toast  from "react-hot-toast";


export default function Login() {

    const navigate = useNavigate()
    const { loginUser ,loginWithGoogle, loginWithGithub } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result => {
    
            e.target.reset();
            toast.success('Logged In')
            navigate('/')
        })
        .catch(error =>  toast.error('An error occurred!'))
    }

    const socialLogin = (platform) => {
      platform()
      .then(result => {
          toast.success('Login Successful!')
          navigate('/')
      })
      .catch(error => {
          toast.error('An error occurred!')
      })
  }



  return(
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">


        <form onSubmit={handleLogin}>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered" name="email" />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="Password" className="input input-bordered" name="password" />
            <label className="label">
              <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
            </label>

            <div>
                <h4 className="text-sm font-semibold"> Don't Have An Account? <Link to='/signUp'> <span className="text-orange-500 underline"> Sign Up </span></Link> </h4>
            </div>

            <div className="flex my-2 gap-2">
                <img className="w-40 cursor-pointer" src="/loginWithGoogle.png" onClick={()=> socialLogin(loginWithGoogle)} />
                <img className="w-40 cursor-pointer" src="/github.jpg" onClick={()=> socialLogin(loginWithGithub)}/>
            </div>

          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error text-gray-50" type="submit"> Login </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}
