// N1
document.write(" 1)  იპოვეთ ყველაზე დიდი რიცხვი მოცემულ მასივში let arr = [1, 3, 5, 7, 2]<br>")
let arr = [1, 3, 5, 7, 2];
let z = 0;

function maxNum(a){
    for(let i = 0; i < arr.length; i++)
    if(a[i] > z) { z =a[i] }
    document.write(z +"<br>") 
};

maxNum(arr);
///


arr.sort()
document.write(arr[arr.length-1] + "<br>");
//

document.write(Math.max(...arr) + "<br>");
//

let maxN = arr.reduce((a,b) => (a > b ? a:b));
document.write(maxN);
//

document.write("<br> <br> <br>" )
document.write("2) შეაბრუნეთ reverse მასივი let arr = [1, 2, 3, 4, 5]; <br> ")

let arr2 = [1, 2, 3, 4, 5];
arr2.reverse()
document.write(arr2)

//

document.write("<br> <br> <br>" )


document.write("3) მოცემულ ერეიში დააჯამეთ მონაცემები let arr3 = [1, 2, 3, 4, 5];")

let arr3 = [1, 2, 3, 4, 5];

let sum = arr3.reduce((a,b)=> a+b, 0);
document.write("<br>")
document.write(sum)
//

document.write("<br> <br> <br>" )

document.write("4) მოცემული ორი ერეიდან იპოვეთ მსგავსი რიცხვები let arr1 = [1, 2, 3, 4];let arr2 = [3, 4, 5, 6];")

let  arr4 = [1, 2, 3, 4];
let arr5 = [3, 4, 5, 6];

let common = arr4.filter(num => arr5.includes(num))
document.write("<br>")
document.write(common)

document.write("<br> <br> <br>" )


document.write("5)  შექმენით ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ მოერე ფუნქციის პარამეტრად და ifelse მეშვეობით დაბეჭდეთ რამე ინფორმაცია (მაგ: თუ რამე ნივთის ფასიმაღაზიაში არის 50 ლარზე მეტი ესეიგი ძვირია თუ 20-50 დიაპაზონშია მოქცეულისაშუალო თუ ნაკლები იაფი)")

function display(x,func){
    document.write(func(x))
}


function checkPrice(price){
    if(price > 50){
        return "Dzviri"
    } else if(price <= 50 && price > 20) {
        return "sashualo"
    }else{
        return "iafi"
    }

};

document.write("</br>")
display(51,checkPrice);

