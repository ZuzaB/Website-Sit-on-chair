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

    for(var i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseout', function(){
            var ul = this.querySelector('ul');
            if(ul !== null) {
                ul.classList.add('hidden');
            }
        });
    }
    //znikające opisy
    var products = document.querySelectorAll('.products');

   for (var i = 0; i < products.length; i++) {
       products[i].addEventListener('mouseover', function(){

            var div = this.querySelector('div');
            if(div !== null) {
                div.classList.add('hidden');
            }
        });
   }

    for (var i = 0; i < products.length; i++) {
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

//kalkulator
    var listArrows = document.getElementsByClassName('list_arrow');
    var transportCheck = document.getElementById('transport');
    var productTitle = document.getElementsByClassName('title');
    var productColor = document.getElementsByClassName('color');
    var productPattern = document.getElementsByClassName('pattern');
    var productTransport = document.getElementsByClassName('transport');
    var sum = document.getElementsByClassName('sum');
    var sumTotal = sum[0].querySelector('strong');
    var transportLabel = transportCheck.nextElementSibling;

    function totalPrice (){
      var sumPrice = parseInt( 0 + productTitle[1].innerText) + parseInt(0 + productColor[1].innerText * 1) + parseInt(0 + productPattern[1].innerText) + parseInt(0 + productTransport[1].innerText);
      sumTotal.innerText = sumPrice;
    }

    transportLabel.addEventListener('click', function(){
       var checkTransport = transportCheck.checked;
       var priceTransport = parseInt(transportCheck.dataset.transportPrice);
        if ( checkTransport === false ) {
          productTransport[0].innerText = 'Transport';
          productTransport[1].innerText = priceTransport;
        }else {
          productTransport[0].innerText = '';
          productTransport[1].innerText = '';
        }
        totalPrice();
    });

    for (var i = 0; i < listArrows.length; i++) {
       listArrows[i].addEventListener('click', function (){
         var listPanel = this.nextElementSibling;
         listPanel.classList.toggle('hidden');

         var listLabel = this.previousElementSibling;
         var listText = listLabel.innerText;
         var listItems = listPanel.querySelectorAll('li');

         for (var i = 0; i< listItems.length; i++) {
           listItems[i].addEventListener('click', function(){
             var productInfo = this.innerText;
             var productPrice = parseInt(this.dataset.price);

             switch (listText) {
               case 'Wybierz rodzaj':
                 productTitle[0].innerText = productInfo;
                 productTitle[1].innerText = productPrice;
                 break;
               case 'Wybierz kolor':
                   productColor[0].innerText = productInfo;
                   productColor[1].innerText = productPrice;
                   break;
               case 'Wybierz materiał':
                     productPattern[0].innerText = productInfo;
                     productPattern[1].innerText = productPrice;
                     break;
               default:
             }
             listLabel.innerText = productInfo;
             listLabel.style.color = '#575757';
             totalPrice();
           });
         }
      });
    }
});
