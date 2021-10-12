import '../index.css'
import speedometer from '../icons/speedometer.png';
import configuration from '../icons/configuration.png';
import configure from '../icons/configure.png';

function Sidebar(){
    return(
        <div className="sidebar h-screen">
            <aside className="grid grid-cols-1 bg-blue-500 h-screen py-11 px-9">
                <div className="grid grid-rows-9">
                    <div><p className="text-center text-white">Admin</p></div>
                    <hr/>
                    <div className="grid grid-cols-4 py-3">
                        <div className="col-1">
                            <img src={speedometer} alt="" className="h-5 w-5"/>
                        </div>
                        <div className="col-span-3">
                            <p className="text-white">Dashboard</p>
                        </div>
                    </div><hr/>
                    <div><p className="text-gray-300 font-semibold">INTERFACE</p></div>
                    <div className="grid grid-cols-4 py-3">
                        <div className="col-1">
                            <img src={configuration} alt="" className="h-5 w-5"/>
                        </div>
                        <div className="col-span-3">
                            <p className="text-white">Components</p>
                        </div>
                    </div><hr/>
                    <div className="grid grid-cols-4 py-3">
                        <div className="col-1">
                            <img src={configuration} alt="" className="h-5 w-5"/>
                        </div>
                        <div className="col-span-3">
                            <p className="text-white">Utilities</p>
                        </div>
                    </div><hr/>
                    <div><p className="text-gray-300 font-semibold">ADDONS</p></div>
                    <div className="grid grid-cols-4 py-3">
                        <div className="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            </svg>
                        </div>
                        <div className="col-span-3">
                            <p className="text-white">Pages</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 py-3">
                        <div className="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                        <div className="col-span-3">
                            <p className="text-white">Charts</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 py-3">
                        <div className="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="col-span-3">
                            <p className="text-white">Tables</p>
                        </div>
                    </div><hr/>
                </div>
            </aside>
        </div>

    );
}

export default Sidebar;