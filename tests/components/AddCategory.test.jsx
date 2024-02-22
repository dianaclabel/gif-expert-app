import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    //"texbox" se refiere al input que tenemos en AddCategory, solo que test library lo conoce como  "texbox" -.-
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });

  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    // TODO:???

    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    // Recuerda colocar un area-label para que testing-librery pueda saber que tenemos ese label
    const form = screen.getByRole("form");

    // fireEvent simula cualquier tipo de evento
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();

    expect(input.value).toBe("");
  });
});
