let a = parseInt(prompt("Nhập hệ số a: "));
let b = parseInt(prompt("Nhập hệ số b: "));
let c = parseInt(prompt("Nhập hệ số c: "));
let delta = b * b - 4 * a * c;
if(a == 0){
    document.writeln("Đây không phải là phương trình bậc 2 vì a = 0.");
}else{
    if(delta > 0){
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.writeln("Phương trình có hai nghiệm phân biệt: x1 = " + x1.toFixed(2) + " và x2 = " + x2.toFixed(2));
    }else if (delta == 0){
        let x = -b / (2 * a);
        document.writeln("Phương trình có một nghiệm kép: x = " + x.toFixed(2));
    } else{
        document.writeln("Phương trình vô nghiệm.");
    }
}