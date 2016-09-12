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
            $('.header_shop').mouseenter(function(){
                $('.cart_list').css('display','block');     
            });
            $('#alldelete').click(function(event) {
                //alert(1)
                var arr=[];
                var cookieStr = JSON.stringify(arr);
                $.cookie('goods',cookieStr);
                sc_msg()
                sc_car()
            });
            $('.cart-area').on('click','.allselect',function(event){
                sc_msg()
                sc_car() 
            })
            $('#gwcnr').on('click','.increase',function(event){
                //console.log($(this).parent().parent().parent().index())
                var k=$(this).parent().parent().parent().index();
                //console.log($(this).parent().parent().parent().find('.deletes').attr('id'))
                var id=$(this).parent().parent().parent().find('.deletes').attr('id');
                var str = $.cookie('goods');
                var arr = eval(str);
               // console.log(arr)
                var same = true;
                    //遍历所有对象。如果id相同，让该商品数量递增 ;
                for(var attr in arr){
                    if(arr[attr].id == id){  
                        arr[attr].num = arr[attr].num +1;
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
            })
            $('#gwcnr').on('click','input[type=checkbox]',function(event){
                //alert(1)
                //console.log($(this).parent().parent().index())
                //var k=$(this).parent().parent().index();
                //console.log($(this).parent().parent().find('.deletes').attr('id'))
                //var id=$(this).parent().parent().find('.deletes').attr('id');
                if($(this).prop("checked")!=true){
                    //console.log($('.allselect').attr('checked'))
                    $('.allselect').removeAttr('checked')
                    //console.log($(this).parent().parent().find('.subtotal b').html())
                    var jiaqian=$('#effectivePrice i').html()-$(this).parent().parent().find('.subtotal b').html();
                    $('#effectivePrice i').html(parseFloat(jiaqian).toFixed(2));
                }
                if($(this).prop("checked")===true){
                    var jiaqian=parseFloat($('#effectivePrice i').html())+parseFloat($(this).parent().parent().find('.subtotal b').html());
                    $('#effectivePrice i').html(parseFloat(jiaqian).toFixed(2));
                }
            });
            $('#gwcnr').on('click','.decrease',function(event){
                //alert(1)
                console.log($(this).parent().parent().parent().index())
                var k=$(this).parent().parent().parent().index();
                console.log($(this).parent().parent().parent().find('.deletes').attr('id'))
                var id=$(this).parent().parent().parent().find('.deletes').attr('id');
                var str = $.cookie('goods');
                var arr = eval(str);
                console.log(arr)
                var same = true;
                    //遍历所有对象。如果id相同，让该商品数量递减 ;
                for(var attr in arr){
                    if(arr[attr].id == id){  
                        if(arr[attr].num>1){
                            arr[attr].num = arr[attr].num -1;
                        }else{
                            arr[attr].num = 1;  
                        }   
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
            $('#gwcnr').on('click','.deletes',function(event){
               // alert(1)
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
                        arr[attr].num =0; 
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
                    //var obj  = {id:id,num:0};
                    //arr.pop(obj);
                    arr.splice(k,1);

                    var cookieStr = JSON.stringify(arr);
                    $.cookie('goods',cookieStr);
                }
                sc_msg()
                sc_car()  
                 console.log('arr')  
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
                            var htmls='';
                            var total_price=0;
                            var html3='<tr><th width="18"><input type="checkbox" class="allselect" checked=""></th><th class="cent" width="60">全选</th><th>商品名称</th><th width="80">单价</th><th width="60">数量</th><th width="100">小计</th><th width="90">操作</th></tr>';
                            for(var i in sc_obj){    
                                html += '<li><div class="gd_lft"><a class="pic"><img src="'+res[sc_obj[i].id].url+'"></a><a>'+res[sc_obj[i].id].name+'</a></div><div class="gd_price"><span>￥'+res[sc_obj[i].id].price3+'<small>x'+sc_obj[i].num+'</small></span><a class="del_li" id="'+res[sc_obj[i].id].id+'">删除</a></div></li>'
                                htmls+='<tr class="spjs"><td><input type="checkbox" checked=""></td><td><a class="pic" target="_blank"><img src="'+res[sc_obj[i].id].url+'"></a></td><td class="commodity"><a>'+res[sc_obj[i].id].name+'</a></td><td>￥'+res[sc_obj[i].id].price3+'</td><td class="purchase quantity"><div class="shoping-num"><span class="decrease">&nbsp;－</span><input type="text" name="quantity" value="'+sc_obj[i].num+'" ><span class="increase">&nbsp;＋</span></div></td><td><span class="subtotal">￥<b>'+parseFloat(res[sc_obj[i].id].price3*sc_obj[i].num).toFixed(2)+'</b></span></td><td><a class="deletes" id="'+res[sc_obj[i].id].id+'">删除</a><br><a class="addFavorite">移到我的关注</a></td></tr>'
                                total_price+=res[sc_obj[i].id].price3*sc_obj[i].num
                            }
                            $('.cart_roll .cart_goods').html(html);
                            $('#perfect').html(html3);
                            $('#gwcnr').html(htmls);
                            $('.total .sum b').html(parseFloat(total_price).toFixed(2));
                            $('#effectivePrice i').html(parseFloat(total_price).toFixed(2));
                        }
                    }
                })
            }