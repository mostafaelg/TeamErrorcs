$(function () {
    $(".container").height($(window).innerHeight());
    $(window).on('resize', function () {
        $(".container").height($(window).innerHeight());
    });

    (function animateDotts() {
        $(".dot:first-of-type").animate({
            'opacity': '1'
        }, 600, function () {
            $(".dot:nth-of-type(2)").animate({
                'opacity': '1'
            }, 600, function () {
                $(".dot:nth-of-type(3)").animate({
                    'opacity': '1'
                }, 600, function () {
                        $(".dot").animate({
                            'opacity': '0'
                    },400);
                    animateDotts();
                })
            })
        })

    })();
})