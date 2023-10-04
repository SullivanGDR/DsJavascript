var listeImages = document.getElementById("liste-image");

for(var i = 0; i < listeImages.children.length; i++){
    let test = listeImages.children[i];
    test.addEventListener("click", clic, false);
    test.addEventListener("mouseenter", changeCursor, false);
    test.addEventListener("mouseleave", changeCursorLeave, false);
}

function clic(){
    console.log("click");
    console.log(this.children[0].src);

    // Tentative pour un nombre d'images indéfinies.
    for(var i = 0; i < listeImages.children.length; i++){
        if (i==0){
            listeImages.children[0].children[0].src = listeImages.children[listeImages.children.length - 1].children[0].src;
        }
        if (i > 0 && i < listeImages.children.length - 1){
            let lastImage = listeImages.children[i-1].children[0].src;
            listeImages.children[i].children[0].src = lastImage;
        }
        
        if (i == listeImages.children.length - 1){
            listeImages.children[i].children[0].src = listeImages.children[i-1].children[0].src;
        }
    }

    // Fonctionnel pour les 4 images uniquement.
    let premiereImage = listeImages.children[0].children[0].src;
    let deuxiemeImage = listeImages.children[1].children[0].src;
    let troisiemeImage = listeImages.children[2].children[0].src;
    let quatriemeImage = listeImages.children[3].children[0].src;

    listeImages.children[2].children[0].src = deuxiemeImage;
    listeImages.children[3].children[0].src = troisiemeImage;
    listeImages.children[0].children[0].src = quatriemeImage;
    listeImages.children[1].children[0].src = premiereImage;
}

function changeCursor(){
    this.children[0].style.cursor = "pointer";
}

function changeCursorLeave(){
    this.children[0].style.cursor = "default";
}