import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoBuildSharp } from "react-icons/io5";
import { AiFillDashboard } from "react-icons/ai";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdExpandMore } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { LiaTableSolid } from "react-icons/lia";


const Sidebar = ({ open, setOpen }: any) => {


    useEffect(() => {
       
    }, []); 

    return (
        <>
            <div
                className={`fixed top-0 left-0 bottom-0 z-50 bg-blue-600 h-screen p-5 pt-8 ${open ? " w-[230px]" : "w-20"
                    } transition duration-500`}
            >
                <div className="flex items-center -mt-4 justify-center">
                    <BsEmojiLaughingFill color="white" size={30} /> <span className="text-white font-bold ml-4">SB ADMIN <sup className="ml-1">2</sup></span>
                </div>
                <hr className=" border-t border-gray-400 mt-4" />
                <Link
                    to="#"
                    className={`text-gray-300 text-sm flex items-center gap-x-3 hover:text-white hover:bg-gray-900 transition duration-300 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2`}
                >
                    <span className="text-sm text-gray-400 block float-left">
                        <AiFillDashboard color="white" size={20} />
                    </span>
                    <span className={`text-xsm font-medium flex-1 transition duration-200 ${!open && "hidden"}`}>
                        <span className="text-[14px] font-bold text-white">Dashboard</span>
                    </span>
                </Link>
                <hr className="border-t border-gray-400 mt-2" />
                <p className="text-gray-400 font-semibold text-xs mt-4">INTERFACE</p>
                <Link
                    to="#"
                    className={`text-gray-300 text-sm flex items-center gap-x-3 hover:text-white hover:bg-gray-900 transition duration-300 cursor-pointer p-1 hover:bg-light-white rounded-md mt-4`}
                >
                    <span className="text-sm text-gray-400 block float-left">
                        <IoMdSettings size={20} />
                    </span>
                    <span className={`text-xsm font-medium flex-1 transition duration-200 ${!open && "hidden"}`}>
                        <span className="text-[14px]">Components</span>
                    </span>
                    <span className="text-white -rotate-90 text-xl float-right mt-auto">
                        <MdExpandMore />
                    </span>
                </Link>
                <Link
                    to="#"
                    className={`text-gray-300 text-sm flex items-center gap-x-3 hover:text-white hover:bg-gray-900 transition duration-300 cursor-pointer p-1 hover:bg-light-white rounded-md mt-8`}
                >
                    <span className="text-sm text-gray-400 block float-left">
                        <IoBuildSharp size={20} />
                    </span>
                    <span className={`text-xsm font-medium flex-1 transition duration-200 ${!open && "hidden"}`}>
                        <span className="text-[14px]">Utilities</span>
                    </span>
                    <span className="text-white -rotate-90 text-xl float-right mt-auto">
                        <MdExpandMore />
                    </span>
                </Link>
                <hr className="border-t border-gray-400 my-4" />
                <p className="text-gray-400 font-semibold text-xs mt-4">ADDONS</p>
                <Link
                    to="#"
                    className={`text-gray-300 text-sm flex items-center gap-x-3 hover:text-white hover:bg-gray-900 transition duration-300 cursor-pointer p-1 hover:bg-light-white rounded-md mt-4`}
                >
                    <span className="text-sm text-gray-400 block float-left">
                        <FaFolder size={20} />
                    </span>
                    <span className={`text-xsm font-medium flex-1 transition duration-200 ${!open && "hidden"}`}>
                        <span className="text-[14px]">Pages</span>
                    </span>
                    <span className="text-white -rotate-90 text-xl float-right mt-auto">
                        <MdExpandMore />
                    </span>
                </Link>
                <Link
                    to="#"
                    className={`text-gray-300 text-sm flex items-center gap-x-3 hover:text-white hover:bg-gray-900 transition duration-300 cursor-pointer p-1 hover:bg-light-white rounded-md mt-8`}
                >
                    <span className="text-sm text-gray-400 block float-left">
                        <FaChartColumn size={20} />
                    </span>
                    <span className={`text-xsm font-medium flex-1 transition duration-200 ${!open && "hidden"}`}>
                        <span className="text-[14px]">Charts</span>
                    </span>
                </Link>
                <Link
                    to="#"
                    className={`text-gray-300 text-sm flex items-center gap-x-3 hover:text-white hover:bg-gray-900 transition duration-300 cursor-pointer p-1 hover:bg-light-white rounded-md mt-8`}
                >
                    <span className="text-sm text-gray-400 block float-left">
                        <LiaTableSolid size={20} />
                    </span>
                    <span className={`text-xsm font-medium flex-1 transition duration-200 ${!open && "hidden"}`}>
                        <span className="text-[14px]">Tables</span>
                    </span>
                </Link>
                <div className="flex items-center justify-center w-full">
                    <span className=" bg-blue-500 w-10  h-10 rounded-full text-white flex justify-center items-center mt-8 p-2 ">
                        <MdExpandMore className="text-white rotate-90 text-xl" />
                    </span>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
