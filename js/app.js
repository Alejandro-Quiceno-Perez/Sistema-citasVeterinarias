let usuarios = [
    {
        namePet: "Paco",
        namePerson: "Elvis",
        phone: 1234567890,
        date: "10/10/2010",
        time: "9:10 Am",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
        namePet: "Paquito",
        namePerson: "Elvis",
        phone: 1234567890,
        date: "10/10/2010",
        time: "9:10 Am",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
        namePet: "PacoTe",
        namePerson: "Elvis",
        phone: 1234567890,
        date: "10/10/2010",
        time: "9:10 Am",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem",
    }
];

const agendarCitas = document.querySelector("#agendarCitas");
const namePet = document.querySelector("#name_pet");
const namePerson = document.querySelector("#name_person");
const phoneNumber = document.querySelector("#phone_number");
const date = document.querySelector("#date_cite");
const time = document.querySelector("#time_cite");
const description = document.querySelector("#description");
const btnGuardar = document.querySelector("#guardar");



/* SE CREA EL BOTON ELIMINAR */
/* const btnEliminar = document.createElement("button");
btnEliminar.innerHTML = "Eliminar";
btnEliminar.setAttribute("id", "delet");
btnEliminar.setAttribute("class", "btn btn-danger") */

printUser();
function printUser() {
    agendarCitas.innerHTML = "";
    if (usuarios.length === 0) {
        agendarCitas.innerHTML += `
          <p class="alert alert-danger">
              No hay citas agendadas
          </p>
          `
    } else {
        usuarios.forEach((user) => {
            // Se crean todos los botones de manera dinamica 
            const div1 = document.createElement("div");
            div1.className = "card mb-2";

            const nombreTituloH5 = document.createElement("h5");
            nombreTituloH5.className = "card-header";

            const div2 = document.createElement("div");
            div2.className = "card-body";

            const nombreResponsable = document.createElement("h5");
            nombreResponsable.className = "card-title";

            const infoCita = document.createElement("p");
            infoCita.className = "card-text";

            const horarioCita = document.createElement("p");
            horarioCita.className = "card-text";

            const btnEliminar = document.createElement("button");
            btnEliminar.className = "btn btn-danger mx-3";
            btnEliminar.id = "delet";
            btnEliminar.textContent = "Eliminar";

            const btnEditar = document.createElement("button");
            btnEditar.className = "btn btn-primary";
            btnEditar.id = "edit";
            btnEditar.textContent = "Editar";
            // Fin de la creacion de BTN dinamicos
            // agendarCitas.innerHTML += `
            //   <div class="card mb-2">
            //       <h5 class="card-header">${user.namePet}</h5>
            //       <div class="card-body">
            //           <h5 class="card-title">Responsable: <span>${user.namePerson}</span> -- Telefono: <span>${user.phone}</span></h5>
            //           <p class="card-text"><span>Sintomas del paciente:</span> ${user.description}</p>
            //           <p><span>Fecha de la cita: ${user.date}</span> <span>Hora: ${user.time}</span></p>
            //           ${agendarCitas.appendChild(btnEditar)}
            //       </div>
            //   </div>
            //   `
            agendarCitas.appendChild(div1);
            nombreTituloH5.textContent = `${user.namePet}`;
            div1.appendChild(nombreTituloH5);
            div1.appendChild(div2);
            nombreResponsable.textContent = `Responsable: ${user.namePerson}`
            div2.appendChild(nombreResponsable);
            infoCita.textContent = `Sintomas: ${user.description}`
            div2.appendChild(infoCita);
            horarioCita.textContent = `Fecha: ${user.date}, hora: ${user.time}`;
            div2.appendChild(horarioCita);
            div2.appendChild(btnEditar);
            div2.appendChild(btnEliminar);

            btnEliminar.addEventListener("click", (e) =>{
                usuarios.filter(() => {
                    
                })
            })
        });
    }
    
};






/* EVENTO DE GUARDAR */
btnGuardar.addEventListener("click", (e) => {
    e.preventDefault();
    if ((namePet.value == "") && (namePerson.value == "") && (phoneNumber.value == "") && (date.value == "") && (time.value == "") && (description.value == "")) {
        alert("Todos los campos son obligatorios");
    } else {
        agregarCitas();

        setTimeout(() => {
            namePet.value = "";
            namePerson.value = "";
            phoneNumber.value = "";
            date.value = "";
            time.value = "";
            description.value = "";
        }, 300);
    }
});

/* FUNCION DE AGREGAR CITAS */
function agregarCitas() {
    let usuario = {
        namePet: namePet.value,
        namePerson: namePerson.value,
        phone: phoneNumber.value,
        date: date.value,
        time: time.value,
        description: description.value,
    }
    usuarios.push(usuario);
    printUser();
}
