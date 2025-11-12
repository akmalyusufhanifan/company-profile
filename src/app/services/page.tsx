import Link from "next/link";
import Image from "next/image";
import ExpressCarouselMobile from "../components/express-carousel-mobile";
import ExpressCarouselDesktop from "../components/express-carousel-desktop";
import LogisticCarouselMobile from "../components/logistic-carousel-mobile";
import LogisticCarouselDesktop from "../components/logistic-carousel-desktop";
import FreightCarouselMobile from "../components/freight-carousel-mobile";
import FreightCarouselDesktop from "../components/freight-carousel-desktop";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="min-h-auto pt-30 flex flex-col justify-center items-center ml-5 mr-5 text-black">
        <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between md:items-center md:w-full md:max-w-[1080px]">
          <div className="relative w-[250px] h-[210px] md:w-[300px] md:h-[280px]">
            <Image src="/motor-jne.png" alt="Animasi motor JNE Express" fill />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#203475] mt-10 md:text-6xl">
              JNE Express
            </h2>
            <h3 className="text-lg mt-4 font-light md:max-w-[450px] md:text-2xl">
              Menyediakan layanan pengiriman paket dan dokumen dalam negeri
              melalui lebih dari 8.000 titik layanan eksklusif di seluruh
              Indonesia, dari penjemputan hingga pengantaran tujuan.
            </h3>
          </div>
        </div>
        <ExpressCarouselMobile />
        <ExpressCarouselDesktop />
      </section>

      <section className="min-h-auto mt-5 flex flex-col justify-center items-center ml-5 mr-5 text-black">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:w-full md:max-w-[1080px]">
          <div className="relative w-[350px] h-[200px] md:w-[400px] md:h-[250px]">
            <Image src="/mobil-jne.png" alt="Animasi mobil JNE Express" fill />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#203475] mt-10 md:text-6xl">
              JNE Logistic
            </h2>
            <h3 className="text-lg mt-4 font-light md:max-w-[450px] md:text-2xl">
              Menawarkan solusi transportasi dan gudang terintegrasi dengan
              kemampuan layanan yang menyeluruh.
            </h3>
          </div>
        </div>
        <LogisticCarouselMobile />
        <LogisticCarouselDesktop />
      </section>

      <section className="min-h-auto mt-5 flex flex-col justify-center items-center ml-5 mr-5 text-black">
        <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between md:items-center md:w-full md:max-w-[1080px]">
          <div className="relative w-[450px] h-[200px] md:w-[550px] md:h-[250px]">
            <Image src="/truk-jne.png" alt="Animasi truk JNE Express" fill />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#203475] mt-10 md:text-6xl">
              JNE Freight
            </h2>
            <h3 className="text-lg mt-4 font-light md:max-w-[450px] md:text-2xl">
              Melayani kiriman door to door untuk memenuhi kebutuhan kiriman
              ekspor internasional Anda, mencakup lebih 220 negara.
            </h3>
          </div>
        </div>
        <FreightCarouselMobile />
        <FreightCarouselDesktop />
      </section>

      <section className="min-h-auto mt-5 flex flex-col justify-center items-center ml-5 mr-5 text-black pb-20">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:w-full md:max-w-[1080px]">
          <div className="relative w-[200px] h-[200px]">
            <Image src="/roket-indonesia.png" alt="Logo Roket Indonesia" fill />
          </div>
          <div className="w-[445px]">
            <h2 className="text-3xl font-semibold text-[#203475] mt-10 md:text-6xl">
              Roket Indonesia
            </h2>
            <h3 className="text-lg mt-4 font-light md:max-w-[450px] md:text-2xl">
              Layanan pengiriman instan dalam kota.
            </h3>
          </div>
        </div>
        <div className="flex items-start md:w-[1080px]">
          <div className="w-[450px] h-[200px] flex flex-col items-start text-black mt-10 md:mt-20">
            <div className="bg-white border-3 border-gray-100 rounded-2xl shadow-lg p-2 w-full">
              <h2 className="text-xl font-semibold">Roket Indonesia</h2>
              <p className="text-md font-light mt-2 mb-5">
                Layanan pengiriman instan dalam kota
              </p>
              <Link
                href="https://www.jne.co.id/roket-indonesia-id"
                target="_blank"
                className="text-[#E11C22] text-md"
              >
                Selengkapnya →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
