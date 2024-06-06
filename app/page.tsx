import { HeroSection } from "./_components/Sections/HeroSection";
import { createClient } from "@/services/supabase/server";
import { JobsListSection } from "./_components/Sections/JobsListSection";
import { Fragment } from "react";

export interface JobPosition {
  id: number;
  titulo: string;
  empresa?: string;
  senioridade?: string;
  modalidade?: string;
  descricao: string;
  link: string;
}

export default async function Page() {
  const supabase = createClient();
  const { data: jobs } = await supabase.from("vagas").select("*");
  console.log();
  return (
    <Fragment>
      <HeroSection />
      <JobsListSection jobs={jobs as JobPosition[]} />
    </Fragment>
  );
}
