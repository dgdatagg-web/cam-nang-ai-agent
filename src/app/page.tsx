import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { PhaseActivation } from '@/components/sections/PhaseActivation';
import { PhaseTraining } from '@/components/sections/PhaseTraining';
import { PhaseOptimize } from '@/components/sections/PhaseOptimize';
import { PhaseDetection } from '@/components/sections/PhaseDetection';
import { PhasePartnership } from '@/components/sections/PhasePartnership';
import { PhaseJourney } from '@/components/sections/PhaseJourney';
import { LiveSupport } from '@/components/sections/LiveSupport';

export default function CamNangPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PhaseActivation />
        <PhaseTraining />
        <PhaseOptimize />
        <PhaseDetection />
        <PhasePartnership />
        <PhaseJourney />
        <LiveSupport />
      </main>
      <Footer />
    </>
  );
}
