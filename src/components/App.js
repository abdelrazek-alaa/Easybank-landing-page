import Header from "./Header";
import Intro from "./Intro";
import Features from "./Features";
import Articles from "./Articles";

function App() {
  return (
    <div className="font-public-sans">
      <Header />
      <Intro />
      <div className="container mx-auto space-y-5">
        <Features />
        <Articles />
      </div>
    </div>
  );
}

export default App;
