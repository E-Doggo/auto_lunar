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

  it("Auto se movera al este", () => {
    expect(car.ejecutar("ADA")).toEqual("1,1E");
  })

  it("Auto retrocedera al oeste", () => {
    expect(car.ejecutar("ADAAAIIA")).toEqual("2,1O");
  })
  it("Auto se movera sobre el sur", () => {
    expect(car.ejecutar("ADAADA")).toEqual("2,0S");
  })
  it("Auto no se podra salir por el Norte", () => {
    expect(car.ejecutar("AAAAAAAAAAAAAAAAAAAAAAAAAA")).toEqual("0,10N");
  })
  it("Auto no se podra salir por el Este", () => {
    expect(car.ejecutar("DAAAAAAAAAAAAAAAAAAAAAAAAAAAA")).toEqual("10,0E");
  })
  it("Auto no se podra salir por el Oeste", () => {
    expect(car.ejecutar("IA")).toEqual("0,0O");
  })
  it("Auto no se podra salir por el Sur", () => {
    expect(car.ejecutar("DDA")).toEqual("0,0S");
  })

});
