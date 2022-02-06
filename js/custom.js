$(function (){
    // vanubox part
    $('.venobox').venobox({
      titleattr: 'data-title'
  });
    $('.slick_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      dots:true,
    });

    $('.screen_item_slide').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      arrows:false,
      centerPadding:0,
      dots:true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        
      ]
    });
  

    // slick part 2
      
    $('.feedback_all').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.feedback_img_slider'
    });
    $('.feedback_img_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.feedback_all',
      dots: true,
      centerMode: true,
      centerPadding:0,
      focusOnSelect: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
           
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
           
          }
        },
        
      ]
    });
    
    $(window).on("load", function(){
      $(".preloder").delay(4000).fadeOut(1500)
         })

      // backto top

      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 50){
          $('.top_icn i').fadeIn(500)
        }
        else{
          $('.top_icn i').fadeOut(500)
        }
        if(scrolling > 100){
          $('.main_manu').addClass("add_menu")
        }else{
          $('.main_manu').removeClass("add_menu")
        }
      })


      $(".top_icn i").click(function(){
        $('html, body').animate({
          scrollTop:0
        }, 1000)
      })
    });
    // back to top part start

    // pre 
    


    // dark mode part start

    var theme = document.getElementById("theme");
    theme.onclick = function(){
      document.body.classList.toggle("dark_theme");
    }
      
    
    // dark mode part end

      
    