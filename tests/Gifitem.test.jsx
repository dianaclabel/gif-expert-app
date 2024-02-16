import { render } from "@testing-library/react";
import { GifItem } from "../src/components/Gifitem";

describe("Pruebas de componentes", () => {
  test("Prueba al componente <GifGrid/>", () => {
    const title = "One punch ";
    const url =
      "https://media4.giphy.com/media/Qm3xCXWifrgzb9aEqg/giphy.gif?cid=42367ee0x2m6sj8mfrvlwpus1n00rc6n1srgf79b6b01r7hv&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    render(<GifItem title={title} url={url} />);
  });
});
