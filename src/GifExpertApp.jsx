import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// import React from "react";
// Despues de la version 17 de react ya no es necesario estar importando react a cada uno.

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Titanic",
    "Dune",
    "Gato con botas",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  console.log(categories);

  return (
    <div>
      <>
        <h1 className="title-principal">GifMovieApp🎬</h1>

        <AddCategory onNewCategory={(event) => onAddCategory(event)} />

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </>
    </div>
  );
};
