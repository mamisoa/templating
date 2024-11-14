import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/src/app/components/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { env } from "@/src/config/env";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	metadataBase: new URL(env.appUrl),
	title: {
		default: env.appName,
		template: `%s | ${env.appName}`,
	},
	description: "AI-Powered Lean Startup Validation Platform",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: env.appUrl,
		siteName: env.appName,
		images: [
			{
				url: `${env.appUrl}/og-image.png`,
				width: 1200,
				height: 630,
				alt: env.appName,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: env.appName,
		description: "AI-Powered Lean Startup Validation Platform",
		images: [`${env.appUrl}/og-image.png`],
	},
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full bg-background`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					disableTransitionOnChange>
					{children}
					<ToastContainer
						position='top-right'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='dark'
					/>
				</ThemeProvider>
			</body>
		</html>
	);
}
