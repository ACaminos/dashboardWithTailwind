import React from 'react'
import '../index.css'
import task from '../icons/task.png';


function DataCards(){
        return(
                <div className="container mx-auto">{/* container mx-auto */}
                        <div className="inline-flex ">
                                <div className="w-4/5 h-32 shadow-xl mx-4">
                                        <div className="grid grid-cols-5 gap-2 flex">
                                                <div className="w-2 h-32 bg-blue-700 flex-auto"/>
                                                <div className="pt-8 flex-auto col-span-2">
                                                        <div><p className="text-xs text-blue-700 font-bold">Earning (Monthly)</p></div>
                                                        <div><p className="text-sm text-gray-500 pt-3">$40.000</p></div>
                                                </div>

                                                <div className="justify-self-center col-span-2 pt-8">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                </div>
                                        </div>
                                </div>
                                <div className="w-4/5 h-32 shadow-xl mx-4">
                                        <div className="grid grid-cols-5 gap-2 flex">
                                                <div className="w-2 h-32 bg-green-300 flex-auto"/>
                                                        <div className="pt-8 flex-auto col-span-2">
                                                                <div><p className="text-xs text-green-300 font-bold">Earning (Annual)</p></div>
                                                                <div><p className="text-sm text-gray-500 pt-3">$215.000</p></div>
                                                        </div>

                                                        <div className="justify-self-center col-span-2 pt-8">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                        </div>
                                                </div>
                                </div>
                                <div className="w-4/5 h-32 shadow-xl mx-4">
                                        <div className="grid grid-cols-6 gap-2 flex">
                                                <div className="w-2 h-32 bg-blue-400 flex-auto"></div>
                                                <div className="pt-8 flex-auto col-span-3">
                                                        <div><p className="text-xs text-blue-400 font-bold">Tasks</p></div>
                                                        <div className="grid grid-cols-3 gap-2">
                                                        <div><p className="text-sm text-gray-500 pt-3">50%</p></div>
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200 mt-5 col-span-2">
                                                                <span className="w-12 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"/>
                                                        </div>
                                                        </div>
                                                </div>
                                                <div className="justify-self-center col-span-2 pt-8">
                                                        <img className="h-12 w-12" src={task} alt=".."/>
                                                </div>

                                        </div>
                                </div>
                                <div className="w-4/5 h-32 shadow-xl mx-4">
                                        <div className="grid grid-cols-5 gap-2 flex">
                                                <div className="w-2 h-32 bg-yellow-500 flex-auto"/>
                                                <div className="pt-8 flex-auto col-span-2">
                                                        <div><p className="text-xs text-yellow-500 font-bold">Pending Requests</p></div>
                                                        <div><p className="text-sm text-gray-500 pt-3">18</p></div>
                                                </div>
                                                <div className="justify-self-center col-span-2 pt-8">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                        </svg>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
export default DataCards;