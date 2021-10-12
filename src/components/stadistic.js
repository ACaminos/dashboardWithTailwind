import react from "react";
import progress from '../icons/progress.png';

function Stadistic(){
    return(
        <div className=""> {/* container mx-auto pl-8 */}
            <div className="grid grid-cols-9 mt-4 gap-2">
                <div className="col-span-6 border-black">
                    <div className="grid-rows-2">
                        <div className="bg-gray-100 p-2">
                            <p className="text-blue-600">Earning Overview</p>
                        </div>
                        <div className="grid-rows-6">
                            <div className="grid grid-cols-8 my-8">
                                <div className="">$40.000</div>
                                <div className="col-span-7 pt-3"><hr/></div>
                            </div>
                            <div className="grid grid-cols-8 my-8">
                                <div className="">$30.000</div>
                                <div className="col-span-7 pt-3"><hr/></div>
                            </div>
                            <div className="grid grid-cols-8 my-8">
                                <div className="">$20.000</div>
                                <div className="col-span-7 pt-3"><hr/></div>
                            </div>
                            <div className="grid grid-cols-8 my-8">
                                <div className="">$10.000</div>
                                <div className="col-span-7 pt-3"><hr/></div>
                            </div>
                            <div className="grid grid-cols-8 my-8">
                                <div className="">$ 0</div>
                                <div className="col-span-7 pt-3"><hr/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 w-80">
                    <div className="grid-rows-2">
                        <div className="bg-gray-100 p-2">
                            <p className="text-blue-600">Revenue Sources</p>
                        </div>
                        <div className="row">
                            <img src={progress} alt="" className="h-80 w-auto bg-white"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stadistic;