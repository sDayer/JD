
    	$('.top-user-info').mouseover(function(){
    		$('.gzlp').css('display','block');
    	});
    	$('.top-user-info').mouseout(function(){
    		$('.gzlp').css('display','none');
    	});

    	var jy=[0,0,0]
        //检验用户名
        $('#username').blur(function(){
        	var reg=/\w{4,20}/i;
        		if(reg.test($('#username').val())){
        			$('.t1').css('display','none')
        			jy[0]=1;
        		}else{
        			$('.t1').css('display','block')
        			jy[0]=0;
        		}
        })
        $('#password').blur(function(){
        	var reg=/\w{6,20}/i;
        		if(reg.test($('#password').val())){
        			$('.t2').css('display','none')
        			jy[1]=1;
        		}else{
        			$('.t2').css('display','block')
        			jy[1]=0;
        		}
        		//console.log($('input[type=password]').eq(0).val())

        })
        $('#rePassword').blur(function(){
        	
        		if( $('#rePassword').val()== $('#password').val()){
        			$('.t3').css('display','none')
        			jy[2]=1;
        		}else{
        			$('.t3').css('display','block')
        			jy[2]=0;
        		}
        		//console.log($('input[type=password]').eq(0).val())

        })
         $('#mobile').blur(function(){
            var reg=/^1\d{2,11}$/i;
                if(reg.test($('#mobile').val())){
                    $('.t4').css('display','none')
                    
                }else{
                    $('.t4').css('display','block')
                    
                }
        })
         hq();
        $('#hyz').click(function(){
            hq();
        })
        function hq(){
            var h
            h=Number(Math.round(Math.random()*10000));
            if(h>=1000){
                $('.yanzhengma').html(h)
            }else{
                hq();
            }
        }
        $('#image').blur(function(){
            if( $('#image').val()== $('.yanzhengma').html()){
                $('.t5').css('display','none')
            }else{
                $('.t5').css('display','block')
            }
        })
        $('#smt_btn').click(function(){
            console.log(jy)
            if(jy[0]==1&&jy[1]==1&&jy[2]==1&&$('#has_agree').prop("checked")===true){
            var ID=$('#username').val();
            var password=$('#password').val();
            console.log(ID+":"+password);
            $.ajax({
                url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                type:"GET",
                data:{
                    status:"register",
                    userID:ID,
                    password:password
                },
                success:function(res){
                    console.log(typeof res)
                    console.log(res)
                    switch(res){
                        case "0":alert('重名了');
                        break;
                        case "1":alert('恭喜，注册成功了！');
                        break;
                        case "2":alert('和我没关系，找后台');
                        break;
                    }
                }
            })
            
            }
        })