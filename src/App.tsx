import About from "./sections/About/About";
import Games from "./sections/Games/Games";
import Hero from "./sections/Hero/Hero";
import JoinCommunity from "./sections/JoinCommunity/JoinCommunity";
import Team from "./sections/Team/Team";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Games />
      <Team />
      <JoinCommunity />
    </div>
  );
}

export default App;
