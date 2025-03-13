function change(number){
    let arr=number.toString().split("").map(Number);
    return arr.sort((a,b) => b-a).join("");
}
let number=parseInt(prompt(`Moi ban nhap 1 so nguyen bat ki`));
if(!isNaN(number) && number>0 && Number.isInteger(number)){
    number=change(number);
    alert(number);
}else{
    alert(`Du lieu khong hop le`);
}