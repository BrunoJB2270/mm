canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";


/*Completar la variable para que almacene la cordenadas horizontal y vertica*/
var last_position_of_x, last_position_of_y;
    
    color = "black";
    width_of_line = 1;

    /*Agregar detector de evento del movimiento addEventListener */
    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        /*Llamar el id del campo del color */
        color = document.getElementById("color").value;
        /*Llamar el id del ancho de la línea */
        width_of_line = document.getElementById("width_of_line").value;
        
        /*Actualizar la variable mouseEvent con el valor de "mousedown" ir hacia abajo; */
        mouseEvent ="mousedown";
    }

    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e)
    {
       /*Actualizar la variable mouseEvent con el evento de ir hacia arriba*/
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        /*Actualizar la variable mouseEvent con el evento de ir hacia la izquierda */
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        /*Almacenar la posición actual de la coordenada X con e.clientX - canvas.offsetLeft; */
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        /*Almacenar la posición actual de la coordenada Y con e.clientY - canvas.offsetTop; */
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        /*Verificar si la variable mouseEvent es igual a mousedown */
        if (mouseEvent == "mousedown") {
        /*Llamar el lienzo y comenzar a pintar con .beginPath(); */
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        /*Imprimir en la consola la última posición de las cordendas */
        console.log("Última posición de las coordenadas X y Y = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        /*Usar .moveTo para comenzar la línea en el lienzo*/
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Posición actual de las coordenadas X y Y = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
         /*Usar lineTo para términar la línea en el lienzo */
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        /*Dibujar la línea usando la función .stroke() */
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
