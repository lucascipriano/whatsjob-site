"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createClient } from "@/services/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const defaultMessage = "Obrigatório";

const formSchema = z.object({
  titulo: z.string().min(1, { message: defaultMessage }),
  descricao: z.string().min(1, { message: defaultMessage }),
  modalidade: z.string().min(1, { message: defaultMessage }),
  empresa: z.string().min(1, { message: defaultMessage }),
  senioridade: z.string().min(1, { message: defaultMessage }),
  link: z.string().min(1, { message: defaultMessage }),
});

interface DialogPostJobProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

type JobSchema = z.infer<typeof formSchema>;

export function DialogPostJob({ open, setOpen }: DialogPostJobProps) {
  const supabase = createClient();
  const { toast } = useToast();

  const form = useForm<JobSchema>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues: {
      titulo: "",
      descricao: "",
      modalidade: "",
      empresa: "",
      senioridade: "",
      link: "",
    },
  });

  const onSubmitJob = async (data: JobSchema) => {
    const { error } = await supabase.from("vagas_verificacao").insert({
      titulo: data.titulo,
      descricao: data.descricao,
      modalidade: data.modalidade,
      empresa: data.empresa,
      senioridade: data.senioridade,
      link: data.link,
    });

    setOpen(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Ah! Algo deu errado.",
        description: "Houve um problema ao enviar o formulário",
      });

      return;
    }

    toast({
      variant: "default",
      title: "Enviado para análise",
      description: "Enviamos o formulário para análise de um administrador.",
      className: "bg-green-600 text-white",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 text-[#5D8A83] font-medium text-lg py-2 px-4 border rounded-full border-[#5D8A83]"
        >
          <Plus width={20} height={20} />
          Postar uma Vaga
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Postar uma vaga</DialogTitle>
          <DialogDescription>
            A vaga será analisada por um administrador, e se aceita será
            postada!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitJob)} className="space-y-8">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem className="!mt-4">
                  <FormLabel>Titulo</FormLabel>
                  <FormControl>
                    <Input placeholder="Título da vaga" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem className="!mt-4">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descrição da vaga" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="modalidade"
              render={({ field }) => (
                <FormItem className="!mt-4">
                  <FormLabel>Modalidade</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Modalidade da vaga" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Modalidades</SelectLabel>
                          <SelectItem value="Presencial">Presencial</SelectItem>
                          <SelectItem value="Híbrido">Híbrido</SelectItem>
                          <SelectItem value="Remoto">Remoto</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="empresa"
              render={({ field }) => (
                <FormItem className="!mt-4">
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da empresa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="senioridade"
              render={({ field }) => (
                <FormItem className="!mt-4">
                  <FormLabel>Senioridade</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Senioridade da vaga" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Senioridades</SelectLabel>
                          <SelectItem value="Estágio">Estágio</SelectItem>
                          <SelectItem value="Júnior">Júnior</SelectItem>
                          <SelectItem value="Pleno">Pleno</SelectItem>
                          <SelectItem value="Sênior">Sênior</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem className="!mt-4">
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input placeholder="Link da vaga" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
