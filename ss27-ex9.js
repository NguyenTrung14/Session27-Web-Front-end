function loc(arr){
    if (!Array.isArray(arr) || arr.some(x => isNaN(x))|| arr.length < 2 ) {
        return "dữ liệu không hợp lệ";
    }
    let arrNew=arr.filter(x=> x%2==0);
    arrNew.sort((a,b)=>a-b);
    let j=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr[i]=arrNew[j];
            j++;
        }
    }
    return arr;
}


let arr=[];
let quantity=Number(prompt("Moi ban nhap so luong phan tu "))
if(quantity>0 && !isNaN(quantity)){
    for(let i=0;i<quantity;i++){
        arr[i]=Number(prompt(`Moi ban nhap gia tri cho phan tu thu ${i+1}`));
    }
    arr=loc(arr);
    alert(arr);
}
