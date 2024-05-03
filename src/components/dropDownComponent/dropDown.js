import {useRef, useState } from "react";
import './styles.css';
import { useDispatch } from "react-redux";
import { setDropdownValue } from "../../store/Redux/action";
import { Locales } from "../../locales/locales";

const Dropdown = ({
  options,
  label,
  id,
  item
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState();

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const selectOption = (option) => {
    setQuery(() => "");
    setValue(option[label]);
    setIsOpen((isOpen) => !isOpen);
    dispatch(setDropdownValue(item, option[label]));
  };
  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

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
    setQuery("");
    setValue(null);
    dispatch(setDropdownValue(item,''));
  };

  return (
    <>
    <div className="dropdown">
        <div className="control">
            <div className="selected-value">{Locales[item]}</div>
            <input className="select__input"
                 ref={inputRef}
                 type="text"
                 value={getDisplayValue()}
                 style={{ backgroundColor: getDisplayValue().length === 0 ? 'transparent' : 'white' }}
                 onChange={(e) => {
                   setQuery(e.target.value);
                   setValue(null);
                 }}
                 onClick={toggle}
            />
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
    </>
  );
};

export default Dropdown;
