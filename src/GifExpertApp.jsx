import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

// import React from "react";
// Despues de la version 17 de react ya no es necesario estar importando react a cada uno.

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  console.log(categories);

  return (
    <div>
      <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={(event) => onAddCategory(event)} />

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </>
    </div>
  );
};
