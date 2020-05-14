var defen = document.getElementById('defen');
var imgBox = document.getElementById('imgBox');
var imgSrcArr = ['caoping', 'dishu', 'emo'];
var df = 0;
var sd;   //定义定时器的时间


//定义随机数，让imgBox的图片随机进行变换
function running(speed) {
    setInterval(() => {
        var num1 = parseInt(Math.random() * imgSrcArr.length);
        var num2 = parseInt(Math.random() * imgBox.children.length);
        imgBox.children[num2].src = './img/' + imgSrcArr[num1] + '.jpg';
    }, speed);
    console.log(speed);
}


//获得当前网页地址，根据网页地址判断当前关卡
var winHref = this.location.href;
winHref = winHref.charAt(winHref.length - 6);
console.log(winHref);
if (winHref == '1') {
    sd = 1000;
    running(sd);
} else if (winHref == '2') {
    sd = 500;
    running(sd);
    imgBox.style.width = '750px';
} else if (winHref == '3') {
    sd = 200;
    running(sd);
    imgBox.style.width = '1040px';
}

for (var i = 0; i < imgBox.children.length; i++) {  //循环imgBox的图片
    imgBox.children[i].onclick = function () {  //让每一个图片都加上点击事件
        var src = this.src;    //获得当前图片src
        src = src.charAt(src.length - 5);
        // console.log(typeof(src),src); 
        if (src == 'u') {     //判断打中地鼠，分数+10，速度-10，显示实时分数，地鼠变草坪
            df += 10;
            sd -= 10;
            defen.innerHTML = df;
            this.src = './img/caoping.jpg';
            if (df >= 100 && winHref == '1') {   //判断得分及关卡数是否满足下一关条件，满足则进入
                location.href = 'game2.html';
            } else if (df >= 200 && winHref == '2') {
                location.href = 'game3.html';
            } else if (df >= 400 && winHref == '3') {
                alert('恭喜，你通关了');
                location.href = 'index.html';
            }
        } else if (src == 'g') {    //判断打中草坪，分数-10，速度+10，显示实时分数
            df -= 10;
            sd += 10;
            defen.innerHTML = df;
        } else if (src == 'o') {   //判断打中恶魔，游戏失败，结束游戏
            location.href = '游戏结束.html';
        }

    }
}


