import React from 'react';
import loginimage from '../components/loginimage.avif'

 function LoginPage() {
    return (
        <div className="  relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="flex mt-32 p-6  m-auto  rounded-md    ">
                <div className='mt-10 ml-4 border-black'>

                <h1 className="text-3xl font-semibold text-center text-purple-700  uppercase ">
                   Sign in
                </h1>
                <form className="mt-6 p-2 ">
                    <div className="mb-2 p-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800 "
                            >
                            Email
                        </label>
                        <input
                            type="email"
                            className=" border block w-96 px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                        >
                        Forget Password?
                    </a>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                        >
                        Sign up
                    </a>
                </p>
                        </div>
                
                        <div className='ml-4'>

            <img className='' style={{position:'relative',top:'1px' ,width:'500px',}} src={loginimage} alt="" />
                        </div>
            </div>

         </div>
    );
}


export default LoginPage;
