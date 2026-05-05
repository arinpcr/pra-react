// Mengimpor Outlet ibarat "Layar Kosong" tempat halamannya muncul
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
    // PENJELASAN KODE DI BAWAH:
    // - lg:flex-row: Kalau di HP numpuk atas-bawah, kalau di Laptop nyamping kiri-kanan.
    // - flex-1: Menghabiskan semua sisa ruang di sebelah kanan Sidebar.
    // - Outlet: Di titik inilah halaman Dashboard dll akan disuntikkan/ditampilkan.
    return (
        <div className="min-h-screen bg-[#fdf8f5] font-poppins text-gray-800">
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