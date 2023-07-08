function contar(){
    var inicio = document.getElementById ('inicio')
    var fim = document.getElementById ('fim')
    var pular = document.getElementById ('passo')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0){
        //window.alert ("ERRO")
        res.innerHTML = 'Impossivel contar...'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pular.value)
        if (p <= 0){
            window.alert('Passo Invalido, ALTERAMOS para Passo = 1')
            p=1
            pular.value = "1"
            

        }
        if (i > f){
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { 
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }    
        }
        
        res.innerHTML += `\u{1F3C1}`
        
    }
}