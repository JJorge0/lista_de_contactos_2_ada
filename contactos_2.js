// Creamos la lista de contactos inicial con datos predefinidos
let listaContactos = [
  {
    id: 1,
    nombres: "Tony",
    apellidos: "stark",
    telefono: "123456789",
    ubicaciones: [
      {
        ciudad: "Malibu",
        direccion: "Calle 123",
      },
    ],
  },
  {
    id: 2,
    nombres: "Bruce",
    apellidos: "Banner",
    telefono: "987654321",
    ubicaciones: [
      {
        ciudad: "New York",
        direccion: "Barrio Centro",
      },
    ],
  },
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
  listaContactos = listaContactos.filter((contacto) => contacto.id !== id);
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  listaContactos.forEach((contacto) => {
    console.log(`ID: ${contacto.id}`);
    console.log(`Nombre completo: ${contacto.nombres} ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log(`Ubicaciones:`);
    contacto.ubicaciones.forEach((ubicacion) => {
      console.log(`- Ciudad: ${ubicacion.ciudad}`);
      console.log(`  Dirección: ${ubicacion.direccion}`);
    });
    console.log("---------------------------");
  });
}

// Ejemplo de cómo usar las funciones:

// Crear un nuevo contacto y agregarlo a la lista
const nuevoContacto = {
  id: 3,
  nombres: "Hank",
  apellidos: "Pink",
  telefono: "555555555",
  ubicaciones: [
    {
      ciudad: "los angeles",
      direccion: "Avenida 456",
    },
  ],
};
agregarContacto(nuevoContacto);

// Imprimir la lista de contactos antes de borrar uno
console.log("Contactos antes de borrar:");
imprimirContactos();

// Borrar un contacto por su ID (ejemplo: ID 1)
borrarContacto(1);

// Imprimir la lista de contactos después de borrar uno
console.log("Contactos después de borrar:");
imprimirContactos();
