let usuarios = [];

let usuario;

const agendarCitas = document.querySelector("#agendarCitas");
const namePet = document.querySelector("#name_pet");
const namePerson = document.querySelector("#name_person");
const phoneNumber = document.querySelector("#phone_number");
const date = document.querySelector("#date_cite");
const time = document.querySelector("#time_cite");
const description = document.querySelector("#description");
const btnGuardar = document.querySelector("#guardar");

/* PINTAR USUARIOS Y CARDS */
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
            agendarCitas.appendChild(div1);
            nombreTituloH5.textContent = `${user.namePet}`;
            div1.appendChild(nombreTituloH5);
            div1.appendChild(div2);
            nombreResponsable.textContent = `Responsable: ${user.namePerson}, Telefono: ${user.phone}`
            div2.appendChild(nombreResponsable);
            infoCita.textContent = `Sintomas: ${user.description}`
            div2.appendChild(infoCita);
            horarioCita.textContent = `Fecha: ${user.date}, hora: ${user.time}`;
            div2.appendChild(horarioCita);
            div2.appendChild(btnEditar);
            div2.appendChild(btnEliminar);

            btnEliminar.addEventListener("click", (e) => {
                console.log(user.namePet);
                usuarios = usuarios.filter(elemento => elemento.namePet !== user.namePet);
                printUser();
            });

            btnEditar.addEventListener("click", () => {
                console.log(user);
                namePet.value = user.namePet;
                namePerson.value = user.namePerson;
                phoneNumber.value = user.phone;
                date.value = user.date;
                time.value = user.time
                description.value = user.description;
                btnGuardar.textContent = "Actualizar";

                usuarios = usuarios.filter(elemento => elemento.namePet !== user.namePet);
            });
            btnGuardar.textContent = "Guardar";
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
