import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ServicesCarousel() {
  return (
    <div className="carousel rounded-box w-[420px] h-[245px] shadow-xl md:hidden">
      {/* Service 1 */}
      <div className="carousel-item w-full">
        <figure className="relative">
          <img src="/jne-express.jpg" className="w-full" alt="JNE express" />
          <figcaption className="absolute right-0 left-0 bottom-0 text-gray-500 bg-white flex justify-between items-center px-5 py-2 text-sm">
            <Image
              src="/logo-jne.png"
              alt="JNE Express"
              width={50}
              height={50}
            />
            JNE Express
            <MdKeyboardDoubleArrowRight className="text-4xl text-black" />
          </figcaption>
        </figure>
      </div>

      {/* Service 2 */}
      <div className="carousel-item w-full">
        <figure className="relative">
          <img src="/jne-logistic.jpg" className="w-full" alt="JNE logistic" />
          <figcaption className="absolute right-0 left-0 bottom-0 text-gray-500 bg-white flex justify-between items-center px-5 py-2 text-sm">
            <Image
              src="/logo-jne-logistic.jpg"
              alt="JNE Logistic"
              width={50}
              height={50}
            />
            JNE Logistic
            <MdKeyboardDoubleArrowRight className="text-4xl text-black" />
          </figcaption>
        </figure>
      </div>

      {/* Service 3 */}
      <div className="carousel-item w-full">
        <figure className="relative">
          <img src="/jne-freight.jpg" className="w-full" alt="JNE freight" />
          <figcaption className="absolute right-0 left-0 bottom-0 text-gray-500 bg-white flex justify-between items-center px-5 py-2 text-sm">
            <Image
              src="/logo-jne-freight.jpg"
              alt="JNE Freight"
              width={50}
              height={50}
            />
            JNE Freight
            <MdKeyboardDoubleArrowRight className="text-4xl text-black" />
          </figcaption>
        </figure>
      </div>

      {/* Service 4 */}
      <div className="carousel-item w-[420px] h-[245px]">
        <figure className="relative">
          <img
            src="/roket-indonesia.png"
            className="w-[420px] h-[245px]"
            alt="Roket Indonesia"
          />
          <figcaption className="absolute right-0 left-0 bottom-0 text-gray-500 bg-white flex justify-between items-center px-5 py-2 text-sm">
            <Image
              src="/roket-indonesia.png"
              alt="Roket Indonesia"
              width={40}
              height={40}
            />
            Roket Indonesia
            <MdKeyboardDoubleArrowRight className="text-4xl text-black" />
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
