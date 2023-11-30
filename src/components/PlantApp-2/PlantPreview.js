import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, } from "@fortawesome/free-solid-svg-icons"
import { Modal, Button } from 'react-bootstrap'
import PlantDetail from './PlantDetail'

const PlantPreview = ({ plant, isSaved, togglePlant, getImage }) => {
    const [showMore, setShowMore] = useState(false);

    function isAvailable(plant) {
        return !plant.cycle.includes('Upgrade')
    }

    return (
        <div className="col">
            <div className="plant card text-capitalize" style={{ width: '240px' }} >
                <div className="card-header d-flex justify-content-between align-items-center py-4 " style={{ backgroundColor: 'var(--dark)', color: 'white' }}>
                    <div className='fw-bold '>{plant.common_name}</div>

                    <FontAwesomeIcon icon={faHeart} onClick={() => togglePlant(plant)} className={isSaved(plant.id) ? 'red' : ''} />

                </div>
                <img className="card-img rounded-0" alt={plant.common_name}
                    src={getImage(plant.default_image?.thumbnail)} style={{ objectFit: 'cover' }}></img>

                {isAvailable(plant) && (
                    <div className='card-body fs-6 p-2 ' >
                        <div className="border-bottom px-1 py-2">{plant.cycle}</div>
                        {plant.other_name.length > 0 &&
                            <div className="border-bottom px-1 py-2"><span className='label'>Other Names:</span> {plant.other_name.toString()}</div>
                        }
                        {plant.scientific_name[0] &&
                            <div className="px-1 py-2" ><span className='label'>Scientific Name: </span>
                                {plant.scientific_name[0]}</div>
                        }


                        <Button className='w-100 mt-3' variant='secondary' onClick={() => setShowMore(true)}>
                            Show More
                        </Button>

                        <Modal show={showMore} onHide={() => setShowMore(false)} scrollable={true} size='lg' fullscreen='sm-down'>
                            <Modal.Header closeButton>
                                <Modal.Title className='text-capitalize'>{plant.common_name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><PlantDetail id={plant.id} getImage={getImage} /></Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowMore(false)}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )}
            </div >
        </div >

    )
}

export default PlantPreview
