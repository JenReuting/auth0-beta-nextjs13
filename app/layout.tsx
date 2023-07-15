import { Inter } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Header from './components/Header';
import Footer from './components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'NextJS13 Auth0 Integration',
	description: 'Auth0 (beta SDK) integration with NextJS 13 App Router',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${inter.className} h-full scroll-smooth antialiased`}
		>
			<UserProvider>
				<body className='flex h-full flex-col'>
					<Header />
					<main className='grow'>{children}</main>
					<Footer />
				</body>
			</UserProvider>
		</html>
	);
}
