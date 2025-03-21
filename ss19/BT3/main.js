let tygia = 23000;
let chon = prompt("Bạn muốn đổi tiền từ VND sang USD (1) hay từ USD sang VND (2)");
switch(chon){
    case"1":
        var vnd = parseInt(prompt("Nhập số tiền VND: "));
        var usd = vnd / tygia;
        document.writeln(vnd + " VND = " + usd.toFixed(2) + " USD");
        break;
    case"2":
        var usd = parseInt(prompt("Nhập số tiền USD: "));
        var vnd = usd * tygia;
        document.writeln(usd + " USD = " + vnd.toFixed(2) + " VND");
        break;
    default:
        document.writeln("Lựa chọn không hợp lệ!");
}