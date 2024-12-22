"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface Lister {
  _id: string;
  firstname: string;
  lastname: string;
  location: string;
  phone?: string;
  email?: string;
  profilePicture?: string;
  status: string;
  schedule?: {
    [day: string]: { start: string; end: string };
  };
}

export default function Listers() {
  const [listers, setListers] = useState<Lister[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchListers = async () => {
      try {
        const response = await fetch("/api/getListers");
        const data = await response.json();
        console.log("Fetched data:", data); // Log data to confirm structure
        setListers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching listers:", error);
        setLoading(false);
      }
    };

    fetchListers();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="max-w-6xl p-4">
      <h1 className="text-2xl font-bold mb-6">All Listers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="w-screen h-screen flex flex-col">
          {Array.isArray(listers) && listers.length > 0 ? (
            <div className="w-screen space-y-8 pr-10">
              {listers.map((lister) => (
                <div key={lister._id} className="border p-4 rounded shadow-md flex flex-row hover:scale-[1.009] transition transform duration-300" onClick={() => redirect('/ListersPage')}>
                    <img className="my-8" src="/placeholder/Generic-Head.png" style={{ maxWidth: '60px', maxHeight: '60px' }}/>
                    <div className="pl-10 pt-4 w-full h-full flex flex-row">
                        <h2>
                            {lister.firstname} {lister.lastname}
                        </h2>
                        <p className="ml-auto">{lister.location}</p>
                    </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="justify-center text-center">No listers found.<br/>Or no listers in your area</p>
          )}
        </div>
      </div>
    </div>
  );
}
