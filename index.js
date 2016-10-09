function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  let passion = ["follow", "your", "dreams."]
  passion.forEach(callback)
  return passion
}
function doToArray(array, callback){
  array.forEach(callback)
}
