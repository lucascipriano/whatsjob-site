import { Logo } from "@/components/Logo";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full h-24 flex items-center bg-[#1d3531]">
      <div className="w-full max-w-[1440px] mx-auto px-3 flex items-center justify-between">
        <Logo />
        <Link
          href={"mailto:edu.amr@hotmail.com"}
          className="flex items-center gap-2 text-[#5D8A83] font-medium text-lg py-2 px-4 border rounded-full border-[#5D8A83]"
        >
          <Mail />
          edu.amr@hotmail.com
        </Link>
      </div>
    </footer>
  );
}
