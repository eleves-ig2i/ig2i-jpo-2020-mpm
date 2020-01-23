<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Morpiion</title>



    <link rel="stylesheet" href="css/stylebot.css" />

    <style type = "text/css"></style>



</head>

<body onload="init()">

<h1 style="text-align: center; margin-right: 7%" id="titre">1 JOUEUR</h1>

<div id="tout">

    <p style="text-align: center">Le joueur "croix" commence. On joue dans la case du milieu, les autres sont verrouillées. En fonction de là où va joueur "croix" une case va se débloquer pour "cercle". Il devra jouer dedans. (ex : je joue en haut à gauche, c'est la grande case en haut à gauche qui se débloque)
        <br/><br/>
        Une fois qu'une grande case est gagnée par l'un des deux joueurs, une grande croix ou un grand cercle s'affiche. Le but est donc d'aligner 3 grandes croix ou 3 grands cercles pour gagner.
        <br/><br/>
        <strong>CAS PARTICULIER :</strong> lorsque la partie est avancée, de plus en plus de cases sont gagnées. Si on renvoie un joueur sur une case qui a déjà été gagnée, celui-ci peut jouer <strong>où il le souhaite.</strong>
    </p>

</div>

<div id="tout">

</div>
<br><br><br><br><br><br><br>
<div id="tourcroix">C'est au tour de : <img src="ressources/cross.png" class="tour"> </div>

<div id="tourcercle">C'est au tour de : <img src="ressources/circle.jpg" class="tour"> </div>



<script src="js/moteurbot.js" type="text/javascript"></script>

</body>


</html>