'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const SignInButton = () => {
	const user = useUser();

	console.log('user ----> ', user);

	return (
		<button className='rounded-md border border-stone-300 px-3 py-1 text-sm dark:border-stone-600'>
			<Link href='/api/auth/logout'>Sign Out</Link>
		</button>
	);
};

export default SignInButton;
