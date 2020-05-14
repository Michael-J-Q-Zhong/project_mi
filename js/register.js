let arr = [];
let spans = document.getElementsByTagName('span');
let mytimer = null;
let time = 5;
let flag = true;

function pushSpan() {
    $('span').each(function () {
        arr.push(this.innerHTML);
    })
}

pushSpan();
function spanStyle(thisDom, reg) {
    if (reg.test(thisDom.value)) {
        thisDom.nextElementSibling.innerHTML = '√';
        thisDom.nextElementSibling.style.color = 'green';
        return true;
    } else {
        thisDom.nextElementSibling.innerHTML = '你输入的内容不符合规范，请输入正确的' + thisDom.previousElementSibling.innerHTML;
        thisDom.nextElementSibling.style.color = 'red';
        return false;
    }
}


function phone(str) {
    let phoneReg = /^1[3,5,7,8]\d{9}$/;
    if (spanStyle(str, phoneReg)) {
        return true;
    } else {
        return false;
    }
}

function username(str) {
    let usernameReg = /^[\u4e00-\u9fa5\w]{2,16}$/;
    spanStyle(str, usernameReg);
}

function password(str) {
    let passwordReg = /^[a-zA-Z0-9$+&]{6,16}$/;

    let lowpsd1 = /^[a-zA-Z]{6,16}$/; //低：纯数字，纯字母，纯符号
    let lowpsd2 = /^[$+&]{6,16}$/;

    let middlepsd1 = /^[a-zA-Z0-9]{6,16}$/; //中：数字字母符号任二
    let middlepsd2 = /^[a-zA-Z+&$]{6,16}$/;
    let middlepsd3 = /^[0-9+&$]{6,16}$/;
    if (spanStyle(str, passwordReg)) {
        if (lowpsd1.test(str.value) || !isNaN(str.value) || lowpsd2.test(str.value)) {
            $('em').css('opacity', 0.1);
            $('em:eq(0)').css('opacity', 1);
        } else if (middlepsd1.test(str.value) || middlepsd2.test(str.value) || middlepsd3.test(str.value)) {
            $('em').css('opacity', 0.1);
            $('em:eq(1)').css('opacity', 1);
        } else {
            $('em').css('opacity', 0.1);
            $('em:eq(2)').css('opacity', 1);
        }
    } else {
        $('em').css('opacity', 0.1);
    }
}

function dbpassword(str) {
    if (str.value != $('#password').val()) {
        str.nextElementSibling.innerHTML = '你输入的密码与原密码不一致，请重新输入';
        str.nextElementSibling.style.color = 'red';
    } else {
        str.nextElementSibling.innerHTML = '√';
        str.nextElementSibling.style.color = 'green';
    }
}


$('#phonenumber').blur(function () {
    if (isUn(this) == false) {
        return;
    }
    if (phone(this)) {
        $.ajax({
            type: 'GET',
            url: 'php/checkUser.php',
            data: {
                phonenumber: this.value
            },
            success: (str) => {
                if (str == '1') {
                    $(this).next().html('此手机号已被注册');
                    $(this).next().css('color', 'red');
                } else if (str == '0') {
                    $(this).next().html('√');
                    $(this).next().css('color', 'green');
                } else {
                    $(this).next().html('服务器出错了，请稍后重试');
                    $(this).next().css('color', 'red');
                }
            }
        })
    }
})

$('#username').blur(function () {
    if (isUn(this) == false) {
        return;
    }
    username(this);
})

$('#password').blur(function () {
    if (isUn(this) == false) {
        return;
    }

    password(this);
})

$('#password').change(function () {
    if ($('#dbpassword').val() == '') {
        return;
    }

    if (this.value != $('#dbpassword').val()) {
        $('#dbpassword').next().text('你输入的密码与原密码不一致，请重新输入');
        $('#dbpassword').next().css('color', 'red');
    }

})


$('#dbpassword').blur(function () {
    if (isUn(this) == false) {
        return;
    }

    dbpassword(this);
})


$('.iconfont').click(function () {
    if (this.className == 'iconfont icon-miyan') {
        $(this).prev().prev().prop('type', 'text');
        $(this).prop('class', 'iconfont icon-yanjing');
    } else if (this.className = 'iconfont icon-yanjing') {
        $(this).prev().prev().prop('type', 'password');
        $(this).prop('class', 'iconfont icon-miyan');
    }
})

$('#clear').click(function () {
    if (confirm('您确定要清空所有文本框吗？')) {
        $('input').not('input[type=button]').val('');
        $.each(arr, function (index, value) {
            spans[index].innerHTML = value;
        })
        $('span').css('color', 'brown');
        $('em').css('opacity', 0.1);
    }
})

//code
function code() {
    let numA = parseInt(Math.random() * 100) + 1;
    let numB = parseInt(Math.random() * 100) + 1;
    let numAB = numA + numB;
    $('b').text(numA + '+' + numB + '=');
    $('b').prev().blur(function () {
        if (parseInt($(this).val()) == numAB) {
            console.log(true);
            flag = true;
            return true;
        } else {
            console.log(false);
            flag = false;
            return false;
        }
    })
}

$('#reg').click(function () {
    let regFlag = true;
    $('span').each(function () {
        if ($(this).text() != '√') {
            $('#result').html('您输入的信息存在错误，请检查后重新提交');
            regFlag = false;
            return;
        }
    })

    if (regFlag) {
        if (flag) {
            $.ajax({
                type: 'POST',
                url: 'php/register.php',
                data: {
                    phonenumber: $('#phonenumber').val(),
                    username: $('#username').val(),
                    password: $('#password').val()
                },

                success: (str) => {
                    if (str == '1') {
                        $('#result').html('注册成功,' + time + '后进入<a href="login.html">登录</a>');
                        mytimer = setInterval(() => {
                            time--;
                            if (time <= 0) {
                                clearInterval(mytimer);
                                location.href = 'login.html';
                            }
                            $('#result').html('注册成功,' + time + '后进入<a href="login.html">登录</a>');
                        }, 1000);
                    } else if (str == '0') {
                        $('#result').html('注册失败，请检查后重新提交');
                    } else {
                        $('#result').html('服务器出错了,请稍后重试');
                    }
                }
            })
        } else if (flag == false) {
            $('#result').html('验证码输入错误');
            $('#code').val('');
            code();
        }
    }


})

$(function(){
    code();
})