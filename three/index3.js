
    console.log(localStorage);
    var data=JSON.parse(localStorage.getItem("good_list"));//读取本地存储中的数据
    for(var i=0;i<data.length;i++){
        if(data[i].num!=0){//查找num不为0的商品并将其显示到购物车页面中
            $(".wrapper").append("<div class='cont'>"+
            "<a href="+data[i].url+"><img src="+data[i].img+"></a>"+
            "<div class='miaoshu'>"+
            "<strong class='good-name'>"+data[i].goods+"</strong><br>"+
            "<p class='good-descr'>"+data[i].descr+"</p><br>"+
            "价格：<span class='good-price'>￥"+data[i].price+"×"+data[i].num+"</span>"+
            "<span class='good-sum'>小计：<span style='color:red;'>￥"+parseFloat(data[i].price*parseFloat(data[i].num)).toFixed(2)+"</span></span>"+
            "<button>移出购物车</button>"+
            "</div>"+"</div>"
            );//动态添加内部的html代码
        }
    }


    $(document).click(function(e){
        var name=$(e.target).siblings($('p')).html();//获取被点击的删除按钮的兄弟结点p中的商品名称
        var data=JSON.parse(localStorage.getItem("good_list"));//读取数据并保存在data当中
        for(var i=0;i<data.length;i++){
            if(name==data[i].goods){//查找点击了按钮的那个商品的名称然后对其进行删除操作
                if(confirm("是否确认删除")){
                    data[i].num=0;//数目清零
                    alert(data[i].goods+" 删除成功。");
                    localStorage.setItem("good_list",JSON.stringify(data));  //将更新后的data数据又切换成json格式并写入本地存储当中     
                    console.log(data[i].num);
                    console.log(localStorage);
                    window.location.reload();//每次将商品移出购物车时刷新页面以显示购物车的新页面
                }
            }
        }       
    })