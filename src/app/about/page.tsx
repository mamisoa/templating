// src/app/about/page.tsx
import type { Metadata } from "next";
import { Button } from "@/src/app/components/ui/button";
import { Separator } from "@/src/app/components/ui/separator";
import { ThemeToggle } from "@/src/app/components/theme-toggle";
import { NavigationLogo } from "@/src/app/components/navigation/logo";
import { NavigationMenu } from "@/src/app/components/navigation/menu";
import { Footer } from "@/src/app/components/footer/content";

// Import about page specific sections
import { AboutHero } from "@/src/app/components/sections/about/hero";
import { OurStory } from "../components/sections/about/our-story";
import { OurMission } from "../components/sections/about/our-mission";
import { OurValues } from "../components/sections/about/our-values";
import { ContactSection } from "../components/sections/about/contact";

export const metadata: Metadata = {
	title: "About Us | myleanstartup.ai - AI-Powered Lean Startup Validation",
	description:
		"Learn about our mission to help entrepreneurs validate and build successful businesses through AI-powered lean startup methodologies.",
	openGraph: {
		title:
			"About myleanstartup.ai - AI-Powered Lean Startup Validation Platform",
		description:
			"Discover how we're revolutionizing startup validation with AI-powered tools and lean methodology.",
		type: "website",
		url: "https://myleanstartup.ai/about",
	},
};

export default function AboutPage() {
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
						<AboutHero />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<OurStory />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<OurMission />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<OurValues />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<ContactSection />
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
