           new Fangdajing();
           menu();
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
     	   $('.goods').mouseover(function(){
	    		$('.sort-nav').css('display','block');
	    	});
	    	$('.goods').mouseout(function(){
	    		$('.sort-nav').css('display','none');
	    	});
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
     	 $(document).scroll(function(){
			var bz=$('.details').offset().top+$('.details').height();
			var bzz=$('.details').offset().left;
            var h=$(document).scrollTop()
            if(h<=bz){
            	$('.intro_tit').css('position','');
            }
            if(h>=bz){
            	$('.intro_tit').css({'position':'fixed', 'top':'40px','left':'bzzpx'});
            }
		})
     	 lunbo()
     	 function lunbo(){
			var xb = 0;//当前显示的图片
	        var $aPic = $('#pic_ul').find('li');
	        var $aPic1 = $('#pic_ul1').find('li');
	        var $aBtn = $('.dlist').find('li');
	        $('.dlist').on('mouseenter','li',function(event){
	            console.log($(this).index())
	            xb=$(this).index()
	            for(var i=0;i<$('.dlist li').length;i++){
	                $aPic.eq(i).css('display','none')
	                $aPic1.eq(i).css('display','none')
	            }
	            $aPic1.eq(xb).css('display','block')
	            $aPic.eq(xb).css('display','block')
	            //return xb;
	        })
	    }
	    function Fangdajing(){
    	this.oS_box=document.getElementById('s_box');
		this.oS_position=this.oS_box.children[2];
		this.oS_mark=this.oS_box.children[0];
		this.oB_box=document.getElementById('b_box');
		this.oB_box_all=document.getElementById('b_box_all')
		var _this = this;
		this.oS_mark.onmouseover=function(){
			_this.oS_markover();
		}
		this.oS_mark.onmouseout=function(){
			_this.oS_markout();
		}

		this.oS_mark.onmousemove=function(event){

			_this.oS_markmove();

		}
    }
    Fangdajing.prototype.oS_markover=function(){
		this.oS_position.style.display='block';
	    this.oB_box.style.display='block';
	}
	Fangdajing.prototype.oS_markout=function(){
		this.oS_position.style.display='none';
	    this.oB_box.style.display='none';
	}
	Fangdajing.prototype.oS_markmove=function(){
		var evt=event||window.event;
		var left=evt.offsetX-this.oS_position.offsetWidth/2;
		//console.log(left)
		if(left<0){
			left=0;
		}else if(left>this.oS_box.offsetWidth-this.oS_position.offsetWidth){
			left=this.oS_box.offsetWidth-this.oS_position.offsetWidth
		}
		//console.log(left)
		this.oS_position.style.left=left+'px';
		var top=evt.offsetY-this.oS_position.offsetHeight/2;
		if(top<0){
			top=0;
		}else if(top>this.oS_box.offsetHeight-this.oS_position.offsetHeight){
			top=this.oS_box.offsetHeight-this.oS_position.offsetHeight
		}
		//console.log(top)
		this.oS_position.style.top=top+'px';
		//移动的比例  把X值和Y值换算成比例;
		var proportionX=left/(this.oS_box.offsetWidth-this.oS_position.offsetWidth);
		var proportionY=top/(this.oS_box.offsetHeight-this.oS_position.offsetHeight);
		console.log(proportionX+':'+proportionY)
		//利用比例去算出大小不同的元素的偏移距离；
		this.oB_box_all.style.left=-proportionX*(this.oB_box_all.offsetWidth-this.oB_box.offsetWidth)+'px';
		this.oB_box_all.style.top=-proportionY*(this.oB_box_all.offsetHeight-this.oB_box.offsetHeight)+'px';
	}