import { useState, useEffect, } from 'react'
import { useFetch } from '../hooks/UseFetch';
import { faCat, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Cat.css';

const MAX_CAT_FACTS = 15;

const Cat = () => {

    const [count, setCount] = useState(1);
    const [catData, setCatData] = useState([]);

    const { data, isLoading, errorMessage } = useFetch(`https://catfact.ninja/fact?max_length=160&ref=${count}`);

    useEffect(() => {

        if (data) {
            if (!catData.includes(data.fact)) {
                setCatData(prev => [...prev, data.fact])
            }
        }
    }, [data, catData])

    function getAnotherFact() {
        setCount(prev => prev + 1)
    }

    return (
        <div className='box cat-box'>
            <div className='heading'>

                Random Cat Facts...
            </div>
            <div className='cat-fact'>
                {errorMessage && <p>The random cat facts are not available right now.</p>}
                {/* {isLoading && <p>Loading...</p>} */}

                <ul className='list'>
                    {catData.map((entry, index) => (index < count ? <li key={index}>{entry}</li> : ''))}
                </ul>


                {(count < MAX_CAT_FACTS) &&
                    <div className='btn-div'>
                        <button className='btn' onClick={getAnotherFact}>
                            <FontAwesomeIcon className='icon' icon={faCat}></FontAwesomeIcon>
                            Get Another Fact&nbsp;<FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></button>
                    </div>
                }

            </div>

        </div>
    )
}

export default Cat
