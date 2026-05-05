import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    // PENJELASAN KONSEP AUTH LAYOUT:
    // Layout ini tidak memanggil komponen navigasi (Sidebar/Header) sama sekali karena halaman Login/Register
    // ditujukan untuk user yang belum masuk ke dalam sistem utama.
    // Kombinasi 'min-h-screen flex items-center justify-center' adalah cara standar dan paling efisien 
    // untuk menengahkan sebuah kotak (form) sempurna di tengah layar tanpa perlu repot mengatur margin otomatis.
    return (
        <div className="min-h-screen bg-[#fdf8f5] flex items-center justify-center p-4 font-poppins">
            <Outlet />
        </div>
    );
}