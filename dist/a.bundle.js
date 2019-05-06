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
    n((n.s = 1));
})([
  ,
  function(t, e, n) {
    "use strict";
    n.r(e);
    let r = (function() {
      const t = $("#catalog"),
        e = $("#cart-content tbody"),
        n = $("#clear-cart");
      let r = 0;
      function o(t) {
        if ((t.preventDefault(), t.target.classList.contains("add-to-cart"))) {
          const n = t.target.parentElement,
            o = t.target.parentElement.querySelector(".productQuantity");
          o.value < 0 || "" === o.value
            ? ((o.style.border = "1px solid red"),
              (o.value = ""),
              (t.target.parentElement.querySelector(".productSum").value = ""))
            : (function(t) {
                !(function(t) {
                  const n = $("<tr></tr>"),
                    {
                      title: o,
                      price: u,
                      quantity: l,
                      image: i,
                      productSum: s
                    } = t;
                  $(
                    `    <td>\n                 <img src="${i}" width=90px>\n            </td>\n            <td>${o}</td>\n            <td>${u}</td>\n            <td>${l}</td>\n            <td>${s}</td>\n            <td>\n                <a href="#" class="remove" id="${r++}">X</a>\n            </td>\n    `
                  ).appendTo(n),
                    n.appendTo(e),
                    (function(t) {
                      let e = c();
                      e.push(t),
                        a(e),
                        sessionStorage.setItem("telescopes", JSON.stringify(e));
                    })(t);
                })({
                  image: t.querySelector("img").src,
                  title: t.querySelector("h2").textContent,
                  price: t.querySelector(".productPrice").value,
                  quantity: parseInt(t.querySelector(".productQuantity").value),
                  productSum: t.querySelector(".productSum").value,
                  cart_id: r
                });
              })(n);
        }
      }
      function u(t) {
        let e = parseInt(t.target.value),
          n = parseInt(
            t.target.parentElement.parentElement.querySelector(".productPrice")
              .value
          ),
          r = t.target.parentElement.parentElement.querySelector(".productSum");
        (t.target.style.border = "2px inset white"), (r.value = n * e);
      }
      function a(t) {
        let e = 0;
        t.forEach(t => {
          e = parseInt(e) + parseInt(t.productSum);
        }),
          (document.getElementById("total").innerText = `Total: ${e} EUR`),
          sessionStorage.setItem("total", JSON.stringify(e));
      }
      function c() {
        let t;
        return (t =
          null === sessionStorage.getItem("telescopes")
            ? []
            : JSON.parse(sessionStorage.getItem("telescopes")));
      }
      function l(t) {
        let e, n;
        t.target.classList.contains("remove") &&
          (t.target.parentElement.parentElement.remove(),
          (n = (e = t.target.parentElement.parentElement)
            .querySelector("a")
            .getAttribute("id")),
          console.log(n)),
          (function(t) {
            let e = c();
            e.forEach(function(n, r) {
              n.cart_id == t && e.splice(r, 1);
            }),
              sessionStorage.setItem("telescopes", JSON.stringify(e)),
              a(e);
          })(n);
      }
      function i() {
        sessionStorage.clear(), (r = 1), e.html(""), $("#total").html("");
      }
      return {
        init: function() {
          t.on("click", o),
            t.on("input", u),
            e.on("click", l),
            n.on("click", i),
            $(document).on("DOMContentLoaded", i);
        }
      };
    })();
    e.default = r;
  }
]);
