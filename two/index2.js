 
   var good_list;
   $.ajaxSettings.async=false;
    $.getJSON("http://yunxtec.com/test/goodslist.php",function(good_list){//利用getjson函数获取json文件并放回给good_list
    
    if(!localStorage.getItem("good_list")){
        localStorage.setItem("good_list",JSON.stringify(good_list.goodslist));
    }  
    for(x in good_list.goodslist){//利用循环在wrapper中一次插入json文件中的商品
        $(".wrapper").append("<div class='cont'>"+
        "<a href="+good_list.goodslist[x].url+"><img src="+good_list.goodslist[x].img+"></a>"+
        "<div>"+
        "<strong class='good-name'>商品名称："+good_list.goodslist[x].goods+"</strong>"+
        "<p class='good-descr'>"+good_list.goodslist[x].descr+"</p>"+
        "<span class='good-price'>￥"+good_list.goodslist[x].price+"</span><br>"+
        "<span class='good-button'>点击右边红色按钮加入购物车:<span>"+
        "<i class='glyphicon glyphicon-plus-sign button_sign'></i>"+
        "</div>"+"</div>"
        );
        if(good_list.goodslist[x].num){
            
        }else{
            good_list.goodslist[x].num=0;//增加一个num字段用来在本地存储中存储加入购物车的该商品的总件数
        }
        good_list.goodslist[x].id=x;//增加字段id用以标记商品
    }
   

});


console.log(localStorage);

    $('.wrapper .button_sign').click(function(){   
        var button_index = $('.wrapper .button_sign').index(this);//获取当前点击的商品的加入购物车按钮的下标
        var data=JSON.parse(localStorage.getItem("good_list"));//读取本地存储的数据
        data[ button_index].num++;//被按下的按钮的商品的数目加1               
        alert(data[ button_index].goods+" 已成功添加入购物车，请在购物车中查看！");
        localStorage.setItem("good_list",JSON.stringify(data)); //将商品的信息存储到本地存储中     
        console.log(data[button_index].num);
        console.log(localStorage);
    });
