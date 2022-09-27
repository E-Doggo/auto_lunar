
class Auto
{
  constructor()
  {
    this.posX = 0;
    this.posY = 0;
    this.direcciones = ["N", "E", "S", "O"];
    this.direccion = 0;
    this.margen = 10;
  }

  ejecutar(cadena) {
    for (let i =0; i < cadena.length; i++)
    {
      if (cadena[i].toUpperCase() == "A")
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
    if(direcActual == "N")
    {
      this.posY += 1;
      this.fueraDelMargen();
    }
    if(direcActual == "E")
    {
      this.posX += 1;
      this.fueraDelMargen();
    }
    if(direcActual == "O")
    {
      this.posX -= 1;
      this.fueraDelMargen();
    }
    if(direcActual == "S")
    {
      this.posY -= 1;
      this.fueraDelMargen();
    }
  }

  fueraDelMargen()
  {
    if(this.posX > this.margen)
    {
      this.posX -= 1;
    }
    if(this.posY > this.margen)
    {
      this.posY -= 1;
    }
    if (this.posX < 0)
    {
      this.posX +=1;
    }
    if (this.posY < 0)
    {
      this.posY +=1;
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
