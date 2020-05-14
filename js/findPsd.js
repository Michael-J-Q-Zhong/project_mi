$('#btn').click(function(){
    if($('#phonenumber').val()  == '' || $('#username').val() == ''){
        alert('请输入手机号及用户名');
        return;
    }

    $.get('./php/findPassword.php',{
        phonenumber:$('#phonenumber').val(),
        username:$('#username').val()
    },(data)=>{
        console.log(data);
        if(data == '0'){
            alert('查询数据失败，请检查输入的内容是否有误');
            return;
        }
        let htmlStr = '';
        htmlStr += `
            <p>您的密码为：${data}，请注意保存</p>
            <input type="button" value="返回登录" id="backLogin">
        `;
        $('#yanzheng').html(htmlStr);
        backLogin();
    })
})

function backLogin(){
    $('#backLogin').click(function(){
        location.href = './login.html';
    })
}