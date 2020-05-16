let bannerleft = document.getElementsByClassName('banner-left');
let bannerdetailed = document.getElementsByClassName('bannerdetailed');
let b = bannerleft[0].firstElementChild.children;
for (let i = 0; i < b.length; i++) {
    b[i].onmouseover = function () {
        bannerdetailed[0].style.display = 'block';
    }
    b[i].onmouseout = function () {
        bannerdetailed[0].style.display = 'none';
    }
}

$(setInterval(() => {
    let d = new Date();
    let getH = d.getHours();
    if (getH % 2 != 0) {
        getH -= 1;
    }
    if (getH < 10) {
        getH = '0' + getH;
    }
    $('.shangou1>p:nth-of-type(1)').text(getH + ':00 场');
}, 1000));


let sgcSe = document.getElementsByClassName('shangou-content')[0].children[1].firstElementChild;
function sg() {
    let left = 0;
    let mytimer = null;

    mytimer = setInterval(() => {
        left -= 976;
        if (left < -976) {
            left = 0;
        }
        $(sgcSe).animate({
            'left': left + 'px'
        }, 1000);
    }, 3000);
}
sg();



function getNextTime() {
    let nextTime = new Date();
    let nextH = nextTime.getHours();
    if (nextH % 2 != 0) {
        nextH -= 1;
    }
    nextTime.setHours(nextH + 2);
    nextTime.setMinutes(0);
    nextTime.setSeconds(0);

    return nextTime;
}

function b0(str){
    if(str<10){
        str = '0'+str;
    }
    return str;
}

function setTime() {
    let x = getNextTime();
    setInterval(() => {
        let thisTime = new Date();
        let hm = x.getTime() - thisTime.getTime();
        
        //计算相差小时数

        let oH = b0(parseInt(hm / (1000*60*60)));

        //计算相差分钟数
        let oMo = hm % (1000*60*60);
        let oM  = b0(parseInt(oMo / (60*1000)));

        //计算相差秒数
        let oSo = hm % (1000*60);
        let oS = b0(parseInt(oSo / 1000));

        $('.shangou1>b>em:eq(0)').text(oH);
        $('.shangou1>b>em:eq(1)').text(oM);
        $('.shangou1>b>em:eq(2)').text(oS);
    }, 1000);

}
setTime();


function getPhone(){
    $.get('./php/getGoodsList.php',{
        typeId:'001'
    },(phoneData) => {
        let phoneStr = '';
        phoneData = JSON.parse(phoneData);
        phoneData.forEach(element => {
            phoneStr += `
                <div class="phone-content">
                <img src="./images/${element.goodsImg}" alt="" title="${element.goodsId}">
                <p>${element.goodsName}</p>
                <span>${element.goodsDesc}</span>
                <b>${element.goodsPrice}元起</b>
                </div>
            `;
        });
        $('.phone-right').html(phoneStr);
        $('#phone>.phone-content').click(function(){
            location.href = './shop-detailed.html?goodsId='+$(this).find('img').attr('title');
        })
    });
}

function getHousehold(){
    let householdStr = '';
    $.get('./php/getGoodsList.php',{
        typeId:'002'
    },(householdData)=>{
        householdStr += `
            <div class="household-content">
            <img src="./images/b56fd90a60e3d9e5d87dae9fbd427ea8.webp" alt="">
            </div>
        `;
        householdData.forEach(function(data){
            householdStr += `
                <div class="phone-content">
                <img src="./images/${data.goodsImg}" alt="" title="${data.goodsId}">
                <p>${data.goodsName}</p>
                <span>${data.goodsDesc}</span>
                <b>${data.goodsPrice}元起</b>
                </div>
            `;
        })

        householdStr += `
                <div class="household-content">
                <img src="./images/b67de5a8ce9025fb5d8bac66e019d1c3.webp" alt="">
                </div>
                <div class="phone-content">
                    <img src="./images/ec20453216dcd42f982cffe5fdbc3115.webp" alt="">
                    <p>米家互联网洗烘一体机 Pro 10KG</p>
                    <span>智能洗烘，省心省力</span>
                    <b>2999元</b>
                </div>
                <div class="phone-content">
                    <img src="./images/b8c63a2024528fe5410ebe669b7d2407.webp" alt="">
                    <p>Redmi全自动波轮洗衣机1A 8KG</p>
                    <span>一键操作，父母都爱用</span>
                    <b>749元<del>899元</del></b>
                </div>
                <div class="phone-content">
                    <img src="./images/cd2aa2dcad6440b469c22e27db9b6236.webp" alt="">
                    <p>15.6"四核i7 16G 独显 512G</p>
                    <span>全面均衡的国民轻薄本</span>
                    <b>4699元<del>4899元</del></b>
                </div>
                <div class="household-content1">
                    <div class="household-content-top">
                        <div class="household-content-top-p">
                            <p>Air 13.3" 2019款</p>
                            <span>3999元起</span>
                        </div>
                        <img src="./images/74e573c4c0d89048392d14831cc507d5.webp" alt="">
                    </div>
                    <div class="household-content-top">
                        <div class="household-content-top-p">
                            <p>浏览更多</p>
                            <em>热门</em>
                        </div>
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                </div>
        `;
        $('.household-wrap>.household-bottom').html(householdStr);
        $('.household-wrap>.household-bottom>.phone-content').click(function(){
            location.href = './shop-detailed.html?goodsId=' + $(this).find('img').attr('title');
        })
    },'json')
}


$(function(){
    getPhone();
    getHousehold();
})







