$(function () {
    var winH = $(window).height(),
    upperH =  $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));

    // features work shuffle
    $('.features-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .image').css('opacity', 1);
        } else {
            $('.shuffle-images .image').css('opacity', '0.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
});

// start number count
window.onscroll = function() {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            box.forEach((number) => startCount(number));
        }
        started = true;
    }
    
    }
// End number count
// start number count
let box = document.querySelectorAll(".col .number");
let section = document.querySelector(".stats");
let started = false; // Function Started ? No
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(count);
    }
}, 2000 / goal);
}
