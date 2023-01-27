import { useState } from "react";
import Country from "../components/Country";

const Home = () => {
  const [mode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!mode);
  };
  return (
    <div className={mode ? "dark" : "light"}>
      <div className="nav">
        <div>
          <h2>Where is the World?</h2>
        </div>
        <div className="mode-btn-cont">
          <button onClick={changeMode} className={mode ? "dark" : "light"}>
            {mode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
      <Country />
    </div>
  );
};

export default Home;
