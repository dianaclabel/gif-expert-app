import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Pruebas en <GifGrid />", () => {
  const category = "One punch";
  test("Debe de mostrar el loading inicialmente", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("cargando..."));
    expect(screen.getByText(category));
    screen.debug();
  });

  test("Debe de mostrar items cuando se cargan las imágenes useFetchGifs", () => {});
});
