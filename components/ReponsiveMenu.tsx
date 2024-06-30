import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface DialogPostJobProps {
  openNewJobsForm: boolean;
  setOpenNewJobsForm: (open: boolean) => void;
  setOpenDonation: (open: boolean) => void;
  openDonation: boolean
}

import { BadgeDollarSign, Github, Menu, Plus } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

export function ResponsiveMenu({
  openNewJobsForm,
  setOpenNewJobsForm,
  openDonation,
  setOpenDonation
}: DialogPostJobProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className="bg-[#1d3531]">
        <Button
          variant={"outline"}
          className="bg-transparent border-white border"
        >
          <Menu className="text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="!max-w-60 bg-[#1d3531]">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <Link href={""}>
            <Button
              variant={"secondary"}
              className="text-black flex items-center gap-2 w-full"
              onClick={() => setOpenDonation(true)}
            >
              <BadgeDollarSign width={20} height={20} /> Fazer uma doação
            </Button>
          </Link>
          <Link href={""}>
            <Button
              variant={"secondary"}
              className="text-black flex items-center gap-2 w-full"
            >
              <Github width={20} height={20} /> GitHub
            </Button>
          </Link>
          <Link href={""} className="w-full">
            <Button
              onClick={() => {
                setOpenNewJobsForm(true);
              }}
              variant={"secondary"}
              className="text-black flex items-center gap-2 w-full"
            >
              <Plus width={20} height={20} /> Postar uma Vaga
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
