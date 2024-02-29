import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Con esta linea de codigo estamos diciendole que haga un mock completo de este path
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One punch";
  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("cargando..."));
    expect(screen.getByText(category));
    screen.debug();
  });

  test("Debe de mostrar items cuando se cargan las imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: false,
    });

    render(<GifGrid category={category} />);
  });
});