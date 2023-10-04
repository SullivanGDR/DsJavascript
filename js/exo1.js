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

    let premiereImage = listeImages.children[0].children[0].src;
    let deuxiemeImage = listeImages.children[1].children[0].src;
    let troisiemeImage = listeImages.children[2].children[0].src;
    let quatriemeImage = listeImages.children[3].children[0].src;

    listeImages.children[2].children[0].src = deuxiemeImage;
    listeImages.children[3].children[0].src = troisiemeImage;
    listeImages.children[0].children[0].src = quatriemeImage;
    listeImages.children[1].children[0].src = premiereImage;

    // listeImages.children[0].children[0].src = quatriemeImage;
    // listeImages.children[1].children[0].src = deuxiemeImage;
    // listeImages.children[2].children[0].src = troisiemeImage;
    // listeImages.children[3].children[0].src = premiereImage;
}

function changeCursor(){
    this.children[0].style.cursor = "pointer";
}

function changeCursorLeave(){
    this.children[0].style.cursor = "default";
}