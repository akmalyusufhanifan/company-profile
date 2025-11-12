import Image from "next/image";
import { SlEarphonesAlt } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-auto pt-30 pb-20 flex flex-col justify-between items-center bg-white px-5 gap-y-15 md:flex-row-reverse md:px-40">
      <div className="relative w-[100px] h-[200px] md:w-[300px] md:h-[500px]">
        <Image src="/monas.svg" alt="Animasi Monas" fill />
      </div>
      <div className="flex flex-col justify-center items-start gap-y-10">
        <div className="flex flex-col items-start gap-y-2">
          <h2 className="text-[#203475] text-2xl font-semibold md:text-5xl">
            Hubungi Kami
          </h2>
          <h3 className="text-md text-black font-light md:text-xl md:max-w-[600px]">
            Jangan ragu untuk menghubungi kami dan temukan solusi terbaik untuk
            kebutuhan pengiriman Anda.
          </h3>
        </div>

        <div className="flex flex-col items-start gap-y-2">
          <h2 className="text-[#203475] text-lg font-semibold md:text-2xl">
            Kantor Pusat & Logistik
          </h2>
          <h3 className="text-md text-black font-light md:text-xl">
            Jl. Tomang Raya No.11 Jakarta Barat 11440 Indonesia
          </h3>
          <div className="text-md text-black font-light flex justify-between items-center gap-x-2 md:text-xl">
            <SlEarphonesAlt />
            <h4>021 - 2927 - 8888</h4>
          </div>
          <div className="text-md text-black font-light flex justify-between items-center gap-x-2 md:text-xl">
            <FaPhoneAlt />
            <h4>6221 - 566 - 5262</h4>
          </div>
          <div className="text-md text-black font-light flex justify-between items-center gap-x-2 md:text-xl">
            <FaFax />
            <h4>6221 - 567 - 1413</h4>
          </div>
          <div className="text-md text-black font-light flex justify-between items-center gap-x-2 md:text-xl">
            <CiMail />
            <h4>customercare@jne.co.id</h4>
          </div>
        </div>
      </div>
    </main>
  );
}
