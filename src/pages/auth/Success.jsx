import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Success() {
    // PENJELASAN KODE DI BAWAH:
    // - Link: Komponen khusus dari React Router agar pas dipencet pindah ke Dashboard, halamannya tidak perlu reloading browser secara total.
    return (
        <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden min-h-[550px]">
            <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col relative">
                <div className="flex items-center gap-2 mb-auto">
                    <div className="w-8 h-8 rounded-full border-[2px] border-orange-500 flex items-center justify-center relative">
                        <div className="w-4 h-1 bg-orange-500 rounded-full absolute -ml-1"></div>
                        <div className="w-2 h-1 bg-orange-500 rounded-full absolute mt-3 -ml-2"></div>
                    </div>
                    <span className="text-xl font-bold text-gray-800 tracking-tight">Elegent</span>
                </div>

                <div className="flex flex-col items-center justify-center text-center my-auto">
                    <FaRegCheckCircle className="text-emerald-400 text-[90px] mb-8" />
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Login Successful</h2>
                    <p className="text-sm text-gray-400 mb-10 max-w-[280px] leading-relaxed">
                        Welcome back to Elegent. Your secure session has been established.
                    </p>
                    
                    <Link to="/" className="w-full max-w-[280px]">
                        <button className="w-full bg-[#f98829] hover:bg-orange-500 text-white font-semibold py-4 rounded-full transition-all active:scale-95 shadow-md">
                            Go to Dashboard
                        </button>
                    </Link>
                </div>
                <div className="mt-auto"></div>
            </div>

            <div className="hidden md:block w-1/2 bg-[#fa8620] relative overflow-hidden">
                <div className="absolute -top-32 -left-20 w-[450px] h-[450px] rounded-full bg-white/10 blur-[2px]"></div>
                <div className="absolute top-10 right-0 w-[350px] h-[350px] rounded-full bg-white/5 blur-[2px] translate-x-1/4"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-gradient-to-tr from-orange-300/60 to-orange-400/60 shadow-lg"></div>

                <div className="absolute bottom-16 left-12">
                    <h2 className="text-[40px] font-bold text-white leading-tight tracking-wide">You Are<br />Ready To<br />Explore</h2>
                </div>
            </div>
        </div>
    );
}