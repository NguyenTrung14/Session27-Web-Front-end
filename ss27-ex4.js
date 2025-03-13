function add(arr){
    let quantity=Number(prompt("Moi ban nhap so luong phan tu nguyen muon them vao"));
    if(quantity<=0 || isNaN(quantity)){
        alert(`So luong them vao khong hop le`);
        return;
    }else{
        let value;
        for(let i=0;i<quantity;i++){
            do{
                value=prompt(`Moi ban nhap so nguyen thu ${i+1}`);
                if(Number.isInteger(value) && !isNaN(value)){
                    arr.push(value);
                    break;
                }else{
                    alert(`Vui long nhap so nguyen`);
                }
            } while(Number.isInteger(value));
        }
        return arr;
    }
}

function average(arr){
    let total=arr.reduce((acc,cur) => acc + cur,0);
    total = total / (arr.length);
    return total;
}

function findMax(arr){
    let arrNew=arr.filter(x => x%2==0);
    if(arrNew.length>0){
        return Math.max(...arrNew);
    }else{
        return "Khong ton tai phan tu chan"
    }

}
function findMin(arr){
    let arrNew=arr.filter(x => x%2!==0);
    if(arrNew.length>0){
        return Math.min(...arrNew);
    }else{
        return "Khong ton tai phan tu le"
    }
}


    let arr=[];
    let select;
    let total;
    do{
        select=Number(prompt(`1.Nhập danh sách số nguyên
2.Tính trung bình các số.
3.Tìm số chẵn lớn nhất.
4.Tìm số lẻ nhỏ nhất.
5.Thoát.`));
        switch(select){
            case 1:
                arr=add(arr);
                alert(arr);
                break;
            case 2:
                total=average(arr);
                alert(total);
                break;
            case 3:
                total=findMax(arr);
                alert(total);
                break;
            case 4:
                total=findMin(arr);
                alert(total);
                break;
            case 5:
                break;
            default:
                alert(`Lua chon khong hop le`);
        }
    } while(select!==5);