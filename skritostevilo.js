// Naloga Ugani skrito število (15min)
// Računalnik si naključno izbere skrito število med 0 in 100, nato uporabnik ugiba. Računalnik pomaga uporabniku s tem, da mu pove, če je njegovo število manjše ali večje od skritega števila.

// Bonus 1. Uporabnik lahko sam izbere razpon skritih števil. 2. Uporabnik ima na voljo le omejeno število ugibov. 3. Računalnik po zmagi uporabniku pokaže seznam njegovih ugibanj. 4. Zamenjava vlog. Naj si uporabnik izmisli število, in naj ga računalnik po algoritmu najde.



var skritoStevilo;
var poizkusi = [];
var vecjemanjseTekst = " ";
var zmaga = false;

var razponMin = prompt('Vpisi razpon od:');
var razponMax = prompt('Vpisi razpon do:');
var stPoizkusov = prompt('Vpisi stevilo poizkusov:');


var gdoUgiba = prompt('Ce zelis ugibati stevilo vpisi (a). Ce zelis da racunalnik ugiba stevilo vpisi stevilo med '+razponMin+' in '+razponMax);

if (gdoUgiba == "a"){

	console.log(razponMin+" "+razponMax);
	skritoStevilo = Math.floor((Math.random() * ( razponMax - razponMin ))+razponMin);   

	console.log(skritoStevilo);

	for(var i = 0; i < stPoizkusov ; i++)
	{

		poizkusi[i] = prompt("Ugani stevilo med "+razponMin+" in "+razponMax+".            Imas se "+(stPoizkusov-i)+" poizkusov!        Ugibanja do sedaj: "+poizkusi+"    "+vecjemanjseTekst);
		console.log("Imate se "+stPoizkusov-i+" poizkusov");


		if (poizkusi[i] > skritoStevilo){
			console.log("iskano stevilo je manjse od vpisanega");
			vecjemanjseTekst = "iskano stevilo je manjse od vpisanega";
		}else if (poizkusi[i] < skritoStevilo){
			console.log("iskano stevilo je vecje od vpisanega");
			vecjemanjseTekst = "iskano stevilo je vecje od vpisanega";
		}else if(poizkusi[i] == skritoStevilo){	
			console.log("Bravo!!!!");
			i=stPoizkusov;
			zmaga = true;
		}

	}

	if (zmaga == true){
		alert("Bravo!!!! uganili ste stevilo ");
	}else{	
		alert("Zal vam ni uspelo :(   iskano stevilo je bilo: "+skritoStevilo);
	}
	alert("Vasa ugibanja: "+poizkusi);

}else if((gdoUgiba >= razponMin) && (gdoUgiba <=razponMax)){

	var racunalnik, uporabnik;

	for(var i = 0; i < stPoizkusov ; i++)
	{
		racunalnik = Math.floor((Math.random() * ( razponMax - razponMin ))+razponMin); 

		uporabnik = prompt("Racunalnik ugiba stevilo: "+racunalnik+"       Ali je iskano stevilo vecje(v), manjse(m) ali je ze uganil(x)?       Ima se:"+(stPoizkusov-i)+"poizkusov.")
		if(uporabnik == "v"){
			razponMin = racunalnik;
		}else if(uporabnik == "m"){
			razponMax = racunalnik
		}else if(uporabnik == "x"){
			zmaga = true;
			i = stPoizkusov;
		}
		
	}

	if (zmaga == true){
		alert("Uspelo mu je. Racunalnik je uganil vase stevilo.");
	}else{	
		alert("Ni mu uspelo. Racunalniku je zmanjkalo moznosti. ");
	}

}


