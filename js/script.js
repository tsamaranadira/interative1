$(document).ready(function(){ 
    /*hide and show*/
    $('.click1').click(function(event) { 
        event.stopPropagation (); 
        $(".popup1").slideToggle("fast"); 

    }); 

    $('.popup1').on("click1", function (event){ 
        event.stopPropagation(); 
    }); 

    $('.click2').click(function(event) { 
        event.stopPropagation (); 
        $(".popup2").slideToggle("fast"); 

    }); 

    $('.popup2').on("click2", function (event){ 
        event.stopPropagation(); 
    }); 

    $('.click3').click(function(event) { 
        event.stopPropagation (); 
        $(".popup3").slideToggle("fast"); 

    }); 

    $('.popup3').on("click3", function (event){ 
        event.stopPropagation(); 
    }); 

    $('.click4').click(function(event) { 
        event.stopPropagation (); 
        $(".popup4").slideToggle("fast"); 

    }); 

    $('.popup4').on("click4", function (event){ 
        event.stopPropagation(); 
    }); 

    $('.help').click(function(event) { 
        event.stopPropagation (); 
        $(".popup").slideToggle("fast"); 

    }); 

    $('.popup').on("help", function (event){ 
        event.stopPropagation(); 
    }); 







}); 