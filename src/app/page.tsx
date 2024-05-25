import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly items-center h-full">
      <Image src="/assets/welcome.svg" alt="Welcome" width={270} height={309} sizes="100vw" />
      <section className="text-center">
        <h1 className="text-primary">Selamat Datang</h1>
        <p className="mb-4">Halo, aku bisa membantu proses pembuangan sampah di rumahmu</p>
        <button className="btn-primary">Lanjut</button>
      </section>
    </div>
  );
}
