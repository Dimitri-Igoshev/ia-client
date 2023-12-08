import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['de', 'en', 'ru'],
  defaultLocale: 'de'
});
 
export const config = {
  matcher: ['/', '/(de|en|ru)/:path*']
};