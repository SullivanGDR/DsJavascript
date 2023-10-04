var listeImages = document.getElementById("liste-image");

for(var i = 0; i < listeImages.children.length; i++){
    let test = listeImages.children[i];
    test.addEventListener("click", clic, false);
}

function clic(){
    console.log("click");
    console.log(this.children[0].src);
}