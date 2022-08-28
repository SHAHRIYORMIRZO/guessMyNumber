// // let js = 'amazing'
// // let firstName = 'Mirzo'
// // console.log(firstName)

// // const age = 19
// // const isOldEnough = age >= 18

// // if (isOldEnough) {
// //   console.log('trueee 🚗')
// // }

// // 'use strict'

// // let hasDriversLicence = false;
// // let passTest = true;

// // if (passTest) hasDriversLicence = true;

// // if (hasDriversLicence) console.log("I can drive a car ")

// 'use strict'

// // function logger() {
// //   console.log('my name is Shahriyor')
// // }

// // logger();

// // function fruitProsessor(apple, orange) {
// //   const juice = `Juice with ${apple} apples and ${orange} oranges`
// //   return juice;
// // }

// // const appleJuice = fruitProsessor(4, 3)

// // console.log(appleJuice)




// // Function decloration
// function calculateAge(age, currentYear = 2022) {
//   const result = `Siz ${currentYear - age}-yilda tug'ilgansiz. Bu ${currentYear}-yilga nisbatan`
//   return result
// }

// const cal = calculateAge(21)
// console.log(cal)

// // Function expression       ==============  Expression va decloration ni asosiy farqi, declorationni functiondan oldin chaqirishimiz mumkin, lekin expressionni esa unday qilolmaymiz
// const calAge2 = function (age, currentYear = 2022) {
//   const result = `Siz ${currentYear - age}-yilda tug'ilgansiz. Bu ${currentYear}-yilga nisbatan`
//   return result
// }

// // const cal2 = calAge2(21)
// // console.log(cal, cal2)

// // Arrow function

// // const calAge3 = birthday => 2022 - birthday
// // const age3 = calAge3(21)
// // console.log(age3)



// ================================ Arrarys ============================ // 

const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']

console.log(friends)

const years = new Array('1991', 2002, 2020)
console.log(years)


//  Push metodi arrayni oxiriga element qoshadi
//  Unshift  metodi arrayni boshiga element qoshadi
//  Pop metodi arrayni oxiridan elementi ochiradi
// Shift metodi arrayni boshidan elementi ochiradi
// Includes("") metodi arrayni ichida shu ma'lumot bor yoki yoqligini tekshiradi
// indexOf("") metodi shu elementni indeksini qaytaradi

// ======================== Objects ======================== //

// const junas = {
//   firstName: 'Michael',
//   lastName: 'Steven',
//   age: 21,
//   job: 'teacher',
//   friends: ['Michael', 'Peter, Jay']
// }

const junasAr = [
  'Michael',
  'Steven',
  21,
  'teacher',
  ['Michael', 'Peter, Jay']
]


for (let i = 0; i < junasAr.length; i++) {
  console.log(junasAr[i])
}
const Ar = ['shahriyor', 'akbaraliyev', 'ruzali ugli', 23, 2001]

for (let i = 0; i < Ar.length; i++) {
  console.log(Ar[i]);
}