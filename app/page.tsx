'use client';

import Image from "next/image";
// import ProductCard from "./ui_components/ProductCard/ProductCard";
import Navbar from "./ui_components/navbar/Navbar";
import styles from './images.module.css';


export default function Home() {

  return (
    // <div style={{ display: 'flex' }}>
    //   <aside
    //     style={{
    //       width: isSidenavOpen ? '250px' : '50px',
    //       height: isSidenavOpen ? '250px' : '50px',
    //       transition: 'width 0.7s, height 0.7s',
    //       overflow: 'hidden',
    //       background: 'orange',
    //     }}
    //   >
    //     <button onClick={() => setIsSidenavOpen(!isSidenavOpen)}>
    //       Menu
    //     </button>
    //     {/* Sidenav content here */}
    //   </aside>
    //   <main style={{ flex: 1, transition: 'margin-left 0.3s' }}>
    //     {/* {children} */}
    //   </main>
    // </div>
    // )
    // return (
    <div>
      <Navbar />
      <div className={styles.imageContainer}>
        <Image
          src="/Template.jpg"
          alt="Example Images"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* <ProductCard /> */}
    </div>
  );
}
