import type { MetadataRoute } from "next"; import { site } from "@/config/site";
export default function sitemap():MetadataRoute.Sitemap { if(!site.url)return [];return ["","/about","/services","/why-choose-us","/contact"].map(path=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.7})); }
