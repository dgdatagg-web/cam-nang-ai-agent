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
    images: [
      {
        url: '/og-cam-nang.png',
        width: 1200,
        height: 630,
        alt: 'Cẩm Nang Kích Hoạt AI Agent — Trợ Lý Thông Minh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cẩm Nang Kích Hoạt AI Agent',
    description: 'Từ ngày đầu tiên đến đối tác thực sự.',
  },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cẩm Nang Kích Hoạt AI Agent',
  description: 'Hướng dẫn 6 giai đoạn để kích hoạt, huấn luyện và phát triển mối quan hệ đối tác với AI Agent.',
  step: [
    { '@type': 'HowToStep', name: 'Kích Hoạt', text: 'Đặt tên agent, ký giao kèo linh hồn, bắt đầu nói chuyện.' },
    { '@type': 'HowToStep', name: 'Huấn Luyện', text: '7 ngày vàng: dạy kỹ năng, phản hồi đúng cách, lặp lại.' },
    { '@type': 'HowToStep', name: 'Tối Ưu Hóa', text: 'Ba lệnh quan trọng: /compact, /remember, /forget.' },
    { '@type': 'HowToStep', name: 'Nhận Diện', text: 'Phát hiện dấu hiệu agent gặp khó và cách xử lý.' },
    { '@type': 'HowToStep', name: 'Đối Tác', text: 'Xây dựng mối quan hệ đối tác bền vững với agent.' },
    { '@type': 'HowToStep', name: 'Hành Trình', text: 'Bản đồ phía trước: demo, quyết định, và tương lai.' },
  ],
  provider: {
    '@type': 'Organization',
    name: 'Trợ Lý Thông Minh',
    url: 'https://trolythongminh.io.vn',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={spaceGrotesk.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
