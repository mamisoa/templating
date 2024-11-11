// src/app/components/sections/use-cases/fashion-after.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Card } from "@/src/app/components/ui/card";
import {
	ArrowRight,
	Shirt,
	Store,
	Users,
	Target,
	TrendingUp,
	Activity,
	CheckCircle2,
	Star,
	Percent,
} from "lucide-react";

export function FashionAfter() {
	const scrollToNextCase = () => {
		const nextSection = document.querySelector(
			"[data-section='agtech-before']"
		);
		nextSection?.scrollIntoView({ behavior: "smooth" });
	};

	const metrics = [
		{
			icon: Store,
			value: "200+",
			label: "Sustainable Brands",
			description: "Successfully onboarded",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: Percent,
			value: "85%",
			label: "Customer Retention",
			description: "After first purchase",
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: Activity,
			value: "Featured",
			label: "Industry Recognition",
			description: "In Vogue Sustainability",
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
	];

	const validationOutcomes = [
		{
			title: "Market Positioning",
			description:
				"Identified premium positioning with accessible price points",
		},
		{
			title: "Brand Standards",
			description: "Developed clear sustainability certification requirements",
		},
		{
			title: "Platform Model",
			description: "Optimized commission structure based on brand feedback",
		},
		{
			title: "Customer Journey",
			description: "Streamlined discovery and verification process",
		},
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
			data-section='fashion-after'>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-12 items-start'>
					{/* Left Column - Success Story */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='space-y-6'>
						{/* Badge */}
						<div className='inline-flex items-center rounded-full px-6 py-2 border border-secondary/20 bg-secondary/10'>
							<Shirt className='h-4 w-4 mr-2 text-secondary' />
							<span className='text-sm font-medium text-secondary'>
								Success Story
							</span>
						</div>

						{/* Title */}
						<h2 className='text-3xl md:text-4xl font-bold'>
							Revolutionizing
							<br />
							Sustainable Fashion
						</h2>

						{/* Validation Outcomes */}
						<Card className='p-6 space-y-6 bg-card/50 backdrop-blur'>
							<h3 className='text-xl font-semibold flex items-center gap-2'>
								<Target className='h-5 w-5 text-primary' />
								Key Achievements
							</h3>
							<div className='grid gap-4'>
								{validationOutcomes.map((outcome, index) => (
									<div key={index} className='flex items-start gap-3'>
										<CheckCircle2 className='h-5 w-5 text-secondary mt-1' />
										<div>
											<h4 className='font-medium'>{outcome.title}</h4>
											<p className='text-sm text-muted-foreground'>
												{outcome.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</Card>

						{/* Growth Trajectory */}
						<Card className='p-6 bg-primary/5 border-primary/10'>
							<div className='flex items-start gap-4'>
								<div className='bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center'>
									<TrendingUp className='h-6 w-6 text-primary' />
								</div>
								<div>
									<h3 className='text-lg font-semibold mb-2'>
										Growth Trajectory
									</h3>
									<p className='text-muted-foreground'>
										Rapid expansion to 200+ sustainable brands with consistent
										month-over-month growth in both sellers and buyers.
									</p>
								</div>
							</div>
						</Card>
					</motion.div>

					{/* Right Column - Metrics & Testimonial */}
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
											<div className='text-sm font-medium'>{metric.label}</div>
											<div className='text-sm text-muted-foreground'>
												{metric.description}
											</div>
										</div>
									</div>
								</Card>
							))}
						</div>

						{/* Testimonial */}
						<Card className='p-6 bg-card/50 backdrop-blur'>
							<div className='flex gap-2 mb-4'>
								{[1, 2, 3, 4, 5].map((star) => (
									<Star
										key={star}
										className='h-5 w-5 text-yellow-500 fill-yellow-500'
									/>
								))}
							</div>
							<blockquote className='text-muted-foreground italic mb-4'>
								&quot;The AI-powered validation process helped us identify our
								ideal price points and commission structure. We avoided costly
								mistakes and built trust with both brands and customers.&quot;
							</blockquote>
							<div className='flex items-center gap-3'>
								<div className='bg-secondary/10 rounded-full p-2'>
									<Users className='h-5 w-5 text-secondary' />
								</div>
								<div>
									<p className='font-semibold'>Emma Chen</p>
									<p className='text-sm text-muted-foreground'>
										Founder, EcoStyle Marketplace
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
