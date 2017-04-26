document.addEventListener('DOMContentLoaded', function(){
    //menue rozwijane
    var topMenu = document.querySelector('ul');
    var li = topMenu.querySelectorAll('nav>ul>li');
    
    for(var i=0; i<li.length; i++) {
        li[i].addEventListener('mouseover', function(){
            var ul = this.querySelector('ul');
            if(ul !== null) {
                ul.classList.remove('hidden');
            }
        });    
    }
    
    for(var i=0; i<li.length; i++) {
        li[i].addEventListener('mouseout', function(){
            var ul = this.querySelector('ul');
            if(ul !== null) {
                ul.classList.add('hidden');
            }
        });
    }
    //znikające opisy
    var products = document.querySelectorAll('.products');
   
   for(var i=0; i<products.length; i++) {
       products[i].addEventListener('mouseover', function(){
           
            var div = this.querySelector('div');
            if(div !== null) {
                div.classList.add('hidden');
            }
        });     
   }
    
    for(var i=0; i<products.length; i++) {
       products[i].addEventListener('mouseout', function(){
           
            var div = this.querySelector('div');
            if(div !== null) {
                div.classList.remove('hidden');
            }
        });     
   }
    //slider
    var buttonNext = document.querySelector(".right");
    var buttonPrev = document.querySelector(".left");
    var slider = document.querySelector('.slider');
    var lis = slider.querySelectorAll("li");
    var index = 0;
    
    console.log(buttonNext, buttonPrev,slider, lis, index);
    
    lis[index].classList.remove("hidden");
    
    buttonNext.addEventListener('click', function () {

        lis[index].classList.add("hidden");
        index++;
        if (index === lis.length) {
            index = 0;
        }
        
        lis[index].classList.remove("hidden");
    });
    
     buttonPrev.addEventListener('click', function () {
                 
        lis[index].classList.add("hidden");
        index--;
        if (index < 0) {
            index = lis.length - 1;
        }

        lis[index].classList.remove("hidden");
    });
});