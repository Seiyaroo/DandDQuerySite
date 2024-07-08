import { useEffect, useState } from "react";
import {getAllMonsters, getAllSpells} from "./api";
import SpellCard from "./SpellCard";
import MonsterCard from "./MonsterCard";
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
        {spells.length === 0 && <span className="loading">Loading...</span>}
          <ul className="spell-list">
          {spells.map((spell) => (
              <SpellCard key={spell.index} spell={spell} />
          ))}
        </ul>
          {monsters.length === 0 && <span className="loading">Loading...</span> }
          <ul className="monster-list">
              {monsters.map((monster) => (
                  <MonsterCard key={monster.index} monster={monster} />
              ))}
          </ul>
      </div>
  );
}

