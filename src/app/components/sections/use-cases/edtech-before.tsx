// src/app/components/sections/use-cases/edtech-before.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Card } from "@/src/app/components/ui/card";
import {
	ArrowRight,
	GraduationCap,
	BookOpen,
	Users,
	DollarSign,
	BrainCircuit,
} from "lucide-react";

export function EdtechBefore() {
	// Scroll to the results section
	const scrollToAfter = () => {
		const nextSection = document.querySelector("[data-section='edtech-after']");
		nextSection?.scrollIntoView({ behavior: "smooth" });
	};

	const challenges = [
		{
			icon: Users,
			title: "Diverse Stakeholders",
			description:
				"Understanding needs of students, teachers, and administrators",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: BrainCircuit,
			title: "AI Integration",
			description: "Balancing automation with pedagogical best practices",
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: DollarSign,
			title: "Pricing Strategy",
			description:
				"Creating a model that works for both public and private schools",
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
	];

	const questions = [
		"How to validate AI personalization effectiveness?",
		"What features do different stakeholders prioritize?",
		"How to price for different school budgets?",
		"What level of training would teachers need?",
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
			data-section='edtech-before'>
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
							<GraduationCap className='h-4 w-4 mr-2 text-primary' />
							<span className='text-sm font-medium text-primary'>
								EdTech Revolution
							</span>
						</div>

						{/* Title */}
						<h2 className='text-3xl md:text-4xl font-bold'>
							Building the Classroom
							<br />
							of the Future
						</h2>

						{/* Story Introduction */}
						<Card className='p-6 bg-card/50 backdrop-blur'>
							<div className='flex items-start gap-4'>
								<div className='bg-secondary/10 rounded-lg w-12 h-12 flex items-center justify-center shrink-0'>
									<BookOpen className='h-6 w-6 text-secondary' />
								</div>
								<div className='space-y-2'>
									<h3 className='font-semibold text-lg'>The Vision</h3>
									<p className='text-muted-foreground'>
										A former teacher set out to revolutionize education by
										creating an AI-powered personalized learning platform,
										aiming to adapt to each student&apos;s unique learning style
										and pace.
									</p>
								</div>
							</div>
						</Card>

						{/* Key Questions */}
						<Card className='p-6 space-y-4'>
							<h3 className='text-xl font-semibold'>
								Key Validation Questions
							</h3>
							<ul className='space-y-3'>
								{questions.map((question, index) => (
									<li
										key={index}
										className='flex items-center gap-2 text-muted-foreground'>
										<span className='h-2 w-2 rounded-full bg-primary' />
										{question}
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
