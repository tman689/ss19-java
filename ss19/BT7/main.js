let so1 = parseInt(prompt("Nhập số thứ nhất:"));
let so2 = parseInt(prompt("Nhập số thứ hai:"));
let so3 = parseInt(prompt("Nhập số thứ ba:"));
let max = so1;
if (so2 > max){
    max = so2;
}
if (so3 > max){
    max = so3;
}
document.writeln("Số lớn nhất trong 3 số là: " + max);