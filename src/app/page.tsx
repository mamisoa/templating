// src/app/page.tsx
import { Button } from "@/src/app/components/ui/button";
import { Separator } from "@/src/app/components/ui/separator";
import { ThemeToggle } from "@/src/app/components/theme-toggle";
import { NavigationLogo } from "@/src/app/components/navigation/logo";
import { NavigationMenu } from "@/src/app/components/navigation/menu";
import { HeroSection } from "@/src/app/components/sections/hero";
import { KeyBenefits } from "@/src/app/components/sections/key-benefits";
import { HowItWorks } from "@/src/app/components/sections/how-it-works";
import { FeaturesShowcase } from "@/src/app/components/sections/features";
import { PricingSection } from "@/src/app/components/sections/pricing";
import { SocialProof } from "@/src/app/components/sections/social-proof";
import { CallToAction } from "@/src/app/components/sections/cta";
import { FooterContent } from "@/src/app/components/footer/content";

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen w-full'>
			{/* Navigation */}
			<header className='fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
				<div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex h-14 items-center justify-between'>
						<div className='flex items-center space-x-6'>
							<NavigationLogo />
							<Separator orientation='vertical' className='h-6' />
							<NavigationMenu />
						</div>
						<div className='flex items-center space-x-4'>
							<Button variant='outline'>Login</Button>
							<Button>Get Started</Button>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</header>

			<main className='flex-1 w-full mt-14'>
				{/* Sections Container with Snap Scroll */}
				<div className='relative w-full h-[calc(100vh-3.5rem)] overflow-y-auto snap-y snap-mandatory bg-background'>
					{/* Hero Section */}
					<section className='relative w-full h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<HeroSection />
					</section>

					{/* Key Benefits */}
					<section className='relative w-full h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<KeyBenefits />
					</section>

					<section className='relative w-full h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<HowItWorks />
					</section>

					<section className='relative w-full h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<FeaturesShowcase />
					</section>

					<section className='relative w-full h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<PricingSection />
					</section>

					<section className='relative w-full h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<SocialProof />
					</section>

					<section className='relative w-full h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<CallToAction />
					</section>
				</div>
			</main>

			{/* Footer */}
			<footer className='border-t relative z-10'>
				<FooterContent />
			</footer>
		</div>
	);
}
