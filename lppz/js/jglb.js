            $('.top-user-info').mouseover(function(){
	    		$('.my-lppz-layer').css('display','block');
	    	});
	    	$('.top-user-info').mouseout(function(){
	    		$('.my-lppz-layer').css('display','none');
	    	});
	    	$('.top-follow').mouseover(function(){
	    		$('.gzlp').css('display','block');
	    	});
	    	$('.top-follow').mouseout(function(){
	    		$('.gzlp').css('display','none');
	    	});
	    	$('.header_shop').mouseenter(function(){
                $('.cart_list').css('display','block');
            });
            $('.header_shop').mouseleave(function(){
                $('.cart_list').css('display','none');
            });
            $.ajax({
                url:'../data/test2.json',
                type:'GET',
                success:function(res){
                    var hoppage=16;
                    var pag;
                    var n=1;
                    pag=Math.ceil(res.length/hoppage);
                    var oPagWarp=document.getElementById('pageWarp');
                    for(var i=0;i<pag;i++){
                        var oLi=document.createElement('li');
                        oLi.index = i;
                        oLi.innerHTML=i+1;
                        if(i==0){
                            oLi.className='active';
                        }
                        oPagWarp.children[1].children[0].appendChild(oLi);
                        oLi.onclick=function(){
                            var aLi=document.getElementById('pageWarp').children[1].getElementsByTagName('li');
                            for(var i = 0 ; i < aLi.length; i++){
                                aLi[i].className='';
                            }
                            aLi[this.index].className='active';
                            n=this.index+1;
                            setpage();
                        }
                        setpage();
                    }
                    function setpage(){
                        var html = '';
                        for(var i=(n-1)*hoppage;i<n*hoppage;i++){
                            if(i < res.length){
                               // for(var i = 0 ; i < res.length; i ++){
                                    html += '<li><div class="pt"><a class="pic"><img src='+res[i].url+'></a><a class="tit" href="'+res[i].hre+'">'+res[i].name+'</a><p class="prom">壳薄肉厚 自然原香</p></div><div class="price"><span>￥<i>'+res[i].price1+'</i>'+res[i].price2+'</span></div><div class="part"><div class="cart"><a class="add" id="'+res[i].id+'" price="'+res[i].price3+'">加购物车</a><a class="atte">加关注</a></div><div class="meta"><span class="sale">已售：<i>'+res[i].xs+'</i></span><div class="comm"><span class="tx">评分：</span><span class="score-star"></span></div></div></div></li>'
                                //}
                            }
                        }
                        $('#showControlPage ul').html(html)
                    } 
                    $('#go').click(function(){
                    	var reg=/\d/i;
                        if(reg.test((parseInt($('#text').val())))){
                       	 if(parseInt($('#text').val())<1){
                       	 	n=1;
                       	 }else if(parseInt($('#text').val())>pag){
                       	 	n=pag;
                       	 	//alert(n)
                       	 }else{
                       	 	n=parseInt($('#text').val());
                       	 }
                       	for(var i = 0 ; i < $('#pageWarp ul li').length; i++){
                            $('#pageWarp ul li').eq(i).removeClass('active')
                        }
                        $('#pageWarp ul li').eq(n-1).addClass('active')
                       	 setpage();
                       	 $('#text').val('')
                       	}else{
                       		$('#text').val('')
                       		return
                       	}
                    });
                    $('#btnR').click(function(){
                        if(n<pag){
                            n++;
                        }else{
                            n=1;
                        }
                        //console.log($('#pageWarp ul li').length)
                        for(var i = 0 ; i < $('#pageWarp ul li').length; i++){
                            $('#pageWarp ul li').eq(i).removeClass('active')
                        }
                        $('#pageWarp ul li').eq(n-1).addClass('active')
                        setpage();
                    })
                    $('#btnL').click(function(){
                        if(n>1){
                            n--;
                        }else{
                            n=pag;
                        }
                        //console.log($('#pageWarp ul li').length)
                        for(var i = 0 ; i < $('#pageWarp ul li').length; i++){
                            $('#pageWarp ul li').eq(i).removeClass('active')
                        }
                        $('#pageWarp ul li').eq(n-1).addClass('active')
                        setpage();
                    })
                }
            })
            $('.header_shop').mouseenter(function(){
                $('.cart_list').css('display','block');
                
            });
            $('.cart_goods').on('click','.del_li',function(event){
                //alert(1)
                console.log($(this).parent().parent().index())
                var k=$(this).parent().parent().index();
                var id=this.id
                var str = $.cookie('goods');
                var arr = eval(str);
                console.log(arr)
                var same = true;
                    //遍历所有对象。如果id相同，让该商品数量递减 ;
                for(var attr in arr){
                    if(arr[attr].id == id){     
                        arr[attr].num = arr[attr].num -1; 
                         //让json结构中num自减。
                        var cookieStr = JSON.stringify(arr);//将json对象转换成字符串.
                        $.cookie('goods',cookieStr)
                        if(arr[attr].num<=0){
                        	arr[attr].num=0;
                        	same = false;
                        }
                        
                    }
                }
                if(!same){
                    var obj  = {id:id,num:0};
                    //arr.pop(obj);
                    arr.splice(k,1);
                    var cookieStr = JSON.stringify(arr);
                    $.cookie('goods',cookieStr);
                }
                sc_msg()
                sc_car()    
            });
            $('.header_shop').mouseleave(function(){
                $('.cart_list').css('display','none');
            });
            sc_msg()
            sc_car()
            $('#showControlPage ul').on('click','.add',function(){

                //购物车数量增加;
                var id = this.id
                var first = $.cookie('goods')==null?true:false;//判断是否有cookie进行添加
                var same = false;//判断时候已经追加
                //是否是第一次添加
                if(first){
                    //第一次添加,建立json结构。
                    $.cookie('goods','[{id:'+id+',num:1}]');
                    $.cookie('first','false');
                }else{
                    var str = $.cookie('goods');
                    var arr = eval(str);
                    //遍历所有对象。如果id相同，让该商品数量递增 ;
                    for(var attr in arr){
                        if(arr[attr].id == id){     
                            arr[attr].num = arr[attr].num + 1; 
                             //让json结构中num自增。
                            var cookieStr = JSON.stringify(arr);//将json对象转换成字符串.
                            $.cookie('goods',cookieStr)
                            same = true;
                        }
                    }
                    //如果id不同，重新建立商品对象;
                    
                    if(!same){
                        var obj  = {id:id,num:1};
                        arr.push(obj);
                        var cookieStr = JSON.stringify(arr);
                        $.cookie('goods',cookieStr);
                    }

                }
                sc_car()
                sc_msg()
            })
            function sc_car(){

                var sc_str = $.cookie('goods');
                if(sc_str){//如果购物车cookie不为空。
                    var sc_obj = eval(sc_str);
                    var sc_num = 0 ; 
                    var price_sum=0;
                    for(var i in sc_obj){
                        sc_num = Number(sc_obj[i].num) + sc_num;
                    }
                    $('.cart_num b').html(sc_num);
                    $('.total p .red').html(sc_num);
                   // 

                }
            }
            function sc_msg(){
                $.ajax({
                    url:'../data/test2.json',
                    type:'GET',
                    success:function(res){
                        var sc_str = $.cookie('goods');
                        if(sc_str){
                            var sc_obj = eval(sc_str);
                            var sc_num = 0 ;
                            var html = ''; 
                            var total_price=0;
                            for(var i in sc_obj){    
                                html += '<li><div class="gd_lft"><a class="pic"><img src="'+res[sc_obj[i].id].url+'"></a><a>'+res[sc_obj[i].id].name+'</a></div><div class="gd_price"><span>￥'+res[sc_obj[i].id].price3+'<small>x'+sc_obj[i].num+'</small></span><a class="del_li" id="'+res[sc_obj[i].id].id+'">删除</a></div></li>'
                                total_price+=res[sc_obj[i].id].price3*sc_obj[i].num
                            }
                            $('.cart_roll .cart_goods').html(html);
                            $('.total .sum b').html(parseFloat(total_price).toFixed(2));
                        }
                    }
                })
            }