






// console.log(random,"ランダムな数字の箱")
document.getElementById("gu_btn").onclick = function() {
    var random = Math.floor(Math.random()*3);
    if(random===0){
        console.log("グー")
        $("#pc_hands").html("グー").css("color","black")
        $("#judgment").html("あいこ").css("color","green")
    }else if(random==1){
        console.log("チョキ")
        $("#pc_hands").html("チョキ").css("color","black")
        $("#judgment").html("勝ち").css("color","blue")
    }else if(random==2){
        console.log("パー")
        $("#pc_hands").html("パー").css("color","black")
        $("#judgment").html("負け").css("color","red")
    }
        // ここに#buttonをクリックしたら発生させる処理を記述する
  };

  document.getElementById("cho_btn").onclick = function() {
    var random = Math.floor(Math.random()*3);
    if(random===0){
        console.log("グー")
        $("#pc_hands").html("グー").css("color","black")
        $("#judgment").html("負け").css("color","red")
    }else if(random==1){
        console.log("チョキ")
        $("#pc_hands").html("チョキ").css("color","black")
        $("#judgment").html("あいこ").css("color","green")
    }else if(random==2){
        console.log("パー")
        $("#pc_hands").html("パー").css("color","black")
        $("#judgment").html("勝ち").css("color","blue")
    }
        // ここに#buttonをクリックしたら発生させる処理を記述する
  };

  document.getElementById("par_btn").onclick = function() {
    var random = Math.floor(Math.random()*3);
    if(random===0){
        console.log("グー")
        $("#pc_hands").html("グー").css("color","black")
        $("#judgment").html("勝ち").css("color","blue")
    }else if(random==1){
        console.log("チョキ")
        $("#pc_hands").html("チョキ").css("color","black")
        $("#judgment").html("負け").css("color","red")
    }else if(random==2){
        console.log("パー")
        $("#pc_hands").html("パー").css("color","black")
        $("#judgment").html("あいこ").css("color","green")
    }
        // ここに#buttonをクリックしたら発生させる処理を記述する
  };