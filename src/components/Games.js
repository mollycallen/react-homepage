import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Games.css'
import BreadcrumbNav from './BreadcrumbNav';
const path = process.env.PUBLIC_URL;

const Games = () => {

    let { id } = useParams();
    const GAMES = [
        {
            title: 'Tic Tac Toe',
            url: `${path}/TicTacToe/index.html`
        },
        {
            title: 'Matching Game',
            url: `${path}/Memory/index.html`
        },
        {
            title: 'Jeopardy',
            url: `${path}/Jeopardy/index.html`
        },
        {
            title: 'Pong',
            url: `${path}/Pong/index.html`
        },
        {
            title: 'Simon',
            url: `${path}/Simon/index.html`
        },
        {
            title: 'Flappy Bird',
            url: `${path}/FlappyBird/index.html`
        },
        {
            title: 'Dino Game',
            url: `${path}/Dino/index.html`
        }

    ]
    const [activeGameId, setActiveGameId] = useState(id || 0);
    const [activeGame, setActiveGame] = useState(GAMES[activeGameId]);

    function changeGame(id) {
        setActiveGameId(id);
        setActiveGame(GAMES[id]);
    }
    return (
        <div className='game-box container-fluid px-5 py-2' name='games' >
            <BreadcrumbNav currentPage={"Games"} />
            <div className='d-flex justify-content-between pt-2'>
                <ul className="nav nav-pills nav-fill w-100 ">
                    {GAMES.map((game, index) =>
                        <li key={index} className='tab nav-item game-button' >
                            <a onClick={() => changeGame(index)} href="#games" className={`nav-link ${activeGameId === index ? 'active' : ''}`} >{game.title}</a>
                        </li>
                    )}
                </ul>

            </div>
            <div className='game-area mt-3 rounded '>
                <iframe title="gameboard" src={activeGame.url}></iframe>

            </div>
        </div >
    )
}

export default Games
