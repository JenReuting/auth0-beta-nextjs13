import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';
import SignInButton from './SignInButton';

export default async function Header() {
	// const pathname = usePathname();
	// const pageName = pathname?.split('/').pop();
	const session = await getSession();

	console.log(
		'Session User from header -----> ',
		JSON.stringify(session?.user)
	);

	return (
		<>
			<header className='flex h-24 flex-col justify-center bg-stone-100'>
				<nav className='container'>
					<ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
						<li className='text-sm'>
							<Link href='/'>Home</Link>
						</li>
						<li className='text-sm'>
							<Link href='/profile'>Profile</Link>
						</li>
						<li className='text-sm'>
							<Link href='/profile-api'>Profile (API)</Link>
						</li>
						<li className='text-sm'>
							<Link href='/profile-middleware'>
								Profile (Middleware)
							</Link>
						</li>
						{session ? (
							<li>
								<Link href='/api/auth/logout'>Logout</Link>
							</li>
						) : (
							<li>
								<SignInButton />
							</li>
						)}
					</ul>
				</nav>
			</header>
		</>
	);
}
