const palabras = [
  { desordenadas: "recilarc", ordenadas: "reciclar", descripcion: "Proceso de convertir materiales usados en nuevos productos para reducir el desperdicio.", imagen: "reciclar.png" },
  { desordenadas: "dreve", ordenadas: "verde", descripcion: "Relacionado con prácticas y tecnologías que minimizan el impacto ambiental.", imagen: "verde.jpg" },
  { desordenadas: "orroha", ordenadas: "ahorro", descripcion: "Uso eficiente de recursos para evitar el desperdicio y reducir costos.", imagen: "ahorro.jpg" },
  { desordenadas: "natarulaze", ordenadas: "naturaleza", descripcion: "Conjunto de seres vivos y su entorno que deben ser protegidos y preservados", imagen: "naturaleza.jpg" },
  { desordenadas: "coe", ordenadas: "eco", descripcion: "Prefijo que denota prácticas y productos que son respetuosos con el medio ambiente.", imagen: "eco.png" }
];
 




let flag = 0;
let intentos = 0;
const maxIntentos = 4;
 




function mostrarProximaPalabra() {



  if (flag < palabras.length) {


    document.getElementById('palabraDesordenada').textContent = palabras[flag].desordenadas;
    document.getElementById('resultado').textContent = '';
    document.getElementById('resultado').style.backgroundColor = ''; 
    document.getElementById('descripcion').textContent = '';
    document.getElementById('palabraIngresada').value = '';
    document.getElementById('palabraIngresada').style.display = 'block';
    document.getElementById('enviarPalabra').style.display = 'block';


 
    const img = document.getElementById('imagenPalabra');
    img.src = palabras[flag].imagen;
    img.alt = palabras[flag].ordenadas;
    img.style.display = 'block';
 



    intentos = 0;



  } else {
    document.getElementById('palabraDesordenada').textContent = "¡Has completado todas las palabras!";
    document.getElementById('palabraIngresada').style.display = 'none';
    document.getElementById('enviarPalabra').style.display = 'none';
    document.getElementById('felicitaciones').style.display = 'block';
 
    const img = document.getElementById('imagenPalabra');
    img.style.display = 'none';
  }



}
 
document.getElementById('comenzarJuego').addEventListener('click', () => {
  document.getElementById('bienvenida').style.display = 'none';
  document.getElementById('pantallaJuego').style.display = 'block';
  mostrarProximaPalabra();
});
 
document.getElementById('enviarPalabra').addEventListener('click', () => {


  const palabraIngresada = document.getElementById("palabraIngresada").value.toLowerCase();
  if (palabraIngresada === palabras[flag].ordenadas) {
    document.getElementById('resultado').textContent = "¡Correcto!";
    document.getElementById('resultado').style.fontWeight = "bold";
    document.getElementById('resultado').style.color = "white";
    document.getElementById('descripcion').textContent = palabras[flag].descripcion;
    flag++;
    setTimeout(mostrarProximaPalabra, 3000);
  } else {


    intentos++;

    if (intentos < maxIntentos) {
      document.getElementById('resultado').textContent = `Incorrecto, intenta de nuevo. Intentos restantes: ${maxIntentos - intentos}`;
      document.getElementById('resultado').style.fontWeight = "bold";
      document.getElementById('resultado').style.color = "white";
    } else {
      document.getElementById('resultado').textContent = "Ups! , has alcanzado el número máximo de intentos. Reinicia el juego.";
      document.getElementById('resultado').style.color = "#BF4848";
      document.getElementById('resultado').style.backgroundColor = "#16330B";
      document.getElementById('palabraIngresada').style.display = 'none';
      document.getElementById('enviarPalabra').style.display = 'none';
    }
  }
});
 
function reiniciarJuego() {
  flag = 0;
  intentos = 0;

  document.getElementById('resultado').textContent = '';

  document.getElementById('resultado').style.color = ''; 

  document.getElementById('resultado').style.backgroundColor = ''; 
  document.getElementById('descripcion').textContent = '';
  document.getElementById('palabraIngresada').value = '';
  document.getElementById('palabraIngresada').style.display = 'block';


  document.getElementById('enviarPalabra').style.display = 'block';
  document.getElementById('felicitaciones').style.display = 'none';
  document.getElementById('resultado').style.display = 'block';


  mostrarProximaPalabra();
}
 
document.getElementById('reiniciarJuego').addEventListener('click', () => {
  document.getElementById('bienvenida').style.display = 'block';
  document.getElementById('pantallaJuego').style.display = 'none';


  reiniciarJuego();
});
 
document.getElementById('reiniciarJuegoBienvenida').addEventListener('click', () => {
  document.getElementById('bienvenida').style.display = 'block';
  document.getElementById('pantallaJuego').style.display = 'none';
  
  reiniciarJuego();
});