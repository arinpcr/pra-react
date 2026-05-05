import { FaHome, FaBed, FaUserFriends, FaSignOutAlt, FaSignInAlt, FaBan } from "react-icons/fa";
// NavLink adalah link khusus menu. Dia bisa tahu kapan menu itu lagi diklik/aktif.
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  // Mengecek ke memori browser: Apakah user ini udah punya stempel login?
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleAuthAction = () => {
      if (isLoggedIn) {
          // JIKA LOGOUT: Hapus stempel sesi dan paksa browser refresh total (Hard Refresh)
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/"; 
      } else {
          // JIKA BELUM LOGIN: Arahkan mulus ke halaman login
          navigate("/login"); 
      }
  };

  // Fungsi cerdas pewarnaan menu: JIKA menu sedang aktif (isActive), warnanya otomatis menyesuaikan
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-3 transition-all font-medium
    ${isActive ? "text-white bg-orange-500 shadow-md shadow-orange-200" : "text-gray-500 hover:text-orange-500 hover:bg-orange-50"}`;

  // PENJELASAN KODE DI BAWAH:
  // - Pada bagian FOOTER, ada logika: {isLoggedIn ? (Tampil Logout) : (Tampil Login)}
  return (
    <div id="sidebar" className="flex flex-col w-64 min-h-[95vh] bg-white m-4 rounded-[32px] shadow-sm p-4">
      
      <div id="sidebar-logo" className="flex items-center gap-3 mb-10 px-4 pt-6">
        <div className="w-10 h-10 rounded-full border-[3px] border-orange-500 flex items-center justify-center relative">
            <div className="w-5 h-1.5 bg-orange-500 rounded-full absolute -ml-1"></div>
            <div className="w-3 h-1.5 bg-orange-500 rounded-full absolute mt-4 -ml-3"></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Elegent</h1>
      </div>

      <div id="sidebar-menu" className="flex-1 overflow-y-auto px-2">
        <ul id="menu-list" className="space-y-2">
          <li><NavLink to="/" className={menuClass}><FaHome className="text-xl" /> <span>Dashboard</span></NavLink></li>
          <li><NavLink to="/bookings" className={menuClass}><FaBed className="text-xl" /> <span>Bookings</span></NavLink></li>
          <li><NavLink to="/guests" className={menuClass}><FaUserFriends className="text-xl" /> <span>Guests</span></NavLink></li>
          
          <li className="mt-8 pt-6 border-t border-gray-100">
            <span className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Error Pages</span>
          </li>
          <li><NavLink to="/error-400" className={menuClass}><FaBan className="text-xl" /> <span>Error 400</span></NavLink></li>
          <li><NavLink to="/error-401" className={menuClass}><FaBan className="text-xl" /> <span>Error 401</span></NavLink></li>
          <li><NavLink to="/error-403" className={menuClass}><FaBan className="text-xl" /> <span>Error 403</span></NavLink></li>
        </ul>
      </div>

      <div id="sidebar-footer" className="mt-auto px-2 pb-4">
          <button onClick={handleAuthAction} className="flex items-center gap-3 text-orange-500 font-bold hover:text-orange-700 p-4 w-full rounded-xl hover:bg-orange-50 transition-all">
              {isLoggedIn ? (
                  <><FaSignOutAlt className="text-xl" /><span>Logout</span></>
              ) : (
                  <><FaSignInAlt className="text-xl" /><span>Login</span></>
              )}
          </button>
      </div>
    </div>
  );
}