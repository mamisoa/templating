"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/src/app/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetHeader,
	SheetTitle,
} from "@/src/app/components/ui/sheet";
import { cn } from "@/src/lib/utils";

export function NavigationMenu() {
	const pathname = usePathname();

	const menuItems = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Services", href: "#services" },
		{ label: "Use Cases", href: "#use-cases" },
		{ label: "Resources", href: "#resources" },
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
			{menuItems.map((item) => (
				<Link
					key={item.label}
					href={item.href}
					className={cn(
						"text-sm font-medium transition-colors hover:text-primary",
						isActiveLink(item.href) && "text-primary font-semibold"
					)}>
					{item.label}
				</Link>
			))}
		</nav>
	);

	// Mobile Menu
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
					{menuItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className={cn(
								"text-sm font-medium transition-colors hover:text-primary py-2",
								isActiveLink(item.href) && "text-primary font-semibold"
							)}>
							{item.label}
						</Link>
					))}
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
