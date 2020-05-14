let shopNum = 0;
let price = 0;
let chooseshop = 0;
let endTotle = 0;
let manjian = 99;
let checkId = 0;
let cookie = getCookie('phoneNumber');
function allshop() {
    $('.content-count>p>span:nth-of-type(1)').text($('.content-con').find('article').length);
}
function addEvent() {
    $('.number>a:nth-of-type(2)').click(function () {
        shopNum = parseInt($(this).prev().val());
        price = parseFloat($(this).parent().prev().text());
        shopNum++;
        let idStr = $(this).parent().prev().prev().find('span').text().substring(1, 4);
        console.log(idStr);
        updateNum(idStr, shopNum, () => {
            $(this).prev().val(shopNum);
            $(this).parent().next().text(parseInt(price * shopNum * 100) / 100 + '元');
            alltotle();
        });

    });

    $('.number>a:nth-of-type(1)').click(function () {
        shopNum = parseInt($(this).next().val());
        price = parseFloat($(this).parent().prev().text());
        shopNum--;
        if (shopNum <= 1) {
            shopNum = 1;
        }
        let idStr1 = $(this).parent().prev().prev().find('span').text().substring(1, 4);
        console.log(idStr1);
        updateNum(idStr1, shopNum, () => {
            $(this).next().val(shopNum);
            $(this).parent().next().text(parseInt(price * shopNum * 100) / 100 + '元');
            alltotle();
        })

    });

    $('#check').click(function () {
        chooseshop = 0;
        $('.checkOne').prop('checked', this.checked);

        $('.checkOne').each(function () {
            if (this.checked) {
                chooseshop++;
            }
        })
        $('.content-count>p>span:nth-of-type(2)').text(chooseshop);
        alltotle();
    });

    $('.checkOne').click(function () {
        let flag = true;
        chooseshop = 0;
        $('.checkOne').each(function () {
            if (!this.checked) {
                flag = false;

            }

            if (this.checked) {
                chooseshop++;
            }
        })

        $('#check').prop('checked', flag);
        $('.content-count>p>span:nth-of-type(2)').text(chooseshop);
        alltotle();
    });


    $('.delete').click(function () {
        if(confirm('你确定要删除此商品吗？') == false){
            return;
        }
        let idstr2 = $(this).parent().find('.shopname').find('span').text().substring(1, 4);
        delShop(idstr2, () => {
            $(this).parent().remove();
            allshop();
            chooseshop = 0;
            $('.checkOne').each(function () {
                if (this.checked) {
                    chooseshop++;
                }
            })
            $('.content-count>p>span:nth-of-type(2)').text(chooseshop);
            alltotle();
        })


    });

    $('.number>input').change(function () {
        if (this.value == '' || parseInt(this.value) < 1 || this.value.indexOf('.') > -1) {
            alert('请输入合法的数字，且购买数量至少为1哦');
            this.value = 1;
            $(this).parent().next().text(parseInt($(this).val()) * parseInt(parseFloat($(this).parent().prev().text()) * 100) / 100 + '元');
            alltotle();
            return;
        }

        $(this).parent().next().text(parseInt($(this).val()) * parseInt(parseFloat($(this).parent().prev().text()) * 100) / 100 + '元');

        alltotle();
    });

}

function alltotle() {
    endTotle = 0;
    manjian = 99;
    $('.checkOne').each(function () {
        if (this.checked) {
            endTotle += parseFloat($(this).parent().find($('.totle')).text());
            endTotle = parseInt(endTotle * 100) / 100;
        }
    })

    manjian -= endTotle;
    manjian = parseInt(manjian * 100) / 100;

    if (manjian <= 0) {
        manjian = 0;
    }
    $('.content-top>h2>span').text(manjian + '元');

    $('.alltotle').text(endTotle);
}

function getShop() {
    $.get('./php/getShoppingCart.php', {
        vipName: cookie
    }, (data) => {
        let htmlStr = '';
        htmlStr += `
                <aside>
                <p class="allcheck">
                    <input type="checkbox" id="check"><label for="check">全选</label>
                </p>
                <p class="shopname">商品名称</p>
                <p class="price">单价</p>
                <p class="number">数量</p>
                <p class="totle">小计</p>
                <p class="delete">操作</p>
            </aside>
        `;
        data.forEach(element => {
            checkId++;
            htmlStr += ` <article>
                    <input type="checkbox" id="check${checkId}" class="allcheck checkOne">
                    <section class="shopname">
                        <img src="./images/${element.goodsImg}" alt="" style="width:70px;height:70px;">
                        <span>#${element.goodsId} ${element.goodsName}</span>
                    </section>
                    <em class="price">${element.goodsPrice}元</em>
                    <section class="number">
                        <a href="#">-</a>
                        <input type="text" value="${element.goodsCount}">
                        <a href="#">+</a>
                    </section>
                    <strong class="totle">${element.goodsPrice * element.goodsCount}元</strong>
                    <b class="delete">×</b>
                </article>`
        });

        $('.content-con').html(htmlStr);
        allshop();
        addEvent();
    }, 'json')
}


function updateNum(goodsId, goodsCount, cb) {
    $.get('./php/updateGoodsCount.php', {
        vipName: cookie,
        goodsId: goodsId,
        goodsCount: goodsCount
    }, (datas) => {
        if (datas == '0') {
            alert('error：修改数量失败');
        } else if (datas == '1') {
            cb();
        }
    })
}

function delShop(godsId,callb) {
    $.get('./php/deleteGoods.php', {
        vipName: cookie,
        goodsId: godsId
    }, (res) => {
        if (res == '0') {
            alert('error：删除失败');
        }else if(res == '1'){
            callb();
        }
    })
}

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
    `;
        $('.header-right>ul').html(htmlStr);
    } else {
        htmlStr += `
            <li><a href="./login.html">登录</a></li>
            <li><a href="./register.html">注册</a></li>
    `;
        $('.header-right>ul').html(htmlStr);
    }

}
getcoo();

$('.exitLogin').click(function () {
    removeCookie('phoneNumber');
    getcoo();
})

$(function () {
    getShop();
})

