function isUn(oDom){
    if(oDom.value == ''){
        oDom.nextElementSibling.innerHTML = '请输入' +oDom.previousElementSibling.innerHTML;
        oDom.nextElementSibling.style.color = 'red';
        return false;
    }else{
        return true;
    }
}