// src/app/components/sections/about/our-story.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/src/app/components/ui/card";
import { Calendar, Code, BookOpen } from "lucide-react";

export function OurStory() {
	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--secondary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--primary)/0.1) 100%)`,
			}}>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Story Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='space-y-8'>
						<div className='space-y-4'>
							<h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
								Our Origin Story
							</h2>
							<div className='h-1 w-24 bg-secondary rounded-full' />
							<p className='text-lg text-muted-foreground'>
								myleanstartup.ai emerged from a unique convergence of healthcare
								expertise, technological innovation, and entrepreneurial spirit.
							</p>
						</div>

						<div className='space-y-6'>
							<Card className='p-6 bg-card/50 backdrop-blur'>
								<div className='flex items-start gap-4'>
									<Calendar className='h-6 w-6 text-primary mt-1' />
									<div>
										<h3 className='font-semibold mb-2'>
											April 2024: The Beginning
										</h3>
										<p className='text-muted-foreground'>
											Born during the foundation of transtorm.ai, our journey
											began with a vision to automate and streamline the startup
											validation process using AI.
										</p>
									</div>
								</div>
							</Card>

							<Card className='p-6 bg-card/50 backdrop-blur'>
								<div className='flex items-start gap-4'>
									<BookOpen className='h-6 w-6 text-secondary mt-1' />
									<div>
										<h3 className='font-semibold mb-2'>
											Lean Startup Methodology
										</h3>
										<p className='text-muted-foreground'>
											Inspired by Eric Ries&apos;s Lean Startup principles, we
											developed AI-powered tools to generate personas, test
											cards, and customer interviews.
										</p>
									</div>
								</div>
							</Card>

							<Card className='p-6 bg-card/50 backdrop-blur'>
								<div className='flex items-start gap-4'>
									<Code className='h-6 w-6 text-accent mt-1' />
									<div>
										<h3 className='font-semibold mb-2'>
											Innovation Through AI
										</h3>
										<p className='text-muted-foreground'>
											What started as internal validation scripts evolved into a
											comprehensive platform, helping entrepreneurs validate
											their ideas with confidence.
										</p>
									</div>
								</div>
							</Card>
						</div>
					</motion.div>

					{/* Founders Section */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='space-y-8'>
						<h3 className='text-2xl font-bold text-center mb-8'>
							Meet Our Founders
						</h3>

						<div className='grid gap-8'>
							{/* Founder 1 */}
							<Card className='p-6'>
								<div className='flex flex-col md:flex-row gap-6 items-center'>
									<div className='relative w-40 h-40 rounded-full overflow-hidden'>
										<Image
											src='/about/mamisoa_250x250.jpg'
											alt='Dr. Mamisoa ANDRIANTAFIKA'
											fill
											className='object-cover'
										/>
									</div>
									<div className='flex-1 text-center md:text-left'>
										<h4 className='text-xl font-semibold mb-2'>
											Dr. Mamisoa ANDRIANTAFIKA
										</h4>
										<p className='text-primary font-medium mb-2'>
											CEO & Founder
										</p>
										<p className='text-muted-foreground text-sm'>
											An ophthalmologist turned tech innovator, Dr. Mamisoa
											combines medical precision with data science expertise to
											revolutionize startup validation through AI.
										</p>
									</div>
								</div>
							</Card>

							{/* Founder 2 */}
							<Card className='p-6'>
								<div className='flex flex-col md:flex-row gap-6 items-center'>
									<div className='relative w-40 h-40 rounded-full overflow-hidden'>
										<Image
											src='/about/chloe_250x250.jpg'
											alt='Chloé ANDRIANTAFIKA'
											fill
											className='object-cover'
										/>
									</div>
									<div className='flex-1 text-center md:text-left'>
										<h4 className='text-xl font-semibold mb-2'>
											Chloé ANDRIANTAFIKA
										</h4>
										<p className='text-secondary font-medium mb-2'>
											CMO & Co-Founder
										</p>
										<p className='text-muted-foreground text-sm'>
											A young tech enthusiast and high school student, Chloé
											brings fresh perspectives and digital-native insights to
											modern entrepreneurship.
										</p>
									</div>
								</div>
							</Card>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
