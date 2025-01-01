import React from 'react';
import { Link } from 'react-router-dom';

function EmailVerification() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
            <header className="absolute top-4 left-4">
                <a
                    href="/"
                    className="flex items-center gap-2 bg-black text-white py-2 px-4 rounded-lg text-sm font-bold hover:bg-gray-800 transition-all"
                >
                    &lt; Go Back Home
                </a>
            </header>

            <div className="flex flex-1 flex-col lg:flex-row items-center lg:items-stretch">
                {/* Background Section */}
                <div
                    className="hidden lg:block lg:w-2/3 bg-cover bg-center relative"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
                    }}
                >
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center px-20">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Hapi.Bytes</h2>
                            <p className="max-w-lg mt-4 text-lg text-gray-300">
                                Explore an exceptional user experience with Hapi.Bytes. Connect with ease and enjoy seamless online services.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center items-center w-full lg:w-1/3 px-6 py-12">
                    <div className="text-center">
                        <img
                            className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md"
                            src="Images/298196339_106725825477567_6920024355992233309_n-removebg-preview.png"
                            alt="Logo"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            Email Verification Required
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Please verify your email address to access this section of the site.
                        </p>
                    </div>

                    <div className="mt-8 w-full">
                        <form>
                            <CustomLink
                                to="/"
                                type="button"
                                className="flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                            >
                                Send Verification to my Email
                            </CustomLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
function CustomLink({ to, children, ...props }) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }
export default EmailVerification;
