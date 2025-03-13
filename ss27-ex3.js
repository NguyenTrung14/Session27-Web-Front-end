function sTron(r){
    return r*r*3.14;
}
function pTron(r){
    return 2*r*3.14;
}
function sHCN(a,b){
    return a*b;
}
function pHCN(a,b){
    return 2*(a+b);
}

let r,a,b;
let result;
let select;
    let total;
    do{
        select=Number(prompt(`1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát.`));
        switch(select){
            case 1:
                r=Number(prompt("Moi ban nhap ban kinh hinh tron"));
                if(!isNaN(r) && r>=0){
                    result=sTron(r);
                    alert(result);
                }
                break;
            case 2:
                r=Number(prompt("Moi ban nhap ban kinh hinh tron"));
                if(!isNaN(r) && r>=0){
                    result=pTron(r);
                    alert(result);
                }
                break;
            case 3:
                a=Number(prompt("Moi ban nhap chieu dai hinh chu nhat"));
                b=Number(prompt("Moi ban nhap chieu rong hinh chu nhat"));
                if(!isNaN(a) && a>=0 &&!isNaN(b) && b>=0 ){
                    result=sHCN(a,b);
                    alert(result);
                }
                break;
            case 4:
                a=Number(prompt("Moi ban nhap chieu dai hinh chu nhat"));
                b=Number(prompt("Moi ban nhap chieu rong hinh chu nhat"));
                if(!isNaN(a) && a>=0 &&!isNaN(b) && b>=0 ){
                    result=pHCN(a,b);
                    alert(result);
                }
                break;
            case 5:
                break;
            default:
                alert(`Lua chon khong hop le`);
        }
    } while(select!==5);