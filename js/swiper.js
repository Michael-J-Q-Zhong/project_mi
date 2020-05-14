// let mytimer = null;
// let defaultImg = 0;
// function autoplay($box,$dou){
//     if(mytimer != null){
//         return;
//     }
//     mytimer = setInterval(()=>{
//         goimg(defaultImg + 1,$box,$dou);
//     },2500);
// }

// function goimg(num,$box,$dou){
//     let backNum = defaultImg;
//     defaultImg = num;

//     if(defaultImg == backNum){
//         return;
//     }

//     if(defaultImg > 4){
//         defaultImg = 0;
//     }else if(defaultImg < 0){
//         defaultImg = 4;
//     }

//     $($box.children[defaultImg]).fadeIn(1000);
//     $($box.children[backNum]).fadeOut(1000);

//     $($dou.children[defaultImg]).css({
//         'background-color':'white'
//     });
//     $($dou.children[backNum]).css({
//         'background-color':'black'
//     });
// }

// function addEvent($box,$dou,$span){
//     let $fs = $span[0];
//     let $ss = $span[1];
//     $($dou).find('li').each(function(){
//         $(this).click(()=>{
//             clearInterval(mytimer);
//             mytimer = null;
//             goimg($(this).index(),$box,$dou);
//         })
//     })

//     $($box).mouseover(function(){
//         clearInterval(mytimer);
//         mytimer = null;
//     })
//     $($box).mouseout(function(){
//         autoplay($box,$dou);
//     })

//     $($fs).click(function(){
//         clearInterval(mytimer);
//         mytimer = null;
//         goimg(defaultImg - 1,$box,$dou);
//     })
//     $($ss).click(function(){
//         clearInterval(mytimer);
//         mytimer = null;
//         goimg(defaultImg + 1,$box,$dou);
//     })
//     $($fs).mouseover(function(){
//         clearInterval(mytimer);
//         mytimer = null;
//     })
//     $($ss).mouseover(function(){
//         clearInterval(mytimer);
//         mytimer = null;
//     })
//     $($fs).mouseout(function(){
//         autoplay($box,$dou);
//     })
//     $($ss).mouseout(function(){
//         autoplay($box,$dou);
//     })

//     $(window).blur(function(){
//         clearInterval(mytimer);
//         mytimer = null;
//     })

//     $(window).focus(function(){
//         autoplay($box,$dou);
//     })
// }

class Swiper {
    constructor(obj) {
        var defaultObj = {
            $box: document.getElementsByClassName('swiperbox')[0],
            $li: document.getElementsByClassName('dou')[0],
            $leftspan: document.getElementsByClassName('swiper')[0],
            $rightspan: document.getElementsByClassName('swiper')[1],
            $flag: 'index'
        }

        this.mytimer = null;
        this.defaultImg = 0;
        for (let key in defaultObj) {
            this[key] = obj[key] == undefined ? defaultObj[key] : obj[key];
        }


        this.autoplay();
        this.addEvent();
    }

    autoplay() {
        if (this.mytimer != null) {
            return;
        }

        this.mytimer = setInterval(() => {
            this.goimg(this.defaultImg + 1);
        }, 2500);
    }

    goimg(num) {
        let backimg = this.defaultImg;
        this.defaultImg = num;

        if (backimg == this.defaultImg) {
            return;
        }

        if (this.defaultImg > 4) {
            this.defaultImg = 0;
        } else if (this.defaultImg < 0) {
            this.defaultImg = 4;
        }

        $(this.$box.children[this.defaultImg]).fadeIn(1000);

        $(this.$box.children[backimg]).fadeOut(1000);

        if (this.$flag == 'index') {
            $(this.$li.children[this.defaultImg]).css('backgroundColor', 'white');
            $(this.$li.children[backimg]).css('backgroundColor', 'black');
        }else if(this.$flag == 'shop-detailed'){
            $(this.$li.children[this.defaultImg]).css('backgroundColor', '#666');
            $(this.$li.children[backimg]).css('backgroundColor', '#999');
        }

    }

    stopplay() {
        clearInterval(this.mytimer);
        this.mytimer = null;
    }


    addEvent() {
        $(this.$box).mouseover(() => {
            this.stopplay();
        }).mouseout(() => {
            this.autoplay();
        });

        $(this.$li).find('li').each(() => {
            $(this.$li).find('li').click((event) => {
                let e = event || window.event;
                this.goimg($(e.target).index());
            })
        })

        $(this.$li).mouseover(() => {
            this.stopplay();
        }).mouseout(() => {
            this.autoplay();
        })

        $(this.$leftspan).click(() => {
            this.goimg(this.defaultImg - 1);
        }).mouseover(() => {
            this.stopplay();
        }).mouseout(() => {
            this.autoplay();
        })

        $(this.$rightspan).click(() => {
            this.goimg(this.defaultImg + 1);
        }).mouseover(() => {
            this.stopplay();
        }).mouseout(() => {
            this.autoplay();
        })
    }
}