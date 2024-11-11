// src/app/components/sections/services/overview.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/src/app/components/ui/card";
import {
	Brain,
	ClipboardList,
	MessageSquare,
	FileSpreadsheet,
	ChartBar,
	Import,
} from "lucide-react";

export function ServicesOverview() {
	const services = [
		{
			icon: Brain,
			title: "AI-Powered Idea Validation",
			description:
				"Leverage advanced AI algorithms to analyze your business concept, identify potential market opportunities, and validate your assumptions quickly.",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: ClipboardList,
			title: "Test Cards Generation",
			description:
				"Automatically generate structured test cards from your business assumptions. Each card includes clear success criteria and validation methods.",
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: MessageSquare,
			title: "Interview Script Generation",
			description:
				"Create tailored interview scripts and questions designed to validate your specific hypotheses and understand customer pain points.",
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
		{
			icon: FileSpreadsheet,
			title: "Data Import & Analysis",
			description:
				"Import and analyze your real-world customer feedback, survey results, and market research data to validate your assumptions.",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: ChartBar,
			title: "Comprehensive Reporting",
			description:
				"Get detailed reports and dashboards showing your validation progress, insights gathered, and recommended next steps.",
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: Import,
			title: "Data-Driven Decisions",
			description:
				"Transform raw data into actionable insights. Make informed decisions about pivoting or persevering based on real evidence.",
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
          hsl(var(--secondary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--primary)/0.1) 100%)`,
			}}
			id='services-overview'>
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
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Complete Validation Toolkit
					</h2>
					<div className='h-1 w-24 bg-secondary mx-auto rounded-full mb-6' />
					<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
						From generating test hypotheses to analyzing real-world data, our
						platform provides all the tools you need for comprehensive startup
						validation.
					</p>
				</motion.div>

				{/* Services Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
					{services.map((service) => (
						<motion.div key={service.title} variants={itemVariants}>
							<Card className='relative h-full p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300 flex flex-col'>
								<div className='flex-grow'>
									<div
										className={`${service.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
										<service.icon className={`h-6 w-6 ${service.color}`} />
									</div>
									<h3 className='text-xl font-semibold mb-3'>
										{service.title}
									</h3>
									<p className='text-muted-foreground'>{service.description}</p>
								</div>

								{/* Learn More link - now in a separate div at the bottom */}
								<div className='mt-4 pt-4 border-t border-border/30'>
									<button className='text-sm text-primary/80 font-medium hover:text-primary transition-colors flex items-center gap-2 group'>
										Learn More
										<span className='transform transition-transform group-hover:translate-x-1'>
											→
										</span>
									</button>
								</div>
							</Card>
						</motion.div>
					))}
				</motion.div>

				{/* Additional Message */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.5 }}
					className='text-center mt-12 text-sm text-muted-foreground'>
					All services include AI assistance and can be customized to your
					specific industry and needs
				</motion.div>
			</div>
		</div>
	);
}
