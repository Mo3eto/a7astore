const phone = "01153606206"
const regex = new RegExp(/^01(0|1|2|5)\d{8}$/)
console.log(regex.test(phone))
