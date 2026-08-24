import type { MetadataRoute } from "next";
import { allRooms } from "@/lib/data";

const baseUrl = "https://zirvekizogrenciyurdu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/odalarimiz",
    "/galeri",
    "/iletisim",
  ];

  const roomRoutes = allRooms.map((room) => `/odalarimiz/${room.slug}`);

  return [...staticRoutes, ...roomRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
