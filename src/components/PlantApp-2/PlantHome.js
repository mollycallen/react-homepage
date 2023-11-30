import { useRef, useState, useEffect } from "react";
import SavedPlants from "./SavedPlants";
import PlantFinder from "./PlantFinder";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import BreadcrumbNav from '../BreadcrumbNav';
import '../../styles/Plant.css';

const PlantHome = () => {
	const path = process.env.PUBLIC_URL;
	const containerRef = useRef();
	const [savedPlants, setSavedPlants] = useState([]);

	useEffect(() => {
		let saved = JSON.parse(localStorage.getItem("plant") || "[]");
		setSavedPlants(saved);
	}, []);


	function getImage(imageName) {
		if (imageName && imageName !== '') {
			return imageName;
		} else {
			return path + '/images/noimage.jpg';
		}
	};
	function saveToStorage(plant) {
		let saved = JSON.parse(localStorage.getItem("plant") || "[]");
		saved.push(plant);
		window.localStorage.setItem("plant", JSON.stringify(saved));
	}

	function togglePlant(plant) {
		//console.log("toggle plant in garden: ", plant);
		if (isSaved(plant.id)) {
			removePlant(plant.id);
		} else {
			//console.log('saving plant: ', plant.id)
			setSavedPlants([...savedPlants, plant]);
			saveToStorage(plant);
		}
	}
	function removePlant(id) {
		//console.log("remove plant", id);
		let arr = savedPlants.filter((item) => item.id !== id);
		setSavedPlants([...arr]);
		window.localStorage.setItem("plant", JSON.stringify(arr));
	}
	function isSaved(id) {
		let arr = savedPlants.filter((plant) => plant.id === id);
		return arr.length > 0;
	}
	return (
		<div
			ref={containerRef}
			className="container-fluid plant p-3 "
			style={{ backgroundColor: "white" }}
		>
			<BreadcrumbNav currentPage={"Plant Tracker"} />
			<div className="d-flex mt-3">

				<div className='title display-font mt-2'>
					<FontAwesomeIcon className="px-2" icon="fa-solid fa-seedling" />
					Plant Tracker <div className="subtitle px-5">-- for the garden-minded, green-thumbed, outdoorsy-types</div>
				</div>
			</div>
			<div className="container col-md-9">
				<Alert variant="warning" dismissible fade="true">
					<p style={{ fontSize: ".85rem" }} className="mb-0">
						<FontAwesomeIcon
							className="fs-3 pe-2"
							icon={faTriangleExclamation}
						/>
						This app utilizes the API available from{" "}
						<a target="_blank" href="http://www.perenual.com" rel="noreferrer">
							perenual.com
						</a>
						. The amount of free data that can retrieved is{" "}
						<span className="fw-bold">limited</span> daily. When this limit is
						reached, only plant names are available.
					</p>
				</Alert>
			</div>
			<SavedPlants plants={savedPlants} removePlant={removePlant} getImage={getImage} />

			<PlantFinder togglePlant={togglePlant} isSaved={isSaved} getImage={getImage} />
		</div>
	);
};

export default PlantHome;
