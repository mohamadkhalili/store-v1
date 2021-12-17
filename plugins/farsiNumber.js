// function tofarsi (priceNumber) {
//   let out = ''
//   const priceL = priceNumber.length
//   for (let i = 0; i < priceL; i++) {
//     const lastnumber = priceNumber % 10
//     priceNumber = parseInt(priceNumber / 10)
//     if (i % 3 === 0 && i < priceL - 1 && i > 1) {
//       out = ',' + out
//     }
//     if (lastnumber === 0) {
//       out = '۰' + out
//     } else if (lastnumber === 1) {
//       out = '۱' + out
//     } else if (lastnumber === 2) {
//       out = '۲' + out
//     } else if (lastnumber === 3) {
//       out = '۳' + out
//     } else if (lastnumber === 4) {
//       out = '۴' + out
//     } else if (lastnumber === 5) {
//       out = '۵' + out
//     } else if (lastnumber === 6) {
//       out = '۶' + out
//     } else if (lastnumber === 7) {
//       out = '۷' + out
//     } else if (lastnumber === 8) {
//       out = '۸' + out
//     } else if (lastnumber === 9) {
//       out = '۹' + out
//     }
//   }
//   return out
// }

function tocomonum (number) {
  let num = ''
  let out = ''
  let priceL = number.length
  if (priceL % 3 === 0) {
    priceL--
  }
  for (let i = 1; i <= priceL; i++) {
    if (i % 3 === 0) {
      num = number.slice(priceL - i, priceL - i + 3) + num
      out = ',' + number.slice(priceL - i, priceL - i + 3) + out
    }
  }
  out = number.slice(0, number.length - num.length) + out
  return out
}

export default ({ app }, inject) => {
  inject('tocomonum', number => tocomonum(number))
}
