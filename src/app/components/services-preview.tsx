import Link from "next/link";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ServicesPreview() {
  return (
    <div className="hidden md:block">
      <div className="relative grid grid-cols-2 grid-rows-2 gap-x-60 gap-y-40">
        {/* Gambar */}
        <figure className="relative hover:scale-105 transform transition-transform duration-300 ease-in-out z-10">
          <Link href="/services" className="w-[480px] h-[280px]">
            <Image
              src="/jne-express.jpg"
              alt="JNE Espress logo"
              fill
              className="rounded-3xl shadow-xl"
            />

            <figcaption className="absolute right-0 left-0 bottom-0 text-gray-500 bg-white flex justify-between items-center px-5 py-2 text-sm rounded-b-3xl">
              <Image
                src="/logo-jne.png"
                alt="JNE Express"
                width={50}
                height={50}
              />
              JNE Express
              <MdKeyboardDoubleArrowRight className="text-4xl text-black" />
            </figcaption>
          </Link>
        </figure>

        <figure className="relative hover:scale-105 transform transition-transform duration-300 ease-in-out z-10">
          <Link href="/services" className="w-[480px] h-[280px]">
            <Image
              src="/jne-logistic.jpg"
              alt="JNE Logistic logo"
              fill
              className="rounded-3xl shadow-xl"
            />

            <figcaption className="absolute right-0 left-0 bottom-0 text-gray-500 bg-white flex justify-between items-center px-5 py-2 text-sm rounded-b-3xl">
              <Image
                src="/logo-jne-logistic.jpg"
                alt="JNE Logistic"
                width={50}
                height={50}
              />
              JNE Logistic
              <MdKeyboardDoubleArrowRight className="text-4xl text-black" />
            </figcaption>
          </Link>
        </figure>

        <figure className="relative hover:scale-105 transform transition-transform duration-300 ease-in-out z-10">
          <Link href="/services" className="w-[480px] h-[280px]">
            <Image
              src="/jne-freight.jpg"
              alt="JNE Freight logo"
              fill
              className="rounded-3xl shadow-xl"
            />

            <figcaption className="absolute right-0 left-0 bottom-0 text-gray-500 bg-white flex justify-between items-center px-5 py-2 text-sm rounded-b-3xl">
              <Image
                src="/logo-jne-freight.jpg"
                alt="JNE Freight"
                width={50}
                height={50}
              />
              JNE Freight
              <MdKeyboardDoubleArrowRight className="text-4xl text-black" />
            </figcaption>
          </Link>
        </figure>

        <figure className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300 ease-in-out z-10">
          <Link href="/services" className="relative w-[480px] h-[280px]">
            <Image
              src="/roket-indonesia.png"
              alt="Roket Indonesia logo"
              fill
              className="object-contain bg-white rounded-3xl shadow-lg"
            />

            <figcaption className="absolute right-0 left-0 bottom-0 text-gray-500 bg-white flex justify-between items-center px-5 py-2 text-sm rounded-b-3xl">
              <Image
                src="/roket-indonesia.png"
                alt="Roket Indonesia"
                width={40}
                height={40}
              />
              Roket Indonesia
              <MdKeyboardDoubleArrowRight className="text-4xl text-black" />
            </figcaption>
          </Link>
        </figure>

        {/* Garis */}
        <div className="absolute top-[140px] left-[480px] w-60 border-t-2 border-dashed border-gray-400" />
        <div className="absolute top-[570px] left-[480px] w-60 border-t-2 border-dashed border-gray-400" />
        <div className="absolute top-[280px] left-60 h-40 border-l-2 border-dashed border-gray-400" />
        <div className="absolute top-[280px] left-[960px] h-40 border-l-2 border-dashed border-gray-400" />
      </div>
    </div>
  );
}
