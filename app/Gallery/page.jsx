import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { 
    FaSignOutAlt,
    FaHome,
    FaCalendarAlt,
    FaStarHalfAlt,
    FaHandsHelping,
    FaInfoCircle
} from "react-icons/fa";
import Gallery_post from "../components/Gallery_post";

const page = () => {
  return (
    <div className="flex flex-row">
        
        <div className="p-4 h-full w-[50%] overflow-scroll bg-gray-400 flex flex-col items-center gap-2">
            <div className="h-[250px] min-w-[80%] max-w-[80%] bg-white">
                picture
            </div>
            <div className="h-[100px] w-[80%] bg-white">
                description
            </div>
            <div className="h-[250px] w-[80%] bg-white">
                picture
            </div>
            <div className="h-[100px] w-[80%] bg-white">
                description
            </div>
            <div className="h-[250px] w-[80%] bg-white">
                picture
            </div>
            <div className="h-[100px] w-[80%] bg-white">
                description
            </div>
            <div className="h-[250px] w-[80%] bg-white">
                picture
            </div>
            <div className="h-[100px] w-[80%] bg-white">
                description
            </div>
        </div>
    </div>
  );
};

export default page;
