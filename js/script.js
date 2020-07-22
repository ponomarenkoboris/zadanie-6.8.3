let progressBar = $("#myProgressBar");
let progressWidth = $(".progress").width();
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let nowProgress = 0;

btn1.addEventListener('click', event => {
    nowProgress = nowProgress + 1;
    progressBar.attr("style", "width: " + nowProgress + "%");
    console.log('Выполнилось btn1')
    });
btn2.addEventListener('click', event => {
    nowProgress = nowProgress + 3;
    progressBar.attr("style", "width: " + nowProgress + "%");
    console.log('Выполнилось btn2')
    });    
btn3.addEventListener('click', event => {
    nowProgress = nowProgress + 7;
    progressBar.attr("style", "width: " + nowProgress + "%");
    console.log('Выполнилось btn3')
   });    