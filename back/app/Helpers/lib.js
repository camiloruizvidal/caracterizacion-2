function randomString() {
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789'; //Todos los caracteres posibles que puede tener nuestra cadena
  let random = 0;

  for(let i = 0; i < 6; i++) { //7 caracteres porque es menor a 6, pero comienza desde el indice 0
    random += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return random;
}

module.exports = {
  randomString
};