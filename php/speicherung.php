<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="utf-8">
		<link href="../css/style.css" rel="stylesheet">
		<title>Speicherung</title>
	</head>
	<body>
		<header>
			<nav>
				<a href="../index.html" id="titlenav">MY WEBSITE</a>
				<ul>
					<li><a href="../pages/contact.html">CONTACT</a></li>
					<li><a href="../index.html">HOME</a></li>
				</ul>
				<div class="cllfix"></div>
			</nav>
		</header>
		<div id="wrapper">
			<h1>Sende Bestätigung</h1>
			<p>Sehr geehrter Herr <?php echo $_POST['nachname']; ?> Ihre Eingabe wurde in unserer Datenbank gespeichert, wir werden Telefonisch mit Ihnen Kontakt aufnehmen um eine Zeit zu vereinbaren</p>
			<figure>
				<img src="../img/check.jpg" alt="check">
			</figure>
			<?php
			if(isset($_POST["Submit"])){
				?>
				<font>Die Anfrage wurde übermittelt</font>
			<?php

			}
			$db = new PDO('mysql:host=localhost;dbname=termin', 'root', '');
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$neuer_eintrag = array();
			$neuer_eintrag['vorname'] = $_POST['vorname'];
			$neuer_eintrag['nachname'] = $_POST['nachname'];
			$neuer_eintrag['firma'] = $_POST['firma'];
			$neuer_eintrag['telefon'] = $_POST['telefon'];
			$neuer_eintrag['datum'] = $_POST['datum'];
			 
			$statement = $db->prepare("INSERT INTO anfrage (vorname, nachname, firma, telefon, datum) VALUES (:vorname, :nachname, :firma, :telefon, :datum)");
			$statement->execute($neuer_eintrag);   
			
			?>
		</div>
		<footer>
			<ul>
				<li><a href="#">Impressum</a></li>
				<li><a href="#">AGB</a></li>
				<li><a href="#">Datenschutz</a></li>
			</ul>
			<a href="mailto:dari.willi@bluewin.ch"><img src="../img/email.png" title="Email" class="icon"></a>
			<a href="../assets/lebenslauf.pdf"><img src="../img/lebenslauf.jpg" title="Lebenslauf" class="icon"></a>
			<div class="cllfix"></div>
		</footer>
	</body>
</html>


