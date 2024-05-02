import React from "react";
import './styles.css';
import Dropdown from "../dropDownComponent/dropDown";
import { SEARCH_CONSTANTS } from "../../locales/constants";
import { Locales } from "../../locales/locales";

const FilterList = () => 
{
    console.log(Object.keys(SEARCH_CONSTANTS.experience), "--")
    return (
        <div class="filterContainer">
            {Object.keys(SEARCH_CONSTANTS).map((element,index) => {
                return(
                <Dropdown
                key={index}
                options={SEARCH_CONSTANTS[element]}
                label="name"
                id="id"
                item={Locales[element]}
             />
            )})
            }
        </div>
    )
}
export default FilterList;