export const SET_DROPDOWN_VALUE = "SET_DROPDOWN_VALUE";

export const setDropdownValue = (item, value) => ({
  type: SET_DROPDOWN_VALUE,
  payload: { item, value },
});