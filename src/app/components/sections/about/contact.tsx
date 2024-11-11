// src/app/components/sections/about/contact.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { Input } from "@/src/app/components/ui/input";
import { Textarea } from "@/src/app/components/ui/textarea";
import { Card } from "@/src/app/components/ui/card";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Send,
	MessageSquare,
	CalendarClock,
} from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";

export function ContactSection() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		toast.success("Message sent successfully! We'll get back to you soon.");
		setIsSubmitting(false);
		(e.target as HTMLFormElement).reset();
	};

	const contactInfo = [
		{
			icon: MapPin,
			title: "Office Address",
			content: "Avenue Louise 480, 1050 Brussels, Belgium",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: Phone,
			title: "Phone Number",
			content: "+32 2 555 0123",
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: Mail,
			title: "Email",
			content: "contact@myleanstartup.ai",
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
		{
			icon: Clock,
			title: "Office Hours",
			content: "Monday - Friday: 9:00 - 18:00 CET",
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
	];

	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--accent)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--primary)/0.1) 100%)`,
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
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>Get in Touch</h2>
					<div className='h-1 w-24 bg-accent mx-auto rounded-full mb-6' />
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Have questions about our platform? We&apos;d love to hear from you.
						Get in touch and let us help you validate your startup idea.
					</p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto'>
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='space-y-6'>
						<div className='grid sm:grid-cols-2 gap-4'>
							{contactInfo.map((info) => (
								<Card
									key={info.title}
									className='p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors duration-300'>
									<div className='flex flex-col h-full'>
										<div
											className={`${info.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
											<info.icon className={`h-6 w-6 ${info.color}`} />
										</div>
										<h3 className='font-semibold mb-2'>{info.title}</h3>
										<p className='text-muted-foreground'>{info.content}</p>
									</div>
								</Card>
							))}
						</div>

						{/* Quick Actions */}
						<div className='space-y-4 mt-8'>
							<h3 className='text-xl font-semibold mb-4'>Quick Actions</h3>
							<div className='grid sm:grid-cols-2 gap-4'>
								<Button variant='outline' className='w-full justify-start'>
									<MessageSquare className='mr-2 h-4 w-4' />
									Start Live Chat
								</Button>
								<Button variant='outline' className='w-full justify-start'>
									<CalendarClock className='mr-2 h-4 w-4' />
									Schedule a Demo
								</Button>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						<Card className='p-6 bg-card/50 backdrop-blur'>
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid sm:grid-cols-2 gap-4'>
									<div className='space-y-2'>
										<label
											htmlFor='name'
											className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
											Name
										</label>
										<Input
											id='name'
											placeholder='John Doe'
											required
											disabled={isSubmitting}
										/>
									</div>
									<div className='space-y-2'>
										<label
											htmlFor='email'
											className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
											Email
										</label>
										<Input
											id='email'
											type='email'
											placeholder='john@example.com'
											required
											disabled={isSubmitting}
										/>
									</div>
								</div>
								<div className='space-y-2'>
									<label
										htmlFor='subject'
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
										Subject
									</label>
									<Input
										id='subject'
										placeholder='How can we help?'
										required
										disabled={isSubmitting}
									/>
								</div>
								<div className='space-y-2'>
									<label
										htmlFor='message'
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
										Message
									</label>
									<Textarea
										id='message'
										placeholder='Tell us about your project...'
										className='min-h-[150px]'
										required
										disabled={isSubmitting}
									/>
								</div>
								<Button
									type='submit'
									className='w-full'
									disabled={isSubmitting}>
									{isSubmitting ? (
										<span className='flex items-center'>
											<svg
												className='animate-spin -ml-1 mr-3 h-5 w-5'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'>
												<circle
													className='opacity-25'
													cx='12'
													cy='12'
													r='10'
													stroke='currentColor'
													strokeWidth='4'></circle>
												<path
													className='opacity-75'
													fill='currentColor'
													d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'></path>
											</svg>
											Sending...
										</span>
									) : (
										<span className='flex items-center'>
											<Send className='mr-2 h-4 w-4' />
											Send Message
										</span>
									)}
								</Button>
							</form>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
