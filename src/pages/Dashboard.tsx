import { useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import LineChart from "../components/LineChart";
import DonutChart from "../components/DonutChart";


const Dashboard = () => {
    //const dispatch = useDispatch();
    useEffect(() => {
        const getData = async () => {
        };

        getData();
    }, []);

    return (
        <div className="fade-in mx-4 mb-[140px]">
            <h1 className="text-2xl font-[400] mt-4 ml-4">
                Dashboard
            </h1>
            <div className="ml-4 mt-4">
                <div className="flex justify-between gap-4">
                    <div className="bg-white p-4 rounded-md border-l-4 border-l-blue-600 flex items-center justify-between shadow-lg w-[300px] h-[100px] border border-gray-100">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-blue-600">EARNINGS (MONTHLY)</span>
                            <span className="text-2xl font-bold">$40,000</span>
                        </div>
                        <FaCalendar className="h-6 w-6 text-gray-300" size={30} />
                    </div>

                    <div className="bg-white p-4 rounded-md border-l-4 border-l-green-500 flex items-center justify-between shadow-lg w-[300px] h-[100px] border border-gray-100">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-green-500">EARNINGS (ANNUAL)</span>
                            <span className="text-2xl font-bold">$215,000</span>
                        </div>
                        <FaDollarSign className="h-6 w-6 text-gray-300" size={30} />
                    </div>

                    <div className="bg-white p-4 rounded-md border-l-4 border-l-violet-500 flex justify-between items-center shadow-lg w-[300px] h-[100px] border border-gray-100">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-violet-500">TASKS</span>
                            <div className="flex w-[240px] justify-between ">
                                <span className="text-2xl font-bold">50%</span>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200 mt-3 mx-4">
                                    <div className="bg-violet-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                                </div>

                            </div>

                        </div>

                        <FaClipboardList className="h-6 w-6 text-gray-300" />
                    </div>

                    <div className="bg-white p-4 rounded-md border-l-4 border-l-yellow-500 flex items-center justify-between shadow-lg w-[300px] h-[100px] border border-gray-100">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-yellow-500">PENDING REQUESTS</span>
                            <span className="text-2xl font-bold">18</span>
                        </div>
                        <TbMessages className="h-6 w-6 text-gray-300" size={30} />
                    </div>

                </div>
            </div>

            <div className="mt-10 ml-4 flex gap-4 justify-between">
                <div className="w-[1000px] shadow-lg bg-white">
                    <LineChart />
                </div>
                <div className="ml-4 w-[500px] shadow-lg bg-white">
                    <DonutChart />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
