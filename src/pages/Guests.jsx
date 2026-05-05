// Mengimpor hook useState untuk menangani logika buka/tutup modal form tambah tamu.
import { useState } from "react";
// Mengimpor komponen PageHeader untuk menampilkan judul halaman secara konsisten.
import PageHeader from "../components/PageHeader";

export default function Guests() {
    // PENJELASAN STATE MODAL:
    // showForm: Menyimpan status apakah modal input tamu baru sedang muncul (true) atau tersembunyi (false).
    const [showForm, setShowForm] = useState(false);

    // PENJELASAN AUTH CHECK:
    // Mengambil status login dari memori lokal browser. Data di localStorage selalu bertipe string, 
    // jadi harus dibandingkan dengan "true" untuk mendapatkan nilai Boolean murni.
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // PENJELASAN GENERASI DATA DINAMIS:
    // Jika user sudah login, sistem membuat 15 data tamu otomatis menggunakan Array.from.
    // % (Modulo) digunakan untuk mengulang-ulang nama dan tingkat loyalitas agar data terlihat variatif.
    const guestsData = isLoggedIn ? Array.from({ length: 15 }, (_, i) => ({
        id: `GST-0${i + 1}`,
        name: ["Aiden Max", "Bella Swan", "Carter Dan", "Diana Prince", "Ethan Hunt"][i % 5],
        email: `guest${i + 1}@elegent.com`,
        phone: `+62 811-2233-00${i}`,
        loyalty: ["Bronze", "Silver", "Gold"][i % 3]
    })) : [];

    return (
        <div id="dashboard-container" className="p-2 font-poppins">
            {/* PageHeader menerima title dan breadcrumb sebagai props untuk navigasi halaman */}
            <PageHeader title="Guests" breadcrumb="Guest Directory">
                
                {/* CONDITIONAL RENDERING TOMBOL:
                    Tombol "+ Add Guest" hanya akan dirender (tampil) jika isLoggedIn bernilai true.
                    onClick={() => setShowForm(true)} akan mengubah state untuk memicu munculnya modal. */}
                {isLoggedIn && (
                    <button 
                        onClick={() => setShowForm(true)}
                        className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95"
                    >
                        + Add Guest
                    </button>
                )}
            </PageHeader>

            {/* AREA TABEL DIREKTORI TAMU */}
            <div className="mt-8 bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        {/* Header tabel menggunakan latar oranye sangat muda (bg-orange-50/50) agar teks terlihat jelas */}
                        <tr className="bg-orange-50/50">
                            <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest">ID</th>
                            <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest">Guest Profile</th>
                            <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest">Contact</th>
                            <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest text-center">Loyalty Tier</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        
                        {/* KONDISI TAMPILAN DATA:
                            Jika belum login (!isLoggedIn), tampilkan pesan peringatan di tengah tabel.
                            Jika sudah login, lakukan .map() untuk mengubah setiap objek tamu menjadi baris tabel (<tr>). */}
                        {!isLoggedIn ? (
                            <tr>
                                <td colSpan="4" className="text-center py-10 text-gray-400 font-semibold">
                                    Please login to view data
                                </td>
                            </tr>
                        ) : (
                            guestsData.map((guest, i) => (
                                <tr key={i} className="hover:bg-orange-50/30 transition-colors group">
                                    {/* Kolom ID: Menggunakan group-hover agar warna teks berubah saat baris disentuh kursor */}
                                    <td className="p-6 font-bold text-gray-400 group-hover:text-orange-500">{guest.id}</td>
                                    <td className="p-6">
                                        <div className="font-extrabold text-gray-800">{guest.name}</div>
                                        <div className="text-xs text-gray-400 mt-1">{guest.email}</div>
                                    </td>
                                    <td className="p-6 text-sm text-gray-500 font-medium">{guest.phone}</td>
                                    <td className="p-6 text-center">
                                        {/* BADGE LOYALTY DINAMIS:
                                            Warna badge (Gold, Silver, Bronze) berubah otomatis menggunakan logika Ternary bersarang. */}
                                        <span className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm ${
                                            guest.loyalty === 'Gold' ? 'bg-yellow-400 text-white shadow-yellow-200' : 
                                            guest.loyalty === 'Silver' ? 'bg-gray-300 text-gray-700 shadow-gray-200' : 'bg-orange-300 text-white shadow-orange-200'
                                        }`}>
                                            {guest.loyalty}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* MODAL POPUP:
                Hanya dirender jika state showForm bernilai true. 
                Menggunakan overlay hitam transparan (bg-black/40) dan efek blur agar fokus user tertuju pada form. */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    {/* Kotak Putih Modal dengan animasi zoom-in agar muncul dengan halus */}
                    <div className="bg-white w-full max-w-md rounded-[32px] p-10 shadow-2xl animate-in zoom-in duration-200">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">New Guest Entry</h2>
                        <div className="space-y-4">
                            <input type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500" placeholder="Full Name" />
                            <input type="email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email Address" />
                            <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 text-gray-500">
                                <option>Gold</option>
                                <option>Silver</option>
                                <option>Bronze</option>
                            </select>
                        </div>
                        <div className="flex gap-4 mt-8">
                            {/* Tombol Cancel: Menutup kembali modal dengan mengubah state menjadi false */}
                            <button onClick={() => setShowForm(false)} className="flex-1 font-bold text-gray-400 hover:bg-gray-50 rounded-2xl">Cancel</button>
                            {/* Tombol Save: Dalam simulasi ini hanya berfungsi untuk menutup modal */}
                            <button onClick={() => setShowForm(false)} className="flex-1 py-4 bg-orange-500 text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-600">Save Guest</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}