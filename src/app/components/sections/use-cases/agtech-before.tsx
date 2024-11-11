// src/app/components/sections/use-cases/agtech-before.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Card } from "@/src/app/components/ui/card";
import {
	ArrowRight,
	Sprout,
	Smartphone,
	CloudRain,
	ClipboardList,
	CircleDollarSign,
	Signal,
	Database,
} from "lucide-react";

export function AgTechBefore() {
	const scrollToAfter = () => {
		const nextSection = document.querySelector("[data-section='agtech-after']");
		nextSection?.scrollIntoView({ behavior: "smooth" });
	};

	const challenges = [
		{
			icon: Signal,
			title: "IoT Integration",
			description: "Ensuring reliable connectivity in remote farming locations",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: Database,
			title: "Data Collection",
			description: "Gathering accurate crop and environmental data",
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: CircleDollarSign,
			title: "ROI Validation",
			description: "Proving value proposition to traditional farmers",
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
	];

	const validationGoals = [
		"Measure impact on crop yield and resource efficiency",
		"Determine optimal sensor placement and density",
		"Validate subscription pricing model feasibility",
		"Test data visualization and alert preferences",
	];

	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--primary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--secondary)/0.1) 100%)`,
			}}
			data-section='agtech-before'>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left Column - Problem Statement */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='space-y-6'>
						{/* Badge */}
						<div className='inline-flex items-center rounded-full px-6 py-2 border border-primary/20 bg-primary/10'>
							<Sprout className='h-4 w-4 mr-2 text-primary' />
							<span className='text-sm font-medium text-primary'>
								Smart Agriculture
							</span>
						</div>

						{/* Title */}
						<h2 className='text-3xl md:text-4xl font-bold'>
							Modernizing Farming
							<br />
							Through IoT Innovation
						</h2>

						{/* Story Introduction */}
						<Card className='p-6 bg-card/50 backdrop-blur'>
							<div className='flex items-start gap-4'>
								<div className='bg-secondary/10 rounded-lg w-12 h-12 flex items-center justify-center shrink-0'>
									<CloudRain className='h-6 w-6 text-secondary' />
								</div>
								<div className='space-y-2'>
									<h3 className='font-semibold text-lg'>The Vision</h3>
									<p className='text-muted-foreground'>
										An agricultural engineer set out to help small-scale farmers
										optimize their crop yields through IoT sensors and smart
										irrigation systems, making precision farming accessible to
										all.
									</p>
								</div>
							</div>
						</Card>

						{/* Validation Goals */}
						<Card className='p-6 space-y-4'>
							<div className='flex items-center gap-2 mb-4'>
								<ClipboardList className='h-5 w-5 text-primary' />
								<h3 className='text-xl font-semibold'>Validation Goals</h3>
							</div>
							<ul className='space-y-3'>
								{validationGoals.map((goal, index) => (
									<li
										key={index}
										className='flex items-center gap-2 text-muted-foreground'>
										<span className='h-2 w-2 rounded-full bg-primary' />
										{goal}
									</li>
								))}
							</ul>
						</Card>
					</motion.div>

					{/* Right Column - Challenges */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='space-y-8'>
						{/* Technology Preview */}
						<Card className='p-6 bg-card/50 backdrop-blur mb-8'>
							<div className='flex items-start gap-4'>
								<div className='bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center'>
									<Smartphone className='h-6 w-6 text-primary' />
								</div>
								<div>
									<h3 className='font-semibold mb-2'>Smart Farming Solution</h3>
									<p className='text-sm text-muted-foreground'>
										Combining IoT sensors, weather data, and machine learning to
										provide actionable insights for optimal crop management and
										resource utilization.
									</p>
								</div>
							</div>
						</Card>

						{/* Challenges Grid */}
						<div className='space-y-6'>
							<h3 className='text-xl font-semibold'>Initial Challenges</h3>
							<div className='grid gap-6'>
								{challenges.map((challenge, index) => (
									<Card
										key={index}
										className='p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
										<div className='flex items-start gap-4'>
											<div
												className={`${challenge.bgColor} rounded-lg w-12 h-12 flex items-center justify-center`}>
												<challenge.icon
													className={`h-6 w-6 ${challenge.color}`}
												/>
											</div>
											<div>
												<h4 className='font-semibold mb-1'>
													{challenge.title}
												</h4>
												<p className='text-sm text-muted-foreground'>
													{challenge.description}
												</p>
											</div>
										</div>
									</Card>
								))}
							</div>
						</div>

						{/* CTA */}
						<div className='text-center'>
							<Button size='lg' onClick={scrollToAfter} className='group'>
								See Validation Results
								<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
