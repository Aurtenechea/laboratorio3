Circuito.
se ingresa una url separada por barras:
/home/index/2

se instancia el controlador HomeController y se llama a su metodo index.
Dentro del index se puede hacer uso de los modelos que pueden traer informacion
de la base de datos. Y tambien se llama luego al objeto Response que con su metodo
render crea variables para las vistas y incluye (es decis muestra) la vista.




Para hacer una pagina nueva se necesita:
- Crear el controlador. (o agregar un metodo a uno existente).
- Crear el metodo del controlador. Con las acciones a realizar y los parametros a recibir.
- Crear la vista, que es lo que se va a mostrar. Hacer uso de las variables que se le van a
    pasar al obj Response desde dentro del metodo del controlador.
- llamar al response desde metodo del controlador
