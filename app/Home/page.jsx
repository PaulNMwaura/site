'use client';
import React from 'react';
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="w-full min-h-fit lg:min-h-fit flex flex-wrap bg-white">
            <div className="relative w-full lg:w-1/2 min-h-[500px] max-h-[500px] bg-white flex lg:items-center justify-center text-center text-white">
            <div className="relative w-[350px] max-h-[500px] bg-white grid grid-cols-2 gap-2 p-2 rounded-3xl">
                <Image src="/Style1.jpg" alt="Style 1" width={100} height={100} layout="responsive" className="w-full h-full object-cover rounded-3xl" />
                <Image src="/Cornrows.jpg" alt="Cornrows" width={100} height={100} layout="responsive" className="w-full h-full object-cover rounded-3xl" />
                <Image src="/Style2.jpg" alt="Style 2" width={100} height={100} layout="responsive" className="w-full h-full object-cover rounded-3xl" />
                <Image src="/fade.jpg" alt="Fade" width={100} height={100} layout="responsive" className="w-full h-full object-cover rounded-3xl" />
            </div>
            </div>
            <div className="relative w-full lg:w-1/2 min-h-[400px] bg-white flex items-center justify-center flex-col text-center text-white">
            <p className="font-bold text-5xl text-gray-500 text-pretty">
                WANT TO CHANGE UP YOUR LOOK?
            </p>
            <p className="font-sans text-3xl text-purple-500">
                WE GOT YOU COVERED
            </p>
            </div>
        </div>
        <div className="w-full h-fit flex place-content-center">
            <div className="relative w-3/4 min-h-96 bg-slate-900 place-content-center text-center rounded-3xl transform hover:scale-[1.10] transition-transform duration-300 z-10">
                <p className="p-10 font-bold text-3xl bg-gradient-to-l from-purple-500 to-orange-600 text-transparent bg-clip-text">
                    MAKING IT EASIER TO: <br /> <br />
                    FIND A STYLISTS NEAR YOU <br />
                    VIEW PREVIOUS WORK DONE BY THEM <br />
                    CONTACT THEM TO SEE IF THEY CAN SERVICE YOUR BEAUTY NEEDS <br />
                </p>
            </div>
        </div>
        <div className="relative min-w-full min-h-fit flex flex-col items-center justify-center bg-white"> {/* {height/width fit content is very powerful} */}
            <div className="pt-20 w-fit h-fit font-bold text-6xl text-black text-center">
            WHICH SERVICE ARE YOU LOOKING FOR?
            </div>
            <div className="w-[90%] h-1/2 bg-white justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 p-10">
                <a href="./Home" className="w-[80%] md:w-56 h-72 bg-red-500 flex flex-col place-content-end text-center font-bold text-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.05] transition-transform duration-300">
                    <p className='p-5'>BARBERS</p>
                    <div className='w-full h-full'>
                        <div className="w-full h-full bg-teal-500 rounded-ss-full">
                        </div>
                    </div>
                </a>
                <a href="./Home" className="w-[80%] md:w-56 h-72 bg-red-500 flex flex-col place-content-end text-center font-bold text-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.05] transition-transform duration-300">
                    <p className='p-5'>HAIR STYLERS</p>
                    <div className='w-full h-full'>
                        <div className="w-full h-full bg-teal-500 rounded-se-full">
                        </div>
                    </div>
                </a>
                <a href="./Home" className="w-[80%] md:w-56 h-72 bg-red-500 flex flex-col place-content-end text-center font-bold text-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.05] transition-transform duration-300">
                    <p className='p-5'>BRAIDERS</p>
                    <div className='w-full h-full'>
                        <div className="w-full h-full bg-teal-500 rounded-es-full">
                        </div>
                    </div>
                </a>
                <a href="./Home" className="w-[80%] md:w-56 h-72 bg-red-500 flex flex-col place-content-end text-center font-bold text-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.05] transition-transform duration-300">
                    <p className='p-5'>OTHER</p>
                    <div className='w-full h-full'>
                        <div className="w-full h-full bg-teal-500 rounded-ee-full">
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="relative min-w-full min-h-fit bg-stone-500 flex place-content-center text-center text-white rounded-3xl">
            <div className="video-container w-1/2 h-1/4 rounded-3xl">
            <video autoPlay loop muted controls controlsList="nodownload" className="w-full h-full object-cover rounded-3xl">
                <source src="/homePageVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        </div>
    </div>
  )
}

export default Home
