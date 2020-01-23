<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
// Chargement eventuel des données en cookies
$login = valider("login", "COOKIE");
$passe = valider("passe", "COOKIE");

?>

<div>

<h1>Connexion</h1>

<div>
<form action="controleur.php" method="POST">
<label for="login"> Login : </label><input type="text" id="login" name="login" value="<?php echo $login;?>" /><br />
<label for="passe">Passe : </label><input type="password" id="passe" name="passe" value="<?php echo $passe;?>" /><br />
<input type="submit" name="action" value="Connexion" />
<input type="submit" name="action" value="Création" />
</form>
</div>
</div>
