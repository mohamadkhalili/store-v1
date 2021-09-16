function tofarsi(price_number) {
  var out = ""
  const price_l = price_number.length
  for (let i = 0; i < price_l; i++) {
    let lastnumber = price_number % 10;
    price_number = parseInt(price_number / 10)
    if (i % 3 == 0 && i < price_l - 1 && i > 1) {
      out = "," + out
    }
    if (lastnumber == 0) {
      out = "۰" + out
    } else if (lastnumber == 1) {
      out = "۱" + out
    } else if (lastnumber == 2) {
      out = "۲" + out
    } else if (lastnumber == 3) {
      out = "۳" + out
    } else if (lastnumber == 4) {
      out = "۴" + out
    } else if (lastnumber == 5) {
      out = "۵" + out
    } else if (lastnumber == 6) {
      out = "۶" + out
    } else if (lastnumber == 7) {
      out = "۷" + out
    } else if (lastnumber == 8) {
      out = "۸" + out
    } else if (lastnumber == 9) {
      out = "۹" + out
    }

  }
  return out
}

function tocomonum(number) {
  let num = ""
  let out = ""
  const price_l = number.length
  for (let i = 1; i <= price_l; i++) {

    if (i % 3 === 0) {
      num = number.slice(price_l - i, price_l - i + 3) + num
      out = ',' + number.slice(price_l - i, price_l - i + 3) + out
    }
  }
  out = number.slice(0, number.length - num.length) + out
  return out
}

export default ({app}, inject) => {
  inject('tocomonum', (number) => tocomonum(number))
}
