import React from "react";
import "../stylesCSS/Teams.css";

const Teams = ({ matches, groupLetter }: any) => {
  
  const renderedList = matches.filter((match: any) => {
      return match.group === `GROUP_${groupLetter}` && match.matchday === 1;
    }).map((match: any, index: any) => {
      return (
        <div key={index}>
          <div>{match.homeTeam?.name}</div>
          <div>{match.awayTeam?.name}</div>
          <div>{match.homeTeam?.crest}</div>
          <div>{match.awayTeam?.crest}</div>
        </div>
      );
    });

  const name1 = renderedList[0].props.children[0].props.children;
  const name2 = renderedList[0].props.children[1].props.children;
  const name3 = renderedList[1].props.children[0].props.children;
  const name4 = renderedList[1].props.children[1].props.children;
  const crest1 = renderedList[0].props.children[2].props.children;
  const crest2 = renderedList[0].props.children[3].props.children;
  const crest3 = renderedList[1].props.children[2].props.children;
  const crest4 = renderedList[1].props.children[3].props.children;


  return (
    <div>
      <div className="teams-container">
        <img
          className="flag"
          src={crest1}
          alt={`${name1} flag`}
        />
        <p className="country-name">
          {name1}
        </p>
      </div>
      <div className="teams-container">
        <img
          className="flag"
          src={crest2}
          alt={`${name2} flag`}
        />
        <p className="country-name">
          {name2}
        </p>
      </div>
      <div className="teams-container">
        <img
          className="flag"
          src={crest3}
          alt={`${name3} flag`}
        />
        <p className="country-name">
          {name3}
        </p>
      </div>
      <div className="teams-container">
        <img
          className="flag"
          src={crest4}
          alt={`${name4} flag`}
        />
        <p className="country-name">
          {name4}
        </p>
      </div>
    </div>
  );
};

export default Teams;