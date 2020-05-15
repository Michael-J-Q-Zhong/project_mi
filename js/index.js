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
        $('.phone-content').click(function(){
            location.href = './shop-detailed.html?goodsId='+$(this).find('img').attr('title');
        })
    });
}

$(function(){
    getPhone();
})







