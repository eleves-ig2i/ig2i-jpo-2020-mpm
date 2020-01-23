<?php

if (basename($_SERVER["PHP_SELF"]) != "index.php")
{
    header("Location:../index.php?view=accueil");
    die("");
}

?>


<div>


    Bienvenue dans notre site de morpion!
    <br/>
    <?php
    if (!valider("connecte", "SESSION")) {
        echo 'Connecte toi pour jouer !';
    }
    ?>
</div>
