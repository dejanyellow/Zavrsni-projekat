!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(t, e, n) {
    "use strict";
    n.r(e);
    let r = (function() {
      const t = [];
      let e = $("#catalog");
      class n {
        constructor(t, e, n, r) {
          (this.name = t),
            (this.price = e),
            (this.quantity = n),
            (this.img = r);
        }
      }
      return {
        addToCatalog: function(r, o, i, u) {
          const c = new n(r, o, i, u);
          t.push(c),
            e.html(""),
            t.forEach(function(t) {
              const { img: n, name: r, price: o } = t;
              let i = $(
                `<div class = 'telescope'>\n                            <img src = ${n} alt='${r}-img'>\n                            <div><h2>${r}</h2></div>\n                            <div>price(RSD)<input type = 'text' class = 'productPrice' value = '${o}' readonly></div>\n                            <div>quantity: <input type = 'number' class = 'productQuantity' min = '0'></div>\n                            <div>total price(RSD): <input type = 'number' class = 'productSum' readonly></div>\n                            <button type = 'submit' class = 'add-to-cart' id = '${r}'>add to cart</button>\n                        </div>`
              );
              i.appendTo(e);
            });
        }
      };
    })();
    e.default = r;
  }
]);
