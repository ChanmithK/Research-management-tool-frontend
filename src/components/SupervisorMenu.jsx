import React from "react";
import logo from "../images/logo.png";
import profile from "../images/Profile.png";
import file from "../images/file-tick.png";
import list from "../images/list-unordered.png";
import report from "../images/clipboard-minus.png";
import chat from "../images/chat-typing.png";
import logout from "../images/logout.png";
import { Link } from "react-router-dom";

function SupervisorMenu({ status }) {
	const ActiveTab = s => {
		if (s == "topics") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/Supervisor/Supervisor-Profile'>
						<img
							src={profile}
							alt='profile'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<Link to='/supervisor/topics'>
						<img
							src={file}
							alt='file'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/assigned-topics'>
						<img
							src={list}
							alt='list'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue '
						/>
					</Link>

					<Link to='/supervisor/markings-submissions'>
						<img
							src={report}
							alt='report'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue '
						/>
					</Link>

					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue'
					/>
				</div>
			);
		} else if (s == "profile") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/Supervisor/Supervisor-Profile'>
						<img
							src={profile}
							alt='profile'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/topics'>
						<img
							src={file}
							alt='file'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/assigned-topics'>
						<img
							src={list}
							alt='list'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/markings-submissions'>
						<img
							src={report}
							alt='report'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		} else if (s == "assigned") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/Supervisor/Supervisor-Profile'>
						<img
							src={profile}
							alt='profile'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/topics'>
						<img
							src={file}
							alt='file'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/assigned-topics'>
						<img
							src={list}
							alt='list'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/markings-submissions'>
						<img
							src={report}
							alt='report'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		} else if (s == "main") {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/Supervisor/Supervisor-Profile'>
						<img
							src={profile}
							alt='profile'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/topics'>
						<img
							src={file}
							alt='file'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/assigned-topics'>
						<img
							src={list}
							alt='list'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/markings-submissions'>
						<img
							src={report}
							alt='report'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue bg-white-blue'
						/>
					</Link>

					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		} else {
			return (
				<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
					<Link to='/Supervisor/Supervisor-Profile'>
						<img
							src={profile}
							alt='profile'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/topics'>
						<img
							src={file}
							alt='file'
							className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/assigned-topics'>
						<img
							src={list}
							alt='list'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl  hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<Link to='/supervisor/markings-submissions'>
						<img
							src={report}
							alt='report'
							className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
						/>
					</Link>

					<img
						src={chat}
						alt='chat'
						className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
					/>
				</div>
			);
		}
	};

	return (
		<div className='flex flex-col items-center w-[114px] bg-white h-screen rounded-tr-xl rounded-br-xl '>
			<div className='my-8 '>
				<img src={logo} alt='logo' />
			</div>

			{ActiveTab(status)}

			<div className='cursor-pointer mt-36'>
				<img
					src={logout}
					alt='logout'
					onClick={() => {
						window.localStorage.clear();

						window.location.reload(false);
					}}
				/>
			</div>
		</div>
	);
}

export default SupervisorMenu;
