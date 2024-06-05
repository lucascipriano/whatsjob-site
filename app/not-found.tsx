import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full gap-12 justify-center items-center">
      <Image
        alt="Imagem 404 de conteúdo não achado"
        width={600}
        height={200}
        priority
        src={"/images/404.svg"}
      />
      <div className="max-w-96 flex flex-col">
        <h2 className="text-tremor-brand-emphasis text-7xl font-light mb-3">
          404
        </h2>
        <h1 className="text-2xl text-black font-extralight mb-3">
          Página não encontrada
        </h1>
        <p className="text-black mb-3">
          A página que você procura não existe. Você pode clicar no botão abaixo
          para voltar à página inicial.
        </p>
        <Link href={"/"}>
          <Button variant={"default"} className="mt-2">
            Voltar para o Início
          </Button>
        </Link>
      </div>
    </div>
  );
}
