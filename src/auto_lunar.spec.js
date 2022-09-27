import Auto from "./auto_lunar.js";


describe("Mover auto", () => {
  let car
  beforeEach( () => {
     car = new Auto()
  } );
  it("El auto devolvera la posicion actual", () => {
    expect(car.ejecutar("")).toEqual("0,0N");
  });
  it("El auto avanzara una posicion al norte", () => {
    expect(car.ejecutar("A")).toEqual("0,1N");
  });
  it("El auto girara una posicion al este", () => {
    expect(car.ejecutar("AD")).toEqual("0,1E");
  });
  it("El auto girara una posicion al sur", () => {
    expect(car.ejecutar("ADD")).toEqual("0,1S");
  });
  it("El auto girara una posicion al oeste", () => {
    expect(car.ejecutar("AI")).toEqual("0,1O");
  });
  it("El auto dara toda una vuelta sobre su eje hacia la derecha", () => {
    expect(car.ejecutar("DDDD")).toEqual("0,0N");
  });
  it("El auto dara toda una vuelta sobre su eje hacia la izquierda", () => {
    expect(car.ejecutar("IIII")).toEqual("0,0N");
  })

});
