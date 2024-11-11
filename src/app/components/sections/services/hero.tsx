// src/app/components/sections/services/hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { ArrowRight, Bot, Sparkles, Target } from "lucide-react";

export function ServicesHero() {
	const scrollToOverview = () => {
		// Get the second section (overview section) - it's the second full-height section after hero
		const overviewSection = document.querySelectorAll("section")[1];
		overviewSection?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--primary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--accent)/0.1) 100%)`,
			}}>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col items-center text-center space-y-8'>
					{/* Service Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='inline-flex items-center gap-2 rounded-full px-6 py-2 bg-secondary/10 border border-secondary/20 text-secondary'>
						<Sparkles className='h-4 w-4' />
						<span className='text-sm font-medium'>AI-Powered Services</span>
					</motion.div>

					{/* Title */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='space-y-4'>
						<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
							Comprehensive Startup
							<br />
							Validation Suite
						</h1>
						<div className='h-1 w-24 bg-primary mx-auto rounded-full' />
					</motion.div>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='text-xl text-muted-foreground max-w-2xl'>
						From idea validation to market fit analysis, our AI-powered tools
						guide you through every step of building a successful startup.
					</motion.p>

					{/* Features */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full'>
						{[
							{
								icon: Bot,
								title: "AI-Powered Analysis",
								description: "Advanced algorithms for deeper insights",
							},
							{
								icon: Target,
								title: "Structured Process",
								description: "Clear steps to validate your idea",
							},
							{
								icon: Sparkles,
								title: "Real-time Feedback",
								description: "Instant insights and recommendations",
							},
						].map((feature) => (
							<div
								key={feature.title}
								className='flex flex-col items-center space-y-2 p-4'>
								<feature.icon className='h-6 w-6 text-primary' />
								<h3 className='font-semibold'>{feature.title}</h3>
								<p className='text-sm text-muted-foreground text-center'>
									{feature.description}
								</p>
							</div>
						))}
					</motion.div>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1.0 }}
						className='relative'>
						<Button
							size='lg'
							className='h-12 px-8 relative group'
							onClick={scrollToOverview}>
							Explore Our Services
							<ArrowRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
						</Button>

						{/* Optional: Add a subtle bounce animation to draw attention to the scroll action */}
						<motion.div
							className='absolute -bottom-8 left-1/2 transform -translate-x-1/2'
							animate={{
								y: [0, 5, 0],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
