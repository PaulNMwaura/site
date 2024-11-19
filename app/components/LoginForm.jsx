'use client';

import React, { useState } from 'react'
import Link from "next/link";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email, password, redirect: false,
      });

      if (res.error) {
        setError('Invalid credentials.');
        return;
      }

      router.replace("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="outline outline-black outline-1 w-[98%] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-orange-500">UNDER MAINTANANCE</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" className="w-full input input-bordered input-primary" />
                </div>
                <a href="/ForgotPass" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                <div>
                    <button className="w-full btn btn-primary">Login</button>
                </div>
                {error&&(
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}
                <Link  className="text-sm mt-3 rt" href={'/register'}>
                Don't have an account? <span className="underline">Register</span>
                </Link>
            </form>
        </div>
      </div>
    </div>
  )
}
