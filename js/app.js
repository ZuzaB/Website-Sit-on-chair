document.addEventListener('DOMContentLoaded', function(){
    
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
});