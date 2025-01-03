import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

function AdminDash(){
	const [showBooking, setShowBooking] = useState(false);
	const [showUser, setShowUser] = useState(false);
	const [selectedPage, setSelectedPage] = useState("user"); 
	
    return(
		<div className="flex ">
			<div className="rounded-r bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center ">
			<div aria-label="toggler" className="flex justify-center items-center">
			<button aria-label="open" id="open" onclick="showNav(true)" className="hidden focus:outline-none focus:ring-2">
				<svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4 6H20" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				<path d="M4 12H20" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				<path d="M4 18H20" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			<button aria-label="close" id="close" onclick="showNav(true)" className=" focus:outline-none focus:ring-2">
				<svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18 6L6 18" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				<path d="M6 6L18 18" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			</div>
		</div>
		<div id="Main" className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col">
			
		
			<div className="hidden xl:flex justify-start p-6 items-center space-x-3">
			<img src="Images/logo-light3-1.webp" alt="logo" />
			</div>
			<div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
			<button onClick={() => setSelectedPage("dashboard")} className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
				<svg className="fill-stroke " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				<path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				<path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				<path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				</svg>
				<p className="text-base leading-4 ">Dashboard</p>
			</button>
			</div>

		
				{/* user section */}
			<div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
			{/* Booking Dropdown */}
			<button
				onClick={() => setShowUser(!showUser)}
				className="focus:outline-none focus:text-indigo-400 text-white flex justify-between items-center w-full py-5 space-x-14"
			>
				<p className="text-sm leading-5 uppercase">User</p>
				<svg
				className={`transform transition-transform duration-300 ${showUser ? "rotate-180" : ""}`}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				>
				<path
					d="M18 15L12 9L6 15"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				</svg>
			</button>
			{showUser && (
				<div className="w-full space-y-4 pl-6 py-2 text-white">
				 <button
					onClick={() => setSelectedPage("user")}
					className="flex justify-start items-center w-full space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded"
					>
					<svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<p className="text-base leading-4">User Accounts</p>
				</button>

				<button
					onClick={() => setSelectedPage("admin")}
					className="flex justify-start items-center w-full space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path fill="#fff" d="M12 23C6.443 21.765 2 16.522 2 11V5l10-4l10 4v6c0 5.524-4.443 10.765-10 12M4 6v5a10.58 10.58 0 0 0 8 10a10.58 10.58 0 0 0 8-10V6l-8-3Z"></path>
					<circle cx={12} cy={8.5} r={2.5} fill="#fff"></circle>
					<path fill="#fff" d="M7 15a5.78 5.78 0 0 0 5 3a5.78 5.78 0 0 0 5-3c-.025-1.195-.946-2.283-2.419-2.82C14.644 14.047 13.335 15 12 15c-1.335 0-2.644-.953-3.581-2.82C7.946 12.717 7.025 13.805 7 15Z"></path>
					</svg>
					<p className="text-base leading-4">Admin Accounts</p>
				</button>

				<button
					onClick={() => setSelectedPage("roles")}
					className="flex justify-start items-center w-full space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded"
					>
					<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 48 48">
					<g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth={4}>
						<path strokeLinejoin="round" d="M20 10H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-2.5"></path>
						<path d="M10 23h8m-8 8h24"></path>
						<circle cx={34} cy={16} r={6} strokeLinejoin="round"></circle>
						<path strokeLinejoin="round" d="M44 28.419C42.047 24.602 38 22 34 22s-5.993 1.133-8.05 3"></path>
					</g>
					</svg>
					<p className="text-base leading-4">Manage Roles and Permissions</p>
				</button>
				</div>
			)}
			</div>


		{/* booking section */}
			<div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
				{/* Booking Dropdown */}
				<button
					onClick={() => setShowBooking(!showBooking)}
					className="focus:outline-none focus:text-indigo-400 text-white flex justify-between items-center w-full py-5 space-x-14"
				>
					<p className="text-sm leading-5 uppercase">Booking</p>
					<svg
						className={`transform transition-transform duration-300 ${
							showBooking ? "rotate-180" : ""
						}`}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18 15L12 9L6 15"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				{showBooking && (
					<div className="w-full space-y-4 pl-6 py-2 text-white">
						<button
						onClick={() => setSelectedPage("allBookings")}
						className="flex justify-start items-center w-full space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
								<path
									fill="none"
									stroke="#fff"
									strokeWidth={2}
									d="M18 4V0zM7 18H5zm12 0H9zM7 14H5zm12 0H9zM6 4V0zM1 9h22zm0 14h22V4H1z"
								/>
							</svg>
							<p className="text-base leading-4">All Bookings</p>
						</button>
						<button
							onClick={() => setSelectedPage("pendingBookings")}
							className="flex justify-start items-center w-full space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded"
							>
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
								<path
									fill="#fff"
									d="M7 13.5q.625 0 1.063-.437T8.5 12t-.437-1.062T7 10.5t-1.062.438T5.5 12t.438 1.063T7 13.5m5 0q.625 0 1.063-.437T13.5 12t-.437-1.062T12 10.5t-1.062.438T10.5 12t.438 1.063T12 13.5m5 0q.625 0 1.063-.437T18.5 12t-.437-1.062T17 10.5t-1.062.438T15.5 12t.438 1.063T17 13.5M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
								/>
							</svg>
							<p className="text-base leading-4">Pending Bookings</p>
						</button>
						<button
							onClick={() => setSelectedPage("completedBookings")} 
							className="flex justify-start items-center w-full space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32">
								<path
									fill="#fff"
									d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41z"
								/>
								<path
									fill="#fff"
									d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v11h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"
								/>
							</svg>
							<p className="text-base leading-4">Completed Bookings</p>
						</button>
						<button
							onClick={() => setSelectedPage("cancelledBookings")}
							className="flex justify-start items-center w-full space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded"
							>
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
								<path
									fill="#fff"
									d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
								/>
							</svg>
							<p className="text-base leading-4">Cancelled Bookings</p>
						</button>
					</div>
				)}
			</div>


			<div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full  space-y-32 ">
				{/* feedback section */}
			<button onClick={() => setSelectedPage("feedback")} className="flex jusitfy-start items-center py-5 space-x-6  w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32"><path fill="#fff" d="M19.95 15.89c.18.08.37.11.55.11c.41 0 .81-.17 1.1-.48L23.94 13H27c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3h-8c-1.65 0-3 1.35-3 3v4.99c0 1.65 1.35 3 3 3v1.5c0 .63.37 1.17.95 1.4M18 5c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-3.94L21 13.22V11h-2c-.55 0-1-.45-1-1zm-7.5 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3s-1.35-3-3-3m0 19.99c-2.9 0-5.12-.8-6.62-2.368c-1.931-2.015-1.886-4.585-1.881-4.838v-.017C2 21.26 3.26 20 4.82 20h11.36c1.55 0 2.82 1.259 2.82 2.817v.01c.004.182.06 2.77-1.88 4.805C15.62 29.201 13.4 30 10.5 30zm-5.68-7.992c-.45 0-.82.37-.82.82v.006c-.003.143-.028 2.025 1.34 3.44c1.1 1.149 2.84 1.728 5.16 1.728s4.05-.58 5.16-1.728c1.4-1.449 1.35-3.387 1.34-3.407c0-.49-.37-.859-.82-.859z"></path></svg>
				<p className="text-base leading-4 ">Feedback</p>
			</button>

			{/* admin account */}
			<div className=" flex justify-between items-center w-full">
				<div className="flex justify-center items-center  space-x-2">
				<div>
					<img className="rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar" />
				</div>
				<div className="flex justify-start flex-col items-start">
					<p className="cursor-pointer text-sm leading-5 text-white">Alexis Enache</p>
					<p className="cursor-pointer text-xs leading-3 text-gray-300">alexis81@gmail.com</p>
				</div>
				</div>
				<svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				</svg>
				</div>
			</div>
			</div>


			
			<div className="flex-1 bg-gray-100 p-4">
				{(() => {
					if (selectedPage === "dashboard") {
					return (
						<div>
						<h1>Dashboard</h1>
						{/* Your Dashboard Content */}
						</div>
					);
					} else if (selectedPage === "user") {
					return (
						<div>
						<h1>User Accounts</h1>
						{/* Your User Account Content */}
						</div>
					);
					} else if (selectedPage === "admin") {
					return (
						<div>
						<h1>Admin Accounts</h1>
						{/* Your Admin Account Content */}
						</div>
					);
					} else if (selectedPage === "roles") {
					return (
						<div>
						<h1>Manage Roles and Permissions</h1>
						{/* Your Roles and Permissions Content */}
						</div>
					);
					} else if (selectedPage === "allBookings") {
					return (
						<div>
						<h1>All Bookings</h1>
						{/* Your All Bookings Content */}
						</div>
					);
					} else if (selectedPage === "pendingBookings") {
					return (
						<div>
						<h1>Pending Bookings</h1>
						{/* Your Pending Bookings Content */}
						</div>
					);
					} else if (selectedPage === "completedBookings") {
					return (
						<div>
						<h1>Completed Bookings</h1>
						{/* Your Completed Bookings Content */}
						</div>
					);
					} else if (selectedPage === "cancelledBookings") {
					return (
						<div>
						<h1>Canceled Bookings</h1>
						{/* Your Canceled Bookings Content */}
						</div>
					);
					} else if (selectedPage === "feedback") {
					return (
						<div>
						<h1>Feedback</h1>
						{/* Your Feedback Content */}
						</div>
					);
					} else {
					return null;
					}
				})()}
				</div>

		</div>
    )
}
function CustomLink({ to, children, ...props }) {
	return (
	  <Link to={to} {...props}>
		{children}
	  </Link>
	);
  }
export default AdminDash;