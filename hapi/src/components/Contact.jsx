import React from 'react';
import { Link } from 'react-router-dom';


function Contact(){
    return(
        <section class="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
  <iframe
    width="100%"
    height="100%"
    frameBorder="0"
    marginHeight="0"
    marginWidth="0"
    title="map"
    scrolling="no"
    style={{
      filter: 'grayscale(100%) contrast(1.2)', // Makes it black and white with enhanced contrast
    }}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494236.65578096604!2d120.95223381973571!3d14.586315347130807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c1dab555f8fd%3A0xe9392ce1df362d50!2sRizal!5e0!3m2!1sen!2sph!4v1732099205127!5m2!1sen!2sph"
  ></iframe>
</div>

            <div class="container px-5 py-24 mx-auto flex">
                <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                <p class="leading-relaxed mb-5 text-gray-600">We value your feedback as it helps us enhance our services to better meet your needs.</p>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div class="relative mb-4">
                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                <p class="text-xs text-gray-500 mt-3">Please share your thoughts and experiences with us.</p>
                </div>
            </div>
        </section>
    );
}

function CustomLink({ href, children, ...props }) {
    return (
        <Link to={href} {...props}> {children} </Link>
    );
}

export default Contact;