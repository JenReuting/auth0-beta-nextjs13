import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

const BASE_URL = process.env.AUTH0_BASE_URL;

export const GET = handleAuth({
	onError(req: Request, error: Error) {
		console.error(error);
	},
});
