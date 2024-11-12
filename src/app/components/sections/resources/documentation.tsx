"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/src/app/components/ui/card";
import { Input } from "@/src/app/components/ui/input";
import { Button } from "@/src/app/components/ui/button";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/src/app/components/ui/tabs";
import {
	Book,
	BookOpen,
	Code2,
	FileCode2,
	Search,
	Users,
	Lightbulb,
	ChevronRight,
	Bot,
} from "lucide-react";

const mockDocs = {
	gettingStarted: [
		{
			title: "Platform Overview",
			description: "Introduction to the Lean Startup validation platform",
			icon: Book,
			link: "#overview",
		},
		{
			title: "Quick Start Guide",
			description: "Get up and running in under 10 minutes",
			icon: Lightbulb,
			link: "#quickstart",
		},
		{
			title: "Core Concepts",
			description: "Understanding key Lean Startup principles",
			icon: BookOpen,
			link: "#concepts",
		},
	],
	aiFeatures: [
		{
			title: "AI-Powered Personas",
			description: "Creating data-driven customer personas",
			icon: Bot,
			link: "#personas",
		},
		{
			title: "Test Card Generation",
			description: "Automating hypothesis creation and testing",
			icon: FileCode2,
			link: "#testcards",
		},
		{
			title: "Interview Analysis",
			description: "Processing customer interview feedback",
			icon: Users,
			link: "#interviews",
		},
	],
	apiDocs: [
		{
			title: "API Reference",
			description: "Complete API documentation for integrations",
			icon: Code2,
			link: "#api",
		},
		{
			title: "Webhooks",
			description: "Real-time event notifications",
			icon: FileCode2,
			link: "#webhooks",
		},
	],
};

export function Documentation() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className='min-h-screen w-full py-12' id='documentation'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-left mb-12'>
					<h2 className='text-3xl font-bold mb-4'>Documentation</h2>
					<p className='text-lg text-muted-foreground max-w-3xl'>
						Everything you need to know about using our platform effectively.
						From getting started guides to advanced API documentation.
					</p>
				</motion.div>

				{/* Search Bar */}
				<div className='max-w-xl mb-8'>
					<div className='relative'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
						<Input
							type='search'
							placeholder='Search documentation...'
							className='pl-10'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
				</div>

				{/* Documentation Tabs */}
				<Tabs defaultValue='getting-started' className='space-y-8'>
					<TabsList>
						<TabsTrigger value='getting-started'>Getting Started</TabsTrigger>
						<TabsTrigger value='ai-features'>AI Features</TabsTrigger>
						<TabsTrigger value='api'>API</TabsTrigger>
					</TabsList>

					{/* Getting Started Content */}
					<TabsContent value='getting-started'>
						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							{mockDocs.gettingStarted.map((item, index) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}>
									<Card className='p-6 h-full flex flex-col bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
										<div className='flex items-start gap-4'>
											<div className='rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10'>
												<item.icon className='h-6 w-6 text-primary' />
											</div>
											<div>
												<h3 className='font-semibold mb-2'>{item.title}</h3>
												<p className='text-sm text-muted-foreground'>
													{item.description}
												</p>
											</div>
										</div>
										<Button
											variant='ghost'
											className='mt-4 w-full justify-between'
											asChild>
											<a href={item.link}>
												Read More
												<ChevronRight className='h-4 w-4' />
											</a>
										</Button>
									</Card>
								</motion.div>
							))}
						</div>
					</TabsContent>

					{/* AI Features Content */}
					<TabsContent value='ai-features'>
						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							{mockDocs.aiFeatures.map((item, index) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}>
									<Card className='p-6 h-full flex flex-col bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
										<div className='flex items-start gap-4'>
											<div className='rounded-lg w-12 h-12 flex items-center justify-center bg-secondary/10'>
												<item.icon className='h-6 w-6 text-secondary' />
											</div>
											<div>
												<h3 className='font-semibold mb-2'>{item.title}</h3>
												<p className='text-sm text-muted-foreground'>
													{item.description}
												</p>
											</div>
										</div>
										<Button
											variant='ghost'
											className='mt-4 w-full justify-between'
											asChild>
											<a href={item.link}>
												Read More
												<ChevronRight className='h-4 w-4' />
											</a>
										</Button>
									</Card>
								</motion.div>
							))}
						</div>
					</TabsContent>

					{/* API Content */}
					<TabsContent value='api'>
						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							{mockDocs.apiDocs.map((item, index) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}>
									<Card className='p-6 h-full flex flex-col bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
										<div className='flex items-start gap-4'>
											<div className='rounded-lg w-12 h-12 flex items-center justify-center bg-accent/10'>
												<item.icon className='h-6 w-6 text-accent' />
											</div>
											<div>
												<h3 className='font-semibold mb-2'>{item.title}</h3>
												<p className='text-sm text-muted-foreground'>
													{item.description}
												</p>
											</div>
										</div>
										<Button
											variant='ghost'
											className='mt-4 w-full justify-between'
											asChild>
											<a href={item.link}>
												Read More
												<ChevronRight className='h-4 w-4' />
											</a>
										</Button>
									</Card>
								</motion.div>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}

export default Documentation;
