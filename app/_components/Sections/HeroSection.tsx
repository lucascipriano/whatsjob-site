/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TextEffect } from "../TextEffect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="border-t pt-16 w-full bg-[url('/images/bg-hero.svg')] border-t-[#5D8A83] bg-[#1d3531] bg-hero bg-no-repeat bg-center ">
      <div className="max-w-[1440px] m-auto px-3 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="mb-6 text-[#5D8A83] text-2xl font-medium text-center">
            Vagas de TI direto no seu WhatsApp!
          </h1>
          <h2 className="text-white font-semibold text-7xl mb-6 mt-6 text-center">
            Econtre sua{" "}
            <TextEffect words={["chance", "função", "carreira", "vaga"]} />{" "}
            ainda hoje!
          </h2>
          <Link href={"/"} className="mt-6">
            <Button className="px-5 py-7 leading-[55px] rounded-full bg-[#CCEC60] font-bold text-[#1d3531] text-lg">
              Se inscreva!
            </Button>
          </Link>
        </div>
        <div className="relativew-full max-w-[957px] mx-auto flex items-start justify-between mt-36 h-[400px] p-20 overflow-hidden">
          <img
            src={"/images/cell.svg"}
            width={400}
            height={1000}
            className="rotate-[-12deg]"
            alt="Imagem telefone mock"
          />
          <img
            src={"/images/cell.svg"}
            width={400}
            height={1000}
            className="rotate-[12deg]"
            alt="Imagem telefone mock"
          />
        </div>
      </div>
    </section>
  );
}
