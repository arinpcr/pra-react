import { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
    // KONSEP STATE SEBAGAI SWITCH MODAL:
    // Modal (Jendela Popup) dalam React tidak memakai sistem manipulasi DOM seperti 'display: block' (Javascript Native).
    // Melainkan kita mendeklarasikan state (isSearchOpen) yang mengontrol tampil-tidaknya komponen UI di Virtual DOM.
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    // Mengecek dari cache browser.
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // PENJELASAN LOGICAL AND (&&) PADA CONDITIONAL RENDERING:
    // Tanda && adalah jalan pintas dari if statement di dalam React (If X is true, render Y).
    // Jadi saat div search di klik -> setIsSearchOpen di set ke 'true' -> komponen hitam muncul menutupi layar (fixed inset-0 z-50).
    return (
        <div id="header-container" className="flex justify-between items-center bg-transparent mb-6 mt-2">
            <div className="flex-1 hidden md:block"></div>

            <div id="search-bar" onClick={() => setIsSearchOpen(true)} className="flex-1 max-w-md relative cursor-pointer mx-4 hidden md:block">
                <input type="text" placeholder="Search..." className="w-full pl-6 pr-12 py-3 bg-white border border-gray-100 rounded-full shadow-sm outline-none text-sm text-gray-500 pointer-events-none" readOnly />
                <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {isSearchOpen && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-24 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-xl rounded-2xl p-4 shadow-2xl flex items-center gap-4">
                        <FaSearch className="text-gray-400 ml-2" />
                        <input className="flex-1 p-2 bg-transparent border-none outline-none text-gray-700" placeholder="Search..." autoFocus />
                        <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-red-500 p-2"><FaTimes /></button>
                    </div>
                </div>
            )}

            {/* KONSEP TERNARY OPERATOR PADA CONDITIONAL RENDERING: */}
            {/* Sintaks: (Kondisi) ? (Blok True) : (Blok False) */}
            {isLoggedIn ? (
                <div id="profile-container" className="flex items-center gap-3 bg-[#FFF4EA] p-1.5 pr-4 cursor-pointer border border-[#FFF4EA]">
                    <img src="/img/profile.jpg" alt="Aiden Max" className="w-9 h-9 rounded-full object-cover" onError={(e) => { e.target.src = "https://avatar.iran.liara.run/public/12" }} />
                    <span className="text-sm font-semibold text-gray-700">Arini Zahira Putri</span>
                    <FaChevronDown className="text-gray-400 text-xs ml-1" />
                </div>
            ) : (
                <Link to="/login" className="bg-[#f98829] hover:bg-orange-600 text-white px-8 py-2.5 rounded-full font-bold shadow-md transition-all active:scale-95 text-sm">
                    Login Now
                </Link>
            )}
        </div>
    );
}