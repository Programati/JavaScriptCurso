const nombres = ['Carlos', 'Cristian', 'Christopher', 'Erika', 'Manuel', 'Matias','Cros'];
// nombres.forEach((nombre) => {
//     console.log(nombre);
// });
// console.log(nombres.length);
// for(let i = 1; i <= nombres.length; i++){
//     console.log(i);
// }

// for(let i = 0; i <= 100; i = i+5){
//     console.log(i);
// }

/**
 * ---------------------------------------------------------
 * BREAK CONTINUE
*/
//BREAK
// for(let i = 0; i < nombres.length; i++){
//     if(nombres[i][0] !== 'C'){
//         console.log(nombres[i]+' no empiza con la letra C');
//         break;
//     }
//     console.log(nombres[i]);
//  };
 
 //CONTINUE
 for(let i = 0; i < nombres.length; i++){
     if(nombres[i][0] !== 'C'){
        console.log(nombres[i]+' no empiza con la letra C');
         continue;
     }
     console.log(nombres[i]);
  };