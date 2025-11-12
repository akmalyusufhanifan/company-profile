import Link from "next/link";

export default function FreightCarouselMobile() {
  return (
    <div className="carousel rounded-box w-[450px] h-[300px] mt-10 gap-x-5 md:hidden">
      {/* Express 1 */}
      <div className="carousel-item w-full flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">Customs Service</h2>
          <p className="text-md font-light mt-2 mb-5">
            Layanan Jasa Kepabeanan untuk pengiriman anda dengan memastikan
            proses bea cukai yang mudah dan aman, baik jasa kepabeanan impor
            ataupun ekspor
          </p>
          <Link
            href="https://www.jne.co.id/customs-service-id"
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
          <h2 className="text-xl font-semibold">Air Freight</h2>
          <p className="text-md font-light mt-2 mb-5">
            Pihak kami bekerja sama dengan semua operator penerbangan yang
            beroperasi ke semua rute yang ada di dunia
          </p>
          <Link
            href="https://www.jne.co.id/air-freight-id"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Express 3 */}
      <div className="carousel-item w-full flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">Ocean Freight</h2>
          <p className="text-md font-light mt-2 mb-5">
            Dengan layanan produk kami yang komprehensif untuk kebutuhan export
            / import kargo anda tiba di tampat yang tepat dan dengan cara yang
            hemat biaya
          </p>
          <Link
            href="https://www.jne.co.id/ocean-freight-id"
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
