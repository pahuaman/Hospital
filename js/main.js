/*
Realiza un programa para calcular el costo de 
internamiento de un paciente en la clínica 
"El muerto viviente", para esto se de ingresar 
el tipo de tratamiento que se muestra en la tabla, 
la edad y el número de días de internamiento. 
Adicionalmente cuando un cliente es mayor de 60 años 
tiene un descuento de 25% y los clientes que son 
menores de 25 solo del 12%

Tipo de tratamiento Costo de internamiento por día

Diabetes $800
Hipertensión $650
Cirugía $1000
Intoxicación $400

Se le debe indicar a cada uno de los pacientes que ingresan 
a internarse cuanto cuantos tienen de descuento y 
cuál es la cantidad que deberán cubrir.
Una vez que ya no hay clientes para que se internen, 
se deberá indicar la cantidad de pacientes de cada uno 
de los tipos de tratamientos.
Utiliza switch, un ciclo while y do while.
*/

$(document).ready(function() {
    
    $("#nombre_paciente").focus();

    $("#total_pacientes").val(0);
    $("#pacientes_diabetes").val(0);
    $("#pacientes_hipertension").val(0);
    $("#pacientes_cirugia").val(0);
    $("#pacientes_intoxicacion").val(0);

    $("#enviar").click(presiona);

});//ready

function capture(nombre, edad, tratamiento, dias, total, cuotatratamiento) {

    let datos  = "";
    let cuenta = 0;

      if (edad > 60) {
          
          cuenta = cuotatratamiento * dias;
          total  = cuenta - (cuenta * .25);
    
          datos  = "Nombre paciente: " + nombre + 
                   "\nEdad: " + edad + 
                   "\nTratamiento: " + tratamiento + 
                   "\nDías internado: " + dias + 
                   "\nSu descuento es de 25%\nY su cuenta es: $" + total + "\n";
          
          return datos;

      }//if
      else if (edad < 25) {
          
          cuenta = cuotatratamiento * dias;
          total  = cuenta - (cuenta * .12);
    
          datos  = "Nombre paciente: " + nombre + 
                   "\nEdad: " + edad + 
                   "\nTratamiento: " + tratamiento + 
                   "\nDías internado: " + dias + 
                   "\nSu descuento es de 12%\nY su cuenta es: $" + total + "\n";
        
          return datos;

      }//else-if
      else {
          
          cuenta = cuotatratamiento * dias;
    
          datos  = "Nombre paciente: " + nombre + 
                   "\nEdad: " + edad + 
                   "\nTratamiento: " + tratamiento + 
                   "\nDías internado: " + dias + 
                   "\nSu cuenta es: $" + cuenta + "\n";
        
          return datos;
                
      }//else

}//capture

function clean_text() {

    $("#nombre_paciente").val("");
    $("#edad_paciente").val("");
    $("#dias_internado").val("");

}//clean_text

function presiona() {
    
    let nombre       = $("#nombre_paciente").val();
    let edad         = parseInt( $("#edad_paciente").val() );
    let tratamiento  = $("#tratamiento_paciente :selected").text();
    let dias         = parseInt( $("#dias_internado").val() );
    let total        = 0;
    let diabetes     = 800;
    let hipertension = 650;
    let cirugia      = 1000;
    let intoxicacion = 400;
    let datos        = "";

    let totalpacientes        = 1;
    let pacientesdiabetes     = 1;
    let pacienteshipertension = 1;
    let pacientescirugia      = 1;
    let pacientesintoxicacion = 1;
    
    /*$(".pacientes").html("<p>Pacientes ingresados:  </p>"); */
      if (nombre == "" || isNaN(edad) || isNaN(dias) ) {
          
          alert("Campos vacios o erroneos, \nPor favor rellene los campos correctamente");
          clean_text();

      }//if
      else if (edad < 0 || dias < 0) {
          
          alert("Campos incorrectos \nLos campos en las etiquetas edad y días deben ser numéricos");
          clean_text();
          
      }//else-if
      else {
          
          switch (tratamiento) {
              
              case "Diabetes":
                  
                  datos = capture(nombre, edad, tratamiento, dias, total, diabetes);

                  $("#total_pacientes").val( parseInt( $("#total_pacientes").val() ) + parseInt(totalpacientes) );
                  
                  $("#pacientes_diabetes").val( parseInt( $("#pacientes_diabetes").val() ) + parseInt(pacientesdiabetes) );
                  
                  $("#imprimir").val( $("#imprimir").val() + "\n" + datos );

                  clean_text();

              break;//diabetes

              case "Hipertension":
                  
                  datos = capture(nombre, edad, tratamiento, dias, total, hipertension);
              
                  $("#total_pacientes").val( parseInt( $("#total_pacientes").val() ) + parseInt(totalpacientes) );
                
                  $("#pacientes_hipertension").val( parseInt( $("#pacientes_hipertension").val() ) + parseInt(pacienteshipertension) );

                  $("#imprimir").val( $("#imprimir").val() + "\n" + datos );

                  clean_text();

              break;//hipertensión
        
              case "Cirugia":
                  
                  datos = capture(nombre, edad, tratamiento, dias, total, cirugia);
              
                  $("#total_pacientes").val( parseInt( $("#total_pacientes").val() ) + parseInt(totalpacientes) );
                
                  $("#pacientes_cirugia").val( parseInt( $("#pacientes_cirugia").val() ) + parseInt(pacientescirugia) );

                  $("#imprimir").val( $("#imprimir").val() + "\n" + datos );

                  clean_text();

              break;//cirugía

              case "Intoxicacion":
                  
                  datos = capture(nombre, edad, tratamiento, dias, total, intoxicacion);
              
                  $("#total_pacientes").val( parseInt( $("#total_pacientes").val() ) + parseInt(totalpacientes) );
                
                  $("#pacientes_intoxicacion").val( parseInt( $("#pacientes_intoxicacion").val() ) + parseInt(pacientesintoxicacion) );

                  $("#imprimir").val( $("#imprimir").val() + "\n" + datos );

                  clean_text();

              break;//intoxicación

              default:
                  
                  alert("Por favor escoja uno de los tratamientos disponibles");

              break;//default

          }//switch
      
      }//else

}//presiona