'use client';

import Image from "next/image";
import Navbar from "./ui_components/navbar/Navbar";
import { Roboto, Bebas_Neue } from 'next/font/google';

const roboto = Roboto({
  weight: '400', // Define weights, styles
  subsets: ['latin'],
});

const bebas = Bebas_Neue({
  weight: '400', // Define weights, styles
  subsets: ['latin'],
});


export default function Home() {

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
          <p className="font-sans text-3xl text-gray-500">
            WE GOT YOU COVERED
          </p>
        </div>
      </div>
      <div className="w-full h-fit flex place-content-center">
        <div className="relative w-3/4 min-h-96 bg-slate-900 place-content-center text-center rounded-3xl">
          <p className="font-bold text-3xl text-white">
            MAKING IT EASIER TO: <br /> <br />
            FIND A STYLISTS NEAR YOU <br />
            VIEW PREVIOUS WORK DONE BY THEM <br />
            CONTACT THEM TO SEE IF THEY CAN SERVICE YOUR BEAUTY NEEDS <br />
          </p>
        </div>
      </div>
      <div className="relative min-w-full min-h-fit flex flex-col items-center justify-center bg-white"> {/* {height/width fit content is very powerful} */}
        <div className="w-fit h-fit font-bold text-3xl text-purple-500 text-center">
          WHICH SERVICE ARE YOU LOOKING FOR?
        </div>
        <div className="w-[90%] h-1/2 bg-white justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 p-10">
          <div className="w-[80%] md:w-56 h-72 bg-red-500 flex items-center justify-center text-center font-bold text-white rounded-3xl">
            <p> BARBERS</p>
          </div>
          <div className="w-[80%] md:w-56 h-72 bg-red-500 flex items-center justify-center text-center font-bold text-white rounded-3xl">
            <p>HAIR STYLERS</p>
          </div>
          <div className="w-[80%] md:w-56 h-72 bg-red-500 flex items-center justify-center text-center font-bold text-white rounded-3xl">
            <p>BRAIDING</p>
          </div>
          <div className="w-[80%] md:w-56 h-72 bg-red-500 flex items-center justify-center text-center font-bold text-white rounded-3xl">
            <p>OTHER</p>
          </div>
        </div>
      </div>
      <div className="relative min-w-full min-h-screen bg-black place-content-center text-center text-white">
        A NEW SECTION 3
      </div>
      {/* <div className={styles.imageContainer}>
        <Image
          src="/Template.jpg"
          alt="Example Images"
          fill
          style={{ objectFit: "cover" }}
        />
      </div> */}
      {/* <ProductCard /> */}
    </div>
  );
}
