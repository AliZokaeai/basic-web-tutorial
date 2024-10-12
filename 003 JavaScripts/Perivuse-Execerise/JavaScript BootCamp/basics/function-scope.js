let convertFaharenheitToCelsuius = function (fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
  };
  
  let tempOne = convertFaharenheitToCelsuius(32);
  let tempTwo = convertFaharenheitToCelsuius(68);
  
  console.log(tempOne);
  console.log(tempTwo);