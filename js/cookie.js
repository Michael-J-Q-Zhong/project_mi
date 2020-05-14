function addcookie(key,val,time){  //增加一个cookie
    let d = new Date();
    d.setDate(d.getDate()+time);
    document.cookie = `${key}=${escape(val)};expires=${d.toGMTString()}`;
}


function getCookie(key){   //查找某个cookie
    let str = unescape(document.cookie);
    let arr = str.split('; ');

    for(let i=0; i<arr.length; i++){
        if(arr[i].indexOf(key+'=') == 0){
            return arr[i].substring(key.length+1);
        }
    }
    return null;
}


function removeCookie(key){  //删除一个cookie
    addcookie(key,'byebye',-1);
}

function undatecookie(key,val,count){
    addcookie(key,val,count);
}