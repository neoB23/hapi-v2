import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

function AdminDash(){
	const [showUser, setShowUser] = useState(false);
	const [showBooking, setShowBooking] = useState(false);
	const [selectedPage, setSelectedPage] = useState("dashboard");
	
    return(
		<div className="flex ">
		<div
      id="Main"
      className="xl:rounded-r transform xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start h-full w-full sm:w-64 bg-gray-900 flex-col"
      style={{ height: "110vh" }} // Fixed height
    >
			<div className="hidden xl:flex justify-start p-6 items-center space-x-3">
			<img src="Images/logo-light3-1.webp" alt="logo" />
			</div>

		
				{/* user section */}
			<div className="flex flex-col justify-start items-center  border-b border-gray-600 w-full ">
			{/* Booking Dropdown */}
			<button
				onClick={() => setShowUser(!showUser)}
				className="focus:outline-none focus:text-indigo-400 px-6 text-white flex justify-between items-center w-full py-5 space-x-14"
			>
				<p className="text-sm leading-5 uppercase ">User</p>
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
					onClick={() => setSelectedPage("adminhistory")}
					className="flex justify-start items-center w-full space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M2.907 6.75c2.9-5.022 9.321-6.743 14.343-3.843a10.5 10.5 0 0 1 4.915 11.732c-.318 1.225-1.81 1.57-2.658.746l-.095-.1l-2.251-2.587c-1.003-1.152.024-2.89 1.478-2.628l.133.03l.518.134a7.5 7.5 0 1 0-2.031 7.117a1.5 1.5 0 1 1 2.104 2.139c-3.281 3.228-8.43 4.018-12.613 1.603c-5.022-2.9-6.743-9.32-3.843-14.343M12 5.5a1.5 1.5 0 0 1 1.493 1.355L13.5 7v4.379l2.06 2.06a1.5 1.5 0 0 1-2.007 2.225l-.114-.103l-2.5-2.5a1.5 1.5 0 0 1-.432-.913L10.5 12V7A1.5 1.5 0 0 1 12 5.5"></path></g></svg>
					<p className="text-base leading-4">Admin Login history</p>
				</button>
				<button
					onClick={() => setSelectedPage("roles")}
					className="flex justify-start items-center w-full space-x-6 focus:outline-none text-white pb-4 focus:text-indigo-400 rounded"
					>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
					<g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth={4}>
						<path strokeLinejoin="round" d="M20 10H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-2.5"></path>
						<path d="M10 23h8m-8 8h24"></path>
						<circle cx={34} cy={16} r={6} strokeLinejoin="round"></circle>
						<path strokeLinejoin="round" d="M44 28.419C42.047 24.602 38 22 34 22s-5.993 1.133-8.05 3"></path>
					</g>
					</svg>
					<p className="text-base leading-4">Manage Roles</p>
				</button>
				</div>
			)}
			</div>


		{/* booking section */}
			<div className="flex flex-col justify-start items-center  border-b border-gray-600 w-full ">
				{/* Booking Dropdown */}
				<button
					onClick={() => setShowBooking(!showBooking)}
					className="focus:outline-none focus:text-indigo-400 text-white flex px-6 justify-between items-center w-full py-5 space-x-14"
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
							className="flex justify-start items-center w-full pb-4 space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded"
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

			<div className="flex flex-col justify-between items-center h-full pb-6 px-6 w-full">
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
				<button onClick={() => setSelectedPage("adminprofile")} className="flex justify-start flex-col items-start">
					<p className="cursor-pointer text-sm leading-5 text-white">Sherlyn Ramos</p>
					<p className="cursor-pointer text-xs leading-3 text-gray-300">Super Admin</p>
				</button>
				</div>
				<svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" />
				</svg>
				</div>
			</div>
			</div>


			{/* side page section. dito lahat papasok ng content ng side nav */}
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
							<h1 className="text-2xl font-bold text-gray-800 mb-4">User Accounts</h1>
							<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
								<div className="py-2 px-3 flex items-center space-x-3 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded">
									<p>Sort By:</p>
									<select
										aria-label="select"
										className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 text-xs"
									>
										<option className="text-xs text-indigo-800">Latest</option>
										<option className="text-xs text-indigo-800">Oldest</option>
									</select>
								</div>
								<button className=" bg-indigo-100 text-indigo-700 focus:ring-2 rounded-full rounded px-4" > Add New Account </button>
								</div>
							<div className="overflow-x-auto bg-white shadow-md rounded-lg">
								<table className="min-w-full bg-white">
								<thead className="bg-gray-300 ">
									<tr>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">User ID</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">First Name</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Last Name</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Gmail</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Password</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Location</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Status</th>
									<th className="text-center py-3 px-4 font-semibold text-gray-600">Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr className="hover:bg-gray-100">
									<td className="py-3 px-4 text-gray-800">UA1</td>
									<td className="py-3 px-4 text-gray-800">John</td>
									<td className="py-3 px-4 text-gray-800">Doe</td>
									<td className="py-3 px-4 text-gray-800">johndoe@gmail.com</td>
									<td className="py-3 px-4 text-gray-800">••••••••</td>
									<td className="py-3 px-4 text-gray-800">Taytay</td>
									<td className="py-3 px-4 text-gray-800">Not Subscribe Yet</td>
									<td className="py-3 px-4 text-center space-x-4">
										<button className="text-white px-4 py-1 bg-indigo-600 rounded p-4 hover:bg-indigo-900 px-3">Edit</button>
										
										<button className="text-white p-4 rounded px-2 py-1 bg-green-600 hover:bg-green-900 px-3">Save</button>
									</td>
									</tr>
								</tbody>
								</table>
								<div
									class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
									<span class="text-xs xs:text-sm text-gray-900">
										Showing 1 to 4 of 50 Entries
									</span>
									<div class="inline-flex mt-2 xs:mt-0">
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
											Prev
										</button>
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
					);
					} else if (selectedPage === "admin") {
					return (
						<div>
							<h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Accounts</h1>
							<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
								<div className="py-2 px-3 flex items-center space-x-3 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded">
									<p>Sort By:</p>
									<select
										aria-label="select"
										className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 text-xs"
									>
										<option className="text-xs text-indigo-800">Latest</option>
										<option className="text-xs text-indigo-800">Oldest</option>
									</select>
								</div>
							<button className=" bg-indigo-100 text-indigo-700 focus:ring-2 rounded-full rounded px-4" > Add New Admin Account </button>
							</div>
							<div className="overflow-x-auto bg-white shadow-md rounded-lg">
								<table className="min-w-full bg-white">
								<thead className="bg-gray-300 ">
									<tr >
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Admin ID</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">User Name</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">First Name</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Last Name</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Gmail</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Password</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Location</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Role</th>
									<th className="text-center py-3 px-4 font-semibold text-gray-600 ">Actions</th>
									
									</tr>
								</thead>
								<tbody>
									<tr className="hover:bg-gray-100 ">
									<td className="py-3 px-4 text-gray-800">AID1</td>
									<td className="py-3 px-4 text-gray-800">Admin1</td>
									<td className="py-3 px-4 text-gray-800">John</td>
									<td className="py-3 px-4 text-gray-800">Doe</td>
									<td className="py-3 px-4 text-gray-800">johndoe@gmail.com</td>
									<td className="py-3 px-4 text-gray-800">••••••••</td>
									<td className="py-3 px-4 text-gray-800">New York</td>
									<td className="py-3 px-4 text-gray-800">Editor</td>
									<td className="py-3 px-4 text-center space-x-4">
										<button className="text-white px-4 py-1 bg-indigo-600 rounded p-4 hover:bg-indigo-900 px-3">Edit</button>
										<button className="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-900 px-3">Delete</button>
										<button className="text-white p-4 rounded px-2 py-1 bg-green-600 hover:bg-green-900 px-3">Save</button>
									</td>
									</tr>

									<tr className="hover:bg-gray-100 ">
									<td className="py-3 px-4 text-gray-800">AID2</td>
									<td className="py-3 px-4 text-gray-800">Admin2</td>
									<td className="py-3 px-4 text-gray-800">John</td>
									<td className="py-3 px-4 text-gray-800">Doe</td>
									<td className="py-3 px-4 text-gray-800">johndoe@gmail.com</td>
									<td className="py-3 px-4 text-gray-800">••••••••</td>
									<td className="py-3 px-4 text-gray-800">New York</td>
									<td className="py-3 px-4 text-gray-800">Super Admin</td>
									<td className="py-3 px-4 text-center space-x-4">
										<button className="text-white px-4 py-1 bg-indigo-600 rounded p-4 hover:bg-indigo-900 px-3">Edit</button>
										<button className="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-900 px-3">Delete</button>
										<button className="text-white p-4 rounded px-2 py-1 bg-green-600 hover:bg-green-900 px-3">Save</button>
									</td>
									</tr>
								</tbody>
								</table>
								<div
									class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
									<span class="text-xs xs:text-sm text-gray-900">
										Showing 1 to 4 of 50 Entries
									</span>
									<div class="inline-flex mt-2 xs:mt-0">
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
											Prev
										</button>
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
					);
					} else if (selectedPage === "roles") {
					return (
						<div>
							<h1 className="text-2xl font-bold text-gray-800 mb-4">Manage Roles</h1>
							<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
								<div className="py-2 px-3 flex items-center space-x-3 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded">
									<p>Sort By:</p>
									<select
										aria-label="select"
										className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 text-xs"
									>
										<option className="text-xs text-indigo-800">Latest</option>
										<option className="text-xs text-indigo-800">Oldest</option>
									</select>
								</div>
							</div>
							<div className="overflow-x-auto bg-white shadow-md rounded-lg">
								<table className="min-w-full bg-white">
								<thead className="bg-gray-300 ">
									<tr >
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Admin ID</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">User Name</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Role</th>
									<th className="text-center py-3 px-4 font-semibold text-gray-600 ">Actions</th>
									
									</tr>
								</thead>
								<tbody>
									<tr className="hover:bg-gray-100 ">
									<td className="py-3 px-4 text-gray-800">AID1</td>
									<td className="py-3 px-4 text-gray-800">Admin1</td>
									<td className="py-3 px-4 text-gray-800">Editor</td>
									<td className="py-3 px-4 text-center space-x-4">
										<button className="text-white px-4 py-1 bg-indigo-600 rounded p-4 hover:bg-indigo-900 px-3">Edit</button>
										<button className="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-900 px-3">Delete</button>
										<button className="text-white p-4 rounded px-2 py-1 bg-green-600 hover:bg-green-900 px-3">Save</button>
									</td>
									</tr>

									<tr className="hover:bg-gray-100 ">
									<td className="py-3 px-4 text-gray-800">AID2</td>
									<td className="py-3 px-4 text-gray-800">Admin2</td>
									<td className="py-3 px-4 text-gray-800">Super Admin</td>
									<td className="py-3 px-4 text-center space-x-4">
										<button className="text-white px-4 py-1 bg-indigo-600 rounded p-4 hover:bg-indigo-900 px-3">Edit</button>
										<button className="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-900 px-3">Delete</button>
										<button className="text-white p-4 rounded px-2 py-1 bg-green-600 hover:bg-green-900 px-3">Save</button>
									</td>
									</tr>
								</tbody>
								</table>
								<div
									class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
									<span class="text-xs xs:text-sm text-gray-900">
										Showing 1 to 4 of 50 Entries
									</span>
									<div class="inline-flex mt-2 xs:mt-0">
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
											Prev
										</button>
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
					);
					} else if (selectedPage === "allBookings") {
					return (
						<div className=" w-full max-w-screen overflow-hidden">
							<h1 className="text-lg font-bold text-gray-800 mb-4">All Booking</h1>
							<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
								<div className="py-2 px-3 flex items-center space-x-3 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded">
									<p>Sort By:</p>
									<select
										aria-label="select"
										className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 text-xs"
									>
										<option className="text-xs text-indigo-800">Latest</option>
										<option className="text-xs text-indigo-800">Oldest</option>
									</select>
								</div>
								<button className="bg-indigo-100 text-indigo-700 focus:ring-2 rounded-full px-3 py-1 text-xs">
									Add New Booking
								</button>
							</div>
							<div className="overflow-x-auto bg-white shadow-md rounded-lg">
								<table className="min-w-full bg-white text-xs">
									<thead className="bg-gray-300 ">
										<tr>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Booking ID</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Email Address</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Region</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">City</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Barangay</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Referred By</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">First Name</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Middle Initial</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Last Name</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Address</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Plan Selected</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Upload Proof of Billing</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Upload Valid ID</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Installation Landmark</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr className="hover:bg-gray-100">
											<td className="py-2 px-3 text-gray-800">BKID1</td>
											<td className="py-2 px-3 text-gray-800">justinparlan123@gmail.com</td>
											<td className="py-2 px-3 text-gray-800">Rizal</td>
											<td className="py-2 px-3 text-gray-800">Taytay</td>
											<td className="py-2 px-3 text-gray-800">Langhaya</td>
											<td className="py-2 px-3 text-gray-800">Neo</td>
											<td className="py-2 px-3 text-gray-800">Justin</td>
											<td className="py-2 px-3 text-gray-800">Berdin</td>
											<td className="py-2 px-3 text-gray-800">Parlan</td>
											<td className="py-2 px-3 text-gray-800">
												#67 Saint Anthony Phase II Inarawan Antipolo City
											</td>
											<td className="py-2 px-3 text-gray-800">HB EXTRA</td>
											<td className="py-2 px-3 text-gray-800">
												<input
													type="file"
													className="w-full text-gray-800 border border-gray-300 rounded p-1"
												/>
											</td>
											<td className="py-2 px-3 text-gray-800">
												<input
													type="file"
													className="w-full text-gray-800 border border-gray-300 rounded p-1"
												/>
											</td>
											<td className="py-2 px-3 text-gray-800">Landmark details here...</td>
											<td className="py-2 px-3 text-center space-x-2">
												
												<button className="text-white rounded p-4 px-2 py-2 bg-red-600 hover:bg-red-900 px-2">
													Decline
												</button>
												<button className="text-white bg-green-600 rounded p-2 px-2 py-2 hover:bg-green-900 px-2">
													Approve
												</button>
											</td>
										</tr>
									</tbody>
								</table>
								<div
									class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
									<span class="text-xs xs:text-sm text-gray-900">
										Showing 1 to 4 of 50 Entries
									</span>
									<div class="inline-flex mt-2 xs:mt-0">
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
											Prev
										</button>
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
					);
					} else if (selectedPage === "pendingBookings") {
					return (
						<div>
						<h1 className="text-2xl font-bold text-gray-800 mb-4">Pending Bookings</h1>

						<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
							<div className="py-2 px-3 flex items-center space-x-3 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded">
							<p>Sort By:</p>
							<select
								aria-label="select"
								className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 text-xs"
							>
								<option className="text-xs text-indigo-800">Latest</option>
								<option className="text-xs text-indigo-800">Oldest</option>
							</select>
							</div>
						</div>

						<div className="overflow-x-auto bg-white shadow-md rounded-lg">
							<table className="min-w-full bg-white">
							<thead className="bg-gray-300 ">
								<tr>
								<th className="text-left py-3 px-4 font-semibold text-gray-600">Booking ID</th>
								<th className="text-left py-3 px-4 font-semibold text-gray-600">Customer Name</th>
								<th className="text-left py-3 px-4 font-semibold text-gray-600">Plan</th>
								<th className="text-left py-3 px-4 font-semibold text-gray-600">Scheduled Date</th>
								<th className="text-left py-3 px-4 font-semibold text-gray-600">Status</th>
								<th className="text-center py-3 px-4 font-semibold text-gray-600">Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr className="hover:bg-gray-100">
								<td className="py-3 px-4 text-gray-800">PBID1</td>
								<td className="py-3 px-4 text-gray-800">Justin</td>
								<td className="py-3 px-4 text-gray-800">HB EXTRA</td>
								<td className="py-3 px-4 text-gray-800">01/23/24</td>
								<td className="py-3 px-4 text-gray-800">Pending</td>
								<td className="py-3 px-4 text-center space-x-4">
									<button className="text-white px-4 py-2 rounded bg-red-600 hover:bg-red-900">Decline</button>
									<button className="text-white px-4 py-2 rounded bg-green-600 hover:bg-green-900">Approved</button>
								</td>
								</tr>
							</tbody>
							</table>
							<div
								class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
								<span class="text-xs xs:text-sm text-gray-900">
									Showing 1 to 4 of 50 Entries
								</span>
								<div class="inline-flex mt-2 xs:mt-0">
									<button
										class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
										Prev
									</button>
									<button
										class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
										Next
									</button>
								</div>
							</div>
						</div>
						</div>
					);
					} else if (selectedPage === "completedBookings") {
					return (
						<div className="p-4 w-full max-w-screen overflow-hidden">
							<h1 className="text-lg font-bold text-gray-800 mb-4">All Booking</h1>
							<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
								<div className="py-2 px-3 flex items-center space-x-3 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded">
									<p>Sort By:</p>
									<select
										aria-label="select"
										className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 text-xs"
									>
										<option className="text-xs text-indigo-800">Latest</option>
										<option className="text-xs text-indigo-800">Oldest</option>
									</select>
								</div>
								<button className="bg-indigo-100 text-indigo-700 focus:ring-2 rounded-full px-3 py-1 text-xs">
									Add New Booking
								</button>
							</div>
							<div className="overflow-x-auto bg-white shadow-md rounded-lg">
								<table className="min-w-full bg-white text-xs">
									<thead className="bg-gray-300 ">
										<tr>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Booking ID</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Email Address</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Region</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">City</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Barangay</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">Referred By</th>
											<th className="text-left py-2 px-3 font-semibold text-gray-600">First Name</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Middle Initial</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Last Name</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Address</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Plan Selected</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Upload Proof of Billing</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Upload Valid ID</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Installation Landmark</th>
											<th className="text-center py-2 px-3 font-semibold text-gray-600">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr className="hover:bg-gray-100">
											<td className="py-2 px-3 text-gray-800">BKID1</td>
											<td className="py-2 px-3 text-gray-800">justinparlan123@gmail.com</td>
											<td className="py-2 px-3 text-gray-800">Rizal</td>
											<td className="py-2 px-3 text-gray-800">Taytay</td>
											<td className="py-2 px-3 text-gray-800">Langhaya</td>
											<td className="py-2 px-3 text-gray-800">Neo</td>
											<td className="py-2 px-3 text-gray-800">Justin</td>
											<td className="py-2 px-3 text-gray-800">Berdin</td>
											<td className="py-2 px-3 text-gray-800">Parlan</td>
											<td className="py-2 px-3 text-gray-800">
												#67 Saint Anthony Phase II Inarawan Antipolo City
											</td>
											<td className="py-2 px-3 text-gray-800">HB EXTRA</td>
											<td className="py-2 px-3 text-gray-800">
												<input
													type="file"
													className="w-full text-gray-800 border border-gray-300 rounded p-1"
												/>
											</td>
											<td className="py-2 px-3 text-gray-800">
												<input
													type="file"
													className="w-full text-gray-800 border border-gray-300 rounded p-1"
												/>
											</td>
											<td className="py-2 px-3 text-gray-800">Landmark details here...</td>
											<td className="py-2 px-3 text-green-700">Approved</td>
										</tr>
									</tbody>
								</table>
								<div
									class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
									<span class="text-xs xs:text-sm text-gray-900">
										Showing 1 to 4 of 50 Entries
									</span>
									<div class="inline-flex mt-2 xs:mt-0">
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
											Prev
										</button>
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
					);
					} else if (selectedPage === "cancelledBookings") {
					return (
						<div>
							<h1 className="text-2xl font-bold text-gray-800 mb-4">User Accounts</h1>
							<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
								<div className="py-2 px-3 flex items-center space-x-3 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded">
									<p>Sort By:</p>
									<select
										aria-label="select"
										className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 text-xs"
									>
										<option className="text-xs text-indigo-800">Latest</option>
										<option className="text-xs text-indigo-800">Oldest</option>
									</select>
								</div>
								<button className=" bg-indigo-100 text-indigo-700 focus:ring-2 rounded-full rounded px-4" > Add New Account </button>
								</div>
							<div className="overflow-x-auto bg-white shadow-md rounded-lg">
								<table className="min-w-full bg-white">
								<thead className="bg-gray-300 ">
									<tr>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Cancelled ID</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">First Name</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Last Name</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Gmail</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Location</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Plan</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Status</th>
									<th className="text-center py-3 px-4 font-semibold text-gray-600">Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr className="hover:bg-gray-100">
									<td className="py-3 px-4 text-gray-800">CID1</td>
									<td className="py-3 px-4 text-gray-800">John</td>
									<td className="py-3 px-4 text-gray-800">Doe</td>
									<td className="py-3 px-4 text-gray-800">johndoe@gmail.com</td>
									<td className="py-3 px-4 text-gray-800">Taytay</td>
									<td className="py-3 px-4 text-gray-800">HB EXTRA</td>
									<td className="py-3 px-4 text-gray-800">Pending</td>
									<td className="py-3 px-4 text-center space-x-4">
										<button className="text-white px-4 py-1 bg-indigo-600 rounded p-4  hover:bg-indigo-900">Edit</button>
										<button className="text-white bg-green-600 hover:bg-green-900 px-2 py-1 p-4 rounded">Revert</button>
									</td>
									</tr>
								</tbody>
								</table>
								<div
									class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
									<span class="text-xs xs:text-sm text-gray-900">
										Showing 1 to 4 of 50 Entries
									</span>
									<div class="inline-flex mt-2 xs:mt-0">
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
											Prev
										</button>
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
					);
					} else if (selectedPage === "feedback") {
					return (
						<div>
						<div>
							<h1 className="text-2xl font-bold text-gray-800 mb-4">User Feedback</h1>
							<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
								<div className="py-2 px-3 flex items-center space-x-3 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded">
									<p>Sort By:</p>
									<select
										aria-label="select"
										className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 text-xs"
									>
										<option className="text-xs text-indigo-800">Latest</option>
										<option className="text-xs text-indigo-800">Oldest</option>
									</select>
								</div>
								
								</div>
							<div className="overflow-x-auto bg-white shadow-md rounded-lg">
								<table className="min-w-full bg-white">
								<thead className="bg-gray-300 ">
									<tr>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Feedback ID</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Email</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Message</th>
									<th className="text-center py-3 px-4 font-semibold text-gray-600">Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr className="hover:bg-gray-100">
									<td className="py-3 px-4 text-gray-800">FI1</td>
									<td className="py-3 px-4 text-gray-800">johndoe@gmail.com</td>
									<td className="py-3 px-4 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
									<td className="py-3 px-4 text-center">
										<button className="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-900 px-3">Delete</button>
									</td>
									</tr>
								</tbody>
								</table>
								<div
									class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
									<span class="text-xs xs:text-sm text-gray-900">
										Showing 1 to 4 of 50 Entries
									</span>
									<div class="inline-flex mt-2 xs:mt-0">
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
											Prev
										</button>
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
						</div>
					);
				} else if (selectedPage === "adminprofile") {
					return (
						<div> 
							<h1 className="text-2xl font-bold text-gray-800 mb-4">User Feedback</h1>
						<section class="max-w-4xl p-6 mx-auto  mt-20">    
							<form class="mt-6">
								<div class="flex items-center gap-20">
									<div class="relative">
										<label for="profilePicture" class="cursor-pointer">
											<img 
												id="profileImagePreview" 
												src="https://via.placeholder.com/200" 
												alt="Profile" 
												class="w-60 h-60 rounded-full object-cover border border-gray-300 shadow-md"
											/>
											<div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200">
												<span class="text-sm text-white">Change</span>
											</div>
										</label>
										<input 
											id="profilePicture" 
											type="file" 
											accept="image/*" 
											class="hidden"
											onchange="previewProfileImage(event)"
										/>
									</div>

									<div class="flex-1">
										<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
											<div>
												<label class="text-black" for="userName">User Name</label>
												<input id="userName" type="text" placeholder="johndoe123" class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"/>
											</div>
											<div>
												<label class="text-black" for="firstName">First Name</label>
												<input id="firstName" type="text" placeholder="John" class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"/>
											</div>
											<div>
												<label class="text-black" for="lastName">Last Name</label>
												<input id="lastName" type="text" placeholder="Doe" class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"/>
											</div>
											<div>
												<label class="text-black" for="gmail">Gmail</label>
												<input id="gmail" type="email" placeholder="example@gmail.com" class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"/>
											</div>
											<div>
												<label class="text-black" for="password">Password</label>
												<input id="password" type="password" placeholder="Enter your password" class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"/>
											</div>
											<div>
												<label class="text-black" for="location">Location</label>
												<input id="location" type="text" placeholder="City, Country" class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"/>
											</div>
										</div>
									</div>
								</div>
								<div class="flex justify-end mt-6">
									<button type="submit" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Save Profile</button>
								</div>
							</form>
						</section>
					</div>
					); } else if (selectedPage === "adminhistory") {
						return (
							<div>
							<h1 className="text-2xl font-bold text-gray-800 mb-4">Admin History</h1>
							<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4">
								<div className="py-2 px-3 flex items-center space-x-3 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded">
									<p>Sort By:</p>
									<select
										aria-label="select"
										className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 text-xs"
									>
										<option className="text-xs text-indigo-800">Latest</option>
										<option className="text-xs text-indigo-800">Oldest</option>
									</select>
								</div>
							<button className=" bg-indigo-100 text-indigo-700 focus:ring-2 rounded-full rounded px-4" > Add New Admin Account </button>
							</div>
							<div className="overflow-x-auto bg-white shadow-md rounded-lg">
								<table className="min-w-full bg-white">
								<thead className="bg-gray-300 ">
									<tr >
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Admin ID</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">User Name</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Time In</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Time Out</th>
									<th className="text-left py-3 px-4 font-semibold text-gray-600">Role</th>
									<th className="text-center py-3 px-4 font-semibold text-gray-600 ">Actions</th>
									
									</tr>
								</thead>
								<tbody>
									<tr className="hover:bg-gray-100 ">
									<td className="py-3 px-4 text-gray-800">AID1</td>
									<td className="py-3 px-4 text-gray-800">Admin1</td>
									<td className="py-3 px-4 text-gray-800">12:23 PM</td>
									<td className="py-3 px-4 text-gray-800">12:23 PM</td>
									<td className="py-3 px-4 text-gray-800">Editor</td>
									<td className="py-3 px-4 text-center">							
										<button className="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-900 px-3">Delete</button>
									</td>
									</tr>

									<tr className="hover:bg-gray-100 ">
									<td className="py-3 px-4 text-gray-800">AID2</td>
									<td className="py-3 px-4 text-gray-800">Admin2</td>
									<td className="py-3 px-4 text-gray-800">12:23 PM</td>
									<td className="py-3 px-4 text-gray-800">12:23 PM</td>
									<td className="py-3 px-4 text-gray-800">Super Admin</td>
									<td className="py-3 px-4 text-center">	
										<button className="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-900 px-3">Delete</button>
									</td>
									</tr>
									
								</tbody>
								
								</table>
								<div
									class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
									<span class="text-xs xs:text-sm text-gray-900">
										Showing 1 to 4 of 50 Entries
									</span>
									<div class="inline-flex mt-2 xs:mt-0">
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
											Prev
										</button>
										<button
											class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
											Next
										</button>
									</div>
								</div>
							</div>
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