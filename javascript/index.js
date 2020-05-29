$(document).ready(function() {
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{enabled:true},
    image:{titleSrc:"desc"}
  
  
  });
});

const searchBox= document.getElementById("search-box");
const images= document.getElementsByTagName("A");

function filter(){
   for (let i=0;i<images.length;i++){
     if(images[i].title.includes(searchBox.value)){
       images[i].style.display="inline-block";
     }
   
   else{
    images[i].style.display="none";
   }
}
}

searchBox.addEventListener("keyup",filter);


