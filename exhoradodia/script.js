function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora sao ${hora} horas.`
  if (hora >= 0 && hora< 12) {
    img.src = 'manha.png'
    document.body.style.background = '#FF8C00'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#FF4500'
  } else {
    img.src = 'noite.png'
    document.body.style.background = '#0B1D3A'
  }

}


