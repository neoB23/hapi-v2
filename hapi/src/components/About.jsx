import React from 'react';
import { Link } from 'react-router-dom';

function About(){
    return(
        <div className="min-h-screen bg-black">
            <div className="flex flex-col md:flex-row items-center h-auto md:h-screen">
    {/* Left Section (About Hapi.Bytes) */}
    <div className="bg-white w-full md:w-1/2 h-auto md:h-screen flex flex-col items-center justify-center p-4 md:p-0">
        <div className="mx-4 md:mx-20 space-y-4 md:space-y-4">
            <h1 className="text-2xl md:text-6xl font-bold mt-2 md:mt-16 text-center md:text-left">
                <span className="text-orange">About</span> Hapi.Bytes
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed text-center md:text-left">
                HapiBytes is the newest internet service provider in the Philippines. Established last Sept 2022, we aim to bring affordable internet to every Filipino home, providing strong and seamless connections for every family.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed text-center md:text-left">
                Hapi.Bytes offers various internet services tailored to the needs of the Philippine market, with a variety of affordable plans to suit different requirements.
            </p>
        </div>
    </div>
    {/* Right Section (Image) */}
    <div className="bg-red-600 w-full md:w-1/2 h-64 md:h-screen">
        <img src="public/images/6c702a69-2ea9-4cdb-8dbc-31785477de85.jpg" className="w-full h-full object-cover" alt="Hapi.Bytes" />
    </div>
</div>

<div className="flex flex-col md:flex-row items-center h-auto md:h-screen">
    {/* Image Section */}
    <div className="bg-red-600 w-full md:w-1/2 h-64 md:h-screen">
        <img src="public/images/af12d5b1-9dc4-4ed6-9c41-27b53206cedb.jpg" className="w-full h-full object-cover" alt="Our Goals at Hapi.Bytes" />
    </div>
    {/* Right Section (Goals) */}
    <div className="bg-white w-full md:w-1/2 h-auto md:h-screen flex flex-col items-center justify-center p-4 md:p-0">
        <div className="mx-4 md:mx-20 space-y-4 md:space-y-3">
            <h1 className="text-2xl md:text-6xl font-bold mt-2 md:mt-16 text-center md:text-left">
                Our <span className="text-orange">Goals</span> at Hapi.Bytes
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed text-center md:text-left">
                At Hapi.Bytes, we aim to make high-speed, reliable internet affordable and accessible, bridging digital divides and empowering Filipino households to connect, work, and entertain without barriers.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed text-center md:text-left">
                We support the growing needs of our customers with flexible internet plans tailored to diverse lifestyles.
            </p>
        </div>
    </div>
</div>
        </div>
    );
}

{/* <div class="absolute top-0 transform -translate-x-1/2 left-1/2">
<div class="w-[645px] h-[413px] blur-3xl bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
</div> */}
function CustomLink({ href, children, ...props }) {
    return (
        <Link to={href} {...props}> {children} </Link>
    );
}
export default About;