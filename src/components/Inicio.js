import logo from '../assets/logo.png';
import { IoPlayForwardSharp } from "react-icons/io5";

export default function Inicio() {
    return (
        <div className="telaDeInicio">
            <div className="logoETitulo">
                <img src={logo} alt="logo ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            <div className="deckButton">
                <h1>Praticar React</h1>
                <ion-icon name="play-forward-sharp"></ion-icon>
            </div>
        </div>
    )
}