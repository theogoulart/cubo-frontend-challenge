import Header from '@/components/Header';
import Slider from '@/components/Slider';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import HowItWorks from '@/components/HowItWorks';
import SignUp from '@/components/SignUp';
import DataChart from '@/components/DataChart';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      <main>
        <Slider />
        <Services />
        <AboutUs />
        <HowItWorks />
        <SignUp />
        <DataChart />
      </main>
      <Footer />
    </div>
  );
}
