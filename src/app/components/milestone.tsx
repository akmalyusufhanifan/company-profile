"use client";
import { useState } from "react";

export default function MilestonePreview() {
  const [showModal, setShowModal] = useState(false);

  const milestones = [
    {
      year: 2022,
      text: "JNE merilis Roket Indonesia, yaitu layanan kurir instan berbasis aplikasi yang menjamin estimasi pengantaran sampai dalam waktu 1 jam. Layanan ini sudah tersedia di 54 kota atau Cabang JNE.",
    },
    {
      year: 2020,
      text: "JNE merintis pembangunan pusat sortir otomatis berskala besar yang disebut Mega Hub di Bandara Mas, Cengkareng, Tangerang. Mega Hub diproyeksikan bisa memproses 1 juta paket dalam sehari.",
    },
    {
      year: 2017,
      text: "JNE membangun E-fulfillment di beberapa cabang sebagai solusi bisnis terpadu bagi para pelaku Usaha Kecil, Mikro dan Menengah (UMKM), khususnya pemilik nama dagang, yang berjualan secara daring. E-fulfillment membantu para pelaku UMKM fokus pada pengembangan produk dan marketing digital, sedangkan aktivitas logistiknya, mulai dari manajemen pergudangan, stok barang, pemilahan dan pengemasan sampai pengantaran barang ke tangan pelanggan, ditangani oleh JNE.",
    },
    // kamu bisa tambahkan data lainnya di sini
  ];

  const allMilestones = [
    {
      year: 2022,
      text: "JNE merilis Roket Indonesia, yaitu layanan kurir instan berbasis aplikasi yang menjamin estimasi pengantaran sampai dalam waktu 1 jam. Layanan ini sudah tersedia di 54 kota atau Cabang JNE.",
    },
    {
      year: 2020,
      text: "JNE merintis pembangunan pusat sortir otomatis berskala besar yang disebut Mega Hub di Bandara Mas, Cengkareng, Tangerang. Mega Hub diproyeksikan bisa memproses 1 juta paket dalam sehari.",
    },
    {
      year: 2017,
      text: "JNE membangun E-fulfillment di beberapa cabang sebagai solusi bisnis terpadu bagi para pelaku Usaha Kecil, Mikro dan Menengah (UMKM), khususnya pemilik nama dagang, yang berjualan secara daring. E-fulfillment membantu para pelaku UMKM fokus pada pengembangan produk dan marketing digital, sedangkan aktivitas logistiknya, mulai dari manajemen pergudangan, stok barang, pemilahan dan pengemasan sampai pengantaran barang ke tangan pelanggan, ditangani oleh JNE.",
    },
    {
      year: 2014,
      text: "JNE meluncurkan aplikasi MY JNE, yaitu aplikasi serba-guna berbasis android yang membantu pelanggan untuk mengecek tarif kiriman, menelusuri posisi paket, lokasi konter terdekat, sekaligus tempat transaksi jual-beli antara penjual dan pembeli individual.",
    },
    {
      year: 2013,
      text: "JNE fokus memperbesar kapasitas dan kapabilitas infrastruktur fisik dan teknologinya untuk mengantisipasi pesatnya pertumbuhan transaksi belanja daring melalui marketplace dan dan tren gaya hidup digital di Indonesia.",
    },
    {
      year: 2000,
      text: "JNE merilis logo baru dengan brand “JNE EXPRESS”. Reputasi JNE EXPRESS mulai mencuat sebagai perusahaan ekspedisi terdepan di Indonesia di paruh kedua tahun 2000-an, seiring dengan tumbuhnya tren pemanfaatan internet untuk transaksi perdagangan dan jual beli secara daring. Sebaran Agen JNE yang mudah ditemukan di kota-kota besar dan jam operasional dengan layanan 24 jam membuat JNE populer di kalangan pelaku bisnis online.",
    },
    {
      year: 1990,
      text: "PT. Tiki Jalur Nugraha Ekakurir resmi didirikan.",
    },
  ];

  return (
    <div className="relative flex flex-col items-start border-l-2 border-gray-300 pl-6 space-y-8 max-w-[450px]">
      {/* Preview (misal hanya 2-3 item) */}
      <div className="relative space-y-8">
        {milestones.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-5 top-2 w-3 h-3 bg-gray-300 rounded-full"></div>
            <h3 className="font-bold text-lg md:text-3xl text-[#203475]">
              {item.year}
            </h3>
            <p className="text-black font-light max-w-md">{item.text}</p>
          </div>
        ))}
        <div className="pointer-events-none absolute bottom-8 left-0 w-full h-50 bg-linear-to-t from-white to-transparent"></div>
      </div>
      {/* Tombol Lihat Semua */}
      <button
        onClick={() => setShowModal(true)}
        className="border border-[#E11C22] text-[#E11C22] px-6 py-2 rounded-full hover:bg-[#E11C22] hover:text-white transition cursor-pointer"
      >
        Lihat Semua
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-2xl p-6 relative md:max-w-[600px]">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Milestone
            </h2>

            <div className="max-h-[60vh] overflow-y-auto border-l-2 border-gray-300 pl-6 pr-2 space-y-6">
              {allMilestones.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-5 top-2 w-3 h-3 bg-gray-300 rounded-full"></div>
                  <h3 className="font-bold text-lg text-[#203475]">
                    {item.year}
                  </h3>
                  <p className="text-black font-light max-w-md">{item.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-6 font-bold text-gray-500 hover:text-black cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
