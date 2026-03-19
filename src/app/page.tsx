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

        {/* Mid-page CTA after Phase 2 (7-day demo urgency) */}
        <MidPageCta
          headline="7 ngày demo, toàn bộ kỹ năng."
          sub="Kích hoạt ngay — không cần thẻ, không cần code. Chỉ cần bắt đầu nói chuyện."
        />

        <PhaseOptimize />
        <PhaseDetection />
        <PhasePartnership />

        {/* Mid-page CTA after Phase 5 (partnership commitment) */}
        <MidPageCta
          headline="Đã hiểu triết lý. Sẵn sàng thực hành?"
          sub="Gặp đồng đội AI đầu tiên của bạn. 7 ngày trải nghiệm toàn lực."
          ctaText="Kích hoạt Agent ngay"
        />

        <PhaseJourney />
        <LiveSupport />
        <Footer />
      </main>
      <StickyCtaBar />
    </>
  )
}
