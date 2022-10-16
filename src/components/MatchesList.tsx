import React from "react";
import MatchItem from "./MatchItem";
import "../stylesCSS/Bets.css";

const MatchesList = ({ matches, selectedValue }: any) => {
  return <div className="match-container">{
    matches.filter((match: any) => {
      return match.matchday === selectedValue;
    }).map((match: any) => {
      return <MatchItem key={match.id} match={match} />;
    })
  }
  </div>;
};

export default MatchesList;
