import Content from "@/components/Content";
import FeaturedContent from "@/components/FeaturedContent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <FeaturedContent />
      <Content />
    </div>
  );
}
