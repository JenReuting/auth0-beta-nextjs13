import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import ServerComponent from '@/app/server-component';
import ClientComponent from '@/app/client-component';

export default withPageAuthRequired(
	async function Page() {
		const session = await getSession();

		return (
			<section className='py-24'>
				<div className='container'>
					<h1 className='text-2xl font-bold'>
						This is a{' '}
						<span className='text-emerald-500'>Server-Side</span>{' '}
						protected page.
					</h1>
					<h2>This Page:</h2>
					<h3>Access Token</h3>
					<pre>
						{JSON.stringify(
							{ accessToken: session?.accessToken },
							null,
							2
						)}
					</pre>
					<h3>Refresh Token</h3>
					<pre>
						{JSON.stringify(
							{ refreshToken: session?.refreshToken },
							null,
							2
						)}
					</pre>
					<h3>User</h3>
					<pre>{JSON.stringify(session?.user, null, 2)}</pre>
					<h2>Server Component:</h2>
					<ServerComponent />
					<h2>Client Component:</h2>
					<ClientComponent />
				</div>
			</section>
		);
	},
	{ returnTo: '/profile' }
);
