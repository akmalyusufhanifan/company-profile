import Link from "next/link";

export default function ExpressCarouselDesktop() {
  return (
    <div className="hidden md:flex carousel carousel-center rounded-box w-[1080px] h-[300px] mt-20 gap-x-5">
      {/* Express 1 */}
      <div className="carousel-item w-[450px] flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">Syarat dan Ketentuan</h2>
          <p className="text-md font-light mt-2 mb-5">
            Dengan menyerahkan dokumen dan/atau barang untuk dikirim oleh JNE,
            Pengirim dianggap telah menerima dan menyetujui seluruh Syarat
            Standar Pengiriman JNE
          </p>
          <Link
            href="https://www.jne.co.id/syarat-dan-ketentuan"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Express 2 */}
      <div className="carousel-item w-[450px] flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">REGULAR</h2>
          <p className="text-md font-light mt-2 mb-5">
            Layanan pengiriman ke seluruh wilayah Indonesia, dengan waktu
            penyampaian sesuai estimasi waktu pengantaran yang telah diberikan
          </p>
          <Link
            href="https://www.jne.co.id/regular"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Express 3 */}
      <div className="carousel-item w-[450px] flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">YES</h2>
          <p className="text-md font-light mt-2 mb-17">
            Pengiriman dengan waktu penyampaian di tujuan esok hari
          </p>
          <Link
            href="https://www.jne.co.id/yes"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Express 4 */}
      <div className="carousel-item w-[450px] flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">Super Speed</h2>
          <p className="text-md font-light mt-2 mb-5">
            Layanan pengiriman dengan mengutamakan kecepatan dan penyampaiannya
            sesuai dengan waktu yang telah ditentukan/disepakati
          </p>
          <Link
            href="https://www.jne.co.id/super-speed-id"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Express 5 */}
      <div className="carousel-item w-[450px] flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">Diplomat</h2>
          <p className="text-md font-light mt-2 mb-5">
            Layanan pengiriman yang dibawa langsung oleh petugas JNE (hand
            carry) dengan mengutamakan kepastian, keamanan dan kecepatan kiriman
          </p>
          <Link
            href="https://www.jne.co.id/diplomat-id"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Express 6 */}
      <div className="carousel-item w-[450px] flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2 w-full">
          <h2 className="text-xl font-semibold">International Express</h2>
          <p className="text-md font-light mt-2 mb-17">
            Layanan pengiriman dengan tujuan ke luar negeri
          </p>
          <Link
            href="https://www.jne.co.id/international-express-id"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Express 7 */}
      <div className="carousel-item w-[450px] flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">JTR</h2>
          <p className="text-md font-light mt-2 mb-5">
            JTR adalah solusi pengirim andalan jumlah besar dengan menggunakan
            moda transportasi darat (truk) dan laut antar kota/wilayah dengan
            tarif yang lebih ekonomis
          </p>
          <Link
            href="https://www.jne.co.id/jtr-indonesia"
            target="_blank"
            className="text-[#E11C22] text-md"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Express 8 */}
      <div className="carousel-item w-[450px] flex flex-col items-start text-black">
        <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2">
          <h2 className="text-xl font-semibold">Jesika</h2>
          <p className="text-md font-light mt-2 mb-11">
            Layanan penjemputan ASI dari tempat aktivitas hingga pengantaran ke
            tempat tujuan
          </p>
          <Link
            href="https://www.jne.co.id/jesika-id"
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
