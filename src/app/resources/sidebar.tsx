// src/app/resources/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import { FileText, BookText, Users } from "lucide-react";

const sidebarItems = [
	{
		title: "Templates & Tools",
		href: "/resources#templatesAndTools",
		icon: FileText,
	},
	{
		title: "Documentation",
		href: "/resources#documentation",
		icon: BookText,
	},
	{
		title: "Community",
		href: "/resources#community",
		icon: Users,
	},
];

export function ResourcesSidebar() {
	const pathname = usePathname();

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		const sectionId = href.split("#")[1];
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className='w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='space-y-4 py-4'>
				<div className='px-3 py-2'>
					<h2 className='mb-2 px-4 text-lg font-semibold'>Resources</h2>
					<div className='space-y-1'>
						{sidebarItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={(e) => handleClick(e, item.href)}
								className={cn(
									"flex items-center rounded-lg px-3 py-2 text-sm transition-colors",
									"hover:bg-accent hover:text-accent-foreground",
									pathname === item.href
										? "bg-accent text-accent-foreground"
										: "transparent"
								)}>
								<item.icon className='mr-2 h-4 w-4' />
								{item.title}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
