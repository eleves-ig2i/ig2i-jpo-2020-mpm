<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php")
{
    header("Location:../index.php");
    die("");
}

?>

<head>
    <link rel="stylesheet" href="css/stylefooter.css" />
</head>

<div id="pied">


    <?php

    if (valider("connecte", "SESSION")) {
        echo "Utilisateur " . $_SESSION["pseudo"];

        echo " connecté depuis " .  $_SESSION["heureConnexion"];

        echo ' <a href="controleur.php?action=Logout"><img src="ressources/logout.jpeg" style="height: 5%; width: 5%"></a>';


    }

    ?>
</div>

</body>
</html>
