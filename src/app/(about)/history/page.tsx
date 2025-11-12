import MilestonePreview from "@/app/components/milestone";
import Image from "next/image";

export default function HistoryCompany() {
  return (
    <main className="bg-white">
      <section className="min-h-auto pt-30 flex flex-col justify-center items-center text-black">
        <h1 className="text-3xl font-semibold text-[#203475] md:text-5xl">
          Profil Perusahaan
        </h1>
        <p className="text-center text-lg font-light mt-5 max-w-[450px] md:text-2xl md:max-w-full md:ml-30 md:mr-30 md:mt-10">
          PT. Tiki Jalur Nugraha Ekakurir atau biasa dikenal sebagai JNE
          merupakan salah satu perusahaan ekspedisi barang terbesar di
          Indonesia, berkat jaringan dan jangkauan area distribusinya yang
          mencakup lebih dari 83.000 titik tujuan termasuk kabupaten, desa, dan
          pulau terluar, dengan gerai penjualan berjumlah lebih dari 8.000 titik
          dan mempekerjakan lebih dari 50.000 karyawan di seluruh Indonesia.
        </p>
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="relative w-[257px] h-[220px] md:w-[322px] md:h-[276px] animate-motor">
            <Image
              src="/motor-jne.png"
              alt="Animasi motor JNE"
              fill
              className="mt-20"
            />
          </div>
        </div>
      </section>

      <section className="min-h-auto mt-20 flex flex-col justify-center items-center text-black md:mt-30">
        <h2 className="text-3xl font-semibold text-[#203475] md:text-5xl">
          Visi & Misi
        </h2>
        <div className="flex flex-col justify-center items-start gap-y-8 ml-5 mr-5 mt-8 md:gap-y-15">
          <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between md:items-center">
            <h3 className="text-3xl font-semibold text-[#203475] md:text-4xl">
              Visi
            </h3>
            <h4 className="text-xl font-light mt-2 md:max-w-[500px] md:text-2xl">
              Menjadi Perusahaan Logistik Terdepan di Negeri Sendiri yang
              Berdaya Saing Global
            </h4>
          </div>
          <hr className="border-t-2 border-gray-400 w-full my-2 md:w-[900px]" />
          <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between md:items-center">
            <h3 className="text-3xl font-semibold text-[#203475] md:text-4xl">
              Misi
            </h3>
            <h4 className="text-xl font-light mt-2 md:max-w-[500px] md:text-2xl">
              Untuk Memberi Pengalaman Terbaik Kepada Pelanggan Secara Konsisten
            </h4>
          </div>
        </div>
      </section>

      <section className="min-h-auto mt-30 flex flex-col justify-center items-start text-black ml-5 mr-5 md:mt-40 md:flex-row md:justify-between md:items-center md:px-30">
        <div>
          <h2 className="text-3xl font-semibold text-[#203475] md:text-5xl">
            Sejarah & Milestone
          </h2>
          <p className="text-lg font-light mt-5 md:max-w-[450px] md:text-xl">
            Berdiri pada tanggal 26 November tahun 1990, PT Tiki Jalur Nugraha
            Ekakurir atau JNE memulai kegiatan usahanya yang terpusat pada
            penanganan kegiatan kepabeanan/impor kiriman barang/dokumen serta
            pengantarannya dari luar negeri ke Indonesia.
          </p>
        </div>
        <div className="mt-10">
          <MilestonePreview />
        </div>
      </section>

      <section className="min-h-auto mt-20 flex flex-col justify-center items-center ml-5 mr-5 text-black pb-30">
        <h2 className="text-3xl font-semibold text-[#203475] md:text-5xl">
          Nilai Perusahaan
        </h2>
        <div className="flex flex-col justify-center items-center ml-5 mr-5 md:flex-row md:justify-between md:items-center md:w-full md:px-30">
          <div className="flex flex-col justify-center items-center mt-5 bg-white w-[400px] h-[300px] rounded-2xl p-2 shadow-xl md:w-[250px] md:h-[400px]">
            <Image src="/jujur.png" alt="Logo jujur" width={80} height={80} />
            <h3 className="text-2xl mt-2 font-semibold">Jujur</h3>
            <h4 className="text-md text-center mt-2 font-light">
              Melaksanakan tugas sesuai dengan panduan dan prosedur, dapat
              dipercaya, berintegritas tinggi, serta sesuai dengan norma dan
              aturan yang berlaku.
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 bg-white w-[400px] h-[300px] rounded-2xl p-2 shadow-xl md:w-[250px] md:h-[400px]">
            <Image
              src="/disiplin.png"
              alt="Logo disiplin"
              width={80}
              height={80}
            />
            <h3 className="text-2xl mt-2 font-semibold">Disiplin</h3>
            <h4 className="text-md text-center mt-2 font-light">
              Memiliki komitmen dan kegigihan dalam memenuhi pencapaian target
              kinerja dan taat terhadap aturan yang berlaku.
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 bg-white w-[400px] h-[300px] rounded-2xl p-2 shadow-xl md:w-[250px] md:h-[400px]">
            <Image
              src="/tanggung-jawab.png"
              alt="Logo jujur"
              width={80}
              height={80}
            />
            <h3 className="text-2xl mt-2 font-semibold">Tanggung Jawab</h3>
            <h4 className="text-md text-center mt-2 font-light">
              Mengerjakan tugas sesuai deskripsi, kewenangan, dan target yang
              diberikan dengan tepat waktu dan menggunakan semua sumber daya
              yang ada secara efisien.
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 bg-white w-[400px] h-[300px] rounded-2xl p-2 shadow-xl md:w-[250px] md:h-[400px]">
            <Image
              src="/visioner.png"
              alt="Logo jujur"
              width={80}
              height={80}
            />
            <h3 className="text-2xl mt-2 font-semibold">Visioner</h3>
            <h4 className="text-md text-center mt-2 font-light">
              Cepat menyesuaikan diri dengan perubahan (adaptif), berpikir
              kreatif, proaktif melakukan inovasi, perbaikan-perbaikan, serta
              mampu melihat peluang dan resiko tujuan-tujuan besar di masa
              depan.
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}
