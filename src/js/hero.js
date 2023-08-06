$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1, // Number of items to display at a time
        loop: true, // Enable loop
        autoplay: true, // Enable auto play
        autoplayTimeout: 5000, // Auto play interval in milliseconds
        nav: true, // Show navigation buttons (next and previous)
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"], // Customize navigation icons
    });
});
