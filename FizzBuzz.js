// Naloga fizzBuzz (15min)
// Sedaj, ko smo si pogledali osnove Javascripta je čas za prvo nalogo. FizzBuzz je ena izmed bolj znanih nalog, ki jih podjetja dajejo na tehničnih razgovorih. Naloga je precej preprosta. Od uporabnika dobite pozitivno celo število, ki bo predstavljalo mejo. Sedaj morate izpisati vsa števila od 1 do meje, s tem, da izpišite za vsa števila deljiva s 3 besedo fizz, vsa števila deljiva s 5 buzz, ter za vsa števila deljiva s 3 in 5 fizzbuzz.


var limit = prompt('Povej max stevilo:');


console.log(limit);

for(var i = 0; i<=limit; i++){
  if(((i%3 === 0) == true) && ((i%5 === 0) == true)){
    console.log('fizzbuz');
    }else if((i%5 === 0) == true){
      console.log('buzz');
    }else if ((i%3 === 0) == true){
      console.log('fizz');
    }else{
      console.log(i);
    }
}



