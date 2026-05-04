import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from "../components/PageHeader";

export default function NotFound() {
    // Kita samakan kodenya dengan ErrorPage bertema Dino
    // Warna hijau Dino: #005037
    const dinoGreen = "005037";
    const embedUrl = `https://embed.lottiefiles.com/animation/78973?bg=${dinoGreen}`;

    return (
        <div id="dashboard-container" className="p-6">
            <PageHeader title="404 Not Found" breadcrumb="Unknown Page" />

            {/* Container Utama menggunakan warna hijau yang sama dengan Dino */}
            <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#005037] rounded-[40px] p-12 text-center shadow-2xl border-4 border-[#00422e]">
                
                {/* Animasi Dino (Iframe Mode agar stabil) */}
                <div className="w-full max-w-lg mb-8 h-[350px] overflow-hidden flex justify-center">
                    <iframe 
                        src={embedUrl}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        title="Dino Animation"
                    ></iframe>
                </div>

                {/* Info Error */}
                <div className="space-y-4">
                    {/* Aksen Angka 404 Transparan */}
                    <h1 className="text-8xl font-black text-white opacity-10 leading-none">404</h1>
                    
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                        Waduh! Menu Tidak Ditemukan
                    </h2>
                    
                    <p className="text-green-100 opacity-70 mb-10 max-w-md mx-auto text-lg leading-relaxed">
                        Halaman yang kamu cari tidak ada di daftar menu kami. 
                        Mungkin resepnya sudah diganti atau kamu salah masuk dapur!
                    </p>
                    
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#005037] font-black px-12 py-4 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95"
                    >
                        <span className="text-xl">←</span> Kembali ke Dapur Utama
                    </Link>
                </div>

                {/* Footer Dekoratif */}
                <div className="absolute bottom-10 opacity-30 text-white text-xs font-medium uppercase tracking-widest">
                    Sedap. Restaurant Dashboard System
                </div>
            </div>
        </div>
    );
}