$('.lidown').mouseenter(function () {
    $('.downloadDiv').slideDown();
    stop();
}).mouseleave(function () {
    $('.downloadDiv').slideUp();
    stop();
});

$('.shoppingCar').mouseenter(function () {
    $('.shoppingCen').slideDown();
    stop();
}).mouseleave(function () {
    $('.shoppingCen').slideUp();
    stop();
});

$('#search').focus(() => {
    $('.new').css('display', 'none');
}).blur(() => {
    $('.new').css('display', 'block');
})

function getcoo() {
    let htmlStr = '';
    let cookie = getCookie('phoneNumber');
    let thisdate = new Date();
    if (cookie) {
        if (thisdate.getHours() >= 0 && thisdate.getHours() < 6) {
            htmlStr += `<li>凌晨好：${cookie}</li>`;
        } else if (thisdate.getHours() >= 6 && thisdate.getHours() < 12) {
            htmlStr += `<li>早上好：${cookie}</li>`;
        } else if (thisdate.getHours() >= 12 && thisdate.getHours() < 18) {
            htmlStr += `<li>下午好：${cookie}</li>`;
        } else if (thisdate.getHours() >= 18 && thisdate.getHours() < 24) {
            htmlStr += `<li>晚上好：${cookie}</li>`;
        }

        htmlStr += `
        <li><a href="#" class="exitLogin">退出登录</a></li>
        <li><a href="#">消息通知</a></li>
    `;
        $('.regAndLog').html(htmlStr);
    } else {
        htmlStr += `
            <li><a href="./login.html">登录</a></li>
            <li><a href="./register.html">注册</a></li>
            <li><a href="#">消息通知</a></li>
    `;
        $('.regAndLog').html(htmlStr);
    }

}
getcoo();

$('.exitLogin').click(function () {
    removeCookie('phoneNumber');
    getcoo();
})

$('.banner-left>ul>li:nth-of-type(1)').click(function () {
    location.href = './shop-items.html';
})

function getShonCen() {
    let co = getCookie('phoneNumber')
    $.get('./php/getShoppingCart.php', {
        vipName: co
    },(data)=>{
        let ht = '';
            if(data.length > 0){
                data.forEach(ele => {
                    ht += `
                        <div class="shopCen-de">
                            <img src='./images/${ele.goodsImg}' style="width:50px; height:50px;">
                            <span>${ele.goodsName}</span>
                        </div>
                    `; 
                });
                $('.shoppingCen').html(ht);
            }
    },'json')
}
$(function(){
    getShonCen();
})