import { useState } from "react";
import './styles.css';
import { useDispatch } from "react-redux";
import { setDropdownValue } from "../../store/Redux/action";
import { Locales } from "../../locales/locales";

const Dropdown = ({
  options,
  label,
  id,
  item,
  multiSelectoption
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState();
  const [list, setList] = useState([]);

  const dispatch = useDispatch();

  const selectOption = (option) => {
    setQuery(() => "");
    //this taking time to update list
    // setList(previous => {
    //   const updatedList = [...previous, option[label]];
    //   return updatedList;
    // });
    list.push(option[label]);
    setValue(option[label]);
    setIsOpen((isOpen) => !isOpen);
    dispatch(setDropdownValue(item, multiSelectoption ? list : option[label].toLowerCase()));
  };

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  }

  const getDisplayValue = () => {
    if (query){
      return query;
    };
    if (value) return value;
    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1 || !query
    );
  };

  const clearInput = () => {
    setList([]);
    setQuery("");
    toggleDropdown();
    setValue(null);
    dispatch(setDropdownValue(item,''));
  };

  const removeItemFromList = (value) => {
    const updatedList = list.filter((inputValue) => inputValue !=value);
    setList(updatedList);
    dispatch(setDropdownValue(item, updatedList));
    list.length && setValue(null) && setQuery("");
  };

  return (
    <div style={{display:'grid'}}>
    {(value || query) && <p className="searchLabel">{Locales[item]}</p>}
    <div className="dropdown">
        {multiSelectoption && 
        list.map((values,index) => {
          return(
            <div className="multipleValueContainer"  onClick={() => removeItemFromList(values)} key={index}>
            <div class="labelValue">{values}</div>
            <div role="button" className="labelButton" aria-label="Remove backend">x</div>
             </div>
        )})}  
        <div className="innerContainer" onClick={toggleDropdown}>
            <div className="selected-value">{!value && !query && !list.length && Locales[item]}</div>
            <div className="selectInputContainer">
              <input className="selectInput"
                  type="text"
                  value={(list.length && multiSelectoption) ? '' : getDisplayValue()}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setValue("");
                    if(multiSelectoption)
                      {
                        list.push(e.target.value);
                      }
                    dispatch(setDropdownValue(item, multiSelectoption ? list : e.target.value));
                  }}
              />
         </div>
         {getDisplayValue().length > 0 && (
                <button className="clear-button" onClick={clearInput}>x</button>
              )}
        </div>
        {options.length >0 && 
        <>
         <div className="listDrop" onClick={toggleDropdown}>
           <span className="indicatorSeparator"></span>
            <div className="indicatorContainer">
            <div 
              height="20" 
              width="20"
              viewBox="0 0 20 20"
              focusable="false"
              className={`arrow ${isOpen ? "open" : ""}`}
              style={{marginLeft:'20px'}}>    
            </div>
          </div>
        </div>
        <div className={`options ${isOpen ? "open" : ""}`}>
        {filter(options).map((option, index) => {
          return (
            <div
              onClick={() => selectOption(option)}
              className={`option ${
                option[label] === value ? "selected" : ""
              }`}
              key={`${id}-${index}`}
              style={{fontSize:'16px', textAlign:'start', color:'black' , paddingLeft:'10px'}}
            >
              {option[label]}
            </div>
          );
        })}
      </div>
      </>
      }
    </div>
    </div>
  );
};

export default Dropdown;
