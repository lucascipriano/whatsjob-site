"use client";

import { useState } from "react";
import { BadgeDollarSign, Github } from "lucide-react";
import { DialogPostJob } from "./DialogPostJob";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { ResponsiveMenu } from "@/components/ReponsiveMenu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Header() {
  const [openNewJobsForm, setOpenNewJobsForm] = useState(false);
  const [openDonation, setOpenDonation] = useState(false);

  return (
    <>
      <header className="lg:flex hidden w-full h-24 items-center bg-[#1d3531]">
        <nav className="w-full max-w-[1440px] mx-auto px-3 flex items-center justify-between">
          <Logo />
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={
                "https://github.com/edu-amr/whatsjob-site?tab=readme-ov-file"
              }
              className="flex items-center gap-2 text-[#5D8A83] font-medium text-lg py-2 px-4 border rounded-full border-[#5D8A83]"
            >
              <Github width={20} height={20} />
              GitHub
            </Link>

            <Dialog onOpenChange={setOpenDonation} open={openDonation}>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 text-[#5D8A83] font-medium text-lg py-2 px-4 border rounded-full border-[#5D8A83]">
                  <BadgeDollarSign width={20} height={20} />
                  Fazer uma Doação
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Faça uma doação</DialogTitle>
                  <DialogDescription>
                    Você pode fazer uma doação, ajudando a sustentar o projeto e
                    seus custos de hospedagem do bot, o meio que utilizamos é o
                    pix, pelo e-mail: <span className="text-base text-primary">eduardo.amaro164@gmail.com</span>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <DialogPostJob
              open={openNewJobsForm}
              setOpen={setOpenNewJobsForm}
            />
          </div>
        </nav>
      </header>
      <div className="lg:hidden flex bg-[#1d3531] p-4 items-center justify-between">
        <ResponsiveMenu
          openNewJobsForm={openNewJobsForm}
          setOpenNewJobsForm={setOpenNewJobsForm}
          openDonation={openDonation}
          setOpenDonation={setOpenDonation}
        />
        <Logo />
      </div>
    </>
  );
}
