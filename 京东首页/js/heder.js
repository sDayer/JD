$(function(){


    $('#headerbox').load('../html/header.html',function(){
         hederbox();
      

    })
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
})