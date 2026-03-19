import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cẩm Nang Kích Hoạt & Nâng Cấp AI Agent | Trợ Lý Thông Minh',
  description: 'Hướng dẫn toàn diện để kích hoạt, huấn luyện và phát triển mối quan hệ đối tác với AI Agent của bạn. Không cần biết code. Chỉ cần bắt đầu nói chuyện.',
  metadataBase: new URL('https://trolythongminh.io.vn'),
  alternates: {
    canonical: '/cam-nang',
  },
  openGraph: {
    title: 'Cẩm Nang Kích Hoạt AI Agent',
    description: 'Từ ngày đầu tiên đến đối tác thực sự. Hướng dẫn 6 giai đoạn.',
    url: 'https://trolythongminh.io.vn/cam-nang',
    siteName: 'Trợ Lý Thông Minh',
    locale: 'vi_VN',
    type: 'website',
    // TODO: Add OG image once generated
    // images: [{ url: '/og-cam-nang.png', width: 1200, height: 630, alt: 'Cẩm Nang AI Agent' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cẩm Nang Kích Hoạt AI Agent',
    description: 'Từ ngày đầu tiên đến đối tác thực sự.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  )
}
