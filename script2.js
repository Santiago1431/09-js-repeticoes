function tabuada() {
    var num = document.getElementById('txtnumero')
    var tab = document.getElementById('sel')
    if(num.value.length == 0){
        window.alert('ERRO, Insira um numero')
    } else {
        var n = Number(num.value)
        var m = 1
        tab.innerHTML = ''
        while (m <= 10){
            var o = document.createElement('option')
            o.text = `${n} x ${m} = ${n*m}`
            tab.appendChild(o)
            m++


        }
    }














}