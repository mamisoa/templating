// src/app/components/navigation/logo.tsx
import Link from "next/link";

export function NavigationLogo() {
	return (
		<Link
			href='/'
			className='flex items-center space-x-2 hover:opacity-80 transition-opacity'>
			<span className='font-bold text-xl'>LS</span>
		</Link>
	);
}
