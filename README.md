This is an implementation of the Auth0 beta release for NextJS 13 with App Router. It uses the beta version of 
the Auth0 SDK that has support for the app directory. 

NextJS-Auth0 v3 Beta release: https://github.com/auth0/nextjs-auth0/issues/1235

NOTES:

On the client-side components, I can access the authentication state with the useUser() hook.
Sample client-side hook usage: https://github.com/auth0/nextjs-auth0/blob/beta/example-app/app/client-component.tsx

For SSR components, I can access the authentication state with Route Handlers (previously API Routes).
Sample server-side call: https://github.com/auth0/nextjs-auth0/blob/beta/example-app/app/server-component.tsx

