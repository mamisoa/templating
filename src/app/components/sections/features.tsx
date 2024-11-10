export function FeaturesShowcase() {
	return (
		<div className='flex flex-col items-center justify-center space-y-8'>
			<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-center'>
				Features Showcase
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
				<div>Feature description</div>
				<div>Interactive demo/screenshot</div>
			</div>
		</div>
	);
}
