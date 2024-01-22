import "./App.css";
import CountDown from "./CountDown";

const App = () => {
  const days = 1;
  const hours = 12;
  const minutes = 30;
  const seconds = 45;

  return (
    <div className="App">
      <CountDown days={8} hours={22} minutes={45} seconds={60} />
    </div>
  );
};

export default App;