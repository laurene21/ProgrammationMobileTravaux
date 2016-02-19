//affiche dans console.log

		alert("bonjour");
			function getRandomInt(min, max) 
			{
              return  Math.floor(Math.random() * (max - min)) + min;
            }
			var nbr = getRandomInt(0, 21) ;
			nombre=window.prompt("Entrez un nombre");
			if (nombre > nbr){
				document.write("valeur trop grande");
			nombre=window.prompt("Entrez un nombre");
			}
			else if (nombre < nbr){
				document.write("valeur trop petite");
			nombre=window.prompt("Entrez un nombre");
			}
			else{
				
			document.write("bravo");}
	  


	
