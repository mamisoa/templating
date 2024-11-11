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
				{/* Sidebar - Added z-10 to ensure it's above the content */}
				<div className='relative z-10'>
					<ResourcesSidebar />
				</div>

				{/* Main content - Added z-0 to ensure it's below the sidebar */}
				<main className='flex-1 overflow-y-auto z-0'>{children}</main>
			</div>
		</div>
	);
}
