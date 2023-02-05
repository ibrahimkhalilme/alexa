/*================= Moon Function =================*/
$(document).ready(function(){
    /*========== Moon Bg Dark ===========*/
   $('.moon').click(function(){
       $(this).hide();
       $('.sun').hide();
       $('.sun').show();
        $('body').css({background: '#252525'});
        /*header*/
        $('.header .main-text h1,.navbar-light .navbar-nav .nav-link,.navbar-light .navbar-brand').css({color: '#fff'});
        $('.header .main-text span,.header .main-text p,.scroll-down span').css({color: 'rgba(255, 255, 255, 0.8)'});
        $('.header .social-icons .fab,.social-icons-2 .fab').css({color: '#6c55e0'});
        /*Offcanvas*/
        $('.offcanvas').css({background: '#000'});
        $('.offcanvas .menu-grid .menu-card').css({background: '#252525'});
        $('.offcanvas .menu-grid .menu-card ion-icon, .offcanvas .menu-grid .menu-card span,.offcanvas .text-reset svg').css({color: '#fff'});
        /*navbar 2*/
        $('.navbar-2').css({background: '#000'});
        $('.offcanvas-header .btn-close').css({border: '.3rem solid #fff'});
        /* About*/
        $('.about h2').css({color: '#fff'});
        $('.about .about-info p,.about .about-text, .about span,.about p').css({color: 'rgba(255, 255, 255, 0.8)'});
        /*Skills*/
        $('.skills h2').css({color: '#fff'});
        $('.skills p').css({color: 'rgba(255, 255, 255, 0.8)'});
        $('.skills .accordion .accordion-button:not(.collapsed),.skills .accordion-body,.skills .accordion .accordion-item,.accordion-header, .skills .accordion .accordion-header button').css({background: '#000'});
        $('.skills span, .skills h3').css({color: '#fff'});
        $('.skills .accordion ion-icon').css({color: '#6c55e0'});
        /*Qualification*/
        $('.qualification h2,.qualification-tittle').css({color: '#fff'});
        $('.qualification p, .qualification span').css({color: 'rgba(255, 255, 255, 0.8)'});
        $('.qualification .qualification-btn-1 .fas').css({color: '#6c55e0'});
        /*Services*/
        $('.services h2,.services .card-body h4').css({color: '#fff'});
        $('.services p,.services .modal-close-btn,.services .modal-text').css({color: 'rgba(255, 255, 255, 0.8)'});
        $('.services .card,.services .modal-content').css({background: '#000'});
        /*portfolio*/
        $('.portfolio h2,.portfolio .portfolio-grid-item h3').css({color: '#fff'});
        $('.portfolio p').css({color: 'rgba(255, 255, 255, 0.8'});
        /*portfolio img*/
        $('.portfolio-img .port-img-grid').css({background: '#000'});
        /*testimonial*/
        $('.testimonial h2, .testimonial h3').css({color: '#fff'});
        $('.testimonial p, .testimonial span').css({color: 'rgba(255, 255, 255, 0.8)'});
        $('.testimonial .card').css({background: '#000'});
        /*contact*/
        $('.contact h2,.contact h4,.contact .form-control').css({color: '#fff'});
        $('.contact p').css({color: 'rgba(255, 255, 255, 0.8)'});
        $('.form-control').css({background: '#000'});
        /*Footer*/
        $('footer').css({background: '#000'});
        $('.footer h2, .footer .ib').css({color: '#6c55e0'});
        //Main navigation
        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $('.navbar-1').css({"boxShadow":"0 .1rem .3rem rgb(0 0 0 / 46%)", "background":"#000"});
            }else{
                $('.navbar-1').css({"boxShadow":"none", "background":"transparent"});
            }
        });
           //Navbar for mobile
        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $('.navbar-2').css({"boxShadow":"0 0 1.1rem rgb(0 0 0 / 46%)"});
            }else{
                $('.navbar-2').css({"boxShadow":"none", "background":"#000"});
            }
        });
});

/*====================== Sun Function =============================*/

/*========================= Sun Bg Light =================================*/

$(document).ready(function(){
    $('.sun').click(function(){
        $(this).hide();
        $('.moon').show();
        $('body').css({background: '#fff'});
        /*navbar*/
        $('.navbar-light .navbar-nav .nav-link').css({color: '#333333'});
        $('.navbar-light .navbar-brand').css({color: '#333333'});
        //header
        $('.header .social-icons .fab').css({color: 'rgba(0, 0, 0, 0.685)'});
        $('.header .main-text h1').css({color: '#333333'});
        $('.header .main-text p,.header .main-text span, .scroll-down span').css({color: 'rgba(26, 25, 25, 0.685)'});
        $('.navbar-2').css({background: '#fff'});
        //Offcanvas
        $('.offcanvas').css({background: '#fff'});
        $('.offcanvas .menu-grid .menu-card').css({background: '#fff'});
        $('.offcanvas .menu-grid .menu-card ion-icon, .offcanvas .menu-grid .menu-card span,.offcanvas .text-reset svg').css({color: '#333333'});
        /*About*/
        $('.about h2').css({color: '#333333'});
        $('.about .about-info p,.about p, .about span').css({color: 'rgba(22, 21, 21, 0.685)'});
        /*Skills*/
        $('.skills h2,.skills .accordion h3').css({color: '#333333'});
        $('.skills p,.skills .accordion .accordion-item span').css({color: 'rgba(22, 21, 21, 0.685)'});
        $('.skills .accordion .accordion-button:not(.collapsed),.skills .accordion-body,.accordion-item,.accordion-header, .skills .accordion .accordion-header button').css({background:'#fff'});
        $('.accordion-header').css({background: '#fff'});
        /*Qualification*/
        $('.qualification h2').css({color: '#333333'});
        $('.qualification p,.qualification span').css({color: 'rgba(22, 21, 21, 0.685)'});
        /*Services*/
        $('.services h2,.services .card .card-body h4,.services .modal-close-btn,.services .modal-text').css({color: '#333333'});
        $('.services p').css({color: 'rgba(22, 21, 21, 0.685)'});
        $('.services .card,.modal-content').css({background: '#fff'});
        /*portfolio*/
        $('.portfolio h2,.portfolio .portfolio-grid-item h3,.testimonial .uk-position-relative .card h3').css({color: '#333333'});
        $('.portfolio p,.portfolio span').css({color: 'rgba(22, 21, 21, 0.685)'})
        /*portfolio img*/
        $('.portfolio-img .card').css({background: '#6c55e0'});
        $('.testimonial h2').css({color: '#333333'});
        $('.testimonial .uk-position-relative .card').css({background: '#fff'});
        $('.testimonial p,.testimonial span').css({color: 'rgba(22, 21, 21, 0.685)'});
        /*contact*/
        $('.contact h2,.contact h4').css({color: '#333333'});
        $('.contact p,.contact span').css({color: 'rgba(22, 21, 21, 0.685)'});
        $('.form-control').css({background: '#fff',color: '#000'});
        /*Footer*/
        $('footer').css({background: '#6c55e0'});
        $('.footer h2, .footer .ib').css({color: '#fff'});


/*================== Navbar scroll effect ===============================*/

        //Main navbar 
        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $('.navbar-1').css({"boxShadow":"0 .1rem .3rem rgb(0 0 0 / 46%)", "background":"#fff"});
            }else{
                $('.navbar-1').css({"boxShadow":"none", "background":"transparent"});
            }
        });
            
        //Navbar for mobile
        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $('.navbar-2').css({"boxShadow":"0 0 1.1rem rgb(0 0 0 / 46%)"});
            }else{
                $('.navbar-2').css({"boxShadow":"none", "background":"#fff"});
            }
        });   
    });
});





/*===================== To Top Effect =========================*/

$(document).ready(function(){
        // Scroll Top
        $(window).scroll(function(){
            if($(window).scrollTop() > 300){
                $('.scroll .scroll-top').css({"opacity":"1", "pointer-events":"auto"});
            }else{
                $('.scroll .scroll-top').css({"opacity":"0", "pointer-events":"none"});
            }
        });
    
        //Main navbar 
        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $('.navbar-1').css({"boxShadow":"0 .1rem .3rem rgb(0 0 0 / 46%)", "background":"#fff"});
            }else{
                $('.navbar-1').css({"boxShadow":"none", "background":"transparent"});
            }
        });
    
            //Navbar for mobile
            $(window).scroll(function(){
                if($(window).scrollTop() > 100){
                    $('.navbar-2').css({"boxShadow":"0 0 1.1rem rgb(0 0 0 / 46%)"});
                }else{
                    $('.navbar-2').css({"boxShadow":"none", "background":"#fff"});
                }
            });
    });
});



/*===================== Nav Items =========================*/

$(document).ready(function(){
    $('.navbar-1 ul .nav-link-1').click(function(){
        $(this).addClass("add-class");
        $('.navbar-1 ul li .nav-link-2, .navbar-1 ul li .nav-link-3, .navbar-1 ul li .nav-link-4, .navbar-1 ul li .nav-link-5, .navbar-1 ul li .nav-link-6').removeClass("add-class");
    });

    $('.navbar-1 ul .nav-link-2').click(function(){
        $(this).addClass("add-class");
        $('.navbar-1 ul li .nav-link-1, .navbar-1 ul li .nav-link-3, .navbar-1 ul li .nav-link-4, .navbar-1 ul li .nav-link-5, .navbar-1 ul li .nav-link-6').removeClass("add-class");
    });

    $('.navbar-1 ul .nav-link-3').click(function(){
        $(this).addClass("add-class");
        $('.navbar-1 ul li .nav-link-1, .navbar-1 ul li .nav-link-2, .navbar-1 ul li .nav-link-4, .navbar-1 ul li .nav-link-5, .navbar-1 ul li .nav-link-6').removeClass("add-class");
    });

    $('.navbar-1 ul .nav-link-4').click(function(){
        $(this).addClass("add-class");
        $('.navbar-1 ul li .nav-link-1, .navbar-1 ul li .nav-link-2, .navbar-1 ul li .nav-link-3, .navbar-1 ul li .nav-link-5, .navbar-1 ul li .nav-link-6').removeClass("add-class");
    });

    $('.navbar-1 ul .nav-link-5').click(function(){
        $(this).addClass("add-class");
        $('.navbar-1 ul li .nav-link-1, .navbar-1 ul li .nav-link-2, .navbar-1 ul li .nav-link-3, .navbar-1 ul li .nav-link-4, .navbar-1 ul li .nav-link-6').removeClass("add-class");
    });

    $('.navbar-1 ul .nav-link-6').click(function(){
        $(this).addClass("add-class");
        $('.navbar-1 ul li .nav-link-1, .navbar-1 ul li .nav-link-2, .navbar-1 ul li .nav-link-3, .navbar-1 ul li .nav-link-4, .navbar-1 ul li .nav-link-5').removeClass("add-class");
    });
});

/*========================================== END ===========================================*/
