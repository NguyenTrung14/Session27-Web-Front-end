function chiaMang(arr, n) {
    if (!Array.isArray(arr) || arr.some(x=>isNaN(x)) || n <= 0) {
        return "dữ liệu không hợp lệ";
    }
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}




let arr=[];
let quantity=Number(prompt("Moi ban nhap so luong phan tu "))
if(quantity>0 && !isNaN(quantity)){
    for(let i=0;i<quantity;i++){
        arr[i]=Number(prompt(`Moi ban nhap gia tri cho phan tu thu ${i+1}`));
    }
    let index=Number(prompt(`Moi ban nhap kich thuoc mang con`));
    arr=chiaMang(arr,index);
    alert(arr);
}

