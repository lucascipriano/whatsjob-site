"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export function TextEffect({ words }: { words: string[] }) {
  return (
    <span className="bg-[#5D8A83] px-5 py-2 rounded-sm">
      <Typewriter words={words} loop />
    </span>
  );
}
