import React from 'react';
import { Link } from 'react-router-dom';

function Hero(){
    const isActive = (path) => location.pathname === path;
    return(
        <div class="bg-black p-10">
            
    <section class="relative pt-12 overflow-hidden bg-black sm:pt-16">
        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="mt-8 text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                    Connecting Communities One Line at a Time.
                </h1>
                <br />
                <p class="text-sm font-normal tracking-widest uppercase">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                        Provider of affordable internet service to the Filipinos
                    </span>
                </p>
                <div class="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
                    <div class="relative inline-flex items-center justify-center w-full sm:w-auto group">
                        <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                        <CustomLink href="/bookingform" class="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto" role="button">
                            Book Now and Start Using our Internet
                        </CustomLink>
                    </div>

                    <CustomLink href="/Support" class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white" role="button">
                        Talk to Sales
                    </CustomLink>
                </div>
            </div>
            
            <div class="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
                <div class="absolute top-0 transform -translate-x-1/2 left-1/2">
                    <div class="w-[645px] h-[413px] blur-3xl bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                </div>

                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/Images/noise.png" alt="" />
                </div>

                <div class="relative overflow-hidden shadow-2xl">
                    <div class="flex items-center justify-between px-4 bg-neutral-900 rounded-b-none h-11 rounded-xl">
                    
                        <div class="flex space-x-1.5">
                        <div class="w-3 bg-red-400 h-3 border-2 border-white rounded-full"></div>
                        <div class="w-3 bg-yellow-400 h-3 border-2 border-white rounded-full"></div>
                        <div class="w-3 bg-green-400 h-3 border-2 border-white rounded-full"></div>
                </div>
                        
                    
                    <div class=" inset-0 flex items-center justify-center">
                        <h1 class="text-white text-sm ">www.hapibytes.com</h1>
                    </div>
                    
                        
                    
                        <div class="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m8 7l7.5 10M8 17l7.5-10"></path>
                        </svg>
                        </div>
                    </div>
                    
                    
                    <img class="rounded-b-lg" src="Images/467974638_543932278441142_1688553841243207054_n.png" alt="Example Image" />
                    </div>
                            </div>
                        </div>
        </section>

        {/* INFO */}
        <div class="px-4 mx-auto p-24 max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl font-pj">Discover Our Services</h2>
            <p class="mt-4 text-base leading-7 text-white sm:mt-8 font-pj">Experience seamless connectivity with our reliable and innovative landline solutions. Stay connected to what matters most with services designed to meet your communication needs.</p>
        </div>

        <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div class="md:p-8 lg:p-14">
                <svg class="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#D4D4D8" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#D4D4D8" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">Support</h3>
                <p class="mt-5 text-base text-white font-pj">Our dedicated support team is here to assist you every step of the way. From installation to troubleshooting, we ensure your connectivity is seamless and stress-free.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                    <svg fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">Home Subscribers</h3>
                <p class="mt-5 text-base text-white font-pj">Stay connected with your loved ones through our reliable landline solutions, crafted to meet the unique needs of residential subscribers.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                    <svg fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">Business Subscribers</h3>
                <p class="mt-5 text-base text-white font-pj">Empower your business with communication solutions that enhance productivity and ensure smooth operations. Trust us to keep your team connected.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                <svg class="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                        fill="#D4D4D8"
                    />
                    <path d="M9 9H33" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 17H33" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 25H13V31H29V25H41" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">Product</h3>
                <p class="mt-5 text-base text-white font-pj">Explore a range of cutting-edge landline products that combine reliability with modern technology to deliver exceptional performance and value.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                <svg class="mx-auto" width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                        fill="#D4D4D8"
                        stroke="#FFFFFF"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                        stroke="#FFFFFF"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">Quality</h3>
                <p class="mt-5 text-base text-white font-pj">Quality is at the core of everything we do. We are committed to providing top-tier services and products that meet the highest standards of reliability and efficiency.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                    <svg fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">CCTV Clients</h3>
                <p class="mt-5 text-base text-white font-pj">Secure your home or business with our advanced CCTV services. Monitor and protect with ease, supported by reliable connectivity and expert assistance.






</p>
            </div>
        </div>
    </div>

    {/* testimonal */}
    <section className="dark:text-gray-800">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl text-white font-bold">What Our Customers Are Saying</h2>
                        <p className="dark:text-gray-600">Hear directly from our valued clients about their experience with our reliable landline services. From clear connections to exceptional customer support, discover why we’re the trusted choice for homes and businesses alike.</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded border-2 text-white border-white shadow-md ">
                                    <p>Grabe naman bilis ng serbisyo! Kanina lang nag inquire after lunch. Naka activate na ka agad!
                                        hapi.bytes lang malakas
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Robin Jeffrey Lacay</p>
                                            <p className="text-sm dark:text-gray-600">Customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded border-2 text-white border-white shadow-md ">
                                    <p>Hi, thanks anyway for the action taken few days ago bilis. so far wala naman po connection problem thanks a lot.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Unknown</p>
                                            <p className="text-sm dark:text-gray-600">Customer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded border-2 text-white border-white shadow-md ">
                                    <p>Real experience of a user: very commendable ! Mission served: Fast, Affordable, and reliable internet that we deserve.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Vondee Layca</p>
                                            <p className="text-sm dark:text-gray-600">Customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md  border-2 text-white border-white ">
                                    <p>From laggy internet to hapibytes internet fast and reliable sobrang smooth lalo na sa mga games recommended internet pakabit na mga boss sulit ang bayad, Hapi.bytes lang sakalam</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Bryan Francisco</p>
                                            <p className="text-sm dark:text-gray-600">Customer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    {/* About us  */}
    <div class="flex justify-center items-center">
        <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
            <div role="main" class="flex flex-col items-center justify-center">
            <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">Discover More About Us</h1>
            <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">Looking for insights and updates? You’ve come to the right place! Here, we share random yet meaningful updates about what we do, our journey, and everything in between. Stay connected for more!</p>
            </div>
            <div class="lg:flex items-stretch md:mt-12 mt-8">
            <div class="lg:w-1/2">
                <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div class="sm:w-1/2 relative">
                    <div>
                    <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div class="absolute bottom-0 left-0 p-6">
                        <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <a href="https://www.facebook.com/hapi.bytes/posts/pfbid0PScGUw4fQPg2tSq8kv5rTr6f9Ns9WGF9mrNAZY53tGFuA81mG1PF6oK2obqs5uw5l" class="pr-2 text-sm font-medium leading-none">Read More</a>
                        <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="Images/460230031_496458679855169_6300121024433666985_n.jpg" class="w-full" alt="chair" />
                </div>
                <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
                    <div>
                    <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div class="absolute bottom-0 left-0 p-6">
                        <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <a href="https://www.facebook.com/photo/?fbid=533409369493433&set=a.127375976763443" class="pr-2 text-sm font-medium leading-none">Read More</a>
                        <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="Images/465783993_531941709640199_4034815609769431758_n.jpg" class="w-full" alt="wall design" />
                </div>
                </div>
                <div class="relative">
                <div>
                    <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div class="absolute bottom-0 left-0 md:p-10 p-6">
                    
                    <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <a href="https://www.facebook.com/photo/?fbid=554629544038082&set=a.127375976763443" class="pr-2 text-sm font-medium leading-none">Read More</a>
                        <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    </div>
                </div>
                <img src="Images/469503895_554629547371415_8533590918917799848_n.jpg" alt="sitting place" class="w-full mt-8 md:mt-6 hidden sm:block" />
                <img class="w-full mt-4 sm:hidden" src="" alt="sitting place" />
                </div>
            </div>
            <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <div class="relative">
                <div>
                    <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div class="absolute bottom-0 left-0 md:p-10 p-6">
                    
                    <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <a href="https://www.facebook.com/photo.php?fbid=498432386324465&set=pb.100084731220851.-2207520000&type=3" class="pr-2 text-sm font-medium leading-none">Read More</a>
                        <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    </div>
                </div>
                <img src="Images/460656542_498432392991131_8975124174437418860_n.jpg" alt="sitting place" class="w-full h-full sm:block hidden" />
                <img class="w-full sm:hidden" src="" alt="sitting place" />
                </div>
                <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div class="relative w-full">
                    <div>
                    <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div class="absolute bottom-0 left-0 p-6">
                        <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <a href="https://www.facebook.com/photo/?fbid=518440974323606&set=a.127375976763443" class="pr-2 text-sm font-medium leading-none">Read More</a>
                        <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="Images/463250028_518440977656939_6062047591257480417_n.jpg" class="w-full" alt="chair" />
                </div>
                <div class="relative w-full sm:mt-0 mt-4">
                    <div>
                    <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div class="absolute bottom-0 left-0 p-6">
                        <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <a href="https://www.facebook.com/photo.php?fbid=541705141997189&set=pb.100084731220851.-2207520000&type=3" class="pr-2 text-sm font-medium leading-none">Read More</a>
                        <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </a>
                    </div>
                    </div>
                    <img src="Images/467329700_541705145330522_1563809262714030211_n.jpg" class="w-full" alt="wall design" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}
function CustomLink({ href, children, ...props }) {
    return (
        <Link to={href} {...props}> {children} </Link>
    );
}
export default Hero;