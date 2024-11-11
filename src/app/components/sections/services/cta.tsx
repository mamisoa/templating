// src/app/components/sections/services/cta.tsx
"use client";

import { Button } from "@/src/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServicesCTA() {
	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--accent)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--primary)/0.1) 100%)`,
			}}>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center space-y-6'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Ready to Get Started?
					</h2>
					<p className='text-muted-foreground'>
						Begin your startup validation journey today
					</p>
					<Button size='lg' className='h-12 px-8'>
						Start Free Trial
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</div>
			</div>
		</div>
	);
}
