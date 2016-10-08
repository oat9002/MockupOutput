export function mockupOutput() {
  let output = {}
  let max = 100
  for (var i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        output.happy = Math.floor(Math.random() * (max + 1))
        max = max - output.happy
        break;
      case 1:
        output.sad = Math.floor(Math.random() * (max + 1))
        max = max - output.sad
        break;
      case 2:
        output.angry = Math.floor(Math.random() * (max + 1))
        max = max - output.angry
        break;
      case 3:
        output.neutral = max
        break;
      default: console.log("something went wrong.");
    }
  }
  return new Promise((resolve, reject) => {
    resolve(output)
  })
}
