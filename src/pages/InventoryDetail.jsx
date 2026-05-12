import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaBox, FaTags, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

// IMPORT FILE JSON LOKAL KITA
import inventoryData from "../data/inventory.json";

export default function InventoryDetail() {
    const { id } = useParams();
    
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // MENCARI DATA LOKAL:
        // Mencari item di dalam array inventoryData yang ID-nya sama dengan ID dari URL
        // (Kita ubah item.id menjadi String karena {id} dari useParams selalu berbentuk string)
        const foundItem = inventoryData.find((item) => String(item.id) === id);

        if (foundItem) {
            setProduct(foundItem);
        } else {
            setError("Maaf, barang tidak ditemukan di dalam inventaris.");
        }
    }, [id]);

    if (error) {
        return (
            <div className="p-2 font-poppins">
                <PageHeader title="Item Detail" breadcrumb="Error" />
                <div className="bg-rose-50 text-rose-500 p-6 rounded-[32px] text-center font-bold">{error}</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="p-2 font-poppins">
                <PageHeader title="Item Detail" breadcrumb="Loading" />
                <div className="text-center py-20 text-gray-400 font-bold animate-pulse">Memuat detail barang...</div>
            </div>
        );
    }

    return (
        <div className="p-2 font-poppins">
            <PageHeader title="Item Detail" breadcrumb={["Inventory", product.title]}>
                <Link to="/inventory">
                    <button className="flex items-center gap-2 bg-gray-100 text-gray-600 px-6 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-all text-sm">
                        <FaArrowLeft /> Back to List
                    </button>
                </Link>
            </PageHeader>

            <div className="mt-6 bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row p-8 gap-10">
                
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                    <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex items-center justify-center">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-auto object-contain drop-shadow-md max-h-64"
                        />
                    </div>
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-center">
                    <div className="text-orange-500 font-bold tracking-widest text-xs mb-2 uppercase">
                        {product.brand} • {product.code}
                    </div>
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{product.title}</h2>
                    <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl">
                        Premium {product.category.toLowerCase()} item provided exclusively for Elegent Hotel guests. Ensure stock is always maintained above minimum requirements.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 text-xl"><FaTags /></div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase">Category</p>
                                <p className="font-bold text-gray-800 capitalize">{product.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 text-xl"><FaBox /></div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase">Stock Status</p>
                                <p className="font-bold text-gray-800">{product.stock} Units</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl">
                            <FaDollarSign />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Price per unit</p>
                            <p className="text-3xl font-black text-gray-800">${product.price}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}