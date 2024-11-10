"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Card } from "@/src/app/components/ui/card";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useMemo } from "react";

const PricingTier = ({
	name,
	price,
	description,
	features,
	cta,
	isPopular,
}: {
	name: string;
	price: string;
	description: string;
	features: string[];
	cta: {
		text: string;
		variant: "default" | "outline" | "secondary";
	};
	isPopular?: boolean;
}) => (
	<Card
		className={cn(
			"relative h-full p-6 bg-card transition-all duration-300",
			isPopular && "border-secondary shadow-lg",
			"hover:scale-[1.2] hover:shadow-lg"
		)}>
		{isPopular && (
			<div className='absolute -top-3 left-1/2 -translate-x-1/2'>
				<span className='bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full inline-flex items-center gap-1'>
					<Sparkles className='h-3 w-3' /> Most Popular
				</span>
			</div>
		)}

		<div className='flex flex-col h-full'>
			<div className='text-center mb-6'>
				<h3 className='text-lg font-semibold mb-2'>{name}</h3>
				<div className='mb-2'>
					<span className='text-4xl font-bold'>{price}</span>
					{price !== "Custom" && (
						<span className='text-muted-foreground'>/month</span>
					)}
				</div>
				<p className='text-muted-foreground text-sm'>{description}</p>
			</div>

			<ul className='space-y-3 mb-6 flex-grow'>
				{features.map((feature, i) => (
					<li key={i} className='flex items-start gap-2'>
						<Check className='h-5 w-5 shrink-0 mt-0.5 text-muted-foreground' />
						<span className='text-sm text-muted-foreground'>{feature}</span>
					</li>
				))}
			</ul>

			<Button variant={cta.variant} className='w-full mt-auto' size='lg'>
				{cta.text}
				<ArrowRight className='h-4 w-4 ml-[6px] -mr-1 relative -top-[1px]' />
			</Button>
		</div>
	</Card>
);

export function PricingSection() {
	const pricingTiers = useMemo(
		() => [
			{
				name: "Validate",
				price: "$0",
				description: "Perfect for validating your first startup idea",
				features: [
					"1 project",
					"Basic persona creation",
					"Limited AI assistance",
					"Basic analytics",
					"Community support",
				],
				cta: {
					text: "Get Started",
					variant: "outline" as const,
				},
			},
			{
				name: "Scale",
				price: "$49",
				description: "For growing startups with multiple projects",
				features: [
					"5 projects",
					"Advanced persona tools",
					"Full AI assistance",
					"Advanced analytics",
					"Email support",
					"Team collaboration",
				],
				cta: {
					text: "Start Free Trial",
					variant: "default" as const,
				},
				isPopular: true,
			},
			{
				name: "Transform",
				price: "Custom",
				description: "Enterprise-grade features for large organizations",
				features: [
					"Unlimited projects",
					"Custom integration",
					"Dedicated support",
					"Advanced security",
					"Training & onboarding",
					"Custom workflows",
				],
				cta: {
					text: "Contact Sales",
					variant: "secondary" as const,
				},
			},
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
          hsl(var(--secondary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--accent)/0.1) 100%)`,
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
						Simple, Transparent Pricing
					</h2>
					<div className='h-1 w-24 bg-secondary mx-auto rounded-full mb-4' />
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Choose the perfect plan for your startup validation needs
					</p>
				</motion.div>

				{/* Pricing Grid */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
					{pricingTiers.map((tier) => (
						<motion.div key={tier.name} variants={itemVariants}>
							<PricingTier {...tier} />
						</motion.div>
					))}
				</motion.div>

				{/* Additional Info */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.5 }}
					className='text-center mt-12'>
					<p className='text-sm text-muted-foreground'>
						All plans include our core validation tools and methodology.{" "}
						<a href='#' className='text-primary hover:underline'>
							Compare plans in detail
						</a>
					</p>
				</motion.div>
			</div>
		</div>
	);
}
