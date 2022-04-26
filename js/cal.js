$(function () {
    $('.plus').click(function () {
        if ($(".price_value").val() > 9) {
            alert("10개 초과 구매가 불가능합니다.");
            $(".price_value").val(10);
        } else {
            $(".price_value").val(parseInt($(".price_value").val()) + 1);
        }
    });

    $('.minus').click(function () {
        if ($(".price_value").val() < 2) {
            alert("1개 이상 구매가 가능합니다.");
            $(".price_value").val(2);
        }
        $(".price_value").val(parseInt($(".price_value").val()) - 1);

    });
});

$(function () {
    $('.prev').click(function () {
        $('.arrow li:last').prependTo('.arrow');
        $('.arrow').css('margin-left', -951.5);
        $('.arrow').stop().animate({ marginLeft: 0 }, 800)
    });

    $('.next').click(function () {
        $('.arrow').stop().animate({ marginLeft: -951.5 }, 800, function () {
            $('.arrow li:first').appendTo('.arrow');
            $('.arrow').css({ marginLeft: 0 })
        });
    });
});