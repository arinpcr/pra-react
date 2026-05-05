// Outlet adalah komponen placeholder (tempat kosong) dari react-router-dom.
// Ini bertindak sebagai titik masuk di mana child routes (komponen halaman anak) akan dirender.
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
    // PENJELASAN STRUKTUR LAYOUTING FLEXBOX:
    // 1. Konsep "lg:flex-row": Ini adalah pendekatan Mobile-First. 
    //    Secara default (di HP), div ini memakai 'flex-col' (Sidebar di atas, Konten di bawah).
    //    Saat layar mencapai ukuran laptop ('lg'), layout berubah menjadi 'flex-row' (Sidebar di kiri, Konten di kanan).
    // 2. Konsep "flex-1": Diterapkan pada div konten. Ini memberitahu browser agar elemen ini meregang (grow) 
    //    dan mengambil sisa ruang flexbox yang tersedia setelah dikurangi ukuran lebar Sidebar.
    // 3. <Outlet />: Tanpa komponen ini, halaman Dashboard atau Bookings tidak akan pernah muncul di layar.
    return (
        <div className="min-h-screen bg-[#FFF4EA] font-poppins text-gray-800">
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