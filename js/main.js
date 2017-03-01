$(document).ready(function () {
    checkCookie()
    resize();

    $('.internalLink').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length && $(target).hasClass("hidden")) {
                changePage(target);
                adjustUnderline(this, !$(this).hasClass("navItem"));
            }

            if ($(window).width() <= 767) {
                $("#sidebar").removeClass("active");
                $("#hamburger").removeClass("active");
            }
        }
        return false;
    });
    $(window).resize(function () {
        if ($(window).width() > 767) {
            $("#hamburger").removeClass("active");
            $("#sidebar").removeClass("active");
        }
        resize();
    });

    $("#hamburger").click(function () {
        $('.bt-menu-trigger').toggleClass('active');
        $("#sidebar").toggleClass("active");
    });
    $(".slide").click(function () {
        if ($("#sidebar").hasClass("active") && $("#hamburger").hasClass("active")) {
            $("#sidebar").removeClass("active");
            $("#hamburger").removeClass("active");
        }
    });

    $(".slide").on("swipe", function () {
        $("#hamburger").addClass("active");
        $("#sidebar").addClass("active");
    });

    $(".more-link").click(function () {
        var content = getProjectBio($(this).attr('target'));
        vex.dialog.alert({
            unsafeMessage: content
        });
    });

    $(window).on("load", function () {
        $("body").animate({
            scrollTop: 0
        });
        $("#load-screen").fadeOut("fast");
    });
});

function changePage(target) {
    $(target).scrollTop();
    $(".slide").addClass("hidden");
    $(target).removeClass("hidden");
    $(".navItem").css({
        "text-decoration": "none"
    });
    resize();
    Cookies.set('page', $(target).selector, { expires: 1/24 });

}

function adjustUnderline(link, nav){
    if (nav) {
        var navItems = $(".navItem").toArray();
        for (i = 0; i < navItems.length; i++) {
            if ($(navItems[i]).attr('href') === $(link).attr('href') || $(navItems[i]).attr('href') === link) {
                $(navItems[i]).delay(700).queue(function (next) {
                    $(navItems[i]).css({
                        "text-decoration": "underline"
                    });
                    next();
                });
                break;
            }
        }
    } else {
        $(link).css({
            "text-decoration": "underline"
        });
    }
}

function checkCookie() {
    var page = Cookies.get('page');
    if ($(page).hasClass('hidden')) {
        changePage(page);
        adjustUnderline(page, true)
    }
}

function resize() {
    resizeProjects();
    resizeHome();
}

function resizeProjects() {
    $(".project-img").height($(".project-img").width());
    var max = 0;
    $(".project").each(function () {
        if ($(this).height() > max)
            max = $(this).height();
    });
    $(".project").height(max);
}


function resizeHome() {
    $('#home').css({
        'height': '',
        'overflow-y': 'visible'
    });
    $(".slide").each(function () {
        if (!$(this).hasClass('hidden')) {
            if ($(this).height() > $(window).height()) {
                $('#home').css({
                    'height': $(this).height()
                });
            } else {
                $('#home').css({
                    'height': $(window).height(),
                    'overflow-y': 'hidden'
                });
            }
        }
    });
}
