import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/UseFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown, } from "@fortawesome/free-regular-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Collapse } from 'react-bootstrap'
import PlantPreview from './PlantPreview'
import PaginationFooter from '../PaginationFooter'
import { ThreeDots } from 'react-loader-spinner'

const cycleArray = [
    {
        label: 'Perennial',
        value: 'perennial'
    },
    {
        label: 'Annual',
        value: 'annual'
    },
    {
        label: 'Biennial',
        value: 'biennial'
    },
    {
        label: 'Biannual',
        value: 'biannual'
    }
]
const waterArray = [
    {
        label: 'Frequent',
        value: 'frequent'
    },
    {
        label: 'Average',
        value: 'average'
    },
    {
        label: 'Minimum',
        value: 'minimum'
    },
    {
        label: 'None',
        value: 'none'
    }
]
const lightArray = [
    {
        label: 'Full Sun',
        value: 'full_sun'
    },
    {
        label: 'Full Shade',
        value: 'full_shade'
    },
    {
        label: 'Part Sun',
        value: 'sun-part_shade'
    },
    {
        label: 'Part Shade',
        value: 'part_shade'
    }
]
const zoneArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const PlantFinder = ({ togglePlant, isSaved, getImage }) => {
    const page = useRef(1);
    const searchInput = useRef();
    const cycleRef = useRef();
    const lightRef = useRef();
    const waterRef = useRef();
    const zoneRef = useRef();
    const API_KEY = useRef(process.env.REACT_APP_PLANT_API_KEY);

    const [toggle, setToggle] = useState(true);
    const [url, setUrl] = useState('');

    useEffect(() => {
        searchInput.current.focus();
    }, [])

    const { data, isLoading, errorMessage } = useFetch(url);
    let lastPage = data?.last_page;

    function getData() {
        let cycle = cycleRef.current.value !== '0' ? `&cycle=${cycleRef.current.value}` : ''
        let light = lightRef.current.value !== '0' ? `&sunlight=${lightRef.current.value}` : ''
        let water = waterRef.current.value !== '0' ? `&watering=${waterRef.current.value}` : ''
        let zone = zoneRef.current.value !== '0' ? `&hardiness=${zoneRef.current.value}` : ''
        let str = searchInput.current.value ? `&q=${searchInput.current.value.trim().replace(' ', '+')}` : '';

        setUrl(`https://perenual.com/api/species-list?&key=${API_KEY.current}&page=${page.current}${str}${light}${water}${zone}${cycle}`);
    }

    function getPage(newPage) {
        page.current = newPage;
        getData();
    }
    return (
        <div className=" container border border-dark-subtle bg-light p-3 shadow-none" >
            <div className="d-flex justify-content-between">
                <h5 className='fw-bold'>Plant Search</h5>
                <FontAwesomeIcon className="icon fs-2" icon={'fa-solid ' + (toggle ? 'fa-angle-up' : 'fa-angle-down')} onClick={() => setToggle(prev => !prev)} />
            </div>
            <Collapse in={toggle}>
                <div>
                    <div className="container-fluid">
                        <div className="form-floating  my-3">
                            <input ref={searchInput} type="search" className="form-control " id="searchStr" placeholder="daisy" aria-label="plant name"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') getData();
                                }} />

                            <label htmlFor="searchStr">Plant name</label>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-3">
                                <div className="form-floating">
                                    {/* select for plant cycle  */}
                                    <select className="form-select" aria-label="Select plant cycle" ref={cycleRef} id='cycle'>
                                        <option value="0">Select...</option>
                                        {cycleArray.map((entry) =>
                                            <option key={entry.value} value={entry.value} >{entry.label}</option>
                                        )}
                                    </select>
                                    <label htmlFor="cycle">Plant Cycle</label>
                                </div>
                            </div>
                            {/* select for water requirement  */}
                            <div className="col-md-6 col-lg-3">
                                <div className="form-floating">
                                    <select className="form-select" aria-label="Select water requirements" ref={waterRef} id='water'>
                                        <option value="0">Select...</option>
                                        {waterArray.map((entry) =>
                                            <option key={entry.value} value={entry.value} >{entry.label}</option>
                                        )}
                                    </select>
                                    <label htmlFor="water">Water</label>
                                </div>
                            </div>

                            {/* select for light requirement  */}
                            <div className="col-md-6 col-lg-3">
                                <div className="form-floating">
                                    <select className="form-select" aria-label="Select light requirements" ref={lightRef} id='light'>
                                        <option value="0">Select...</option>
                                        {lightArray.map((entry) =>
                                            <option key={entry.value} value={entry.value} >{entry.label}</option>
                                        )}
                                    </select>
                                    <label htmlFor="light">Light</label>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="form-floating ">
                                    <select id="zone" ref={zoneRef} className="form-select" aria-label='Select zone'>
                                        <option value="0">Select...</option>
                                        {zoneArray.map((entry) =>
                                            <option key={entry} value={entry} >{entry}</option>
                                        )}</select>
                                    <label htmlFor="zone">Hardiness Zone</label>
                                </div>
                            </div>

                        </div >


                        <button className="w-100 btn btn-primary mt-3" onClick={getData}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search</button>

                    </div>

                    {errorMessage && <div className='msg'>Plant data is not available right now.  Please try back later.</div>}
                    {isLoading && <div className='msg'>Loading
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        /></div>}

                    <div className='row my-3 p-3 gy-3 border-top'>
                        {data && data.data.length > 0 &&
                            data.data.map((plant) =>
                                <PlantPreview key={plant.id} plant={plant} togglePlant={togglePlant} isSaved={isSaved} getImage={getImage} />
                            )
                        }
                        {lastPage > 1 &&
                            <PaginationFooter current={page.current} last={lastPage} setCurrentPage={getPage} />
                        }
                        {data && data.data.length === 0 &&
                            <div>
                                Sorry, no results found. <FontAwesomeIcon color="gray" icon={faFaceFrown} />
                            </div>
                        }
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default PlantFinder
