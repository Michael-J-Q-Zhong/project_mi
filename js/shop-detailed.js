$('.navli>ul:eq(0)>li:eq(0)').mouseenter(function(){
    $('.navli-first-left').css({
        'display':'block'
    });
}).mouseleave(function(){
    $('.navli-first-left').css({
        'display':'none'
    });
});

$('.navli-first-left').mouseenter(function(){
        $(this).css('display','block');
}).mouseleave(function(){
    $(this).css('display','none');
})

function getDetail(goosID){
    $.get('php/getGoodsInfo.php','goodsId='+goosID,function(element){
        let htmlStr = '';
        let imgStr = '';
        let totleStr = '';
            htmlStr += `<h2>${element.goodsName}</h2>
            <p class="p-de">${element.beiyong7}<span>${element.beiyong8}</span></p>
            <p class="ps">小米自营</p>
            <p class="price">${element.goodsPrice}元</p>
            `;

            imgStr +=`
            <img src="./images/${element.beiyong2}" alt="">
            <img src="./images/${element.beiyong3}" alt="">
            <img src="./images/${element.beiyong4}" alt="">
            <img src="./images/${element.beiyong5}" alt="">
            <img src="./images/${element.beiyong6}" alt="">
            `;

            totleStr += `<section>        
                            <p>${element.goodsName} 12GB+512GB 天际蓝</p>
                            <h5>总计 ：${element.goodsPrice}元</h5>
                    </section>
                    <span>${element.goodsPrice}元</span>
            `;

        $('.content-right-p').html(htmlStr);
        $('.swiperbox').html(imgStr);
        $('.this-totle>article').html(totleStr);
    },'json')
}

function addShoppingCar(gosId,cookie){
    $('#addShopCar').click(function(){
        if(!cookie){
            alert('请先登录');
            location.href = './login.html';
            return;
        }
    $.post('./php/addShoppingCart.php',{
        'vipName':cookie,
        'goodsId':gosId,
        'goodsCount':1
    },(res)=>{
        if(res == '1'){
            alert('scuuess：添加购物车成功');
            $.get('./php/getShoppingCart.php',{
                vipName:cookie
            },(re)=>{
                let shopCen = '';
               re.forEach(el => {
                    shopCen += `
                        <div class="shopCen-de">
                            <img src='./images/${el.goodsImg}' style="width:20px; height:20px;">
                            <span>${el.goodsName}</span>
                        </div>
                    `; 
               });
               $('.shoppingCen').html(shopCen);
            },'json')
        }else if(res == '0'){
            alert('error：添加购物车失败');
        }else{
            alert('error：服务器出错了，请稍后重试');
        }
    })
})
}

$(function(){
    let goosID = location.search.split('=')[1];
    let cookie = getCookie('phoneNumber');
    getDetail(goosID);
    addShoppingCar(goosID,cookie);
})