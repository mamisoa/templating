// src/app/components/sections/about/hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { ArrowRight } from "lucide-react";

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
					{/* Title */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='space-y-4'>
						<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
							About transtorm.ai
						</h1>
						<div className='h-1 w-24 bg-primary mx-auto rounded-full' />
					</motion.div>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='text-xl text-muted-foreground max-w-2xl'>
						Empowering entrepreneurs with AI-driven tools to validate and build
						successful businesses. We're on a mission to reduce startup failure
						rates through data-driven decision making.
					</motion.p>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}>
						<Button size='lg' className='h-12 px-8'>
							Learn Our Story
							<ArrowRight className='ml-2 h-4 w-4' />
						</Button>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className='grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8'>
						{[
							{ label: "Startups Helped", value: "500+" },
							{ label: "Success Rate", value: "85%" },
							{ label: "Team Members", value: "50+" },
						].map((stat) => (
							<div key={stat.label} className='text-center'>
								<div className='text-3xl font-bold mb-2'>{stat.value}</div>
								<div className='text-muted-foreground'>{stat.label}</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
