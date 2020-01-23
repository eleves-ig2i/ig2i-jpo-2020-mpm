<?php
session_start();

include_once "libs/maLibUtils.php";
include_once "libs/maLibForms.php";

// on récupère le paramètre view éventuel
$view = valider("view");


// S'il est vide, on charge la vue accueil par défaut
if (!$view) $view = "accueil";

// NB : il faut que view soit défini avant d'appeler l'entête

// Dans tous les cas, on affiche l'entete,
// qui contient les balises de structure de la page, le logo, etc.
// Le formulaire de recherche ainsi que le lien de connexion
// si l'utilisateur n'est pas connecté

include("templates/header.php");

// En fonction de la vue à afficher, on appelle tel ou tel template
switch($view)
{

    case "accueil" :
        include("templates/accueil.php");
        break;

    case "vsbot" :
        include("templates/vsbot.php");
        break;

    case "multi" :
        include("templates/multi.php");
        break;

    case "stats" :
        include("templates/stats.php");
        break;


    default : // si le template correspondant à l'argument existe, on l'affiche
        if (file_exists("templates/$view.php"))
            include("templates/$view.php");

}

include("templates/footer.php");



?>








