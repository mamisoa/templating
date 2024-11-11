// src/app/components/sections/about/our-values.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/src/app/components/ui/card";
import {
	Heart,
	Lightbulb,
	Shield,
	Microscope,
	Rocket,
	Users,
} from "lucide-react";

export function OurValues() {
	const values = [
		{
			icon: Lightbulb,
			title: "Innovation First",
			description:
				"We constantly push the boundaries of what's possible with AI and automation, ensuring our tools stay at the cutting edge.",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: Shield,
			title: "Trust & Transparency",
			description:
				"We believe in being open about our methods and maintaining the highest standards of data privacy and security.",
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: Users,
			title: "User-Centric",
			description:
				"Every feature we develop is designed with our users' success in mind, making complex processes simple and intuitive.",
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
		{
			icon: Microscope,
			title: "Data-Driven",
			description:
				"We base our decisions and recommendations on solid data and proven methodologies, ensuring reliable results.",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: Heart,
			title: "Passion for Education",
			description:
				"We're committed to helping entrepreneurs learn and grow, sharing knowledge and best practices freely.",
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: Rocket,
			title: "Continuous Growth",
			description:
				"We're always learning and improving, applying the same lean principles we teach to our own development.",
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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
					className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Values</h2>
					<div className='h-1 w-24 bg-accent mx-auto rounded-full mb-6' />
					<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
						Our core values shape everything we do, from how we develop our
						platform to how we interact with our users.
					</p>
				</motion.div>

				{/* Values Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
					{values.map((value) => (
						<motion.div key={value.title} variants={itemVariants}>
							<Card className='relative h-full p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors duration-300'>
								<div className='flex flex-col h-full'>
									<div
										className={`${value.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
										<value.icon className={`h-6 w-6 ${value.color}`} />
									</div>
									<h3 className='text-xl font-semibold mb-3'>{value.title}</h3>
									<p className='text-muted-foreground'>{value.description}</p>
								</div>
							</Card>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom Quote */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className='text-center mt-12'>
					<blockquote className='text-xl font-medium text-muted-foreground max-w-3xl mx-auto italic'>
						&quot;We believe that by combining AI technology with lean startup
						principles, we can help create a new generation of successful,
						sustainable businesses.&quot;
					</blockquote>
				</motion.div>
			</div>
		</div>
	);
}
