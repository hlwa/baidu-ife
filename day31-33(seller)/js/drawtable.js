function getSelectData() {//根据选项获取数据并返回
    let selectData = [];
    for( i in sourceData){
        if(regionList.indexOf(sourceData[i].region)!= -1&&productList.indexOf(sourceData[i].product)!= -1){
            selectData[i] = sourceData[i];
        }
    }
    return selectData
    //返回数据
}

function drawTable(){
    //输出表头：商品、地区、1月、2月、…… 12月
    let selectData = getSelectData();
    let newTable = document.createElement('table');
    
    newTable.setAttribute("border","1"); //设置其表格线条样式宽度
    newTable.setAttribute("align","center"); //设置居中
    let tableWrapper = document.querySelector('#table-wrapper');
    let thisTable=document.querySelector('table');
    if(thisTable!=null){
        tableWrapper.removeChild(thisTable);
    }
    let tHead = document.createElement('thead');
    let htr = document.createElement('tr');
    let tableHead = [];
    if(productList.length>1&&regionList.length==1){
        tableHead = ['地区','商品','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    }else{
        tableHead = ['商品','地区','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    }   
    
    for(m in tableHead){
        let td = [];
        td[m] = document.createElement('td');
        td[m].innerHTML = tableHead[m];
        htr.appendChild(td[m]);
    }
    tHead.appendChild(htr);
    newTable.appendChild(tHead)
    
    for(n in selectData) {//遍历数据
        //输出每一行的表格HTML内容
        
        let tds = [], arr = [], btr = document.createElement('tr');
        
        if(productList.length>1&&regionList.length==1){
            arr[0] = selectData[n].region;
            arr[1] = selectData[n].product;                   
        }else{
            arr[0] = selectData[n].product;
            arr[1] = selectData[n].region;                   
        } 
                                     
        for(let i=0; i<12; i++){
            arr[i+2] = selectData[n].sale[i];
        }
        
        for(x in arr){
            tds[x] = document.createElement('td');
            tds[x].innerHTML = arr[x];
            if(x==0){
                tds[x].setAttribute("class","firstCol");
            }
            btr.appendChild(tds[x]);
        }                            
        newTable.appendChild(btr);
    }           
    //把生成的HTML内容赋给table-wrapper
    tableWrapper.appendChild(newTable);
    let firstCol =document.querySelectorAll('.firstCol');
    let equalCount = 0;
    for(let i=0; i< firstCol.length-1; i++){       
        if(firstCol[i].innerText==firstCol[i+1].innerText){
            equalCount++;
        }
    }
    if(equalCount == firstCol.length-1){
        
        for(let i =1; i<firstCol.length; i++){
            firstCol[i].parentNode.removeChild(firstCol[i]);
        }
        firstCol[0].setAttribute("rowspan",firstCol.length);
    }
}     