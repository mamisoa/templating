// src/app/sitemap.ts
import { env } from "@/src/config/env";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = ["", "/about", "/services", "/resources", "/use-cases"].map(
		(route) => ({
			url: `${env.appUrl}${route}`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly" as const,
			priority: route === "" ? 1 : 0.8,
		})
	);

	return routes;
}
