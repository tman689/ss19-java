let chucai = prompt("Nhập một ký tự: ")
if ((chucai.length == 1) && (chucai >= 'a' && chucai <= 'z') || (chucai >= 'A' && chucai <= 'Z')){
    document.writeln("'" + chucai + "' là chữ cái.");
}else{
    document.writeln("không phải là chứ cái.");
}