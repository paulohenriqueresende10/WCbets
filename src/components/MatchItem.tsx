import React, { useState } from "react";
import "../stylesCSS/Bets.css";

const MatchItem = ({ match }: any) => {
  console.log(match);
  
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const awayTeam = match.awayTeam?.name;
  const homeTeam = match.homeTeam?.name;

  const crestAwayTeam = match.awayTeam?.crest;
  const cresthomeTeam = match.homeTeam?.crest;


  return (
    <div className="bet-container ui segment">
      <p className="nation-name">{awayTeam}</p>
      <img
        alt=""
        src={crestAwayTeam}
        style={{ width: "40px" }}
      />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <p>X</p>
      <input
        type="text"
        onChange={(e) => setValue2(e.target.value)}
        value={value2}
      />
      <img
        alt=""
        src={cresthomeTeam}
        style={{ width: "40px" }}
      />
      <p>{homeTeam}</p>
    </div>
  );
};

export default MatchItem;