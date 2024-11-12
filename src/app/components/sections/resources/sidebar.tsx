// src/app/resources/components/sidebar.tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";
import { FileText, BookText, Users } from "lucide-react";
import { Button } from "@/src/app/components/ui/button";

// Define menuItems outside the component since it's static
const menuItems = [
	{
		title: "Templates & Tools",
		id: "templates",
		icon: FileText,
	},
	{
		title: "Documentation",
		id: "documentation",
		icon: BookText,
	},
	{
		title: "Community",
		id: "community",
		icon: Users,
	},
] as const;

export function ResourcesSidebar() {
	const [activeSection, setActiveSection] = useState("");

	// Update active section based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			const sections = menuItems
				.map((item) => document.getElementById(item.id))
				.filter(Boolean);

			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (const section of sections) {
				if (!section) continue;

				const sectionTop = section.offsetTop;
				const sectionBottom = sectionTop + section.offsetHeight;

				if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
					setActiveSection(section.id);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<aside className='fixed top-14 left-0 w-64 h-[calc(100vh-3.5rem)] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='h-full px-4 py-6'>
				<div className='mb-6 px-2'>
					<h2 className='text-lg font-semibold mb-2'>Resources</h2>
					<p className='text-sm text-muted-foreground'>
						Everything you need to validate your startup
					</p>
				</div>

				<nav className='space-y-1'>
					{menuItems.map((item) => {
						const Icon = item.icon;
						return (
							<Button
								key={item.id}
								variant='ghost'
								className={cn(
									"w-full justify-start gap-2",
									activeSection === item.id &&
										"bg-accent text-accent-foreground"
								)}
								onClick={() => scrollToSection(item.id)}>
								<Icon className='h-4 w-4' />
								{item.title}
							</Button>
						);
					})}
				</nav>

				{/* Optional: Add additional sidebar content here */}
				<div className='absolute bottom-6 left-4 right-4'>
					<div className='rounded-lg border p-4 bg-card'>
						<h3 className='font-medium mb-2'>Need Help?</h3>
						<p className='text-sm text-muted-foreground mb-3'>
							Get in touch with our support team
						</p>
						<Button className='w-full' variant='secondary'>
							Contact Support
						</Button>
					</div>
				</div>
			</div>
		</aside>
	);
}
