$('.top-user-info').mouseover(function(){
		$('.gzlp').css('display','block');
	});
	$('.top-user-info').mouseout(function(){
		$('.gzlp').css('display','none');
	});
	$('.span1').mouseover(function(){
		$('.yh_pic').css('display','block');
	});
	$('.span1').mouseout(function(){
		$('.yh_pic').css('display','none');
	});
$('#login_btn').click(function(){
        var ID=$('#username').val();
        var password=$('#password').val();
        console.log(ID+":"+password);
        $.ajax({
            url:"http://datainfo.duapp.com/shopdata/userinfo.php",
            type:"POST",
            data:{
                status:"login",
                userID:ID,
                password:password
            },
            success:function(res){
                switch(res){
                    case "0":alert('用户名不存在');
                    break;
                    case "2":alert('用户名密码不符');
                    break;
                    default:window.location.href="index.html";
                    break;
                }
            }
        })
    })