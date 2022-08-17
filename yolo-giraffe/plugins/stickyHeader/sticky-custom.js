// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

      
;(function($) {
    "use strict";
    
    var defaults = {
            topSpacing: 0,
		    topSticky: 0,
            animated: 'slideDown,slideUp',
            bottomSpacing: 0,
            className: 'is-sticky',
            wrapperClassName: 'yolo-sticky-wrapper',
            center: false,
            getWidthFrom: '',
            responsiveWidth: false
        },
        $window = $(window),
        $document = $(document),
        sticked = [],
        windowHeight = $window.height(),
        scroller = function() {
            var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

	        var stickyInClearTimeOut = null,
		        stickyOutClearTimeOut = null;

            for (var i = 0; i < sticked.length; i++) {
                var s = sticked[i],
                    elementTop = s.stickyWrapper.offset().top,
                    etse = elementTop - s.topSpacing - extra + 400,
                    sticky_effect = s.animated.split(',');
                if (scrollTop <= etse) {
                    if ((s.currentTop !== null) && s.stickyElement.hasClass('sticky-on')) {
	                    s.stickyElement.removeClass('sticky-on');
                        s.stickyElement.removeClass(sticky_effect['0']);
                        s.stickyElement.addClass(sticky_effect['1']);
	                    s.stickyElement.removeClass('sticky-in');
	                    s.stickyElement.addClass('sticky-out');

	                    clearTimeout(stickyOutClearTimeOut);
	                    stickyOutClearTimeOut = setTimeout(function() {
		                    
                            s.stickyElement.removeClass(sticky_effect['1']);
                            s.stickyElement.removeClass('sticky-out');
		                    s.stickyElement
			                    .css('position', '')
			                    .css('top', '');

		                    s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
		                    s.currentTop = null;
		                    if ((typeof(s.change) != "undefined") && (s.change != null)) {
			                    s.change();
		                    }
	                    }, 300);
                    }
                
                }else {
                    var newTop = documentHeight - s.stickyElement.outerHeight()
                        - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                    if (newTop < 0) {
                        newTop = newTop + s.topSticky;
                    } else {
                        newTop = s.topSticky;
                    }
                    if (s.currentTop != newTop) {
	                    clearTimeout(stickyInClearTimeOut);
	                    clearTimeout(stickyOutClearTimeOut);
	                    s.stickyElement.addClass('sticky-on');
                        s.stickyElement.addClass(sticky_effect['0']);
	                    s.stickyElement.addClass('sticky-in');
                        s.stickyElement.removeClass(sticky_effect['1']);
	                    s.stickyElement.removeClass('sticky-out');
	                    stickyInClearTimeOut = setTimeout(function () {
		                    s.stickyElement.removeClass('sticky-in');
	                    }, 500);

                        s.stickyElement
                            .css('position', 'fixed')
                            .css('top', newTop);

                        if (typeof s.getWidthFrom !== 'undefined') {
                            s.stickyElement.css('width', $(s.getWidthFrom).width());
                        }
	                    s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);

                        s.currentTop = newTop;
	                    if ((typeof(s.change) != "undefined") && (s.change != null)) {
		                    s.change();
	                    }
                    }
                }
            }
        },
        resizer = function() {
            windowHeight = $window.height();

            for (var i = 0; i < sticked.length; i++) {
                var s = sticked[i];
                if (typeof s.getWidthFrom !== 'undefined' && s.responsiveWidth === true) {
                    s.stickyElement.css('width', $(s.getWidthFrom).width());
                }
            }
        },
        methods = {
            init: function(options) {
                var o = $.extend({}, defaults, options);
                return this.each(function() {
                    var stickyElement = $(this);

                    var stickyId = stickyElement.attr('id');
                    var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
                    var wrapper = $('<div></div>')
                        .attr('id', stickyId + '-yolo-sticky-wrapper')
                        .addClass(o.wrapperClassName);
                    stickyElement.wrapAll(wrapper);

                    if (o.center) {
                        stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
                    }

                    if (stickyElement.css("float") == "right") {
                        stickyElement.css({"float":"none"}).parent().css({"float":"right"});
                    }

                    var stickyWrapper = stickyElement.parent();
                    var stickyHeight = stickyElement.outerHeight(true);

                    if (stickyHeight > 0) {
                        stickyWrapper.css('height', stickyElement.outerHeight(true));
                    }
                    sticked.push({
                        topSpacing: o.topSpacing,
	                    topSticky: o.topSticky,
                        animated: o.animated,
                        bottomSpacing: o.bottomSpacing,
                        stickyElement: stickyElement,
                        currentTop: null,
                        stickyWrapper: stickyWrapper,
                        className: o.className,
                        getWidthFrom: o.getWidthFrom,
                        responsiveWidth: o.responsiveWidth,
	                    change: o.change
                    });
                });
            },
            update: scroller,
            unstick: function(options) {
                return this.each(function() {
                    var unstickyElement = $(this);

                    var removeIdx = -1;
                    for (var i = 0; i < sticked.length; i++)
                    {
                        if (sticked[i].stickyElement.get(0) == unstickyElement.get(0))
                        {
                            removeIdx = i;
                        }
                    }
                    if(removeIdx != -1)
                    {
                        sticked.splice(removeIdx,1);
                        unstickyElement.unwrap();
                        unstickyElement.removeAttr('style');
                    }
                });
            }
        };

    // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    $.fn.sticky = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };

    $.fn.unstick = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method ) {
            return methods.unstick.apply( this, arguments );
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }

    };
    $(function() {
        setTimeout(scroller, 0);
    });
})(jQuery);