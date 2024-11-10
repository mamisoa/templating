export function NavigationMenu() {
	return (
		<nav className='hidden md:flex items-center space-x-6'>
			<a href='#about' className='text-sm font-medium'>
				About
			</a>
			<a href='#services' className='text-sm font-medium'>
				Services
			</a>
			<a href='#use-cases' className='text-sm font-medium'>
				Use Cases
			</a>
			<a href='#resources' className='text-sm font-medium'>
				Resources
			</a>
			<a href='#pricing' className='text-sm font-medium'>
				Pricing
			</a>
		</nav>
	);
}
