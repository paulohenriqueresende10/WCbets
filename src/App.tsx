import React from "react";
import { useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from "./pages/Register";
import Nav from "./components/Nav";
import TabelaJogos from "./pages/TabelaJogos";
import Bets from "./pages/Bets";
import CreateBolao from "./pages/CreateBolao";
import RenderedGroups from "./pages/RenderedGroups";
import wcMatches from "./api/response.json"


const App = () => {
  const [matches, setMatches] = useState(wcMatches.matches);
  const [groupClicked, setGroupClicked] = useState("GROUP_A");

  useEffect(() => {
    worldCupMatches();
  }, []);

  const worldCupMatches = async () => {
      const response = wcMatches.matches;
      setMatches(response);
  };

  if(matches.length === 0) {
    return <h1>Loading</h1>
  }
  
  return (
    <div className="appMain">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<RenderedGroups setGroupClicked={setGroupClicked} matches={matches} />} />
          <Route path="/tabela-jogos" element={<TabelaJogos matches={matches} groupClicked={groupClicked} setGroupClicked={setGroupClicked} />} />
          <Route path="/create-bolao" element={<CreateBolao />} />
          <Route path="/bets" element={<Bets matches={matches} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
