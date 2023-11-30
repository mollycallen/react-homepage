import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensilSpoon, } from "@fortawesome/free-solid-svg-icons"
import '../../styles/Recipe.css';
import ScrollRecipes from './ScrollRecipes';
import SearchRecipes from './SearchRecipes';
import BreadcrumbNav from '../BreadcrumbNav';

const Recipe = () => {

    return (
        <div className="main-container">
            <BreadcrumbNav currentPage={"Recipe Search"} />
            <div className="title display-font"> <FontAwesomeIcon className='icon' icon={faUtensilSpoon}></FontAwesomeIcon>
                Recipe Search
                <div className="subtitle px-5">-- for those who are cooking-challenged, stuck in a rut, or tired of eating cereal.</div>
            </div>
            <div className='recipe container-lg'>
                <ScrollRecipes></ScrollRecipes>
                <SearchRecipes></SearchRecipes>
            </div>
        </div>
    )
}

export default Recipe
