import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="relative bg-white dark:bg-gray-900">
            {/* Go Back to Home Button */}

            <div className="flex justify-center h-screen">
            <a
                href="/"
                className=" bg-black p-2 rounded font-bold absolute top-4 left-4 text-sm text-gray-700 dark:text-gray-300 hover:underline focus:outline-none"
            >
                &lt; Go Back Home
            </a>
                <div
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{
                        backgroundImage: "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
                    }}
                >
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Hapi.Bytes</h2>
                            <p className="max-w-xl mt-3 text-gray-300">
                                Explore an exceptional user experience with Hapi.Bytes.
                                Connect with ease and enjoy seamless online services.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img
                                    className="w-auto h-9 sm:h-24"
                                    src="Images/298196339_106725825477567_6920024355992233309_n-removebg-preview.png"
                                    alt="Hapi.Bytes Logo"
                                />
                            </div>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">
                                Create your account to get started.
                            </p>
                        </div>
                        <div className="mt-8">
                            <form>
                                <div className="flex space-x-4">
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                        >
                                            First Name:
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="Enter your first name"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                        >
                                            Last Name:
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Enter your last name"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                    >
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your Email"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                    >
                                        Password:
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                    >
                                        Confirm Password:
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="Re-enter your password"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <CustomLink
                                        to="/login"
                                        className="items-center flex justify-center w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        Create Account
                                    </CustomLink>
                                </div>
                            </form>
                            <p className="mt-6 text-sm text-center text-gray-400">
                                Already have an account?{' '}
                                <CustomLink
                                    to="/login"
                                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                                >
                                    Login here
                                </CustomLink>.
                            </p>
                        </div>
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
export default Signup;
