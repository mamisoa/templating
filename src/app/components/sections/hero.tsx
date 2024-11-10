import { Button } from "@/src/app/components/ui/button";

export function HeroSection() {
	return (
		<div className='flex flex-col items-center justify-center max-w-3xl mx-auto text-center space-y-8'>
			<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
				Transform Ideas into Successful Businesses
			</h1>
			<p className='text-xl text-muted-foreground max-w-2xl'>
				AI-Powered Lean Startup Validation Platform
			</p>
			<div className='flex items-center gap-4'>
				<Button size='lg'>Start Free Trial</Button>
				<Button size='lg' variant='outline'>
					Watch Demo
				</Button>
			</div>
		</div>
	);
}
