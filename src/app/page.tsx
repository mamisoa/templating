import { Button } from "@/src/app/components/ui/button";
import { Separator } from "@/src/app/components/ui/separator";
import { HeroSection } from "./components/sections/hero";
import { KeyBenefits } from "./components/sections/key-benefits";
import { HowItWorks } from "./components/sections/how-it-works";
import { FeaturesShowcase } from "./components/sections/sections";
import { FooterContent } from "./components/footer/content";
import { NavigationLogo } from "./components/navigation/logo";
import { NavigationMenu } from "./components/navigation/menu";
import { CallToAction } from "./components/sections/cta";
import { PricingSection } from "./components/sections/pricing";
import { SocialProof } from "./components/sections/social-proof";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			{/* Navigation */}
			<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
				<div className='container flex h-14 items-center'>
					<div className='flex items-center space-x-6 mr-4'>
						<NavigationLogo />
						<Separator orientation='vertical' className='h-6' />
						<NavigationMenu />
					</div>
					<div className='flex flex-1 items-center justify-end space-x-4'>
						<Button variant='outline'>Login</Button>
						<Button>Get Started</Button>
						<ThemeToggle />
					</div>
				</div>
			</header>

			<main className='flex-1'>
				{/* Hero Section */}
				<section className='container py-20'>
					<HeroSection />
				</section>

				{/* Key Benefits */}
				<section className='container py-16 bg-muted/50'>
					<KeyBenefits />
				</section>

				{/* How It Works */}
				<section className='container py-16'>
					<HowItWorks />
				</section>

				{/* Features */}
				<section className='container py-16 bg-muted/50'>
					<FeaturesShowcase />
				</section>

				{/* Pricing */}
				<section className='container py-16'>
					<PricingSection />
				</section>

				{/* Social Proof */}
				<section className='container py-16 bg-muted/50'>
					<SocialProof />
				</section>

				{/* CTA */}
				<section className='container py-16'>
					<CallToAction />
				</section>
			</main>

			{/* Footer */}
			<footer className='border-t'>
				<div className='container py-16'>
					<FooterContent />
				</div>
			</footer>
		</div>
	);
}
