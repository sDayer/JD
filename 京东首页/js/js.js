	window.onload=function(){
         $('#headerbox').load('../html/header.html',function(){
        
       hederbox();
        sidenav();
        lunbo1();
        centerCont();
        likePic();

    })
        
      


    }
    function hederbox(){
    	var oHeader_left=document.getElementById('header_left')
	    var oAddres_list=document.getElementById('addres_list')
	    var aDdres=oAddres_list.children;
	    aDdres[0].children[0].style.background='#c81623';
		aDdres[0].children[0].style.color='#fff';
	    oHeader_left.onmouseover=function(){
			//alert(1);			
			oHeader_left.children[0].style.background='#fff';
			oAddres_list.style.display='block';
			for(var i=0;i<aDdres.length;i++){
				aDdres[i].index=i;
				aDdres[i].onclick=function(){
					oHeader_left.children[0].children[1].innerHTML=aDdres[this.index].children[0].innerHTML;
					for(var i=0;i<aDdres.length;i++){
						aDdres[i].children[0].style.background='#fff';
						aDdres[i].children[0].style.color='#333';
					}
					aDdres[this.index].children[0].style.background='#c81623';
					aDdres[this.index].children[0].style.color='#fff';
				}
			}
		}
		oHeader_left.onmouseout=function(){
			//alert(1);
			oAddres_list.style.display='none';
			oHeader_left.children[0].style.background='#f1f1f1';
		}
		var oHeader_bh1=document.getElementById('header_bh1')
	    var oLogin=document.getElementById('login')
	    oHeader_bh1.onmouseover=function(){
	    	oHeader_bh1.style.background='#fff';
	    	oHeader_bh1.style.color='#c81623';
	    	oLogin.style.display="block";
	    }
	    oHeader_bh1.onmouseout=function(){
	    	oLogin.style.display="none";
	    	oHeader_bh1.style.background='#f1f1f1';
	    	oHeader_bh1.style.color='#333';
	    	oHeader_bh1.style.background='url(../images/headerbg.jpg) no-repeat left 9px';
	    }


	    var oHeader_bh2=document.getElementById('header_bh2')
	    var oHeader_bh2_pic=document.getElementById('header_bh2_pic')
	    oHeader_bh2.onmouseover=function(){
	    	//alert(1)
	    	oHeader_bh2.style.background='#fff';
	    	oHeader_bh2.style.color='#c81623';
	    	oHeader_bh2_pic.style.display="block";
	    }
	    oHeader_bh2.onmouseout=function(){
	    	oHeader_bh2_pic.style.display="none";
	    	oHeader_bh2.style.background='#f1f1f1';
	    	oHeader_bh2.style.color='#333';
	    	oHeader_bh2.style.background='url(../images/headerbg.jpg) no-repeat left 9px';
	    }


	    var oHeader_bh3=document.getElementById('header_bh3')
	    var oHeader_bh3_pic=document.getElementById('header_bh3_pic')
	    oHeader_bh3.onmouseover=function(){
	    	//alert(1)
	    	oHeader_bh3.style.background='#fff';
	    	oHeader_bh3.style.color='#c81623';
	    	oHeader_bh3_pic.style.display="block";
	    }
	    oHeader_bh3.onmouseout=function(){
	    	oHeader_bh3_pic.style.display="none";
	    	oHeader_bh3.style.background='#f1f1f1';
	    	oHeader_bh3.style.color='#333';
	    	oHeader_bh3.style.background='url(../images/headerbg.jpg) no-repeat left 9px';
	    }


	    var oHeader_bh4=document.getElementById('header_bh4')
	    var oCustomer_server=document.getElementById('customer_server')
	    oHeader_bh4.onmouseover=function(){
	    	//alert(1)
	    	oHeader_bh4.style.background='#fff';
	    	oHeader_bh4.style.color='#c81623';
	    	oCustomer_server.style.display="block";
	    }
	    oHeader_bh4.onmouseout=function(){
	    	oCustomer_server.style.display="none";
	    	oHeader_bh4.style.background='#f1f1f1';
	    	oHeader_bh4.style.color='#333';
	    	oHeader_bh4.style.background='url(../images/headerbg.jpg) no-repeat left 9px';
	    }


	    var oHeader_bh5=document.getElementById('header_bh5')
	    var oHeader_nav=document.getElementById('header_nav')
	    oHeader_bh5.onmouseover=function(){
	    	//alert(1)
	    	oHeader_bh5.style.background='#fff';
	    	oHeader_bh5.style.color='#c81623';
	    	oHeader_nav.style.display="block";
	    }
	    oHeader_bh5.onmouseout=function(){
	    	oHeader_nav.style.display="none";
	    	oHeader_bh5.style.background='#f1f1f1';
	    	oHeader_bh5.style.color='#333';
	    	oHeader_bh5.style.background='url(../images/headerbg.jpg) no-repeat left 9px';
	    }

		document.onmousedown=function(){
			return false;
		}	
    }
    function sidenav() {
	    var sideNav = document.getElementById("sideNav");
	    var liList = sideNav.getElementsByTagName("li");
	    var classDiv = sideNav.getElementsByTagName("div");
	    for (var i = 0; i < liList.length; i++) {
	        liList[i].index = i;
	        liList[i].onmouseenter = function () {
	            classDiv[this.index].style.display = "block";
	            classDiv[this.index].style.zIndex = 10;
	        }
	        liList[i].onmouseleave = function () {
	            classDiv[this.index].style.display = "none";
	        }
	    }
	}
	function lunbo1(){
		var btnLeft = document.getElementById("leftBtn");
        var btnRight = document.getElementById("rightBtn");

        var oUl=document.getElementById('img_list');
        var oLi=oUl.children[0];
        var cOli = oLi.cloneNode(true);
        oUl.appendChild(cOli);
        oUl.style.width = oUl.offsetWidth+oLi.offsetWidth + 'px'
        var aBtn=document.getElementById('btn').children;
        for(var i=0;i<aBtn.length;i++){
            aBtn[i].index=i;
            aBtn[i].onclick=function(){
                move(oUl,'left',-oLi.offsetWidth*this.index);
                for(var j=0;j<aBtn.length;j++){
                    aBtn[j].className='';
                }
                aBtn[this.index].className='active'
            }
        }
        
        var index=0;
        var aLi=oUl.children;
        //alert(oUl.children.length)
        var oBanner=document.getElementById('banner');
        var timer=null;
        timer=setInterval(yd,2000);
        oBanner.onmouseover=function(){
            clearInterval(timer)
            btnLeft.style.display='block';
            btnRight.style.display='block';
        }
        oBanner.onmouseout=function(){
            clearInterval(timer)
            timer=setInterval(yd,2000)
            btnLeft.style.display='none'
            btnRight.style.display='none'
        }
        document.onmousedown = function(){
            return false
        }
        btnLeft.onclick = function () {
            if(index==1){
                oUl.style.left=-3650+'px';
                index=6;
            }else{
                index--;
            }
            console.log(index)
            for(var j=0;j<aBtn.length;j++){
                    aBtn[j].className='';
                }
            if(index != aLi.length-1){
                aBtn[index].className = 'active'
            }else{
                aBtn[0].className = 'active';
            }
            move(oUl,'left',-oLi.offsetWidth*index);
        }
        btnRight.onclick = function () {
            console.log(index);
            yd();
        }
        function yd(){
            if(index==aLi.length-1){
                oUl.style.left=0;
                index=1;
            }else{
                index++;
            }
            for(var j=0;j<aBtn.length;j++){
                    aBtn[j].className='';
                }
            if(index != aLi.length-1){
                aBtn[index].className = 'active'
            }else{
                aBtn[0].className = 'active';
            }
            move(oUl,'left',-oLi.offsetWidth*index);
        }
        
	}
	function centerCont(){
		function fAjax(url,fn){
            var ajax=new XMLHttpRequest();
            ajax.open('GET',url,true);
            ajax.send(null);
            ajax.onreadystatechange=function(){
                if(ajax.readyState==4&&ajax.status==200){
                    fn(ajax.responseText);
                }
            }
        }
        fAjax('../data/JD_1.json',init);
        var hoppage=4;
        var n=1;
        var oRes=null;
        var pag;
        function init(res){
            oRes=eval(res);
            pag=Math.ceil(oRes.length/hoppage);
            //console.log(oRes);
            setpage();
        }
        function setpage(){
            var str='';
            for(var i=(n-1)*hoppage;i<n*hoppage;i++){
                if(i < oRes.length){
                    str+='<li><img src='+oRes[i].url+' alt="" class="img"></li>'
                }
            }
            document.getElementById('picList').innerHTML=str;
        }
        
        var oRecommendCont=document.getElementById('recommendCont');
        var oBtnL=document.getElementById('btnL');
        var oBtnR=document.getElementById('btnR');
        oRecommendCont.onmouseover=function(){
            oBtnL.style.display='block';
            oBtnR.style.display='block';
        }     
        oRecommendCont.onmouseout=function(){
            oBtnL.style.display='none';
            oBtnR.style.display='none';
        }   
        oBtnR.onclick=function(){
            if(n<pag){
                n++;
            }else{
                n=1;
            }
            setpage();
        }
        oBtnL.onclick=function(){
            if(n>1){
                n--;
            }else{
                n=pag;
            }
            setpage();
        }
	}
	function likePic(){
		function fAjax(url,fn){
            var ajax=new XMLHttpRequest();
            ajax.open('GET',url,true);
            ajax.send(null);
            ajax.onreadystatechange=function(){
                if(ajax.readyState==4&&ajax.status==200){
                    fn(ajax.responseText);
                }
            }
        }
        fAjax('../data/JD_2.json',init);
        var hoppage=6;
        var n=1;
        var oRes=null;
        var pag;
        function init(res){
            oRes=eval(res);
            pag=Math.ceil(oRes.length/hoppage);
            //console.log(oRes);
            setpage();
        }
        function setpage(){
            var str='';
            for(var i=(n-1)*hoppage;i<n*hoppage;i++){
                if(i < oRes.length){
                    str+='<li><a href="#"><img src='+oRes[i].url+'><div class="botTxt"><p>乔丹（qiaodan）百搭板鞋 简约运动鞋平底鞋</p><h3 class="texRed marLef15">¥119.00</h3></div></a></li>'
                }
            }
            document.getElementById('likePic').innerHTML=str;
        }
        var oBtnL=document.getElementById('guessbtn');
        oBtnL.onclick=function(){
            if(n>1){
                n--;
            }else{
                n=pag;
            }
            setpage();
        }
	}
	    

   
	    function getStyle(DOM,name){
	        if(DOM.currentStyle){
	            return DOM.currentStyle[name];
	        }else{
	            return getComputedStyle(DOM,false)[name];
	        }
	    }
	    function move(DOM,attr,target){
	        clearInterval(DOM.timer)
	        DOM.timer=setInterval(function(){
	            if(attr=='opacity'){
	                var cur=Math.round(parseFloat(getStyle(DOM,attr))*100)
	            }else{
	                var cur=parseInt(getStyle(DOM,attr));
	            }
	            var speed=(target-cur)/10;
	            speed=speed>0?Math.ceil(speed):Math.floor(speed);
	            if(cur==target){
	                clearInterval(DOM.timer)
	            }else{
	                if(attr=='opacity'){

	                    DOM.style.filter='alpha(opacity:'+(cur+speed)+')'
	                    DOM.style.opacity=(cur+speed)/100
	                }else{
	                    DOM.style[attr]=cur+speed+'px';
	                }
	            }
	        },30)
	    }