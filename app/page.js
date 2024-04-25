import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen px-4">
      <div className="flex items-center justify-center w-full mx-auto ml-10">
        <Image
          src="/aazR.png"
          height={1000}
          width={500}
          alt="2776 mascot Aaz"
          className=""
        />
      </div>
      <p className="mt-10 text-2xl text-center text-white">
        Hello and Welcome to
        <br />
        <span className="mt-4 text-center text-blue-300 text-7xl">
          2776, LLC
        </span>
      </p>
    </main>
  );
}
