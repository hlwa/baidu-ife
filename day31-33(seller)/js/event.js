function allCheck(obj){//本函数检查dom除全选项（最后一项）的其他项是否全选
    let checkCount=0, uncheckCount =0, resultCount;
    for(let i=0; i<obj.length-1;i++){
        if(obj[i].checked == true){
            checkCount += 1;
        }else if(obj[i].checked == false){
            uncheckCount += 1;
        }
    }
    if(checkCount == obj.length-1){
        resultCount=1;//全部被勾选
    }else if(uncheckCount == obj.length-1){
        resultCount=0;//全部未被勾选
    }else if(checkCount != obj.length-1&&uncheckCount != obj.length-1){
         resultCount=-1;//没有全部被勾选或者全部未勾选
    }
    return resultCount;
}

function listEvent(doms,dom){
    let thisEvent = doms;
    let thing = dom;           
    //读取自定义属性
    if(thing.getAttribute('checkbox-type')=='all'){//如果点击了全选
        if(thing.checked){//如果点击后是选择的状态
            for(i in thisEvent){//做全选对应的逻辑
                thisEvent[i].checked = true;
            }
        }else{
            if(allCheck(thisEvent)==1){//子选项全部被选择
                thing.checked = true;
            }
        }
    }else{//如果点击的不是全选键
        if(thing.checked){//如果是点击后选择的状态
            if(allCheck(thisEvent)==1){
                thisEvent[thisEvent.length-1].checked = true;
            }
        }else{//如果是点击后未选择的状态
            if(allCheck(thisEvent)==0){//如果全部子项未选择
                thing.checked = true;
            }else if(allCheck(thisEvent)==-1){
                thisEvent[thisEvent.length-1].checked = false;
            }
        }
    }
    
}

function getList(doms){
    let thisEvent = doms;
    let selectList = [];
    for(let m =0; m< thisEvent.length-1; m++){
        if(thisEvent[m].checked){
            selectList.push(thisEvent[m].nextElementSibling.innerText)
        }
    }
    return selectList;       
}               