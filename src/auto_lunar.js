
class Auto
{
  constructor()
  {
    this.posX = 0;
    this.posY = 0;
    this.direcciones = ["N", "E", "S", "O"];
    this.direccion = 0;
  }

  ejecutar(cadena) {
    for (let i =0; i < cadena.length; i++)
    {
      if (cadena[i] == 'A')
      {
        this.avanzar();
      }
      else
      {
        this.girar(cadena[i]);
      }
    }
    return this.direccionCadena();
  }


  avanzar()
  {
    let direcActual = this.direcciones[this.direccion];
    if(direcActual = "N")
    {
      this.posY += 1;
    }
  }
  
  girar(char)
  {
    if(char == "D")
    {
      this.direccion +=1;
      if (this.direccion > 3)
      {
        this.direccion = 0;
      }
    }
    if (char == "I")
    {
      this.direccion -=1;
      if (this.direccion < 0)
      {
        this.direccion = 3
      }
    }
  }
  
  direccionCadena()
  {
    let str = "";
    str += this.posX +","+ this.posY + this.direcciones[this.direccion];
    return str;
  }
  
}
export default Auto;
