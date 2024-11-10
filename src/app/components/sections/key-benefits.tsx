// src/app/components/sections/key-benefits.tsx
"use client";

import { motion } from "framer-motion";
import { Gauge, Shield, PiggyBank } from "lucide-react";

const benefits = [
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
];

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

export function KeyBenefits() {
	return (
		<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
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
				{benefits.map((benefit) => (
					<motion.div
						key={benefit.title}
						variants={itemVariants}
						className='flex flex-col items-center text-center p-6 rounded-2xl bg-card border backdrop-blur-sm'>
						<div className={`p-4 rounded-xl ${benefit.color} bg-background`}>
							<benefit.icon className='h-8 w-8' />
						</div>
						<h3 className='text-xl font-semibold mt-4 mb-2'>{benefit.title}</h3>
						<p className='text-muted-foreground'>{benefit.description}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
