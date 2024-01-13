let usuarios = [
    {
        namePet: "Paco",
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
const btnEliminar = document.querySelectorAll("#delet");
const btnEditar = document.querySelector("#edit");

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
            agendarCitas.innerHTML += `
              <div class="card mb-2">
                  <h5 class="card-header">${user.namePet}</h5>
                  <div class="card-body">
                      <h5 class="card-title">Responsable: <span>${user.namePerson}</span> -- Telefono: <span>${user.phone}</span></h5>
                      <p class="card-text"><span>Sintomas del paciente:</span> ${user.description}</p>
                      <p><span>Fecha de la cita: ${user.date}</span> <span>Hora: ${user.time}</span></p>
                      <button class="btn btn-primary" id="edit">Editar</button>
                      <button class="btn btn-danger" id="delet">Eliminar</button>
                  </div>
              </div>
              `
        });
    }
};

/* EVENTO DE GUARDAR */
btnGuardar.addEventListener("click", (e) => {
    e.preventDefault();
    agregarCitas();

    setTimeout(() => {
        namePet.value = "";
        namePerson.value = "";
        phoneNumber.value = "";
        date.value = "";
        time.value = "";
        description.value = "";
    }, 300);
});

/* EVENTO DE ELIMINAR */
btnEliminar.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Aun no se puede eliminar");
})

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