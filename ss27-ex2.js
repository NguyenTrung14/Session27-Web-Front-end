let arr=[];
function add(arr){
    let quantity=Number(prompt("Moi ban nhap so luong sinh vien muon them vao"));
    if(quantity<=0 || isNaN(quantity)){
        alert(`So luong them vao khong hop le`);
        return;
    }else{
        let value;
        for(let i=0;i<quantity;i++){
            value=prompt("Moi ban nhap ten sinh vien");
            if (value.trim().split(" ").length >= 3) {
                arr.push(value.trim()); 
            } else{
                alert(`Vui long nhap day du ho va ten sinh vien`);
            }
        }
        return arr;
    }
}
function search(arr){
    let name=prompt("Moi ban nhap ten sinh vien muon tim kiem");
    let arrNew = arr.filter(x => x.includes(name));
    return arrNew.length > 0 ? arrNew : `Khong ton tai ten ban muon tim kiem`;
}
function erase(arr) {
    let name = prompt("Moi ban nhap ten sinh vien can xoa");
    let index = arr.findIndex(x => x === name);
    if (index !== -1) {
        arr.splice(index, 1); 
        return arr;
    } else {
        return `Khong ton tai sinh vien muon xoa`;
    }
}
    

    let select;
    let total;
    do{
        select=Number(prompt(`1.Nhập danh sách sinh viên.
2.Hiển thị danh sách sinh viên.
3.Tìm sinh viên theo tên.
4.Xóa sinh viên khỏi danh sách.
5.Thoát.`));
        switch(select){
            case 1:
                arr=add(arr);
                break;
            case 2:
                alert(arr.join("\n"));
                break;
            case 3:
                let timKiem=search(arr);
                alert(timKiem);
                break;
            case 4:
                let xoaSV=erase(arr);
                alert(`Danh sach moi la : \n${xoaSV}`);
                break;
            case 5:
                break;
            default:
                alert(`Lua chon khong hop le`);
        }
    } while(select!==5);