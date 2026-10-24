import Header from '@/components/Header';
import StatusBadge from '@/components/StatusBadge';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import FooterCard from '@/components/FooterCard';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />
      <main>
        <StatusBadge />
        <Hero />
        <ServicesGrid />
        <FooterCard />
      </main>
    </div>
  );
}

export default App;
