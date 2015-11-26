// Naloga Vislice (15min)
// Računalnik si naključno izbere besedo iz vnaprej pripravljenega seznama besed (sam/a si jih izmisli). 
// Uporabnik nato ugiba črke. Vsaka uspešno ugotovljena črka razkrije del besede. 
// Računalnik vodi število ugibanj kot tudi seznam črk, ki so bile podane.

// Bonus 1. Uporabnik ima lahko samo omejeno število ugibanj (10). 
		// 2. Če uporabnik dvakrat pove isto črko, se njegovo število ugibanj ne poveča. 
		// 3. Uporabnik lahko poda celotno besedo namesto samo ene črke.

var seznamBesed = ["avto","kolo","motor","letalo","padalo","ogledalo","pes","macka","hrcek","gora","morje","oblak"];
var ugibanja = [];
var prikazBesede = [];
var zmaga = false;

var stPoizkusov = 10;

var Racunalnik = seznamBesed[Math.floor(Math.random() * seznamBesed.length )]; 

console.log(Racunalnik);

for(var j=0; j < Racunalnik.length; j++){
		prikazBesede[j] = "-";
}

console.log(prikazBesede);


for(var i=0; i < stPoizkusov; i++){

	ugibanja[i] = prompt("Iskana beseda: "+prikazBesede+" Imas se: "+(stPoizkusov-i)+" poizkusov.  Dosedanja ugibanja: "+ugibanja+"    Vpisi crko:");

	if (PrimerjajBesedi(ugibanja[i],Racunalnik) == true){
		var celabeseda = ugibanja[i].split("");
		i=stPoizkusov;
		zmaga = true;

	}else if (ugibanja[i].length == 1){


		var temp=0;
		var pos;

		while ( temp != -1) {
		    temp = Racunalnik.indexOf(ugibanja[i], pos + 1);
		    console.log(temp);
		    prikazBesede[temp]=ugibanja[i];
		    pos = temp;
	 	}

		if(prikazBesede.indexOf(ugibanja[i]) != -1){
			stPoizkusov++;
			console.log("podvajanje vnosa");
		}


		if(prikazBesede.indexOf("-") == -1){
			i=stPoizkusov;
			zmaga = true;
		}
	

	}

}

if(zmaga == true){
	alert("bravooo!!");
}else{
	alert("Pa drugic");
}


function PrimerjajBesedi(beseda1, beseda2){
    if (beseda1.length !== beseda2.length){
    	return false;
    }

    for (var i = 0; i < beseda1.length; i++){
        if (beseda1[i] !== beseda2[i]){
            return false;
        }
    }
    return true; 
}
