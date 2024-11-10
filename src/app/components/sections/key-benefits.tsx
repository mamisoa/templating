"use client";

import { motion } from "framer-motion";
import { Gauge, Shield, PiggyBank } from "lucide-react";
import { useMemo } from "react";

export function KeyBenefits() {
	const benefits = useMemo(
		() => [
			{
				title: "Validate Faster",
				description:
					"Cut validation time by 60% with structured processes and AI assistance",
				icon: Gauge,
				color: "text-primary",
			},
			{
				title: "Reduce Risk",
				description:
					"Make data-driven decisions with real-time feedback and analytics",
				icon: Shield,
				color: "text-secondary",
			},
			{
				title: "Save Resources",
				description:
					"Minimize waste by testing assumptions before heavy investment",
				icon: PiggyBank,
				color: "text-accent",
			},
		],
		[]
	);

	const containerVariants = useMemo(
		() => ({
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: 0.3, // Increased from 0.2
					delayChildren: 0.2, // Added delay before children start
					duration: 0.8, // Added overall container animation duration
				},
			},
		}),
		[]
	);

	const itemVariants = useMemo(
		() => ({
			hidden: { opacity: 0, y: 40 }, // Increased initial offset
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8, // Increased from 0.5
					ease: "easeOut", // Added easing function
				},
			},
		}),
		[]
	);

	return (
		<div className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden bg-background'>
			{/* Grid Pattern */}
			<div className='absolute inset-0 w-full h-full'>
				<div className='absolute inset-0 bg-grid-pattern opacity-5' />
			</div>

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.8,
						ease: "easeOut",
						delay: 0.1,
					}}
					className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Why Choose Our Platform?
					</h2>
					<div className='h-1 w-24 bg-primary mx-auto rounded-full mb-4' />
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Our AI-powered platform helps you validate your startup ideas faster
						and more efficiently
					</p>
				</motion.div>

				{/* Benefits Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{benefits.map((benefit) => {
						const Icon = benefit.icon;
						return (
							<motion.div
								key={benefit.title}
								variants={itemVariants}
								className='group relative flex flex-col items-center text-center p-6 rounded-2xl border bg-card/5 hover:bg-card/10 transition-all duration-500'>
								<div
									className={`p-4 rounded-xl ${benefit.color} bg-background/20 transition-transform duration-300 group-hover:scale-110`}>
									<Icon className='h-8 w-8' />
								</div>
								<h3 className='text-xl font-semibold mt-4 mb-2'>
									{benefit.title}
								</h3>
								<p className='text-muted-foreground'>{benefit.description}</p>
							</motion.div>
						);
					})}
				</motion.div>
			</div>

			{/* Gradient Beams */}
			<div className='absolute inset-0 -z-10'>
				<div className='absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[128px] -translate-y-1/2' />
				<div className='absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[128px] -translate-y-1/2' />
			</div>
		</div>
	);
}
