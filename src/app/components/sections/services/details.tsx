// src/app/components/sections/services/details.tsx
"use client";

export function ServiceDetails() {
	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--primary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--accent)/0.1) 100%)`,
			}}>
			{/* Background Elements */}
			<div className='absolute inset-0 w-full h-full bg-grid-pattern opacity-5' />
			<div className='absolute inset-0 w-full h-full mask-radial-faded' />

			{/* Content Container */}
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Service Details
					</h2>
					<p className='text-muted-foreground'>Coming Soon</p>
				</div>
			</div>
		</div>
	);
}
