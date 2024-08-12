import Games from "./sections/Games/Games";
import Hero from "./sections/Hero/Hero";
import JoinCommunity from "./sections/JoinCommunity/JoinCommunity";
import Team from "./sections/Team/Team";
import Features from "./sections/Features/Features";
import PrimaryCTA from "./sections/PrimaryCTA/PrimaryCTA";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Team />
      <PrimaryCTA />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;
