export function mockupOutput() {
  let arrayOutput = new Array(5)
  for (let i = 0; i < 5; i++) {
    randomSentiments(i).then(output => {
      arrayOutput[i] = output
    })
  }
  return new Promise((resolve, reject) => {
    resolve(arrayOutput)
  })
}

function randomSentiments(value) {
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
  output.latitude = Math.random() * 15
  output.logitude = Math.random() * 130
  return new Promise((resolve, reject) => {
    resolve(output)
  })
}
