function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}

let number1=Number(prompt("Moi ban nhap so thu nhat"));
let number2=Number(prompt("Moi ban nhap so thu hai"));
if(!isNaN(number1) && !isNaN(number2)){
    let select;
    let total;
    do{
        select=Number(prompt(`1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.`));
        switch(select){
            case 1:
                total = addition(number1,number2);
                alert(`Tong 2 so la ${total}`);
                break;
            case 2:
                total = subtraction(number1,number2);
                alert(`Hieu 2 so la ${total}`);
                break;
            case 3:
                total = multiplication(number1,number2);
                alert(`Tich 2 so la ${total}`);
                break;
            case 4:
                total = division(number1,number2);
                alert(`Thuong 2 so la ${total}`);
                break;
            case 5:
                break;
            default:
                alert(`Lua chon khong hop le`);
        }
    } while(select!==5);
}