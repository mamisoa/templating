// src/app/components/sections/services/integrations.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/src/app/components/ui/card";
import {
	FileText,
	FileSpreadsheet,
	Table,
	AlertCircle,
	Timer,
	FileJson,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Integrations() {
	const integrations = {
		available: [
			{
				icon: FileText,
				title: "PDF Export",
				description:
					"Export detailed validation reports and insights in PDF format",
				color: "text-primary",
				bgColor: "bg-primary/10",
			},
			{
				icon: FileSpreadsheet,
				title: "CSV Export",
				description: "Download your data in CSV format for further analysis",
				color: "text-secondary",
				bgColor: "bg-secondary/10",
			},
			{
				icon: FileJson,
				title: "JSON Export",
				description: "Export structured data in JSON format for developers",
				color: "text-accent",
				bgColor: "bg-accent/10",
			},
		],
		comingSoon: [
			{
				icon: Table,
				title: "Analytics Platforms",
				description: "Integration with Google Analytics, Mixpanel, and more",
			},
			{
				icon: FileSpreadsheet,
				title: "Survey Tools",
				description: "Connect with Google Forms, Typeform, and SurveyMonkey",
			},
			{
				icon: Table,
				title: "CRM Systems",
				description: "Sync with HubSpot, Salesforce, and other CRM platforms",
			},
		],
	};

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
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Export & Integration Options
					</h2>
					<div className='h-1 w-24 bg-secondary mx-auto rounded-full mb-6' />
					<p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
						Export your validation data in multiple formats, with more
						integration options coming soon
					</p>
				</motion.div>

				{/* Available Exports */}
				<div className='space-y-12 max-w-5xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='space-y-6'>
						<h3 className='text-xl font-semibold text-center mb-8'>
							Available Export Formats
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{integrations.available.map((integration) => (
								<Card
									key={integration.title}
									className='p-6 bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
									<div
										className={cn(
											"rounded-lg w-12 h-12 flex items-center justify-center mb-4",
											integration.bgColor
										)}>
										<integration.icon
											className={cn("h-6 w-6", integration.color)}
										/>
									</div>
									<h4 className='text-lg font-semibold mb-2'>
										{integration.title}
									</h4>
									<p className='text-sm text-muted-foreground'>
										{integration.description}
									</p>
								</Card>
							))}
						</div>
					</motion.div>

					{/* Coming Soon */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='space-y-6'>
						<div className='flex items-center justify-center gap-2 mb-8'>
							<Timer className='h-5 w-5 text-muted-foreground' />
							<h3 className='text-xl font-semibold text-center'>Coming Soon</h3>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{integrations.comingSoon.map((integration) => (
								<Card
									key={integration.title}
									className='p-6 bg-card/50 backdrop-blur opacity-75'>
									<div className='rounded-lg w-12 h-12 flex items-center justify-center mb-4 bg-muted'>
										<integration.icon className='h-6 w-6 text-muted-foreground' />
									</div>
									<h4 className='text-lg font-semibold mb-2'>
										{integration.title}
									</h4>
									<p className='text-sm text-muted-foreground'>
										{integration.description}
									</p>
									<div className='flex items-center gap-2 mt-4 text-sm text-muted-foreground'>
										<AlertCircle className='h-4 w-4' />
										<span>Coming soon</span>
									</div>
								</Card>
							))}
						</div>
					</motion.div>
				</div>

				{/* Note */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.5 }}
					className='text-center mt-12'>
					<p className='text-sm text-muted-foreground'>
						We&apos;re constantly working on new integrations. Stay tuned for
						updates!
					</p>
				</motion.div>
			</div>
		</div>
	);
}
