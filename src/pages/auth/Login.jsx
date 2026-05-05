import { useState } from "react";
// useNavigate: Hook (fungsi) dari react-router untuk melakukan navigasi secara terprogram (misal: pindah setelah login sukses).
import { useNavigate, Link } from "react-router-dom";
// axios: Library eksternal untuk melakukan HTTP Request (mengambil atau mengirim data ke API/Server).
import axios from "axios";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    const navigate = useNavigate();
    
    // PENJELASAN STATE MANAGEMENT:
    // useState digunakan untuk menyimpan state (data komponen) yang bisa berubah sewaktu-waktu.
    // Ketika nilai state berubah menggunakan fungsi setter (misal: setLoading), React akan me-render ulang komponen (Re-render) agar UI berubah.
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    // State berbentuk Object (dataForm) sangat efisien untuk menangani Form dengan banyak inputan.
    const [dataForm, setDataForm] = useState({ email: "", password: "" });

    // PENJELASAN FUNGSI HANDLE CHANGE (TWO-WAY BINDING):
    // Fungsi ini dipanggil setiap kali ada ketikan (onChange) di input.
    // ...dataForm (Spread Operator): Menyalin semua isi object dataForm yang lama agar tidak terhapus.
    // [name]: value (Computed Property Name): Mengupdate secara dinamis HANYA field yang nama atributnya (name="email/password") sesuai dengan kotak yang sedang diketik.
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    // PENJELASAN FUNGSI HANDLE SUBMIT:
    // e.preventDefault() MENCEGAH prilaku bawaan browser yang selalu melakukan "Full Page Reload" atau pindah URL bawaan saat form disubmit.
    // Jika tidak ada ini, state React akan reset/hilang semua.
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // LOGIKA A: CEK LOCALSTORAGE BROWSER (Penyimpanan lokal di komputer user)
        const savedEmail = localStorage.getItem("registeredEmail");
        const savedPass = localStorage.getItem("registeredPass");

        if (savedEmail && dataForm.email === savedEmail && dataForm.password === savedPass) {
            setTimeout(() => {
                // Menyimpan token/status sesi (isLoggedIn) ke dalam browser.
                localStorage.setItem("isLoggedIn", "true");
                setLoading(false);
                navigate("/success");
            }, 1000); 
            // Return di sini penting untuk mengeksekusi penghentian fungsi agar proses tidak lanjut ke Axios di bawahnya.
            return; 
        }

        // LOGIKA B: JIKA TIDAK ADA DI LOCALSTORAGE, TEMBAK KE SERVER API (axios)
        // Endpoint dummyjson menangkap request berjenis POST.
        axios.post("https://dummyjson.com/user/login", {
            username: dataForm.email, 
            password: dataForm.password,
        })
        .then((response) => {
            // Block .then() berjalan JIKA respon dari server berhasil (status 200 OK).
            if (response.status !== 200) {
                setError(response.data.message);
                return;
            }
            localStorage.setItem("isLoggedIn", "true");
            navigate("/success"); 
        })
        .catch((err) => {
            // Block .catch() berjalan JIKA server menolak request (error 400/404/500), atau network mati.
            // err.response?.data?.message (Optional Chaining) membaca pesan error dari server API jika ada.
            setError(err.response?.data?.message || "Invalid credentials");
        })
        .finally(() => {
            // Block .finally() SELALU berjalan terlepas berhasil atau gagal, digunakan untuk mematikan status loading di tombol.
            setLoading(false);
        });
    };

    // PENJELASAN KONSEP RENDER FORM:
    // - value={dataForm.email} membuat komponen menjadi 'Controlled Component', di mana React memegang kontrol penuh atas apa yang ditampilkan di input.
    // - Conditional Rendering {error && <div>} berarti: Tampilkan elemen Div HANYA bernilai Truthy (ada isinya).
    // - Atribut 'disabled={loading}' membuat button HTML tidak bisa diklik dan mencegah user melakukan klik ganda saat proses API masih berjalan.
    return (
        <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden min-h-[550px]">
            <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col relative">
                <div className="flex items-center gap-2 mb-10">
                    <div className="w-8 h-8 rounded-full border-[2px] border-orange-500 flex items-center justify-center relative">
                        <div className="w-4 h-1 bg-orange-500 rounded-full absolute -ml-1"></div>
                        <div className="w-2 h-1 bg-orange-500 rounded-full absolute mt-3 -ml-2"></div>
                    </div>
                    <span className="text-xl font-bold text-gray-800 tracking-tight">Elegent</span>
                </div>

                <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Login</h2>
                    {error && <div className="bg-rose-50 text-rose-500 text-sm p-3 rounded-lg mb-4 text-center">{error}</div>}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-2">Email / Username</label>
                            <div className="relative">
                                <input type="text" name="email" value={dataForm.email} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-full py-4 pl-5 pr-12 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Enter your email" required />
                                <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-2">Password</label>
                            <div className="relative">
                                <input type="password" name="password" value={dataForm.password} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-full py-4 pl-5 pr-12 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="********" required />
                                <FaKey className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div className="flex justify-end pt-1">
                            <a href="#" className="text-xs font-semibold text-orange-400 hover:text-orange-500">Forget password</a>
                        </div>

                        <button type="submit" disabled={loading} className="w-full mt-2 bg-[#f98829] hover:bg-orange-500 text-white font-semibold py-4 rounded-full transition-all flex items-center justify-center gap-2 active:scale-95 shadow-[0_8px_20px_rgba(249,115,22,0.25)]">
                            {loading && <ImSpinner2 className="animate-spin" />}
                            {loading ? "Logging in..." : "Log in"}
                        </button>
                    </form>

                    <p className="text-center text-xs text-gray-400 font-medium mt-8">
                        Don't have an account ? <Link to="/register" className="text-orange-400 font-bold hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>

            <div className="hidden md:block w-1/2 bg-[#fa8620] relative overflow-hidden">
                <div className="absolute -top-32 -left-20 w-[450px] h-[450px] rounded-full bg-white/10 blur-[2px]"></div>
                <div className="absolute top-10 right-0 w-[350px] h-[350px] rounded-full bg-white/5 blur-[2px] translate-x-1/4"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-gradient-to-tr from-orange-300/60 to-orange-400/60 shadow-lg"></div>

                <div className="absolute bottom-16 left-12">
                    <h2 className="text-[40px] font-bold text-white leading-tight tracking-wide">Hey<br />Welcome<br />Back</h2>
                </div>
            </div>
        </div>
    );
}