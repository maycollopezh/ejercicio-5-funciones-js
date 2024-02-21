const duracionLuzRoja = 3000;  // 3 segundos
const duracionLuzAmarilla = 1000;  // 1 segundo
const duracionLuzVerde = 2000;  // 2 segundos

function cambiarColor() {
    setTimeout(() => {
        // Cambiar a luz amarilla
        document.getElementById("rojo").style.background = "#f00";
        document.getElementById("amarillo").style.background = "#ff0";
        document.getElementById("verde").style.background = "#f00";  // Apagar luz verde

        setTimeout(() => {
            // Cambiar a luz verde
            document.getElementById("rojo").style.background = "#f00";
            document.getElementById("amarillo").style.background = "#f00";  // Apagar luz amarilla
            document.getElementById("verde").style.background = "#0f0";
            
            setTimeout(() => {
                // Cambiar a luz roja
                document.getElementById("rojo").style.background = "#0f0";  // Apagar luz roja
                document.getElementById("amarillo").style.background = "#f00";
                document.getElementById("verde").style.background = "#f00";
                cambiarColor();
            }, duracionLuzVerde);
        }, duracionLuzAmarilla);
    }, duracionLuzRoja);
}


cambiarColor();

