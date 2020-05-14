$('#login').click(function(){
    $.ajax({
        url:'php/login.php',
        type:'POST',
        data:{
            'userphone':$('#txt').val(),
            'password':$('#psd').val(),
        },
        success:(resp) =>{
            if(resp == '1'){
                $.get('./php/getPhoneNumber.php','username=' + $('#txt').val(), function(res){
                    let cookie = res;
                    addcookie('phoneNumber',cookie,7);
                    alert('登录成功');
                    location.href = './index.html';
                })
            }else if(resp == '0'){
                alert('登录失败');
            }else {
                alert('服务器出错了，请稍后重试');
            }
        }
    })
})


$('.icon2').click(function(){
    if(this.className == 'iconfont icon2 icon-miyan'){
        $(this).prev().attr('type','text');
        this.className = 'iconfont icon2 icon-yanjing';
    }else if(this.className == 'iconfont icon2 icon-yanjing'){
        $(this).prev().attr('type','password');
        this.className  = 'iconfont icon2 icon-miyan';
    }
})