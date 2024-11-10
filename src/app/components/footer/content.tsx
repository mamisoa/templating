"use client";

import { useId, useState } from "react";
import { Button } from "@/src/app/components/ui/button";
import { Input } from "@/src/app/components/ui/input";
import { Separator } from "@/src/app/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { toast } from "react-toastify";

// Email validation helper
const isValidEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export function Footer() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const emailInputId = useId();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email) {
			toast.error("Please enter your email address");
			return;
		}

		if (!isValidEmail(email)) {
			toast.error("Please enter a valid email address");
			return;
		}

		setIsLoading(true);

		try {
			// Here you would typically call your newsletter signup API
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
			toast.success("Thank you for subscribing to our newsletter!");
			setEmail("");
		} catch (error) {
			toast.error(
				"Something went wrong: " + { error } + ". Please try again later."
			);
		} finally {
			setIsLoading(false);
		}
	};

	const footerSections = {
		company: {
			title: "Company",
			links: [
				{ label: "About", href: "/about" },
				{ label: "Careers", href: "/careers" },
				{ label: "Contact", href: "/contact" },
				{ label: "Partners", href: "/partners" },
			],
		},
		resources: {
			title: "Resources",
			links: [
				{ label: "Blog", href: "/blog" },
				{ label: "Guides", href: "/guides" },
				{ label: "Case Studies", href: "/case-studies" },
				{ label: "Documentation", href: "/docs" },
			],
		},
		legal: {
			title: "Legal",
			links: [
				{ label: "Privacy Policy", href: "/privacy" },
				{ label: "Terms of Service", href: "/terms" },
				{ label: "GDPR", href: "/gdpr" },
				{ label: "Cookie Policy", href: "/cookies" },
			],
		},
	};

	const socialLinks = [
		{ label: "GitHub", href: "https://github.com/transtorm-ai" },
		{ label: "Twitter", href: "https://twitter.com/transtorm_ai" },
		{ label: "LinkedIn", href: "https://linkedin.com/company/transtorm-ai" },
		{ label: "Discord", href: "https://discord.gg/transtorm-ai" },
	];

	return (
		<footer className='w-full py-12 md:py-16 lg:py-20 bg-background'>
			<div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
					{/* Company Info - Takes up more space */}
					<div className='lg:col-span-4'>
						<div className='space-y-4'>
							<h3 className='text-lg font-bold'>transtorm.ai</h3>
							<p className='text-sm text-muted-foreground max-w-xs'>
								Empowering entrepreneurs with AI-driven lean startup validation
								tools to build successful businesses.
							</p>
							<div className='flex flex-wrap gap-4'>
								{socialLinks.map(({ label, href }) => (
									<a
										key={label}
										href={href}
										target='_blank'
										rel='noopener noreferrer'
										className='text-sm text-muted-foreground hover:text-primary transition-colors'>
										{label}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Links Sections */}
					{Object.entries(footerSections).map(([key, section]) => (
						<div key={key} className='lg:col-span-2'>
							<div className='space-y-4'>
								<h3 className='text-lg font-bold'>{section.title}</h3>
								<ul className='space-y-2'>
									{section.links.map(({ label, href }) => (
										<li key={label}>
											<a
												href={href}
												className='text-sm text-muted-foreground hover:text-primary transition-colors'>
												{label}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}

					{/* Newsletter Section */}
					<div className='lg:col-span-2'>
						<div className='space-y-4'>
							<h3 className='text-lg font-bold'>Stay Updated</h3>
							<p className='text-sm text-muted-foreground'>
								Get the latest updates on product features and lean startup
								methodologies.
							</p>
							<form onSubmit={handleSubmit} className='space-y-2'>
								<div className='flex flex-col sm:flex-row gap-2'>
									<Input
										id={emailInputId}
										type='email'
										placeholder='Enter your email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										disabled={isLoading}
										className='min-w-[240px] flex-grow'
									/>
									<Button
										type='submit'
										size='sm'
										disabled={isLoading}
										className='whitespace-nowrap'>
										{isLoading ? (
											<span className='animate-spin'>↻</span>
										) : (
											<>
												Subscribe <ArrowRight className='h-4 w-4 ml-2' />
											</>
										)}
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>

				<Separator className='my-8' />

				{/* Bottom Section */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
					<div className='flex flex-wrap justify-center md:justify-start gap-4'>
						{footerSections.legal.links.map(({ label, href }) => (
							<a
								key={label}
								href={href}
								className='text-sm text-muted-foreground hover:text-primary transition-colors'>
								{label}
							</a>
						))}
					</div>
					<p className='text-sm text-muted-foreground text-center md:text-right'>
						© {new Date().getFullYear()} transtorm.ai. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
