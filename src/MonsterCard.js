export default function MonsterCard({ monster }) {
    return (
        <li className="monster-card">
            <hgroup>
                <h4>{monster.name}</h4>
                <small>
                    {monster.challenge_rating > 0 && `Level ${monster.level} `}
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
            </div>
        </li>
    );
}