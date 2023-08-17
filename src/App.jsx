import HeroSection from "./Componets/Section/Hero Section/HeroSection";
import PromoSection from "./Componets/Section/Promo Section/PromoSection";
import PopularDestinasi from "./Componets/Section/Popular Destinasi/PopularPlaceSection";
import Villa from "./Componets/Section/Villa and Resot Section/Villa";
import Journal from "./Componets/Section/Journal Section/JournalSection";

function App() {
  return (
    <div className="MainPage">
      <HeroSection />
      <PromoSection />
      <PopularDestinasi />
      <Villa />
      <Journal />
    </div>
  );
}

export default App;
