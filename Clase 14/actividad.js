/* TAREA: solicitar al usuario la cant personas en la clase (nro) dependeiendo de la cant de alumnos voy a solicitar los nombres. si la cantidad es 5 solicito 5 nombres. luego mostar los nombres en lista
    Lista de alumnos
    -juan
    -pepe
    -maria
    (con alert) */



    let lista = ""
    let cantalumn =prompt("Ingrese la cantidad de alumnos")
        while  (!cantalumn || isNaN(cantalumn)){
            cantalumn= prompt("Debe ingresar la cantidad de alumnos")
        }
        cantalumn= Number(cantalumn)
    for (i=1; i <= cantalumn; i = i + 1){
        let nombres= prompt ("Ingrese el nombre de los alumnos")
        while  (!isNaN(nombres)){
            nombres= prompt("Debe ingresar un nombre")
        }
    lista = lista + "- " + nombres + "\n"
    }
    
alert("Los nombres ingresados son: \n" + lista)