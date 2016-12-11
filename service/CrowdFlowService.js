export function getCurrentDensity(location) {
  let place = {}
  let output = []
  let dens
  place.latitude = 13.734760
  place.logitude = 100.777690
  place.Name = "KMITL"
  dens = Math.floor(Math.random() * (3))
  if(dens == 0)
    place.Density = "LOW"
  else if(dens == 1)
    place.Density = "MEDIUM"
  else
    place.Density = "HIGH"

  output[0]=place

  return new Promise((resolve, reject) => {
    resolve(output)
  })
}

export function getChaningDensity(location){

  let place = {}
  let output = []
  let dens
  place.latitude = 13.734760
  place.logitude = 100.777690
  place.Name = "KMITL"
  dens = Math.floor(Math.random() * (3))
  if(dens == 0)
    place.Density = "DECREASE"
  else if(dens == 1)
    place.Density = "STABLE"
  else
    place.Density = "INCREASE"

  output[0]=place

  return new Promise((resolve, reject) => {
    resolve(output)
  })
}

export function getNextPlace(location){

  let place = {}
  let output = []

  place.latitude = 13.734760
  place.logitude = 100.777690
  place.Name = "KMITL"
  place.NextPlace = [
    { Order : 1,
      latitude : 13.693811,
      logitude : 100.648180,
      Name : "ซีคอนสแควร์"
    },
    { Order : 2,
      latitude : 13.694754,
      logitude : 100.650628,
      Name : "ตลาดรถไฟ ศรีนครินทร์"
    },
    { Order : 3,
      latitude : 13.689999,
      logitude : 100.750134,
      Name : "ท่าอากาศยานสุวรรณภูมิ"
    }
  ]

  output[0]=place

  return new Promise((resolve, reject) => {
    resolve(output)
  })
}
