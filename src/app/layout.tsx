import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cẩm Nang Kích Hoạt & Nâng Cấp AI Agent | Trợ Lý Thông Minh',
  description:
    'Hướng dẫn từ A-Z cách kích hoạt, huấn luyện và nâng cấp AI Agent cho doanh nghiệp. Đồng đội AI đầu tiên của bạn — không cần biết code, không cần biết AI.',
  keywords: 'AI Agent, trợ lý thông minh, kích hoạt agent, huấn luyện AI, doanh nghiệp',
  openGraph: {
    title: 'Cẩm Nang Kích Hoạt & Nâng Cấp AI Agent',
    description: 'Đồng đội AI đầu tiên của bạn. Chỉ cần biết cách làm đồng đội tốt.',
    url: 'https://trolythongminh.io.vn/cam-nang/',
    siteName: 'Trợ Lý Thông Minh',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cẩm Nang Kích Hoạt & Nâng Cấp AI Agent',
    description: 'Đồng đội AI đầu tiên của bạn. Chỉ cần biết cách làm đồng đội tốt.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
