import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [isHelpMenuOpen, setHelpMenuOpen] = useState(false);
    const handleClickOutside = (event) => {
        if (!event.target.closest('#userButton') && isUserMenuOpen) {
            setUserMenuOpen(false);
        }
        if (!event.target.closest('#menu-toggle') && isHelpMenuOpen) {
            setHelpMenuOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isUserMenuOpen, isHelpMenuOpen]);
    return (
        <div className="bg-gray-100 text-gray-900 tracking-wider leading-normal ">
            <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
                <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">              
                    <div className={`w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20 ${isHelpMenuOpen ? '' : 'hidden'}`} style={{ top: '6em' }} id="menu-content">
                        <ul className="list-reset py-2 md:py-0">
                        <CustomLink href="/" className="p-2 text-sm  ml-4 bg-orange text-white rounded sticky ">Return</CustomLink>
                            {['section1', 'section2', 'section3', 'section4', 'section5'].map((section, index) => (
                                <li key={index} className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
                                    <a href={`#${section}`} className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                        <span className="pb-1 md:pb-0 text-sm">Section {index + 1}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <section className="w-full lg:w-4/5">
                    <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
                        Apply Now
                    </h1>
                    <hr className="bg-gray-300 my-12" />

                    {['section1', 'section2', 'section3', 'section4', 'section5'].map((section, index) => (
                        <div key={index}>
                            <h2 id={section} className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">{`Section ${index + 1}`}</h2>
                            <div className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
                                {section === 'section1' && (
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      
                                    <div className="md:col-span-5">
                                      <label for="email">Email Address</label>
                                      <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="dummy@gmail.com" />
                                    </div>
                      
                                    <div className="md:col-span-2">
                                      <label for="city">Region</label>
                                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <select name="city" id="city" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent">
                                          <option disabled selected>Select Region</option>
                                          <option value="Cainta">Rizal</option>
                                        </select>
                                        <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                      
                                    <div className="md:col-span-2">
                                      <label for="city">City</label>
                                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <select name="city" id="city" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent">
                                          <option disabled selected>Select City</option>
                                          <option value="Cainta">Cainta</option>
                                          <option value="Taytay">Taytay</option>
                                        </select>
                                        <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>

                                    <div className="md:col-span-5">
                                      <label for="email">Barangay</label>
                                      <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>
                                </div>
                                )}
                                {section === 'section2' && (
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                      <div className="md:col-span-5">
                                        <label for="full_name">Referred by</label>
                                        <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="not required" />
                                      </div>
                        
                                      <div className="md:col-span-2">
                                        <label for="email">FirstName</label>
                                        <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                      </div>
                        
                                      <div className="md:col-span-1">
                                        <label for="address">Middle Initial</label>
                                        <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Not Requried" />
                                      </div>
                        
                                      <div className="md:col-span-2">
                                        <label for="city">LastName</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label for="city">Address</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="House number / Block and lot / Street / Subdivision" />
                                      </div>
                                  </div>
                                    
                                )}
                                {section === 'section3' && ( 
                                        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full flex items-center">
                                        <div>
                                          <input className="hidden" id="radio_1" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_1">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB EXTRA</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱699/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 25 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_2" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_2">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB LITE</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱999/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 45 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_3" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_3">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB PLUS</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱1299/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 70 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_4" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_4">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB MEGA</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱1499/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 100 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_5" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_5">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB GIGA</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱1699/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 155 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      
                                        <div>
                                          <input className="hidden" id="radio_6" type="radio" name="radio" />
                                          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_6">
                                            <span className="text-xs md:text-sm font-semibold uppercase">HB TERA</span>
                                            <span className="text-lg md:text-xl font-bold mt-2">₱2499/month</span>
                                            <ul className="text-xs md:text-sm mt-2">
                                              <li>Speed: 250 Mbps</li>
                                              <li>Fiber Fast Unli Data</li>
                                            </ul>
                                          </label>
                                        </div>
                                      </form>
                                      
                                      
                                )}
                                {section === 'section4' && (
                                    <div id="section3" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white space-y-6">
                                    {/* Upload Proof of Billing */}
                                    <div>
                                      <label className="block text-sm font-medium text-gray-800 mb-1">Upload Proof of Billing</label>
                                      <div className="flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                        <div className="text-center">
                                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                          <div className="flex text-sm text-gray-600 mt-2">
                                            <label htmlFor="file-upload" className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                                              <span>Upload a file</span>
                                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1 text-gray-700">or drag and drop</p>
                                          </div>
                                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                      </div>
                                    </div>
                                  
                                    {/* Upload At least 1 Valid ID */}
                                    <div>
                                      <label className="block text-sm font-medium text-gray-800 mb-1">Upload At least 1 Valid ID</label>
                                      <div className="flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                        <div className="text-center">
                                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                          <div className="flex text-sm text-gray-600 mt-2">
                                            <label htmlFor="file-upload" className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                                              <span>Upload a file</span>
                                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1 text-gray-700">or drag and drop</p>
                                          </div>
                                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                      </div>
                                    </div>
                                  
                                    {/* Installation Landmark */}
                                    <div>
                                      <label className="block text-sm font-medium text-gray-800 mb-1">
                                        Installation Landmark (Take a picture of the façade of the installation location. If it’s your house, upload a file here.)
                                      </label>
                                      <div className="flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                        <div className="text-center">
                                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                          <div className="flex text-sm text-gray-600 mt-2">
                                            <label htmlFor="file-upload" className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                                              <span>Upload a file</span>
                                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1 text-gray-700">or drag and drop</p>
                                          </div>
                                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                )}
                                {section === 'section5' && (
                                        <div id='section4' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white flex space-x-2">
                                              <button className="w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 bg-orange rounded text-white text-sm sm:text-base">Submit</button>
                                              <button className="w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600 rounded text-white text-sm sm:text-base">Cancel</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};
function CustomLink({ href, children, className, ...props }) {
  return (
      <Link to={href} className={className} {...props}>
          {children}
      </Link>
  );
}
export default Booking;
