import { useState } from 'react'
import { Modal } from 'react-bootstrap';

const RecipePreview = ({ data }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="recipe-preview" onClick={() => setShowModal(true)}>
                <img alt={data.label} src={data.images.SMALL.url}></img>
                <p>{data.label}</p>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} className='recipe-card modal-lg' fullscreen={'sm-down'}>
                <Modal.Header className='d-flex align-items-start modal-hdr' >
                    {data.label}
                    <button className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                </Modal.Header>
                <Modal.Body className='p-3 bg-light'>
                    <div className='d-flex '>
                        <div>
                            <img src={data.image} alt={data.label} className='img-thumbnail'></img>
                            <div className='recipe-sub my-3'>
                                <div>
                                    <span className='label'>Total Time: </span>{data.totalTime === 0 ? 'Not Specified' : `${data.totalTime} min`}
                                </div>
                                <div>
                                    <span className='label'> Yields:</span> {data.yield} servings
                                </div>
                                <div>
                                    <span className='label'>Calories: </span> {Math.round(data.calories)}
                                </div>
                            </div>
                        </div>

                        <div className='ps-3'>
                            <p className='label'>Ingredients:</p>
                            <ul className='ingredients'>
                                {data.ingredientLines.map((entry, index) =>
                                    <li className='ingredient-line' key={index}>{entry}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <Modal.Footer>
                        <div>
                            Click <a href={data.url} target='_blank' rel="noreferrer"><button className="btn here-btn">HERE</button></a> for recipe instructions.
                        </div>

                    </Modal.Footer>

                </Modal.Body >

            </Modal >
        </>

    )
}

export default RecipePreview
