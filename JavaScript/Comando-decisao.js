function maior (a,b){
    if (a>b) {
        return a;
    }
}




function maior(a,b) {
    var r = (a>b) ? a: b;
    return r;
}





function formatames(mes) {
    switch(mes) {
        case 1: 
            return  "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4: 
            return "Abril";
        default:
            return "Não implementei ainda"
    }
}