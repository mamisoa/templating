"use client";
import { motion } from "framer-motion";
import { Card } from "@/src/app/components/ui/card";
import { Button } from "@/src/app/components/ui/button";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/src/app/components/ui/tabs";
import {
	Users,
	MessageSquare,
	BookOpen,
	Calendar,
	Award,
	Globe,
	ArrowRight,
	ExternalLink,
	Video,
	Slack,
} from "lucide-react";

const communityFeatures = {
	forums: [
		{
			title: "Product Validation",
			description: "Discuss your validation strategy with experienced founders",
			members: 1250,
			threads: 320,
			icon: MessageSquare,
			color: "text-primary",
			bgColor: "bg-primary/10",
		},
		{
			title: "Customer Interviews",
			description: "Share techniques and get feedback on interview approaches",
			members: 980,
			threads: 245,
			icon: Users,
			color: "text-secondary",
			bgColor: "bg-secondary/10",
		},
		{
			title: "Market Research",
			description: "Collaborate on market research and share insights",
			members: 870,
			threads: 190,
			icon: Globe,
			color: "text-accent",
			bgColor: "bg-accent/10",
		},
	],
	events: [
		{
			title: "Monthly Validation Workshop",
			description: "Interactive session on lean startup methodology",
			date: "Last Thursday of every month",
			type: "Workshop",
			icon: Video,
		},
		{
			title: "Founder Stories",
			description: "Successful entrepreneurs share their validation journey",
			date: "Every Tuesday",
			type: "Webinar",
			icon: BookOpen,
		},
		{
			title: "Office Hours",
			description: "Get direct feedback from lean startup experts",
			date: "Wednesdays & Fridays",
			type: "Mentoring",
			icon: Calendar,
		},
	],
	programs: [
		{
			title: "Validation Champions",
			description: "Recognition program for successful validations",
			participants: 150,
			icon: Award,
		},
		{
			title: "Peer Groups",
			description: "Join a small group of founders at your stage",
			participants: 200,
			icon: Users,
		},
		{
			title: "Slack Community",
			description: "Real-time discussions and networking",
			participants: 2500,
			icon: Slack,
		},
	],
};

export function Community() {
	return (
		<div className='min-h-screen w-full py-12' id='community'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-left mb-12'>
					<h2 className='text-3xl font-bold mb-4'>Community</h2>
					<p className='text-lg text-muted-foreground max-w-3xl'>
						Join a thriving community of entrepreneurs and startup founders.
						Share experiences, learn from peers, and accelerate your validation
						journey.
					</p>
				</motion.div>

				{/* Community Tabs */}
				<Tabs defaultValue='forums' className='space-y-8'>
					<TabsList>
						<TabsTrigger value='forums'>Discussion Forums</TabsTrigger>
						<TabsTrigger value='events'>Events</TabsTrigger>
						<TabsTrigger value='programs'>Programs</TabsTrigger>
					</TabsList>

					{/* Forums Content */}
					<TabsContent value='forums'>
						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							{communityFeatures.forums.map((forum, index) => (
								<motion.div
									key={forum.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}>
									<Card className='p-6 h-full flex flex-col bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
										<div className='flex items-start gap-4'>
											<div
												className={`rounded-lg w-12 h-12 flex items-center justify-center ${forum.bgColor}`}>
												<forum.icon className={`h-6 w-6 ${forum.color}`} />
											</div>
											<div>
												<h3 className='font-semibold mb-2'>{forum.title}</h3>
												<p className='text-sm text-muted-foreground mb-4'>
													{forum.description}
												</p>
												<div className='flex items-center gap-4 text-sm text-muted-foreground'>
													<span>{forum.members} members</span>
													<span>{forum.threads} discussions</span>
												</div>
											</div>
										</div>
										<Button
											variant='ghost'
											className='mt-4 w-full justify-between group'>
											Join Discussion
											<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
										</Button>
									</Card>
								</motion.div>
							))}
						</div>
					</TabsContent>

					{/* Events Content */}
					<TabsContent value='events'>
						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							{communityFeatures.events.map((event, index) => (
								<motion.div
									key={event.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}>
									<Card className='p-6 h-full flex flex-col bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
										<div className='flex items-start gap-4'>
											<div className='rounded-lg w-12 h-12 flex items-center justify-center bg-secondary/10'>
												<event.icon className='h-6 w-6 text-secondary' />
											</div>
											<div>
												<span className='text-xs font-medium px-2 py-1 rounded-full bg-muted'>
													{event.type}
												</span>
												<h3 className='font-semibold mt-2 mb-2'>
													{event.title}
												</h3>
												<p className='text-sm text-muted-foreground mb-2'>
													{event.description}
												</p>
												<p className='text-sm font-medium'>{event.date}</p>
											</div>
										</div>
										<Button
											variant='ghost'
											className='mt-4 w-full justify-between group'>
											Register Now
											<ExternalLink className='h-4 w-4 transition-transform group-hover:translate-x-1' />
										</Button>
									</Card>
								</motion.div>
							))}
						</div>
					</TabsContent>

					{/* Programs Content */}
					<TabsContent value='programs'>
						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							{communityFeatures.programs.map((program, index) => (
								<motion.div
									key={program.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}>
									<Card className='p-6 h-full flex flex-col bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300'>
										<div className='flex items-start gap-4'>
											<div className='rounded-lg w-12 h-12 flex items-center justify-center bg-accent/10'>
												<program.icon className='h-6 w-6 text-accent' />
											</div>
											<div>
												<h3 className='font-semibold mb-2'>{program.title}</h3>
												<p className='text-sm text-muted-foreground mb-4'>
													{program.description}
												</p>
												<p className='text-sm font-medium'>
													{program.participants} active participants
												</p>
											</div>
										</div>
										<Button
											variant='ghost'
											className='mt-4 w-full justify-between group'>
											Learn More
											<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
										</Button>
									</Card>
								</motion.div>
							))}
						</div>
					</TabsContent>
				</Tabs>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.5 }}
					className='text-center mt-12'>
					<Card className='p-8 bg-card/50 backdrop-blur max-w-2xl mx-auto'>
						<h3 className='text-2xl font-bold mb-4'>
							Join Our Community Today
						</h3>
						<p className='text-muted-foreground mb-6'>
							Connect with founders, share experiences, and accelerate your
							startup validation journey with our supportive community.
						</p>
						<Button size='lg' className='gap-2'>
							Get Started
							<ArrowRight className='h-4 w-4' />
						</Button>
					</Card>
				</motion.div>
			</div>
		</div>
	);
}

export default Community;
