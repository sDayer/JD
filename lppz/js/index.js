$(function(){
		//alert(1)//成功引入jq
		$('.footer').load('../html/footer.html',function(){
			menu();
			lunbo();
			louti();
			zhekou();
			floordw();
			rightfix();
			hd();
		});
		
		
	})  
        function hd(){
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
        }
        function rightfix(){
            $(".rnb-list>li").hover(function(){
             	// alert(1)
                $(this).children(".hvr").find("span").animate({"right":"36px"},{"width":"70px"});
            },function(){
                $(this).children(".hvr").find("span").animate({"right":"-105px"},{"width":"35px"});
            });
            $(".rnb-link>li").hover(function(){
                $(this).children(".hvr").find("span").animate({"right":"36px"},{"width":"70px"});
                $(this).find(".cust").css({"display":"block"});
            },function(){
                $(this).children(".hvr").find("span").animate({"right":"-105px"},{"width":"35px"});
                $(this).find(".cust").css({"display":"none"});
            });
            $('.fhdb').click(function(){
	            $(document).scrollTop(0); 
	        })
        }
        function floordw(){
			$(document).scroll(function(){
				var bz=$('.activity').offset().top;
	            var move=$('#louti>div').eq($(this).index()).offset().top;
	            var h=$(document).scrollTop()
	            if(h<=bz){
	            	$('#dwlt').css('display','none');
	            }else{
	            	$('#dwlt').css('display','block');
	            }
			})
			$('.jk').click(function(){
				var bz=$('.activity').offset().top;
	            var move=$('#louti>div').eq($(this).index()).offset().top;
	            var h=$(document).scrollTop()
	            $('body').animate({scrollTop:move},400)
	        	/*var timer;
	            console.log(move)
	            timer=setInterval(function(){
	                speed=(move-h)/100;
	                
	                if(move-h==0){
	                    clearInterval(timer)   
	                }else{
	                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
	                    h=h+speed;
	                    $(document).scrollTop(h);
	                }
	            },1) */
	            //$(document).scrollTop(move); 
	        })
		}
        
    	function louti(){
    		var $aSin_node1=$('.sin_node1');
	    	$('.sct_tabs1').on('mouseover','li',function(){
	    		console.log($(this).index());
	    		wz=$(this).index();
	    		for(var i=0;i<$aSin_node1.length;i++){
	    			$('.sct_tabs1 li').eq(i).removeClass('active');
	    			$aSin_node1.eq(i).css('display','none');
	    		}
	    		$aSin_node1.eq(wz).css('display','block');
	    		$('.sct_tabs1 li').eq(wz).addClass('active');
	    	})
	    	var $aSin_node2=$('.sin_node2');
	    	$('.sct_tabs2').on('mouseover','li',function(){
	    		console.log($(this).index());
	    		wz=$(this).index();
	    		for(var i=0;i<$aSin_node2.length;i++){
	    			$('.sct_tabs2 li').eq(i).removeClass('active');
	    			$aSin_node2.eq(i).css('display','none');
	    		}
	    		$aSin_node2.eq(wz).css('display','block');
	    		$('.sct_tabs2 li').eq(wz).addClass('active');
	    	})
	    	var $aSin_node3=$('.sin_node3');
	    	$('.sct_tabs3').on('mouseover','li',function(){
	    		console.log($(this).index());
	    		wz=$(this).index();
	    		for(var i=0;i<$aSin_node3.length;i++){
	    			$('.sct_tabs3 li').eq(i).removeClass('active');
	    			$aSin_node3.eq(i).css('display','none');
	    		}
	    		$aSin_node3.eq(wz).css('display','block');
	    		$('.sct_tabs3 li').eq(wz).addClass('active');
	    	})
	    	var $aSin_node4=$('.sin_node4');
	    	$('.sct_tabs4').on('mouseover','li',function(){
	    		console.log($(this).index());
	    		wz=$(this).index();
	    		for(var i=0;i<$aSin_node4.length;i++){
	    			$('.sct_tabs4 li').eq(i).removeClass('active');
	    			$aSin_node4.eq(i).css('display','none');
	    		}
	    		$aSin_node4.eq(wz).css('display','block');
	    		$('.sct_tabs4 li').eq(wz).addClass('active');
	    	})
	    	var $aSin_node5=$('.sin_node5');
	    	$('.sct_tabs5').on('mouseover','li',function(){
	    		console.log($(this).index());
	    		wz=$(this).index();
	    		for(var i=0;i<$aSin_node5.length;i++){
	    			$('.sct_tabs5 li').eq(i).removeClass('active');
	    			$aSin_node5.eq(i).css('display','none');
	    		}
	    		$aSin_node5.eq(wz).css('display','block');
	    		$('.sct_tabs5 li').eq(wz).addClass('active');
	    	})
	    	var $aSin_node6=$('.sin_node6');
	    	$('.sct_tabs6').on('mouseover','li',function(){
	    		console.log($(this).index());
	    		wz=$(this).index();
	    		for(var i=0;i<$aSin_node6.length;i++){
	    			$('.sct_tabs6 li').eq(i).removeClass('active');
	    			$aSin_node6.eq(i).css('display','none');
	    		}
	    		$aSin_node6.eq(wz).css('display','block');
	    		$('.sct_tabs6 li').eq(wz).addClass('active');
	    	})

    	}
		function menu(){
			var $aSub_sort=$('.sub-sort');
	    	//console.log($aSub_sort.length)
	    	$('#menu_3').on('mouseover','li',function(){
	    		//console.log($(this).index());
	    		wz=$(this).index();
	    		for(var i=0;i<$aSub_sort.length;i++){
	    			$aSub_sort.eq(i).css('display','none');
	    		}
	    		$aSub_sort.eq(wz).css('display','block');
	    	})
	    	$('#menu_3').on('mouseout','li',function(){
	    		for(var i=0;i<$aSub_sort.length;i++){
	    			$aSub_sort.eq(i).css('display','none');
	    		}
	    	})
		}
		function zhekou(){
			var $aDiscount_area_list=$('.discount_area_list');
	    	$('.discount_tabs').on('mouseover','li',function(){
	    		console.log($(this).index());
	    		wz=$(this).index();
	    		for(var i=0;i<$aDiscount_area_list.length;i++){
	    			$('.discount_tabs li').eq(i).removeClass('active');
	    			$aDiscount_area_list.eq(i).css('display','none');
	    		}
	    		$aDiscount_area_list.eq(wz).css('display','block');
	    		$('.discount_tabs li').eq(wz).addClass('active');
	    	})
		}
		
		function lunbo(){
			var xb = 0;//当前显示的图片
	        var $aPic = $('#pic_box #pic_ul').find('li');
	        var $aBtn = $('#btn_ul').find('li');
	        var timer=setInterval(move,2000)
	        $('#btn_ul').on('mouseenter','li',function(event){
	            console.log($(this).index())
	            xb=$(this).index()
	            for(var i=0;i<$('#btn_ul li').length;i++){
	                $aPic.eq(i).css('opacity','0')
	                $('#btn_ul li').eq(i).css('background','#99706b')
	            }
	            $aPic.eq(xb).css('opacity','1')
	            $aBtn.eq(xb).css('background','#a40025')
	            if(xb==2){
	            	$('#bannerbox').css('background','#e9ecec')
	            }else if(xb==0){
	            	$('#bannerbox').css('background','#fffaea')
	            }else if(xb==1){
	            	$('#bannerbox').css('background','#050402')
	            }
	            //return xb;
	        })
	        function move(){
	            if(xb == $aPic.size()-1){
	                xb = 0 ;
	            }else{
	                xb++
	            }
	            for(var i=0;i<$('#btn_ul li').length;i++){
	                $aPic.eq(i).css('opacity','0')
	                $('#btn_ul li').eq(i).css('background','#99706b')
	            }
	            $aPic.eq(xb).css('opacity','1')
	            $aBtn.eq(xb).css('background','#a40025')
	            if(xb==2){
	            	$('#bannerbox').css('background','#e9ecec')
	            }else if(xb==0){
	            	$('#bannerbox').css('background','#fffaea')
	            }else if(xb==1){
	            	$('#bannerbox').css('background','#050402')
	            }
	            
	        }
	        $('#pic_box').mouseover(function(){
	            clearInterval(timer);
	        })
	        $('#pic_box').mouseout(function(){
	            //console.log(xb)
	            timer=setInterval(move,2000)
	        })
	        // $(document).mousedown(function(){
	        //     return false;
	        // })
		}
		