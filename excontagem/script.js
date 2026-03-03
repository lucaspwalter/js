function contar() {

  // CORREÇÃO 1:
  // Pegamos os valores corretamente e convertemos para número
  var iniInput = document.getElementById('txtini')
  var fimInput = document.getElementById('txtfim')
  var passoInput = document.getElementById('txtcont')
  var msg = document.getElementById('msg')

  // Validação de campos vazios
  if (iniInput.value.length == 0 ||
      fimInput.value.length == 0 ||
      passoInput.value.length == 0) {

    msg.innerHTML = 'Impossível contar. Preencha todos os campos.'
    return
  }

  var ini = Number(iniInput.value)
  var fim = Number(fimInput.value)
  var passo = Number(passoInput.value)

  // CORREÇÃO 2:
  // Passo não pode ser 0
  if (passo <= 0) {
    msg.innerHTML = 'Passo inválido. Considerando passo = 1.<br>'
    passo = 1
  } else {
    msg.innerHTML = 'Contando:<br>'
  }

  // CORREÇÃO 3:
  // Tratamento para contagem crescente e decrescente
  if (ini < fim) {

    // Crescente
    for (var i = ini; i <= fim; i += passo) {
      msg.innerHTML += i + ' 👉 '
    }

  } else {

    // Decrescente
    for (var i = ini; i >= fim; i -= passo) {
      msg.innerHTML += i + ' 👉 '
    }

  }

  msg.innerHTML += '🏁'
}
