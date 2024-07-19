import React from 'react';

interface Spell {
    index: string;
    name: string;
    level: number;
    school: {
        name: string;
    };
    casting_time: string;
    range: string;
    components: string[];
    duration: string;
}

interface SpellCardProps {
    spell: Spell;
}

const SpellCard: React.FC<SpellCardProps> = ({ spell }) => {
    return (
        <li className="card">
            <hgroup>
                <h4>{spell.name}</h4>
                <small>
                    {spell.level > 0 && `Level ${spell.level} `}
                    {spell.school.name}
                    {spell.level === 0 && " cantrip"}
                </small>
            </hgroup>
            <div className="stats">
                <p>
                    <strong>Casting Time</strong>
                    {spell.casting_time}
                </p>
                <p>
                    <strong>Range</strong>
                    {spell.range}
                </p>
                <p>
                    <strong>Components</strong>
                    {spell.components.join(", ")}
                </p>
                <p>
                    <strong>Duration</strong>
                    {spell.duration}
                </p>
            </div>
        </li>
    );
};

export default SpellCard;