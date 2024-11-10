// src/app/components/sections/hero.tsx
"use client";

import { Button } from "@/src/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
	return (
		<div className='full-screen relative flex items-center justify-center overflow-hidden'>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-pattern' />
			<div className='absolute inset-0 w-full h-full flex items-center justify-center bg-background/95 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

			{/* Gradient Beams */}
			<div className='absolute inset-0 w-full h-full overflow-hidden'>
				<div className='absolute -top-[25%] -right-[25%] w-[1000px] h-[1000px] rounded-full bg-primary/30 blur-[128px]' />
				<div className='absolute -bottom-[25%] -left-[25%] w-[1000px] h-[1000px] rounded-full bg-secondary/30 blur-[128px]' />
			</div>

			{/* Content */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-10 text-center'>
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='inline-flex items-center rounded-full px-6 py-2 border border-primary/20 bg-primary/10 backdrop-blur-sm'>
					<span className='text-sm font-medium text-primary'>
						Just Launched 🚀 See what&apos;s new
					</span>
				</motion.div>

				{/* Main Heading */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='space-y-4'>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
						Validate Your Startup
					</h1>
					<div className='h-2 w-full max-w-[600px] mx-auto rounded-full modern-gradient' />
				</motion.div>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='text-xl text-muted-foreground max-w-2xl'>
					Transform ideas into successful businesses using AI-powered validation
					tools. Stop guessing, start knowing.
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className='flex flex-col sm:flex-row items-center gap-4 w-full justify-center'>
					<Button size='lg' className='h-12 px-8 font-medium'>
						Start Free Trial
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</motion.div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className='flex flex-wrap justify-center gap-8 text-center'>
					{[
						{ label: "Success Rate", value: "85%" },
						{ label: "Business Model Patterns", value: "50+" },
						{ label: "Time Saved", value: "60%" },
					].map((stat) => (
						<div key={stat.label} className='flex flex-col'>
							<span className='text-2xl font-bold'>{stat.value}</span>
							<span className='text-sm text-muted-foreground'>
								{stat.label}
							</span>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
