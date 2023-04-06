window.onload = function () {
    var db = document.querySelector('.z09');
    var bg = document.querySelector('.bg');
    var dbt = true, dbt2 = true, dbt3 = true, dbt4 = true;
    var db2 = document.querySelector('.z24');
    var db3 = document.querySelector('.z15');
    var db4 = document.querySelector('.z12');
    var gz = document.querySelector('.gz');
    var gz1 = document.querySelector('.gz1');
    var one = false, two = false, three = false, four = false;
    var arr = document.querySelectorAll('.arr');
    //图片
    var z12img = document.querySelector('.z12img');
    var z16img = document.querySelector('.z16img');
    var z20img = document.querySelector('.z20img');
    var z26img = document.querySelector('.z26img');
    var z35img = document.querySelector('.z35img');
    //星球
    var sg = document.querySelectorAll('.sg');
    var xqq1 = document.querySelector('.xqq1');
    var xqq2 = document.querySelector('.xqq2');
    var xqq3 = document.querySelector('.xqq3');
    var xq1 = document.querySelector('.xq1');
    var xq2 = document.querySelector('.xq2');
    var xq3 = document.querySelector('.xq3');
    //按钮
    var btnn = document.querySelector('.btnn');
    //光圈
    var round = document.querySelectorAll('.round');
    //阶梯
    var zs = document.querySelectorAll('.zs');
    //起始四柱子
    var z177 = document.querySelector('.z17-1');
    var z28 = document.querySelector('.z28');
    var z25 = document.querySelector('.z25');
    var z33 = document.querySelector('.z33');
    //开屏字
    var fontstart = document.querySelector('.fontstart');
    var fonttop = document.querySelector('.fonttop');
    var jiantou = document.querySelector('.jiantou');
    //开屏第一次切换字体
    var fontend = document.querySelector('.fontend');
    //第一个柱子字
    var fontone = document.querySelector('.fontone');
    //第二个柱子字
    var fonttwo = document.querySelector('.fonttwo');
    //第三个柱子字
    var fontthree = document.querySelector('.fontthree');
    var fontfour = document.querySelector('.fontfour');
    //音频
    var music1 = document.querySelector('.music1');
    var music2 = document.querySelector('.music2');
    var music3 = document.querySelector('.music3');
    var music4 = document.querySelector('.music4');
    //开启开屏音乐
    music1.play();
    //第一段动画数据
    var zg = document.querySelectorAll('.zg')
    var jone = [zg[0], zg[1], zg[2], zg[3], zg[4], zg[5], zg[6]]
    //第二段动画数据
    var zo = document.querySelectorAll('.zo')
    var jone2 = [zo[0], zo[1], zo[2], zo[3], zo[4]]
    //第三段动画数据
    var a3 = document.querySelectorAll('.a3');
    var jone3 = [a3[1], a3[2], a3[3], a3[4], a3[0]];
    //第四段动画数据
    var a4 = document.querySelectorAll('.a4')
    var jone4 = [a4[0], a4[1], a4[2], a4[3]]
    //结束数据
    var endxq = [xqq1, xqq2, xqq3, fontfour, btnn]
    //结束隐藏
    var enh = [z35img, fontthree]
    //按钮数据
    var ddbb = [{dbt:dbt,dbt2:dbt2,dbt3:dbt3,dbt4:dbt4},{one:one,two:two,three:three,four:four}]
    var zs = [{ z20: zs[2], z21: zs[3] }, { z26: zs[4], z27: zs[5] }, { z16: zs[0], z17: zs[1] }]
    //隐藏文字手机
    var fonthide = [{ fontone: fontone, fonttwo: fonttwo, fontthree: fontthree, z35img: z35img }]
    //动画添加数据
    var item = [{ class: gz1, yang: 'src', butt: './images/gz' + 31 + '.png' },
    { class: bg, yang: 'style', butt: 'animation: go 4s linear forwards;' },
    { class: z12img, yang: 'style', butt: 'animation: opendoor 5s forwards;' },
    { class: gz1, yang: 'style', butt: 'animation: opendoors 5s forwards;' },]
    //开始四柱子
    var fours = [z177,z28,z25]
    //动画setArribute
    function donghua(arr) {
        for (var i in arr) {
            arr[i].class.setAttribute(arr[i].yang, arr[i].butt)
        }
    }
    //开机消失 箭头和文字
    function note() {
        fontstart.style.display = "none";
        jiantou.style.display = "none";
    }
    //按钮的开关
    function clse(a) {
        if (a == 1) {
            return
        } else if (a == 2) {
            dbt = true;
            round[2].style.display = "block"
        } else if (a == 3) {
            dbt = true;
            dbt2 = true;
            round[3].style.display = "block"
        } else {
            dbt = false;
            dbt2 = false;
            dbt3 = false;
        }
    }
    //出现
    function taijie(arr) {
        for (var i in arr) {
            arr[i].style.display = "block";
        }
    }
    //隐藏
    function taihide(arr) {
        for (var i in arr) {
            arr[i].style.display = "none";
        }
    }
    //来回点击出现的字
    function font(a) {
        if (a == 1) {
            fontone.style.display = "block";
            fonttwo.style.display = "none";
            fontthree.style.display = "none";
        } else if (a == 2) {
            fontone.style.display = "none";
            fonttwo.style.display = "block";
            fontthree.style.display = "none";
        } else {
            fontone.style.display = "none";
            fonttwo.style.display = "none";
            fontthree.style.display = "block";
        }
    }
    //光圈内转向
    function g1() {
        if (i > 5 && i < 10) i = 1
        if (i > 15 && i < 20) i = 11
        if (i > 25 && i < 30) i = 21
        if (i > 35) i = 31
        gz1.setAttribute('src', './images/gz' + i + '.png')
        i++;
    }
    //动画全部下降
    function downs() {
        for (let i = 0; i < arr.length; i++) {
            arr[i].setAttribute('style', 'animation: alldown 2s forwards;')
        }
    }
    //每段路第一段封装
    function mei(a,b){
        round[a].style.display = "none"
        gz.setAttribute('class', b)
        music4.play();
    }
    //点击光圈后第一段
    function lucheng1(a) {
        if (a == 1) {
            dbt = false;
            mei(0,'gezi1')
        } else if (a == 2) {
            dbt = false;
            dbt2 = false;
            mei(1,'gezi2')
        } else if (a == 3) {
            dbt = false;
            dbt2 = false;
            dbt3 = false;
            mei(2,'gezi3')
        } else {
            dbt = false;
            dbt2 = false;
            dbt3 = false;
            dbt4 = false;
            mei(3,'gezi4')
        }
    }
    function luchengs(a,b,c,d,e,f) {
        a=false
        b=false
        c=false
        d=false
        mei(e,f);
        
        // if (a == 1) {
        //     dbt = false;
        //     mei(0,'gezi1')
        // } else if (a == 2) {
        //     dbt = false;
        //     dbt2 = false;
        //     mei(1,'gezi2')
        // } else if (a == 3) {
        //     dbt = false;
        //     dbt2 = false;
        //     dbt3 = false;
        //     mei(2,'gezi3')
        // } else {
        //     dbt = false;
        //     dbt2 = false;
        //     dbt3 = false;
        //     dbt4 = false;
        //     mei(3,'gezi4')
        // }
    }
    //路程二或三
    function lucheng(a, b, t) {
        setTimeout(() => {
            i = a;
            let num = 0;
            clearInterval(times);
            times = setInterval(() => {
                g1()
                num++;
                if (num == b) clearInterval(times);
            }, 100)
        }, t);
    }
    //音频播放暂停
    function music() {
        music4.pause();
        music2.play();
    }
    //动画结束一
    function dong(a,b,c,d,e,f,g){
        clearInterval(times)
                a = true;
                b = true;
            gz1.setAttribute('src', './images/gz' + c + '.png')
            music2.playbackRate = 0.7;
            music()
            taijie(zs[d])
            setTimeout(() => {
                fontend.style.display = "none";
                e.style.animation = "tbx 1s linear infinite"
                taijie(f)
                font(g);
            }, 2000);
    }
    //动画结束判断
    function ifc(c){
        if (c == 1) {
            dong(ddbb[0].dbt,ddbb[0].one,11,0,z20img,jone2,1)
        } else if (c == 2) {
            dong(ddbb[0].dbt2,ddbb[0].two,11,1,z26img,jone3,2)
        } else if (c == 3) {
            dong(ddbb[0].dbt3,ddbb[0].three,21,2,z16img,jone4,3)
        } else {
            clearInterval(times);
            music4.pause();
            donghua(item);
            taihide(fonthide[0])
            downs();
            music3.play();
        }
    }
    //动画路程结束执行 (一段动画的最后一段)
    function endl(a, b, c) {
        i = a;
        let num = 0;
        clearInterval(times);
        times = setInterval(() => {
            g1()
            num++;
            if (num == b) {
                ifc(c);
            }
        }, 100)
        ens(c)
    }
    function ens(a) {
        if (a == 1) {
            setTimeout(() => {
                music2.pause();
            }, 6200);
            setTimeout(() => {
                round[1].style.display = "block"
            }, 7000);
        }
    }
    //开机四柱子
    function fades() {
        taijie(fours)
        z33.removeAttribute("style", "display:none")
    }
    //向上滑动
    var startY, endY;
    bg.addEventListener('touchstart', function (e) {
        startY = e.touches[0].pageY;
    }, false);
    var uptop;
    //监听
    bg.addEventListener('touchend', tops, false);
    //滑动
    function tops(e) {
        endY = e.changedTouches[0].pageY
        uptop = startY - endY;
        if (uptop > 0) {
            bg.removeEventListener("touchend", tops);//关闭监听
            //关闭开屏音乐
            music1.pause();
            // 开机动画
            //字体
            note()
            fades()
            setTimeout(() => {
                taijie(jone)
                music2.play();
            }, 2000);
            setTimeout(() => {
                //字体
                fonttop.style.display = "none";
                fontend.style.display = "block";
                round[0].style.display = "block"
                music2.pause()
            }, 6000);
        }
    }
    //光圈1
    var i;
    var times;
    round[0].onclick = function () {
        //第一段 点击光圈后第一段
        lucheng1(1);
        // luchengs(ddbb[0].dbt,'','','',0,'gezi1')
        i = 1
        //第一段路
        times = setInterval(() => {
            g1();
        }, 100)
        //第二段路
        lucheng(11, 14, 2000);
        //第三段路
        lucheng(1, 31, 3310);
        //第四段路
        setTimeout(() => {
            endl(11, 19, 1)
        }, 6370);
    }
    //光圈2
    round[1].onclick = function () {
        lucheng1(2);
        i = 1
        //转向1
        times = setInterval(() => {
            g1();
        }, 100);
        //转向2
        setTimeout(() => {
            endl(11, 40, 2)
        }, 600);
        setTimeout(() => {
            music2.pause();
            clse(2);
        }, 10560);
    }
    //光圈3
    round[2].onclick = function () {
        lucheng1(3);
        i = 21
        //第一段
        times = setInterval(() => {
            g1();
        }, 100);
        //第二段
        lucheng(31, 13, 1423);
        //第三段
        setTimeout(() => {
            endl(21, 23, 3)
        }, 2742);
        //音乐关闭
        setTimeout(() => {
            music2.pause();
        }, 9500);
        //延迟点击让动画走完
        setTimeout(() => {
            clse(3);
        }, 10950);
    }
    //光圈4
    round[3].onclick = function () {
        lucheng1(4);
        i = 31
        times = setInterval(() => {
            g1();
        }, 100);
        lucheng(31, 10, 1359);
        setTimeout(() => {
            endl(1, 12, 4)
            setTimeout(() => {
                xq1.setAttribute('style','animation: tbs 3s linear infinite')
                xq2.setAttribute('style','animation: tbs 3s linear infinite')
                xq3.setAttribute('style','animation: tbs 3s linear infinite')
                //动画
                for (let i = 0; i < sg.length; i++) {
                    sg[i].setAttribute('style','animation: tbx 3s linear infinite')
                }
            }, 5000);
        }, 2267);
      
        setTimeout(() => {
            clse(4);
            //星球
            taijie(endxq);
            taihide(enh)
        }, 6350);
      
    }

    //第一段按钮
    db.onclick = function () {
        //按钮快关判断
        if (!dbt) {
            return
        } else {
            //鸽子是否走过判断
            if (one) {
                gz.setAttribute('class', 'gezi2s');
                font(1);
                return;
            } 
            // else {
            // }
        }
    }
    //第二段
    db2.onclick = function () {
        if (!dbt2) {
            return
        } else {
            if (two) {
                gz.setAttribute('class', 'gezi3s');
                font(2);
                return;
            }
            //  else {
            // }
        }
        // dbt(2);
    }
    //第三段
    db3.onclick = function () {
        if (!dbt3) {
            return
        } else {
            if (three) {
                gz.setAttribute('class', 'gezi4s');
                font(3);
                return;
            } 
            // else {

            // }
        }
    }
    // 第四段
    db4.onclick = function () {
        if (!dbt4) {
            return
        } 
        // else {
        //     //开关 判断
        //     if (four) {
        //     } else {
        //     }
        // }
    }

}