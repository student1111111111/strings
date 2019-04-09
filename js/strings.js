// Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

let str = ["Hello world", "12 pm", "15 miles", "rabbit"]
let patt1= /d+/g
 
for (let i = 0; i < str.length; i++) {
    let res = patt1.test(str[i])
   if (res == true) {
       document.write(res)
   }
}




// Дано рядок тексту, вивести усі числа, які є у тексті.

var strr = "10 onions and 5 tomatoes"
var patt2 = /d+/g
var result = str.match(patt2)
console.log(result)



