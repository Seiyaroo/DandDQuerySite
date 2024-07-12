import React from 'react';

interface Monster {
    index: string;
    name: string;
    challenge_rating: number;
    image?: string;
    size: string;
    type: string;
    alignments: string;
    desc: string;
    charisma: number;
    constitution: number;
    dexterity: number;
    intelligence: number;
    strength: number;
    wisdom: number;
}

interface MonsterCardProps {
    monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
    return (
        <li className="card">
            <hgroup>
                <h4>{monster.name}</h4>
                <small>{monster.challenge_rating > 0}</small>
                <div>
                    {monster.image && (
                        <img
                            src={`https://www.dnd5eapi.co${monster.image}`}
                            alt={`An image of a ${monster.name}`}
                        />
                    )}
                </div>
            </hgroup>
            <div className="stats">
                <small>
                    <strong>Size: </strong>
                    {monster.size}
                </small>
                <small>
                    <strong>Type: </strong>
                    {monster.type}
                </small>
                <p>
                    <strong>Challenge Rating:</strong>
                    {monster.challenge_rating}
                </p>
                <p>
                    <strong>Alignment:</strong>
                    {monster.alignments}
                </p>
                <p>
                    <strong>Description:</strong>
                    {monster.desc}
                </p>
                <p>
                    <strong>Charisma:</strong>
                    {monster.charisma}
                </p>
                <p>
                    <strong>Constitution:</strong>
                    {monster.constitution}
                </p>
                <p>
                    <strong>Dexterity:</strong>
                    {monster.dexterity}
                </p>
                <p>
                    <strong>Intelligence:</strong>
                    {monster.intelligence}
                </p>
                <p>
                    <strong>Strength:</strong>
                    {monster.strength}
                </p>
                <p>
                    <strong>Wisdom:</strong>
                    {monster.wisdom}
                </p>
            </div>
        </li>
    );
};

export default MonsterCard;