import logoMini from '../assets/logo-mini.png';

export default function Flashcards(props) {
    return (
        <div className="flashcards">
            <header className="logo-mini">
                <img src={logoMini} alt="" />
            </header>
            <div className="flashcards-container">
                <>
                    {props.children}
                </>
            </div>
        </div>
    )
}