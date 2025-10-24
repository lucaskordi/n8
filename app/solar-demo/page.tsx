"use client";

import React from "react";
import { SolarAnimation } from "@/components/solar-animation";

export default function SolarDemoPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] min-h-screen">
      <div className="bg-[#4A1526] flex items-center justify-center p-8 min-h-[30vh] lg:min-h-screen">
        <h1 className="text-white text-3xl font-serif tracking-wider rotate-90">
          VERUS
        </h1>
      </div>
      <div className="flex justify-center items-center min-h-[70vh] lg:min-h-screen bg-[url('/map.jpg')] bg-cover bg-center relative">
        <SolarAnimation />
      </div>
    </div>
  );
}
