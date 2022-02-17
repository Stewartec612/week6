

let canvas = document.querySelector('#canvas')
let context = canvas.getContext( '2d')

let input = document.querySelector('#image-text')

let image = new Image()
image.src = 'angry_ape.jfif'


image.addEventListener('load', function (){
    context.drawImage(image, 0,0)
})

input.addEventListener('input', function (){
    let text = this.value
    context.font = '30px Courier'
    //
    context.drawImage(image, 0, 0)
    context.fillText(text, 450, 65)
})


