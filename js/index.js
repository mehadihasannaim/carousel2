$(document).ready(function(){

    // declaring variables

    var first = $("#first");
    var second = $("#second");

    // first section starts here

    first.owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        425:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:4
            
        }
    }          
})

//second section starts here

    second.owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    margin:10,
    nav:true, 
    responsive:{
        0:{
            items:2
        },
        425:{
            items:3
        },
        768:{
            items:5
        },
        
    }           
})
})