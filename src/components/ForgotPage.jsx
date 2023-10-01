

export default function ForgotPage() {
    
  return (
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
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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
