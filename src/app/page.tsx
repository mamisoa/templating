import { Button } from "@/src/app/components/ui/button";
import { Separator } from "@/src/app/components/ui/separator";
import { ThemeToggle } from "@/src/app/components/theme-toggle";
import { NavigationLogo } from "@/src/app/components/navigation/logo";
import { NavigationMenu } from "@/src/app/components/navigation/menu";
import { HeroSection } from "@/src/app/components/sections/home/hero";
import { KeyBenefits } from "@/src/app/components/sections/home/key-benefits";
import { HowItWorks } from "@/src/app/components/sections/home/how-it-works";
import { FeaturesShowcase } from "@/src/app/components/sections/home/features";
import { PricingSection } from "@/src/app/components/sections/home/pricing";
import { SocialProof } from "@/src/app/components/sections/home/social-proof";
import { CallToAction } from "@/src/app/components/sections/home/cta";
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
							<Separator
								orientation='vertical'
								className='h-6 hidden md:block'
							/>
							<NavigationMenu />
						</div>
						<div className='hidden md:flex items-center space-x-4'>
							<Button variant='outline'>Login</Button>
							<Button>Get Started</Button>
							<ThemeToggle />
						</div>
						<div className='flex md:hidden items-center space-x-4'>
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
