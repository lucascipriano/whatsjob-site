/* eslint-disable @next/next/no-img-element */
import { companiesLogos } from "@/utils/companiesLogos";
import { CardJob } from "../CardJob";
import { JobPosition } from "@/app/page";

export function JobsListSection({ jobs }: { jobs: JobPosition[] }) {
  return (
    <section className="xl:pt-52 relative bg-cover pt-0 bg-white">
      <div className="xl:flex w-full hidden justify-center items-center mt-[-700px]">
        <img
          src={"/images/qr-code-2.png"}
          width={380}
          height={1000}
          alt="Imagem telefone mock"
        />
      </div>
      <ul className="xl:mt-28 mt-10 logos max-[680px]:before:bg-transparent max-[680px]:after:bg-transparent">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <li key={item} className="logos-slide animate-slide-to-right">
            {companiesLogos.map(({ path }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={path}
                src={"/images/logos/" + path}
                alt="Logo empresa"
                className="skill grayscale"
              />
            ))}
          </li>
        ))}
      </ul>
      <div className="relative max-w-[1440px] m-auto px-3 mt-28">
        <div className="flex items-center gap-10">
          <hr className="flex-1 border-[#1d3531] border-2" />
          <h3 className="lg:text-7xl sm:text-5xl text-3xl text-black font-semibold mb-6 text-center flex-2">
            Vagas da semana!
          </h3>
          <hr className="flex-1 border-[#1d3531] border-2" />
        </div>
        <div className="xl:grid-cols-2 xl:mt-10 w-full grid grid-cols-1 gap-10 py-10 mb-20">
          {jobs?.map(
            ({
              id,
              descricao,
              modalidade,
              empresa,
              senioridade,
              link,
              titulo,
            }) => (
              <CardJob
                key={id}
                descricao={descricao}
                modalidade={modalidade}
                empresa={empresa}
                senioridade={senioridade}
                link={link}
                titulo={titulo}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
