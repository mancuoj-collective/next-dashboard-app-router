import '@/app/ui/global.css';
import { dmSans } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s | Acme Dashboard', default: 'Acme Dashboard' },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-dashboard-app-router.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
