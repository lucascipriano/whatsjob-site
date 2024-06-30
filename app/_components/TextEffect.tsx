"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export function TextEffect({ words }: { words: string[] }) {
  return (
    <>
      <span className="bg-[#5D8A83] px-5 py-2 rounded-sm lg:inline hidden">
        <Typewriter words={words} loop />
      </span>
      <span className="bg-[#5D8A83] px-5 py-2 rounded-sm inline lg:hidden">
        Vaga
      </span>
    </>
  );
}
