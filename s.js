// JavaScript source code
const input = document.querySelector(".box_input"),
input2 = document.querySelector(".box_input2"),
text1 = document.querySelector(".text1");
text2 = document.querySelector(".text2");
var arr = ['K', 'M', 'B', 'T', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var c = 0;
function handleSubmit(event) {
    c = 0;
    event.preventDefault();
    var t1 = acc(text1.value);
    var t2 = acc(text2.value);
    var temp = re(t1, t2);
    var time = slice(temp);
    let today = new Date();
    today.setHours(today.getHours() + time[1]);
    today.setDate(today.getDate() + time[0]);
    today.setMinutes(today.getMinutes() + time[2]);
    today.setSeconds(today.getSeconds() + time[3]);
    
    alert(time[0] + " day " + time[1] + " hour " + time[2] + " minute " + time[3] + " second \n예상 완료시간은"+today.toLocaleString()+"입니다.");
}

function handleSubmit2(event) {
    c = 1;
    event.preventDefault();
    var t1 = acc(text1.value);
    var t2 = acc(text2.value);
    var temp = re(t1, t2);
    var time = slice(temp);
    let today = new Date();
    today.setHours(today.getHours() + time[1]);
    today.setDate(today.getDate() + time[0]);
    today.setMinutes(today.getMinutes() + time[2]);
    today.setSeconds(today.getSeconds() + time[3]);

    alert(time[0] + " day " + time[1] + " hour " + time[2] + " minute " + time[3] + " second \n예상 완료시간은" + today.toLocaleString() + "입니다.");
}
function slice(time) {
    var day, hour, min, sec;
    day = parseInt(time / 86400)
    time %= 86400;
    hour = parseInt(time / 3600);
    min = parseInt(time % 3600 / 60);
    sec = parseInt(time %3600 % 60);

    return [day, hour, min, sec];
}

function re(arr1, arr2) {
    var point = arr2[1] - arr1[1];
    var now = arr1[0], result = arr2[0], value=0;
    var count = 0, time =0;
    if (point > 0) {
        point -= 1;
        result *= 1000;
    }
  
    while (true) {
        if (c == 1) {
            value += now * 60
        }

        for (var i = 1; i <= 240; i++) {
            if (i%120 == 0) {
                value += now * 60;
                if (value >= 1000 && point != 0) {
                    value /= 1000;
                    point -= 1;
                    now /= 1000;
                }
                if (value >= result && point <= 0) {
                    count++;
                    break;
                }
            }
            value += now;
            time += 5;
            if (value >= 1000&&point!=0) {
                value /= 1000;
                point -= 1;
                now /= 1000;
            }
            if (value >= result && point <= 0) {
                count++;
                break;
            }
        }if (count != 0) { break;}
    }
    return time;
}


function acc(text) {
    var count = 0, num = '', tt;
    var ch = '', point=0;

    for (var i = 0; i < text.length; i++) {
        if ((text[i] >= 'a' && text[i] <= 'z') || text[i] == 'K' || text[i] == 'B' || text[i] == 'T' || text[i] == 'M') {
            if (count == 1) { break;}
            count = 1;

            for (var j = 0; j < i; j++) {
                num += text[j];
            }
            num = new Number(parseFloat(num));

            for (j = i; j < text.length; j++) {
                ch += text[j];
            }

            if (ch.length == 1) {
        
                for (var key in arr) {
                    tt = arr[key];
                    point += 1;
                    if (tt == ch[0]) {
                        break;
                    }
                }
            }
            else if (ch.length >= 2) {
                for (var i = 0; i < ch.length; i++) {
                    for (var key in arr) {
                        tt = arr[key];
                        point += 1;
                        if (tt == ch[i]) {
                            break;
                        }
                    }
                }
            }
        }
    }
    if (count == 0) {
        num = new Number(parseFloat(text));
    }
    
    return [num, point];
}

function init() {
    input.addEventListener("submit", handleSubmit);
    input2.addEventListener("submit", handleSubmit2);
}


init();