// src/app/components/sections/resources/templates-and-tools.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/src/app/components/ui/card";
import {
	FileText,
	Download,
	FileSpreadsheet,
	ClipboardCheck,
	Users,
	MessageSquare,
	ArrowRight,
} from "lucide-react";
import { Button } from "@/src/app/components/ui/button";
import { cn } from "@/src/lib/utils";

type Template = {
	icon: typeof FileText;
	title: string;
	description: string;
	category: string;
	downloads: number;
	color: string;
	bgColor: string;
};

export function TemplatesAndTools() {
	const templates: Template[] = [
		{
			icon: FileText,
			title: "Customer Persona Template",
			description:
				"Detailed template for creating comprehensive customer personas",
			category: "Validation",
			downloads: 1250,
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: ClipboardCheck,
			title: "Hypothesis Testing Cards",
			description:
				"Structured format for documenting and validating assumptions",
			category: "Testing",
			downloads: 980,
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			icon: MessageSquare,
			title: "Interview Script Builder",
			description:
				"Framework for creating effective customer interview scripts",
			category: "Research",
			downloads: 870,
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
		{
			icon: FileSpreadsheet,
			title: "Progress Tracking Sheet",
			description: "Template for monitoring validation metrics and milestones",
			category: "Analytics",
			downloads: 750,
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			icon: Users,
			title: "Stakeholder Mapping Tool",
			description: "Template for identifying and analyzing key stakeholders",
			category: "Planning",
			downloads: 630,
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
	];

	return (
		<div className='min-h-screen w-full py-12' id='templates'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-left mb-12'>
					<h2 className='text-3xl font-bold mb-4'>Templates & Tools</h2>
					<p className='text-lg text-muted-foreground max-w-3xl'>
						Download ready-to-use templates and tools to streamline your startup
						validation process. Each resource is designed based on lean startup
						principles and best practices.
					</p>
				</motion.div>

				{/* Templates Grid */}
				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{templates.map((template, index) => (
						<motion.div
							key={template.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}>
							<Card className='p-6 h-full flex flex-col bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
								<div className='flex items-start gap-4 mb-4'>
									<div
										className={cn(
											"rounded-lg w-12 h-12 flex items-center justify-center",
											template.bgColor
										)}>
										<template.icon className={cn("h-6 w-6", template.color)} />
									</div>
									<div>
										<span className='text-xs font-medium px-2 py-1 rounded-full bg-muted'>
											{template.category}
										</span>
										<h3 className='text-lg font-semibold mt-2'>
											{template.title}
										</h3>
									</div>
								</div>

								<p className='text-muted-foreground flex-grow mb-4'>
									{template.description}
								</p>

								<div className='flex items-center justify-between mt-auto'>
									<span className='text-sm text-muted-foreground flex items-center gap-1'>
										<Download className='h-4 w-4' />
										{template.downloads.toLocaleString()} downloads
									</span>
									<Button variant='ghost' size='sm' className='gap-1'>
										Download
										<ArrowRight className='h-4 w-4' />
									</Button>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
