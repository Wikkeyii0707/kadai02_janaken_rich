


var kaiju=5
var yusha=5


document.getElementById("more-toggle").onclick = function() {

     document.getElementById('btn_audioKS').play();
}



var btn =0;


// if(kaiju!==0 || yusha!==0)
// {

// console.log(random,"ランダムな数字の箱")
document.getElementById("at_btn").onclick = function() {

    var randomATyu = Math.floor(Math.random()*2+1);

    var random = Math.floor(Math.random()*3);
    var randomCRka = Math.floor(Math.random()*2+1);
    var randomATka = Math.floor(Math.random()*2+1);

    console.log(btn,"btn値")
    document.getElementById('btn_audioAT').play();
    $("h4").html("勇者は攻撃力"+randomATyu+"の攻撃を繰り出した！").css("color","red")
    
    if(random===0){
        $("h3").html("魔王は攻撃力"+randomATka+"の攻撃を繰り出した！").css("color","red")
        kaiju=kaiju-randomATyu;
        yusha=yusha-randomATka;
    }else if(random===1){
        $("h3").html("魔王は攻撃から身を守った！").css("color","gray")
    }else if(random===2){
        kaiju=kaiju-randomATyu+randomCRka;
        $("h3").html("魔王は"+randomCRka+"回復した").css("color","gray")
        if(kaiju>=5){
            kaiju=5;
        }
    }
    if(kaiju===5){
        console.log("5")
        $("#kaiju_hp_1").css("background-color","green")
        $("#kaiju_hp_2").css("background-color","green")
        $("#kaiju_hp_3").css("background-color","green")
        $("#kaiju_hp_4").css("background-color","green")
        $("#kaiju_hp_5").css("background-color","green")
        console.log(kaiju,"怪獣のHP" )
}
else if(kaiju===4){
        $("#kaiju_hp_1").css("background-color","white")
        $("#kaiju_hp_2").css("background-color","green")
        $("#kaiju_hp_3").css("background-color","green")
        $("#kaiju_hp_4").css("background-color","green")
        $("#kaiju_hp_5").css("background-color","green")
        console.log(kaiju,"怪獣のHP" )
}
else if(kaiju===3){
        $("#kaiju_hp_1").css("background-color","white")
        $("#kaiju_hp_2").css("background-color","white")
        $("#kaiju_hp_3").css("background-color","green")
        $("#kaiju_hp_4").css("background-color","green")
        $("#kaiju_hp_5").css("background-color","green")
        console.log(kaiju,"怪獣のHP" )
}
else if(kaiju===2){
        $("#kaiju_hp_1").css("background-color","white")
        $("#kaiju_hp_2").css("background-color","white")
        $("#kaiju_hp_3").css("background-color","white")
        $("#kaiju_hp_4").css("background-color","red")
        $("#kaiju_hp_5").css("background-color","red")

        console.log(kaiju,"怪獣のHP" )
}
else if(kaiju===1){
        $("#kaiju_hp_1").css("background-color","white")
        $("#kaiju_hp_2").css("background-color","white")
        $("#kaiju_hp_3").css("background-color","white")
        $("#kaiju_hp_4").css("background-color","white")
        $("#kaiju_hp_5").css("background-color","red")

}else if(kaiju===0){

    $("#kaiju_hp_1").css("background-color","white")
    $("#kaiju_hp_2").css("background-color","white")
    $("#kaiju_hp_3").css("background-color","white")
    $("#kaiju_hp_4").css("background-color","white")
    $("#kaiju_hp_5").css("background-color","white")

        window.alert("You Win!!!もう一度遊ぶ？");
        location.reload()
}
if(yusha===5){
    console.log("5")
    $("#Yusha_hp_1").css("background-color","green")
    $("#Yusha_hp_2").css("background-color","green")
    $("#Yusha_hp_3").css("background-color","green")
    $("#Yusha_hp_4").css("background-color","green")
    $("#Yusha_hp_5").css("background-color","green")
    console.log(yusha,"勇者のHP" )
}
else if(yusha===4){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","green")
    $("#Yusha_hp_3").css("background-color","green")
    $("#Yusha_hp_4").css("background-color","green")
    $("#Yusha_hp_5").css("background-color","green")
    console.log(yusha,"勇者のHP" )
}
else if(yusha===3){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","white")
    $("#Yusha_hp_3").css("background-color","green")
    $("#Yusha_hp_4").css("background-color","green")
    $("#Yusha_hp_5").css("background-color","green")

    console.log(yusha,"勇者のHP" )
}
else if(yusha===2){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","white")
    $("#Yusha_hp_3").css("background-color","white")
    $("#Yusha_hp_4").css("background-color","red")
    $("#Yusha_hp_5").css("background-color","red")

    console.log(yusha,"勇者のHP" )
}
else if(yusha===1){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","white")
    $("#Yusha_hp_3").css("background-color","white")
    $("#Yusha_hp_4").css("background-color","white")
    $("#Yusha_hp_5").css("background-color","red")
}
else if(yusha===0){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","white")
    $("#Yusha_hp_3").css("background-color","white")
    $("#Yusha_hp_4").css("background-color","white")
    $("#Yusha_hp_5").css("background-color","white")

    window.alert("You lose!!!もう一度遊ぶ？");
    location.reload()
}

}

document.getElementById("df_btn").onclick = function() {


    var random = Math.floor(Math.random()*3);
    var randomCRka = Math.floor(Math.random()*2+1);
    var randomATka = Math.floor(Math.random()*2+1);

    console.log(btn,"btn値")
    document.getElementById('btn_audioPR').play();
    if(random===0){
        $("h3").html("魔王は攻撃力"+randomATka+"の攻撃を繰り出した！").css("color","red")

        $("h4").html("勇者は攻撃から身を守った！").css("color","gray")
    }else if(random===1){
        $("h3").html("魔王は無駄に防御した！").css("color","gray")
        $("h4").html("勇者も無駄に防御した！").css("color","gray")
        
    }else if(random===2){   
        $("h3").html("魔王は"+randomCRka+"回復した").css("color","white")
        kaiju=kaiju+randomCRka;
        if(kaiju>=5){
            kaiju=5;
        }
    }
    if(kaiju===5){
        console.log("5")
        $("#kaiju_hp_1").css("background-color","green")
        $("#kaiju_hp_2").css("background-color","green")
        $("#kaiju_hp_3").css("background-color","green")
        $("#kaiju_hp_4").css("background-color","green")
        $("#kaiju_hp_5").css("background-color","green")
        console.log(kaiju,"怪獣のHP" )
}
else if(kaiju===4){
        $("#kaiju_hp_1").css("background-color","white")
        $("#kaiju_hp_2").css("background-color","green")
        $("#kaiju_hp_3").css("background-color","green")
        $("#kaiju_hp_4").css("background-color","green")
        $("#kaiju_hp_5").css("background-color","green")
        console.log(kaiju,"怪獣のHP" )
}
else if(kaiju===3){
        $("#kaiju_hp_1").css("background-color","white")
        $("#kaiju_hp_2").css("background-color","white")
        $("#kaiju_hp_3").css("background-color","green")
        $("#kaiju_hp_4").css("background-color","green")
        $("#kaiju_hp_5").css("background-color","green")
        console.log(kaiju,"怪獣のHP" )
}
else if(kaiju===2){
        $("#kaiju_hp_1").css("background-color","white")
        $("#kaiju_hp_2").css("background-color","white")
        $("#kaiju_hp_3").css("background-color","white")
        $("#kaiju_hp_4").css("background-color","red")
        $("#kaiju_hp_5").css("background-color","red")

        console.log(kaiju,"怪獣のHP" )
}
else if(kaiju===1){
        $("#kaiju_hp_1").css("background-color","white")
        $("#kaiju_hp_2").css("background-color","white")
        $("#kaiju_hp_3").css("background-color","white")
        $("#kaiju_hp_4").css("background-color","white")
        $("#kaiju_hp_5").css("background-color","red")

}else if(kaiju===0){

    $("#kaiju_hp_1").css("background-color","white")
    $("#kaiju_hp_2").css("background-color","white")
    $("#kaiju_hp_3").css("background-color","white")
    $("#kaiju_hp_4").css("background-color","white")
    $("#kaiju_hp_5").css("background-color","white")

        window.alert("You Win!!!もう一度遊ぶ？");
        location.reload()
}
if(yusha===5){
    console.log("5")
    $("#Yusha_hp_1").css("background-color","green")
    $("#Yusha_hp_2").css("background-color","green")
    $("#Yusha_hp_3").css("background-color","green")
    $("#Yusha_hp_4").css("background-color","green")
    $("#Yusha_hp_5").css("background-color","green")
    console.log(yusha,"勇者のHP" )
}
else if(yusha===4){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","green")
    $("#Yusha_hp_3").css("background-color","green")
    $("#Yusha_hp_4").css("background-color","green")
    $("#Yusha_hp_5").css("background-color","green")
    console.log(yusha,"勇者のHP" )
}
else if(yusha===3){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","white")
    $("#Yusha_hp_3").css("background-color","green")
    $("#Yusha_hp_4").css("background-color","green")
    $("#Yusha_hp_5").css("background-color","green")

    console.log(yusha,"勇者のHP" )
}
else if(yusha===2){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","white")
    $("#Yusha_hp_3").css("background-color","white")
    $("#Yusha_hp_4").css("background-color","red")
    $("#Yusha_hp_5").css("background-color","red")

    console.log(yusha,"勇者のHP" )
}
else if(yusha===1){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","white")
    $("#Yusha_hp_3").css("background-color","white")
    $("#Yusha_hp_4").css("background-color","white")
    $("#Yusha_hp_5").css("background-color","red")
}
else if(yusha===0){
    $("#Yusha_hp_1").css("background-color","white")
    $("#Yusha_hp_2").css("background-color","white")
    $("#Yusha_hp_3").css("background-color","white")
    $("#Yusha_hp_4").css("background-color","white")
    $("#Yusha_hp_5").css("background-color","white")

    window.alert("You lose!!!もう一度遊ぶ？");
    location.reload()
}

}
   

document.getElementById("cr_btn").onclick = function() {
    btn =3
    var randomCRyu = Math.floor(Math.random()*2+1);
    var random = Math.floor(Math.random()*3);
    var randomCRka = Math.floor(Math.random()*2+1);
    var randomATka = Math.floor(Math.random()*2+1);
    
    console.log(random,"random値")
  
        console.log(btn,"btn値")
        document.getElementById('btn_audioCR').play();
        $("h4").html("勇者は"+randomCRyu+"回復した").css("color","gray")
        if(random===0){
            $("h3").html("魔王は攻撃力"+randomATka+"の攻撃を繰り出した！").css("color","red")
            yusha=yusha+randomCRyu-randomATka;
            if(yusha>=5){
                yusha=5;
            }
        }else if(random===1){
            $("h3").html("魔王は無駄に防御した！").css("color","gray")
            yusha=yusha+randomCRyu;
            
        }else if(random===2){   
            $("h3").html("魔王は"+randomCRka+"回復した").css("color","gray")
            kaiju=kaiju+randomCRka;
            yusha=yusha+randomCRyu;
        }
        if(kaiju===5){
            console.log("5")
            $("#kaiju_hp_1").css("background-color","green")
            $("#kaiju_hp_2").css("background-color","green")
            $("#kaiju_hp_3").css("background-color","green")
            $("#kaiju_hp_4").css("background-color","green")
            $("#kaiju_hp_5").css("background-color","green")
            console.log(kaiju,"怪獣のHP" )
    }
    else if(kaiju===4){
            $("#kaiju_hp_1").css("background-color","white")
            $("#kaiju_hp_2").css("background-color","green")
            $("#kaiju_hp_3").css("background-color","green")
            $("#kaiju_hp_4").css("background-color","green")
            $("#kaiju_hp_5").css("background-color","green")
            console.log(kaiju,"怪獣のHP" )
    }
    else if(kaiju===3){
            $("#kaiju_hp_1").css("background-color","white")
            $("#kaiju_hp_2").css("background-color","white")
            $("#kaiju_hp_3").css("background-color","green")
            $("#kaiju_hp_4").css("background-color","green")
            $("#kaiju_hp_5").css("background-color","green")
            console.log(kaiju,"怪獣のHP" )
    }
    else if(kaiju===2){
            $("#kaiju_hp_1").css("background-color","white")
            $("#kaiju_hp_2").css("background-color","white")
            $("#kaiju_hp_3").css("background-color","white")
            $("#kaiju_hp_4").css("background-color","red")
            $("#kaiju_hp_5").css("background-color","red")

            console.log(kaiju,"怪獣のHP" )
    }
    else if(kaiju===1){
            $("#kaiju_hp_1").css("background-color","white")
            $("#kaiju_hp_2").css("background-color","white")
            $("#kaiju_hp_3").css("background-color","white")
            $("#kaiju_hp_4").css("background-color","white")
            $("#kaiju_hp_5").css("background-color","red")

    }else if(kaiju===0){

        $("#kaiju_hp_1").css("background-color","white")
        $("#kaiju_hp_2").css("background-color","white")
        $("#kaiju_hp_3").css("background-color","white")
        $("#kaiju_hp_4").css("background-color","white")
        $("#kaiju_hp_5").css("background-color","white")
            
            window.alert("You Win!!!もう一度遊ぶ？");
            location.reload()
    }
    if(yusha===5){
        console.log("5")
        $("#Yusha_hp_1").css("background-color","green")
        $("#Yusha_hp_2").css("background-color","green")
        $("#Yusha_hp_3").css("background-color","green")
        $("#Yusha_hp_4").css("background-color","green")
        $("#Yusha_hp_5").css("background-color","green")
        console.log(yusha,"勇者のHP" )
    }
    else if(yusha===4){
        $("#Yusha_hp_1").css("background-color","white")
        $("#Yusha_hp_2").css("background-color","green")
        $("#Yusha_hp_3").css("background-color","green")
        $("#Yusha_hp_4").css("background-color","green")
        $("#Yusha_hp_5").css("background-color","green")
        console.log(yusha,"勇者のHP" )
    }
    else if(yusha===3){
        $("#Yusha_hp_1").css("background-color","white")
        $("#Yusha_hp_2").css("background-color","white")
        $("#Yusha_hp_3").css("background-color","green")
        $("#Yusha_hp_4").css("background-color","green")
        $("#Yusha_hp_5").css("background-color","green")

        console.log(yusha,"勇者のHP" )
    }
    else if(yusha===2){
        $("#Yusha_hp_1").css("background-color","white")
        $("#Yusha_hp_2").css("background-color","white")
        $("#Yusha_hp_3").css("background-color","white")
        $("#Yusha_hp_4").css("background-color","red")
        $("#Yusha_hp_5").css("background-color","red")

        console.log(yusha,"勇者のHP" )
    }
    else if(yusha===1){
        $("#Yusha_hp_1").css("background-color","white")
        $("#Yusha_hp_2").css("background-color","white")
        $("#Yusha_hp_3").css("background-color","white")
        $("#Yusha_hp_4").css("background-color","white")
        $("#Yusha_hp_5").css("background-color","red")
    }
    else if(yusha===0){
        $("#Yusha_hp_1").css("background-color","white")
        $("#Yusha_hp_2").css("background-color","white")
        $("#Yusha_hp_3").css("background-color","white")
        $("#Yusha_hp_4").css("background-color","white")
        $("#Yusha_hp_5").css("background-color","white")

        window.alert("You lose!!!もう一度遊ぶ？");
        location.reload()
    }

}
                

   
       




