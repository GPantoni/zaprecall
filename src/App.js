import './styles/reset.css';
import './styles/style.css';
import { useState } from 'react';
import Home from './components/Home';
import Flashcards from './components/Flashcards';

export default function App() {
    const [homeScreen, setHomeScreen] = useState(false);

    return (
        <>
            {homeScreen ? <Home /> : <Flashcards />}
        </>
    )
}

const deckReact = [
    { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
    { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces' },
    { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula' },
    { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
    { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
    { question: 'Usamos o NPM para __', answer: 'gerenciar os pacotes necessários e suas dependências' },
    { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes' },
    { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
]