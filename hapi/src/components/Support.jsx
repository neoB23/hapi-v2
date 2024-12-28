import React from 'react';

function Support(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-start">
            <div className="relative w-full h-3/4">
                <img src="Images/197fa294-d4fe-43d0-92d8-28570799a883.jpg" alt="bg" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <h1 className="text-white font-bold md:text-4xl md:font-bold text-2xl p-20 md:p-24">Hapi Customer Support Channels</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4 ">
                <h1 className="text-black p-4 text-2xl md:text-5xl font-bold md:font-bold ">Need to speak with us?</h1>
            </div>
            <div className="flex space-x-4 p-4"> 
                <div className="text-center items-center flex flex-col">
                    <img src="https://images.unsplash.com/photo-1547517023-7ca0c162f816" className="h-60 rounded" alt="image"/>
                    <h1 className="font-bold text-1xl md:text-2xl">Chat with Us!</h1>
                    <p className="text-sm md:text-xl">Need to report a service issue, 
                    request for reconnection <br/>and do aftersales transactions? Use our Hapi.Bytes <br/>
                    Cares Messenger for quick and easy assistance.</p>

                    <div className="flex items-center space-x-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><defs><radialGradient id="logosMessenger0" cx="19.247%" cy="99.465%" r="108.96%" fx="19.247%" fy="99.465%"><stop offset="0%" stop-color="#09f"/><stop offset="60.975%" stop-color="#a033ff"/><stop offset="93.482%" stop-color="#ff5280"/><stop offset="100%" stop-color="#ff7061"/></radialGradient></defs><path fill="url(#logosMessenger0)" d="M128 0C55.894 0 0 52.818 0 124.16c0 37.317 15.293 69.562 40.2 91.835c2.09 1.871 3.352 4.493 3.438 7.298l.697 22.77c.223 7.262 7.724 11.988 14.37 9.054L84.111 243.9a10.22 10.22 0 0 1 6.837-.501c11.675 3.21 24.1 4.92 37.052 4.92c72.106 0 128-52.818 128-124.16S200.106 0 128 0"/><path fill="#fff" d="m51.137 160.47l37.6-59.653c5.98-9.49 18.788-11.853 27.762-5.123l29.905 22.43a7.68 7.68 0 0 0 9.252-.027l40.388-30.652c5.39-4.091 12.428 2.36 8.82 8.085l-37.6 59.654c-5.981 9.489-18.79 11.852-27.763 5.122l-29.906-22.43a7.68 7.68 0 0 0-9.25.027l-40.39 30.652c-5.39 4.09-12.427-2.36-8.818-8.085"/></svg>
                        <a href="space-y-4" className="text-blue-500 underline">Hapi.Bytes Messenger</a>
                    </div>
                </div>
                <div className="text-center items-center flex flex-col">
                    <img src="https://images.unsplash.com/photo-1547517023-7ca0c162f816" className="h-60 rounded" alt="image"/>
                    <h1 className="font-bold text-1xl md:text-2xl">Book an Appointment</h1>
                    <p className="text-sm md:text-xl">Need to report a service issue, 
                    request for reconnection <br/>and do aftersales transactions? Use our Hapi.Bytes <br/>
                    Cares Messenger for quick and easy assistance.</p>
                </div>
            </div>
        </div>
    );
}

export default Support;