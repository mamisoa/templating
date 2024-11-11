// src/app/components/sections/about/our-mission.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/src/app/components/ui/card";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

export function OurMission() {
	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--primary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--accent)/0.1) 100%)`,
			}}>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Mission</h2>
					<div className='h-1 w-24 bg-primary mx-auto rounded-full mb-6' />
					<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
						To revolutionize startup validation by combining AI technology with
						lean methodology, making entrepreneurial success more accessible and
						predictable.
					</p>
				</motion.div>

				<div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
					{/* Vision */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<Card className='p-8 h-full bg-card/50 backdrop-blur'>
							<div className='flex flex-col h-full'>
								<div className='rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-6'>
									<Target className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-2xl font-bold mb-4'>Our Vision</h3>
								<p className='text-muted-foreground flex-grow'>
									We envision a future where every entrepreneur has access to
									sophisticated AI tools that dramatically improve their chances
									of success. By automating the validation process, we aim to
									help innovators focus on what truly matters - building
									solutions that make a difference.
								</p>
							</div>
						</Card>
					</motion.div>

					{/* Purpose */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}>
						<Card className='p-8 h-full bg-card/50 backdrop-blur'>
							<div className='flex flex-col h-full'>
								<div className='rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-6'>
									<Lightbulb className='h-6 w-6 text-secondary' />
								</div>
								<h3 className='text-2xl font-bold mb-4'>Our Purpose</h3>
								<p className='text-muted-foreground flex-grow'>
									We believe that great ideas deserve the best chance of
									success. By democratizing access to advanced validation tools,
									we&apos;re empowering entrepreneurs to build sustainable
									businesses that can truly impact their communities and the
									world.
								</p>
							</div>
						</Card>
					</motion.div>
				</div>

				{/* Impact Metrics */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto'>
					{[
						{
							icon: Users,
							label: "Entrepreneurs Helped",
							value: "100+",
							color: "text-primary",
						},
						{
							icon: TrendingUp,
							label: "Success Rate",
							value: "85%",
							color: "text-secondary",
						},
						{
							icon: Target,
							label: "Ideas Validated",
							value: "150+",
							color: "text-accent",
						},
						{
							icon: Lightbulb,
							label: "Time Saved",
							value: "60%",
							color: "text-primary",
						},
					].map((metric) => (
						<Card
							key={metric.label}
							className='p-4 text-center bg-card/50 backdrop-blur'>
							<metric.icon className={`h-6 w-6 ${metric.color} mx-auto mb-2`} />
							<div className='text-2xl font-bold mb-1'>{metric.value}</div>
							<div className='text-sm text-muted-foreground'>
								{metric.label}
							</div>
						</Card>
					))}
				</motion.div>
			</div>
		</div>
	);
}
