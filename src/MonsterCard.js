export default function MonsterCard({ monster }) {
    return (
        <li className="monster-card">
            <hgroup>
                <h4>{monster.name}</h4>
                <small>
                    {monster.challenge_rating > 0}
                </small>
            </hgroup>
            <div className = "stats">
                <p>
                    <strong>Challenge Rating</strong>
                    {monster.challenge_rating}
                </p>
                <p>
                    <strong>Alighment</strong>
                    {monster.alignments}
                </p>

                <p>
                    <string>Description</string>
                    {monster.desc}
                </p>

                <p>
                    <string>Charisma</string>
                    {monster.charisma}
                </p>
            </div>
        </li>
    );
}