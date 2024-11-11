"use client";

export function Careers() {
	return (
		<div
			className='h-[calc(100vh-3.5rem)] w-full relative flex items-center justify-center overflow-hidden'
			style={{
				background: `linear-gradient(135deg, 
          hsl(var(--secondary)/0.1) 0%, 
          hsl(var(--background)) 50%,
          hsl(var(--accent)/0.1) 100%)`,
			}}>
			<div className='text-3xl font-bold'>Careers</div>
		</div>
	);
}
