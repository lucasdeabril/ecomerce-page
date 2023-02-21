var foto = document.getElementById('foto')
var fotoes=document.getElementById('fotoes')
var i = 1
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
