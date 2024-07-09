export default function MonsterCard({ monster }) {
    return (
        <li className="card">
            <hgroup>
                <h4>{monster.name}</h4>
                <small>
                    {monster.challenge_rating > 0}
                </small>

                {/*Use once a repo of images can be utilized.*/}
                {/*or find out why its not loading an image into the card*/}

                {/*<small>*/}
                {/*    {monster.image}*/}
                {/*</small>*/}
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
                    <strong>Alighment</strong>
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