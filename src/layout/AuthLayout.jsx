import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-[#fdf8f5] flex items-center justify-center p-4 font-poppins">
            <Outlet />
        </div>
    );
}