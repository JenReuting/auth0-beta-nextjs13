'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const { user, error, isLoading } = useUser();
	const router = useRouter();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return router.push('/dashboard');
	}

	return (
		<div>
			<a href='/api/auth/login'>Login</a>;
		</div>
	);
}
