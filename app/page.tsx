'use client';

import Image from "next/image";
// import ProductCard from "./ui_components/ProductCard/ProductCard";
import Navbar from "./ui_components/navbar/Navbar";
import styles from './images.module.css';

export default function Home() {
  return (
    <div className="min-w-full min-h-full">
      <Navbar />
      {/* <h1>Hello World</h1> */}
      <div className={styles.imageContainer}>
        <Image src="/Template.jpg" alt="Example Images" fill style={{objectFit:"cover"}} />
      </div>
      {/* <ProductCard /> */}
    </div>
  )
}
