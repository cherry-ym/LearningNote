//1.冒泡排序
function bubbleSort(arr){
    for(i = 0; i < arr.length - 1; i++){
        for(j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

//2.选择排序
function changeSort(arr){  //升序
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

//3.选择排序
function changeSortDesc(arr){  //降序
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

//4.n位验证码，每一个数字范围0~9
function numTestCode(n){
    var arr = [];
    for(var i = 0; i < n; i++){
        var num = parseInt(Math.random() * 10);
        arr.push(num);
    }
    return arr.join("");
}

//5.n位验证码，有字母有数字
function testCode(n){
    var arr = [];
    for(var i = 0; i < n; i++){
        var num = parseInt(Math.random() * 123);
        if(num >= 0 && num <= 9){
            arr.push(num);
        }else if(num >= 97 && num <= 122 || num >= 65 && num <= 90){
            arr.push(String.fromCharCode(num));
        }else{
            i--;
        }
    }
    return arr.join("");
}


function isABC(charStr){
    if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z"){
        return true;
    }else{
        return false;
    }
}

//判断单个字符是否是数字字母下划线
function isDEF(charStr){
    if(charStr >= "a" && charStr <= "z" || charStr >= "A" 
    && charStr <= "Z" || charStr >= "0" && charStr <= "9" || charStr == "_"){
        return true;
    }else{
        return false;
    }
}


//显示当前日期
function showTime(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    var week = d.getDay();
    week = numOfChinese(week);

    var hour = doubleNum(d.getHours());
    var min = doubleNum(d.getMinutes());
    var sec = doubleNum(d.getSeconds());

    var str = year + "年" + month + "月" + day + "日 星期" + week + " " + hour +":" + min + ":" + sec;
    return str;
}

function numOfChinese(num){
    var arr = ["日", "一", "二", "三", "四", "五", "六"];
    return arr[num];
}


function doubleNum(n){
    if(n < 10){
        return "0" + n;
    }else{
        return n;
    }
}

//跨浏览器兼容
function getStyle(node, cssStyle){
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}