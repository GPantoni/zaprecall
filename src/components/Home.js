import logo from '../assets/logo.png';

export default function Home() {
    return (
        <div className="home">
            <div className="logo-and-title">
                <img src={logo} alt="logo ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            <div className="deck-button">
                <h1>Praticar React</h1>
                <ion-icon name="play-forward-sharp"></ion-icon>
            </div>
        </div>
    )
}