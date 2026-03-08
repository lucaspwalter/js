function calcularIMC() {
  let peso = document.getElementById('txtpeso')
  let altura = document.getElementById('txtaltura')
  let p = Number(peso.value)
  let a = Number(altura.value)
  let res = document.getElementById('resultado')
  if (p <= 0 || a <= 0) {
    res.innerHTML = 'Preencha os campos corretamente.'
    return
  }
  let imc = p / (a * a)
  if (imc < 18.5) {
    res.innerHTML = `Voce esta abaixo do peso, IMC: ${imc.toFixed(2)}`
  } else if (imc < 25) {
    res.innerHTML = `Seu peso esta normal, IMC: ${imc.toFixed(2)}`
  } else if (imc < 30) {
    res.innerHTML = `Voce esta com sobrepeso, IMC: ${imc.toFixed(2)}`
  } else {
    res.innerHTML = `Voce esta com obesidade, IMC: ${imc.toFixed(2)}`
  }
}
