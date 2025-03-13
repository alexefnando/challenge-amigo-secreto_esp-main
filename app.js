// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var listaDeAmigos = [];

// Funcion para agregar amigo a la lista

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre) {
    listaDeAmigos.push(nombre);
    input.value = "";
    actualizarLista();
  } else {
    alert("Por favor, ingrese un nombre.");
  }
}

// Funcion para actualizar la lista de amigos

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  listaDeAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Funcion para sortear amigo secreto

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  if (listaDeAmigos.length < 2) {
    alert("Debe haber al menos dos amigos para sortear.");
    return;
  }

  let amigosSorteados;
  do {
    amigosSorteados = mezclar(listaDeAmigos.slice());
  } while (tieneCoincidencias(listaDeAmigos, amigosSorteados));

  listaDeAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `El amigo secreto para <span style="color: red; text-transform: uppercase;">${amigo}</span> es <span style="color: red; text-transform: uppercase;">${amigosSorteados[index]}</span>`;
    resultado.appendChild(li);
  });
}

// Funcion para verificar si hay coincidencias en el nombre de los amigos sorteados
function tieneCoincidencias(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    }
  }
  return false;
}

// Funcion para mezclar los nombres de los amigos

function mezclar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
