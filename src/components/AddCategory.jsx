import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue(" ");
  };

  return (
    // aria-label nos permite que testing -library este enterado de que este label existe
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
