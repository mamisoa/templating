// src/app/use-cases/page.tsx
import type { Metadata } from "next";
import { Button } from "@/src/app/components/ui/button";
import { Separator } from "@/src/app/components/ui/separator";
import { ThemeToggle } from "@/src/app/components/theme-toggle";
import { NavigationLogo } from "@/src/app/components/navigation/logo";
import { NavigationMenu } from "@/src/app/components/navigation/menu";
import { Footer } from "@/src/app/components/footer/content";
import { UseCasesHero } from "../components/sections/use-cases/hero";
import { HealthcareBefore } from "../components/sections/use-cases/healthcare-before";
import { HealthcareAfter } from "../components/sections/use-cases/healthcare-after";
import { EdtechBefore } from "../components/sections/use-cases/edtech-before";
import { EdtechAfter } from "../components/sections/use-cases/edtech-after";
import { FashionBefore } from "../components/sections/use-cases/fashion-before";
import { FashionAfter } from "../components/sections/use-cases/fashion-after";
import { AgTechBefore } from "../components/sections/use-cases/agtech-before";
import { AgTechAfter } from "../components/sections/use-cases/agtech-after";

// Import use case specific sections

export const metadata: Metadata = {
	title: "Use Cases | myleanstartup.ai - AI-Powered Lean Startup Validation",
	description:
		"Discover how companies across different industries successfully validated their startup ideas using our AI-powered platform.",
	openGraph: {
		title:
			"Use Cases | myleanstartup.ai - AI-Powered Lean Startup Validation Platform",
		description:
			"Real success stories of startup validation across healthcare, education, fashion, and agriculture.",
		type: "website",
		url: "https://myleanstartup.ai/use-cases",
	},
};

export default function UseCasesPage() {
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
						<UseCasesHero />
					</section>

					{/* Healthcare Use Case */}
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<HealthcareBefore />
					</section>
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<HealthcareAfter />
					</section>

					{/* EdTech Use Case */}
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<EdtechBefore />
					</section>
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<EdtechAfter />
					</section>

					{/* Fashion Use Case */}
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<FashionBefore />
					</section>
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<FashionAfter />
					</section>

					{/* AgTech Use Case */}
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<AgTechBefore />
					</section>
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<AgTechAfter />
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
