import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"

const PaginationFooter = ({ current, last, setCurrentPage }) => {
    const [pages, setPages] = useState([])

    useEffect(() => {
        let arr = [];
        let start = Math.floor(current / 10) * 10;
        start = (start === 0) ? 1 : start;
        let end = (current % 10 === 0) ? current + 10 : Math.ceil(current / 10) * 10
        end = (end > last) ? last : end;
        for (let i = start; i <= end; i++) {
            arr.push(i)
        }
        setPages([...arr]);
    }, [last, current]);

    return (
        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}>
            {current > 1 && (<>

                <FontAwesomeIcon style={{ borderLeft: '2px solid #000', paddingLeft: '1px' }} onClick={() => setCurrentPage(1)} icon={faAngleLeft} />
                <FontAwesomeIcon onClick={() => setCurrentPage(current - 1)} icon={faAngleLeft} />
            </>)
            }
            {pages.map((page) => (page === current ? <p style={{ fontWeight: 'bold', marginBottom: 0 }} key={page}>{page}</p> : <button key={page} onClick={() => setCurrentPage(page)} className='btn' style={{ padding: '.5rem' }}>{page}</button>)
            )}


            {current < last && (<>
                <FontAwesomeIcon onClick={() => setCurrentPage(current + 1)} icon={faAngleRight} />
                <FontAwesomeIcon style={{ borderRight: '2px solid #000', paddingRight: '1px' }} onClick={() => setCurrentPage(last)} icon={faAngleRight} />
            </>)

            }
        </div>
    )
}

export default PaginationFooter
