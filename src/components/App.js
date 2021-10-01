import "../styles.css";
import Header from "./Header.jsx";
import Counter from "./Counter";
import Rules from "./Rules";
import mySvG from "./images/bg-triangle.svg";
export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${mySvG})` }}>
      <Header />

      <Counter />
      {/* <div className= "third">
      <Hand  />
      </div> */}
      <Rules />
    </div>
  );
}
