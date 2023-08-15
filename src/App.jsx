import Card from "./Componets/Elements/Card/Card";
import HeroSection from "./Componets/Section/Hero Section/HeroSection";
import PromoSection from "./Componets/Section/Promo Section/PromoSection";
import CardData from "./Componets/Elements/Card/DataCardDestinasi";

function App() {
  return (
    <div className="MainPage">
      <HeroSection />
      <PromoSection />
      <Card details={CardData} />
    </div>
  );
}

export default App;
