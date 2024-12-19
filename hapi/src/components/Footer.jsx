import React from 'react';

function Footer(){
    return(
        <footer className="text-gray-900 body-font bg-black">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Logo Section */}
            <div className="w-full md:w-auto md:ml-4 mb-6 md:mb-0 text-center md:text-left">
              <img src="images/logo-light3-1.webp" className="h-12 mx-auto md:mx-0" alt="logo" />
            </div>
      
            {/* Contact Us Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-slate-400 tracking-widest text-sm mb-3">CONTACT US</h2>
              <nav className="list-none mb-10 space-y-2">
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <img src="images/mi--location.png" className="w-6" alt="Location Icon" />
                  <a href="https://www.google.com/maps/place/Hapi.Bytes+Network+and+Data+Solution/@14.5649649,121.1210458,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c73736891ef9:0x6ab2ab0864f46806!8m2!3d14.5649649!4d121.1236207!16s%2Fg%2F11k4yrv3qf?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className="text-slate-400">#52 Fermina Road Brgy Sta Ana Taytay, Rizal</a>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <img src="images/ic--baseline-phone.png" className="w-6" alt="Phone Icon" />
                  <a href="tel:+639616484666" className="text-slate-400">(63+) 961-648-4666</a>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <img src="images/mdi--gmail.png" className="w-6" alt="Email Icon" />
                  <a href="mailto:sales@hapibytes.com" className="text-slate-400">sales@hapibytes.com</a>
                </li>
              </nav>
            </div>
      
            {/* Socials Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-slate-400 tracking-widest text-sm mb-3">SOCIALS</h2>
              <nav className="list-none mb-10 space-y-4">
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <img src="images/ic--baseline-facebook.png" className="w-6" alt="Facebook Icon" />
                  <a href="https://www.facebook.com/hapi.bytes" className="text-slate-400">Facebook</a>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <img src="images/mdi--instagram.png" className="w-6" alt="Instagram Icon" />
                  <a href="#" className="text-slate-400">Instagram</a>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <img src="images/mdi--linkedin.png" className="w-6" alt="LinkedIn Icon" />
                  <a href="#" className="text-slate-400">LinkedIn</a>
                </li>
              </nav>
            </div>
      
            {/* Subscribe Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-slate-400 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex flex-wrap md:justify-start justify-center items-end space-y-2">
                <div className="relative w-40 sm:w-auto sm:mr-4 mr-2 ">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-slate-400">Email:</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-slate-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="mt-2 lg:mt-0 inline-flex text-white bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Sign up for our weekly newsletter to stay 
              <br className="lg:block hidden" />updated on all news and events at HapiBytes.
            
              </p>
            </div>
          </div>
        </div>
        <hr className="border-slate-700 mx-auto w-full" />
        <div className="py-6 text-sm text-center text-white">© 2023 HapiBytes. All rights reserved.</div>
      </footer>
    );
}

export default Footer;