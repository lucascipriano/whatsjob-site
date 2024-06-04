import React from "react";
import { BadgeDollarSign, Github } from "lucide-react";
import { DialogPostJob } from "./DialogPostJob";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full h-24 flex items-center bg-[#1d3531]">
      <nav className="w-full max-w-[1440px] mx-auto px-3 flex items-center justify-between">
        <Logo />
        <div className="flex gap-3">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-[#5D8A83] font-medium text-lg py-2 px-4 border rounded-full border-[#5D8A83]"
          >
            <Github width={20} height={20} />
            GitHub
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-2 text-[#5D8A83] font-medium text-lg py-2 px-4 border rounded-full border-[#5D8A83]"
          >
            <BadgeDollarSign width={20} height={20} />
            Fazer uma Doação
          </Link>
          <DialogPostJob />
        </div>
      </nav>
    </header>
  );
}
