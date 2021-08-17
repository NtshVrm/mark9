import "./styles.css";
import { useState } from "react";
import raceDB from "./database.js";

const race = Object.keys(raceDB);

export default function App() {
  const [selectedRace, setSelectedRace] = useState("2010's");
  function ClickHandler(item) {
    setSelectedRace(item);
  }

  return (
    <div>
      <header>
        <div>F1 NOSTALGIA</div>
      </header>

      <div className="hero hero-container">
        <div className="image-container">
          <img src="https://i.postimg.cc/RFy1JmVy/f1.png" alt="Logo" />
        </div>
        <div className="desc-container text-container text-bold">
          Formula One is the highest class of international auto racing for
          single-seater formula racing cars. The World Drivers' Championship,A
          Formula One season consists of a series of races, known as Grands
          Prix, which take place worldwide on both purpose-built circuits and
          closed public roads.
          <br />
          <br />
          Feel like catching up on some of the best races in history? Check
          these out.⬇
        </div>
      </div>

      <div className="race-container">
        {race.map((item) => {
          return (
            <div
              className="btn-race"
              key={item}
              onClick={() => ClickHandler(item)}
            >
              {item}
            </div>
          );
        })}
      </div>

      <div>
        {raceDB[selectedRace].map((item) => {
          return (
            <div className=" hero hero-container" key={item.city}>
              <div className="image-container">
                <img className="image-container" alt="City" src={item.poster} />
              </div>
              <div className="desc-container text-container">
                <span className="race">
                  <span className="heading">Race : </span>
                  {item.name}
                </span>
                <span className="race">
                  <span className="heading">Year : </span>
                  {item.year}
                </span>

                <span className="race">
                  <span className="heading">Winner : </span>
                  {item.winner}
                </span>

                <span className="race">
                  <span className="heading">Second: </span>
                  {item.second}
                </span>

                <span className="race">
                  <span className="heading">Third : </span>
                  {item.third}
                </span>
                <p className="race-desc">{item.fact}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
