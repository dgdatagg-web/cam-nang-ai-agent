import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import CoreValues from '@/components/sections/CoreValues'
import SocialProof from '@/components/sections/SocialProof'
import PhaseActivation from '@/components/sections/PhaseActivation'
import PhaseTraining from '@/components/sections/PhaseTraining'
import PhaseOptimize from '@/components/sections/PhaseOptimize'
import PhaseDetection from '@/components/sections/PhaseDetection'
import PhasePartnership from '@/components/sections/PhasePartnership'
import PhaseJourney from '@/components/sections/PhaseJourney'
import LiveSupport from '@/components/sections/LiveSupport'
import StickyCtaBar from '@/components/ui/StickyCtaBar'
import MidPageCta from '@/components/ui/MidPageCta'

export default function CamNangPage() {
  return (
    <>
      {/* Skip to content — a11y */}
      <a href="#main-content" className="skip-to-content">
        Bỏ qua đến nội dung chính
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <CoreValues />
        <SocialProof />
        <PhaseActivation />
        <PhaseTraining />

        {/* Mid-page CTA — after 7-day training phase */}
        <MidPageCta
          headline="Đã sẵn sàng thử?"
          sub="7 ngày demo miễn phí, đầy đủ kỹ năng. Không cần thẻ."
        />

        <PhaseOptimize />
        <PhaseDetection />
        <PhasePartnership />

        {/* Mid-page CTA — after partnership phase */}
        <MidPageCta
          headline="Đối tác thật — không phải công cụ."
          sub="Kích hoạt agent và trải nghiệm sự khác biệt."
          ctaText="Kích hoạt Agent ngay"
        />

        <PhaseJourney />
        <LiveSupport />
        <Footer />
      </main>
      <StickyCtaBar />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Cẩm Nang Kích Hoạt & Nâng Cấp AI Agent',
            description: 'Hướng dẫn toàn diện để kích hoạt, huấn luyện và phát triển mối quan hệ đối tác với AI Agent của bạn.',
            url: 'https://trolythongminh.io.vn/cam-nang',
            inLanguage: 'vi',
            publisher: {
              '@type': 'Organization',
              name: 'Trợ Lý Thông Minh',
              url: 'https://trolythongminh.io.vn',
            },
            mainEntity: {
              '@type': 'HowTo',
              name: 'Cách Kích Hoạt AI Agent',
              description: 'Hướng dẫn 6 giai đoạn từ kích hoạt đến đối tác thực sự',
              step: [
                { '@type': 'HowToStep', position: 1, name: 'Kích Hoạt', text: 'Đặt tên, cuộc trò chuyện đầu tiên, bắt đầu nói chuyện' },
                { '@type': 'HowToStep', position: 2, name: 'Huấn Luyện', text: '7 ngày vàng — dạy kỹ năng và phản hồi' },
                { '@type': 'HowToStep', position: 3, name: 'Tối Ưu Hóa', text: 'Bí kíp /compact, /remember, /forget' },
                { '@type': 'HowToStep', position: 4, name: 'Nhận Diện', text: 'Phát hiện và xử lý trạng thái rỗng' },
                { '@type': 'HowToStep', position: 5, name: 'Đối Tác', text: 'Nghệ thuật đối tác — phản biện, tôn trọng, nhất quán' },
                { '@type': 'HowToStep', position: 6, name: 'Hành Trình', text: 'Bản đồ phía trước — demo, quyết định, gia hạn' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
