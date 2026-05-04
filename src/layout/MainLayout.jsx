import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-[#fdf8f5] font-poppins text-gray-800">
            {/* Menggunakan background krem hex color agar persis desain Elegent */}
            <div className="flex min-h-screen flex-col lg:flex-row">
                <Sidebar />
                <div id="main-content" className="flex-1 p-4 md:p-6 xl:p-8">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}