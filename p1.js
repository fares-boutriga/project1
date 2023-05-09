/*page 1*/
var lincVido='./Movis/[EgyBest].Fast.And.Furious.9.2021.BluRay.720p.x264.mp4'
var video=document.getElementById("v1")
var clickImg=document.getElementById("m1")
console.log("fares",clickImg);
 console.log("hiohoi", $("#v1") );
 var res=$("#v1")[0].outerHTML
function fares(){
    
    $(".del").hide() 
  $("#v1").append( "<video id='vv'  controls><source src='" + lincVido + "' type='video/mp4'></video>")
  
  console.log("rffjk");
}
