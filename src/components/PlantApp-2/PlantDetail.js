import { useRef } from 'react'
import { useFetch } from '../../hooks/UseFetch';

const PlantDetail = ({ id, getImage }) => {
    const API_KEY = useRef(process.env.REACT_APP_PLANT_API_KEY);
    const { data, isLoading, errorMessage } = useFetch(`https://perenual.com/api/species/details/${id}?key=${API_KEY.current}`)

    return (
        <div className='plant'>
            {errorMessage &&
                <p>Plant data not available right now.  Please try again later.</p>
            }
            {isLoading &&
                <p>Loading data...</p>
            }
            {data &&
                <div >
                    <div className='row mb-3'>
                        <img alt={data.common_name} className='col-md-4 rounded'
                            src={getImage(data.default_image?.small_url)} style={{ objectFit: 'cover' }}></img>
                        <p className='col'>{data.description}</p>
                    </div>

                    <p>
                        <span className="label">Type: </span>{data.type}
                    </p>
                    <p>
                        <span className="label">Dimension: </span>{data.dimension}
                    </p>

                    <p>
                        <span className="label">Light: </span><span className="text-capitalize">{data.sunlight?.toString()}</span>
                    </p>
                    <p>
                        <span className="label">Water: </span>{data.watering}
                    </p>
                    <p>
                        <span className="label">Growth Rate: </span>{data.growth_rate}
                    </p>
                    <p>
                        <span className="label">Hardiness: </span>{data.hardiness.min} - {data.hardiness.max}
                    </p>
                    <p>
                        <span className="label">Care Level: </span>{data.care_level}
                    </p>
                    <p>
                        <span className="label">Invasive: </span>{data.invasive ? 'Yes' : 'No'}
                    </p>
                    <p>
                        <span className="label">Propagation: </span>{data.propagation.toString()}
                    </p>
                </div>
            }
        </div>
    )
}

export default PlantDetail
