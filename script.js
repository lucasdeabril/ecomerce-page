var foto = document.getElementById('foto')
var fotoes=document.getElementById('fotoes')

function mudafoto (n) {
   foto.src='image-product-'+n+'.jpg'
    
}
var m =document.getElementById('cinza')
function menu() {
    
    m.style.display='inline-block'
}
function sumir(){
    m.style.display='none'
}
function mudafoto2 (n) {
    let ind = n
    fotoes.src='image-product-'+n+'.jpg'
    i=n
    // window.alert(i)

}
function voltafoto(){
    if (i==1){
        i=4
        fotoes.src='image-product-'+i+'.jpg'
        
    }else{
        var v = i - 1
    fotoes.src='image-product-'+v+'.jpg'
    i=v
    }
    
}
function avancafoto(){
    if (i==4){
        i=1
        fotoes.src='image-product-'+i+'.jpg'
        
    }else{
        var v = i + 1
    fotoes.src='image-product-'+v+'.jpg'
    i=v
    }    
}
var i = 0

function additm(n){
    let q = document.getElementById('montante')
    if(i>=0){
    
    i+= n
    q.innerText= i  
    }
    else if (i<0 ){
        alert('Você ainda não possui este item no carrinho')
        i=0
        q.innerText= i
    }
}
// construção do código do perfil de usuário
var prf = 0
function showprof (){
    var perf = document.getElementById("perfildp")
    if (prf==0){
        prf++
        
        perf.style.display='block'
        var vazio = document.getElementById('vazio')
        var prod = document.getElementById('perfilprd')
        var quant = document.getElementById('dpdesc')
        var t = i * 125
        if (i<=0){
            vazio.style.display='block'
            prod.style.display='none'
        }
        else if (i>0){
            vazio.style.display='none'
            prod.style.display='block'
            quant.innerText=('Fall Limited Edition Sneakers $125.00 X '+i +' '+ t+'R$')
        }

    }else{
        prf=0
        perf.style.display='none'
    }

}
function chek(){
    var vazio = document.getElementById('vazio')
    var prod = document.getElementById('perfilprd')
    var quant = document.getElementById('dpdesc')
    var t = i * 125
    if (i<=0){
        vazio.style.display='block'
        prod.style.display='none'
    }
    else if (i>0){
        vazio.style.display='none'
        prod.style.display='block'
        quant.innerText=('Fall Limited Edition Sneakers $125.00 X '+i +' '+ t+'R$')
    }
}
