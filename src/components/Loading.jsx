export default function Loading() {
    // PENJELASAN KODE DI BAWAH:
    // - flex, justify-center, items-center: Bikin isi kotaknya ngepas di tengah layar.
    // - animate-spin: Efek animasi muter-muter bawaan Tailwind.
    return (
        <div className=" flex flex-col justify-center items-center min-h-screen bg-white">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-green-600 text-lg">Loading...</p>
        </div>
    );
}