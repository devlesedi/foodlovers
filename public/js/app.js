'use strict'

$(function() {
	
	var w = window,
		LESH;

	if (typeof w.lesh === 'undefined') w.lesh = {};
	if (typeof w.lesh.Mobile === 'undefined') w.lesh.Mobile = {};
	if (typeof w.lesh.Mobile.fn === 'undefined') w.lesh.Mobile.fn = {};
	LESH = w.lesh;
	//  Mobile Mneu Navigation
	//  @param step: init
	//  @param $container: #container || null
	LESH.Mobile.fn.initMenuNavigation = function() {
		

		var MobileMenuBar = function(elm, options) {
			this.init(elm, options);
		};

		$.extend(MobileMenuBar.prototype, {
			options: {
				menu: '#menu',
				contentOverlay: '.content-overlay',
				bar: '.js-menu',
				back: '.js-back'
			},
			$bar: null,
			$back: null,
			init: function(elm, options) {
				var o = this.options = $.extend(this.options, options);
    			this.$container = (elm instanceof jQuery === true)? elm : $(elm);
    			this.$menu = this.$container.find(o.menu);
    			this.$contentOverlay = this.$container.find(o.contentOverlay);
    			this.$bar = this.$container.find(o.bar);
    			this.$back = this.$container.find(o.back);
			},
			show: function() {
				this.$container.addClass('menu-open');
			},
			hide: function() {
				this.$container.removeClass('menu-open');
			}
		});
    	(function() {
    		var fnMenu = new MobileMenuBar('#container', {});
    		fnMenu.$bar.click(function(e) {
    			fnMenu.show();
    		});

    		// fnMenu.$back.click(function(e) {
    		// 	e.preventDefault();
    		// 	console.log(history);
    		// });

    		fnMenu.$menu.find('a').click(function(e) {
    			fnMenu.hide();
    		});

    		fnMenu.$contentOverlay.click(function(e) {
    			fnMenu.hide();
    		});
    	})();
	};

	$.fn.lesh_flyview = function(options) {
		options = options || {};
		return this.each(function() {
			var o = $.extend({}, $.fn.lesh_flyview.defaults, options);
			var $el = $(this),
				$leftTab = $(o.leftTabClass),
				$rightTab = $(o.rightTabClass),
				$unCollapse = $(o.unCollapse),
				$shareBtn = $(o.shareBtnClass);

			var setTab = function(tab) {
				if (tab === 'make') {
					$el.removeClass('feed');
				}
				else if (tab === 'feed') {
					$el.removeClass('make');
				} else{
					$el.removeClass('feed make');
				};
				$el.toggleClass(tab);
			};
			!function() {
				$leftTab.click(function() {
					$(this).parent('.btns-group').find(o.class.active).removeClass(o.class.active);
					$(this).addClass(o.class.active);
					setTab('make');
				});
				$rightTab.click(function() {
					$(this).parent('.btns-group').find(o.class.active).removeClass(o.class.active);
					$(this).addClass(o.class.active);
					setTab('feed');
				});
			}();
		});
	};

	$.fn.lesh_flyview.defaults = {
		leftTabClass: '.js-show-recipe',
		rightTabClass: '.js-show-feed',
		unCollapse: '.js-uncollapse',
		shareBtnClass: '.js-share',
		class: {
			active: 'active'
		}
	};

	LESH.Mobile.fn.initMenuNavigation();
});