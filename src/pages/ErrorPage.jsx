import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage({ code, title, description, lottieUrl }) {
    // Kita pakai kode warna latar dino: 005037
    const dinoGreen = "005037"; 
    const embedUrl = `https://embed.lottiefiles.com/animation/78973?bg=${dinoGreen}`;

    return (
        <div id="dashboard-container" className="p-6">
            {/* Latar error sekarang menggunakan #005037 agar sama dengan latar dino */}
            <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#005037] rounded-[40px] p-12 text-center shadow-2xl border-4 border-[#00422e]">
                
                {/* Animasi Dino */}
                <div className="w-full max-w-lg mb-8 h-[350px] overflow-hidden flex justify-center">
                    <iframe 
                        src={lottieUrl ? `${lottieUrl}?bg=${dinoGreen}` : embedUrl}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        title="Dino Animation"
                    ></iframe>
                </div>

                {/* Info Error */}
                <div className="space-y-4">
                    <h1 className="text-8xl font-black text-white opacity-10 leading-none">{code}</h1>
                    
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                        {title}
                    </h2>
                    
                    <p className="text-green-100 opacity-60 mb-10 max-w-md mx-auto text-lg leading-relaxed">
                        {description}
                    </p>
                    
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#005037] font-black px-12 py-4 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95"
                    >
                        <span className="text-xl">←</span> Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
}