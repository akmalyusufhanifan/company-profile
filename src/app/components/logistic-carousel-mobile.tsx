import Link from "next/link";

export default function LogisticCarouselMobile() {
  return (
    <div className="carousel rounded-box w-[450px] h-[300px] mt-10 gap-x-5 md:hidden">
      {/* Express 1 */}
      <div className="carousel-item w-full flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">
            Warehouse and Fulfillment Service
          </h2>
          <p className="text-md font-light mt-2 mb-5">
            Mengatur dan memonitor stok keluar masuk barang dengan didukung
            Warehouse Management System (WMS)
          </p>
          <Link
            href="https://www.jne.co.id/warehouse-and-fulfillment-service"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Express 2 */}
      <div className="carousel-item w-full flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">Distribution Service</h2>
          <p className="text-md font-light mt-2 mb-5">
            Melayani pengiriman barang dalam satu armada penuh maupun pindahan
            rumah, gedung, dan apartemen
          </p>
          <Link
            href="https://www.jne.co.id/distribution-service"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>
    </div>
  );
}
