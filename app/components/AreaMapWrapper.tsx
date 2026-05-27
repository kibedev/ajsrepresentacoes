"use client";
import dynamic from "next/dynamic";

const AreaMap = dynamic(() => import("./AreaMap"), { ssr: false });

export default function AreaMapWrapper() {
  return <AreaMap />;
}
