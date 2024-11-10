// src/app/components/sections/features.tsx
"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Card } from "@/src/app/components/ui/card";
import type { LucideIcon } from "lucide-react";
import {
	Brain,
	ClipboardCheck,
	MessageSquareMore,
	BarChart3,
	ArrowRight,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

type Feature = {
	title: string;
	description: string;
	icon: LucideIcon;
	color: string;
	image: {
		webp: string;
		jpg: string;
		alt: string;
	};
	benefits: string[];
};

export function FeaturesShowcase() {
	const [activeFeature, setActiveFeature] = useState(0);

	const features: Feature[] = useMemo(
		() => [
			{
				title: "AI-Assisted Persona Development",
				description:
					"Create detailed, data-driven customer personas in minutes. Our AI analyzes market data and user behavior to help you identify and understand your target audience with unprecedented accuracy.",
				icon: Brain,
				color: "text-primary",
				image: {
					webp: "/features/persona-development.webp",
					jpg: "/features/persona-development.jpg",
					alt: "AI-Assisted Persona Development Interface",
				},
				benefits: [
					"Generate personas from market data",
					"Identify behavioral patterns",
					"Validate assumptions quickly",
				],
			},
			{
				title: "Hypothesis Testing Dashboard",
				description:
					"Transform your business assumptions into testable hypotheses. Track experiments, measure results, and make data-driven decisions with our comprehensive testing dashboard.",
				icon: ClipboardCheck,
				color: "text-secondary",
				image: {
					webp: "/features/hypothesis-dashboard.webp",
					jpg: "/features/hypothesis-dashboard.jpg",
					alt: "Hypothesis Testing Dashboard Interface",
				},
				benefits: [
					"Structured testing framework",
					"Real-time progress tracking",
					"Visual results dashboard",
				],
			},
			{
				title: "Customer Feedback Analysis",
				description:
					"Collect and analyze customer feedback at scale. Our AI helps you identify patterns, sentiment, and key insights from customer interviews and surveys.",
				icon: MessageSquareMore,
				color: "text-accent",
				image: {
					webp: "/features/feedback-analysis.webp",
					jpg: "/features/feedback-analysis.jpg",
					alt: "Customer Feedback Analysis Interface",
				},
				benefits: [
					"Automated sentiment analysis",
					"Key insights extraction",
					"Trend identification",
				],
			},
			{
				title: "Progress Tracking & Reports",
				description:
					"Monitor your validation progress with comprehensive analytics and reports. Get actionable insights and recommendations based on your testing results.",
				icon: BarChart3,
				color: "text-primary",
				image: {
					webp: "/features/progress-tracking.webp",
					jpg: "/features/progress-tracking.jpg",
					alt: "Progress Tracking and Reports Interface",
				},
				benefits: [
					"Custom report generation",
					"Progress visualization",
					"AI-powered recommendations",
				],
			},
		],
		[]
	);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
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
          hsl(var(--accent)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--primary)/0.1) 100%)`,
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
						Powerful Features for Validation
					</h2>
					<div className='h-1 w-24 bg-accent mx-auto rounded-full mb-4' />
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Everything you need to validate your startup idea with confidence
					</p>
				</motion.div>

				{/* Features Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
					{/* Feature Cards */}
					<div className='space-y-4'>
						{features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<motion.div
									key={feature.title}
									variants={itemVariants}
									className='relative'>
									<Card
										className={cn(
											"p-6 cursor-pointer transition-all duration-300",
											activeFeature === index
												? "bg-primary/10 border-primary"
												: "hover:bg-card/80"
										)}
										onClick={() => setActiveFeature(index)}>
										<div className='flex items-start gap-4'>
											<div
												className={cn(
													"p-2 rounded-lg",
													activeFeature === index
														? feature.color
														: "text-muted-foreground"
												)}>
												<Icon className='h-6 w-6' />
											</div>
											<div>
												<h3 className='text-lg font-semibold mb-2'>
													{feature.title}
												</h3>
												<p className='text-muted-foreground text-sm'>
													{feature.description}
												</p>
											</div>
											<ArrowRight
												className={cn(
													"h-5 w-5 ml-auto transition-transform duration-300",
													activeFeature === index ? "rotate-90" : ""
												)}
											/>
										</div>

										{/* Feature Benefits */}
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: activeFeature === index ? "auto" : 0,
												opacity: activeFeature === index ? 1 : 0,
											}}
											transition={{ duration: 0.3 }}
											className='overflow-hidden'>
											<div className='pt-4 mt-4 border-t'>
												<ul className='space-y-2'>
													{feature.benefits.map((benefit, i) => (
														<li key={i} className='flex items-center gap-2'>
															<div className='h-1.5 w-1.5 rounded-full bg-primary' />
															<span className='text-sm'>{benefit}</span>
														</li>
													))}
												</ul>
											</div>
										</motion.div>
									</Card>
								</motion.div>
							);
						})}
					</div>

					{/* Feature Preview */}
					<motion.div
						variants={itemVariants}
						className='relative h-[500px] rounded-xl overflow-hidden border bg-card p-2'>
						{/* Since we don't have actual images yet, we'll use a placeholder */}
						<div className='relative w-full h-full'>
							<picture>
								<source
									srcSet={features[activeFeature].image.webp}
									type='image/webp'
								/>
								<Image
									src={features[activeFeature].image.jpg}
									alt={features[activeFeature].image.alt}
									fill
									className='object-cover rounded-lg'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px'
									priority={activeFeature === 0}
									quality={90}
								/>
							</picture>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default FeaturesShowcase;
