//  togle follow and favourite
const logo = document.getElementById("insta-logo");
let followFavourite = document.getElementById("fol-fav");

logo.addEventListener('click',() => {
    followFavourite.classList.toggle('logo-toggle');
});

//  liking post event on double click
const postImg = document.getElementById("post-img");

let likeCommentLeft = document.getElementById("lc-left");   // parent selected
const likeimg = document.getElementById("like-stock");  //stock heart icon selected

let imglikerCounter = 0;
let heartIconCounter = 0;

 likeimg.addEventListener('click',() => {
     heartIconCounter ++;
     console.log(heartIconCounter)
     console.log(likeimg)
     
     if ( heartIconCounter == 1 ) {
       likeimg.src = "/img/red.png";
     }
     else if ( likeimg.src = "/img/red.png") {
           likeimg.src = "heart.png"
     }

     if (heartIconCounter == 2) {
        likeimg.src = "heart.png";
        heartIconCounter = 0;
     }
    
     
 });

postImg.addEventListener('click',() => {
       imglikerCounter++;
       console.log(imglikerCounter)
       
      
       if ( imglikerCounter == 2 ) {
       
        likeimg.src = "/img/red.png";
        imglikerCounter = 0;
    }
       
});

