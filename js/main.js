$(document).ready(function () {
    resize();
    //var myScroll = new IScroll('#bodyWrapper');

    $('.internalLink').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length && $(target).hasClass("hidden")) {
                //myScroll.scrollToElement('#bodyWrapper');
                $(".slide").addClass("hidden");
                $(target).removeClass("hidden");
                $(".navItem").css({
                    "text-decoration": "none"
                });
                resize();

            }
            if (!$(this).hasClass("navItem")) {
                var navItems = $(".navItem").toArray();
                for (i = 0; i < navItems.length; i++) {
                    if ($(navItems[i]).attr('href') === $(this).attr('href')) {
                        $(navItems[i]).delay(700).queue(function (next) {
                            $(this).css({
                                "text-decoration": "underline"
                            });
                            next();
                        });
                        break;
                    }
                }
            } else {
                $(this).css({
                    "text-decoration": "underline"
                });
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
});

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
