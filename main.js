// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics



function fixTheMeerkat(arr) {
  let newArr = []
  for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i])
  }
  return newArr
}

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).


function bonusTime(salary, bonus) {
 if(bonus === true){
   return `£` + salary * 10
 }else if(bonus === false){
   return `£${salary}`
 }
}

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.

function checkExam(array1, array2) {
let score = 0
for(let i = 0; i < array1.length; i++){
  if(array1[i] === array2[i]){
    score += 4
  }else if (array2[i] === '') {
    score += 0
  }else{
    score -= 1
  }
}
 if(score < 0){
   score = 0
 }
 return score
}

// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

function switchItUp(number){
  switch(number){
    case 0: return 'Zero'
      break
    case 1: return 'One'
      break
    case 2: return 'Two'
      break
    case 3: return 'Three'
      break
    case 4: return 'Four'
      break
    case 5: return 'Five'
      break
    case 6: return 'Six'
      break
    case 7: return 'Seven'
      break
    case 8: return 'Eight'
      break
    case 9: return 'Nine'
      break

 }
}

// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.
// Fix the bug so we can all go home early.
const replaceDots = function(str) {
  return str.replace(/\./g, '-');
}
