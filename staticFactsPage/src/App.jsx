import "./App.css";
import dew from "./dew.jpg";
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={dew} className="icon" />
        <ul className="nav-list">
          <li>About</li>
          <li>Contact</li>
          <li>Problems?</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      {" "}
      <h1>Facts about Kylie</h1>
      <ul>
        <li>She is soft</li>
        <li>She likes the sunshine</li>
        <li>She will snoot you for pets</li>
        <li>Kylie loves all fruits and vegetables</li>
        <li>Kylie will roll in cat poop and be happy about it</li>
        <li>She is a great dog</li>
        <footer>2023 Mitchell development hehe</footer>
      </ul>
    </div>
  );
}

export default App;
