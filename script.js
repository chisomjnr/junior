document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("closeButton");

    // Function to show the popup
    const showPopup = () => {
        popup.classList.add("show");
    };

    // Function to hide the popup
    const hidePopup = () => {
        // popup.classList.add("hide"),
        popup.style.animation = "slide-down 0.3s";
        setTimeout(() => {
            popup.remove();
        }, 300);
        // popup.classList.remove('show');
    };


   

    // Show the popup after 5 seconds
    setTimeout(showPopup, 1800);

    closeButton.addEventListener("click", () => {
        hidePopup();
    });

    document.addEventListener("click", (event) => {
        if (!popup.contains(event.target) && event.target !== closeButton) {
            hidePopup();
        }
    });
    

 

});





document.getElementById("emailButton").addEventListener("click", function() {
    const receiverEmail = "chisomechebelemjunior@gmail.com";
    const subject = "(Your Subject Goes Here Einstein";
    const body = "Hello Junior, From Your Portfolio...";

    const mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});



$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Portfolio", "Space", "Universe", "World", "Galaxy",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [" Web Developer", "Mobile Developer", "Graphics Designer", "Web Designer", "Digital Artist", "Youtuber", "Freelancer", "Video Editor","2D Animator",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});