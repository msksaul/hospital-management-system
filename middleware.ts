import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { routeAccess } from './lib/routes';
import { NextResponse } from 'next/server';

const matchers = Object.keys(routeAccess).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccess[route]
}))

export default clerkMiddleware(async (auth, request) => {
  const { userId, sessionClaims } = await auth()
  const url = new URL(request.url)

  const role = userId && sessionClaims?.metadata?.role
    ? sessionClaims.metadata.role
    : userId
    ? 'patient'
    : 'sign-in'

    const matchingRoute = matchers.find(({ matcher }) => matcher(request))

    if(matchingRoute && !matchingRoute.allowedRoles.includes(role)) {
      return NextResponse.redirect(new URL(`/${role}`, url.origin))
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};