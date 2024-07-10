import { useEffect, useState } from "react";
import {getAllMonsters, getAllSpells} from "./api";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchComponent from "./components/SearchComponent";
import SpellCard from "./components/SpellCard";
import MonsterCard from "./components/MonsterCard";
import "./styles.css";

export default function App(effect, deps) {
  const [spells, setSpells] = useState([]);
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    const savedSpells = localStorage.getItem("spells");
    if (savedSpells) setSpells(JSON.parse(savedSpells));
    getAllSpells().then((spells) => {
      setSpells(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
    });
  }, []);

  useEffect(() => {
      const savedMonsters = localStorage.getItem("monster");
      if (savedMonsters) setMonsters(JSON.parse(savedMonsters));

      getAllMonsters().then((monsters) => {
          setMonsters(monsters);
          localStorage.setItem("monsters", JSON.stringify(monsters))
      })
    }, []);


    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <h1>D&D Compendium</h1>
                    {/* Add SearchComponent here */}
                    <SearchComponent />
                </header>
                <main>
                    <Routes>
                        {/* Define routes for different components */}
                        <Route
                            path="/spells"
                            element={
                                <div>
                                    {spells.length === 0 && <span className="loading">Loading...</span>}
                                    <ul className="spell-list">
                                        {spells.map((spell) => (
                                            <SpellCard key={spell.index} spell={spell} />
                                        ))}
                                    </ul>
                                </div>
                            }
                        />
                        <Route
                            path="/monsters"
                            element={
                                <div>
                                    {monsters.length === 0 && <span className="loading">Loading...</span>}
                                    <ul className="monster-list">
                                        {monsters.map((monster) => (
                                            <MonsterCard key={monster.index} monster={monster} />
                                        ))}
                                    </ul>
                                </div>
                            }
                        />
                        <Route
                            path="/"
                            element={<div>Welcome to the Compendium</div>}
                        />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

//   return (
//       <div className="App">
//           <Router>
//               <header className={"App-header"}>
//                   <h1>My Search App</h1>
//                   <SearchComponent></SearchComponent>
//               </header>
//               <main>
//                   <Routes>
//                       <Route
//                           path="/spells"
//                           element={
//                             <div>
//
//                             </div>
//                           }
//                   </Routes>
//               </main>
//           </Router>
//         {spells.length === 0 && <span className="loading">Loading...</span>}
//           <ul className="spell-list">
//           {spells.map((spell) => (
//               <SpellCard key={spell.index} spell={spell} />
//           ))}
//         </ul>
//           {monsters.length === 0 && <span className="loading">Loading...</span> }
//           <ul className="monster-list">
//               {monsters.map((monster) => (
//                   <MonsterCard key={monster.index} monster={monster} />
//               ))}
//           </ul>
//       </div>
//   );
// }

