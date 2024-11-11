// src/app/components/sections/use-cases/healthcare-before.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Card } from "@/src/app/components/ui/card";
import { ArrowRight, Stethoscope } from "lucide-react";

export function HealthcareBefore() {
	const scrollToAfter = () => {
		// Get the next section (healthcare-after)
		const nextSection = document.querySelector(
			"[data-section='healthcare-after']"
		);
		nextSection?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--primary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--secondary)/0.1) 100%)`,
			}}
			data-section='healthcare-before'>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-center'>
					<div className='space-y-8'>
						{/* Badge */}
						<div className='inline-flex items-center rounded-full px-6 py-2 border border-primary/20 bg-primary/10'>
							<Stethoscope className='h-4 w-4 mr-2 text-primary' />
							<span className='text-sm font-medium text-primary'>
								Healthcare Innovation
							</span>
						</div>

						{/* Title */}
						<h2 className='text-3xl md:text-4xl font-bold'>
							From Lab to Market: The Challenge
						</h2>

						{/* Description */}
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							A team of doctors developing a new remote patient monitoring
							solution faced complex validation challenges.
						</p>

						{/* Challenge Card */}
						<Card className='max-w-2xl mx-auto p-6 space-y-4'>
							<h3 className='text-xl font-semibold'>Initial Challenges</h3>
							<ul className='text-left space-y-2 text-muted-foreground'>
								<li>• Understanding diverse stakeholder needs</li>
								<li>• Navigating regulatory requirements</li>
								<li>• Determining optimal pricing strategy</li>
								<li>• Validating market approach</li>
							</ul>
						</Card>

						{/* CTA */}
						<Button size='lg' onClick={scrollToAfter} className='group'>
							See How We Helped
							<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
						</Button>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
