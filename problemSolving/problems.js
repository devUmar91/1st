function FreqCounter(str) {
    const obj = {};
  
    for (let letter of str) {
      if (letter in obj) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  
    return obj;
  }
  
  function wordFrequencyCalculator(sentence) {
    let arrOfSentence = sentence.split(" ");
    return FreqCounter(arrOfSentence);
  }
  
  
  console.log(wordFrequencyCalculator("Hello how you"));
  
  
  const string="wow"
  let reverse=string.split("").reverse();
  if(2==='2'){
  console.log("the string is palindrome")
  }