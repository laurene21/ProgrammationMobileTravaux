//affiche dans console.log

		alert("bonjour");
	function table_multiplication(nombre)
		{

		var i;
		for (i=0; i<=10; i++) {
		    resultat=nombre*i;
			document.write(nombre+" x "+i+"="+nombre*i+"<br>");
			                  }
		}
				nombre=window.prompt("Entrez le numéro de la table:","Saisir un entier ici");
			table_multiplication(nombre);	
	

	
	
	
	var calcul=0;
       calcul = calcul + window.prompt("Entrez une expression arithmetique:");
	   eval(calcul); 
	   document.write("resultat= "+ calcul);
			