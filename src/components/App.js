import Header from "./Header";
import Intro from "./Intro";
import Features from "./Features";
function App() {
  return (
    <div className="font-public-sans">
      <Header />
      <Intro />
      <div className="container mx-auto space-y-5">
        <Features />
      </div>
    </div>
  );
}

export default App;
