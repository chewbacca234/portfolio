import { NextRequest } from 'next/server';

let locales = ['en', 'fr', 'es'];

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  console.log('pathname:', pathname);
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  console.log('pathnameHasLocale:', pathnameHasLocale);
  if (pathnameHasLocale) return;
  // Redirect if there is no locale
  const locale = 'en';
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. if the incoming request is /products
  // the new URL iwill be /en/products
  //   console.log('request.nextUrl:', request.nextUrl);
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!(?:en|fr|es|api|_next/static|_next/image)(?:/|$))(?!.*\\.[^.]*$).*/?)',
    // Only run on root (/) URL
    '/',
  ],
};
