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
import { Footer } from "./components/footer/content";

export default function Home() {
	return (
		<div className='relative min-h-screen'>
			{/* Navigation */}
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

			{/* Main Content */}
			<main className='h-[calc(100vh-3.5rem)] mt-14 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth'>
				{/* Sections */}
				<div className='relative'>
					{/* Each section takes exactly viewport height minus navbar */}
					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<HeroSection />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<KeyBenefits />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<HowItWorks />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<FeaturesShowcase />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<PricingSection />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<SocialProof />
					</section>

					<section className='h-[calc(100vh-3.5rem)] snap-start snap-always'>
						<CallToAction />
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
