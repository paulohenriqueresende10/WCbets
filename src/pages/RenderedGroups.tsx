import React from "react";
import Groups from "../components/Groups";
import "../stylesCSS/RenderedGroups.css";

const RenderedGroups = ({ setGroupClicked, matches }: any) => {
  
  const dataGroups = [
    {
      id: "a",
      groupLetter: "A",
    },
    {
      id: "b",
      groupLetter: "B",
    },
    {
      id: "c",
      groupLetter: "C",
    },
    {
      id: "d",
      groupLetter: "D",
    },
    {
      id: "e",
      groupLetter: "E",
    },
    {
      id: "f",
      groupLetter: "F",
    },
    {
      id: "g",
      groupLetter: "G",
    },
    {
      id: "h",
      groupLetter: "H",
    },
  ];

  return (
    <div>
      <header className="header-grupos">
        <h1>Grupos Copa</h1>
      </header>
      <div className="rendered-groups">{
        dataGroups.map((data) => {
          return (
            <Groups
              key={data.id}
              id={data.id}
              groupLetter={data.groupLetter}
              setGroupClicked={setGroupClicked}
              matches={matches}
            />
          );
        })
      }</div>
    </div>
  );
};

export default RenderedGroups;