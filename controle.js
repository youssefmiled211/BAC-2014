function chiffre(ch){
    test=true;
    i=0;
    while(test==true && i<ch.length){
        if (ch.charAt(i)<"0" || ch.charAt(i)>"9"){
            test=false;
        }i++;
    };
    return test;
}
function alpha(ch,ch1){
    ch=ch.toUpperCase()
    ch1=ch1.toUpperCase()
    test=true;
    i=0;
    j=0;
    while(test==true && i<ch.length){
        if (ch.charAt(i)<"A" || ch.charAt(i)>"Z"){
            test=false;
        }i++;
    };
    while(test==true && j<ch1.length){
        if (ch1.charAt(j)<"A" || ch1.charAt(j)>"Z"){
            test=false;
        }j++;
    };
    return test;

}

function verif1(){
    mat=document.getElementById("mat").value;
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    if (mat.length!=4 || chiffre(mat)==false){
        alert("votre matricule est incorrect ")
    };
    if(nom.length==0|| prenom.length==0||alpha(nom,prenom)==false){
        alert("votre nom ou prenom est incorrect")
    };

};
function verif2(){
    mat=document.getElementById("mat").value;
    detail=document.getElementById("detail").value;
    rdv=document.getElementById("rdv").value;
    if (mat.length!=4 || chiffre(mat)==false){
        alert("votre matricule est incorrect ")
    };
    if (detail.length==0){
        alert("votre detail ne doit pas etre vide")
    };
    if (rdv<0){
        alert("rdv n'est pas correct")
    };
};