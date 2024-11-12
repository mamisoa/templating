// src/config/env.ts

export const env = {
	appName: process.env.NEXT_PUBLIC_APP_NAME as string,
	appUrl: process.env.NEXT_PUBLIC_APP_URL as string,
	isDev: process.env.NODE_ENV === "development",
	isProd: process.env.NODE_ENV === "production",
};
