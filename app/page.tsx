import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	// if (isLoading) return <div>Loading...</div>;
	// if (error) return <div>{error.message}</div>;

	// if (user) {
	// 	return router.push('/dashboard');
	// }

	return (
		<section className='py-24'>
			<div className='container'>
				<h1 className='text-2xl font-semibold tracking-light'>
					Home Page
				</h1>
			</div>
		</section>
	);
}
