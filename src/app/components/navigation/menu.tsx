import React from "react";
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
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/src/app/components/ui/collapsible";

export function NavigationMenu() {
	const menuItems = [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Services",
			href: "#services",
			dropdownItems: [
				{ label: "Consulting", href: "/services/consulting" },
				{ label: "Training", href: "/services/training" },
				{ label: "Implementation", href: "/services/implementation" },
			],
		},
		{
			label: "Use Cases",
			href: "#use-cases",
			dropdownItems: [
				{ label: "Startups", href: "/use-cases/startups" },
				{ label: "Enterprise", href: "/use-cases/enterprise" },
				{ label: "Government", href: "/use-cases/government" },
			],
		},
		{
			label: "Resources",
			href: "#resources",
			dropdownItems: [
				{ label: "Blog", href: "/resources/blog" },
				{ label: "Guides", href: "/resources/guides" },
				{ label: "Case Studies", href: "/resources/case-studies" },
			],
		},
		{ label: "Pricing", href: "#pricing" },
	];

	// Desktop Menu Item with optional dropdown
	const DesktopMenuItem = ({ item }) => {
		if (item.dropdownItems) {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger className='flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary'>
						{item.label}
						<ChevronDown className='h-4 w-4' />
					</DropdownMenuTrigger>
					<DropdownMenuContent align='start' className='w-48'>
						{item.dropdownItems.map((dropdownItem) => (
							<DropdownMenuItem key={dropdownItem.href} asChild>
								<a href={dropdownItem.href} className='w-full cursor-pointer'>
									{dropdownItem.label}
								</a>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			);
		}

		return (
			<a
				href={item.href}
				className='text-sm font-medium transition-colors hover:text-primary'>
				{item.label}
			</a>
		);
	};

	// Mobile Menu Item with optional collapsible dropdown
	const MobileMenuItem = ({ item }) => {
		if (item.dropdownItems) {
			return (
				<Collapsible>
					<CollapsibleTrigger className='flex w-full items-center justify-between text-sm font-medium py-2'>
						{item.label}
						<ChevronDown className='h-4 w-4' />
					</CollapsibleTrigger>
					<CollapsibleContent className='pl-4 space-y-2'>
						{item.dropdownItems.map((dropdownItem) => (
							<a
								key={dropdownItem.href}
								href={dropdownItem.href}
								className='block text-sm text-muted-foreground py-2 transition-colors hover:text-primary'>
								{dropdownItem.label}
							</a>
						))}
					</CollapsibleContent>
				</Collapsible>
			);
		}

		return (
			<a
				href={item.href}
				className='text-sm font-medium py-2 transition-colors hover:text-primary'>
				{item.label}
			</a>
		);
	};

	// Desktop Menu
	const DesktopMenu = () => (
		<nav className='hidden md:flex items-center space-x-6'>
			{menuItems.map((item) => (
				<DesktopMenuItem key={item.label} item={item} />
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
						<MobileMenuItem key={item.label} item={item} />
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
