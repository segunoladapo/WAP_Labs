//alert("Hello  world");
var timer =null;
function setSizeTimer() {
      timer = setInterval(buttonclick, 500)
}
function buttonclick(){
   // alert("Hello world");
    //document.getElementById("mytextarea").style.fontSize = "24px";
   
    var elem = document.getElementById("mytextarea");
    var myfont = window.getComputedStyle(elem, null).getPropertyValue("font-size");
    var fontsize = parseInt(myfont);
    if(fontsize >= 35){
        clearInterval(timer);  
        timer = null;
    }
    console.log(parseInt(myfont));
    elem.style.fontSize = (fontsize * (3 / 4 )+ 2) + "pt"; 
    
}
function checkboxchecked(){
    //  alert("You checked Bling");
    var id = document.getElementById("check");
    var text = document.getElementById("mytextarea");
    if(id.checked == true){
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        text.style.fontWeight = "bold";
        text.style.color = "green";
        text.style.textDecoration ="underline";
        
    }else{
        text.style.fontWeight = "normal";
        document.body.style.background = "white";
    }
   

}
function malko(){
    var mymalko = document.getElementById("mytextarea").value;
    var splittedword = mymalko.split(" ");
    console.log(splittedword);
    var outputvalue = "";
    for(var i = 0; i<splittedword.length; i++){
        if(splittedword[i].length >= 5){
            splittedword[i] = "malkovich";
        }
        outputvalue += splittedword[i] + " ";
    }
    document.getElementById("mytextarea").value = outputvalue.trim();

}
function igpay(){
    var myigpay = document.getElementById("mytextarea").value;
    var splittedword = myigpay.split(" ");
    console.log(splittedword);
    var outputvalue = "";
    for(var i = 0; i<splittedword.length; i++){
        if(splittedword[i].charAt(0) == 'a'|| splittedword[i].charAt(0) == 'e'|| splittedword[i].charAt(0) == 'i'|| splittedword[i].charAt(0) == 'o'|| splittedword[i].charAt(0) == 'u'){
            splittedword[i].trim();
            splittedword[i] += "ay";
        }
        else{
            var firstchar = splittedword[i].charAt(0);
            console.log(firstchar);
            splittedword[i] = splittedword[i].substring(1, splittedword[i].length+1) + firstchar  + "ay";
        }
            
        outputvalue += splittedword[i] + " " ;

    }
    document.getElementById("mytextarea").value = outputvalue.trim();
}
