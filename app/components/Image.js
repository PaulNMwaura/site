'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";

const Images = () => {
  const [images, setImages] = useState([]); // Initialize as an empty array
  const { data: session } = useSession();
//   const userID = session.user.userID;

//   console.log("current user ID: ", userID);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/displayImages');
        const result = await response.json();
        console.log('Fetched images:', result);

        if (result.success) {
          setImages(result.images);
        } else {
          console.error('Error fetching images');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div className="transition-all hover:scale-[1.07]" key={image._id} style={{ margin: '10px' }}>
            <img
              src={`data:${image.contenttype};base64,${Buffer.from(image.data).toString('base64')}`} // Use image.data
              alt={image.name}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
