import { type JobPosition } from "../page";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import {
  BriefcaseBusiness,
  Building2,
  MapPin,
  MoveUpRight,
} from "lucide-react";

export function CardJob({
  descricao,
  modalidade,
  empresa,
  senioridade,
  link,
  titulo,
}: Omit<JobPosition, "id">) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group rounded-xl shadow-lg border border-black border-b-[5px] bg-[#F3F3F3] transition-all hover:translate-y-[-7px]"
    >
      <Card className="w-full bg-white border-none h-[226px] rounded-xl">
        <CardHeader>
          <CardTitle className="flex items-center text-black justify-between">
            <div className="line-clamp-1 text-3xl mb-2 bg-[#CCEC60] w-fit px-2 rounded-sm">
              {titulo}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-all bg-black p-1 rounded-lg">
              <MoveUpRight
                width={22}
                strokeWidth={3}
                className="opacity-0 group-hover:opacity-100 transition-all text-[#CCEC60] "
              />
            </div>
          </CardTitle>
          <CardDescription className="text-zinc-700 line-clamp-3 text-base">
            {descricao}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3 flex-wrap">
          <span className="border-black border rounded-sm px-2 py-1 text-black/80 flex gap-2 items-center w-fit font-medium justify-center">
            {empresa && (
              <>
                <Building2 className="text-black" />
                {empresa}
              </>
            )}
          </span>
          <span className="border-black border rounded-sm px-2 py-1 text-black/80 flex gap-2 items-center w-fit font-medium justify-center">
            {senioridade && (
              <>
                <BriefcaseBusiness className="text-black" />
                {senioridade}
              </>
            )}
          </span>
          <span className="border-black border rounded-sm px-2 py-1 text-black/80 flex gap-2 items-center w-fit font-medium justify-center">
            {modalidade && (
              <>
                <MapPin className="text-black" />
                {modalidade}
              </>
            )}
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
