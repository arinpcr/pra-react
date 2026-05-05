export default function Loading() {
    // PENJELASAN TAILWIND KELAS:
    // - min-h-screen: Memaksa tinggi div minimal 100vh (100% tinggi viewport/layar).
    // - flex-col: Mengubah arah flex menjadi vertikal (kolom).
    // - justify-center: Meratakan elemen secara vertikal tepat di tengah (karena arahnya flex-col).
    // - items-center: Meratakan elemen secara horizontal tepat di tengah.
    // - animate-spin: Memanggil keyframes CSS bawaan Tailwind untuk merotasi elemen 360 derajat secara terus-menerus.
    // - border-t-transparent: Membuat garis atas lingkaran menjadi transparan sehingga tercipta efek cincin yang terputus saat berputar.
    return (
        <div className=" flex flex-col justify-center items-center min-h-screen bg-white">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-green-600 text-lg">Loading...</p>
        </div>
    );
}