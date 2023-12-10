import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['de', 'en', 'ru'],
  defaultLocale: 'en',
  localeDetection: true,
});
 
export const config = {
  matcher: ['/', '/(de|en|ru)/:path*']
};