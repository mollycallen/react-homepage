import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowUpAZ, faArrowDownZA } from "@fortawesome/free-solid-svg-icons"
import { Collapse } from 'react-bootstrap'

const SavedPlants = ({ plants, removePlant, getImage }) => {
    const [toggle, setToggle] = useState(true)
    const [ascending, setAscending] = useState(true);

    function isAvailable(plant) {
        return !plant.cycle.includes('Upgrade')
    }

    function fadeAway(el, id) {
        el.closest('tr').style.opacity = 0;
        setTimeout(() => {
            removePlant(id)
        }, 700)
    }
    function sortByName(p1, p2) {
        let name1 = p1.common_name.toLowerCase(),
            name2 = p2.common_name.toLowerCase();

        if (name1 < name2) {
            return ascending ? -1 : 1;
        }
        if (name1 > name2) {
            return ascending ? 1 : -1;
        }
        return 0;
    }
    return (
        <div className="col plant container border border-dark-subtle bg-light p-3 my-4 " >
            <div className="d-flex justify-content-between">
                <h5 className='fw-bold mb-4'>Saved Plants -
                    {plants.length === 1 ?
                        <span style={{ fontSize: '.9rem' }}> {plants.length} Plant</span>
                        :
                        <span style={{ fontSize: '.9rem' }}> {plants.length} Plants</span>
                    }</h5>

                <FontAwesomeIcon className="icon fs-2" icon={'fa-solid ' + (toggle ? 'fa-angle-up' : 'fa-angle-down')} onClick={() => setToggle(prev => !prev)} />
            </div>
            <Collapse in={toggle}>
                <div className='saved-plants-div'>
                    <table className="table table-hover table-bordered ">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name&nbsp;
                                    <FontAwesomeIcon className="icon" icon={ascending ? faArrowUpAZ : faArrowDownZA} onClick={() => setAscending(prev => !prev)} />
                                </th>
                                <th>Details</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '.9rem' }}>
                            {plants?.sort(sortByName).map((plant) =>
                                <tr key={plant.id} >
                                    <td>
                                        <img className='img-thumbnail' alt={plant.common_name}
                                            src={getImage(plant.default_image?.thumbnail)} style={{ width: '100px', minWidth: '100px' }}>
                                        </img></td>
                                    <td>
                                        <div className="d-flex flex-column ">
                                            <div className='text-capitalize fw-bold'>{plant.common_name}</div>
                                            {isAvailable(plant) && (<>
                                                {plant.other_name?.length > 0 &&
                                                    <div>
                                                        <span className='label'>Other Names:</span>

                                                        {plant.other_name.toString()}
                                                    </div>
                                                }

                                                <div>
                                                    <span className='label'>Scientific Name:</span>
                                                    {plant.scientific_name[0]}
                                                </div>
                                            </>)}
                                        </div>
                                    </td>

                                    <td>
                                        {isAvailable(plant) && (<>
                                            <div> {plant.cycle}</div>
                                            <div><span className='label'>Light:</span> {plant.sunlight.toString()}</div>
                                            <div><span className='label'>Water:</span> {plant.watering}</div>
                                        </>)}
                                    </td>

                                    <td className='text-center'>
                                        <FontAwesomeIcon onClick={(e) => { fadeAway(e.target, plant.id); }} icon={faTrash} className='icon'> </FontAwesomeIcon>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Collapse>
        </div >
    )
}

export default SavedPlants
