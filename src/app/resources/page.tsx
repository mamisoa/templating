// src/app/resources/page.tsx
import type { Metadata } from "next";
import { Button } from "@/src/app/components/ui/button";
import { Separator } from "@/src/app/components/ui/separator";
import { ThemeToggle } from "@/src/app/components/theme-toggle";
import { NavigationLogo } from "@/src/app/components/navigation/logo";
import { NavigationMenu } from "@/src/app/components/navigation/menu";
import { ResourcesSidebar } from "../components/sections/resources/sidebar";

export const metadata: Metadata = {
	title: "Resources | myleanstartup.ai - AI-Powered Lean Startup Validation",
	description:
		"Access templates, tools, documentation, and join our community to accelerate your startup validation journey.",
	openGraph: {
		title: "Resources | myleanstartup.ai",
		description: "Access essential startup validation resources and tools.",
		type: "website",
		url: "https://myleanstartup.ai/resources",
	},
};

export default function ResourcesPage() {
	return (
		<div className='relative min-h-screen bg-background'>
			{/* Navigation - fixed at top */}
			<header className='fixed top-0 z-50 w-full h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
				<div className='h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex h-full items-center justify-between'>
						<div className='flex items-center space-x-6'>
							<NavigationLogo />
							<Separator orientation='vertical' className='h-6' />
							<NavigationMenu />
						</div>
						<div className='flex items-center space-x-4'>
							<Button>Get Started</Button>
							<Button variant='outline'>Login</Button>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</header>

			{/* Main Content with Sidebar */}
			<div className='pt-14 flex min-h-screen'>
				{/* Sidebar */}
				<ResourcesSidebar />

				{/* Main Content Area */}
				<main className='flex-1 overflow-y-auto'>
					<div className='container mx-auto px-4 py-8'>
						{/* Content sections will go here */}
					</div>
				</main>
			</div>
		</div>
	);
}
