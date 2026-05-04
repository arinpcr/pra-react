import { FaBed, FaChartBar, FaStore, FaUserPlus, FaHistory } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const recentActivity = isLoggedIn ? [
        { id: "#B-001", name: "Sarah Connor", room: "Deluxe Suite 401", status: "Completed" },
        { id: "#B-002", name: "John Wick", room: "Presidential 999", status: "Pending" },
        { id: "#B-003", name: "Bruce Wayne", room: "Standard Room 102", status: "Canceled" },
    ] : [];

    return (
        <div id="dashboard-container">
            <PageHeader title="Dashboard" breadcrumb="Overview" />

            <div id="dashboard-grid" className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 mt-6">
                <div className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="bg-emerald-400 rounded-2xl p-4 text-3xl text-white"><FaBed /></div>
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-bold text-lg">Bookings</span>
                        <span className="text-gray-500 text-xl font-bold">{isLoggedIn ? "280" : "0"}</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="bg-sky-400 rounded-2xl p-4 text-3xl text-white"><FaChartBar /></div>
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-bold text-lg">Today Users</span>
                        <span className="text-gray-500 text-xl font-bold">{isLoggedIn ? "2000" : "0"}</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="bg-orange-400 rounded-2xl p-4 text-3xl text-white"><FaStore /></div>
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-bold text-lg">Revenue</span>
                        <span className="text-gray-500 text-xl font-bold">{isLoggedIn ? "35k" : "0"}</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="bg-rose-400 rounded-2xl p-4 text-3xl text-white"><FaUserPlus /></div>
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-bold text-lg">Followers</span>
                        <span className="text-gray-500 text-xl font-bold">{isLoggedIn ? "1800" : "0"}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <FaHistory className="text-orange-500 text-xl" />
                    <h3 className="text-xl font-bold text-gray-800">Recent Bookings</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-50 text-sm">
                                <th className="pb-4 font-medium uppercase tracking-wider">Guest Name</th>
                                <th className="pb-4 font-medium uppercase tracking-wider">Booking ID</th>
                                <th className="pb-4 font-medium uppercase tracking-wider">Room Type</th>
                                <th className="pb-4 font-medium uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {!isLoggedIn ? (
                                <tr><td colSpan="4" className="text-center py-10 text-gray-400 font-semibold">Please login to view data</td></tr>
                            ) : (
                                recentActivity.map((c, i) => (
                                    <tr key={i} className="hover:bg-orange-50/50 transition-colors">
                                        <td className="py-5 font-semibold text-gray-700">{c.name}</td>
                                        <td className="py-5 text-gray-500">{c.id}</td>
                                        <td className="py-5 text-gray-500">{c.room}</td>
                                        <td className="py-5">
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${c.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : c.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-rose-100 text-rose-600'}`}>{c.status}</span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}