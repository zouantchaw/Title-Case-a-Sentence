// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

function titleCase(str) {
  let convertToArray = str.toLowerCase().split(" ")
  console.log(convertToArray)

  let result = convertToArray.map(val => {
    console.log(val.charAt(0))
    console.log(val.charAt(0).toUpperCase())
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
  })
  return result.join(" ")
}

// Using regex
function titleCase2(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase())
}

titleCase2("I'm a little tea pot");

