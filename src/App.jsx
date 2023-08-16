import HeroSection from "./Componets/Section/Hero Section/HeroSection";
import PromoSection from "./Componets/Section/Promo Section/PromoSection";
import PopularDestinasi from "./Componets/Section/Popular Destinasi/PopularPlaceSection";
import Villa from "./Componets/Section/Villa and Resot Section/Villa";

function App() {
  return (
    <div className="MainPage">
      <HeroSection />
      <PromoSection />
      <PopularDestinasi />
      <Villa />
    </div>
  );
}

export default App;
