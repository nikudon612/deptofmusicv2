import Image from "next/image";

export default function FeaturedContent() {
  return (
    <div className="w-screen h-screen">
      <div className="h-full flex flex-row items-center justify-center">
        <div className="w-1/2 h-full flex items-center justify-center object-cover">
          <Image
            src={"/Nationwide.png"}
            width={500}
            height={500}
            alt="featured content"
          />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          Right
        </div>
      </div>
    </div>
  );
}
