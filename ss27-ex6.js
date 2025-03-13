function check(arr) {
    if (!Array.isArray(arr) || arr.length < 2 || arr.some(x => isNaN(x))) {
        return "dữ liệu không hợp lệ";
    }
    let d = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== d) {
            return false; 
        }
    }
    return true; 
}

let arr=[];
let quantity=Number(prompt("Moi ban nhap so luong phan tu "))
if(quantity>0 && !isNaN(quantity)){
    for(let i=0;i<quantity;i++){
        arr[i]=Number(prompt(`Moi ban nhap gia tri cho phan tu thu ${i+1}`));
    }
    alert(`${arr} : ${check(arr)}`);
}