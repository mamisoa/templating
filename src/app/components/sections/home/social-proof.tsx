// src/app/components/sections/social-proof.tsx
"use client";

import { motion } from "framer-motion";
import { Star, Quote, UserCircle2, User2 } from "lucide-react";
import { Card } from "@/src/app/components/ui/card";
import { useMemo } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

type Testimonial = {
	id: number;
	name: string;
	role: string;
	company: string;
	content: string;
	rating: number;
	gender: "male" | "female";
	// image field is kept for future use
	image?: string;
};

type CompanyLogo = {
	name: string;
	logo: string;
	width: number;
	height: number;
};

const TestimonialAvatar = ({ gender }: { gender: "male" | "female" }) => (
	<div className='relative h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center'>
		<User2
			className={cn(
				"h-8 w-8",
				gender === "female" ? "text-primary" : "text-secondary"
			)}
		/>
	</div>
);

export function SocialProof() {
	const testimonials: Testimonial[] = useMemo(
		() => [
			{
				id: 1,
				name: "Sarah Chen",
				role: "Founder & CEO",
				company: "TechFlow Solutions",
				content:
					"The AI-powered persona creation saved us weeks of research time. We validated our product-market fit in half the time we expected.",
				rating: 5,
				gender: "female",
			},
			{
				id: 2,
				name: "Michael Rodriguez",
				role: "Product Manager",
				company: "InnovateCorp",
				content:
					"This platform transformed how we approach customer validation. The structured framework and AI insights have been invaluable.",
				rating: 5,
				gender: "male",
			},
			{
				id: 3,
				name: "Emily Watson",
				role: "Startup Founder",
				company: "GreenTech Innovations",
				content:
					"The hypothesis testing dashboard helped us pivot early and save resources. Now we're growing faster than ever.",
				rating: 5,
				gender: "female",
			},
		],
		[]
	);

	const companyLogos: CompanyLogo[] = useMemo(
		() => [
			{ name: "TechFlow", logo: "/logos/techflow.svg", width: 120, height: 40 },
			{
				name: "InnovateCorp",
				logo: "/logos/innovate.svg",
				width: 130,
				height: 40,
			},
			{
				name: "GreenTech",
				logo: "/logos/greentech.svg",
				width: 110,
				height: 40,
			},
			{
				name: "FutureScale",
				logo: "/logos/futurescale.svg",
				width: 140,
				height: 40,
			},
			{
				name: "DataDrive",
				logo: "/logos/datadrive.svg",
				width: 120,
				height: 40,
			},
		],
		[]
	);

	const metrics = useMemo(
		() => [
			{ label: "Projects Validated", value: "500+" },
			{ label: "Success Rate", value: "85%" },
			{ label: "Time Saved", value: "60%" },
			{ label: "Happy Customers", value: "150+" },
		],
		[]
	);

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

	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--primary)/0.05) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--accent)/0.05) 100%)`,
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
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Trusted by Innovative Teams
					</h2>
					<div className='h-1 w-24 bg-accent mx-auto rounded-full mb-4' />
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Join hundreds of successful entrepreneurs who transformed their
						ideas into thriving businesses
					</p>
				</motion.div>

				{/* Testimonials Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid md:grid-cols-3 gap-8 mb-16'>
					{testimonials.map((testimonial) => (
						<motion.div key={testimonial.id} variants={itemVariants}>
							<Card className='h-full flex flex-col bg-card hover:bg-card/80 transition-all duration-300'>
								{/* Content Section */}
								<div className='p-6 flex-grow'>
									{/* Rating */}
									<div className='flex mb-4'>
										{Array.from({ length: testimonial.rating }).map((_, i) => (
											<Star
												key={i}
												className='h-5 w-5 text-yellow-500 fill-current'
											/>
										))}
									</div>

									{/* Quote */}
									<div className='relative'>
										<Quote className='h-8 w-8 text-primary/20 absolute -top-2 -left-2' />
										<p className='text-muted-foreground relative z-10 pl-4'>
											"{testimonial.content}"
										</p>
									</div>
								</div>

								{/* Author Section */}
								<div className='p-6 pt-0'>
									<div className='flex items-center gap-3 border-t border-border/40 pt-6'>
										{/* Using placeholder avatar - easy to switch to Image when available */}
										<TestimonialAvatar gender={testimonial.gender} />
										<div>
											<p className='font-semibold text-lg'>
												{testimonial.name}
											</p>
											<p className='text-sm text-muted-foreground/80'>
												{testimonial.role} at {testimonial.company}
											</p>
										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</motion.div>

				{/* Metrics */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16'>
					{metrics.map((metric, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className='text-center'>
							<h3 className='text-3xl font-bold mb-2'>{metric.value}</h3>
							<p className='text-sm text-muted-foreground'>{metric.label}</p>
						</motion.div>
					))}
				</motion.div>

				{/* Company Logos - Temporarily hidden until we have actual logos */}
				{/* 
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 opacity-50"
        >
          {companyLogos.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
              style={{
                width: company.width,
                height: company.height,
              }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
        */}
			</div>
		</div>
	);
}
