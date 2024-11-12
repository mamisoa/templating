// src/app/components/sections/use-cases/hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function UseCasesHero() {
	const scrollToAfter = () => {
		const nextSection = document.querySelector(
			"[data-section='healthcare-before']"
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
          hsl(var(--accent)/0.1) 100%)`,
			}}>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='space-y-8'>
						{/* Badge */}
						<div className='inline-flex items-center rounded-full px-6 py-2 border border-primary/20 bg-primary/10 backdrop-blur-sm'>
							<Sparkles className='h-4 w-4 mr-2 text-primary' />
							<span className='text-sm font-medium text-primary'>
								Success Stories
							</span>
						</div>

						{/* Title with graduating sizes and gradient effect */}
						<h1 className='font-bold tracking-tight space-y-2'>
							<span className='block text-5xl md:text-7xl lg:text-8xl opacity-85'>
								Uncover
							</span>
							<span className='block text-6xl md:text-8xl lg:text-9xl opacity-90'>
								Your Own
							</span>
							<div className='relative inline-block'>
								<span
									className={cn(
										"block text-7xl md:text-9xl lg:text-[10rem] leading-none",
										"bg-clip-text text-transparent",
										"relative z-10"
									)}
									style={{
										backgroundImage: `linear-gradient(
                      90deg,
                      #60a5fa,
                      #818cf8,
                      #a78bfa,
                      #34d399,
                      #10b981,
                      #0ea5e9,
                      #60a5fa
                    )`,
										backgroundSize: "400% 100%",
										animation: "gradientFlow 5s linear infinite",
										WebkitBackgroundClip: "text",
									}}>
									Success Path
								</span>
							</div>
						</h1>

						{/* Description */}
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							Explore success stories from across industries that guide you
							through validation steps, actionable insights, and growth metrics.
							Dive into these journeys and imagine how our platform can help
							shape your own path to success.
						</p>

						{/* CTA */}
						<div>
							<Button
								size='lg'
								onClick={scrollToAfter}
								className='group text-xl'>
								Find your own story
								<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
