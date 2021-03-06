/*
 new tab({ 
 tab : $(".cn_ranktab li"), 
 defaultIndex : 0, 
 tabCurrentClass : "cur", 
 only : true, 
 content : $(".cn_rankcon"), 
 trigger : "mouseover" 
 }); 
*/

define(function(a, b, c) {
	function d(a) {
		var b = {
			tab: $(),
			defaultIndex: 0,
			tabCurrentClass: "",
			only: !0,
			content: $(),
			trigger: "click",
			beforeSwitch: e,
			afterSwitch: e,
			beforeShow: e,
			afterShow: e
		};
		this.options = a = $.extend(b, a),
		this.init()
	}
	var e = function() {};
	d.prototype = {
		init: function() {
			var a = this,
			b = this.options;
			this.switchTab(b.defaultIndex),
			this.showContent(b.defaultIndex),
			b.tab.bind(b.trigger,
			function() {
				var c = b.tab.index($(this)),
				d = $(this).hasClass("cur");
				return a.switchTab(c, d),
				a.showContent(c, d),
				!1
			})
		},
		switchTab: function(a, b) {
			var c = this.options;
			0 > a || (c.beforeSwitch.call(this, a, b), c.only ? (c.tab.removeClass(c.tabCurrentClass), c.tab.eq(a).addClass(c.tabCurrentClass)) : b ? c.tab.eq(a).removeClass(c.tabCurrentClass) : c.tab.eq(a).addClass(c.tabCurrentClass), c.afterSwitch.call(this, a, b))
		},
		showContent: function(a, b) {
			var c = this.options;
			0 > a || (c.beforeShow.call(this, a, b), c.only ? (c.content.hide(), c.content.eq(a).show()) : b ? c.content.eq(a).hide() : c.content.eq(a).show(), c.afterShow.call(this, a, b))
		}
	},
	c.exports = d
});