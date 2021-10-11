import React from "react";
import userIcon from '../icons/userIcon.jpg';

function Navbar(){
    return(
        <div className="grid-rows-1 my-2 pt-3">
            <div className="grid grid-cols-4">
                <form className="inline-flex col-span-3">
                        <div className="col-span-2">
                            <input className="bg-gray-200" type="search" placeholder=" Search for..."></input>
                        </div>
                        <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-400 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                </form>
                <div className="grid grid-cols-4">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </div>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </div>
                    <div className="">|</div>
                    <div className="">
                        <img src={userIcon} alt="" className="h-5 w-5 rounded-full"/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;