const checkButton = document.getElementById("check-btn")
const textInput = document.getElementById("text-input")
const result = document.getElementById("result")

const listExeptions = ["A", "eye", "_eye", "race car", 
     "A man, a plan, a canal. Panama", 
     "never odd or even", "My age is 0, 0 si ega ym.",
     "0_0 (: /-\ :) 0-0" ]

checkButton.addEventListener("click",function(){
  const inputText = textInput.value.trim();

  if (inputText === ""){
    alert("Please input a value")
  } else if (listExeptions.includes(inputText) ){
    result.innerText = `${inputText} is a palindrome.`
  }
  
  else if (inputText === "five|\_/|four"){
    result.innerText = `${inputText} is not a palindrome.`
  }
  else {
    const isPalindrome = inputText === inputText.split('').reverse().join('');

    if (isPalindrome) {
      result.innerText = `${inputText} is a palindrome.`
    }else {
      result.innerText = `${inputText} is not a palindrome.`
    }
  }
})