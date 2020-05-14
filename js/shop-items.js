$('.navli>ul:eq(0)>li:eq(0)').mouseenter(function () {
    $('.navli-first-left').css({
        'display': 'block'
    });
}).mouseleave(function () {
    $('.navli-first-left').css({
        'display': 'none'
    });
});

$('.navli-first-left').mouseenter(function () {
    $(this).css('display', 'block');
}).mouseleave(function () {
    $(this).css('display', 'none');
})


function getStar() {
    $.get('php/getGoodsList.php','typeId=007',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `<div class="items1">
            <img src="./images/${element.goodsImg}" alt="">
                <section>
                    <article>
                        <h3>${element.goodsName}</h3>
                        <p class="p1">${element.goodsDesc}</p>
                        <p class="price">${element.goodsPrice}<span>元起</span></p>
                        <a href="shop-detailed.html?goodsId=${element.goodsId}">立即购买</a>
                    </article>
                </section>
                </div>
                `
        });
        $('.items-wrap>div:nth-of-type(2)').html(htmlStar);
    },'json');
}

function getTwo1() {
    $.get('php/getGoodsList.php','typeId=012',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items2">
            <img src="./images/${element.goodsImg}" alt="">
            <section>
                <article>
                    <h3>${element.goodsName}</h3>
                    <p class="p1">${element.goodsDesc}</p>
                    <p class="price">${element.goodsPrice}<span>元起</span></p>
                </article>
            </section>
        </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(3)').html(htmlStar);
    },'json');
}

function getTwo2() {
    $.get('php/getGoodsList.php','typeId=013',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items2">
            <img src="./images/${element.goodsImg}" alt="">
            <section>
                <article>
                    <h3>${element.goodsName}</h3>
                    <p class="p1">${element.goodsDesc}</p>
                    <p class="price">${element.goodsPrice}<span>元起</span></p>
                </article>
            </section>
        </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(4)').html(htmlStar);
        $('.items-wrap>div:nth-of-type(19)').html(htmlStar);
    },'json');
}

function getTwo3() {
    $.get('php/getGoodsList.php','typeId=014',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items2">
            <img src="./images/${element.goodsImg}" alt="">
            <section>
                <article>
                    <h3>${element.goodsName}</h3>
                    <p class="p1">${element.goodsDesc}</p>
                    <p class="price">${element.goodsPrice}<span>元起</span><del>${element.beiyong1}元</del></p>
                </article>
            </section>
        </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(5)').html(htmlStar);
    },'json');
}

function getTwo4() {
    $.get('php/getGoodsList.php','typeId=015',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items2">
            <img src="./images/${element.goodsImg}" alt="">
            <section>
                <article>
                    <h3>${element.goodsName}</h3>
                    <p class="p1">${element.goodsDesc}</p>
                    <p class="price">${element.goodsPrice}<span>元起</span></p>
                </article>
            </section>
        </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(7)').html(htmlStar);
        $('.items-wrap>div:nth-of-type(17)').html(htmlStar);
    },'json');
}

function getTwo5() {
    $.get('php/getGoodsList.php','typeId=008',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items2">
            <img src="./images/${element.goodsImg}" alt="">
            <section>
                <article>
                    <h3>${element.goodsName}</h3>
                    <p class="p1">${element.goodsDesc}</p>
                    <p class="price">${element.goodsPrice}<span>元起</span><del>${element.beiyong1}元</del></p>
                </article>
            </section>
        </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(8)').html(htmlStar);
    },'json');
}

function getTwo6() {
    $.get('php/getGoodsList.php','typeId=009',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items2">
            <img src="./images/${element.goodsImg}" alt="">
            <section>
                <article>
                    <h3>${element.goodsName}</h3>
                    <p class="p1">${element.goodsDesc}</p>
                    <p class="price">${element.goodsPrice}<span>元起</span></p>
                </article>
            </section>
        </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(10)').html(htmlStar);
        $('.items-wrap>div:nth-of-type(18)').html(htmlStar);
    },'json');
}

function getTwo7() {
    $.get('php/getGoodsList.php','typeId=016',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items2">
            <img src="./images/${element.goodsImg}" alt="">
            <section>
                <article>
                    <h3>${element.goodsName}</h3>
                    <p class="p1">${element.goodsDesc}</p>
                    <p class="price">${element.goodsPrice}<span>元起</span></p>
                </article>
            </section>
        </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(11)').html(htmlStar);
    },'json');
}

function getTwo8() {
    $.get('php/getGoodsList.php','typeId=017',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items2">
            <img src="./images/${element.goodsImg}" alt="">
            <section>
                <article>
                    <h3>${element.goodsName}</h3>
                    <p class="p1">${element.goodsDesc}</p>
                    <p class="price">${element.goodsPrice}<span>元起</span><del>${element.beiyong1}元</del></p>
                </article>
            </section>
        </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(12)').html(htmlStar);
    },'json');
}

function getTwo9() {
    $.get('php/getGoodsList.php','typeId=018',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items2">
            <img src="./images/${element.goodsImg}" alt="">
            <section>
                <article>
                    <h3>${element.goodsName}</h3>
                    <p class="p1">${element.goodsDesc}</p>
                    <p class="price">${element.goodsPrice}<span>元起</span><del>${element.beiyong1}元</del></p>
                </article>
            </section>
        </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(13)').html(htmlStar);
    },'json');
}

function getTwo10() {
    $.get('php/getGoodsList.php','typeId=010',function(datas){
        let htmlStar = '';
        datas.forEach(element => {
            htmlStar += `
            <div class="items1">
                <img src="./images/${element.goodsImg}" alt="">
                <section>
                    <article>
                        <h3>${element.goodsName}</h3>
                        <p class="p1">${element.goodsDesc}</p>
                        <p class="price">${element.goodsPrice}<span>元起</span></p>
                        <a href="#">暂时缺货</a>
                    </article>
                </section>
            </div>
            `;
        });
        $('.items-wrap>div:nth-of-type(15)').html(htmlStar);
    },'json');
}



$(function () {
    getStar();
    getTwo1();
    getTwo2();
    getTwo3();
    getTwo4();
    getTwo5();
    getTwo6();
    getTwo7();
    getTwo8();
    getTwo9();
    getTwo10();

})

