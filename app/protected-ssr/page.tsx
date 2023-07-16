import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

/* Notes: For some reason, after logout, the client still sends the session id
in the request and the session re-validates when navigating to a protected page.

I tried the withPageAuthRequired wrapper and it did not fix the
logout functionality. This can be seen by going to /profile-ssr */

export default async function Page() {
	const session = await getSession();

	console.log('session from protected-ssr/page.tsx ----> ', session?.user);

	if (!session) {
		redirect('/api/auth/login');
	}

	return (
		<section className='py-24'>
			<div className='container'>
				<h1 className='text-2xl font-bold'>
					This is a{' '}
					<span className='text-emerald-500'>Server-Side</span>{' '}
					protected page.
				</h1>
				<h2 className='mt-4 font-medium'>Session Information:</h2>
				<p className='mt-4'>{JSON.stringify({ session }, null, 2)}</p>
			</div>
		</section>
	);
}
