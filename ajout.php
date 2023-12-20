<?php
$con=mysqli_connect("localhost","root","","bd2014") or die("Probleme de connexion du BD2014");
$mat=$_POST['mat'];
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$req="INSERT INTO pation VALUES ('$mat','$nom','$prenom')";
mysqli_query($con,$req);
if(mysqli_affected_rows($con)>0){
    echo"patient ajouté avec succes";
}else{
    echo"l'insertion a echoue";
};
mysqli_close($con);
?>