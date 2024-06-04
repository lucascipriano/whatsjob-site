import { Logo } from "@/components/Logo";
import { Link, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full h-24 flex items-center bg-[#1d3531]">
      <div className="w-full max-w-[1440px] mx-auto px-3 flex items-center justify-between">
        <Logo />
        <Link
          href={"/"}
          className="flex items-center gap-2 text-[#5D8A83] font-medium text-lg py-2 px-4 border rounded-full border-[#5D8A83]"
        >
          <Mail />
          edu.amr@hotmail.com
        </Link>
      </div>
    </footer>
  );
}
