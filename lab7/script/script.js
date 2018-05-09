var accountList = [];
var index = -1;
function pageLoad(){
    document.getElementById("create_account_btn").onclick = createAccount;
}

function createAccount(){
    accountList[++index] = (function(){
        var account_name = document.getElementById("account_name").value;
        var deposit = document.getElementById("deposit").value;
         return{
           accountName : function(){ return account_name},
           deposit : function(){return deposit}
         };
    }());
  //  var toOutput = "Account name:" + accountList[index].accountName() +
//                     " Balance: " + accountList[index].deposit();
 //    document.getElementById("output").value += toOutput + "\n";

 document.getElementById("output").value = '';
    for(var i = 0; i < accountList.length; i++){
       var toOutput = "Account name:" + accountList[i].accountName() +
                        " Balance: " + accountList[i].deposit();
        document.getElementById("output").value += toOutput + "\n";
    }
}

window.onload = pageLoad;