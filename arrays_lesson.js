// https://www.codewars.com/kata/5a3dd29055519e23ec000074/

function checkExam(array1, array2) {
    score = 0;
   for (let i = 0; i < array1.length; i++) {
     if (array1[i] === array2[i]) {
       score += 4
     } else if (array2[i] !== array1[i] && array2[i] !== ""){
       score -= 1
     }
     
   }
    
    if (score < 0) {
      return 0
    } else return score
    
    
  }

  /*
  This kata is designed to test your ability to extend 
  the functionality of built-in classes. 
  In this case, we want you to extend the built-in Array 
  class with the following methods: square(), cube(), average(), sum(), even() and odd().
*/
