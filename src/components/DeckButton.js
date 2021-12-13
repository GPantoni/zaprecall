import next from '../assets/next.png';

export default function DeckButton({ chooseDeck, decks }) {

    return (
        <div className="buttons">
            {decks.map(item =>
                <div className="deck-button" onClick={() => chooseDeck(false)}>
                    <h1>Praticar {item.title}</h1>
                    <img src={next} alt="next" />
                </div>)}
        </div>
    )
}