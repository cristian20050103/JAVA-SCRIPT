function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//DATO INGRESADO EN BUSCADOR//
    filter = input.value.toUpperCase();//CONVIERTE TEXTO A MAYUSCULA//
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) { //BUSQUEDA DE FILA Y COLUMNA 0 = NOMBRE PELICULA//
      td = tr[i].getElementsByTagName("td")[0];//NOMBRE DE LA PELICULA//
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) { //si encontro nombre pelicula en tabla//
          tr[i].style.display = "";
          } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }