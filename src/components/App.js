import Header from "./Header";

function App() {
  return (
    <div className="font-public-sans container mx-auto p-8">
      <Header />
      {/* design colors */}
      <div className="mt-20 mt-96">
        <div className="bg-dark-blue">dark-blue</div>
        <div className="bg-lime-green">lime-green</div>
        <div className="bg-bright-cyan">bright-cyan</div>
        <div className="bg-grayish-blue">grayish-blue</div>
        <div className="bg-light-grayish-blue">light-grayish-blue</div>
        <div className="bg-very-light-gray">very-light-gray</div>
      </div>
    </div>
  );
}

export default App;
