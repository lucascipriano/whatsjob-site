import { BotMessageSquare } from "lucide-react";

export function Logo() {
  return (
    <div className="flex gap-2 text-white text-xl items-center justify-center font-semibold">
      <div className="p-2 bg-[#CCEC60]/10 rounded-full border-[#82959229] border">
        <BotMessageSquare
          className="text-[#CCEC60]"
          size={32}
          strokeWidth={1.8}
        />
      </div>
      WhatsJob
    </div>
  );
}
