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
            <h1 className="text-2xl font-semibold sm:text-4xl mt-10 ">Need to speak with us?</h1>
            <div className="flex flex-wrap justify-center gap-8 p-4"> 
                <div className="max-w-xs w-full sm:max-w-sm p-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src="Images/b713c776e5da9071e58afeef44eff6be.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Chat with Us</h2>
                            <p className="dark:text-gray-800">Need to report a service issue, request reconnection, and do aftersales transactions? Use our Hapi.Bytes Cares Messenger for quick and easy assistance.</p>
                        </div>
                        <a href="https://www.facebook.com/messages/t/106693052147511" type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Hapi.Bytes Messenger</a>
                    </div>
                </div>

                <div className="max-w-xs w-full sm:max-w-sm p-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src="Images/f23cc3cf62ba135f9042708a038a8b6b.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Email Us</h2>
                            <p className="dark:text-gray-800">Need to report a service issue, request reconnection, or handle aftersales transactions? Email us at sales@hapibytes.com for quick and reliable assistance.</p>
                        </div>
                        <a href="mailto:sales@hapibytes.com" type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Hapi.Bytes Email</a>
                    </div>
                </div>

                <div className="max-w-xs w-full sm:max-w-sm p-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src="Images/16a65667ea9fa66771b04416d1553f22.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Visit Us</h2>
                            <p className="dark:text-gray-800">Need to report a service issue, request reconnection, or handle aftersales transactions? Visit us on-site for personalized assistance.</p>
                        </div>
                        <a  href="https://www.google.com/maps/place/Hapi.Bytes+Network+and+Data+Solution/@14.5649649,121.1210458,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c73736891ef9:0x6ab2ab0864f46806!8m2!3d14.5649649!4d121.1236207!16s%2Fg%2F11k4yrv3qf?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Hapi.Bytes Location</a>
                    </div>
                </div>
            </div>

            <section className="dark:bg-gray-100 dark:text-gray-800 w-full">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl items-center justify-center flex">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-600 items-center justify-center flex">Find answers to common queries and get the help you need quickly.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I report a service issue?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You can report a service issue by contacting our support team through the Hapi.Bytes Cares Messenger, emailing us, or visiting us on-site for immediate assistance.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I make a payment for my services?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Online: You can make a payment securely through our website using credit/debit cards or other online payment methods. <br />
                            On-site: You can also visit our office to make a payment in person using cash or card. Our team will assist you with the process.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I request a service upgrade for my landline?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Online: You can request a service upgrade by visiting our website and filling out the upgrade request form or contacting our support team via email or Hapi.Bytes Cares Messenger. <br />
                            On-site: You can also visit our office, where our staff will assist you in selecting and processing your desired service upgrade. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Support;
