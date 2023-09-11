import Content from "@/components/Content";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-6">
      <div className="text-brandGreen">Homepage</div>
      <Content />
    </div>
  );
}
