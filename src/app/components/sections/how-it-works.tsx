// src/app/components/sections/how-it-works.tsx
"use client";

import { motion } from "framer-motion";
import {
	Users,
	ClipboardList,
	MessageSquare,
	GitCompareArrows,
} from "lucide-react";
import { Card } from "@/src/app/components/ui/card";
import { cn } from "@/src/lib/utils";
import { useMemo } from "react";

export function HowItWorks() {
	const steps = useMemo(
		() => [
			{
				title: "Generate Personas",
				description:
					"Create detailed customer profiles using AI assistance to identify your target audience. Our platform helps you define precise demographic, behavioral, and psychographic characteristics of your potential customers.",
				icon: Users,
				color: "text-primary",
			},
			{
				title: "Generate Test Cards",
				description:
					"Transform your business assumptions into structured test cards. Each card clearly defines what you want to learn, your success criteria, and how you'll validate it. The AI helps you create focused, actionable test scenarios.",
				icon: ClipboardList,
				color: "text-secondary",
			},
			{
				title: "Generate Customer Interviews",
				description:
					"Based on your test cards, get AI-generated interview scripts and questions tailored to validate your specific hypotheses. This ensures your customer conversations are productive and yield meaningful insights.",
				icon: MessageSquare,
				color: "text-accent",
			},
			{
				title: "Analyze & Pivot/Persevere",
				description:
					"Review your test results through our analytics dashboard. Get clear insights on which hypotheses were validated or invalidated, and receive AI-powered recommendations on whether to persist with your current strategy or pivot to a new approach.",
				icon: GitCompareArrows,
				color: "text-primary",
			},
		],
		[]
	);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--primary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--secondary)/0.1) 100%)`,
			}}>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Our Validation Process
					</h2>
					<div className='h-1 w-24 bg-secondary mx-auto rounded-full mb-4' />
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						A systematic approach to validate your startup idea, powered by AI
						assistance at every step
					</p>
				</motion.div>

				{/* Timeline Steps */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='relative'>
					{/* Timeline Line */}
					<div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border' />

					{/* Steps */}
					<div className='relative space-y-16'>
						{steps.map((step, index) => {
							const Icon = step.icon;
							return (
								<motion.div
									key={step.title}
									variants={itemVariants}
									className={cn(
										"flex items-center gap-8",
										index % 2 === 0 ? "flex-row" : "flex-row-reverse"
									)}>
									{/* Content Card */}
									<Card className='flex-1 p-6 bg-card hover:bg-card/80 transition-all duration-300'>
										<div className='flex items-start gap-4'>
											<div className={cn("p-3 rounded-xl", step.color)}>
												<Icon className='h-6 w-6' />
											</div>
											<div>
												<h3 className='text-xl font-semibold mb-2'>
													{step.title}
												</h3>
												<p className='text-muted-foreground'>
													{step.description}
												</p>
											</div>
										</div>
									</Card>

									{/* Timeline Node */}
									<div className='relative flex items-center justify-center'>
										<motion.div
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: 0.5, duration: 0.3 }}
											className={cn(
												"w-8 h-8 rounded-full flex items-center justify-center font-bold",
												step.color,
												"border-4 border-background"
											)}>
											{index + 1}
										</motion.div>
									</div>

									{/* Spacer for alternating layout */}
									<div className='flex-1' />
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
