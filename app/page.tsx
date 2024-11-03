'use client';

import Image from "next/image";
// import ProductCard from "./ui_components/ProductCard/ProductCard";
import Navbar from "./ui_components/navbar/Navbar";


export default function Home() {

  return (
    <div>
      <Navbar />
      <div className="min-h-[900px] lg:min-h-[500px] flex flex-wrap bg-slate-500">
        <div className="relative w-full lg:w-1/2 min-h-[500px] max-h-[500px] bg-blue-600 flex items-center justify-center text-center text-white">
          <div className="absolute w-[300px] min-h-[400px] max-h-[400px] lg:mr-[30%] bg-white flex flex-wrap items-center justify-between p-1 gap-1 rounded-3xl">
            <Image src="/Style1.jpg" alt="" layout="responsive" width={95} height={95} quality={90} className="basis-1/2 max-w-[48%] rounded-3xl" />
            <Image src="/Cornrows.jpg" alt="" layout="responsive" width={95} height={95} quality={90} className="basis-1/2 max-w-[48%] rounded-3xl" />
            <Image src="/Style2.jpg" alt="" layout="responsive" width={95} height={95} quality={90} className="basis-1/2 max-w-[48%] rounded-3xl" />
            <Image src="/fade.jpg" alt="" layout="responsive" width={95} height={95} quality={90} className="basis-1/2 max-w-[48%] rounded-3xl" />
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 min-h-[400px] bg-red-600 flex items-center justify-center text-center text-white">
          <p>
          Lorem ipsum mollis netus aliquam nunc at litora bibendum eleifend torquent augue, morbi maecenas consectetur donec nam tristique id volutpat rutrum
          mollis venenatis cras, vivamus tortor litora pulvinar laoreet lacinia porta per eleifend mauris. Bibendum rutrum pharetra eget mattis et ipsum pellentesque 
          tortor inceptos, mattis cubilia fermentum tellus amet inceptos pretium. Massa nunc mi ornare ac pulvinar sed aliquam accumsan pellentesque massa sed amet ut 
          porta elementum, ut in non varius amet class cubilia feugiat leo metus ut leo tortor enim. Neque erat nullam fames pulvinar class elit sagittis sed, et praesent
          tempor ultricies per metus ut nulla fames, feugiat non nullam tristique aliquam interdum mi. Habitasse taciti in venenatis at vestibulum elit eu aliquam integer, 
          fringilla posuere id faucibus aliquet rhoncus est felis bibendum inceptos, vestibulum vivamus tempor etiam cras justo felis dapibus. Lorem bibendum ultrices morbi 
          est sociosqu ante gravida a quis, accumsan sed proin rutrum phasellus fames litora sapien, curabitur dui ad curae et placerat auctor habitant.
          </p>
        </div>
      </div>
      <div className="relative min-w-full min-h-screen bg-slate-700 place-content-center text-center text-white">
        A NEW SECTION
      </div>
      <div className="relative min-w-full min-h-screen bg-slate-900 place-content-center text-center text-white">
        A NEW SECTION 2
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
