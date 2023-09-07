import Image from "next/image";

export default function Featured() {
  return (
    <div className="bg-zinc-800 text-white">
      <div className="grid grid-cols-2 gap-4">
        <div className="max-w-6xl mx-4 py-[50px]">
          <h1 className="margin-0 font-normal text-3xl">Pro anywhere</h1>
          <p className="text-zinc-400 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut porro
            eveniet exercitationem et iure. Numquam natus unde et, totam, sit
            dolorum sed porro quibusdam, perferendis nemo vel? Libero, voluptate
            ipsum.
          </p>
        </div>

        <Image
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6Z1790h9SBBQPrdPuNOhiAHaE8%26pid%3DApi&f=1&ipt=cf052668609ec5dab21b109d11202ee6d213f2b92189b0d469e5422d6a257fa7&ipo=images"
          }
          alt="Product image"
          width={300}
          height={300}
          className="my-2"
        />
      </div>
    </div>
  );
}
