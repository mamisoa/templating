"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Card } from "@/src/app/components/ui/card";
import { ArrowRight, Target, Lightbulb, HeartHandshake } from "lucide-react";

export default function AboutPage() {
	const teamMembers = [
		{
			name: "Dr. Mamisoa Andriantafika",
			role: "CEO & Co-founder",
			bio: "Ophthalmologist with expertise in Data Science and Data Engineering",
			image: "/about/mamisoa_250x250.jpg",
		},
		{
			name: "Dr. Maïté Liénart",
			role: "Co-founder",
			bio: "Ophthalmologist with a passion for innovative healthcare solutions",
			image: "/about/maite_250x250.jpg",
		},
		{
			name: "Ms. Chloé Andriantafika",
			role: "CMO & Co-founder",
			bio: "College student with fresh perspectives on digital transformation",
			image: "/about/chloe_250x250.jpg",
		},
	];

	const milestones = [
		{
			id: "milestone-1",
			year: "2023",
			quarter: "Q2",
			title: "The Spark",
			description:
				"Founded by healthcare professionals and innovators, born from the need to better validate healthcare solutions and innovations.",
		},
		{
			id: "milestone-2",
			year: "2023",
			quarter: "Q4",
			title: "First Steps",
			description:
				"Launched beta with 100 startups, achieving an 85% validation success rate.",
		},
		{
			id: "milestone-3",
			year: "2024",
			quarter: "Q1",
			title: "Growth & Recognition",
			description:
				"Secured Series A funding, expanded to 10,000+ users worldwide.",
		},
	];

	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-20 overflow-hidden'>
				<div className='absolute inset-0 bg-grid-pattern opacity-5' />
				<div className='absolute inset-0 mask-radial-faded' />

				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-3xl mx-auto text-center'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
							Transforming Startup Validation
						</h1>
						<p className='text-lg md:text-xl text-muted-foreground mb-8'>
							We&apos;re on a mission to revolutionize how entrepreneurs
							validate their ideas and build successful businesses.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Our Story Section */}
			<section className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-4xl mx-auto'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}>
						<h2 className='text-3xl font-bold mb-6'>Our Story</h2>
						<div className='prose prose-lg dark:prose-invert'>
							<p className='text-lg text-muted-foreground'>
								In 2023, our founders Dr. Mamisoa Andriantafika, Dr. Maïté
								Liénart, and Chloé Andriantafika identified a critical gap in
								healthcare innovation. Despite Eric Ries&apos; &quot;The Lean
								Startup&quot; revolutionizing how we think about building
								startups, healthcare entrepreneurs still struggled to implement
								its principles effectively in their unique context. They
								witnessed brilliant healthcare solutions fail not because they
								were ineffective, but because they weren&apos;t validated
								properly with the right methodological approach.
							</p>
							<p className='text-lg text-muted-foreground mt-4'>
								This realization led to a simple but powerful question: What if
								we could create a digital platform that not only guides
								entrepreneurs through the Build-Measure-Learn cycle but enhances
								it with AI and data analytics?
							</p>
							<p className='text-lg text-muted-foreground mt-4'>
								Today, we&apos;re proud to be the digital evolution of Lean
								Startup methodology, helping thousands of entrepreneurs validate
								their ideas and build successful businesses with less risk and
								greater confidence.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Values Section */}
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold mb-12 text-center'>Our Values</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								icon: Lightbulb,
								title: "Innovation First",
								description:
									"We believe in pushing boundaries and challenging the status quo.",
							},
							{
								icon: HeartHandshake,
								title: "Founder Success",
								description:
									"Your success is our success. We're committed to helping entrepreneurs thrive.",
							},
							{
								icon: Target,
								title: "Data-Driven",
								description:
									"We make decisions based on real data, not assumptions.",
							},
						].map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2, duration: 0.6 }}>
								<Card className='p-6 h-full bg-card hover:bg-card/80 transition-all duration-300'>
									<div className='flex flex-col items-center text-center'>
										<div className='p-3 rounded-xl bg-primary/10 mb-4'>
											<value.icon className='h-6 w-6 text-primary' />
										</div>
										<h3 className='text-xl font-semibold mb-2'>
											{value.title}
										</h3>
										<p className='text-muted-foreground'>{value.description}</p>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold mb-12 text-center'>Our Team</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
						{teamMembers.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2, duration: 0.6 }}>
								<Card className='p-6 text-center bg-card hover:bg-card/80 transition-all duration-300'>
									<div className='relative w-24 h-24 mx-auto mb-4'>
										<Image
											src={member.image}
											alt={member.name}
											fill
											className='rounded-full object-cover'
											sizes='(max-width: 96px) 96px, 96px'
											priority
										/>
									</div>
									<h3 className='text-xl font-semibold mb-1'>{member.name}</h3>
									<p className='text-primary mb-2'>{member.role}</p>
									<p className='text-sm text-muted-foreground'>{member.bio}</p>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Timeline Section */}
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold mb-12 text-center'>Our Journey</h2>
					<div className='max-w-4xl mx-auto'>
						{milestones.map((milestone, index) => (
							<motion.div
								key={milestone.id}
								initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2, duration: 0.6 }}
								className='flex items-start mb-12 last:mb-0'>
								<div className='w-24 flex-shrink-0'>
									<div>
										<span className='text-xl font-bold text-primary block'>
											{milestone.year}
										</span>
										<span className='text-sm text-muted-foreground'>
											{milestone.quarter}
										</span>
									</div>
								</div>
								<div className='flex-grow'>
									<h3 className='text-xl font-semibold mb-2'>
										{milestone.title}
									</h3>
									<p className='text-muted-foreground'>
										{milestone.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-3xl mx-auto text-center'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}>
						<h2 className='text-3xl font-bold mb-6'>Join Our Mission</h2>
						<p className='text-lg text-muted-foreground mb-8'>
							Be part of the next generation of startup success stories.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button size='lg' className='gap-2'>
								Start Free Trial
								<ArrowRight className='h-4 w-4' />
							</Button>
							<Button size='lg' variant='outline' className='gap-2'>
								Contact Sales
								<ArrowRight className='h-4 w-4' />
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
