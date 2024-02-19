import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Pruebas de componentes", () => {
  const title = "One punch";
  const url =
    "https://media4.giphy.com/media/Qm3xCXWifrgzb9aEqg/giphy.gif?cid=42367ee0x2m6sj8mfrvlwpus1n00rc6n1srgf79b6b01r7hv&ep=v1_gifs_search&rid=giphy.gif&ct=g";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el  URL y el ALT indicado ", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
