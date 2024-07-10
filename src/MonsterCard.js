export default function MonsterCard({ monster }) {
    return (
        <li className="card">
            <hgroup>
                <h4>{monster.name}</h4>
                <small>
                    {monster.challenge_rating > 0}
                </small>

                <div>
                {monster.image && <img src={'https://www.dnd5eapi.co' + monster.image} alt={`An image of an ${monster.name}`} />}
                </div>
            </hgroup>
            <div className = "stats">
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
                    <strong>Alignment</strong>
                    {monster.alignments}
                </p>

                <p>
                    <strong>Description</strong>
                    {monster.desc}
                </p>

                <p>
                    <strong>Charisma</strong>
                    {monster.charisma}
                </p>

                <p>
                    <strong>Constituion</strong>
                    {monster.constitution}
                </p>

                <p>
                    <strong>Dexterity</strong>
                    {monster.dexterity}
                </p>

                <p>
                    <strong>Intelligence</strong>
                    {monster.intelligence}
                </p>

                <p>
                    <strong>Strength</strong>
                    {monster.strength}
                </p>

                <p>
                    <strong>Wisdom</strong>
                    {monster.wisdom}
                </p>
            </div>
        </li>
    );
}