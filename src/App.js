import './styles/reset.css';
import './styles/style.css';
import { useState } from 'react';
import Home from './components/Home';
import Flashcards from './components/Flashcards';
import Card from './components/Card';

export default function App() {
    const [changeScreen, setChangeScreen] = useState(true);
    const [getDeck, setGetDeck] = useState();

    const decks = [
        {
            title: 'React',
            questions: [
                { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
                { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces' },
                { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula' },
                { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
                { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
                { question: 'Usamos o NPM para __', answer: 'gerenciar os pacotes necessários e suas dependências' },
                { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes' },
                { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
            ]
        },
        {
            title: 'JavaScript',
            questions: [
                { question: 'Qual o papel do JavaScript na construção de um site?', answer: 'Nos permite criar sites mais interativos, reagindo ao comportamento do usuário' },
                { question: 'O que é a Árvore DOM?', answer: 'É a árvore de elementos do HTML representada como objetos no JavaScript' },
                { question: 'O que são Higher-Order Functions?', answer: 'São funções que recebem outras funções como parâmetro' },
                { question: 'Se eu quero a partir de uma array de números, gerar uma nova array de mesmo tamanho da original, porém com os valores duplicados, qual a melhor função da array para esse propósito?', answer: 'Função map (o map gera um novo array a partir do array que a chamou, rodando uma função para cada item)' },
                { question: 'Se eu quero a partir de uma array de números, gerar uma array contendo somente os números ímpares da array original, qual a melhor função da array para esse propósito?', answer: 'Função filter' },
                { question: 'Qual a melhor maneira de alterar estilos CSS através do JavaScript?', answer: 'Adicionando ou removendo classes conforme a necessidade' },
                { question: 'O que é um evento no JavaScript?', answer: 'Ações ou ocorrências que acontecem nos elementos acarretadas pelo usuário' },
                { question: 'O que são Promises?', answer: 'Uma variável que guarda uma promessa que depois de um tempo se tornará um valor ou um erro' },
                { question: 'Por que usar promises/assincronismo?', answer: 'Para não travar a execução do código (Se o código não continuasse enquanto a resposta ainda não chegou, o código iria ficar esperando, logo, poderia travar)' },
                { question: 'Qual o tipo dos seguintes valores: "Driven", 2021, { nome: "JavaScript", versao: "ECMA2016" }', answer: 'String, Number, Object' },
                { question: 'Qual o retorno da expressão "banana" * 3 ?', answer: 'NaN (Not a Number, não é um número)' },
                { question: 'Qual diferença de requisições GET e POST?', answer: 'GET para pegar informações e POST para enviar informações' },
                { question: 'O que são Status Codes?', answer: 'Códigos para dar mais informações sobre uma requisição (sucesso/erro de cliente/erro de servidor)' }
            ]
        }
    ];

    function chooseDeck(deckChoosed, screen) {
        setGetDeck(deckChoosed);
        setChangeScreen(screen)
        console.log(deckChoosed);
    }

    return (
        <>
            {
                changeScreen ?
                    <Home chooseDeck={chooseDeck} decks={decks} /> :
                    <Flashcards>
                        <Card />
                    </Flashcards>
            }
        </>
    )
}