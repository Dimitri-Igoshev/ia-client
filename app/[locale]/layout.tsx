import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout"

const font = Nunito_Sans({ subsets: ['latin', 'cyrillic'] })

const locales = ["en", "de", "ru"];

export const metadata: Metadata = {
	title: "IGOSHEV AGENCY",
	description: "Full-Service Digital Agency",
};

export default async function RootLayout({ children, params: { locale } }: any) {
	if (!locales.includes(locale as any)) notFound();

	return (
		<html lang={locale}>
			<body className={font.className}>
      <NextIntlClientProvider locale={locale || 'de'} messages={(await import(`@/i18n/${locale || 'de'}.json`)).default}>
				<div className="relative">
          <Navbar />
          {children}
        </div>
        </NextIntlClientProvider>
			</body>
		</html>
	);
}
