import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dataForm, setDataForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = (e) => {
        // e.preventDefault wajib dipanggil biar saat disubmit layarnya nggak kedip/refresh
        e.preventDefault();
        setLoading(true);

        // Simulasi proses registrasi selama 1,5 detik
        setTimeout(() => {
            // SIMPAN DATA AKUN BARU KE LOCALSTORAGE BROWSER BIAR BISA DILOGIN
            localStorage.setItem("registeredEmail", dataForm.email);
            localStorage.setItem("registeredPass", dataForm.password);
            localStorage.setItem("registeredName", dataForm.name);

            setLoading(false);
            // Lempar user ke halaman login setelah berhasil buat akun
            navigate("/login");
        }, 1500);
    };

    return (
        <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden min-h-[550px]">
            <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col relative">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded-full border-[2px] border-orange-500 flex items-center justify-center relative">
                        <div className="w-4 h-1 bg-orange-500 rounded-full absolute -ml-1"></div>
                        <div className="w-2 h-1 bg-orange-500 rounded-full absolute mt-3 -ml-2"></div>
                    </div>
                    <span className="text-xl font-bold text-gray-800 tracking-tight">Elegent</span>
                </div>

                <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Signup</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-2">Name</label>
                            <div className="relative">
                                <input type="text" name="name" value={dataForm.name} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-full py-4 pl-5 pr-12 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Enter your full name" required />
                                <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-2">Email</label>
                            <div className="relative">
                                <input type="email" name="email" value={dataForm.email} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-full py-4 pl-5 pr-12 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Enter your email" required />
                                <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-2">Password</label>
                            <div className="relative">
                                <input type="password" name="password" value={dataForm.password} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-full py-4 pl-5 pr-12 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Create password" required />
                                <FaKey className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className="w-full mt-6 bg-[#f98829] hover:bg-orange-500 text-white font-semibold py-4 rounded-full transition-all flex items-center justify-center gap-2 active:scale-95 shadow-[0_8px_20px_rgba(249,115,22,0.25)]">
                            {loading && <ImSpinner2 className="animate-spin" />}
                            {loading ? "Signing up..." : "Sign up"}
                        </button>
                    </form>

                    <p className="text-center text-xs text-gray-400 font-medium mt-8">
                        Already have an account ? <Link to="/login" className="text-orange-400 font-bold hover:underline">Log in</Link>
                    </p>
                </div>
            </div>

            <div className="hidden md:block w-1/2 bg-[#fa8620] relative overflow-hidden">
                <div className="absolute -top-32 -left-20 w-[450px] h-[450px] rounded-full bg-white/10 blur-[2px]"></div>
                <div className="absolute top-10 right-0 w-[350px] h-[350px] rounded-full bg-white/5 blur-[2px] translate-x-1/4"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-gradient-to-tr from-orange-300/60 to-orange-400/60 shadow-lg"></div>

                <div className="absolute bottom-16 left-12">
                    <h2 className="text-[40px] font-bold text-white leading-tight tracking-wide">Hey<br />Register<br />Yourself</h2>
                </div>
            </div>
        </div>
    );
}