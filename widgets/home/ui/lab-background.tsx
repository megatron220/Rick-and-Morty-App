"use client";

import { Parallax } from "react-parallax";
import Image from "next/image";
import img from "@/public/lab-back.jpg";

export function LabBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Parallax strength={300}>
        <div className="absolute inset-0 w-full h-screen">
          <Image
            src=""
            alt="Rick's Lab"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw" // ← ВОТ ЭТО!
            className="object-cover"
            priority
            quality={85}
          />
        </div>
      </Parallax>

      {/* Неоновая подсветка */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
    </div>
  );
}
