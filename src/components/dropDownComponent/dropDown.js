import { useEffect, useRef, useState } from "react";
import './styles.css';

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

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option) => {
    setQuery(() => "");
    setValue(option[label]);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (value) return value;

    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <>
    <div class="dropdown">
        <div class="control">
            <div class="selected-value">{item}</div>
            <input class="select__input"
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
        </div>
        {options.length >0 && 
        <>
         <div class="listDrop">
           <span class="indicatorSeparator"></span>
            <div class="indicatorContainer">
            <div 
            height="20" 
            width="20"
            viewBox="0 0 20 20"
            focusable="false"
            class={`arrow ${isOpen ? "open" : ""}`}
            style={{marginLeft:'20px'}}></div>
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
