import React from "react";

function Header(){
    return(
        <div className="container mx-auto grid grid-cols-6 gap-3 my-4">
            <div className="col-span-5"><p className="text-lg">Dashboard</p></div>
            <div className="">
                <button className="bg-blue-600 inline-flex space-x-1 py-1 px-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Generate report</span>
                </button>
            </div>
        </div>
    )
}
export default Header;