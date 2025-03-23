let thang = parseInt(prompt("Nhập tháng 1-12:"));
if (thang >= 1 && thang <= 3){
    document.writeln("Mùa xuân");
}else if (thang >= 4 && thang <= 6){
   document.writeln("Mùa hè");
}else if (thang >= 7 && thang <= 9){
    document.writeln("Mùa thu");
}else if (thang >= 10 && thang <= 12){
    document.writeln("Mùa đông");
}else{
    document.writeln("Tháng không hợp lệ.");
}