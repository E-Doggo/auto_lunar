import ejecutar from "./auto_lunar.js";

describe("Mover auto", () => {
  it("El auto devolvera la posicion actual", () => {
    expect(ejecutar("")).toEqual("0,0N");
  });
  it("El auto anazara una posicion al norte", () => {
    expect(ejecutar("A")).toEqual("0,1N");
  });
});
