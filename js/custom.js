document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
        t.style.top = n.clientY + "px",
        e.style.left = n.clientX + "px",
        e.style.top = n.clientY + "px",
        i.style.left = n.clientX + "px",
        i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2");

function n(t) {
    e.classList.add("hover")
}

function s(t) {
    e.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-link"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}

function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
//------notice-------
$('.x').hover(function () {
    $(this).find('path').css("animation", "circle 3s ease forwards")
}, function () {
    $(this).find('path').css("animation", "paused")
})
$('.x').click(function(){
    $('.notice').css("display","none")
})
// ----typing--------
new TypeIt("#who", {
        strings: "WHO AM I ?",
        speed: 200,
        waitUntilVisible: true
    })
    .break({
        delay: 500
    })
    .type("I'M WEE", {
        delay: 200
    })
    .delete(1)
    .type("B ", {
        delay: 200
    })
    .type("PUBLISHER.", {
        delay: 800
    })
    .delete(14)
    .type("DASAUL", {
        delay: 200
    })
    .move(-2)
    .delete(1)
    .type("E")
    .move(3)
    .type(" KIM.", {
        delay: 200
    })
    .go();
// --------navi----------
var navi = $('nav ul li ')

navi.click(function () {
    var target = $(this)
    var index = target.index();

    $('html,body').animate({
        scrollTop: $('.cont>section').eq(index).offset().top
    }, 500)
})
// ---------circle---------

$(window).scroll(function () {
    var Cscroll = $(this).scrollTop()

    var sec = $('.cont>section')

    if ($(document).scrollTop() >= 500) {
        $('.menu').css("display", "block")
    } else {
        $('.menu').css("display", "none")
    }

    if (Cscroll >= (sec.eq(1).offset().top) - $(window).height() / 4) {
        $('.path2').css("animation", "circle 3s ease forwards")
    }
    if (Cscroll >= (sec.eq(2).offset().top) - $(window).height() / 4) {
        $('.path2').css("animation", "paused")
        $('.path3').css("animation", "circle 3s ease forwards")
        $('.progress-level').css("animation", "ani 2s")
    } else {
        $('.path3').css("animation", "paused")
    }
    if (Cscroll >= (sec.eq(2).offset().top) - $(window).height() / 3) {
        $('.progress-level').css("animation", "ani 2s")
    } else {
        $('.progress-level').css("animation", "paused")
    }
    if (Cscroll >= (sec.eq(3).offset().top) - $(window).height() / 4) {
        $('.path3').css("animation", "paused")
        $('.path4').css("animation", "circle 3s ease forwards")
    } else {
        $('.path4').css("animation", "paused")
    }
    if (Cscroll >= (sec.eq(4).offset().top) - $(window).height() / 4) {
        $('.path4').css("animation", "paused")
        $('.path5').css("animation", "circle 3s ease forwards")
    } else {
        $('.path5').css("animation", "paused")
    }
})
// ----hover-----
$(navi).hover(function () {
    $(this).find('path').css("animation", "circle 3s ease forwards")
}, function () {
    $(this).find('path').css("animation", "paused")
})
$('.sendbox').hover(function () {
    $(this).find('path').css("animation", "circle 3s ease forwards")
}, function () {
    $(this).find('path').css("animation", "paused")
})

// ---slick slider----
$('.post-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true
});
$('.box1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 8000,
    dots: true
});

// ------popup-----
$('.work1').click(function () {
    $('.pop1').css("display", "block")
    $('.main_bg').css("display", "block")
})
$('.close').click(function () {
    $('.pop1').css("display", "none")
    $('.pop2').css("display", "none")
    $('.pop3').css("display", "none")
    $('.pop4').css("display", "none")
    $('.pop5').css("display", "none")
    $('.pop6').css("display", "none")
    $('.pop7').css("display", "none")
    $('.pop8').css("display", "none")
    $('.pop9').css("display", "none")
    $('.main_bg').css("display", "none")
})
$('.work2').click(function () {
    $('.pop2').css("display", "block")
    $('.main_bg').css("display", "block")
})
$('.work3').click(function () {
    $('.pop3').css("display", "block")
    $('.main_bg').css("display", "block")
})
$('.work4').click(function () {
    $('.pop4').css("display", "block")
    $('.main_bg').css("display", "block")
})
$('.work5').click(function () {
    $('.pop5').css("display", "block")
    $('.main_bg').css("display", "block")
})
$('.work6').click(function () {
    $('.pop6').css("display", "block")
    $('.main_bg').css("display", "block")
})
$('.work7').click(function () {
    $('.pop7').css("display", "block")
    $('.main_bg').css("display", "block")
})
$('.work8').click(function () {
    $('.pop8').css("display", "block")
    $('.main_bg').css("display", "block")
})
$('.work9').click(function () {
    $('.pop9').css("display", "block")
    $('.main_bg').css("display", "block")
})

function check() {
    if (document.form.name.value == "") {
        alert("이름을 입력하세요.");
        return flase;
    }
    if (document.form.email.value == "") {
        alert("메일을 입력하세요.");
        return flase;
    }
    if (document.form.message.value == "") {
        alert("메세지를 입력하세요.");
        return flase;
    }
}