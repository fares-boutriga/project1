var loginImages=["https://as2.ftcdn.net/v2/jpg/05/65/58/29/1000_F_565582939_X8ywZSlUauqK2vvWBAxOSQm0eAH5Bz1a.webp",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5urK3FeNunW09bUwPmgD7su79PE5npVXuw&usqp=CAU"]
var emails=["user1@yahoo.fr","user2.gmail.com"]
var password=["1111","222"]
var a=document.getElementsByTagName("img")[0]


/*change the login icon*/
// console.log(document.getElementById("email").value);
$(document).ready(function(){
    $("#email").keypress(function(){
        var res=document.getElementById("email").value
        if (emails.includes(res)){
            a.src=loginImages[0]
            console.log("hi", res)
        }else{
            a.src=loginImages[1]
        }
    })
})
$("button").on("click",function(){
    var emailValue=document.getElementById("email").value
    var passwordValue=document.getElementById("password").value
    if (emailValue===emails[0]&&passwordValue===password[0]||emailValue===emails[1]&&passwordValue===password[1]){
        console.log("hello");
         $("a").attr("href", "./index.html")
    }else{
        console.log("uhuihulhiuj",emailValue,passwordValue);
        alert("The password is incorrect")
      
    }
})

// console.log($("a")[0].pathname);

