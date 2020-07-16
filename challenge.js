const J = "aA"
const S = "aAA"

function findJewels(J, S) {
  let output = 0
  let letters = /^[A-Za-z]+$/
  let objJ = {}

  if (!J.match(letters) || !S.match(letters)) {
    return 'Characters must be letters !'
  }
  if ([...J].length > 50 || [...S].length > 50) {
    return 'Maximum of length must be 50 !'
  }
  if ([...J].length < 1 || [...S].length < 1) {
    return output
  }
  for (let j of [...J]) {
    objJ[j] = 1
  }
  for (let s of [...S]) {
    if (objJ[s] != undefined) {
      output += 1
    }
  }
  return output
}

const result = findJewels(J, S)
console.log("Output:", result)