let months = parseInt(prompt("Nhập tháng bạn muốn:  "));
if(months == 4 || months == 6 || months == 9 || months == 11){
    document.writeln("Tháng " + months + " CÓ số ngày là + 30");
}else if(months == 2){
    document.writeln("Tháng " + months + " CÓ số ngày là + 28 hoặc 29");
}else if(months == 1 || months == 3 || months == 5 || months == 7 || months == 8 || months == 10 || months == 12){
    document.writeln("Tháng " + months + " CÓ số ngày là + 31");
}else{
    document.writeln("Tháng không hợp lệ");
}