import { useState } from "react";
import discordLogo from "./assets/discord-logo-white.png";
import hamburger from "./assets/menu-icon.png";
import bigBottomPic from "./assets/discord-background.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <img src={discordLogo} alt="logo" className="logo" />
        <img src={hamburger} alt="burger" className="logo" />
      </nav>
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community.Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <div className="btns-container">
        <button id="macBtn">Download for Mac</button>
        <button className="discordBtn">Open Discord in your browser</button>
      </div>
      <img src={bigBottomPic} alt="big bottom pic" className="bottom-pic" />
    </>
  );
}

export default App;
