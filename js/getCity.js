function setcity() {
    require(['address'], function (city) {
        let shengStr = '';
        shengStr += ` <h6>选择省份/自治区</h6>`;
        for (let key in city) {
            shengStr += `
        <li class="setsheng">${key}</li>
        `;
        }
        $('.address').html(shengStr);

        $('.setsheng').click(function () {
            let cityStr = ``;
            cityStr += `<h6><span class="backsheng">${$(this).html()}</span>选择城市/地区</h6>`;
            let cithArr = city[$(this).html()];
            for (let key2 in cithArr) {
                cityStr += `
            <li class="setshi">${key2}</li>
            `;
            }
            $('.address').html(cityStr);

            $('.setshi').click(function () {
                let quStr = '';
                let retc = city[$('.backsheng').html()];
                let retThisSheng = $('.backsheng').html();
                quStr += `
            <h6><span class="backsheng">${retThisSheng}</span>
            <span class="backshi">${$(this).html()}</span>选择区县</h6>
            `;
                let qu = retc[$(this).html()];
                qu.forEach(element => {
                    quStr += `
                <li class="setqu">${element}</li>
                `;
                });

                $('.address').html(quStr);

                $('.setqu').click(function () {
                    let allStr = '';
                    allStr += `
                    <span class="sheng">${$('.backsheng').html()}</span>
                    <span class="city">${$('.backshi').html()}</span>
                    <span class="qu">${$(this).html()}</span>
                    <em class="update">修改</em>
                    <p>有现货</p>
                `;
                    $('.wz').find('article').html(allStr);
                    $('.address').css('display', 'none');

                    addEvent();
                })
            })
        })

    })
}

function addEvent() {
    $('.update').click(function () {
        $('.address').css('display', 'block');
        setcity();
    })
}
$(function () {
    addEvent();
})