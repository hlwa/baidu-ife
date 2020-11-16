let region = document.querySelector('#region-radio-wrapper');
        let month = document.querySelector('#month-radio-wrapper');
        let product = document.querySelector('#product-radio-wrapper');
        let regionList = ['华东'],productList = ['手机'],monthList =['1月份'];
        let regionEvent = region.querySelectorAll('input');
        let monthEvent = month.querySelectorAll('input');
        let productEvent = product.querySelectorAll('input');  
        
        window.onload = drawTable();

        for( let i=0; i<regionEvent.length;i++){
            regionEvent[i].addEventListener('change', function(){listEvent(regionEvent,regionEvent[i])});//为region添加点击事件
            regionEvent[i].addEventListener('change', function(){regionList = getList(regionEvent)});//为region添加点击事件
            regionEvent[i].addEventListener('change',drawTable);         
        }
        for( let i=0; i<productEvent.length;i++){
            productEvent[i].addEventListener('change', function(){listEvent(productEvent,productEvent[i])});//为region添加点击事件
            productEvent[i].addEventListener('change', function(){productList = getList(productEvent)});//为region添加点击事件
            productEvent[i].addEventListener('change',drawTable);         
        }
        for( let i=0; i<monthEvent.length;i++){
            monthEvent[i].addEventListener('change', function(){listEvent(monthEvent,monthEvent[i])});
            monthEvent[i].addEventListener('change', function(){monthList = getList(monthEvent)});
            monthEvent[i].addEventListener('change',drawTable);
        }                           