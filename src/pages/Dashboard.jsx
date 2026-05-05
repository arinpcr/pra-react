// Mengimpor sekumpulan ikon dari library 'react-icons/fa' (FontAwesome).
// Ini adalah cara efisien menggunakan ikon SVG di React tanpa perlu mengunduh file gambar satu per satu.
import { FaBed, FaChartBar, FaStore, FaUserPlus, FaHistory } from "react-icons/fa";

// Mengimpor komponen PageHeader yang sudah dibuat sebelumnya.
// Ini menunjukkan konsep "Reusability" (Ketergunaan Ulang) dalam React, di mana bagian UI yang sama tidak perlu ditulis ulang.
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    // PENJELASAN AUTENTIKASI SEDERHANA:
    // localStorage.getItem("isLoggedIn") mengambil data string dari memori browser.
    // Karena localStorage HANYA bisa menyimpan teks/string, kita menggunakan operasi strict equality (=== "true")
    // untuk mengubah hasil pengecekan tersebut menjadi tipe data Boolean (true / false) yang sesungguhnya.
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // PENJELASAN TERNARY OPERATOR & ARRAY OF OBJECTS:
    // Sintaks ini dibaca: JIKA isLoggedIn itu bernilai 'true', MAKA isi variabel ini dengan Array Data Dummy (Daftar Booking).
    // JIKA bernilai 'false' (belum login), isi dengan Array kosong [].
    // Penggunaan Array of Objects seperti ini sangat umum di React untuk mensimulasikan data yang ditarik dari Database (API).
    const recentActivity = isLoggedIn ? [
        { id: "#B-001", name: "Sarah Connor", room: "Deluxe Suite 401", status: "Completed" },
        { id: "#B-002", name: "John Wick", room: "Presidential 999", status: "Pending" },
        { id: "#B-003", name: "Bruce Wayne", room: "Standard Room 102", status: "Canceled" },
    ] : [];

    return (
        <div id="dashboard-container">
            {/* Mengoper data ke komponen anak melalui 'Props' (Properties). Di sini kita mengirim title dan breadcrumb */}
            <PageHeader title="Dashboard" breadcrumb="Overview" />

            {/* 
               PENJELASAN RESPONSIVE GRID TAILWIND:
               - 'grid': Mengaktifkan sistem layout CSS Grid.
               - 'sm:grid-cols-2': Pada layar ukuran kecil (tablet), bagi kotak menjadi 2 kolom.
               - 'md:grid-cols-4': Pada layar ukuran medium ke atas (laptop), bagi kotak menjadi 4 kolom.
               - 'gap-6': Memberikan jarak (gutter) antar kotak sebesar 1.5rem (24px).
            */}
            <div id="dashboard-grid" className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 mt-6">
                
                {/* 
                   PENJELASAN FLEXBOX PADA KARTU (CARD):
                   - 'flex items-center': Menyusun ikon dan teks menyamping, lalu memusatkannya secara vertikal.
                   - 'space-x-5': Memberi jarak horizontal otomatis di antara ikon dan teks tanpa perlu menulis margin.
                */}
                <div className="flex items-center space-x-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="bg-emerald-400 rounded-2xl p-4 text-3xl text-white"><FaBed /></div>
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-bold text-lg">Bookings</span>
                        
                        {/* CONDITIONAL RENDERING PADA TEKS: Jika login tampilkan "280", jika belum tampilkan "0" */}
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
                
                {/* 
                   'overflow-x-auto': Sangat krusial untuk tabel. Jika layar HP terlalu kecil, 
                   tabel tidak akan merusak layout web, melainkan bisa di-scroll ke samping secara mandiri.
                */}
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
                            
                            {/* 
                               PENJELASAN LOGIKA TABEL BERSYARAT:
                               Jika TIDAK login (!isLoggedIn), tampilkan baris informasi "Please login...".
                               Jika SUDAH login (:), lakukan proses .map() pada data recentActivity.
                            */}
                            {!isLoggedIn ? (
                                <tr><td colSpan="4" className="text-center py-10 text-gray-400 font-semibold">Please login to view data</td></tr>
                            ) : (
                                /* 
                                   PENJELASAN FUNGSI MAP & KEY:
                                   - map() adalah metode perulangan standar di React untuk mengubah data Array menjadi daftar elemen HTML.
                                   - 'c' melambangkan satu baris data (Current Item), 'i' melambangkan nomor urut/index.
                                   - 'key={i}': React mewajibkan setiap elemen yang diulang menggunakan atribut 'key' yang unik
                                     agar React bisa melacak, menghapus, atau mengupdate elemen tersebut secara efisien tanpa me-render ulang seluruh tabel.
                                */
                                recentActivity.map((c, i) => (
                                    <tr key={i} className="hover:bg-orange-50/50 transition-colors">
                                        <td className="py-5 font-semibold text-gray-700">{c.name}</td>
                                        <td className="py-5 text-gray-500">{c.id}</td>
                                        <td className="py-5 text-gray-500">{c.room}</td>
                                        <td className="py-5">
                                            {/* 
                                               PENJELASAN DYNAMIC STYLING DENGAN TEMPLATE LITERALS:
                                               Kita menggunakan backticks (`) dan ternary bersarang untuk menentukan warna badge:
                                               - Jika c.status === 'Completed', warnanya hijau (emerald).
                                               - Jika c.status === 'Pending', warnanya kuning (amber).
                                               - Jika selain itu (Canceled), warnanya merah (rose).
                                            */}
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