export function mockupOutput() {
  let arrayOutput = new Array(4)
  for (let i = 0; i < arrayOutput.length; i++) {
    randomSentiments(i).then(output => {
      arrayOutput[i] = output
    })
  }
  return new Promise((resolve, reject) => {
    resolve(arrayOutput)
  })
}

function randomSentiments(place) {
  let output = {}
  let max = 100
  output.happy = Math.floor(Math.random() * (max + 1))
  max = max - output.happy
  output.sad = Math.floor(Math.random() * (max + 1))
  max = max - output.sad
  output.fear = Math.floor(Math.random() * (max + 1))
  max = max - output.fear
  output.angry = Math.floor(Math.random() * (max + 1))
  max = max - output.angry
  output.neutral = max
  switch (place) {
    case 0: //KMITL
      output.latitude = 13.734760
      output.logitude = 100.777690
      break
    case 1: //ซีคอนสแควร์
      output.latitude = 13.693811
      output.logitude = 100.648180
      break
    case 2: //ตลาดรถไฟ ศรีนครินทร์
      output.latitude = 13.694754
      output.logitude = 100.650628
      break
    case 3: //ท่าอากาศยานสุวรรณภูมิ
      output.latitude = 3.689999
      output.logitude = 100.750134
    break
    default: console.log("Something went wrong.");
  }
  return new Promise((resolve, reject) => {
    resolve(output)
  })
}
