
function toggleMode(){
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')   
    } else{
        html.classList.add('light')
    }
}

//Como trocar a imagem, quando trocar o Light para dark mode


//pegar a tag img 
const img = document.querySelector("#profile img")

// O #profile img é o id feito no htlm

// subistituir a img 

if( html.classList.contains("light")) {

    //se tiver com o light mode ligado, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")

} else {
    // se estiver com o light mode desativado, manter a foto original
    img.setAttribute("src", ./assets/avatar.png)
}
