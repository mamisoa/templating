// src/app/resources/layout.tsx

import { ResourcesSidebar } from "@/src/app/resources/sidebar";

export default function ResourcesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='relative h-screen overflow-hidden'>
			{/* Main content area with sidebar */}
			<div className='fixed top-14 inset-x-0 bottom-0 flex'>
				{/* Sidebar */}
				<ResourcesSidebar />

				{/* Main content */}
				<main className='flex-1 overflow-y-auto'>{children}</main>
			</div>
		</div>
	);
}
