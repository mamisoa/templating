"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CallToAction() {
	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
				hsl(var(--primary)/0.15) 0%, 
				hsl(var(--background)) 50%,
				hsl(var(--secondary)/0.15) 100%)`,
			}}>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-10' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Subtle animated gradient orbs */}
			<div className='absolute inset-0 overflow-hidden'>
				<div
					className='absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full'
					style={{
						background:
							"radial-gradient(circle, hsl(var(--primary)/0.2) 0%, transparent 70%)",
						animation: "float 20s infinite linear",
					}}
				/>
				<div
					className='absolute -bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full'
					style={{
						background:
							"radial-gradient(circle, hsl(var(--secondary)/0.2) 0%, transparent 70%)",
						animation: "float 25s infinite linear reverse",
					}}
				/>
			</div>

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center space-y-8'>
					{/* Highlight Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.4 }}
						className='inline-flex items-center gap-2 rounded-full px-6 py-2 bg-secondary/10 border border-secondary/20 text-secondary'>
						<Sparkles className='h-4 w-4' />
						<span className='text-sm font-medium'>14-Day Free Trial</span>
					</motion.div>

					{/* Main Heading */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
						Start Validating Your
						<br />
						Ideas Today
					</motion.h2>

					{/* Divider with gradient */}
					<div className='h-1 w-24 mx-auto rounded-full modern-gradient' />

					{/* Subheading */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Join hundreds of successful entrepreneurs who transformed their
						ideas into thriving businesses using our platform.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5, duration: 0.5 }}
						className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
						<Button size='lg' className='h-12 px-8 text-base'>
							Start Free Trial
							<ArrowRight className='ml-2 h-4 w-4' />
						</Button>
						<span className='text-sm text-muted-foreground'>
							No credit card required
						</span>
					</motion.div>

					{/* Features List */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6, duration: 0.5 }}
						className='flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground pt-8'>
						{[
							"✓ Cancel anytime",
							"✓ Full platform access",
							"✓ Dedicated support",
							"✓ Regular updates",
						].map((feature) => (
							<span key={feature}>{feature}</span>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Add the floating animation keyframes */}
			<style jsx global>{`
				@keyframes float {
					0% {
						transform: translate(0, 0) rotate(0deg);
					}
					50% {
						transform: translate(100px, 100px) rotate(180deg);
					}
					100% {
						transform: translate(0, 0) rotate(360deg);
					}
				}
			`}</style>
		</div>
	);
}
