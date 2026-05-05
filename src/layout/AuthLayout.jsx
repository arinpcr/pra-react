// Mengimpor Outlet, ini ibarat "lubang" atau "layar kosong" tempat halaman anak-anaknya nanti ditampilin.
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        /* 
           PEMBUNGKUS LUAR (AREA LOGIN/REGISTER)
           - min-h-screen: Bikin tinggi kotak ini full seukuran tinggi layar HP/Laptop kamu.
           - bg-[#fdf8f5]: Ngasih warna background krem lembut sesuai desain Figma.
           - flex items-center justify-center: Nah, ini combo maut! Fungsinya buat mindahin isi halaman (form login/register) biar posisinya benar-benar jatuh TEPAT DI TENGAH layar (vertikal & horizontal).
           - p-4: Ngasih jarak aman (padding) biar kalau dibuka di HP, formnya nggak nabrak pinggiran layar.
        */
        <div className="min-h-screen bg-[#fdf8f5] flex items-center justify-center p-4 font-poppins">
            
            {/* 
               WADAH ISI HALAMAN (SUNTIKAN)
               - Di titik inilah halaman <Login />, <Register />, atau <Success /> bakal muncul dan "disuntikkan" secara bergantian.
               - Ingat: AuthLayout ini kan buat halaman depan, makanya kita nggak panggil <Sidebar /> atau <Header /> sama sekali di sini. Jadi tampilannya murni cuma form aja di tengah.
            */}
            <Outlet />
            
        </div>
    );
}