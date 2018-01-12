//init Varaible
var img=document.getElementById("image");
var myModal=document.getElementById("myModal");
var myImg=document.getElementById("myimg");
// onclick on image creat event
img.onclick=function(){
myModal.style.display="block";
  myImg.src=this.src;
}

// onclikc close modal
myModal.onclick=function(){
  this.style.display="none";
}