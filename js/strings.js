// Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

let str = ["Hello world", "12 pm", "15 miles", "rabbit"]
let patt1= /d+/g
 
for (let i = 0; i < str.length; i++) {
   if (patt1.test(str[i])) {
       document.write(str[i])
   }
}




// Дано рядок тексту, вивести усі числа, які є у тексті.

var strr = "10 onions and 5 tomatoes"
var patt2 = /d+/g
var result = str.match(patt2)
console.log(result)



// Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку

var st = "we're bought 15 oranges 5 books and 11 pens "
var pat = /\bd{2}\b/
var ress = st.match(pat);





