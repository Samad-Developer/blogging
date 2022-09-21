const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(function(){
    $togglecollapse = $('.toggle-collapse')
    $mblpages = $('.mblpages');
    $mbllinks = $('.mbllinks');
    
    $togglecollapse.click(function(){
      $mblpages.toggleClass("showpages");
      $mbllinks.toggleClass("showlinks");
    })

    // owl carousel
   $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    responsive:responsive,
    autoplayTimeout:3000,
    dots:false
   });
$('.move-up').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000)
})
// animation on scroll instance
AOS.init();
})