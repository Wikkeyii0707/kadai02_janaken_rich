// ★初期化
function load() {
    maxKhp = 100; // 変更可
    nowKhp = maxKhp;
    maxYhp = 100; // 変更可
    nowYhp = maxYhp;
    
    NK = document.getElementById("nowKaiju");
    TK = document.getElementById("txtK");

    NY = document.getElementById("nowYusha");
    TY = document.getElementById("txtY");
    B1 = document.getElementById("at_btn");
    B2 = document.getElementById("df_btn");
    B3 = document.getElementById("cr_btn");
    B4 = document.getElementById("btn2");
    
    NK.innerHTML = nowKhp + "/" + maxKhp;
    NY.innerHTML = nowYhp + "/" + maxYhp;

}
// ★ゲージ減少
function attack() {
    document.getElementById('btn_audioAT').play();
    randomKAct = Math.floor(Math.random() * 3);
    console.log(randomKAct,"魔王の行動")

    if(randomKAct===0){
        random = Math.floor(Math.random() * 11);
        nowKhp = nowKhp - random;
        console.log(nowKhp,"魔王のHP")
        if (nowKhp > 0) {
            if (random == 0) {
            strK = "魔王に攻撃をかわされた";
            } else {
                strK = "魔王に[ " + random + " ]のダメージを与えた";
            }
        } else {
            nowKhp = 0;
            strK = "魔王は力尽きた";
            B1.style.display = "none";
            B2.style.display = "none";
            B3.style.display = "none";
            B4.style.display = "block";
        }
        TK.value = strK;
        NK.innerHTML = nowKhp + "/" + maxKhp;
        NK.style.width = 200 / maxKhp * nowKhp + "px";
    
  
        randomKNum = Math.floor(Math.random() * 11);

        nowYhp = nowYhp - randomKNum;
        console.log(nowYhp,"勇者のHP")
        if (nowYhp > 0) {
            if (randomKNum == 0) {
            strY = "勇者は攻撃をかわした";
            } else {
                strY = "勇者は[ " + random + " ]のダメージを食らった";
            }
        } else {
            nowYhp = 0;
            strY = "勇者は力尽きた";
            B1.style.display = "none";
            B2.style.display = "none";
            B3.style.display = "none";
            B4.style.display = "block";
        }
        console.log(strY,"勇者の説明")
        TY.value = strY;
        NY.innerHTML = nowYhp + "/" + maxYhp;
        NY.style.width = 200 / maxYhp * nowYhp + "px";

    }else if(randomKAct===1){


        strK = "魔王は攻撃から身を守った";
    
        strY = "勇者の攻撃は効かなかった";
        TK.value = strK;
        TY.value = strY;
    }else if(randomKAct===2){
        console.log(strY,"魔王回復")
        random = Math.floor(Math.random() * 11);
        nowKhp = nowKhp - random;
        randomKNum = Math.floor(Math.random() * 11);
        console.log(nowKhp,"魔王のHP")
        nowKhp = nowKhp + randomKNum;
        if(nowKhp>100){
            nowKhp=100;
        }
        if (nowKhp > 0) {
            if (random === 0) {
                console.log(strY,"魔王回復２")
            strK = "魔王は[ " + randomKNum + " ]だけ回復した";
            } else {
                strK = "魔王に[ " + random + " ]のダメージを与えたが[ " + randomKNum + " ]だけ回復した";
            }
        } else {
            nowKhp = 0;
            strK = "魔王は力尽きた";
            B1.style.display = "none";
            B2.style.display = "none";
            B3.style.display = "none";
            B4.style.display = "block";
        }

        strY = "勇者は[ " + random + " ]のダメージを与えた";
    
        TK.value = strK;
        TY.value = strY;
        NK.innerHTML = nowKhp + "/" + maxKhp;
        NK.style.width = 200 / maxKhp * nowKhp + "px";

    }
}

function Guard() {
    document.getElementById('btn_audioPR').play();

    randomKAct = Math.floor(Math.random() * 3);
    console.log(randomKAct,"魔王の行動")

    if(randomKAct===0){

        random = Math.floor(Math.random() * 11);
    
        console.log(nowKhp,"魔王のHP")
        if (nowKhp > 0) {
            if (random == 0) {
            strK = "魔王の攻撃は躱された";
            } else {
                strK = "魔王の攻撃は防がれた";
            }
        } else {
            nowKhp = 0;
            strK = "魔王は力尽きた";
            B1.style.display = "none";
            B2.style.display = "none";
            B3.style.display = "none";
            B4.style.display = "block";
        }
        TK.value = strK;
        NK.innerHTML = nowKhp + "/" + maxKhp;
        NK.style.width = 200 / maxKhp * nowKhp + "px";
    
  
        randomKNum = Math.floor(Math.random() * 11);
        // console.log(nowYhp,"勇者のHP")
        if (nowYhp > 0) {
            if (randomKNum == 0) {
            strY = "勇者は攻撃をかわした";
            } else {
                strY = "勇者は防御した";
            }
        } else {
            nowYhp = 0;
            strY = "勇者は力尽きた";
            B1.style.display = "none";
            B2.style.display = "none";
            B3.style.display = "none";
            B4.style.display = "block";
        }
        console.log(strY,"勇者の説明")
        TY.value = strY;
        NY.innerHTML = nowYhp + "/" + maxYhp;
        NY.style.width = 200 / maxYhp * nowYhp + "px";

    }else if(randomKAct===1){
        console.log(strY,"魔王防御")

        strK = "魔王は防御した";
    
        strY = "勇者も防御した";
        TK.value = strK;
        TY.value = strY;

    }else if(randomKAct===2){
        console.log(strY,"魔王回復")
        randomKNum = Math.floor(Math.random() * 11);
        console.log(nowKhp,"魔王のHP")
        nowKhp = nowKhp + randomKNum;
        if(nowKhp>100){
            nowKhp=100;
        }
        strK = "魔王は[ " + randomKNum + " ]だけ回復した";
        strY = "勇者は防御した";

        TK.value = strK;
        TY.value = strY;
        NK.innerHTML = nowKhp + "/" + maxKhp;
        NK.style.width = 200 / maxKhp * nowKhp + "px";

    }
}
function Cure() {

    document.getElementById('btn_audioCR').play();

    randomKAct = Math.floor(Math.random() * 3);
    console.log(randomKAct,"魔王の行動")

    if(randomKAct===0){


  
        randomKNum = Math.floor(Math.random() * 11);

        nowYhp = nowYhp - randomKNum;
        console.log(nowYhp,"勇者のHP")
        random = Math.floor(Math.random() * 11);
        nowYhp = nowYhp + random;

        if (nowYhp > 0) {
            if (randomKNum == 0) {
            strY = "勇者は攻撃をかわして[ " + random + " ]回復した";
            } else {
                strY = "勇者は[ " + randomKNum + " ]のダメージを食らったが[ " + random + " ]回復した";
            }
        } else {
            nowYhp = 0;
            strY = "勇者は力尽きた";
            B1.style.display = "none";
            B2.style.display = "none";
            B3.style.display = "none";
            B4.style.display = "block";
        }
        TK.value = strK;
        TY.value = strY;
        NY.innerHTML = nowYhp + "/" + maxYhp;
        NY.style.width = 200 / maxYhp * nowYhp + "px";
    
  

    }else if(randomKAct===1){
        console.log(strY,"魔王防御")

        strK = "魔王は防御した";
        random = Math.floor(Math.random() * 11);
        nowYhp = nowYhp + random;
        strY = "勇者は[ " + random + " ]回復した";
        TK.value = strK;
        TY.value = strY;

    }else if(randomKAct===2){
        console.log(strY,"魔王回復")
        randomKNum = Math.floor(Math.random() * 11);
        console.log(nowKhp,"魔王のHP")
        nowKhp = nowKhp + randomKNum;
        random = Math.floor(Math.random() * 11);
        strK = "魔王は[ " + randomKNum + " ]だけ回復した";
        nowYhp = nowYhp + random;
        strY = "勇者は[ " + random + " ]だけ回復した";

        TK.value = strK;
        TY.value = strY;
        TK.value = strK;
        TY.value = strY;
        NK.innerHTML = nowKhp + "/" + maxKhp;
        NK.style.width = 200 / maxKhp * nowKhp + "px";

    }
}


    // ★リロード
function reload() {
nowKhp = maxKhp;
nowYhp = maxYhp;
B1.style.display = "block";
B2.style.display = "block";
B3.style.display = "block";
B4.style.display = "none";
TK.value = "新たな魔王を見つけた";
TY.value = "新たな戦いが始まる";
NK.innerHTML = nowKhp + "/" + maxKhp;
NK.style.width = 200 / maxKhp * nowKhp + "px";
NY.innerHTML = nowYhp + "/" + maxYhp;
NY.style.width = 200 / maxYhp * nowYhp + "px";
}

// function reload1() {
// nowYhp = maxYhp;
// B1.style.display = "block";
// B2.style.display = "none";
// TY.value = "新たな勇者を見つけた";
// NY.innerHTML = nowYhp + "/" + maxYhp;
// NY.style.width = 200 / maxYhp * nowYhp + "px";
// }



var kaiju=5
var yusha=5


// document.getElementById("more-toggle").onclick = function() {

//      document.getElementById('btn_audioKS').play();
// }



var btn =0;


// if(kaiju!==0 || yusha!==0)
// {

// console.log(random,"ランダムな数字の箱")
// document.getElementById("at_btn").onclick = function() {

//     var randomATyu = Math.floor(Math.random()*2+1);

//     var random = Math.floor(Math.random()*3);
//     var randomCRka = Math.floor(Math.random()*2+1);
//     var randomATka = Math.floor(Math.random()*2+1);

//     console.log(btn,"btn値")
//     document.getElementById('btn_audioAT').play();
//     $("h4").html("勇者は攻撃力"+randomATyu+"の攻撃を繰り出した！").css("color","red")
    
//     if(random===0){
//         $("h3").html("魔王は攻撃力"+randomATka+"の攻撃を繰り出した！").css("color","red")
//         kaiju=kaiju-randomATyu;
//         yusha=yusha-randomATka;
//     }else if(random===1){
//         $("h3").html("魔王は攻撃から身を守った！").css("color","gray")
//     }else if(random===2){
//         kaiju=kaiju-randomATyu+randomCRka;
//         $("h3").html("魔王は"+randomCRka+"回復した").css("color","gray")
//         if(kaiju>=5){
//             kaiju=5;
//         }
//     }
//     if(kaiju===5){
//         console.log("5")
//         $("#kaiju_hp_1").css("background-color","green")
//         $("#kaiju_hp_2").css("background-color","green")
//         $("#kaiju_hp_3").css("background-color","green")
//         $("#kaiju_hp_4").css("background-color","green")
//         $("#kaiju_hp_5").css("background-color","green")
//         console.log(kaiju,"怪獣のHP" )
// }
// else if(kaiju===4){
//         $("#kaiju_hp_1").css("background-color","white")
//         $("#kaiju_hp_2").css("background-color","green")
//         $("#kaiju_hp_3").css("background-color","green")
//         $("#kaiju_hp_4").css("background-color","green")
//         $("#kaiju_hp_5").css("background-color","green")
//         console.log(kaiju,"怪獣のHP" )
// }
// else if(kaiju===3){
//         $("#kaiju_hp_1").css("background-color","white")
//         $("#kaiju_hp_2").css("background-color","white")
//         $("#kaiju_hp_3").css("background-color","green")
//         $("#kaiju_hp_4").css("background-color","green")
//         $("#kaiju_hp_5").css("background-color","green")
//         console.log(kaiju,"怪獣のHP" )
// }
// else if(kaiju===2){
//         $("#kaiju_hp_1").css("background-color","white")
//         $("#kaiju_hp_2").css("background-color","white")
//         $("#kaiju_hp_3").css("background-color","white")
//         $("#kaiju_hp_4").css("background-color","red")
//         $("#kaiju_hp_5").css("background-color","red")

//         console.log(kaiju,"怪獣のHP" )
// }
// else if(kaiju===1){
//         $("#kaiju_hp_1").css("background-color","white")
//         $("#kaiju_hp_2").css("background-color","white")
//         $("#kaiju_hp_3").css("background-color","white")
//         $("#kaiju_hp_4").css("background-color","white")
//         $("#kaiju_hp_5").css("background-color","red")

// }else if(kaiju===0){

//     $("#kaiju_hp_1").css("background-color","white")
//     $("#kaiju_hp_2").css("background-color","white")
//     $("#kaiju_hp_3").css("background-color","white")
//     $("#kaiju_hp_4").css("background-color","white")
//     $("#kaiju_hp_5").css("background-color","white")

//         window.alert("You Win!!!もう一度遊ぶ？");
//         location.reload()
// }
// if(yusha===5){
//     console.log("5")
//     $("#Yusha_hp_1").css("background-color","green")
//     $("#Yusha_hp_2").css("background-color","green")
//     $("#Yusha_hp_3").css("background-color","green")
//     $("#Yusha_hp_4").css("background-color","green")
//     $("#Yusha_hp_5").css("background-color","green")
//     console.log(yusha,"勇者のHP" )
// }
// else if(yusha===4){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","green")
//     $("#Yusha_hp_3").css("background-color","green")
//     $("#Yusha_hp_4").css("background-color","green")
//     $("#Yusha_hp_5").css("background-color","green")
//     console.log(yusha,"勇者のHP" )
// }
// else if(yusha===3){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","white")
//     $("#Yusha_hp_3").css("background-color","green")
//     $("#Yusha_hp_4").css("background-color","green")
//     $("#Yusha_hp_5").css("background-color","green")

//     console.log(yusha,"勇者のHP" )
// }
// else if(yusha===2){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","white")
//     $("#Yusha_hp_3").css("background-color","white")
//     $("#Yusha_hp_4").css("background-color","red")
//     $("#Yusha_hp_5").css("background-color","red")

//     console.log(yusha,"勇者のHP" )
// }
// else if(yusha===1){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","white")
//     $("#Yusha_hp_3").css("background-color","white")
//     $("#Yusha_hp_4").css("background-color","white")
//     $("#Yusha_hp_5").css("background-color","red")
// }
// else if(yusha===0){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","white")
//     $("#Yusha_hp_3").css("background-color","white")
//     $("#Yusha_hp_4").css("background-color","white")
//     $("#Yusha_hp_5").css("background-color","white")

//     window.alert("You lose!!!もう一度遊ぶ？");
//     location.reload()
// }

// }

// document.getElementById("df_btn").onclick = function() {


//     var random = Math.floor(Math.random()*3);
//     var randomCRka = Math.floor(Math.random()*2+1);
//     var randomATka = Math.floor(Math.random()*2+1);

//     console.log(btn,"btn値")
//     document.getElementById('btn_audioPR').play();
//     if(random===0){
//         $("h3").html("魔王は攻撃力"+randomATka+"の攻撃を繰り出した！").css("color","red")

//         $("h4").html("勇者は攻撃から身を守った！").css("color","gray")
//     }else if(random===1){
//         $("h3").html("魔王は無駄に防御した！").css("color","gray")
//         $("h4").html("勇者も無駄に防御した！").css("color","gray")
        
//     }else if(random===2){   
//         $("h3").html("魔王は"+randomCRka+"回復した").css("color","white")
//         kaiju=kaiju+randomCRka;
//         if(kaiju>=5){
//             kaiju=5;
//         }
//     }
//     if(kaiju===5){
//         console.log("5")
//         $("#kaiju_hp_1").css("background-color","green")
//         $("#kaiju_hp_2").css("background-color","green")
//         $("#kaiju_hp_3").css("background-color","green")
//         $("#kaiju_hp_4").css("background-color","green")
//         $("#kaiju_hp_5").css("background-color","green")
//         console.log(kaiju,"怪獣のHP" )
// }
// else if(kaiju===4){
//         $("#kaiju_hp_1").css("background-color","white")
//         $("#kaiju_hp_2").css("background-color","green")
//         $("#kaiju_hp_3").css("background-color","green")
//         $("#kaiju_hp_4").css("background-color","green")
//         $("#kaiju_hp_5").css("background-color","green")
//         console.log(kaiju,"怪獣のHP" )
// }
// else if(kaiju===3){
//         $("#kaiju_hp_1").css("background-color","white")
//         $("#kaiju_hp_2").css("background-color","white")
//         $("#kaiju_hp_3").css("background-color","green")
//         $("#kaiju_hp_4").css("background-color","green")
//         $("#kaiju_hp_5").css("background-color","green")
//         console.log(kaiju,"怪獣のHP" )
// }
// else if(kaiju===2){
//         $("#kaiju_hp_1").css("background-color","white")
//         $("#kaiju_hp_2").css("background-color","white")
//         $("#kaiju_hp_3").css("background-color","white")
//         $("#kaiju_hp_4").css("background-color","red")
//         $("#kaiju_hp_5").css("background-color","red")

//         console.log(kaiju,"怪獣のHP" )
// }
// else if(kaiju===1){
//         $("#kaiju_hp_1").css("background-color","white")
//         $("#kaiju_hp_2").css("background-color","white")
//         $("#kaiju_hp_3").css("background-color","white")
//         $("#kaiju_hp_4").css("background-color","white")
//         $("#kaiju_hp_5").css("background-color","red")

// }else if(kaiju===0){

//     $("#kaiju_hp_1").css("background-color","white")
//     $("#kaiju_hp_2").css("background-color","white")
//     $("#kaiju_hp_3").css("background-color","white")
//     $("#kaiju_hp_4").css("background-color","white")
//     $("#kaiju_hp_5").css("background-color","white")

//         window.alert("You Win!!!もう一度遊ぶ？");
//         location.reload()
// }
// if(yusha===5){
//     console.log("5")
//     $("#Yusha_hp_1").css("background-color","green")
//     $("#Yusha_hp_2").css("background-color","green")
//     $("#Yusha_hp_3").css("background-color","green")
//     $("#Yusha_hp_4").css("background-color","green")
//     $("#Yusha_hp_5").css("background-color","green")
//     console.log(yusha,"勇者のHP" )
// }
// else if(yusha===4){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","green")
//     $("#Yusha_hp_3").css("background-color","green")
//     $("#Yusha_hp_4").css("background-color","green")
//     $("#Yusha_hp_5").css("background-color","green")
//     console.log(yusha,"勇者のHP" )
// }
// else if(yusha===3){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","white")
//     $("#Yusha_hp_3").css("background-color","green")
//     $("#Yusha_hp_4").css("background-color","green")
//     $("#Yusha_hp_5").css("background-color","green")

//     console.log(yusha,"勇者のHP" )
// }
// else if(yusha===2){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","white")
//     $("#Yusha_hp_3").css("background-color","white")
//     $("#Yusha_hp_4").css("background-color","red")
//     $("#Yusha_hp_5").css("background-color","red")

//     console.log(yusha,"勇者のHP" )
// }
// else if(yusha===1){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","white")
//     $("#Yusha_hp_3").css("background-color","white")
//     $("#Yusha_hp_4").css("background-color","white")
//     $("#Yusha_hp_5").css("background-color","red")
// }
// else if(yusha===0){
//     $("#Yusha_hp_1").css("background-color","white")
//     $("#Yusha_hp_2").css("background-color","white")
//     $("#Yusha_hp_3").css("background-color","white")
//     $("#Yusha_hp_4").css("background-color","white")
//     $("#Yusha_hp_5").css("background-color","white")

//     window.alert("You lose!!!もう一度遊ぶ？");
//     location.reload()
// }

// }
   

// document.getElementById("cr_btn").onclick = function() {
//     btn =3
//     var randomCRyu = Math.floor(Math.random()*2+1);
//     var random = Math.floor(Math.random()*3);
//     var randomCRka = Math.floor(Math.random()*2+1);
//     var randomATka = Math.floor(Math.random()*2+1);
    
//     console.log(random,"random値")
  
//         console.log(btn,"btn値")
//         document.getElementById('btn_audioCR').play();
//         $("h4").html("勇者は"+randomCRyu+"回復した").css("color","gray")
//         if(random===0){
//             $("h3").html("魔王は攻撃力"+randomATka+"の攻撃を繰り出した！").css("color","red")
//             yusha=yusha+randomCRyu-randomATka;
//             if(yusha>=5){
//                 yusha=5;
//             }
//         }else if(random===1){
//             $("h3").html("魔王は無駄に防御した！").css("color","gray")
//             yusha=yusha+randomCRyu;
            
//         }else if(random===2){   
//             $("h3").html("魔王は"+randomCRka+"回復した").css("color","gray")
//             kaiju=kaiju+randomCRka;
//             yusha=yusha+randomCRyu;
//         }
//         if(kaiju===5){
//             console.log("5")
//             $("#kaiju_hp_1").css("background-color","green")
//             $("#kaiju_hp_2").css("background-color","green")
//             $("#kaiju_hp_3").css("background-color","green")
//             $("#kaiju_hp_4").css("background-color","green")
//             $("#kaiju_hp_5").css("background-color","green")
//             console.log(kaiju,"怪獣のHP" )
//     }
//     else if(kaiju===4){
//             $("#kaiju_hp_1").css("background-color","white")
//             $("#kaiju_hp_2").css("background-color","green")
//             $("#kaiju_hp_3").css("background-color","green")
//             $("#kaiju_hp_4").css("background-color","green")
//             $("#kaiju_hp_5").css("background-color","green")
//             console.log(kaiju,"怪獣のHP" )
//     }
//     else if(kaiju===3){
//             $("#kaiju_hp_1").css("background-color","white")
//             $("#kaiju_hp_2").css("background-color","white")
//             $("#kaiju_hp_3").css("background-color","green")
//             $("#kaiju_hp_4").css("background-color","green")
//             $("#kaiju_hp_5").css("background-color","green")
//             console.log(kaiju,"怪獣のHP" )
//     }
//     else if(kaiju===2){
//             $("#kaiju_hp_1").css("background-color","white")
//             $("#kaiju_hp_2").css("background-color","white")
//             $("#kaiju_hp_3").css("background-color","white")
//             $("#kaiju_hp_4").css("background-color","red")
//             $("#kaiju_hp_5").css("background-color","red")

//             console.log(kaiju,"怪獣のHP" )
//     }
//     else if(kaiju===1){
//             $("#kaiju_hp_1").css("background-color","white")
//             $("#kaiju_hp_2").css("background-color","white")
//             $("#kaiju_hp_3").css("background-color","white")
//             $("#kaiju_hp_4").css("background-color","white")
//             $("#kaiju_hp_5").css("background-color","red")

//     }else if(kaiju===0){

//         $("#kaiju_hp_1").css("background-color","white")
//         $("#kaiju_hp_2").css("background-color","white")
//         $("#kaiju_hp_3").css("background-color","white")
//         $("#kaiju_hp_4").css("background-color","white")
//         $("#kaiju_hp_5").css("background-color","white")
            
//             window.alert("You Win!!!もう一度遊ぶ？");
//             location.reload()
//     }
//     if(yusha===5){
//         console.log("5")
//         $("#Yusha_hp_1").css("background-color","green")
//         $("#Yusha_hp_2").css("background-color","green")
//         $("#Yusha_hp_3").css("background-color","green")
//         $("#Yusha_hp_4").css("background-color","green")
//         $("#Yusha_hp_5").css("background-color","green")
//         console.log(yusha,"勇者のHP" )
//     }
//     else if(yusha===4){
//         $("#Yusha_hp_1").css("background-color","white")
//         $("#Yusha_hp_2").css("background-color","green")
//         $("#Yusha_hp_3").css("background-color","green")
//         $("#Yusha_hp_4").css("background-color","green")
//         $("#Yusha_hp_5").css("background-color","green")
//         console.log(yusha,"勇者のHP" )
//     }
//     else if(yusha===3){
//         $("#Yusha_hp_1").css("background-color","white")
//         $("#Yusha_hp_2").css("background-color","white")
//         $("#Yusha_hp_3").css("background-color","green")
//         $("#Yusha_hp_4").css("background-color","green")
//         $("#Yusha_hp_5").css("background-color","green")

//         console.log(yusha,"勇者のHP" )
//     }
//     else if(yusha===2){
//         $("#Yusha_hp_1").css("background-color","white")
//         $("#Yusha_hp_2").css("background-color","white")
//         $("#Yusha_hp_3").css("background-color","white")
//         $("#Yusha_hp_4").css("background-color","red")
//         $("#Yusha_hp_5").css("background-color","red")

//         console.log(yusha,"勇者のHP" )
//     }
//     else if(yusha===1){
//         $("#Yusha_hp_1").css("background-color","white")
//         $("#Yusha_hp_2").css("background-color","white")
//         $("#Yusha_hp_3").css("background-color","white")
//         $("#Yusha_hp_4").css("background-color","white")
//         $("#Yusha_hp_5").css("background-color","red")
//     }
//     else if(yusha===0){
//         $("#Yusha_hp_1").css("background-color","white")
//         $("#Yusha_hp_2").css("background-color","white")
//         $("#Yusha_hp_3").css("background-color","white")
//         $("#Yusha_hp_4").css("background-color","white")
//         $("#Yusha_hp_5").css("background-color","white")

//         window.alert("You lose!!!もう一度遊ぶ？");
//         location.reload()
//     }

// }
                

   
       




