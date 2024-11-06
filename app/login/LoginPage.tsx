import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="outline outline-black outline-1 w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-purple-700">[UNDER MAINTANANCE]</h1>
            <form className="space-y-4">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered input-primary" />
                </div>
                <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                <div>
                    <button className="btn btn-primary ">Login</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
