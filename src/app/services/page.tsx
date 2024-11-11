// src/app/services/page.tsx
import type { Metadata } from "next";
import { Button } from "@/src/app/components/ui/button";
import { Separator } from "@/src/app/components/ui/separator";
import { ThemeToggle } from "@/src/app/components/theme-toggle";
import { NavigationLogo } from "@/src/app/components/navigation/logo";
import { NavigationMenu } from "@/src/app/components/navigation/menu";
import { Footer } from "@/src/app/components/footer/content";

// Import services page specific sections
import { ServicesHero } from "@/src/app/components/sections/services/hero";
import { ServicesOverview } from "../components/sections/services/overview";

import { Integrations } from "../components/sections/services/integrations";
import { ServicesCTA } from "../components/sections/services/cta";

export const metadata: Metadata = {
	title: "Our Services | myleanstartup.ai - AI-Powered Lean Startup Validation",
	description:
		"Explore our comprehensive suite of AI-powered services designed to help validate and grow your startup idea.",
	openGraph: {
		title:
			"Services | myleanstartup.ai - AI-Powered Lean Startup Validation Platform",
		description:
			"Discover our full range of startup validation services and tools.",
		type: "website",
		url: "https://myleanstartup.ai/services",
	},
};

export default function ServicesPage() {
	return (
		<div className='relative h-screen overflow-hidden'>
			{/* Navigation - fixed at top */}
			<header className='fixed top-0 z-50 w-full h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
				<div className='h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex h-full items-center justify-between'>
						<div className='flex items-center space-x-6'>
							<NavigationLogo />
							<Separator orientation='vertical' className='h-6' />
							<NavigationMenu />
						</div>
						<div className='flex items-center space-x-4'>
							<Button>Get Started</Button>
							<Button variant='outline'>Login</Button>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</header>

			{/* Main scroll container */}
			<main className='fixed top-14 inset-x-0 bottom-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth'>
				{/* Sections container */}
				<div className='min-h-full'>
					{/* Individual sections - each takes exactly the visible area */}
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<ServicesHero />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<ServicesOverview />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<Integrations />
					</section>

					{/* Footer */}
					<footer className='border-t relative snap-end'>
						<Footer />
					</footer>
				</div>
			</main>
		</div>
	);
}
