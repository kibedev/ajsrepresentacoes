"use client";
import dynamic from "next/dynamic";

const AreaMap = dynamic(() => import("./AreaMap"), { ssr: false });

export default function AreaMapWrapper() {
  return (
    <div style={{ overflow: "hidden", position: "relative", width: "100%", borderRadius: "16px" }}>
      <AreaMap />
    </div>
  );
}
