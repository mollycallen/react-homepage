import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Tools.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, } from '@fortawesome/fontawesome-free-solid'
import BreadcrumbNav from './BreadcrumbNav';

const path = process.env.PUBLIC_URL;

const Tools = () => {
    let { id } = useParams();

    const TOOLS = [
        {
            title: 'Calculator',
            url: `${path}/Calculator/index.html`
        },
        {
            title: 'Todo List',
            url: `${path}/Todo/index.html`
        },
        {
            title: 'Stopwatch',
            url: `${path}/Stopwatch/index.html`
        },
        {
            title: 'Timer',
            url: `${path}/Timer/index.html`
        },
        {
            title: 'HSL Color Picker',
            url: `${path}/HSL/index.html`
        },

    ]
    const [activeToolId, setActiveToolId] = useState(id || 1);
    const [activeTool, setActiveTool] = useState(TOOLS[activeToolId]);

    function changeTool(id) {
        setActiveToolId(id);
        setActiveTool(TOOLS[id]);
    }

    return (
        <div className='main-container'>
            <BreadcrumbNav currentPage={'Tools'} />

            <div className="tools">

                <div className='nav nav-pills flex-column'>
                    {TOOLS.map((tool, index) =>
                        <button key={index} className={`nav-link ${activeToolId === index ? 'active' : ''}`} onClick={() => changeTool(index)}>{tool.title}&nbsp;
                            {activeToolId === index && <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>}
                        </button>
                    )}
                </div>
                <div className='tool-area'>
                    <iframe title="workbench" src={activeTool.url}></iframe>
                </div>
            </div>
        </div>
    )
}

export default Tools
