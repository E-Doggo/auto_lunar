import ejecutar from "./auto_lunar.js";

describe("Mover auto", () => {
  it("El auto devolvera la posicion actual", () => {
    expect(ejecutar("")).toEqual("0,0");
  });
  it("El auto devolvera avanzar una posicion al Norte", () => {
    expect(ejecutar("")).toEqual("0,0");
  });
});
