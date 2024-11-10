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
import { Footer } from "@/src/app/components/footer/content";

export default function Home() {
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

			{/* Main scroll container - positioned absolutely below header */}
			<main className='absolute top-14 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth'>
				{/* Section wrapper */}
				<div className='relative'>
					{/* Individual sections */}
					<section className='h-[100vh] w-full snap-start snap-always'>
						<div className='h-[calc(100vh-3.5rem)]'>
							<HeroSection />
						</div>
					</section>

					<section className='h-[100vh] w-full snap-start snap-always'>
						<div className='h-[calc(100vh-3.5rem)]'>
							<KeyBenefits />
						</div>
					</section>

					<section className='h-[100vh] w-full snap-start snap-always'>
						<div className='h-[calc(100vh-3.5rem)]'>
							<HowItWorks />
						</div>
					</section>

					<section className='h-[100vh] w-full snap-start snap-always'>
						<div className='h-[calc(100vh-3.5rem)]'>
							<FeaturesShowcase />
						</div>
					</section>

					<section className='h-[100vh] w-full snap-start snap-always'>
						<div className='h-[calc(100vh-3.5rem)]'>
							<PricingSection />
						</div>
					</section>

					<section className='h-[100vh] w-full snap-start snap-always'>
						<div className='h-[calc(100vh-3.5rem)]'>
							<SocialProof />
						</div>
					</section>

					<section className='h-[100vh] w-full snap-start snap-always'>
						<div className='h-[calc(100vh-3.5rem)]'>
							<CallToAction />
						</div>
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
