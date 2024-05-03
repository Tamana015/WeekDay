import React from "react";
import './styles.css';
import Dropdown from "../dropDownComponent/dropDown";
import { SEARCH_CONSTANTS } from "../../locales/constants";

const FilterList = () => 
{
    return (
        <div className="filterContainer">
            {Object.keys(SEARCH_CONSTANTS).map((element,index) => {
                return(
                <Dropdown
                key={index}
                options={SEARCH_CONSTANTS[element]}
                label="name"
                id="id"
                item={element}
             />
            )})
            }
        </div>
    )
}
export default FilterList;