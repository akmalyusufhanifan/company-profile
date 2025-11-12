import Link from "next/link";
import { CiMap, CiSearch } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function TrackingFee() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 absolute right-0 left-0 bottom-10 md:flex-row md:gap-20">
      {/* Lacak paket */}
      <Link
        href="https://www.jne.co.id/tracking-package"
        className="text-black bg-white opacity-90 hover:bg-gray-300 w-70 text-xl py-3 rounded-full flex justify-between items-center md:w-100"
      >
        <CiMap className="ml-4 text-2xl" />
        Lacak Paket
        <CiSearch className="mr-4 text-2xl" />
      </Link>

      {/* Cek harga */}
      <Link
        href="https://www.jne.co.id/shipping-fee"
        className="text-black bg-white opacity-90 hover:bg-gray-300 w-70 text-xl py-3 rounded-full flex justify-between items-center md:w-100"
      >
        <IoDocumentTextOutline className="ml-4 text-2xl" />
        Cek Ongkir
        <CiSearch className="mr-4 text-2xl" />
      </Link>
    </div>
  );
}
