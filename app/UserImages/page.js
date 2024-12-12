// SHOULD TURN THIS PAGE TO A COMPONENT

'use client';

import React, { useState } from 'react';
import Link from "next/link";

const UserUploadImage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if(!file) {
          alert("Please select a file.");
          return;
        }
    
        const data = new FormData();
        data.append('file', file);
        try {
          let result = await fetch('/api/uploadImage', {
            method: "POST",
            body: data,
          })
          result = await result.json();
    
          if(result.success) {
            alert("File Uploaded Succesfully.");
          } else {
            alert("File Failed Upload");
          }
    
        } catch (error) {
          console.log(error)
        }
      }
      const [file, setFile] = useState("");

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])}/> <br /><br />
          <button className="btn btn-primary btn-sm"type="submit">Upload</button> <br/> <br/>
          <Link className="text-sm mt-3 font-bold" href={"/BrowseBarbers"}>
            Browse Barbers
          </Link>
        </form>
    </div>
  )
}

export default UserUploadImage