/**
 * Created by liljay on 2016/7/9.
 */
/*
$(function(){
    var defaults = {
            "toggle": ">li.uk-parent > a[href='#']",
            "lists": ">li.uk-parent > ul",
            "multiple": false
    };
    $('[data-uk-nav]').each(function(){
        var $el = $(this);
        $el.on("click.uk.nav", defaults.toggle, function(e) {
            e.preventDefault();
            var ele = $(this);
            open($el, ele.parent()[0] == $el[0] ? ele : ele.parent("li"));
        });

        /!*下级菜单用div包装*!/
        $el.find(defaults.lists).each(function() {
            var $ele   = $(this),
                parent = $ele.parent(),
                active = parent.hasClass("uk-active");

            $ele.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');
            parent.data("list-container", $ele.parent()[active ? 'removeClass':'addClass']('uk-hidden'));

            // Init ARIA
            parent.attr('aria-expanded', parent.hasClass("uk-open"));

            if (active) open($el, parent, true);
        });

    });
    function open ($el, li, noanimation){
        var element = $el, $li = $(li), $container = $li.data('list-container');

        if (!defaults.multiple) {

            element.children('.uk-open').not(li).each(function() {

                var ele = $(this);

                if (ele.data('list-container')) {
                    ele.data('list-container').stop().animate({height: 0}, function() {
                        $(this).parent().removeClass('uk-open').end().addClass('uk-hidden');
                    });
                }
            });
        }

        $li.toggleClass('uk-open');

        // Update ARIA
        $li.attr('aria-expanded', $li.hasClass('uk-open'));

        if ($container) {

            if ($li.hasClass('uk-open')) {
                $container.removeClass('uk-hidden');
            }

            if (noanimation) {

                $container.stop().height($li.hasClass('uk-open') ? 'auto' : 0);

                if (!$li.hasClass('uk-open')) {
                    $container.addClass('uk-hidden');
                }

                //this.trigger('display.uk.check');

            } else {

                $container.stop().animate({
                    height: ($li.hasClass('uk-open') ? getHeight($container.find('ul:first')) : 0)
                }, function() {

                    if (!$li.hasClass('uk-open')) {
                        $container.addClass('uk-hidden');
                    } else {
                        $container.css('height', '');
                    }

                    //$this.trigger('display.uk.check');
                });
            }
        }
    }


    function getHeight(ele) {
        var $ele = $(ele), height = "auto";

        if ($ele.is(":visible")) {
            height = $ele.outerHeight();
        } else {
            var tmp = {
                position: $ele.css("position"),
                visibility: $ele.css("visibility"),
                display: $ele.css("display")
            };

            height = $ele.css({position: 'absolute', visibility: 'hidden', display: 'block'}).outerHeight();

            $ele.css(tmp); // reset element
        }

        return height;
    }

});*/
