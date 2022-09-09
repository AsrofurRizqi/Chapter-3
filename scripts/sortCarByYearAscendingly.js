function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for(let i = 1; i < result.length;i++){

    // mengecek elemen di belakang nya
    for(let j = i - 1; j > -1; j--){
        
        // membandingkan value, ascending
        if(result[j + 1].year < result[j].year){

            // tukar posisi array
            [result[j+1],result[j]] = [result[j],result[j + 1]];

        }
    }
  };
  // Rubah code ini dengan array hasil sorting secara ascending
  console.log(result);
  return result;
}
