// src/app/components/sections/use-cases/healthcare-after.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Card } from "@/src/app/components/ui/card";
import {
	ArrowUp,
	Clock,
	Building2,
	Trophy,
	ChartBarIcon,
	Stethoscope,
	ArrowRight,
} from "lucide-react";

export function HealthcareAfter() {
	// Scroll to the next use case (EdTech)
	const scrollToNextCase = () => {
		const nextSection = document.querySelector(
			"[data-section='edtech-before']"
		);
		nextSection?.scrollIntoView({ behavior: "smooth" });
	};

	const metrics = [
		{
			icon: Building2,
			value: "3",
			label: "Hospitals Launched",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: Clock,
			value: "70%",
			label: "Reduced Validation Time",
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: Trophy,
			value: "$200K",
			label: "Development Costs Saved",
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
	];

	const keyLearnings = [
		"B2B model more effective than B2C",
		"Integration with existing hospital systems crucial",
		"HIPAA compliance key selling point",
		"Price sensitivity varies by hospital size",
	];

	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--secondary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--primary)/0.1) 100%)`,
			}}
			data-section='healthcare-after'>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left Column - Success Story */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='space-y-6'>
						{/* Badge */}
						<div className='inline-flex items-center rounded-full px-6 py-2 border border-secondary/20 bg-secondary/10'>
							<Stethoscope className='h-4 w-4 mr-2 text-secondary' />
							<span className='text-sm font-medium text-secondary'>
								Success Story
							</span>
						</div>

						{/* Title */}
						<h2 className='text-3xl md:text-4xl font-bold'>
							Validated Solution,
							<br />
							Proven Results
						</h2>

						{/* Success Story Card */}
						<Card className='p-6 space-y-4 bg-card/50 backdrop-blur'>
							<h3 className='text-xl font-semibold'>Key Learnings</h3>
							<ul className='space-y-2 text-muted-foreground'>
								{keyLearnings.map((learning, index) => (
									<li key={index} className='flex items-start gap-2'>
										<ArrowUp className='h-5 w-5 text-secondary mt-1 rotate-45' />
										<span>{learning}</span>
									</li>
								))}
							</ul>
						</Card>

						{/* Testimonial */}
						<Card className='p-6 bg-primary/5 border-primary/10'>
							<blockquote className='text-muted-foreground italic'>
								&quot;The AI-powered validation process helped us pivot to a B2B
								model early, saving months of development time and
								resources.&quot;
							</blockquote>
							<div className='mt-4 flex items-center gap-2'>
								<div>
									<p className='font-semibold'>Dr. Sarah Chen</p>
									<p className='text-sm text-muted-foreground'>
										Chief Medical Officer
									</p>
								</div>
							</div>
						</Card>
					</motion.div>

					{/* Right Column - Metrics */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='space-y-8'>
						{/* Metrics Grid */}
						<div className='grid gap-6'>
							{metrics.map((metric, index) => (
								<Card
									key={index}
									className='p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
									<div className='flex items-center gap-4'>
										<div
											className={`${metric.bgColor} rounded-lg w-12 h-12 flex items-center justify-center`}>
											<metric.icon className={`h-6 w-6 ${metric.color}`} />
										</div>
										<div>
											<div className='text-2xl font-bold'>{metric.value}</div>
											<div className='text-sm text-muted-foreground'>
												{metric.label}
											</div>
										</div>
									</div>
								</Card>
							))}
						</div>

						{/* Results Summary */}
						<Card className='p-6 bg-card/50 backdrop-blur'>
							<div className='flex items-start gap-4'>
								<div className='bg-accent/10 rounded-lg w-12 h-12 flex items-center justify-center'>
									<ChartBarIcon className='h-6 w-6 text-accent' />
								</div>
								<div>
									<h4 className='text-lg font-semibold mb-2'>ROI Summary</h4>
									<p className='text-muted-foreground'>
										Successfully transitioned from concept to market-ready
										solution in less than 6 months, with validated pricing and
										feature set.
									</p>
								</div>
							</div>
						</Card>

						{/* Next Case Button */}
						<div className='text-center pt-4'>
							<Button
								variant='outline'
								onClick={scrollToNextCase}
								className='group'>
								Next Success Story
								<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
