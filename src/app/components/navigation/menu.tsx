import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/src/app/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetHeader,
	SheetTitle,
} from "@/src/app/components/ui/sheet";

export function NavigationMenu() {
	const menuItems = [
		{ label: "About", href: "#about" },
		{ label: "Services", href: "#services" },
		{ label: "Use Cases", href: "#use-cases" },
		{ label: "Resources", href: "#resources" },
		{ label: "Pricing", href: "#pricing" },
	];

	// Desktop Menu
	const DesktopMenu = () => (
		<nav className='hidden md:flex items-center space-x-6'>
			{menuItems.map((item) => (
				<a
					key={item.label}
					href={item.href}
					className='text-sm font-medium transition-colors hover:text-primary'>
					{item.label}
				</a>
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
						<a
							key={item.label}
							href={item.href}
							className='text-sm font-medium transition-colors hover:text-primary py-2'>
							{item.label}
						</a>
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
