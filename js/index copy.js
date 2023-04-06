window.onload = function(){

    var db = document.querySelector('.z09');
    var bg = document.querySelector('.bg');
    var dbt = true;
    var db2 = document.querySelector('.z24');
    var round2 = document.querySelector('.round2');
    var dbt2 = true;
    var db3 = document.querySelector('.z15');
    var dbt3 = true;
    var db4 = document.querySelector('.z12');
    var dbt4 = true;
    var gz = document.querySelector('.gz');
    var gz1 = document.querySelector('.gz1');
    var one = false;
    var two = false;
    var three = false;
    var four = false;
    var arr = document.querySelectorAll('.arr');
    //图片
    var z12img = document.querySelector('.z12img');
    var z16img = document.querySelector('.z16img');
    var z20img = document.querySelector('.z20img');
    var z26img = document.querySelector('.z26img');
    var z35img = document.querySelector('.z35img');

    var xq = document.querySelector('.xq');
    var xqq1 = document.querySelector('.xqq1');
    var xqq2 = document.querySelector('.xqq2');
    var xqq3 = document.querySelector('.xqq3');
    var xq1 = document.querySelector('.xq1');
    var xq2 = document.querySelector('.xq2');
    var xq3 = document.querySelector('.xq3');
    //星球添加动画
    var sg = document.querySelectorAll('.sg');
    //按钮
    var btnn = document.querySelector('.btnn');
    //光圈
    var round1 = document.querySelector('.round1');
    var round2 = document.querySelector('.round2');
    var round3 = document.querySelector('.round3');
    var round4 = document.querySelector('.round4');
    //阶梯
    var z02 = document.querySelector('.z02');
    var z03 = document.querySelector('.z03');
    var z04 = document.querySelector('.z04');
    var z06 = document.querySelector('.z06');
    var z07 = document.querySelector('.z07');
    var z08 = document.querySelector('.z08');
    var z20 = document.querySelector('.z20');
    var z21 = document.querySelector('.z21');
    var z14 = document.querySelector('.z14');
    var z19 = document.querySelector('.z19');
    var z24 = document.querySelector('.z24');
    var z23 = document.querySelector('.z23');
    var z22 = document.querySelector('.z22');
    var z26 = document.querySelector('.z26');
    var z27 = document.querySelector('.z27');

    var z29 = document.querySelector('.z29');
    var z30 = document.querySelector('.z30');
    var z31 = document.querySelector('.z31');
    var z32 = document.querySelector('.z32');
    var z35 = document.querySelector('.z35');

    var z16 = document.querySelector('.z16');
    var z17 = document.querySelector('.z17');
    var z10 = document.querySelector('.z10');
    var z11 = document.querySelector('.z11');
    var z12 = document.querySelector('.z12');
    var z13 = document.querySelector('.z13');
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
    // var z02 = document.querySelector('.z02');
    // var z02 = document.querySelector('.z02');
    //音频
    var music1 = document.querySelector('.music1');
    var music2 = document.querySelector('.music2');
    var music3 = document.querySelector('.music3');
    var music4 = document.querySelector('.music4');
        //开启开屏音乐
        music1.play();
        //判断方向
        function pdn(i,num){
            if (i > 5 && i < 10) i = 1
            if (i > 15 && i < 20) i = 11
            if (i > 25 && i < 30) i = 21
            if (i > 35) i = 31
            gz1.setAttribute('src', './images/gz' + i + '.png')
            i++;
            num++;
        }
        function pd(i){
            if (i > 5 && i < 10) i = 1
            if (i > 15 && i < 20) i = 11
            if (i > 25 && i < 30) i = 21
            if (i > 35) i = 31
            gz1.setAttribute('src', './images/gz' + i + '.png')
            i++;
        }
        //延迟定时器
        function stm(a,b) {
            setTimeout(() => {
                a
            }, b);
        }
        //来回点击出现的字
        function font(a){
            if (a==1) {
                 fontone.style.display = "block";
                fonttwo.style.display = "none";
                fontthree.style.display = "none";
            }else if(a == 2){
                fontone.style.display = "none";
                fonttwo.style.display = "block";
                fontthree.style.display = "none";
            }else{
                fontone.style.display = "none";
                fonttwo.style.display = "none";
                fontthree.style.display = "block";
            }
               
        }
        //光圈内转向
        function g1(a){
            let i = a
            //第一段路转向
            var times = setInterval(() => {
                if (i > 5 && i < 10) i = 1
                    if (i > 15 && i < 20) i = 11
                    if (i > 25 && i < 30) i = 21
                    if (i > 35) i = 31
                    gz1.setAttribute('src', './images/gz' + i + '.png')
                    i++;
            }, 100)
        }

        //全部下降
        function downs(){
            for (let i = 0; i < arr.length; i++) {
               arr[i].setAttribute('style','animation: alldown 2s forwards;')
               console.log(arr[i]);   
            }
        }

        //向上滑动
        var startY,endY;
        bg.addEventListener('touchstart', function (e) {
         startY = e.touches[0].pageY;
        },false) ;
        var uptop;
        //监听
        bg.addEventListener('touchend', tops,false);
        function tops(e) {
        endY = e.changedTouches[0].pageY
        uptop = startY - endY;
        if (uptop > 0) {
            bg.removeEventListener("touchend", tops);
            //关闭开屏音乐
            music1.pause();
            // 开机动画
            //字体
            fontstart.style.display = "none";
            //箭头
            jiantou.style.display = "none";
            //台阶
            z177.style.display = "block";
            z28.style.display = "block";
            z25.style.display = "block";
            z33.removeAttribute("style", "display:none")
            setTimeout(() => {
                z02.style.display = "block";
                z03.style.display = "block";
                z04.style.display = "block";
                z06.style.display = "block";
                z07.style.display = "block";
                z08.style.display = "block";
                db.style.display = "block";
                music2.play();    
            }, 2000);
            setTimeout(() => {
                //字体
                fonttop.style.display = "none";
                fontend.style.display = "block";
                round1.style.display = "block"
                music2.pause()
            }, 6000);
        }
    }
    //光圈1
    
    round1.onclick = function () {
        round1.style.display = "none"
        //设置按钮为false
        dbt = false;
        gz.setAttribute('class', 'gezi1')
        //走路音频开启
        music4.play();
        let i = 1
        //第一段路转向
        var times = setInterval(() => {
            if (i > 5 && i < 10) i = 1
                if (i > 15 && i < 20) i = 11
                if (i > 25 && i < 30) i = 21
                if (i > 35) i = 31
                gz1.setAttribute('src', './images/gz' + i + '.png')
                i++;
        }, 100)
        // g1(1);
        setTimeout(() => {
            let i = 11;
            let num = 0;
            clearInterval(times);
            var timeb = setInterval(() => {
                if (i > 5 && i < 10) i = 1
                if (i > 15 && i < 20) i = 11
                if (i > 25 && i < 30) i = 21
                if (i > 35) i = 31
                gz1.setAttribute('src', './images/gz' + i + '.png')
                i++;
                num++;
                if (num == 14) clearInterval(timeb);
            }, 100)
        }, 2000);
        setTimeout(() => {
            let i = 1;
            let num = 0;
            var timec = setInterval(() => {
                if (i > 5 && i < 10) i = 1
                if (i > 15 && i < 20) i = 11
                if (i > 25 && i < 30) i = 21
                if (i > 35) i = 31
                gz1.setAttribute('src', './images/gz' + i + '.png')
                i++;
                num++;
                if (num == 31) clearInterval(timec);
            }, 100)
        }, 3310);
        setTimeout(() => {
            let i = 11;
            let num = 0;
            var timed = setInterval(() => {
                if (i > 5 && i < 10) i = 1
                if (i > 15 && i < 20) i = 11
                if (i > 25 && i < 30) i = 21
                if (i > 35) i = 31
                gz1.setAttribute('src', './images/gz' + i + '.png')
                i++;
                num++;
                if (num == 19) {
                    clearInterval(timed)
                    one = true;
                    //设置按钮为true
                    dbt = true;
                    //走路音频停止
                    music4.pause();
                    gz1.setAttribute('src', './images/gz' + 11 + '.png')
                    music2.playbackRate = 0.7;
                    music2.play();
                    z20.style.display = "block";
                    z21.style.display = "block";
                    setTimeout(() => {
                        fontend.style.display = "none";
                        z20img.style.animation = "tbx 1s linear infinite"
                        z14.style.display = "block";
                        z19.style.display = "block";
                        z22.style.display = "block";
                        z23.style.display = "block";
                        z24.style.display = "block";
                        font(1);
                        // fontone.style.display = "block";
                    }, 2000);
                }
            }, 100)
            setTimeout(() => {
                music2.pause();
            }, 6200);
            setTimeout(() => {
                //显示光圈2
                round2.style.display = "block"
            }, 7000);
        }, 6370);
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
                // fontone.style.display = "block";
                // fonttwo.style.display = "none";
                // fontthree.style.display = "none";
                return;
            } else {
            }
        }
    }

         //光圈2
    round2.onclick = function () {
        round2.style.display = "none"
        // console.log(1);
        //禁用一按钮
        dbt = false;
        //设置按钮为false
        dbt2 = false;
        music4.play();
        gz.setAttribute('class', 'gezi2');
        let i = 1
        var timesa = setInterval(() => {
            if (i > 5 && i < 10) i = 1
            if (i > 15 && i < 20) i = 11
            if (i > 25 && i < 30) i = 21
            if (i > 35) i = 31
            gz1.setAttribute('src', './images/gz' + i + '.png')
            i++;
        }, 100);
        //第一
        setTimeout(() => {
            let i = 11;
            let num = 0;
            clearInterval(timesa);
            var timesb = setInterval(() => {
                if (i > 5 && i < 10) i = 1
                if (i > 15 && i < 20) i = 11
                if (i > 25 && i < 30) i = 21
                if (i > 35) i = 31
                gz1.setAttribute('src', './images/gz' + i + '.png')
                i++;
                num++;
                // console.log(num);
                if (num == 40) {
                    clearInterval(timesb);
                    two = true;
                    //设置按钮为true
                    dbt2 = true;
                    music4.pause();
                    gz1.setAttribute('src', './images/gz' + 21 + '.png')
                    music2.play();
                    z26.style.display = "block";
                    z27.style.display = "block";
                    setTimeout(() => {
                        // fontone.style.display = "none";
                        // fonttwo.style.display = "block";
                        font(2);
                        z26img.style.animation = "tbx 1s linear infinite"
                        z29.style.display = "block";
                        z30.style.display = "block";
                        z31.style.display = "block";
                        z32.style.display = "block";
                        db3.style.display = "block";
                    }, 2000);
                }
            }, 100)
        }, 600);
        //延迟开关开启 为了让动画走完
        setTimeout(() => {
            music2.pause();
            dbt = true;
            //显示光圈3
            round3.style.display = "block"
        }, 10560);
    }
        //第二段
        db2.onclick = function(){
            if (!dbt2) {
                return
            }else{
            if (two) {
                // setTimeout(() => {
                     gz.setAttribute('class','gezi3s');
                    //  fontone.style.display = "none";
                    //     fonttwo.style.display = "block";
                    //     fontthree.style.display = "none";
                    font(2);
                // }, 6000);
               
                return;
            }else{
            }
            }
        }
        round3.onclick =function(){
            round3.style.display = "none";
            //禁用一按钮
            dbt = false;
            //禁用二按钮
            dbt2 = false;
            //禁用三按钮
            dbt3 = false;
            music4.play();
            gz.setAttribute('class','gezi3');
            let i = 21
            var timesc =  setInterval(()=>{
            if(i>5 && i< 10) i=1
            if(i>15 && i< 20) i=11
            if(i>25 && i< 30) i=21
            if(i>35) i=31
            gz1.setAttribute('src','./images/gz'+i+'.png')
            i++;
            },100);
            //1-2
            setTimeout(() => {
            let i =31;
            let num = 0;
            clearInterval(timesc);
            var timesd =  setInterval(()=>{
                if(i>5 && i< 10) i=1
                if(i>15 && i< 20) i=11
                if(i>25 && i< 30) i=21
                if(i>35) i=31
                gz1.setAttribute('src','./images/gz'+i+'.png')
                i++;
                num++;
                if (num == 13){
                    clearInterval(timesd);   
                }
            },100)
            }, 1423);
            setTimeout(() => {
            let i =21;
            let num = 0;
            // clearInterval(timesd);
            var timese =  setInterval(()=>{
                if(i>5 && i< 10) i=1
                if(i>15 && i< 20) i=11
                if(i>25 && i< 30) i=21
                if(i>35) i=31
                gz1.setAttribute('src','./images/gz'+i+'.png')
                i++;
                num++;
                // console.log(num);
                if (num == 23){
                    clearInterval(timese);
                    three = true;
                    //设置按钮为true
                    dbt3 = true;
                    music4.pause();
                    gz1.setAttribute('src','./images/gz'+31+'.png')
                    music2.play();
                    
                    z16.style.display = "block";
                    z17.style.display = "block";
                    
                    setTimeout(() => {
                        font(3);
                    //     fonttwo.style.display = "none";
                    //    fontthree.style.display = "block";
                        z16img.style.animation = "tbx 1s linear infinite"
                        z10.style.display = "block";
                        z11.style.display = "block";
                        z12.style.display = "block";
                        z13.style.display = "block";
                    }, 2000);
                }
            },100)
            }, 2742);
            setTimeout(() => {
                 music2.pause();
            }, 9500);
            //延迟点击让动画走完
            setTimeout(() => {
            dbt = true;
            dbt2 = true;
            round4.style.display = "block"
            }, 10950);
        }
        //第三段
        db3.onclick = function(){
            if (!dbt3) {
                return
            }else{
            if (three) {
                // setTimeout(() => {
                gz.setAttribute('class', 'gezi4s');
                // fontone.style.display = "none";
                // fonttwo.style.display = "none";
                // fontthree.style.display = "block";
                font(3);
                // }, 6000);

                return;
            }else{
                
            }
        }
        }
        //光圈4
        round4.onclick = function(){
            round4.style.display = "none";
            //禁用一按钮
            dbt = false;
            //禁用二按钮
            dbt2 = false;
            //禁用三按钮
            dbt3 = false;
            //禁用四按钮
            dbt4 = false;
            music4 .play();
            gz.setAttribute('class','gezi4');
            let i = 31
            var time1 =  setInterval(()=>{
            if(i>5 && i< 10) i=1
            if(i>15 && i< 20) i=11
            if(i>25 && i< 30) i=21
            if(i>35) i=31
            gz1.setAttribute('src','./images/gz'+i+'.png')
            i++;
            },100);
            setTimeout(() => {
            let i =31;
            let num = 0;
            clearInterval(time1);
            var time2 =  setInterval(()=>{
                if(i>5 && i< 10) i=1
                if(i>15 && i< 20) i=11
                if(i>25 && i< 30) i=21
                if(i>35) i=31
                gz1.setAttribute('src','./images/gz'+i+'.png')
                i++;
                num++;
                // console.log(num);
                if (num == 10){
                    clearInterval(time2);
                }
            },100)
            }, 1359);
            setTimeout(() => {
            let i =1;
            let num = 0;
            // clearInterval(timesc);
            var time3 =  setInterval(()=>{
                if(i>5 && i< 10) i=1
                if(i>15 && i< 20) i=11
                if(i>25 && i< 30) i=21
                if(i>35) i=31
                gz1.setAttribute('src','./images/gz'+i+'.png')
                i++;
                num++;
                // console.log(num);
                if (num == 12){
                    clearInterval(time3);
                    music4.pause();
                    gz1.setAttribute('src','./images/gz'+31+'.png')
                    bg.setAttribute('style','animation: go 4s linear forwards;')
                    z12img.setAttribute('style','animation: opendoor 5s forwards;')
                    gz1.setAttribute('style','animation: opendoors 5s forwards;')
                    fontone.style.display = "none";
                    fonttwo.style.display = "none";
                    fontthree.style.display = "none";
                    z35img.style.display = "none"
                    downs();
                    music3.play();
                    //添加动画
                    setTimeout(() => {
                        xq1.setAttribute('style','animation: tbs 3s linear infinite')
                        xq2.setAttribute('style','animation: tbs 3s linear infinite')
                        xq3.setAttribute('style','animation: tbs 3s linear infinite')
                        //动画
                        for (let i = 0; i < sg.length; i++) {
                            sg[i].setAttribute('style','animation: tbx 3s linear infinite')
                            
                        }
                        // f1.setAttribute('style','animation: tbx 3s linear infinite')
                        // f2.setAttribute('style','animation: tbx 3s linear infinite')
                        // f3.setAttribute('style','animation: tbx 3s linear infinite')
                        // sg[0].setAttribute('style','animation: tbx 3s linear infinite')
                        // sg[1].setAttribute('style','animation: tbx 3s linear infinite')
                        // sg[2].setAttribute('style','animation: tbx 3s linear infinite')
                    }, 5000);
                }
            },100)
            }, 2267);
            setTimeout(() => {
                dbt = false;
                dbt2 = false;
                dbt3 = false;
                xqq1.style.display = "block"
                xqq2.style.display = "block"
                xqq3.style.display = "block"
                z35img.style.display = " none"
                fontthree.style.display = " none"
                fontfour.style.display = " block"
                btnn.style.display = " block" 
            }, 6350);
        }
        // 第四段
        db4.onclick = function(){
            if (!dbt4) {
                return
            }else{
                //开关 判断
                if (four) {
                }else{
                }
            }
        }
        

}