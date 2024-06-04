/* eslint-disable @next/next/no-img-element */
import { companiesLogos } from "@/utils/companiesLogos";
import { CardJob } from "../CardJob";
import { JobPosition } from "@/app/page";

export function JobsListSection({ jobs }: { jobs: JobPosition[] }) {
  return (
    <section className="relative bg-cover pt-52 bg-white">
      <div className="w-full flex justify-center items-center mt-[-700px]">
        <img
          src={"/images/qr-code-2.png"}
          width={380}
          height={1000}
          alt="Imagem telefone mock"
        />
      </div>
      <ul className="mt-28 logos max-[680px]:before:bg-transparent max-[680px]:after:bg-transparent">
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
          <h3 className="text-black font-semibold text-7xl mb-6 text-center flex-2">
            Vagas da semana!
          </h3>
          <hr className="flex-1 border-[#1d3531] border-2" />
        </div>
        <div className="w-full grid grid-cols-3 gap-10 mt-10 py-10 mb-20">
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
