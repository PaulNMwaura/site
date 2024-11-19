'use client';

import React, { useState } from 'react'
import Link from "next/link";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setPassword] = useState('');
  const [confirmPassword, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!email || !newPassword || !confirmPassword)  {
        setError("All fields are necessary.");
        return;
    }

    try {
        const resUserExists = await fetch('api/userExists', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const {user} = await resUserExists.json();

        if(!user) {
            setError("Email does not exist.");
            return;
        }
        else {
            // Change Password
            if(newPassword === confirmPassword) {
                const resUpdatePassword = await fetch('/api/changePass', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, newPassword }),
                });
            
                const result = await resUpdatePassword.json();
            
                if (resUpdatePassword.ok) {
                    // Redirect to the login page and display a success message
                    setSuccess('Password updated successfully. Redirecting to login page...');
                    setTimeout(() =>{
                        router.push("/");
                    }, 3000);
                } else {
                    setError(result.message || 'Failed to update password.');
                }
            }
            else {
                setError("Passwords don't match.");
            }
        }

    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="outline outline-black outline-1 w-[98%] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-orange-500">Reset your password here</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text"> New Password</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text"> Confirm Password</span>
                    </label>
                    <input onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Enter Password" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <button type="submit" className="w-full btn btn-primary">Confirm</button>
                </div>
                {error&&(
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}
                {success&&(
                  <div className="bg-green-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {success}
                  </div>
                )}
            </form>
        </div>
      </div>
    </div>
  )
}
