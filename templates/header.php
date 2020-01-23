<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php")
{
    header("Location:../index.php");
    die("");
}

// Pose qq soucis avec certains serveurs...
echo "<?xml version=\"1.0\" encoding=\"utf-8\" ?>";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<!-- **** H E A D **** -->
<head> <!--On vient inclure les bibliothèques nécessaires au bootstrap -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Morpiion</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
</head>
<body>


<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

    <?php
    echo '<ul class="navbar-nav">';
    echo '<li class="nav-item';
    if(valider('view') == 'accueil') {
        echo ' active';
    }
    echo '"><a class="nav-link" href="index.php?view=accueil">Accueil</a>' ;
    echo '</li>';
    ?>
    <?php
    if (!valider("connecte", "SESSION")) {
        echo '<li class="nav-item';
        if(valider('view') == 'login'){echo ' active';};
        echo '"><a class="nav-link" href="index.php?view=login">Connexion</a></li>';
    }
    else{
        echo '<li class="nav-item';
        if(valider('view') == 'vsbot'){echo ' active';};
        echo '"><a class="nav-link" href="index.php?view=vsbot">1 Joueur</a></li>';

        echo '<li class="nav-item';
        if(valider('view') == 'multi'){echo ' active';};
        echo '"><a class="nav-link" href="index.php?view=multi">2 Joueurs</a></li>';

        echo '<li class="nav-item';
        if(valider('view') == 'stats'){echo ' active';};
        echo '"><a class="nav-link" href="index.php?view=stats">Statistiques</a></li>';
    }

    ?>

</nav>
<h1> Super Morpion </h1>

</div>
</body>





