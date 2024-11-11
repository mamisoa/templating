// src/app/components/navigation/menu.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/src/app/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetHeader,
	SheetTitle,
} from "@/src/app/components/ui/sheet";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/src/app/components/ui/dropdown-menu";
import { cn } from "@/src/lib/utils";

export function NavigationMenu() {
	const pathname = usePathname();

	const resourcesLinks = [
		{ label: "Templates & Tools", href: "/resources#templatesAndTools" },
		{ label: "Documentation", href: "/resources#documentation" },
		{ label: "Community", href: "/resources#community" },
	];

	const menuItems = [
		{ label: "About", href: "/about" },
		{ label: "Services", href: "/services" },
		{ label: "Use Cases", href: "#use-cases" },
		{
			label: "Resources",
			href: "/resources",
			dropdown: true,
			items: resourcesLinks,
		},
		{ label: "Pricing", href: "#pricing" },
	];

	const isActiveLink = (href: string) => {
		if (href === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(href);
	};

	// Desktop Menu
	const DesktopMenu = () => (
		<nav className='hidden md:flex items-center space-x-6'>
			{menuItems.map((item) =>
				item.dropdown ? (
					<DropdownMenu key={item.label}>
						<DropdownMenuTrigger className='flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary'>
							{item.label}
							<ChevronDown className='h-4 w-4' />
						</DropdownMenuTrigger>
						<DropdownMenuContent align='start'>
							{item.items?.map((subItem) => (
								<DropdownMenuItem key={subItem.href}>
									<Link
										href={subItem.href}
										className={cn(
											"w-full text-sm",
											isActiveLink(subItem.href) && "text-primary font-semibold"
										)}>
										{subItem.label}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				) : (
					<Link
						key={item.label}
						href={item.href}
						className={cn(
							"text-sm font-medium transition-colors hover:text-primary",
							isActiveLink(item.href) && "text-primary font-semibold"
						)}>
						{item.label}
					</Link>
				)
			)}
		</nav>
	);

	// Mobile Menu (updated to include dropdown items)
	const MobileMenu = () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon' className='md:hidden'>
					<Menu className='h-6 w-6' />
					<span className='sr-only'>Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='right' className='w-[80vw] sm:w-[350px]'>
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<nav
					className='flex flex-col space-y-4 mt-8'
					aria-label='Mobile navigation'>
					{menuItems.map((item) =>
						item.dropdown ? (
							<div key={item.label} className='space-y-2'>
								<span className='text-sm font-medium text-muted-foreground'>
									{item.label}
								</span>
								<div className='pl-4 space-y-2'>
									{item.items?.map((subItem) => (
										<Link
											key={subItem.href}
											href={subItem.href}
											className={cn(
												"text-sm font-medium transition-colors hover:text-primary block py-2",
												isActiveLink(subItem.href) &&
													"text-primary font-semibold"
											)}>
											{subItem.label}
										</Link>
									))}
								</div>
							</div>
						) : (
							<Link
								key={item.label}
								href={item.href}
								className={cn(
									"text-sm font-medium transition-colors hover:text-primary py-2",
									isActiveLink(item.href) && "text-primary font-semibold"
								)}>
								{item.label}
							</Link>
						)
					)}
					<div className='flex flex-col space-y-2 mt-4 pt-4 border-t'>
						<Button variant='outline' className='w-full'>
							Login
						</Button>
						<Button className='w-full'>Get Started</Button>
					</div>
				</nav>
			</SheetContent>
		</Sheet>
	);

	return (
		<>
			<DesktopMenu />
			<MobileMenu />
		</>
	);
}

export default NavigationMenu;
