function check(arr) {
    if (!Array.isArray(arr) || arr.some(x => isNaN(x))|| arr.length < 2 ) {
        return "dữ liệu không hợp lệ";
    }
    let total = arr.reduce((sum, num) => sum + num, 0);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let result = (max * (max + 1)) / 2 - ((min - 1) * min) / 2;
    return result - total;
}
let arr=[];
let quantity=Number(prompt("Moi ban nhap so luong phan tu "))
if(quantity>0 && !isNaN(quantity)){
    for(let i=0;i<quantity;i++){
        arr[i]=Number(prompt(`Moi ban nhap gia tri cho phan tu thu ${i+1}`));
    }
    alert(`${arr} : ${check(arr)}`);
}
