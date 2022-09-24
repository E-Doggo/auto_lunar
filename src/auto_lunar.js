let posX = 0;
let posY = 0;
const direcciones = ["N", "E", "S", "O"];


function avanzar(cadena)
{
  for (let i =0; i < cadena.length; i++)
  {
    if (cadena[i] == 'A')
    {
      posY += 1
    }
  }
}

function ejecutar(cadena) {
  let str = "";
  avanzar(cadena);
  str += posX +","+ posY + direcciones[0];
  return str;
}

export default ejecutar;
