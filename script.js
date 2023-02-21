var foto = document.getElementById('foto')
var fotoes=document.getElementById('fotoes')
var i = 1
function mudafoto (n) {
   foto.src='image-product-'+n+'.jpg'
    // if(i<4){
    //     i++
    // foto.src='image-product-'+i+'.jpg'
    // }
    // else{
    //     i=1
    //     foto.src='image-product-'+i+'.jpg'
    // }
    
}
function mudafoto2 (n) {
    let ind = n
    fotoes.src='image-product-'+n+'.jpg'


}
function voltafoto(){
    if(fotoes.src = "image-product-1.jpg"){
        fotoes.src="image-product-4.jpg"
    }
    if(fotoes.src = "image-product-4.jpg"){
        fotoes.src="image-product-3.jpg"
    }
    if(fotoes.src = "image-product-3.jpg"){
        fotoes.src="image-product-2.jpg"
    }
    if(fotoes.src = "image-product-2.jpg"){
        fotoes.src="image-product-1.jpg"
    }
}
