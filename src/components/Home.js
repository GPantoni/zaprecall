import logo from '../assets/logo.png';
import DeckButton from './DeckButton';

export default function Home({ setChangeScreen, chooseDeck, decks }) {
    return (
        <div className="home">
            <div className="logo">
                <img src={logo} alt="logo ZapRecall" />
            </div>
            <DeckButton setChangeScreen={setChangeScreen} chooseDeck={chooseDeck} decks={decks} />
        </div>
    )
}