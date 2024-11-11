// src/app/components/sections/about/hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { ArrowRight, Bot, Brain, Code } from "lucide-react";

export function AboutHero() {
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
					{/* Innovation Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='inline-flex items-center gap-2 rounded-full px-6 py-2 bg-secondary/10 border border-secondary/20 text-secondary'>
						<Bot className='h-4 w-4' />
						<span className='text-sm font-medium'>Part of transtorm.ai</span>
					</motion.div>

					{/* Title */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className='space-y-4'>
						<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
							Innovating Startup
							<br />
							Validation
						</h1>
						<div className='h-1 w-24 bg-primary mx-auto rounded-full' />
					</motion.div>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='text-xl text-muted-foreground max-w-2xl'>
						Born from the innovative spirit of transtorm.ai, myleanstartup.ai
						transforms the way entrepreneurs validate their ideas through
						AI-powered automation and data-driven methodologies.
					</motion.p>

					{/* Features */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full'>
						{[
							{
								icon: Brain,
								title: "AI-Powered",
								description: "Advanced algorithms for deeper insights",
							},
							{
								icon: Code,
								title: "Automation",
								description: "Streamlined validation processes",
							},
							{
								icon: Bot,
								title: "Innovation",
								description: "Cutting-edge tech solutions",
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
						transition={{ duration: 0.5, delay: 0.4 }}>
						<Button size='lg' className='h-12 px-8'>
							Discover Our Journey
							<ArrowRight className='ml-2 h-4 w-4' />
						</Button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
