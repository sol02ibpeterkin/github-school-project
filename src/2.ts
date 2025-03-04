  const getRandomTsCode = () => {
    let code = "";
   for (let i = 0; i < 10; i++) {
     code += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
   }
   return code;
 };
 console.log(getRandomTsCode());