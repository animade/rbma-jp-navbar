define(["./core","./core/init","./traversing"],function(n){return n.fn.extend({wrapAll:function(t){var i;return n.isFunction(t)?this.each(function(i){n(this).wrapAll(t.call(this,i))}):(this[0]&&(i=n(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&i.insertBefore(this[0]),i.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this)},wrapInner:function(t){return this.each(n.isFunction(t)?function(i){n(this).wrapInner(t.call(this,i))}:function(){var i=n(this),e=i.contents();e.length?e.wrapAll(t):i.append(t)})},wrap:function(t){var i=n.isFunction(t);return this.each(function(e){n(this).wrapAll(i?t.call(this,e):t)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n});