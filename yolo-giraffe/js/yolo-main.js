/**
 *
 * @package    YoloTheme
 * @version    1.0.0
 * @author     Administrator <admin@yolotheme.com>
 * @copyright  Copyright (c) 2016, YoloTheme
 * @license    http://opensource.org/licenses/gpl-2.0.php GPL v2 or later
 * @link       http://yolotheme.com
 */

var YOLO = YOLO || {};
(function ($) {
    "use strict";
    var $window = $(window),
        $body = $('body'),
        isRTL = $body.hasClass('rtl') ? true : false,
        deviceAgent = navigator.userAgent.toLowerCase(),
        isMobile = deviceAgent.match(/(iphone|ipod|android|iemobile)/),
        isMobileAlt = deviceAgent.match(/(iphone|ipod|ipad|android|iemobile)/),
        isAppleDevice = deviceAgent.match(/(iphone|ipod|ipad)/),
        isIEMobile = deviceAgent.match(/(iemobile)/);
    YOLO.common = {
        init: function () {
            YOLO.common.owlCarousel();
            YOLO.common.stellar();
            YOLO.common.prettyPhoto();
            YOLO.common.tooltip();
            YOLO.common.popup();
            YOLO.common.accessoriesOwl();
            YOLO.common.subMenuPosition();
            YOLO.common.particles();
        },
        isDesktop: function () {
            var responsive_breakpoint = 991;
            return window.matchMedia('(min-width: ' + (responsive_breakpoint + 1) + 'px)').matches;
        },
        isIE: function () {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            if (msie || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                return true;
            }
            return false;
        },

        particles: function () {
            $('div.particles-js-bubble').each(function () {
                var id      =  $(this).data('id');
                var effect  =  $(this).data('effect');
                var particles_id_1 = id + '-' +  effect;

                var effect = effect.split('-');

                var effect_name  = effect[1];
                var effect_style = effect[0];
                if (effect_style == '0')
                    particlesJS(particles_id_1, {
                    "particles": {
                        "number": {
                            "value": 30, "density": {
                                "enable": true, "value_area": 800
                            }
                        },
                        "color": {
                            "value": ["#f05c5c", "#56d47e", "#ffd338", "#1ec0ff", "#E86363"]
                        },
                        "shape": {
                            "type":effect_name, "stroke": {
                                "width": 0, "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                        },
                        "opacity": {
                            "value":0.5, "random":true, "anim": {
                                "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false
                            }
                        },
                        "size": {
                            "value": 9, "random":true, "anim": {
                                "enable": false, "speed": 5, "size_min": 0.1, "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
                        },
                        "move": {
                            "enable":true, "speed": 1, "direction":"top", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                                "enable": false, "rotateX": 600, "rotateY": 600
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on":"canvas", "events": {
                            "onhover": {
                                "enable": false, "mode": "bubble"
                            },
                            "onclick": {
                                "enable": false, "mode": "repulse"
                            },
                            "resize":true
                        },
                        "modes": {
                            "grab": {
                                "distance":400, "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                            },
                            "repulse": {
                                "distance": 400, "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect":true
                });

                if (effect_style == '1')
                    particlesJS(particles_id_1, {
                    "particles": {
                        "number": {
                            "value": 30, "density": {
                                "enable": true, "value_area": 800
                            }
                        },
                        "color": {
                            "value": ["#f05c5c", "#56d47e", "#ffd338", "#1ec0ff", "#E86363"]
                        },
                        "shape": {
                            "type":effect_name, "stroke": {
                                "width": 0, "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                        },
                        "opacity": {
                            "value":0.5, "random":true, "anim": {
                                "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false
                            }
                        },
                        "size": {
                            "value": 9, "random":true, "anim": {
                                "enable": false, "speed": 5, "size_min": 0.1, "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
                        },
                        "move": {
                            "enable":true, "speed": 1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                                "enable": false, "rotateX": 600, "rotateY": 600
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on":"canvas", "events": {
                            "onhover": {
                                "enable": false, "mode": "bubble"
                            },
                            "onclick": {
                                "enable": false, "mode": "repulse"
                            },
                            "resize":true
                        },
                        "modes": {
                            "grab": {
                                "distance":400, "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                            },
                            "repulse": {
                                "distance": 400, "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect":true
                });

                if (effect_style == '2')
                    particlesJS(particles_id_1, {
                    "particles": {
                        "number": {
                            "value": 30, "density": {
                                "enable": true, "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#FFFFFF",
                        },
                        "shape": {
                            "type":effect_name, "stroke": {
                                "width": 0, "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                        },
                        "opacity": {
                            "value":0.5, "random":true, "anim": {
                                "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false
                            }
                        },
                        "size": {
                            "value": 9, "random":true, "anim": {
                                "enable": false, "speed": 5, "size_min": 0.1, "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
                        },
                        "move": {
                            "enable":true, "speed": 1, "direction":"top", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                                "enable": false, "rotateX": 600, "rotateY": 600
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on":"canvas", "events": {
                            "onhover": {
                                "enable": false, "mode": "bubble"
                            },
                            "onclick": {
                                "enable": false, "mode": "repulse"
                            },
                            "resize":true
                        },
                        "modes": {
                            "grab": {
                                "distance":400, "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                            },
                            "repulse": {
                                "distance": 400, "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect":true
                });
                
            });
        },
        owlCarousel: function () {
            $('div.owl-carousel[data-plugin-options]').each(function () {
                var slider = $(this);
                var rtl = slider.data('rtl'),
                    loop = slider.data('loop');
                var columns = slider.data("plugin-options"),
                    config = {};
                var defaults = {
                    // Most important owl features
                    items: 4,
                    rtl: rtl ? rtl : false,
                    loop: loop ? loop : false,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    autoHeight: true,
                    margin: 0,
                    nav: true,
                    navText: ["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],
                    slideBy: 1,
                };
                if (columns >= 3) {
                    config = {
                        item: columns,
                        margin: 0,
                        responsive: {
                            0: {
                                items: 1
                            },
                            480: {
                                items: 2
                            },

                            768: {
                                items: 3
                            },
                            1200: {
                                items: columns ? parseInt(columns) : 3
                            },
                            1300: {
                                items: columns ? parseInt(columns) : 3
                            }
                        }
                    }
                }
                if (columns < 3) {
                    var config = {
                        item: columns,
                        margin: 0,
                        responsive: {
                            0: {
                                items: 1
                            },
                            991: {
                                items: columns ? parseInt(columns) : 1
                            }
                        }
                    }
                }
                var configs = $.extend(defaults, config);
                // Initialize Slider
                slider.owlCarousel(configs);
            });
        },
        accessoriesOwl: function () {
            $('.accessories .yolo-slider').each(function () {
                var columns = $(this).attr('data-col');
                $(this).owlCarousel({
                    items: columns,
                    margin: 0,
                    rtl: isRTL,
                    responsive: {
                        0: {
                            items: 1
                        },
                        500: {
                            items: 1
                        },
                        991: {
                            items: 2
                        },
                        1200: {
                            items: columns
                        },
                        1300: {
                            items: columns
                        }
                    },
                });
            });
        },
        stellar: function () {
            if ($('.page-title-parallax').length > 0) {
                $.stellar({
                    horizontalScrolling: false,
                    scrollProperty: 'scroll',
                    positionProperty: 'position'
                });
            }
        },
        prettyPhoto: function () {
            var prettyPhoto = $("a[data-rel^='prettyPhoto']");
            if (prettyPhoto.length > 0) {
                prettyPhoto.prettyPhoto({
                    hook: 'data-rel',
                    social_tools: '',
                    animation_speed: 'normal',
                    theme: 'light_square'
                });
            }
        },
        magicLine: function () {
            $('.magic-line-container').each(function () {
                var activeItem = $('li.active', this);
                YOLO.common.magicLineSetPosition(activeItem);
                $('li', this).hover(function () {
                    if (!$(this).hasClass('none-magic-line')) {
                        YOLO.common.magicLineSetPosition(this);
                    }

                }, function () {
                    if (!$(this).hasClass('none-magic-line')) {
                        YOLO.common.magicLineReturnActive(this);
                    }
                });
            });
        },
        magicLineSetPosition: function (item) {
            if (item != null && item != 'undefined') {
                var left = 0;
                if ($(item).position() != null)
                    left = $(item).position().left;
                var marginLeft = $(item).css('margin-left');
                var marginRight = $(item).css('margin-right');

                var topMagicLine = $('.top.magic-line', $(item).parent());
                var bottomMagicLine = $('.bottom.magic-line', $(item).parent());
                if (topMagicLine != null && topMagicLine != 'undefined') {
                    $(topMagicLine).css('left', left);
                    $(topMagicLine).css('width', $(item).width());
                    $(topMagicLine).css('margin-left', marginLeft);
                    $(topMagicLine).css('margin-right', marginRight);
                }
                if (bottomMagicLine != null && bottomMagicLine != 'undefined') {
                    $(bottomMagicLine).css('left', left);
                    $(bottomMagicLine).css('width', $(item).width());
                    $(bottomMagicLine).css('margin-left', marginLeft);
                    $(bottomMagicLine).css('margin-right', marginRight);
                }
            }
        },
        magicLineReturnActive: function (current_item) {
            if (!$(current_item).hasClass('active')) {
                var activeItem = $('li.active', $(current_item).parent());
                YOLO.common.magicLineSetPosition(activeItem);
            }
        },
        popup: function () {
            // Reference: http://stackoverflow.com/questions/1458724/how-to-set-unset-cookie-with-jquery
            if ($('#yolo-popup').length > 0) {
                var et_popup_closed = $.cookie('yolo_popup_closed');
                var popup_effect = $('.yolo-popup').data('effect');
                var popup_delay = $('.yolo-popup').data('delay');

                setTimeout(function () {
                    $('.yolo-popup').magnificPopup({
                        items: {
                            src: '#yolo-popup',
                            type: 'inline'
                        },
                        removalDelay: 500, //delay removal by X to allow out-animation
                        callbacks: {
                            beforeOpen: function () {
                                // this.st.mainClass = 'mfp-zoom-in';
                                this.st.mainClass = popup_effect;
                            },
                            beforeClose: function () {
                                if ($('#showagain:checked').val() == 'do-not-show')
                                    $.cookie('yolo_popup_closed', 'do-not-show', {expires: 1, path: '/'});
                            },
                        }
                        // (optionally) other options
                    });

                    if (et_popup_closed != 'do-not-show' && $('.yolo-popup').length > 0 && $('body').hasClass('open-popup')) {
                        $('.yolo-popup').magnificPopup('open');
                    }
                }, popup_delay);
            }

        },
        tooltip: function () {
            if ($().tooltip && !isMobileAlt) {
                $('.button-has-tooltip').each(function () {
                    // @TODO: need change tooltip when added to cart,...
                    $(this).find('.yith-wcwl-add-button.show', '.product-actions').tooltip({
                        title: yolo_framework_constant.product_wishList
                    });
                    $(this).find('.yith-wcwl-wishlistexistsbrowse.show,.yith-wcwl-wishlistaddedbrowse.show', '.product-actions').tooltip({
                        title: yolo_framework_constant.product_wishList_added
                    });

                    $(this).find('.compare,.add_to_compare').tooltip({
                        title: yolo_framework_constant.product_compare
                    });
                    $(this).find('[data-toggle="tooltip"]').tooltip();

                    $(this).find('.product-quick-view', '.product-actions').tooltip({
                        title: yolo_framework_constant.product_quickview
                    });
                });
            }
        },
        subMenuPosition: function () {
            $("ul.yolo-main-menu li li.menu-item-has-children").mouseenter(function () {
                if ($(this).children('ul').length == 1) {
                    var parent = $(this);
                    var child_menu = $(this).children('ul');
                    if ($(parent).offset().left + $(parent).width() + $(child_menu).width() > $(window).width()) {
                        $(child_menu).css('left', '-' + $(parent).width() + 'px');
                    }
                    else {
                        $(child_menu).css('left', $(parent).width() + 'px');
                    }
                }
            });
        }
    };

    YOLO.page = {
        init: function () {
            YOLO.page.setOverlayVC();
            YOLO.page.backToTop();
            YOLO.page.pageIn();
        },
        events: function () {
            $('.wpb_map_wraper').on('click', YOLO.page.onMapClickHandler);
        },
        setOverlayVC: function () {
            $('[data-overlay-image]').each(function () {
                var $selector = $(this);
                setTimeout(function () {
                    var overlay_image = $selector.data('overlay-image');
                    var overlay_opacity = $selector.data('overlay-opacity');
                    var html = '<div class="overlay-bg-vc" style="background-image: url(' + overlay_image + ') ;background-repeat:repeat; opacity:' + overlay_opacity + '"></div>';
                    $selector.prepend(html);
                }, 100);
            });
            $('[data-overlay-color]').each(function () {
                var $selector = $(this);
                setTimeout(function () {
                    var overlay_color = $selector.data('overlay-color');
                    var html = '<div class="overlay-bg-vc" style="background-color: ' + overlay_color + '"></div>';
                    $selector.prepend(html);
                }, 100);
            });
        },
        backToTop: function () {
            var $backToTop = $('.back-to-top');
            if ($backToTop.length > 0) {
                $backToTop.click(function (event) {
                    event.preventDefault();
                    $('html,body').animate({scrollTop: '0px'}, 800);
                });
                $window.on('scroll', function (event) {
                    var scrollPosition = $window.scrollTop();
                    var windowHeight = $window.height() / 2;
                    if (scrollPosition > windowHeight) {
                        $backToTop.addClass('in');
                    }
                    else {
                        $backToTop.removeClass('in');
                    }
                });
            }
        },
        pageIn: function () {
            setTimeout(function () {
                $('#yolo-site-preload').fadeOut(300);
            }, 300);
        },
        setUnderConstruction: function () {
            var $under_wrap = $('body.under-construction, body.coming-soon');
            if (typeof $under_wrap != 'undefined') {
                var $content = $('.content', $under_wrap[0]);
                if ($(window).width() > 768) {
                    var $wpb_wrapper = $('.wpb_wrapper', $content);
                    var $height = $wpb_wrapper.outerHeight();
                    var $wpadminbar = $('#wpadminbar');
                    var $windowHeight = $(window).height();
                    if ($windowHeight > $wpb_wrapper.outerHeight()) {
                        $content.css('height', $windowHeight);
                    } else {
                        $content.css('height', 'auto');
                    }
                    if ($wpadminbar.length > 0) {
                        $windowHeight = $windowHeight - $wpadminbar.outerHeight();
                    }
                    var $padding = $windowHeight - $height;
                    if ($padding > 0) {
                        $content.css('padding-top', $padding / 2 + 'px');
                        $content.css('padding-bottom', $padding / 2 + 'px');
                    }

                } else {
                    $content.css('height', 'auto');
                }
            }

        }
    };

    YOLO.blog = {
        init: function () {
            YOLO.blog.infiniteScroll();
            YOLO.blog.loadMore();
            YOLO.blog.gridLayout();
            YOLO.blog.masonryLayout();
        },
        jPlayerSetup: function () {
            $('.jp-jplayer').each(function () {
                var $this = $(this),
                    url = $this.data('audio'),
                    title = $this.data('title'),
                    type = url.substr(url.lastIndexOf('.') + 1),
                    player = '#' + $this.data('player'),
                    audio = {};
                audio[type] = url;
                audio['title'] = title;
                $this.jPlayer({
                    ready: function () {
                        $this.jPlayer('setMedia', audio);
                    },
                    swfPath: '../plugins/jquery-jplayer',
                    cssSelectorAncestor: player
                });
            });
            YOLO.blog.processWidthAudioPlayer();
        },
        processWidthAudioPlayer: function () {
            setTimeout(function () {
                $('.jp-audio .jp-type-playlist').each(function () {
                    var _width = $(this).outerWidth() - $('.jp-play-pause', this).outerWidth() - parseInt($('.jp-play-pause', this).css('margin-left').replace('px', ''), 10) - parseInt($('.jp-progress', this).css('margin-left').replace('px', ''), 10) - $('.jp-volume', this).outerWidth() - parseInt($('.jp-volume', this).css('margin-left').replace('px', ''), 10) - 15;
                    $('.jp-progress', this).width(_width);
                });
            }, 100);
        },
        infiniteScroll: function () {
            var contentWrapper = '.blog-inner';
            if ($('.blog-paging-infinity-scroll').length > 0) {
                $('.blog-inner').infinitescroll({
                    navSelector: "#infinite_scroll_button",
                    nextSelector: "#infinite_scroll_button a",
                    itemSelector: "article",
                    loading: {
                        'selector': '#infinite_scroll_loading',
                        'img': yolo_framework_theme_url + '/assets/images/ajax-loader.gif',
                        'msgText': 'Loading...',
                        'finishedMsg': ''
                    }
                }, function (newElements, data, url) {
                    var $newElems = $(newElements).css({
                        opacity: 0
                    });
                    $newElems.imagesLoaded(function () {
                        YOLO.common.owlCarousel();
                        YOLO.common.prettyPhoto();
                        $newElems.animate({
                            opacity: 1
                        });
                        if (($(contentWrapper).hasClass('blog-style-masonry')) || ($(contentWrapper).hasClass('blog-style-grid'))) {
                            $(contentWrapper).isotope('appended', $newElems);
                            setTimeout(function () {
                                $(contentWrapper).isotope('layout');
                            }, 400);
                        }
                    });

                });
            }
        },
        loadMore: function () {
            $('.blog-load-more').on('click', function (event) {
                event.preventDefault();
                var $this = $(this).button('loading');
                var link = $(this).attr('data-href');
                var contentWrapper = '.blog-inner';
                var element = 'article';

                $.get(link, function (data) {
                    var next_href = $('.blog-load-more', data).attr('data-href');
                    var $newElems = $(element, data).css({
                        opacity: 0
                    });
                    $(contentWrapper).append($newElems);
                    $newElems.imagesLoaded(function () {
                        YOLO.common.owlCarousel();
                        YOLO.common.prettyPhoto();
                        $newElems.animate({
                            opacity: 1
                        });
                        if (($(contentWrapper).hasClass('blog-style-masonry')) || ($(contentWrapper).hasClass('blog-style-grid'))) {
                            $(contentWrapper).isotope('appended', $newElems);
                            setTimeout(function () {
                                $(contentWrapper).isotope('layout');
                            }, 400);
                        }

                    });
                    if (typeof(next_href) == 'undefined') {
                        $this.parent().remove();
                    } else {
                        $this.button('reset');
                        $this.attr('data-href', next_href);
                    }

                });
            });
        },
        gridLayout: function () {
            var $blog_grid = $('.blog-style-grid');
            if ($blog_grid.length > 0) {
                $blog_grid.imagesLoaded(function () {
                    $blog_grid.isotope({
                        itemSelector: 'article',
                        layoutMode: "fitRows",
                        isOriginLeft: !isRTL
                    });
                    setTimeout(function () {
                        $blog_grid.isotope('layout');
                    }, 500);
                });
            }
        },
        masonryLayout: function () {
            var $blog_masonry = $('.blog-style-masonry');
            if ($blog_masonry.length > 0) {
                $blog_masonry.imagesLoaded(function () {
                    $blog_masonry.isotope({
                        itemSelector: 'article',
                        layoutMode: "masonry",
                        isOriginLeft: !isRTL
                    });

                    setTimeout(function () {
                        $blog_masonry.isotope('layout');
                    }, 500);
                });
            }
        },
    };

    YOLO.woocommerce = {
        init: function () {
            YOLO.woocommerce.setCartScrollBar();
            YOLO.woocommerce.removeCart();
            YOLO.woocommerce.addCartQuantity();
            YOLO.woocommerce.productSingleTabScroll();
            YOLO.woocommerce.addToCart();
            YOLO.woocommerce.quickView();
            YOLO.woocommerce.compare();
            YOLO.woocommerce.updateShippingMethod();
            YOLO.woocommerce.addToWishlist();
            YOLO.woocommerce.masonryLayout();
            YOLO.woocommerce.spSticky();
        },
        setCartScrollBar: function () {
            if ($('.mini-cart-hover').length > 0) {
                $('.mini-cart-hover .woocommerce-mini-cart').mCustomScrollbar({
                    theme: "rounded-dark",
                    scrollbarPosition: "inside"
                });
            }
        },
        removeCart: function () {
            if ($('#mini-cart-canvas').length > 0) {
                $('#mini-cart-canvas').on('click', '.mini-cart-remove', function () {
                    $(document).ajaxStop(function () {
                        YOLO.header.canvas_cart();
                    })
                });
            } else {
                $(document).on('click', '.mini-cart-remove', function () {
                    setTimeout(function () {
                        YOLO.woocommerce.setCartScrollBar();
                    }, 3000);
                });
            }
        },
        productSingleTabScroll: function () {
            if ($('.menu-one-page').length > 0) {
                $('.menu-one-page').onePageNav({
                    currentClass: 'active',
                    changeHash: false,
                    scrollSpeed: 750,
                    scrollThreshold: 0.5,
                });
            }
        },
        addCartQuantity: function () {
            $(document).off('click', '.quantity .btn-number').on('click', '.quantity .btn-number', function (event) {
                event.preventDefault();
                var type = $(this).data('type'),
                    input = $('input', $(this).parent()),
                    current_value = parseFloat(input.val()),
                    max = parseFloat(input.attr('max')),
                    min = parseFloat(input.attr('min')),
                    step = parseFloat(input.attr('step')),
                    stepLength = 0;
                if (input.attr('step').indexOf('.') > 0) {
                    stepLength = input.attr('step').split('.')[1].length;
                }

                if (isNaN(max)) {
                    max = 100;
                }
                if (isNaN(min)) {
                    min = 0;
                }
                if (isNaN(step)) {
                    step = 1;
                    stepLength = 0;
                }

                if (!isNaN(current_value)) {
                    if (type == 'minus') {
                        if (current_value > min) {
                            current_value = (current_value - step).toFixed(stepLength);
                            input.val(current_value).change();
                        }

                        if (parseFloat(input.val()) <= min) {
                            input.val(min).change();
                            $(this).attr('disabled', true);
                        }
                    }

                    if (type == 'plus') {
                        if (current_value < max) {
                            current_value = (current_value + step).toFixed(stepLength);
                            input.val(current_value).change();
                        }
                        if (parseFloat(input.val()) >= max) {
                            input.val(max).change();
                            $(this).attr('disabled', true);
                        }
                    }
                } else {
                    input.val(min);
                }
            });


            $('input', '.quantity').focusin(function () {
                $(this).data('oldValue', $(this).val());
            });

            $('input', '.quantity').on('change', function () {
                var input = $(this),
                    max = parseFloat(input.attr('max')),
                    min = parseFloat(input.attr('min')),
                    current_value = parseFloat(input.val()),
                    step = parseFloat(input.attr('step'));

                if (isNaN(max)) {
                    max = 100;
                }
                if (isNaN(min)) {
                    min = 0;
                }

                if (isNaN(step)) {
                    step = 1;
                }
                var btn_add_to_cart = $('.add_to_cart_button', $(this).parent().parent().parent());
                if (current_value >= min) {
                    $(".btn-number[data-type='minus']", $(this).parent()).removeAttr('disabled');
                    if (typeof(btn_add_to_cart) != 'undefined') {
                        btn_add_to_cart.attr('data-quantity', current_value);
                    }

                } else {
                    alert('Sorry, the minimum value was reached');
                    $(this).val($(this).data('oldValue'));

                    if (typeof(btn_add_to_cart) != 'undefined') {
                        btn_add_to_cart.attr('data-quantity', $(this).data('oldValue'));
                    }
                }

                if (current_value <= max) {
                    $(".btn-number[data-type='plus']", $(this).parent()).removeAttr('disabled');
                    if (typeof(btn_add_to_cart) != 'undefined') {
                        btn_add_to_cart.attr('data-quantity', current_value);
                    }
                } else {
                    alert('Sorry, the maximum value was reached');
                    $(this).val($(this).data('oldValue'));
                    if (typeof(btn_add_to_cart) != 'undefined') {
                        btn_add_to_cart.attr('data-quantity', $(this).data('oldValue'));
                    }
                }

            });
        },
        addToCart: function () {
            $(document).on('click', '.add_to_cart_button', function () {
                var button = $(this);
                if (!button.hasClass('single_add_to_cart_button') && button.is('.product_type_simple')) {

                    button.addClass("added-spinner");
                    button.find('i').attr('class', 'fa fa-spinner fa-spin');
                }
            });
            $(document).bind("added_to_cart", function (event, fragments, cart_hash, $thisbutton) {
                YOLO.woocommerce.setCartScrollBar();
                var is_single_product = $thisbutton.hasClass('single_add_to_cart_button');
                if (is_single_product) return;
                var button = $thisbutton,
                    buttonWrap = button.parent(),
                    buttonViewCart = buttonWrap.find('.added_to_cart'),
                    addedTitle = buttonViewCart.text(),
                    productWrap = buttonWrap.parent().parent().parent().parent();
                button.remove();
                setTimeout(function () {
                    $('.button-has-tooltip .added_to_cart').each(function () {
                        buttonWrap.tooltip('hide').attr('title', addedTitle).tooltip('fixTitle');
                    });
                }, 500);

                setTimeout(function () {
                    productWrap.removeClass('active');
                }, 700);

            });
        },
        compare: function () {
            $('.add_to_compare').on('click', function (event) {
                event.preventDefault();
                var button = $(this),
                    buttonWrap = button.parent();
                button.find('i').attr('class', 'fa fa-spinner fa-spin');
                var productWrap = buttonWrap.parent().parent().parent().parent();
                if (typeof(productWrap) == 'undefined') {
                    return;
                }
                productWrap.addClass('active');
            });
        },
        quickView: function () {
            var is_click_quick_view = false;
            $('.product-quick-view').on('click', function (event) {
                event.preventDefault();
                if (is_click_quick_view) return;
                is_click_quick_view = true;
                var product_id = $(this).data('product_id'),
                    popupWrapper = '#popup-product-quick-view-wrapper',
                    $icon = $(this).find('i'),
                    iconClass = $icon.attr('class'),
                    productWrap = $(this).parent().parent().parent().parent(),
                    button = $(this);
                productWrap.addClass('active');
                button.addClass('active');
                $icon.attr('class', 'fa fa-spinner fa-spin');
                $.ajax({
                    url: yolo_framework_ajax_url,
                    data: {
                        action: 'product_quick_view',
                        id: product_id
                    },
                    success: function (html) {
                        productWrap.removeClass('active');
                        button.removeClass('active');
                        $icon.attr('class', iconClass);
                        if ($(popupWrapper).length) {
                            $(popupWrapper).remove();
                        }
                        $('body').append(html);
                        $(popupWrapper).modal().hide();
                        $(popupWrapper).fadeIn(500);
                        is_click_quick_view = false;
                    },
                    error: function (html) {
                        is_click_quick_view = false;
                    }
                });

            });
        },
        updateShippingMethod: function () {
            $body.bind('updated_shipping_method', function () {
                $('select.country_to_state, input.country_to_state').change();
            });
        },
        addToWishlist: function () {
            $('.product-item-wrap').on('click', '.add_to_wishlist', function () {
                var button = $(this),
                    buttonWrap = button.parent().parent();
                if (!buttonWrap.parent().hasClass('single-product-function')) {
                    button.addClass("added-spinner");
                    button.append('<i class = "fa fa-spinner fa-spin"></i>');
                }

            });

            $body.bind("added_to_wishlist", function (event, fragments, cart_hash, $thisbutton) {
                var button = $('.added-spinner.add_to_wishlist'),
                    buttonWrap = button.parent().parent();
                if (!buttonWrap.parent().hasClass('single-product-function')) {
                    setTimeout(function () {
                        button.find('i').removeClass('fa fa-spinner fa-spin');
                        button.removeClass('added-spinner');
                    }, 700);
                }
                // Add to update wishlist
                YOLO.woocommerce.updateWishlist();
            });
            // Add to update wishlist on wishlist page
            $('#yith-wcwl-form table tbody tr td a.remove, #yith-wcwl-form table tbody tr td a.add_to_cart_button').on('click', function () {
                var old_num_product = $('#yith-wcwl-form table tbody tr[id^="yith-wcwl-row"]').length;
                var count = 1;
                var time_interval = setInterval(function () {
                    count++;
                    var new_num_product = $('#yith-wcwl-form table tbody tr[id^="yith-wcwl-row"]').length;
                    if (old_num_product != new_num_product || count == 20) {
                        clearInterval(time_interval);
                        YOLO.woocommerce.updateWishlist();
                    }
                }, 500);
            });
        },
        updateWishlist: function () {
            if (typeof yolo_framework_ajax_url == 'undefined') {
                return;
            }

            var wishlist_wrapper = jQuery('.my-wishlist-wrapper');
            if (wishlist_wrapper.length == 0) {
                return;
            }

            wishlist_wrapper.addClass('loading');

            jQuery.ajax({
                type: 'POST',
                url: yolo_framework_ajax_url,
                data: {action: 'update_woocommerce_wishlist'},
                success: function (response) {
                    var first_icon = wishlist_wrapper.children('i.fa:first');
                    wishlist_wrapper.html(response);
                    if (first_icon.length > 0) {
                        wishlist_wrapper.prepend(first_icon);
                    }
                    wishlist_wrapper.removeClass('loading');
                }
            });
            // Add wishlist tooltip for shop default and yl_product_layout plugin
            setTimeout(function () {
                $('.button-has-tooltip').each(function () {
                    $(this).find('.yith-wcwl-wishlistexistsbrowse.show,.yith-wcwl-wishlistaddedbrowse.show').tooltip({
                        title: yolo_framework_constant.product_wishList_added
                    });
                });
            }, 500);
        },
        masonryLayout: function () {
            var $product_masonry = $('.archive-product-wrap .product-listing'), // parent element of .item
                product_style = $('.site-content-archive-product').attr('data-product-style');
            if ($product_masonry.length > 0) {
                $product_masonry.imagesLoaded(function () {
                    $product_masonry.isotope({
                        itemSelector: '.product-item-wrap', // .item
                        layoutMode: product_style,
                        isOriginLeft: !isRTL
                    });

                    setTimeout(function () {
                        $product_masonry.isotope('layout');
                    }, 500);
                });
            }
        },
        spSticky: function () {
            if ($.fn.stick_in_parent && $(window).width() > 767) {
                $(".sp-sticky").stick_in_parent({
                    offset_top: 90
                });
            }
        }
    };

    YOLO.search = {
        up: function ($wrapper) {
            var $item = $('li.selected', $wrapper);
            if ($('li', $wrapper).length < 2) return;
            var $prev = $item.prev();
            $item.removeClass('selected');
            if ($prev.length) {
                $prev.addClass('selected');
            }
            else {
                $('li:last', $wrapper).addClass('selected');
                $prev = $('li:last', $wrapper);
            }
            var $ajaxSearchResult = $(' > ul', $wrapper);

            if ($prev.position().top < $ajaxSearchResult.scrollTop()) {
                $ajaxSearchResult.scrollTop($prev.position().top);
            }
            else if ($prev.position().top + $prev.outerHeight() > $ajaxSearchResult.scrollTop() + $ajaxSearchResult.height()) {
                $ajaxSearchResult.scrollTop($prev.position().top - $ajaxSearchResult.height() + $prev.outerHeight());
            }
        },
        down: function ($wrapper) {
            var $item = $('li.selected', $wrapper);
            if ($('li', $wrapper).length < 2) return;
            var $next = $item.next();
            $item.removeClass('selected');
            if ($next.length) {
                $next.addClass('selected');
            }
            else {
                $('li:first', $wrapper).addClass('selected');
                $next = $('li:first', $wrapper);
            }
            var $ajaxSearchResult = $('> ul', $wrapper);

            if ($next.position().top < $ajaxSearchResult.scrollTop()) {
                $ajaxSearchResult.scrollTop($next.position().top);
            }
            else if ($next.position().top + $next.outerHeight() > $ajaxSearchResult.scrollTop() + $ajaxSearchResult.height()) {
                $ajaxSearchResult.scrollTop($next.position().top - $ajaxSearchResult.height() + $next.outerHeight());
            }
        }
    };

    YOLO.header = {
        timeOutSearch: null,
        init: function () {
            YOLO.header.stickyHeader();
            YOLO.header.menuMobile();
            YOLO.header.events();
            YOLO.header.search();
            YOLO.header.searchAjaxForm();
            YOLO.header.searchCategory();
            YOLO.header.canvasMenu();
        },
        events: function () {
            // Anchors Position
            $("a[data-hash]").on("click", function (e) {
                e.preventDefault();
                YOLO.page.anchorsPosition(this);
                return false;
            });
        },
        windowResized: function () {
            YOLO.header.stickyHeader();

            if (YOLO.common.isDesktop()) {
                $('.toggle-icon-wrapper[data-drop]').removeClass('in');
            }
            var $adminBar = $('#wpadminbar');

            if ($adminBar.length > 0) {
                $body.attr('data-offset', $adminBar.outerHeight() + 1);
            }
            if ($adminBar.length > 0) {
                $body.attr('data-offset', $adminBar.outerHeight() + 1);
            }
            YOLO.header.headerMobilePosition();
        },
        windowLoad: function () {
            YOLO.header.headerMobilePosition();
            YOLO.header.fixStickyLogoSize();
        },
        fixStickyLogoSize: function () {
            // if IE
            if (YOLO.common.isIE()) {
                var $logo = $("header .logo-sticky img");
                if ($logo.length == 0) {
                    return;
                }
                var logo_url = $logo.attr('src');
                if (logo_url.length - logo_url.lastIndexOf('.svg') != 4) {
                    return;
                }
                $.get(logo_url, function (svgxml) {
                    /* now with access to the source of the SVG, lookup the values you want... */
                    var attrs = svgxml.documentElement.attributes;

                    var pic_real_width = attrs.width.value;   // Note: $(this).width() will not
                    var pic_real_height = attrs.height.value; // work for in memory images.

                    if (typeof (pic_real_width) == "string") {
                        pic_real_width = pic_real_width.replace('px', '');
                        pic_real_width = parseInt(pic_real_width, 10);
                    }
                    if (typeof (pic_real_height) == "string") {
                        pic_real_height = pic_real_height.replace('px', '');
                        pic_real_height = parseInt(pic_real_height, 10);
                    }

                    if (pic_real_height > 0) {
                        $logo.css('width', (pic_real_width * 30 / pic_real_height) + 'px');
                    }
                }, "xml");

            }
        },
        headerMobilePosition: function () {
            var top = 0;
            if (($('#wpadminbar').length > 0)) {
                top = $('#wpadminbar').outerHeight();
            }
            if (top > 0 && ($('#wpadminbar').css('position') == 'fixed')) {
                $('.yolo-mobile-header-nav.menu-drop-fly').css('top', top + 'px');
                $('#wpadminbar').css('top', '');
            } else if (top > 0 && ($('#wpadminbar').css('position') == 'absolute')) {
                $('#wpadminbar').css('top', -top + 'px');
                $('.yolo-mobile-header-nav.menu-drop-fly').css('top', '');
            }
            else {
                $('.yolo-mobile-header-nav.menu-drop-fly').css('top', '');
                $('#wpadminbar').css('top', '');
            }
            if ($('.header-2').length || $('.header-3').length) {
                var header_height = $('.yolo-main-header').outerHeight();
                $('.yolo-main-header').css("height", header_height);
            }
        },
        stickyHeader: function () {
            if ($('.header-sticky').length > 0) {
                var topSpacing = 0,
                    $adminBar = $('#wpadminbar');

                if (($adminBar.length > 0) && ($adminBar.css('position') == 'fixed')) {
                    topSpacing = $adminBar.outerHeight();
                }

                $('.header-sticky, .header-mobile-sticky').unstick();
                var topSticky = topSpacing,
                    sticky_effect = $('.header-sticky').attr('data-effect');
                if (YOLO.common.isDesktop()) {
                    topSpacing = -$(window).height() / 3;
                    $('.header-sticky').sticky({
                        topSpacing: topSpacing,
                        topSticky: topSticky,
                        animated: sticky_effect
                    });
                }
                else {
                    $('.header-mobile-sticky').sticky({topSpacing: topSpacing, topSticky: topSticky});
                }
            }
        },
        menuOnePage: function () {
            if ($('.menu-one-page').length > 0) {
                $('.menu-one-page').onePageNav({
                    currentClass: 'active',
                    changeHash: false,
                    scrollSpeed: 750,
                    scrollThreshold: 0.5,
                });
            }
        },
        anchorsPosition: function (obj, time) {
            var target = $(obj).attr("href");
            if ($(target).length > 0) {
                var _scrollTop = $(target).offset().top,
                    $adminBar = $('#wpadminbar');
                if ($adminBar.length > 0) {
                    _scrollTop -= $adminBar.outerHeight();
                }
                $("html,body").animate({scrollTop: _scrollTop}, time, 'swing', function () {

                });
            }
        },
        menuMobile: function () {
            $('.toggle-mobile-menu[data-ref]').click(function (event) {
                event.preventDefault();
                var $this = $(this);
                var data_drop = $this.data('ref');
                $this.toggleClass('in');
                switch ($this.data('drop-type')) {
                    case 'dropdown':
                        $('#' + data_drop).slideToggle();
                        break;
                    case 'fly':
                        $('body').toggleClass('menu-mobile-in');
                        $('#' + data_drop).toggleClass('in');
                        break;
                }

            });

            $('.toggle-icon-wrapper[data-ref]:not(.toggle-mobile-menu)').click(function (event) {
                event.preventDefault();
                var $this = $(this);
                var data_ref = $this.data('ref');
                $this.toggleClass('in');
                $('#' + data_ref).toggleClass('in');
            });

            $('.yolo-mobile-menu-overlay').click(function () {
                $body.removeClass('menu-mobile-in');
                $('#yolo-nav-mobile-menu').removeClass('in');
                $('.toggle-icon-wrapper[data-ref]').removeClass('in');
            });
        },
        canvas_cart: function () {
            var h_cart, h = $(window).height();
            h_cart = h - 250;
            $('.woocommerce-mini-cart').css('max-height', h_cart + 'px');
        },
        canvas_wishlist: function () {
            var h_wishlist, h = $(window).height();
            if ($('#wishlists-canvas').length > 0) {
                h_wishlist = h - 170;
                $('.wishlists-content').css('max-height', h_wishlist + 'px');
            }
        },
        canvasMenu: function () {
            $(document).on('click', function (event) {
                if (($(event.target).closest('nav.yolo-canvas-menu-wrapper').length == 0)
                    && ($(event.target).closest('.canvas-menu-toggle')).length == 0) {
                    $('nav.yolo-canvas-menu-wrapper').removeClass('in');
                }
            });

            $('body').on('click', '.canvas-menu-toggle', function (event) {
                event.preventDefault();
                var data = $(this).data('id');

                if ($('nav.yolo-canvas-menu-wrapper').hasClass('in') && !$('nav.yolo-canvas-menu-wrapper#' + data).hasClass('in')) {
                    $('nav.yolo-canvas-menu-wrapper').removeClass('in')
                }
                $('nav.yolo-canvas-menu-wrapper#' + data).toggleClass('in');
                if ($('#wishlists-canvas').length) {
                    YOLO.header.canvas_wishlist();
                }
                if ($('#mini-cart-canvas').length) {
                    YOLO.header.canvas_cart();
                }

            });

            $('.yolo-canvas-menu-close').on('click', function (event) {
                event.preventDefault();
                $('nav.yolo-canvas-menu-wrapper').removeClass('in');
            });

            // Mini Cart Canvas
            if ($('#mini-cart-canvas').length > 0) {

                $(document).on('click', '.add_to_cart_button', function (event) {
                    setTimeout(function () {
                        $('#mini-cart-canvas').addClass('in');
                        YOLO.header.canvas_cart();
                    }, 5000);
                });
            }

            // Wishlist Canvas 
            if ($('#wishlists-canvas').length) {

                $('#wishlists-canvas').on('click', '.remove_from_wishlist', function (event) {

                    event.preventDefault();
                    var t = $(this),
                        pr = t.parents('tr'),
                        btn = t.parents('#wishlists-canvas').find('.wl-button');
                    $.ajax({
                        url: yolo_framework_app.ajax_url,
                        type: 'GET',
                        dataType: 'html',
                        data: {
                            action: 'remove_from_wishlist'
                        },
                        beforeSend: function () {
                            t.parents('tr').append('<div class="spinner-bg"><span class="spinner is-active" style="background-image: url(' + yolo_framework_app.image_load + ')"></span></div>');
                        },
                        success: function () {

                            if (pr.length) {
                                setTimeout(function () {
                                    pr.remove();
                                }, 300);
                            }
                            t.parents('tr').find('.spinner-bg').remove();

                            var count = t.parents('tbody').find('tr').length;
                            if (count == 1) {
                                btn.addClass('hidden');
                                $('.yolo-wishlist span').html('0');
                            } else {
                                $('.yolo-wishlist span').html(count - 1);
                            }
                        }
                    });
                });

                $('main').on('click', '.remove_from_wishlist', function (event) {
                    event.preventDefault();
                    var t = $(this),
                        hr = t.attr('href'),
                        hrd = jQuery('#wishlists-canvas tbody > tr > .product-remove a').attr('href'),
                        hrd_hr = hrd.split('?')[0],
                        pr = jQuery('#wishlists-canvas a[href="' + hr + '"]').parents('tr');

                    if (hr.indexOf('admin-ajax.php') != -1 && hrd_hr != '') {
                        hr = hrd_hr + '?' + hr.split('?')[1]
                        pr = jQuery('#wishlists-canvas a[href="' + hr + '"]').parents('tr');
                    }

                    if (pr.length) {
                        setTimeout(function () {
                            pr.remove();
                            if (t.parents('tbody').find('tr').length == 1) {
                                jQuery('#wishlists-canvas .wl-button').addClass('hidden');
                            }
                        }, 2000)
                    }

                });

                $('body').on('click', '.add_to_wishlist', function (event) {
                    event.preventDefault();
                    var el = $(this),
                        product_id = el.data('product-id'),
                        el_wrap = $('.add-to-wishlist-' + product_id),
                        data = {
                            add_to_wishlist: product_id,
                            product_type: el.data('product-type'),
                            action: yith_wcwl_l10n.actions.add_to_wishlist_action
                        };

                    if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
                        var wishlist_popup_container = el.parents('.yith-wcwl-popup-footer').prev('.yith-wcwl-popup-content'),
                            wishlist_popup_select = wishlist_popup_container.find('.wishlist-select'),
                            wishlist_popup_name = wishlist_popup_container.find('.wishlist-name'),
                            wishlist_popup_visibility = wishlist_popup_container.find('.wishlist-visibility');

                        data.wishlist_id = wishlist_popup_select.val();
                        data.wishlist_name = wishlist_popup_name.val();
                        data.wishlist_visibility = wishlist_popup_visibility.val();
                    }

                    $.ajax({
                        type: 'POST',
                        url: yith_wcwl_l10n.ajax_url,
                        data: data,
                        dataType: 'json',
                        beforeSend: function () {
                            el.siblings('.ajax-loading').css('visibility', 'visible');
                        },
                        complete: function () {
                            el.siblings('.ajax-loading').css('visibility', 'hidden');
                        },
                        success: function (response) {

                            var form = $('#wishlists-canvas .wishlists-content > form');

                            reload_wishlist_and_adding_elem(el, form);

                        }
                    });

                });

                function reload_wishlist_and_adding_elem(el, form) {
                    var product_id = el.data('product-id'),
                        table = $(document).find('.cart.wishlist_table'),
                        pagination = table.data('pagination'),
                        per_page = table.data('per-page'),
                        wishlist_id = table.data('id'),
                        wishlist_token = table.data('token'),
                        data = {
                            action: yith_wcwl_l10n.actions.reload_wishlist_and_adding_elem_action,
                            pagination: pagination,
                            per_page: per_page,
                            wishlist_id: wishlist_id,
                            wishlist_token: wishlist_token,
                            add_to_wishlist: product_id,
                            product_type: el.data('product-type')
                        };
                    $.ajax({
                        type: 'POST',
                        url: yith_wcwl_l10n.ajax_url,
                        data: data,
                        dataType: 'html',
                        success: function (res) {
                            var obj = $(res),
                                new_form = obj.find('#yith-wcwl-form'); // get new form
                            form.replaceWith(new_form);
                            $('#wishlists-canvas .wl-button').removeClass('hidden');
                        }
                    });
                }
            }
        },
        search: function () {
            var $search_popup = $('#yolo_search_popup_wrapper');
            if (($search_popup.length > 0) && ($('header .icon-search-menu').data('search-type') == 'standard')) {
                var dlg_search = new DialogFx($search_popup[0]);
                $('header .icon-search-menu').click(dlg_search.toggle.bind(dlg_search));

            }

            $('header .icon-search-menu').click(function (event) {
                event.preventDefault();
                if ($(this).data('search-type') == 'ajax') {
                    YOLO.header.searchPopupOpen();
                }
                else {
                    $('#yolo_search_popup_wrapper input[type="text"]').focus();
                }
            });

            $('.yolo-dismiss-modal, .modal-backdrop', '#yolo-modal-search').click(function () {
                YOLO.header.searchPopupClose();
            });
            $('.yolo-search-wrapper button > i.ajax-search-icon').click(function () {
                s_search();
            });

            // Search Ajax
            $('#search-ajax', '#yolo-modal-search').on('keyup', function (event) {
                if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) {
                    return;
                }

                var keys = ["Control", "Alt", "Shift"];
                if (keys.indexOf(event.key) != -1) return;
                switch (event.which) {
                    case 27:	// ESC
                        YOLO.header.searchPopupClose();
                        break;
                    case 38:	// UP
                        s_up();
                        break;
                    case 40:	// DOWN
                        s_down();
                        break;
                    case 13:	//ENTER
                        var $item = $('li.selected a', '#yolo-modal-search');
                        if ($item.length == 0) {
                            event.preventDefault();
                            return false;
                        }
                        s_enter();
                        break;
                    default:
                        clearTimeout(YOLO.header.timeOutSearch);
                        YOLO.header.timeOutSearch = setTimeout(s_search, 500);
                        break;
                }
            });

            function s_up() {
                var $item = $('li.selected', '#yolo-modal-search');
                if ($('li', '#yolo-modal-search').length < 2) return;
                var $prev = $item.prev();
                $item.removeClass('selected');
                if ($prev.length) {
                    $prev.addClass('selected');
                }
                else {
                    $('li:last', '#yolo-modal-search').addClass('selected');
                    $prev = $('li:last', '#yolo-modal-search');
                }
                if ($prev.position().top < $('#yolo-modal-search .ajax-search-result').scrollTop()) {
                    $('#yolo-modal-search .ajax-search-result').scrollTop($prev.position().top);
                }
                else if ($prev.position().top + $prev.outerHeight() > $('#yolo-modal-search .ajax-search-result').scrollTop() + $('#yolo-modal-search .ajax-search-result').height()) {
                    $('#yolo-modal-search .ajax-search-result').scrollTop($prev.position().top - $('#yolo-modal-search .ajax-search-result').height() + $prev.outerHeight());
                }
            }

            function s_down() {
                var $item = $('li.selected', '#yolo-modal-search');
                if ($('li', '#yolo-modal-search').length < 2) return;
                var $next = $item.next();
                $item.removeClass('selected');
                if ($next.length) {
                    $next.addClass('selected');
                }
                else {
                    $('li:first', '#yolo-modal-search').addClass('selected');
                    $next = $('li:first', '#yolo-modal-search');
                }
                if ($next.position().top < $('#yolo-modal-search .ajax-search-result').scrollTop()) {
                    $('#yolo-modal-search .ajax-search-result').scrollTop($next.position().top);
                }
                else if ($next.position().top + $next.outerHeight() > $('#yolo-modal-search .ajax-search-result').scrollTop() + $('#yolo-modal-search .ajax-search-result').height()) {
                    $('#yolo-modal-search .ajax-search-result').scrollTop($next.position().top - $('#yolo-modal-search .ajax-search-result').height() + $next.outerHeight());
                }
            }

            function s_enter() {
                var $item = $('li.selected a', '#yolo-modal-search');
                if ($item.length > 0) {
                    window.location = $item.attr('href');
                }
            }

            function s_search() {
                var keyword = $('input[type="search"]', '#yolo-modal-search').val();
                if (keyword.length < 3) {
                    $('.ajax-search-result', '#yolo-modal-search').html('');
                    return;
                }
                $('.ajax-search-icon', '#yolo-modal-search').addClass('fa-spinner fa-spin');
                $('.ajax-search-icon', '#yolo-modal-search').removeClass('fa-search');
                $.ajax({
                    type: 'POST',
                    data: 'action=result_search&keyword=' + keyword,
                    url: yolo_framework_ajax_url,
                    success: function (data) {
                        $('.ajax-search-icon', '#yolo-modal-search').removeClass('fa-spinner fa-spin');
                        $('.ajax-search-icon', '#yolo-modal-search').addClass('fa-search');
                        var html = '';
                        var html_view_more = '';
                        if (data) {
                            var items = $.parseJSON(data);
                            if (items.length) {
                                html += '<ul>';
                                if (items[0]['id'] == -1) {
                                    html += '<li>' + items[0]['title'] + '</li>';
                                }
                                else {
                                    $.each(items, function (index) {
                                        if (this['id'] == -2) {
                                            html_view_more = '<div class="search-view-more">' + this['title'] + '</div>';
                                        }
                                        else {
                                            if (index == 0) {
                                                html += '<li class="selected">';
                                            }
                                            else {
                                                html += '<li>';
                                            }
                                            if (this['title'] == null || this['title'] == '') {
                                                html += '<a href="' + this['guid'] + '">' + this['date'] + '</a>';
                                            }
                                            else {
                                                html += '<a href="' + this['guid'] + '">' + this['title'] + '</a>';
                                                html += '<span>' + this['date'] + ' </span>';
                                            }
                                            html += '</li>';
                                        }
                                    });
                                }


                                html += '</ul>';
                            }
                            else {
                                html = '';
                            }
                        }
                        $('.ajax-search-result', '#yolo-modal-search').html(html + html_view_more);
                        $('#yolo-modal-search .ajax-search-result').scrollTop(0);
                    },
                    error: function (data) {
                        $('.ajax-search-icon', '#yolo-modal-search').removeClass('fa-spinner fa-spin');
                        $('.ajax-search-icon', '#yolo-modal-search').addClass('fa-search');
                    }
                });
            }
        },
        searchPopupOpen: function () {
            if (!$('#yolo-modal-search').hasClass('in')) {
                $('body').addClass('overflow-hidden');
                $('#yolo-modal-search').show();
                setTimeout(function () {
                    $('#yolo-modal-search').addClass('in');
                }, 300);

                if ($('#search-ajax', '#yolo-modal-search').length > 0) {
                    $('#search-ajax', '#yolo-modal-search').focus();
                    $('#search-ajax', '#yolo-modal-search').val('');
                }
                else {
                    $('#search-standard', '#yolo-modal-search').focus();
                    $('#search-standard', '#yolo-modal-search').val('');
                }

                $('.ajax-search-result', '#yolo-modal-search').html('');
            }
        },
        searchPopupClose: function () {
            if ($('#yolo-modal-search').hasClass('in')) {
                $('#yolo-modal-search').removeClass('in');
                setTimeout(function () {
                    $('#yolo-modal-search').hide();
                    $('body').removeClass('overflow-hidden');
                }, 300);
            }
        },
        searchAjaxForm: function () {
            var $wrapper = $('header.yolo-main-header .search-box-wrapper');
            var $form_wrapper = $('header.yolo-main-header .search-box-wrapper form.search-type-ajax');
            $($window).click(function (event) {
                if ($(event.target).closest('header.yolo-main-header .search-box-wrapper').length == 0) {
                    $('.ajax-search-result', $wrapper).remove();
                    $('> input[type="text"]', $form_wrapper).val('');
                }
            });
            $form_wrapper.submit(function () {
                return false;
            });

            $('> input[type="text"]', $form_wrapper).on('keyup', function (event) {
                if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) {
                    return;
                }

                var keys = ["Control", "Alt", "Shift"];
                if (keys.indexOf(event.key) != -1) return;
                switch (event.which) {
                    case 27:	// ESC
                        remove_search_result();
                        break;
                    case 38:	// UP
                        YOLO.search.up($wrapper);
                        break;
                    case 40:	// DOWN
                        YOLO.search.down($wrapper);

                        break;
                    case 13:	//ENTER
                        s_enter();
                        break;
                    default:
                        clearTimeout(YOLO.header.timeOutSearch);
                        YOLO.header.timeOutSearch = setTimeout(s_search, 500);
                        break;
                }

                function remove_search_result() {
                    $('.ajax-search-result', $wrapper).remove();
                    $('> input[type="text"]', $form_wrapper).val('');
                }

                function s_enter() {
                    var $item = $('li.selected a', $wrapper);

                    if ($item.length > 0) {
                        window.location = $item.attr('href');
                    }
                }

                function s_search() {
                    var keyword = $('input[type="text"]', $form_wrapper).val();
                    if (keyword.length < 3) {
                        if ($('.ajax-search-result', $form_wrapper).length == 0) {
                            $($form_wrapper).append('<div class="ajax-search-result"></div>');
                        }
                        var hint_message = $wrapper.attr('data-hint-message');

                        $('.ajax-search-result', $wrapper).html('<ul><li class="no-result">' + hint_message + '</li></ul>');
                        return;
                    }
                    $('button > i', $form_wrapper).addClass('fa-spinner fa-spin');
                    $('button > i', $form_wrapper).removeClass('fa-search');
                    $.ajax({
                        type: 'POST',
                        data: 'action=result_search&keyword=' + keyword,
                        url: yolo_framework_ajax_url,
                        success: function (data) {
                            $('button > i', $wrapper).removeClass('fa-spinner fa-spin');
                            $('button > i', $wrapper).addClass('fa-search');
                            var html = '';
                            var html_view_more = '';
                            if (data) {
                                var items = $.parseJSON(data);
                                if (items.length) {
                                    html += '<ul>';
                                    if (items[0]['id'] == -1) {
                                        html += '<li class="no-result">' + items[0]['title'] + '</li>';
                                    }
                                    else {
                                        $.each(items, function (index) {
                                            if (this['id'] == -2) {
                                                html_view_more = '<div class="search-view-more">' + this['title'] + '</div>';
                                            }
                                            else {
                                                if (index == 0) {
                                                    html += '<li class="selected">';
                                                }
                                                else {
                                                    html += '<li>';
                                                }
                                                if (this['title'] == null || this['title'] == '') {
                                                    html += '<a href="' + this['guid'] + '">' + this['date'] + '</a>';
                                                }
                                                else {
                                                    html += '<a href="' + this['guid'] + '">' + this['title'] + '</a>';
                                                }
                                                html += '</li>';
                                            }
                                        });
                                    }
                                    html += '</ul>';
                                }
                                else {
                                    html = '';
                                }
                            }
                            if ($('.ajax-search-result', $form_wrapper).length == 0) {
                                $($form_wrapper).append('<div class="ajax-search-result"></div>');
                            }

                            $('.ajax-search-result', $wrapper).html(html + html_view_more);
                            $('.ajax-search-result ul', $wrapper).scrollTop(0);
                        },
                        error: function (data) {
                            $('button > i', $wrapper).removeClass('fa-spinner fa-spin');
                            $('button > i', $wrapper).addClass('fa-search');
                        }
                    });
                }
            });
        },
        searchCategory: function () {
            $('.search-with-category').each(function () {
                var $wrapperLeft = $('.form-search-left', this);
                var $wrapper = $(this);
                $(document).on('click', function (event) {
                    if ($(event.target).closest('.form-search-left', $wrapper).length === 0) {
                        $(' > ul', $wrapperLeft).slideUp();
                    }
                    if (($(event.target).closest('.form-search-right,.ajax-search-result', $wrapper).length === 0)) {
                        $('.ajax-search-result', $wrapper).remove();
                        $('input', $wrapper).val('');
                    }
                });

                var sHtml = '<li><span data-id="-1" data-value="' + $('> span', $wrapperLeft).text() + '">[' + $('> span', $wrapperLeft).text() + ']</span></li>';
                $('> ul', $wrapperLeft).prepend(sHtml);

                // Select Category
                $('> span', $wrapperLeft).on('click', function () {
                    $('> ul', $(this).parent()).slideToggle();
                });

                // Category Click
                $('li > span', $wrapperLeft).on('click', function () {
                    var $this = $(this);
                    var id = $this.attr('data-id');
                    var text = '';
                    if (typeof ($this.attr('data-value')) != "undefined") {
                        text = $this.attr('data-value');
                    }
                    else {
                        text = $this.text();
                    }

                    var $cate_current = $('> span', $wrapperLeft);
                    $cate_current.text(text);
                    $cate_current.attr('data-id', id);
                    $(' > ul', $wrapperLeft).slideUp();
                });

                // Search process
                //--------------------------------------------------------------------------------------
                var $inputSearch = $('input', $wrapper);
                $inputSearch.on('keyup', function (event) {
                    var s_timeOut_search = null;
                    if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) {
                        return;
                    }

                    var keys = ["Control", "Alt", "Shift"];
                    if (keys.indexOf(event.key) != -1) return;
                    switch (event.which) {
                        case 37:
                        case 39:
                            break;
                        case 27:	// ESC
                            $('.ajax-search-result', $wrapper).remove();
                            $(this).val('');
                            break;
                        case 38:	// UP
                            YOLO.search.up($('.ajax-search-result', $wrapper));
                            break;
                        case 40:	// DOWN
                            YOLO.search.down($('.ajax-search-result', $wrapper));
                            break;
                        case 13:	//ENTER
                            var $item = $('.ajax-search-result li.selected a', $wrapper);
                            if ($item.length == 0) {
                                event.preventDefault();
                                return false;
                            }

                            window.location = $item.attr('href');

                            event.preventDefault();
                            return false;
                        default:
                            clearTimeout(s_timeOut_search);
                            s_timeOut_search = setTimeout(function () {
                                s_search($wrapper);
                            }, 500);
                            break;
                    }
                });
            });

            function s_search($wrapper) {
                var keyword = $('input[type="text"]', $wrapper).val();
                if (keyword.length < 3) {
                    if ($('.ajax-search-result', $wrapper).length == 0) {
                        $($wrapper).append('<div class="ajax-search-result"></div>');
                    }
                    var hint_message = $wrapper.attr('data-hint-message');

                    $('.ajax-search-result', $wrapper).html('<ul><li class="no-result">' + hint_message + '</li></ul>');
                    return;
                }
                $('button > i', $wrapper).addClass('fa-spinner fa-spin');
                $('button > i', $wrapper).removeClass('fa-search');
                $.ajax({
                    type: 'POST',
                    data: 'action=result_search_product&keyword=' + keyword + '&cate_id=' + $('.form-search-left > span', $wrapper).attr('data-id'),
                    url: yolo_framework_ajax_url,
                    success: function (data) {
                        $('button > i', $wrapper).removeClass('fa-spinner fa-spin');
                        $('button > i', $wrapper).addClass('fa-search');
                        var html = '';
                        var sHtmlViewMore = '';
                        if (data) {
                            var items = $.parseJSON(data);
                            if (items.length) {
                                html += '<ul>';
                                if (items[0]['id'] == -1) {
                                    html += '<li class="no-result">' + items[0]['title'] + '</li>';
                                }
                                else {
                                    $.each(items, function (index) {
                                        if (this['id'] == -2) {
                                            sHtmlViewMore = '<div class="search-view-more">' + this['title'] + '</div>';
                                        }
                                        else {
                                            if (index == 0) {
                                                html += '<li class="selected">';
                                            }
                                            else {
                                                html += '<li>';
                                            }
                                            html += '<a href="' + this['guid'] + '">';
                                            html += this['thumb'];
                                            html += this['title'] + '</a>';
                                            html += '<div class="price">' + this['price'] + '</div>';
                                            html += '</li>';
                                        }

                                    });
                                }
                                html += '</ul>';
                            }
                            else {
                                html = '';
                            }
                        }
                        if ($('.ajax-search-result', $wrapper).length == 0) {
                            $($wrapper).append('<div class="ajax-search-result"></div>');
                        }

                        $('.ajax-search-result', $wrapper).html(html + sHtmlViewMore);

                        $('.ajax-search-result li', $wrapper).hover(function () {
                            $('.ajax-search-result li', $wrapper).removeClass('selected');
                            $(this).addClass('selected');
                        });

                        $('.ajax-search-result ul', $wrapper).scrollTop(0);

                    },
                    error: function (data) {
                        $('button > i', $wrapper).removeClass('fa-spinner fa-spin');
                        $('button > i', $wrapper).addClass('fa-search');
                    }
                });
            }
        }
    };
    YOLO.onReady = {
        init: function () {
            YOLO.common.init();
            YOLO.header.init();
            YOLO.page.init();
            YOLO.blog.init();
            YOLO.woocommerce.init();
        }
    };
    YOLO.onLoad = {
        init: function () {
            YOLO.header.windowLoad();
        }
    };
    YOLO.onResize = {
        init: function () {
            YOLO.header.windowResized();
        }
    };
    YOLO.onScroll = {
        init: function () {
        }
    };
    $(window).resize(YOLO.onResize.init);
    $(document).ready(YOLO.onReady.init);
    $(window).on('load', YOLO.onLoad.init);
})(jQuery);

jQuery(window).load(function(){
    "use strict";
    jQuery(window).resize(function() {
            if(jQuery(window).width() > 1200){
                var footer_height = jQuery('.yolo-footer-wrapper').height();
                jQuery('#yolo-footer-wrapper').height(footer_height);
            } else {
                jQuery('#yolo-footer-wrapper').height('auto');
            }
        });
        if(jQuery(window).width() > 1200){
            var footer_height = jQuery('.yolo-footer-wrapper').height();
            jQuery('#yolo-footer-wrapper').height(footer_height);
        }
});