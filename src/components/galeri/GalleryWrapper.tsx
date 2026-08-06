"use client";

import { useState } from "react";
import FilterTabs from "@/components/galeri/FilterTabs";
import GalleryGrid from "@/components/galeri/GalleryGrid";

export default function GalleryWrapper() {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  return (
    <>
      <FilterTabs active={activeFilter} onChange={setActiveFilter} />
      <GalleryGrid activeFilter={activeFilter} />
    </>
  );
}