// Mengimpor hook useState dan useEffect dari React.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// IMPORT FILE JSON LOKAL KITA
import inventoryData from "../data/inventory.json";

export default function Inventory() {
    // PENJELASAN STATE MODAL:
    // showForm: State boolean (true/false) untuk menentukan apakah modal pop-up tampil atau tidak.
    const [showForm, setShowForm] = useState(false);
    
    // items: Menyimpan data array produk dari inventory.json
    const [items, setItems] = useState([]);
    
    // PENJELASAN AUTH CHECK:
    // Mengecek apakah ada status 'true' pada kunci 'isLoggedIn' di Local Storage.
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    useEffect(() => {
        // Jika user sudah login, langsung masukkan data dari file inventory.json ke dalam state
        if (isLoggedIn) {
            setItems(inventoryData);
        }
    }, [isLoggedIn]);

    return (
        <div id="dashboard-container" className="p-2 font-poppins">
            {/* PageHeader menggunakan konsep 'Children Props' untuk memasukkan tombol ke dalamnya */}
            <PageHeader title="Inventory" breadcrumb="Stock & Amenities">
                
                {/* CONDITIONAL RENDERING TOMBOL: 
                    Simbol '&&' berarti: Tampilkan Button HANYA jika isLoggedIn bernilai true */}
                {isLoggedIn && (
                    <button 
                        onClick={() => setShowForm(true)} // Mengubah state menjadi true untuk membuka modal
                        className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)]"
                    >
                        + Add Item
                    </button>
                )}
            </PageHeader>

            {/* TABEL DATA INVENTORY */}
            <div className="mt-8 bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-orange-50/50">
                                <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest">Item Code</th>
                                <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest">Item Name</th>
                                <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest">Category</th>
                                <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest text-center">Stock</th>
                                <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            
                            {/* CONDITIONAL RENDERING ISI TABEL:
                                Jika Belum Login -> Tampilkan baris "Please login..."
                                Jika Sudah Login -> Lakukan looping (.map) pada data items */}
                            {!isLoggedIn ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-10 text-gray-400 font-semibold">
                                        Please login to view inventory data
                                    </td>
                                </tr>
                            ) : (
                                items.map((item) => (
                                    <tr key={item.id} className="hover:bg-orange-50/30 transition-colors group">
                                        <td className="p-6 font-bold text-gray-400">{item.code}</td>
                                        
                                        {/* BAGIAN YANG DIUBAH: Menambahkan flex dan tag img untuk thumbnail */}
                                        <td className="p-6">
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={item.thumbnail} 
                                                    alt={item.title} 
                                                    className="w-12 h-12 rounded-xl object-cover shadow-sm border border-gray-100"
                                                />
                                                <div>
                                                    <Link to={`/inventory/${item.id}`} className="font-extrabold text-gray-800 hover:text-orange-500 transition-colors block">
                                                        {item.title}
                                                    </Link>
                                                    <div className="text-xs text-gray-400 font-normal mt-1">{item.brand}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="p-6 text-sm font-semibold text-gray-500 capitalize">
                                            {item.category}
                                        </td>
                                        <td className="p-6 text-center">
                                            {/* BADGE STOCK DINAMIS: Persis seperti gaya halaman Bookings */}
                                            <div className={`mx-auto w-fit px-5 py-1.5 rounded-full text-[10px] font-black uppercase flex items-center gap-2 ${
                                                item.stock > 50 ? 'bg-emerald-100 text-emerald-600' : 
                                                item.stock > 20 ? 'bg-amber-100 text-amber-600' : 'bg-rose-100 text-rose-600'
                                            }`}>
                                                {/* Dot kecil di samping tulisan stok */}
                                                <div className={`w-1.5 h-1.5 rounded-full ${
                                                    item.stock > 50 ? 'bg-emerald-600' : 
                                                    item.stock > 20 ? 'bg-amber-600' : 'bg-rose-600'
                                                }`} />
                                                {item.stock} in stock
                                            </div>
                                        </td>
                                        <td className="p-6 font-black text-gray-800">${item.price}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MODAL POPUP: Hanya muncul jika state showForm bernilai TRUE */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    {/* Kotak Modal dengan Animasi zoom-in */}
                    <div className="bg-white w-full max-w-md rounded-[32px] p-10 shadow-2xl animate-in zoom-in duration-200">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">Add New Item</h2>
                        <div className="space-y-4 text-left">
                            <input type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500" placeholder="Item Name" />
                            <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 text-gray-500">
                                <option>Amenities</option>
                                <option>Electronics</option>
                                <option>Beverages</option>
                                <option>Snacks</option>
                            </select>
                            <input type="number" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500" placeholder="Stock Amount" />
                            <input type="number" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500" placeholder="Price ($)" />
                        </div>
                        <div className="flex gap-4 mt-8">
                            {/* Tombol Discard/Batal: Mengubah state showForm kembali ke false untuk menutup modal */}
                            <button onClick={() => setShowForm(false)} className="flex-1 font-bold text-gray-400 hover:bg-gray-50 rounded-2xl">Discard</button>
                            {/* Tombol Save: Sama-sama menutup modal dalam simulasi ini */}
                            <button onClick={() => setShowForm(false)} className="flex-1 py-4 bg-orange-500 text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-600">Save Item</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}