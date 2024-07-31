(() => {
  // node_modules/@docsearch/js/dist/esm/index.js
  function e(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function t(t2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var o2 = null != arguments[n2] ? arguments[n2] : {};
      n2 % 2 ? e(Object(o2), true).forEach(function(e2) {
        r(t2, e2, o2[e2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : e(Object(o2)).forEach(function(e2) {
        Object.defineProperty(t2, e2, Object.getOwnPropertyDescriptor(o2, e2));
      });
    }
    return t2;
  }
  function n(e2) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, n(e2);
  }
  function r(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function o() {
    return o = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, o.apply(this, arguments);
  }
  function i(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3)) return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null != n2) {
        var r2, o2, i2 = [], c2 = true, a2 = false;
        try {
          for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true) ;
        } catch (e4) {
          a2 = true, o2 = e4;
        } finally {
          try {
            c2 || null == n2.return || n2.return();
          } finally {
            if (a2) throw o2;
          }
        }
        return i2;
      }
    }(e2, t2) || a(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function c(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return u(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || a(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function a(e2, t2) {
    if (e2) {
      if ("string" == typeof e2) return u(e2, t2);
      var n2 = Object.prototype.toString.call(e2).slice(8, -1);
      return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? u(e2, t2) : void 0;
    }
  }
  function u(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  var l;
  var s;
  var f;
  var p;
  var m;
  var v = {};
  var d = [];
  var h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function y(e2, t2) {
    for (var n2 in t2) e2[n2] = t2[n2];
    return e2;
  }
  function _(e2) {
    var t2 = e2.parentNode;
    t2 && t2.removeChild(e2);
  }
  function b(e2, t2, n2) {
    var r2, o2, i2, c2 = arguments, a2 = {};
    for (i2 in t2) "key" == i2 ? r2 = t2[i2] : "ref" == i2 ? o2 = t2[i2] : a2[i2] = t2[i2];
    if (arguments.length > 3) for (n2 = [n2], i2 = 3; i2 < arguments.length; i2++) n2.push(c2[i2]);
    if (null != n2 && (a2.children = n2), "function" == typeof e2 && null != e2.defaultProps) for (i2 in e2.defaultProps) void 0 === a2[i2] && (a2[i2] = e2.defaultProps[i2]);
    return g(e2, a2, r2, o2, null);
  }
  function g(e2, t2, n2, r2, o2) {
    var i2 = { type: e2, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++l.__v : o2 };
    return null != l.vnode && l.vnode(i2), i2;
  }
  function S(e2) {
    return e2.children;
  }
  function O(e2, t2) {
    this.props = e2, this.context = t2;
  }
  function w(e2, t2) {
    if (null == t2) return e2.__ ? w(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
    for (var n2; t2 < e2.__k.length; t2++) if (null != (n2 = e2.__k[t2]) && null != n2.__e) return n2.__e;
    return "function" == typeof e2.type ? w(e2) : null;
  }
  function E(e2) {
    var t2, n2;
    if (null != (e2 = e2.__) && null != e2.__c) {
      for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++) if (null != (n2 = e2.__k[t2]) && null != n2.__e) {
        e2.__e = e2.__c.base = n2.__e;
        break;
      }
      return E(e2);
    }
  }
  function j(e2) {
    (!e2.__d && (e2.__d = true) && s.push(e2) && !P.__r++ || p !== l.debounceRendering) && ((p = l.debounceRendering) || f)(P);
  }
  function P() {
    for (var e2; P.__r = s.length; ) e2 = s.sort(function(e3, t2) {
      return e3.__v.__b - t2.__v.__b;
    }), s = [], e2.some(function(e3) {
      var t2, n2, r2, o2, i2, c2;
      e3.__d && (i2 = (o2 = (t2 = e3).__v).__e, (c2 = t2.__P) && (n2 = [], (r2 = y({}, o2)).__v = o2.__v + 1, R(c2, o2, r2, t2.__n, void 0 !== c2.ownerSVGElement, null != o2.__h ? [i2] : null, n2, null == i2 ? w(o2) : i2, o2.__h), q(n2, o2), o2.__e != i2 && E(o2)));
    });
  }
  function I(e2, t2, n2, r2, o2, i2, c2, a2, u2, l2) {
    var s2, f2, p2, m2, h2, y2, _2, b2 = r2 && r2.__k || d, O2 = b2.length;
    for (n2.__k = [], s2 = 0; s2 < t2.length; s2++) if (null != (m2 = n2.__k[s2] = null == (m2 = t2[s2]) || "boolean" == typeof m2 ? null : "string" == typeof m2 || "number" == typeof m2 ? g(null, m2, null, null, m2) : Array.isArray(m2) ? g(S, { children: m2 }, null, null, null) : m2.__b > 0 ? g(m2.type, m2.props, m2.key, null, m2.__v) : m2)) {
      if (m2.__ = n2, m2.__b = n2.__b + 1, null === (p2 = b2[s2]) || p2 && m2.key == p2.key && m2.type === p2.type) b2[s2] = void 0;
      else for (f2 = 0; f2 < O2; f2++) {
        if ((p2 = b2[f2]) && m2.key == p2.key && m2.type === p2.type) {
          b2[f2] = void 0;
          break;
        }
        p2 = null;
      }
      R(e2, m2, p2 = p2 || v, o2, i2, c2, a2, u2, l2), h2 = m2.__e, (f2 = m2.ref) && p2.ref != f2 && (_2 || (_2 = []), p2.ref && _2.push(p2.ref, null, m2), _2.push(f2, m2.__c || h2, m2)), null != h2 ? (null == y2 && (y2 = h2), "function" == typeof m2.type && null != m2.__k && m2.__k === p2.__k ? m2.__d = u2 = D(m2, u2, e2) : u2 = C(e2, m2, p2, b2, h2, u2), l2 || "option" !== n2.type ? "function" == typeof n2.type && (n2.__d = u2) : e2.value = "") : u2 && p2.__e == u2 && u2.parentNode != e2 && (u2 = w(p2));
    }
    for (n2.__e = y2, s2 = O2; s2--; ) null != b2[s2] && ("function" == typeof n2.type && null != b2[s2].__e && b2[s2].__e == n2.__d && (n2.__d = w(r2, s2 + 1)), H(b2[s2], b2[s2]));
    if (_2) for (s2 = 0; s2 < _2.length; s2++) M(_2[s2], _2[++s2], _2[++s2]);
  }
  function D(e2, t2, n2) {
    var r2, o2;
    for (r2 = 0; r2 < e2.__k.length; r2++) (o2 = e2.__k[r2]) && (o2.__ = e2, t2 = "function" == typeof o2.type ? D(o2, t2, n2) : C(n2, o2, o2, e2.__k, o2.__e, t2));
    return t2;
  }
  function k(e2, t2) {
    return t2 = t2 || [], null == e2 || "boolean" == typeof e2 || (Array.isArray(e2) ? e2.some(function(e3) {
      k(e3, t2);
    }) : t2.push(e2)), t2;
  }
  function C(e2, t2, n2, r2, o2, i2) {
    var c2, a2, u2;
    if (void 0 !== t2.__d) c2 = t2.__d, t2.__d = void 0;
    else if (null == n2 || o2 != i2 || null == o2.parentNode) e: if (null == i2 || i2.parentNode !== e2) e2.appendChild(o2), c2 = null;
    else {
      for (a2 = i2, u2 = 0; (a2 = a2.nextSibling) && u2 < r2.length; u2 += 2) if (a2 == o2) break e;
      e2.insertBefore(o2, i2), c2 = i2;
    }
    return void 0 !== c2 ? c2 : o2.nextSibling;
  }
  function A(e2, t2, n2) {
    "-" === t2[0] ? e2.setProperty(t2, n2) : e2[t2] = null == n2 ? "" : "number" != typeof n2 || h.test(t2) ? n2 : n2 + "px";
  }
  function x(e2, t2, n2, r2, o2) {
    var i2;
    e: if ("style" === t2) if ("string" == typeof n2) e2.style.cssText = n2;
    else {
      if ("string" == typeof r2 && (e2.style.cssText = r2 = ""), r2) for (t2 in r2) n2 && t2 in n2 || A(e2.style, t2, "");
      if (n2) for (t2 in n2) r2 && n2[t2] === r2[t2] || A(e2.style, t2, n2[t2]);
    }
    else if ("o" === t2[0] && "n" === t2[1]) i2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + i2] = n2, n2 ? r2 || e2.addEventListener(t2, i2 ? T : N, i2) : e2.removeEventListener(t2, i2 ? T : N, i2);
    else if ("dangerouslySetInnerHTML" !== t2) {
      if (o2) t2 = t2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if ("href" !== t2 && "list" !== t2 && "form" !== t2 && "download" !== t2 && t2 in e2) try {
        e2[t2] = null == n2 ? "" : n2;
        break e;
      } catch (e3) {
      }
      "function" == typeof n2 || (null != n2 && (false !== n2 || "a" === t2[0] && "r" === t2[1]) ? e2.setAttribute(t2, n2) : e2.removeAttribute(t2));
    }
  }
  function N(e2) {
    this.l[e2.type + false](l.event ? l.event(e2) : e2);
  }
  function T(e2) {
    this.l[e2.type + true](l.event ? l.event(e2) : e2);
  }
  function R(e2, t2, n2, r2, o2, i2, c2, a2, u2) {
    var s2, f2, p2, m2, v2, d2, h2, _2, b2, g2, w2, E2 = t2.type;
    if (void 0 !== t2.constructor) return null;
    null != n2.__h && (u2 = n2.__h, a2 = t2.__e = n2.__e, t2.__h = null, i2 = [a2]), (s2 = l.__b) && s2(t2);
    try {
      e: if ("function" == typeof E2) {
        if (_2 = t2.props, b2 = (s2 = E2.contextType) && r2[s2.__c], g2 = s2 ? b2 ? b2.props.value : s2.__ : r2, n2.__c ? h2 = (f2 = t2.__c = n2.__c).__ = f2.__E : ("prototype" in E2 && E2.prototype.render ? t2.__c = f2 = new E2(_2, g2) : (t2.__c = f2 = new O(_2, g2), f2.constructor = E2, f2.render = U), b2 && b2.sub(f2), f2.props = _2, f2.state || (f2.state = {}), f2.context = g2, f2.__n = r2, p2 = f2.__d = true, f2.__h = []), null == f2.__s && (f2.__s = f2.state), null != E2.getDerivedStateFromProps && (f2.__s == f2.state && (f2.__s = y({}, f2.__s)), y(f2.__s, E2.getDerivedStateFromProps(_2, f2.__s))), m2 = f2.props, v2 = f2.state, p2) null == E2.getDerivedStateFromProps && null != f2.componentWillMount && f2.componentWillMount(), null != f2.componentDidMount && f2.__h.push(f2.componentDidMount);
        else {
          if (null == E2.getDerivedStateFromProps && _2 !== m2 && null != f2.componentWillReceiveProps && f2.componentWillReceiveProps(_2, g2), !f2.__e && null != f2.shouldComponentUpdate && false === f2.shouldComponentUpdate(_2, f2.__s, g2) || t2.__v === n2.__v) {
            f2.props = _2, f2.state = f2.__s, t2.__v !== n2.__v && (f2.__d = false), f2.__v = t2, t2.__e = n2.__e, t2.__k = n2.__k, f2.__h.length && c2.push(f2);
            break e;
          }
          null != f2.componentWillUpdate && f2.componentWillUpdate(_2, f2.__s, g2), null != f2.componentDidUpdate && f2.__h.push(function() {
            f2.componentDidUpdate(m2, v2, d2);
          });
        }
        f2.context = g2, f2.props = _2, f2.state = f2.__s, (s2 = l.__r) && s2(t2), f2.__d = false, f2.__v = t2, f2.__P = e2, s2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s, null != f2.getChildContext && (r2 = y(y({}, r2), f2.getChildContext())), p2 || null == f2.getSnapshotBeforeUpdate || (d2 = f2.getSnapshotBeforeUpdate(m2, v2)), w2 = null != s2 && s2.type === S && null == s2.key ? s2.props.children : s2, I(e2, Array.isArray(w2) ? w2 : [w2], t2, n2, r2, o2, i2, c2, a2, u2), f2.base = t2.__e, t2.__h = null, f2.__h.length && c2.push(f2), h2 && (f2.__E = f2.__ = null), f2.__e = false;
      } else null == i2 && t2.__v === n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : t2.__e = L(n2.__e, t2, n2, r2, o2, i2, c2, u2);
      (s2 = l.diffed) && s2(t2);
    } catch (e3) {
      t2.__v = null, (u2 || null != i2) && (t2.__e = a2, t2.__h = !!u2, i2[i2.indexOf(a2)] = null), l.__e(e3, t2, n2);
    }
  }
  function q(e2, t2) {
    l.__c && l.__c(t2, e2), e2.some(function(t3) {
      try {
        e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
          e3.call(t3);
        });
      } catch (e3) {
        l.__e(e3, t3.__v);
      }
    });
  }
  function L(e2, t2, n2, r2, o2, i2, c2, a2) {
    var u2, l2, s2, f2, p2 = n2.props, m2 = t2.props, h2 = t2.type, y2 = 0;
    if ("svg" === h2 && (o2 = true), null != i2) {
      for (; y2 < i2.length; y2++) if ((u2 = i2[y2]) && (u2 === e2 || (h2 ? u2.localName == h2 : 3 == u2.nodeType))) {
        e2 = u2, i2[y2] = null;
        break;
      }
    }
    if (null == e2) {
      if (null === h2) return document.createTextNode(m2);
      e2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", h2) : document.createElement(h2, m2.is && m2), i2 = null, a2 = false;
    }
    if (null === h2) p2 === m2 || a2 && e2.data === m2 || (e2.data = m2);
    else {
      if (i2 = i2 && d.slice.call(e2.childNodes), l2 = (p2 = n2.props || v).dangerouslySetInnerHTML, s2 = m2.dangerouslySetInnerHTML, !a2) {
        if (null != i2) for (p2 = {}, f2 = 0; f2 < e2.attributes.length; f2++) p2[e2.attributes[f2].name] = e2.attributes[f2].value;
        (s2 || l2) && (s2 && (l2 && s2.__html == l2.__html || s2.__html === e2.innerHTML) || (e2.innerHTML = s2 && s2.__html || ""));
      }
      if (function(e3, t3, n3, r3, o3) {
        var i3;
        for (i3 in n3) "children" === i3 || "key" === i3 || i3 in t3 || x(e3, i3, null, n3[i3], r3);
        for (i3 in t3) o3 && "function" != typeof t3[i3] || "children" === i3 || "key" === i3 || "value" === i3 || "checked" === i3 || n3[i3] === t3[i3] || x(e3, i3, t3[i3], n3[i3], r3);
      }(e2, m2, p2, o2, a2), s2) t2.__k = [];
      else if (y2 = t2.props.children, I(e2, Array.isArray(y2) ? y2 : [y2], t2, n2, r2, o2 && "foreignObject" !== h2, i2, c2, e2.firstChild, a2), null != i2) for (y2 = i2.length; y2--; ) null != i2[y2] && _(i2[y2]);
      a2 || ("value" in m2 && void 0 !== (y2 = m2.value) && (y2 !== e2.value || "progress" === h2 && !y2) && x(e2, "value", y2, p2.value, false), "checked" in m2 && void 0 !== (y2 = m2.checked) && y2 !== e2.checked && x(e2, "checked", y2, p2.checked, false));
    }
    return e2;
  }
  function M(e2, t2, n2) {
    try {
      "function" == typeof e2 ? e2(t2) : e2.current = t2;
    } catch (e3) {
      l.__e(e3, n2);
    }
  }
  function H(e2, t2, n2) {
    var r2, o2, i2;
    if (l.unmount && l.unmount(e2), (r2 = e2.ref) && (r2.current && r2.current !== e2.__e || M(r2, null, t2)), n2 || "function" == typeof e2.type || (n2 = null != (o2 = e2.__e)), e2.__e = e2.__d = void 0, null != (r2 = e2.__c)) {
      if (r2.componentWillUnmount) try {
        r2.componentWillUnmount();
      } catch (e3) {
        l.__e(e3, t2);
      }
      r2.base = r2.__P = null;
    }
    if (r2 = e2.__k) for (i2 = 0; i2 < r2.length; i2++) r2[i2] && H(r2[i2], t2, n2);
    null != o2 && _(o2);
  }
  function U(e2, t2, n2) {
    return this.constructor(e2, n2);
  }
  function F(e2, t2, n2) {
    var r2, o2, i2;
    l.__ && l.__(e2, t2), o2 = (r2 = "function" == typeof n2) ? null : n2 && n2.__k || t2.__k, i2 = [], R(t2, e2 = (!r2 && n2 || t2).__k = b(S, null, [e2]), o2 || v, v, void 0 !== t2.ownerSVGElement, !r2 && n2 ? [n2] : o2 ? null : t2.firstChild ? d.slice.call(t2.childNodes) : null, i2, !r2 && n2 ? n2 : o2 ? o2.__e : t2.firstChild, r2), q(i2, e2);
  }
  function B(e2, t2) {
    F(e2, t2, B);
  }
  function V(e2, t2, n2) {
    var r2, o2, i2, c2 = arguments, a2 = y({}, e2.props);
    for (i2 in t2) "key" == i2 ? r2 = t2[i2] : "ref" == i2 ? o2 = t2[i2] : a2[i2] = t2[i2];
    if (arguments.length > 3) for (n2 = [n2], i2 = 3; i2 < arguments.length; i2++) n2.push(c2[i2]);
    return null != n2 && (a2.children = n2), g(e2.type, a2, r2 || e2.key, o2 || e2.ref, null);
  }
  l = { __e: function(e2, t2) {
    for (var n2, r2, o2; t2 = t2.__; ) if ((n2 = t2.__c) && !n2.__) try {
      if ((r2 = n2.constructor) && null != r2.getDerivedStateFromError && (n2.setState(r2.getDerivedStateFromError(e2)), o2 = n2.__d), null != n2.componentDidCatch && (n2.componentDidCatch(e2), o2 = n2.__d), o2) return n2.__E = n2;
    } catch (t3) {
      e2 = t3;
    }
    throw e2;
  }, __v: 0 }, O.prototype.setState = function(e2, t2) {
    var n2;
    n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = y({}, this.state), "function" == typeof e2 && (e2 = e2(y({}, n2), this.props)), e2 && y(n2, e2), null != e2 && this.__v && (t2 && this.__h.push(t2), j(this));
  }, O.prototype.forceUpdate = function(e2) {
    this.__v && (this.__e = true, e2 && this.__h.push(e2), j(this));
  }, O.prototype.render = S, s = [], f = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, P.__r = 0, m = 0;
  var K;
  var W;
  var z;
  var J = 0;
  var $ = [];
  var Z = l.__b;
  var Q = l.__r;
  var G = l.diffed;
  var Y = l.__c;
  var X = l.unmount;
  function ee(e2, t2) {
    l.__h && l.__h(W, e2, J || t2), J = 0;
    var n2 = W.__H || (W.__H = { __: [], __h: [] });
    return e2 >= n2.__.length && n2.__.push({}), n2.__[e2];
  }
  function te(e2) {
    return J = 1, ne(fe, e2);
  }
  function ne(e2, t2, n2) {
    var r2 = ee(K++, 2);
    return r2.t = e2, r2.__c || (r2.__ = [n2 ? n2(t2) : fe(void 0, t2), function(e3) {
      var t3 = r2.t(r2.__[0], e3);
      r2.__[0] !== t3 && (r2.__ = [t3, r2.__[1]], r2.__c.setState({}));
    }], r2.__c = W), r2.__;
  }
  function re(e2, t2) {
    var n2 = ee(K++, 3);
    !l.__s && se(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, W.__H.__h.push(n2));
  }
  function oe(e2, t2) {
    var n2 = ee(K++, 4);
    !l.__s && se(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, W.__h.push(n2));
  }
  function ie(e2, t2) {
    var n2 = ee(K++, 7);
    return se(n2.__H, t2) && (n2.__ = e2(), n2.__H = t2, n2.__h = e2), n2.__;
  }
  function ce() {
    $.forEach(function(e2) {
      if (e2.__P) try {
        e2.__H.__h.forEach(ue), e2.__H.__h.forEach(le), e2.__H.__h = [];
      } catch (t2) {
        e2.__H.__h = [], l.__e(t2, e2.__v);
      }
    }), $ = [];
  }
  l.__b = function(e2) {
    W = null, Z && Z(e2);
  }, l.__r = function(e2) {
    Q && Q(e2), K = 0;
    var t2 = (W = e2.__c).__H;
    t2 && (t2.__h.forEach(ue), t2.__h.forEach(le), t2.__h = []);
  }, l.diffed = function(e2) {
    G && G(e2);
    var t2 = e2.__c;
    t2 && t2.__H && t2.__H.__h.length && (1 !== $.push(t2) && z === l.requestAnimationFrame || ((z = l.requestAnimationFrame) || function(e3) {
      var t3, n2 = function() {
        clearTimeout(r2), ae && cancelAnimationFrame(t3), setTimeout(e3);
      }, r2 = setTimeout(n2, 100);
      ae && (t3 = requestAnimationFrame(n2));
    })(ce)), W = void 0;
  }, l.__c = function(e2, t2) {
    t2.some(function(e3) {
      try {
        e3.__h.forEach(ue), e3.__h = e3.__h.filter(function(e4) {
          return !e4.__ || le(e4);
        });
      } catch (n2) {
        t2.some(function(e4) {
          e4.__h && (e4.__h = []);
        }), t2 = [], l.__e(n2, e3.__v);
      }
    }), Y && Y(e2, t2);
  }, l.unmount = function(e2) {
    X && X(e2);
    var t2 = e2.__c;
    if (t2 && t2.__H) try {
      t2.__H.__.forEach(ue);
    } catch (e3) {
      l.__e(e3, t2.__v);
    }
  };
  var ae = "function" == typeof requestAnimationFrame;
  function ue(e2) {
    var t2 = W;
    "function" == typeof e2.__c && e2.__c(), W = t2;
  }
  function le(e2) {
    var t2 = W;
    e2.__c = e2.__(), W = t2;
  }
  function se(e2, t2) {
    return !e2 || e2.length !== t2.length || t2.some(function(t3, n2) {
      return t3 !== e2[n2];
    });
  }
  function fe(e2, t2) {
    return "function" == typeof t2 ? t2(e2) : t2;
  }
  function pe(e2, t2) {
    for (var n2 in t2) e2[n2] = t2[n2];
    return e2;
  }
  function me(e2, t2) {
    for (var n2 in e2) if ("__source" !== n2 && !(n2 in t2)) return true;
    for (var r2 in t2) if ("__source" !== r2 && e2[r2] !== t2[r2]) return true;
    return false;
  }
  function ve(e2) {
    this.props = e2;
  }
  (ve.prototype = new O()).isPureReactComponent = true, ve.prototype.shouldComponentUpdate = function(e2, t2) {
    return me(this.props, e2) || me(this.state, t2);
  };
  var de = l.__b;
  l.__b = function(e2) {
    e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), de && de(e2);
  };
  var he = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var ye = function(e2, t2) {
    return null == e2 ? null : k(k(e2).map(t2));
  };
  var _e = { map: ye, forEach: ye, count: function(e2) {
    return e2 ? k(e2).length : 0;
  }, only: function(e2) {
    var t2 = k(e2);
    if (1 !== t2.length) throw "Children.only";
    return t2[0];
  }, toArray: k };
  var be = l.__e;
  function ge() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function Se(e2) {
    var t2 = e2.__.__c;
    return t2 && t2.__e && t2.__e(e2);
  }
  function Oe() {
    this.u = null, this.o = null;
  }
  l.__e = function(e2, t2, n2) {
    if (e2.then) {
      for (var r2, o2 = t2; o2 = o2.__; ) if ((r2 = o2.__c) && r2.__c) return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), r2.__c(e2, t2);
    }
    be(e2, t2, n2);
  }, (ge.prototype = new O()).__c = function(e2, t2) {
    var n2 = t2.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(n2);
    var o2 = Se(r2.__v), i2 = false, c2 = function() {
      i2 || (i2 = true, n2.componentWillUnmount = n2.__c, o2 ? o2(a2) : a2());
    };
    n2.__c = n2.componentWillUnmount, n2.componentWillUnmount = function() {
      c2(), n2.__c && n2.__c();
    };
    var a2 = function() {
      if (!--r2.__u) {
        if (r2.state.__e) {
          var e3 = r2.state.__e;
          r2.__v.__k[0] = function e4(t4, n3, r3) {
            return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
              return e4(t5, n3, r3);
            }), t4.__c && t4.__c.__P === n3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
          }(e3, e3.__c.__P, e3.__c.__O);
        }
        var t3;
        for (r2.setState({ __e: r2.__b = null }); t3 = r2.t.pop(); ) t3.forceUpdate();
      }
    }, u2 = true === t2.__h;
    r2.__u++ || u2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), e2.then(c2, c2);
  }, ge.prototype.componentWillUnmount = function() {
    this.t = [];
  }, ge.prototype.render = function(e2, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = function e3(t3, n3, r3) {
          return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(e4) {
            "function" == typeof e4.__c && e4.__c();
          }), t3.__c.__H = null), null != (t3 = pe({}, t3)).__c && (t3.__c.__P === r3 && (t3.__c.__P = n3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
            return e3(t4, n3, r3);
          })), t3;
        }(this.__b, n2, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var o2 = t2.__e && b(S, null, e2.fallback);
    return o2 && (o2.__h = null), [b(S, null, t2.__e ? null : e2.children), o2];
  };
  var we = function(e2, t2, n2) {
    if (++n2[1] === n2[0] && e2.o.delete(t2), e2.props.revealOrder && ("t" !== e2.props.revealOrder[0] || !e2.o.size)) for (n2 = e2.u; n2; ) {
      for (; n2.length > 3; ) n2.pop()();
      if (n2[1] < n2[0]) break;
      e2.u = n2 = n2[2];
    }
  };
  function Ee(e2) {
    return this.getChildContext = function() {
      return e2.context;
    }, e2.children;
  }
  function je(e2) {
    var t2 = this, n2 = e2.i;
    t2.componentWillUnmount = function() {
      F(null, t2.l), t2.l = null, t2.i = null;
    }, t2.i && t2.i !== n2 && t2.componentWillUnmount(), e2.__v ? (t2.l || (t2.i = n2, t2.l = { nodeType: 1, parentNode: n2, childNodes: [], appendChild: function(e3) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, insertBefore: function(e3, n3) {
      this.childNodes.push(e3), t2.i.appendChild(e3);
    }, removeChild: function(e3) {
      this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.i.removeChild(e3);
    } }), F(b(Ee, { context: t2.context }, e2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
  }
  function Pe(e2, t2) {
    return b(je, { __v: e2, i: t2 });
  }
  (Oe.prototype = new O()).__e = function(e2) {
    var t2 = this, n2 = Se(t2.__v), r2 = t2.o.get(e2);
    return r2[0]++, function(o2) {
      var i2 = function() {
        t2.props.revealOrder ? (r2.push(o2), we(t2, e2, r2)) : o2();
      };
      n2 ? n2(i2) : i2();
    };
  }, Oe.prototype.render = function(e2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t2 = k(e2.children);
    e2.revealOrder && "b" === e2.revealOrder[0] && t2.reverse();
    for (var n2 = t2.length; n2--; ) this.o.set(t2[n2], this.u = [1, 0, this.u]);
    return e2.children;
  }, Oe.prototype.componentDidUpdate = Oe.prototype.componentDidMount = function() {
    var e2 = this;
    this.o.forEach(function(t2, n2) {
      we(e2, n2, t2);
    });
  };
  var Ie = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var De = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var ke = function(e2) {
    return ("undefined" != typeof Symbol && "symbol" == n(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e2);
  };
  function Ce(e2, t2, n2) {
    return null == t2.__k && (t2.textContent = ""), F(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
  }
  O.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
    Object.defineProperty(O.prototype, e2, { configurable: true, get: function() {
      return this["UNSAFE_" + e2];
    }, set: function(t2) {
      Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
    } });
  });
  var Ae = l.event;
  function xe() {
  }
  function Ne() {
    return this.cancelBubble;
  }
  function Te() {
    return this.defaultPrevented;
  }
  l.event = function(e2) {
    return Ae && (e2 = Ae(e2)), e2.persist = xe, e2.isPropagationStopped = Ne, e2.isDefaultPrevented = Te, e2.nativeEvent = e2;
  };
  var Re;
  var qe = { configurable: true, get: function() {
    return this.class;
  } };
  var Le = l.vnode;
  l.vnode = function(e2) {
    var t2 = e2.type, n2 = e2.props, r2 = n2;
    if ("string" == typeof t2) {
      for (var o2 in r2 = {}, n2) {
        var i2 = n2[o2];
        "value" === o2 && "defaultValue" in n2 && null == i2 || ("defaultValue" === o2 && "value" in n2 && null == n2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !ke(n2.type) ? o2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : De.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i2 && (i2 = void 0), r2[o2] = i2);
      }
      "select" == t2 && r2.multiple && Array.isArray(r2.value) && (r2.value = k(n2.children).forEach(function(e3) {
        e3.props.selected = -1 != r2.value.indexOf(e3.props.value);
      })), "select" == t2 && null != r2.defaultValue && (r2.value = k(n2.children).forEach(function(e3) {
        e3.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e3.props.value) : r2.defaultValue == e3.props.value;
      })), e2.props = r2;
    }
    t2 && n2.class != n2.className && (qe.enumerable = "className" in n2, null != n2.className && (r2.class = n2.className), Object.defineProperty(r2, "className", qe)), e2.$$typeof = Ie, Le && Le(e2);
  };
  var Me = l.__r;
  l.__r = function(e2) {
    Me && Me(e2), Re = e2.__c;
  };
  var He = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
    return Re.__n[e2.__c].props.value;
  } } } };
  function Ue(e2) {
    return !!e2 && e2.$$typeof === Ie;
  }
  "object" == ("undefined" == typeof performance ? "undefined" : n(performance)) && "function" == typeof performance.now && performance.now.bind(performance);
  var Fe = { useState: te, useReducer: ne, useEffect: re, useLayoutEffect: oe, useRef: function(e2) {
    return J = 5, ie(function() {
      return { current: e2 };
    }, []);
  }, useImperativeHandle: function(e2, t2, n2) {
    J = 6, oe(function() {
      "function" == typeof e2 ? e2(t2()) : e2 && (e2.current = t2());
    }, null == n2 ? n2 : n2.concat(e2));
  }, useMemo: ie, useCallback: function(e2, t2) {
    return J = 8, ie(function() {
      return e2;
    }, t2);
  }, useContext: function(e2) {
    var t2 = W.context[e2.__c], n2 = ee(K++, 9);
    return n2.__c = e2, t2 ? (null == n2.__ && (n2.__ = true, t2.sub(W)), t2.props.value) : e2.__;
  }, useDebugValue: function(e2, t2) {
    l.useDebugValue && l.useDebugValue(t2 ? t2(e2) : e2);
  }, version: "16.8.0", Children: _e, render: Ce, hydrate: function(e2, t2, n2) {
    return B(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
  }, unmountComponentAtNode: function(e2) {
    return !!e2.__k && (F(null, e2), true);
  }, createPortal: Pe, createElement: b, createContext: function(e2, t2) {
    var n2 = { __c: t2 = "__cC" + m++, __: e2, Consumer: function(e3, t3) {
      return e3.children(t3);
    }, Provider: function(e3) {
      var n3, r2;
      return this.getChildContext || (n3 = [], (r2 = {})[t2] = this, this.getChildContext = function() {
        return r2;
      }, this.shouldComponentUpdate = function(e4) {
        this.props.value !== e4.value && n3.some(j);
      }, this.sub = function(e4) {
        n3.push(e4);
        var t3 = e4.componentWillUnmount;
        e4.componentWillUnmount = function() {
          n3.splice(n3.indexOf(e4), 1), t3 && t3.call(e4);
        };
      }), e3.children;
    } };
    return n2.Provider.__ = n2.Consumer.contextType = n2;
  }, createFactory: function(e2) {
    return b.bind(null, e2);
  }, cloneElement: function(e2) {
    return Ue(e2) ? V.apply(null, arguments) : e2;
  }, createRef: function() {
    return { current: null };
  }, Fragment: S, isValidElement: Ue, findDOMNode: function(e2) {
    return e2 && (e2.base || 1 === e2.nodeType && e2) || null;
  }, Component: O, PureComponent: ve, memo: function(e2, t2) {
    function n2(e3) {
      var n3 = this.props.ref, r3 = n3 == e3.ref;
      return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e3) || !r3 : me(this.props, e3);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = n2, b(e2, t3);
    }
    return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
  }, forwardRef: function(e2) {
    function t2(t3, r2) {
      var o2 = pe({}, t3);
      return delete o2.ref, e2(o2, (r2 = t3.ref || r2) && ("object" != n(r2) || "current" in r2) ? r2 : null);
    }
    return t2.$$typeof = he, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
  }, unstable_batchedUpdates: function(e2, t2) {
    return e2(t2);
  }, StrictMode: S, Suspense: ge, SuspenseList: Oe, lazy: function(e2) {
    var t2, n2, r2;
    function o2(o3) {
      if (t2 || (t2 = e2()).then(function(e3) {
        n2 = e3.default || e3;
      }, function(e3) {
        r2 = e3;
      }), r2) throw r2;
      if (!n2) throw t2;
      return b(n2, o3);
    }
    return o2.displayName = "Lazy", o2.__f = true, o2;
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: He };
  var Be = ["facetName", "facetQuery"];
  function Ve(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Ke(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ve(Object(n2), true).forEach(function(t3) {
        We(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ve(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function We(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function ze() {
    return ze = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, ze.apply(this, arguments);
  }
  function Je(e2, t2) {
    if (null == e2) return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function $e(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3)) return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null != n2) {
        var r2, o2, i2 = [], c2 = true, a2 = false;
        try {
          for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true) ;
        } catch (e4) {
          a2 = true, o2 = e4;
        } finally {
          try {
            c2 || null == n2.return || n2.return();
          } finally {
            if (a2) throw o2;
          }
        }
        return i2;
      }
    }(e2, t2) || Ze(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Ze(e2, t2) {
    if (e2) {
      if ("string" == typeof e2) return Qe(e2, t2);
      var n2 = Object.prototype.toString.call(e2).slice(8, -1);
      return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Qe(e2, t2) : void 0;
    }
  }
  function Qe(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function Ge() {
    return Fe.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, Fe.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
  }
  function Ye() {
    return Fe.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20", "aria-hidden": "true" }, Fe.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  var Xe = ["translations"];
  var et = Fe.forwardRef(function(e2, t2) {
    var n2 = e2.translations, r2 = void 0 === n2 ? {} : n2, o2 = Je(e2, Xe), i2 = r2.buttonText, c2 = void 0 === i2 ? "Search" : i2, a2 = r2.buttonAriaLabel, u2 = void 0 === a2 ? "Search" : a2, l2 = $e(te(null), 2), s2 = l2[0], f2 = l2[1];
    return re(function() {
      "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f2("\u2318") : f2("Ctrl"));
    }, []), Fe.createElement("button", ze({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u2 }, o2, { ref: t2 }), Fe.createElement("span", { className: "DocSearch-Button-Container" }, Fe.createElement(Ye, null), Fe.createElement("span", { className: "DocSearch-Button-Placeholder" }, c2)), Fe.createElement("span", { className: "DocSearch-Button-Keys" }, null !== s2 && Fe.createElement(Fe.Fragment, null, Fe.createElement(tt, { reactsToKey: "Ctrl" === s2 ? "Ctrl" : "Meta" }, "Ctrl" === s2 ? Fe.createElement(Ge, null) : s2), Fe.createElement(tt, { reactsToKey: "k" }, "K"))));
  });
  function tt(e2) {
    var t2 = e2.reactsToKey, n2 = e2.children, r2 = $e(te(false), 2), o2 = r2[0], i2 = r2[1];
    return re(function() {
      if (t2) return window.addEventListener("keydown", e3), window.addEventListener("keyup", n3), function() {
        window.removeEventListener("keydown", e3), window.removeEventListener("keyup", n3);
      };
      function e3(e4) {
        e4.key === t2 && i2(true);
      }
      function n3(e4) {
        e4.key !== t2 && "Meta" !== e4.key || i2(false);
      }
    }, [t2]), Fe.createElement("kbd", { className: o2 ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" }, n2);
  }
  function nt(e2, t2) {
    var n2 = void 0;
    return function() {
      for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
      n2 && clearTimeout(n2), n2 = setTimeout(function() {
        return e2.apply(void 0, o2);
      }, t2);
    };
  }
  function rt(e2) {
    return e2.reduce(function(e3, t2) {
      return e3.concat(t2);
    }, []);
  }
  var ot = 0;
  function it(e2) {
    return 0 === e2.collections.length ? 0 : e2.collections.reduce(function(e3, t2) {
      return e3 + t2.items.length;
    }, 0);
  }
  function ct(e2) {
    return e2 !== Object(e2);
  }
  function at(e2, t2) {
    if (e2 === t2) return true;
    if (ct(e2) || ct(t2) || "function" == typeof e2 || "function" == typeof t2) return e2 === t2;
    if (Object.keys(e2).length !== Object.keys(t2).length) return false;
    for (var n2 = 0, r2 = Object.keys(e2); n2 < r2.length; n2++) {
      var o2 = r2[n2];
      if (!(o2 in t2)) return false;
      if (!at(e2[o2], t2[o2])) return false;
    }
    return true;
  }
  var ut = function() {
  };
  var lt = [{ segment: "autocomplete-core", version: "1.9.3" }];
  function st(e2) {
    var t2 = e2.item, n2 = e2.items;
    return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + n2.findIndex(function(e3) {
      return e3.objectID === t2.objectID;
    })], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
  }
  function ft(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  var pt = ["items"];
  var mt = ["items"];
  function vt(e2) {
    return vt = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, vt(e2);
  }
  function dt(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return ht(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return ht(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? ht(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function ht(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function yt(e2, t2) {
    if (null == e2) return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function _t(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function bt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? _t(Object(n2), true).forEach(function(t3) {
        gt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : _t(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function gt(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== vt(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== vt(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === vt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function St(e2) {
    for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n2 = [], r2 = 0; r2 < e2.objectIDs.length; r2 += t2) n2.push(bt(bt({}, e2), {}, { objectIDs: e2.objectIDs.slice(r2, r2 + t2) }));
    return n2;
  }
  function Ot(e2) {
    return e2.map(function(e3) {
      var t2 = e3.items, n2 = yt(e3, pt);
      return bt(bt({}, n2), {}, { objectIDs: (null == t2 ? void 0 : t2.map(function(e4) {
        return e4.objectID;
      })) || n2.objectIDs });
    });
  }
  function wt(e2) {
    var t2 = e2.items.reduce(function(e3, t3) {
      var n2;
      return e3[t3.__autocomplete_indexName] = (null !== (n2 = e3[t3.__autocomplete_indexName]) && void 0 !== n2 ? n2 : []).concat(t3), e3;
    }, {});
    return Object.keys(t2).map(function(e3) {
      return { index: e3, items: t2[e3], algoliaSource: ["autocomplete"] };
    });
  }
  function Et(e2) {
    return e2.objectID && e2.__autocomplete_indexName && e2.__autocomplete_queryID;
  }
  function jt(e2) {
    return jt = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, jt(e2);
  }
  function Pt(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return It(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return It(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? It(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function It(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function Dt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function kt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Dt(Object(n2), true).forEach(function(t3) {
        Ct(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Dt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Ct(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== jt(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== jt(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === jt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var At = "https://cdn.jsdelivr.net/npm/search-insights@".concat("2.6.0", "/dist/search-insights.min.js");
  var xt = nt(function(e2) {
    var t2 = e2.onItemsChange, n2 = e2.items, r2 = e2.insights, o2 = e2.state;
    t2({ insights: r2, insightsEvents: wt({ items: n2 }).map(function(e3) {
      return kt({ eventName: "Items Viewed" }, e3);
    }), state: o2 });
  }, 400);
  function Nt(e2) {
    var t2 = function(e3) {
      return kt({ onItemsChange: function(e4) {
        var t3 = e4.insights, n3 = e4.insightsEvents;
        t3.viewedObjectIDs.apply(t3, Pt(n3.map(function(e5) {
          return kt(kt({}, e5), {}, { algoliaSource: [].concat(Pt(e5.algoliaSource || []), ["autocomplete-internal"]) });
        })));
      }, onSelect: function(e4) {
        var t3 = e4.insights, n3 = e4.insightsEvents;
        t3.clickedObjectIDsAfterSearch.apply(t3, Pt(n3.map(function(e5) {
          return kt(kt({}, e5), {}, { algoliaSource: [].concat(Pt(e5.algoliaSource || []), ["autocomplete-internal"]) });
        })));
      }, onActive: ut }, e3);
    }(e2), n2 = t2.insightsClient, r2 = t2.onItemsChange, o2 = t2.onSelect, i2 = t2.onActive, c2 = n2;
    n2 || "undefined" != typeof window && function(e3) {
      var t3 = { window }.window, n3 = t3.AlgoliaAnalyticsObject || "aa";
      "string" == typeof n3 && (c2 = t3[n3]), c2 || (t3.AlgoliaAnalyticsObject = n3, t3[n3] || (t3[n3] = function() {
        t3[n3].queue || (t3[n3].queue = []);
        for (var e4 = arguments.length, r3 = new Array(e4), o3 = 0; o3 < e4; o3++) r3[o3] = arguments[o3];
        t3[n3].queue.push(r3);
      }), t3[n3].version = "2.6.0", c2 = t3[n3], function(e4) {
        var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
        try {
          var n4 = e4.document.createElement("script");
          n4.async = true, n4.src = At, n4.onerror = function() {
            console.error(t4);
          }, document.body.appendChild(n4);
        } catch (e5) {
          console.error(t4);
        }
      }(t3));
    }();
    var a2 = function(e3) {
      var t3, n3, r3, o3 = (t3 = function(e4, t4) {
        return function(e5) {
          if (Array.isArray(e5)) return e5;
        }(e4) || function(e5, t5) {
          var n4 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
          if (null != n4) {
            var r4, o4, i4, c3, a3 = [], u3 = true, l3 = false;
            try {
              for (i4 = (n4 = n4.call(e5)).next; !(u3 = (r4 = i4.call(n4)).done) && (a3.push(r4.value), 2 !== a3.length); u3 = true) ;
            } catch (e6) {
              l3 = true, o4 = e6;
            } finally {
              try {
                if (!u3 && null != n4.return && (c3 = n4.return(), Object(c3) !== c3)) return;
              } finally {
                if (l3) throw o4;
              }
            }
            return a3;
          }
        }(e4) || function(e5, t5) {
          if (e5) {
            if ("string" == typeof e5) return ft(e5, 2);
            var n4 = Object.prototype.toString.call(e5).slice(8, -1);
            return "Object" === n4 && e5.constructor && (n4 = e5.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e5) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? ft(e5, 2) : void 0;
          }
        }(e4) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((e3.version || "").split(".").map(Number)), n3 = t3[0], r3 = t3[1], n3 >= 3 || 2 === n3 && r3 >= 4 || 1 === n3 && r3 >= 10);
      function i3(t4, n4, r4) {
        if (o3 && void 0 !== r4) {
          var i4 = r4[0].__autocomplete_algoliaCredentials, c3 = { "X-Algolia-Application-Id": i4.appId, "X-Algolia-API-Key": i4.apiKey };
          e3.apply(void 0, [t4].concat(dt(n4), [{ headers: c3 }]));
        } else e3.apply(void 0, [t4].concat(dt(n4)));
      }
      return { init: function(t4, n4) {
        e3("init", { appId: t4, apiKey: n4 });
      }, setUserToken: function(t4) {
        e3("setUserToken", t4);
      }, clickedObjectIDsAfterSearch: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("clickedObjectIDsAfterSearch", Ot(t4), t4[0].items);
      }, clickedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("clickedObjectIDs", Ot(t4), t4[0].items);
      }, clickedFilters: function() {
        for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++) n4[r4] = arguments[r4];
        n4.length > 0 && e3.apply(void 0, ["clickedFilters"].concat(n4));
      }, convertedObjectIDsAfterSearch: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("convertedObjectIDsAfterSearch", Ot(t4), t4[0].items);
      }, convertedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("convertedObjectIDs", Ot(t4), t4[0].items);
      }, convertedFilters: function() {
        for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++) n4[r4] = arguments[r4];
        n4.length > 0 && e3.apply(void 0, ["convertedFilters"].concat(n4));
      }, viewedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && t4.reduce(function(e5, t5) {
          var n5 = t5.items, r4 = yt(t5, mt);
          return [].concat(dt(e5), dt(St(bt(bt({}, r4), {}, { objectIDs: (null == n5 ? void 0 : n5.map(function(e6) {
            return e6.objectID;
          })) || r4.objectIDs })).map(function(e6) {
            return { items: n5, payload: e6 };
          })));
        }, []).forEach(function(e5) {
          var t5 = e5.items;
          return i3("viewedObjectIDs", [e5.payload], t5);
        });
      }, viewedFilters: function() {
        for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++) n4[r4] = arguments[r4];
        n4.length > 0 && e3.apply(void 0, ["viewedFilters"].concat(n4));
      } };
    }(c2), u2 = { current: [] }, l2 = nt(function(e3) {
      var t3 = e3.state;
      if (t3.isOpen) {
        var n3 = t3.collections.reduce(function(e4, t4) {
          return [].concat(Pt(e4), Pt(t4.items));
        }, []).filter(Et);
        at(u2.current.map(function(e4) {
          return e4.objectID;
        }), n3.map(function(e4) {
          return e4.objectID;
        })) || (u2.current = n3, n3.length > 0 && xt({ onItemsChange: r2, items: n3, insights: a2, state: t3 }));
      }
    }, 0);
    return { name: "aa.algoliaInsightsPlugin", subscribe: function(e3) {
      var t3 = e3.setContext, n3 = e3.onSelect, r3 = e3.onActive;
      c2("addAlgoliaAgent", "insights-plugin"), t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: true }, insights: a2 } }), n3(function(e4) {
        var t4 = e4.item, n4 = e4.state, r4 = e4.event;
        Et(t4) && o2({ state: n4, event: r4, insights: a2, item: t4, insightsEvents: [kt({ eventName: "Item Selected" }, st({ item: t4, items: u2.current }))] });
      }), r3(function(e4) {
        var t4 = e4.item, n4 = e4.state, r4 = e4.event;
        Et(t4) && i2({ state: n4, event: r4, insights: a2, item: t4, insightsEvents: [kt({ eventName: "Item Active" }, st({ item: t4, items: u2.current }))] });
      });
    }, onStateChange: function(e3) {
      var t3 = e3.state;
      l2({ state: t3 });
    }, __autocomplete_pluginOptions: e2 };
  }
  function Tt(e2, t2) {
    var n2 = t2;
    return { then: function(t3, r2) {
      return Tt(e2.then(qt(t3, n2, e2), qt(r2, n2, e2)), n2);
    }, catch: function(t3) {
      return Tt(e2.catch(qt(t3, n2, e2)), n2);
    }, finally: function(t3) {
      return t3 && n2.onCancelList.push(t3), Tt(e2.finally(qt(t3 && function() {
        return n2.onCancelList = [], t3();
      }, n2, e2)), n2);
    }, cancel: function() {
      n2.isCanceled = true;
      var e3 = n2.onCancelList;
      n2.onCancelList = [], e3.forEach(function(e4) {
        e4();
      });
    }, isCanceled: function() {
      return true === n2.isCanceled;
    } };
  }
  function Rt(e2) {
    return Tt(e2, { isCanceled: false, onCancelList: [] });
  }
  function qt(e2, t2, n2) {
    return e2 ? function(n3) {
      return t2.isCanceled ? n3 : e2(n3);
    } : n2;
  }
  function Lt(e2, t2, n2, r2) {
    if (!n2) return null;
    if (e2 < 0 && (null === t2 || null !== r2 && 0 === t2)) return n2 + e2;
    var o2 = (null === t2 ? -1 : t2) + e2;
    return o2 <= -1 || o2 >= n2 ? null === r2 ? null : 0 : o2;
  }
  function Mt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Ht(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Mt(Object(n2), true).forEach(function(t3) {
        Ut(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Mt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Ut(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Ft(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== Ft(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Ft(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Ft(e2) {
    return Ft = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, Ft(e2);
  }
  function Bt(e2) {
    var t2 = function(e3) {
      var t3 = e3.collections.map(function(e4) {
        return e4.items.length;
      }).reduce(function(e4, t4, n3) {
        var r3 = (e4[n3 - 1] || 0) + t4;
        return e4.push(r3), e4;
      }, []).reduce(function(t4, n3) {
        return n3 <= e3.activeItemId ? t4 + 1 : t4;
      }, 0);
      return e3.collections[t3];
    }(e2);
    if (!t2) return null;
    var n2 = t2.items[function(e3) {
      for (var t3 = e3.state, n3 = e3.collection, r3 = false, o2 = 0, i2 = 0; false === r3; ) {
        var c2 = t3.collections[o2];
        if (c2 === n3) {
          r3 = true;
          break;
        }
        i2 += c2.items.length, o2++;
      }
      return t3.activeItemId - i2;
    }({ state: e2, collection: t2 })], r2 = t2.source;
    return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e2 }), itemUrl: r2.getItemUrl({ item: n2, state: e2 }), source: r2 };
  }
  var Vt = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
  function Kt(e2) {
    return Kt = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, Kt(e2);
  }
  function Wt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function zt(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Kt(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== Kt(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Kt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Jt(e2) {
    return Jt = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, Jt(e2);
  }
  function $t(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Zt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? $t(Object(n2), true).forEach(function(t3) {
        Qt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : $t(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Qt(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Jt(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== Jt(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Jt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Gt(e2) {
    return Gt = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, Gt(e2);
  }
  function Yt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function Xt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function en(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Xt(Object(n2), true).forEach(function(t3) {
        tn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Xt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function tn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Gt(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== Gt(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Gt(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function nn(e2) {
    return nn = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, nn(e2);
  }
  function rn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function on(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? rn(Object(n2), true).forEach(function(t3) {
        cn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : rn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function cn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== nn(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== nn(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === nn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function an(e2) {
    return an = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, an(e2);
  }
  function un(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function ln(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? un(Object(n2), true).forEach(function(t3) {
        sn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : un(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function sn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== an(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== an(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === an(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function fn(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return pn(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return pn(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? pn(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function pn(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function mn(e2) {
    return Boolean(e2.execute);
  }
  function vn(e2) {
    var t2 = e2.reduce(function(e3, t3) {
      if (!mn(t3)) return e3.push(t3), e3;
      var n2 = t3.searchClient, r2 = t3.execute, o2 = t3.requesterId, i2 = t3.requests, c2 = e3.find(function(e4) {
        return mn(t3) && mn(e4) && e4.searchClient === n2 && Boolean(o2) && e4.requesterId === o2;
      });
      if (c2) {
        var a2;
        (a2 = c2.items).push.apply(a2, fn(i2));
      } else {
        var u2 = { execute: r2, requesterId: o2, items: i2, searchClient: n2 };
        e3.push(u2);
      }
      return e3;
    }, []).map(function(e3) {
      if (!mn(e3)) return Promise.resolve(e3);
      var t3 = e3, n2 = t3.execute, r2 = t3.items;
      return n2({ searchClient: t3.searchClient, requests: r2 });
    });
    return Promise.all(t2).then(function(e3) {
      return rt(e3);
    });
  }
  function dn(e2) {
    return dn = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, dn(e2);
  }
  var hn = ["event", "nextState", "props", "query", "refresh", "store"];
  function yn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function _n(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? yn(Object(n2), true).forEach(function(t3) {
        bn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : yn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function bn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== dn(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== dn(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === dn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var gn;
  var Sn;
  var On;
  var wn = null;
  var En = (gn = -1, Sn = -1, On = void 0, function(e2) {
    var t2 = ++gn;
    return Promise.resolve(e2).then(function(e3) {
      return On && t2 < Sn ? On : (Sn = t2, On = e3, e3);
    });
  });
  function jn(e2) {
    var t2 = e2.event, n2 = e2.nextState, r2 = void 0 === n2 ? {} : n2, o2 = e2.props, i2 = e2.query, c2 = e2.refresh, a2 = e2.store, u2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = function(e4, t4) {
        if (null == e4) return {};
        var n4, r4, o4 = {}, i4 = Object.keys(e4);
        for (r4 = 0; r4 < i4.length; r4++) n4 = i4[r4], t4.indexOf(n4) >= 0 || (o4[n4] = e4[n4]);
        return o4;
      }(e3, t3);
      if (Object.getOwnPropertySymbols) {
        var i3 = Object.getOwnPropertySymbols(e3);
        for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n3) && (o3[n3] = e3[n3]);
      }
      return o3;
    }(e2, hn);
    wn && o2.environment.clearTimeout(wn);
    var l2 = u2.setCollections, s2 = u2.setIsOpen, f2 = u2.setQuery, p2 = u2.setActiveItemId, m2 = u2.setStatus;
    if (f2(i2), p2(o2.defaultActiveItemId), !i2 && false === o2.openOnFocus) {
      var v2, d2 = a2.getState().collections.map(function(e3) {
        return _n(_n({}, e3), {}, { items: [] });
      });
      m2("idle"), l2(d2), s2(null !== (v2 = r2.isOpen) && void 0 !== v2 ? v2 : o2.shouldPanelOpen({ state: a2.getState() }));
      var h2 = Rt(En(d2).then(function() {
        return Promise.resolve();
      }));
      return a2.pendingRequests.add(h2);
    }
    m2("loading"), wn = o2.environment.setTimeout(function() {
      m2("stalled");
    }, o2.stallThreshold);
    var y2 = Rt(En(o2.getSources(_n({ query: i2, refresh: c2, state: a2.getState() }, u2)).then(function(e3) {
      return Promise.all(e3.map(function(e4) {
        return Promise.resolve(e4.getItems(_n({ query: i2, refresh: c2, state: a2.getState() }, u2))).then(function(t3) {
          return function(e5, t4, n3) {
            if (o3 = e5, Boolean(null == o3 ? void 0 : o3.execute)) {
              var r3 = "algolia" === e5.requesterId ? Object.assign.apply(Object, [{}].concat(fn(Object.keys(n3.context).map(function(e6) {
                var t5;
                return null === (t5 = n3.context[e6]) || void 0 === t5 ? void 0 : t5.__algoliaSearchParameters;
              })))) : {};
              return ln(ln({}, e5), {}, { requests: e5.queries.map(function(n4) {
                return { query: "algolia" === e5.requesterId ? ln(ln({}, n4), {}, { params: ln(ln({}, r3), n4.params) }) : n4, sourceId: t4, transformResponse: e5.transformResponse };
              }) });
            }
            var o3;
            return { items: e5, sourceId: t4 };
          }(t3, e4.sourceId, a2.getState());
        });
      })).then(vn).then(function(t3) {
        return function(e4, t4, n3) {
          return t4.map(function(t5) {
            var r3, o3 = e4.filter(function(e5) {
              return e5.sourceId === t5.sourceId;
            }), i3 = o3.map(function(e5) {
              return e5.items;
            }), c3 = o3[0].transformResponse, a3 = c3 ? c3({ results: r3 = i3, hits: r3.map(function(e5) {
              return e5.hits;
            }).filter(Boolean), facetHits: r3.map(function(e5) {
              var t6;
              return null === (t6 = e5.facetHits) || void 0 === t6 ? void 0 : t6.map(function(e6) {
                return { label: e6.value, count: e6.count, _highlightResult: { label: { value: e6.highlighted } } };
              });
            }).filter(Boolean) }) : i3;
            return t5.onResolve({ source: t5, results: i3, items: a3, state: n3.getState() }), a3.every(Boolean), 'The `getItems` function from source "'.concat(t5.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), { source: t5, items: a3 };
          });
        }(t3, e3, a2);
      }).then(function(e4) {
        return function(e5) {
          var t3 = e5.props, n3 = e5.state, r3 = e5.collections.reduce(function(e6, t4) {
            return on(on({}, e6), {}, cn({}, t4.source.sourceId, on(on({}, t4.source), {}, { getItems: function() {
              return rt(t4.items);
            } })));
          }, {}), o3 = t3.plugins.reduce(function(e6, t4) {
            return t4.reshape ? t4.reshape(e6) : e6;
          }, { sourcesBySourceId: r3, state: n3 }).sourcesBySourceId;
          return rt(t3.reshape({ sourcesBySourceId: o3, sources: Object.values(o3), state: n3 })).filter(Boolean).map(function(e6) {
            return { source: e6, items: e6.getItems() };
          });
        }({ collections: e4, props: o2, state: a2.getState() });
      });
    }))).then(function(e3) {
      var n3;
      m2("idle"), l2(e3);
      var f3 = o2.shouldPanelOpen({ state: a2.getState() });
      s2(null !== (n3 = r2.isOpen) && void 0 !== n3 ? n3 : o2.openOnFocus && !i2 && f3 || f3);
      var p3 = Bt(a2.getState());
      if (null !== a2.getState().activeItemId && p3) {
        var v3 = p3.item, d3 = p3.itemInputValue, h3 = p3.itemUrl, y3 = p3.source;
        y3.onActive(_n({ event: t2, item: v3, itemInputValue: d3, itemUrl: h3, refresh: c2, source: y3, state: a2.getState() }, u2));
      }
    }).finally(function() {
      m2("idle"), wn && o2.environment.clearTimeout(wn);
    });
    return a2.pendingRequests.add(y2);
  }
  function Pn(e2) {
    return Pn = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, Pn(e2);
  }
  var In = ["event", "props", "refresh", "store"];
  function Dn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function kn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Dn(Object(n2), true).forEach(function(t3) {
        Cn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Dn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Cn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Pn(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== Pn(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Pn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function An(e2) {
    return An = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, An(e2);
  }
  var xn = ["props", "refresh", "store"];
  var Nn = ["inputElement", "formElement", "panelElement"];
  var Tn = ["inputElement"];
  var Rn = ["inputElement", "maxLength"];
  var qn = ["sourceIndex"];
  var Ln = ["sourceIndex"];
  var Mn = ["item", "source", "sourceIndex"];
  function Hn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Un(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Hn(Object(n2), true).forEach(function(t3) {
        Fn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Hn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Fn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== An(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== An(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === An(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Bn(e2, t2) {
    if (null == e2) return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Vn(e2) {
    return Vn = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, Vn(e2);
  }
  function Kn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Wn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Kn(Object(n2), true).forEach(function(t3) {
        zn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Kn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function zn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Vn(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== Vn(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Vn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Jn(e2) {
    var t2, n2, r2, o2, i2 = e2.plugins, c2 = e2.options, a2 = null === (t2 = ((null === (n2 = c2.__autocomplete_metadata) || void 0 === n2 ? void 0 : n2.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, u2 = a2 ? zn({}, a2, Object.keys((null === (r2 = c2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
    return { plugins: i2.map(function(e3) {
      return { name: e3.name, options: Object.keys(e3.__autocomplete_pluginOptions || []) };
    }), options: Wn({ "autocomplete-core": Object.keys(c2) }, u2), ua: lt.concat((null === (o2 = c2.__autocomplete_metadata) || void 0 === o2 ? void 0 : o2.userAgents) || []) };
  }
  function $n(e2) {
    var t2, n2 = e2.state;
    return false === n2.isOpen || null === n2.activeItemId ? null : (null === (t2 = Bt(n2)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
  }
  function Zn(e2) {
    return Zn = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, Zn(e2);
  }
  function Qn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Gn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Qn(Object(n2), true).forEach(function(t3) {
        Yn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Qn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Yn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== Zn(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== Zn(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Zn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var Xn = function(e2, t2) {
    switch (t2.type) {
      case "setActiveItemId":
      case "mousemove":
        return Gn(Gn({}, e2), {}, { activeItemId: t2.payload });
      case "setQuery":
        return Gn(Gn({}, e2), {}, { query: t2.payload, completion: null });
      case "setCollections":
        return Gn(Gn({}, e2), {}, { collections: t2.payload });
      case "setIsOpen":
        return Gn(Gn({}, e2), {}, { isOpen: t2.payload });
      case "setStatus":
        return Gn(Gn({}, e2), {}, { status: t2.payload });
      case "setContext":
        return Gn(Gn({}, e2), {}, { context: Gn(Gn({}, e2.context), t2.payload) });
      case "ArrowDown":
        var n2 = Gn(Gn({}, e2), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : Lt(1, e2.activeItemId, it(e2), t2.props.defaultActiveItemId) });
        return Gn(Gn({}, n2), {}, { completion: $n({ state: n2 }) });
      case "ArrowUp":
        var r2 = Gn(Gn({}, e2), {}, { activeItemId: Lt(-1, e2.activeItemId, it(e2), t2.props.defaultActiveItemId) });
        return Gn(Gn({}, r2), {}, { completion: $n({ state: r2 }) });
      case "Escape":
        return e2.isOpen ? Gn(Gn({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : Gn(Gn({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
      case "submit":
        return Gn(Gn({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
      case "reset":
        return Gn(Gn({}, e2), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", query: "" });
      case "focus":
        return Gn(Gn({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
      case "blur":
        return t2.props.debug ? e2 : Gn(Gn({}, e2), {}, { isOpen: false, activeItemId: null });
      case "mouseleave":
        return Gn(Gn({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
      default:
        return "The reducer action ".concat(JSON.stringify(t2.type), " is not supported."), e2;
    }
  };
  function er(e2) {
    return er = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e3) {
      return n(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : n(e3);
    }, er(e2);
  }
  function tr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function nr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? tr(Object(n2), true).forEach(function(t3) {
        rr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : tr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function rr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4, t4) {
        if ("object" !== er(e4) || null === e4) return e4;
        var n3 = e4[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e4, "string");
          if ("object" !== er(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === er(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function or(e2) {
    var t2 = [], n2 = function(e3, t3) {
      var n3, r3 = "undefined" != typeof window ? window : {}, o3 = e3.plugins || [];
      return en(en({ debug: false, openOnFocus: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: false, environment: r3, shouldPanelOpen: function(e4) {
        return it(e4.state) > 0;
      }, reshape: function(e4) {
        return e4.sources;
      } }, e3), {}, { id: null !== (n3 = e3.id) && void 0 !== n3 ? n3 : "autocomplete-".concat(ot++), plugins: o3, initialState: en({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e3.initialState), onStateChange: function(t4) {
        var n4;
        null === (n4 = e3.onStateChange) || void 0 === n4 || n4.call(e3, t4), o3.forEach(function(e4) {
          var n5;
          return null === (n5 = e4.onStateChange) || void 0 === n5 ? void 0 : n5.call(e4, t4);
        });
      }, onSubmit: function(t4) {
        var n4;
        null === (n4 = e3.onSubmit) || void 0 === n4 || n4.call(e3, t4), o3.forEach(function(e4) {
          var n5;
          return null === (n5 = e4.onSubmit) || void 0 === n5 ? void 0 : n5.call(e4, t4);
        });
      }, onReset: function(t4) {
        var n4;
        null === (n4 = e3.onReset) || void 0 === n4 || n4.call(e3, t4), o3.forEach(function(e4) {
          var n5;
          return null === (n5 = e4.onReset) || void 0 === n5 ? void 0 : n5.call(e4, t4);
        });
      }, getSources: function(n4) {
        return Promise.all([].concat(function(e4) {
          return function(e5) {
            if (Array.isArray(e5)) return Yt(e5);
          }(e4) || function(e5) {
            if ("undefined" != typeof Symbol && null != e5[Symbol.iterator] || null != e5["@@iterator"]) return Array.from(e5);
          }(e4) || function(e5, t4) {
            if (e5) {
              if ("string" == typeof e5) return Yt(e5, t4);
              var n5 = Object.prototype.toString.call(e5).slice(8, -1);
              return "Object" === n5 && e5.constructor && (n5 = e5.constructor.name), "Map" === n5 || "Set" === n5 ? Array.from(e5) : "Arguments" === n5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? Yt(e5, t4) : void 0;
            }
          }(e4) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(o3.map(function(e4) {
          return e4.getSources;
        })), [e3.getSources]).filter(Boolean).map(function(e4) {
          return function(e5, t4) {
            var n5 = [];
            return Promise.resolve(e5(t4)).then(function(e6) {
              return Promise.all(e6.filter(function(e7) {
                return Boolean(e7);
              }).map(function(e7) {
                if (e7.sourceId, n5.includes(e7.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e7.sourceId), " is not unique."));
                n5.push(e7.sourceId);
                var t5 = { getItemInputValue: function(e8) {
                  return e8.state.query;
                }, getItemUrl: function() {
                }, onSelect: function(e8) {
                  (0, e8.setIsOpen)(false);
                }, onActive: ut, onResolve: ut };
                Object.keys(t5).forEach(function(e8) {
                  t5[e8].__default = true;
                });
                var r4 = Ht(Ht({}, t5), e7);
                return Promise.resolve(r4);
              }));
            });
          }(e4, n4);
        })).then(function(e4) {
          return rt(e4);
        }).then(function(e4) {
          return e4.map(function(e5) {
            return en(en({}, e5), {}, { onSelect: function(n5) {
              e5.onSelect(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onSelect) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            }, onActive: function(n5) {
              e5.onActive(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onActive) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            }, onResolve: function(n5) {
              e5.onResolve(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onResolve) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            } });
          });
        });
      }, navigator: en({ navigate: function(e4) {
        var t4 = e4.itemUrl;
        r3.location.assign(t4);
      }, navigateNewTab: function(e4) {
        var t4 = e4.itemUrl, n4 = r3.open(t4, "_blank", "noopener");
        null == n4 || n4.focus();
      }, navigateNewWindow: function(e4) {
        var t4 = e4.itemUrl;
        r3.open(t4, "_blank", "noopener");
      } }, e3.navigator) });
    }(e2, t2), r2 = function(e3, t3, n3) {
      var r3, o3 = t3.initialState;
      return { getState: function() {
        return o3;
      }, dispatch: function(r4, i3) {
        var c3 = function(e4) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var n4 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? Wt(Object(n4), true).forEach(function(t5) {
              zt(e4, t5, n4[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n4)) : Wt(Object(n4)).forEach(function(t5) {
              Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(n4, t5));
            });
          }
          return e4;
        }({}, o3);
        o3 = e3(o3, { type: r4, props: t3, payload: i3 }), n3({ state: o3, prevState: c3 });
      }, pendingRequests: (r3 = [], { add: function(e4) {
        return r3.push(e4), e4.finally(function() {
          r3 = r3.filter(function(t4) {
            return t4 !== e4;
          });
        });
      }, cancelAll: function() {
        r3.forEach(function(e4) {
          return e4.cancel();
        });
      }, isEmpty: function() {
        return 0 === r3.length;
      } }) };
    }(Xn, n2, function(e3) {
      var t3 = e3.prevState, r3 = e3.state;
      n2.onStateChange(nr({ prevState: t3, state: r3, refresh: c2, navigator: n2.navigator }, o2));
    }), o2 = function(e3) {
      var t3 = e3.store;
      return { setActiveItemId: function(e4) {
        t3.dispatch("setActiveItemId", e4);
      }, setQuery: function(e4) {
        t3.dispatch("setQuery", e4);
      }, setCollections: function(e4) {
        var n3 = 0, r3 = e4.map(function(e5) {
          return Zt(Zt({}, e5), {}, { items: rt(e5.items).map(function(e6) {
            return Zt(Zt({}, e6), {}, { __autocomplete_id: n3++ });
          }) });
        });
        t3.dispatch("setCollections", r3);
      }, setIsOpen: function(e4) {
        t3.dispatch("setIsOpen", e4);
      }, setStatus: function(e4) {
        t3.dispatch("setStatus", e4);
      }, setContext: function(e4) {
        t3.dispatch("setContext", e4);
      } };
    }({ store: r2 }), i2 = function(e3) {
      var t3 = e3.props, n3 = e3.refresh, r3 = e3.store, o3 = Bn(e3, xn), i3 = function(e4, t4) {
        return void 0 !== t4 ? "".concat(e4, "-").concat(t4) : e4;
      };
      return { getEnvironmentProps: function(e4) {
        var n4 = e4.inputElement, o4 = e4.formElement, i4 = e4.panelElement;
        function c3(e5) {
          !r3.getState().isOpen && r3.pendingRequests.isEmpty() || e5.target === n4 || false === [o4, i4].some(function(t4) {
            return (n5 = t4) === (r4 = e5.target) || n5.contains(r4);
            var n5, r4;
          }) && (r3.dispatch("blur", null), t3.debug || r3.pendingRequests.cancelAll());
        }
        return Un({ onTouchStart: c3, onMouseDown: c3, onTouchMove: function(e5) {
          false !== r3.getState().isOpen && n4 === t3.environment.document.activeElement && e5.target !== n4 && n4.blur();
        } }, Bn(e4, Nn));
      }, getRootProps: function(e4) {
        return Un({ role: "combobox", "aria-expanded": r3.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r3.getState().isOpen ? "".concat(t3.id, "-list") : void 0, "aria-labelledby": "".concat(t3.id, "-label") }, e4);
      }, getFormProps: function(e4) {
        return e4.inputElement, Un({ action: "", noValidate: true, role: "search", onSubmit: function(i4) {
          var c3;
          i4.preventDefault(), t3.onSubmit(Un({ event: i4, refresh: n3, state: r3.getState() }, o3)), r3.dispatch("submit", null), null === (c3 = e4.inputElement) || void 0 === c3 || c3.blur();
        }, onReset: function(i4) {
          var c3;
          i4.preventDefault(), t3.onReset(Un({ event: i4, refresh: n3, state: r3.getState() }, o3)), r3.dispatch("reset", null), null === (c3 = e4.inputElement) || void 0 === c3 || c3.focus();
        } }, Bn(e4, Tn));
      }, getLabelProps: function(e4) {
        var n4 = e4 || {}, r4 = n4.sourceIndex, o4 = Bn(n4, qn);
        return Un({ htmlFor: "".concat(i3(t3.id, r4), "-input"), id: "".concat(i3(t3.id, r4), "-label") }, o4);
      }, getInputProps: function(e4) {
        var i4;
        function c3(e5) {
          (t3.openOnFocus || Boolean(r3.getState().query)) && jn(Un({ event: e5, props: t3, query: r3.getState().completion || r3.getState().query, refresh: n3, store: r3 }, o3)), r3.dispatch("focus", null);
        }
        var a3 = e4 || {}, u2 = (a3.inputElement, a3.maxLength), l2 = void 0 === u2 ? 512 : u2, s2 = Bn(a3, Rn), f2 = Bt(r3.getState()), p2 = function(e5) {
          return Boolean(e5 && e5.match(Vt));
        }((null === (i4 = t3.environment.navigator) || void 0 === i4 ? void 0 : i4.userAgent) || ""), m2 = null != f2 && f2.itemUrl && !p2 ? "go" : "search";
        return Un({ "aria-autocomplete": "both", "aria-activedescendant": r3.getState().isOpen && null !== r3.getState().activeItemId ? "".concat(t3.id, "-item-").concat(r3.getState().activeItemId) : void 0, "aria-controls": r3.getState().isOpen ? "".concat(t3.id, "-list") : void 0, "aria-labelledby": "".concat(t3.id, "-label"), value: r3.getState().completion || r3.getState().query, id: "".concat(t3.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: m2, spellCheck: "false", autoFocus: t3.autoFocus, placeholder: t3.placeholder, maxLength: l2, type: "search", onChange: function(e5) {
          jn(Un({ event: e5, props: t3, query: e5.currentTarget.value.slice(0, l2), refresh: n3, store: r3 }, o3));
        }, onKeyDown: function(e5) {
          !function(e6) {
            var t4 = e6.event, n4 = e6.props, r4 = e6.refresh, o4 = e6.store, i5 = function(e7, t5) {
              if (null == e7) return {};
              var n5, r5, o5 = function(e8, t6) {
                if (null == e8) return {};
                var n6, r6, o6 = {}, i7 = Object.keys(e8);
                for (r6 = 0; r6 < i7.length; r6++) n6 = i7[r6], t6.indexOf(n6) >= 0 || (o6[n6] = e8[n6]);
                return o6;
              }(e7, t5);
              if (Object.getOwnPropertySymbols) {
                var i6 = Object.getOwnPropertySymbols(e7);
                for (r5 = 0; r5 < i6.length; r5++) n5 = i6[r5], t5.indexOf(n5) >= 0 || Object.prototype.propertyIsEnumerable.call(e7, n5) && (o5[n5] = e7[n5]);
              }
              return o5;
            }(e6, In);
            if ("ArrowUp" === t4.key || "ArrowDown" === t4.key) {
              var c4 = function() {
                var e7 = n4.environment.document.getElementById("".concat(n4.id, "-item-").concat(o4.getState().activeItemId));
                e7 && (e7.scrollIntoViewIfNeeded ? e7.scrollIntoViewIfNeeded(false) : e7.scrollIntoView(false));
              }, a4 = function() {
                var e7 = Bt(o4.getState());
                if (null !== o4.getState().activeItemId && e7) {
                  var n5 = e7.item, c5 = e7.itemInputValue, a5 = e7.itemUrl, u4 = e7.source;
                  u4.onActive(kn({ event: t4, item: n5, itemInputValue: c5, itemUrl: a5, refresh: r4, source: u4, state: o4.getState() }, i5));
                }
              };
              t4.preventDefault(), false === o4.getState().isOpen && (n4.openOnFocus || Boolean(o4.getState().query)) ? jn(kn({ event: t4, props: n4, query: o4.getState().query, refresh: r4, store: o4 }, i5)).then(function() {
                o4.dispatch(t4.key, { nextActiveItemId: n4.defaultActiveItemId }), a4(), setTimeout(c4, 0);
              }) : (o4.dispatch(t4.key, {}), a4(), c4());
            } else if ("Escape" === t4.key) t4.preventDefault(), o4.dispatch(t4.key, null), o4.pendingRequests.cancelAll();
            else if ("Tab" === t4.key) o4.dispatch("blur", null), o4.pendingRequests.cancelAll();
            else if ("Enter" === t4.key) {
              if (null === o4.getState().activeItemId || o4.getState().collections.every(function(e7) {
                return 0 === e7.items.length;
              })) return void (n4.debug || o4.pendingRequests.cancelAll());
              t4.preventDefault();
              var u3 = Bt(o4.getState()), l3 = u3.item, s3 = u3.itemInputValue, f3 = u3.itemUrl, p3 = u3.source;
              if (t4.metaKey || t4.ctrlKey) void 0 !== f3 && (p3.onSelect(kn({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i5)), n4.navigator.navigateNewTab({ itemUrl: f3, item: l3, state: o4.getState() }));
              else if (t4.shiftKey) void 0 !== f3 && (p3.onSelect(kn({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i5)), n4.navigator.navigateNewWindow({ itemUrl: f3, item: l3, state: o4.getState() }));
              else if (t4.altKey) ;
              else {
                if (void 0 !== f3) return p3.onSelect(kn({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i5)), void n4.navigator.navigate({ itemUrl: f3, item: l3, state: o4.getState() });
                jn(kn({ event: t4, nextState: { isOpen: false }, props: n4, query: s3, refresh: r4, store: o4 }, i5)).then(function() {
                  p3.onSelect(kn({ event: t4, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i5));
                });
              }
            }
          }(Un({ event: e5, props: t3, refresh: n3, store: r3 }, o3));
        }, onFocus: c3, onBlur: ut, onClick: function(n4) {
          e4.inputElement !== t3.environment.document.activeElement || r3.getState().isOpen || c3(n4);
        } }, s2);
      }, getPanelProps: function(e4) {
        return Un({ onMouseDown: function(e5) {
          e5.preventDefault();
        }, onMouseLeave: function() {
          r3.dispatch("mouseleave", null);
        } }, e4);
      }, getListProps: function(e4) {
        var n4 = e4 || {}, r4 = n4.sourceIndex, o4 = Bn(n4, Ln);
        return Un({ role: "listbox", "aria-labelledby": "".concat(i3(t3.id, r4), "-label"), id: "".concat(i3(t3.id, r4), "-list") }, o4);
      }, getItemProps: function(e4) {
        var c3 = e4.item, a3 = e4.source, u2 = e4.sourceIndex, l2 = Bn(e4, Mn);
        return Un({ id: "".concat(i3(t3.id, u2), "-item-").concat(c3.__autocomplete_id), role: "option", "aria-selected": r3.getState().activeItemId === c3.__autocomplete_id, onMouseMove: function(e5) {
          if (c3.__autocomplete_id !== r3.getState().activeItemId) {
            r3.dispatch("mousemove", c3.__autocomplete_id);
            var t4 = Bt(r3.getState());
            if (null !== r3.getState().activeItemId && t4) {
              var i4 = t4.item, a4 = t4.itemInputValue, u3 = t4.itemUrl, l3 = t4.source;
              l3.onActive(Un({ event: e5, item: i4, itemInputValue: a4, itemUrl: u3, refresh: n3, source: l3, state: r3.getState() }, o3));
            }
          }
        }, onMouseDown: function(e5) {
          e5.preventDefault();
        }, onClick: function(e5) {
          var i4 = a3.getItemInputValue({ item: c3, state: r3.getState() }), u3 = a3.getItemUrl({ item: c3, state: r3.getState() });
          (u3 ? Promise.resolve() : jn(Un({ event: e5, nextState: { isOpen: false }, props: t3, query: i4, refresh: n3, store: r3 }, o3))).then(function() {
            a3.onSelect(Un({ event: e5, item: c3, itemInputValue: i4, itemUrl: u3, refresh: n3, source: a3, state: r3.getState() }, o3));
          });
        } }, l2);
      } };
    }(nr({ props: n2, refresh: c2, store: r2, navigator: n2.navigator }, o2));
    function c2() {
      return jn(nr({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, navigator: n2.navigator, query: r2.getState().query, refresh: c2, store: r2 }, o2));
    }
    if (e2.insights && !n2.plugins.some(function(e3) {
      return "aa.algoliaInsightsPlugin" === e3.name;
    })) {
      var a2 = "boolean" == typeof e2.insights ? {} : e2.insights;
      n2.plugins.push(Nt(a2));
    }
    return n2.plugins.forEach(function(e3) {
      var r3;
      return null === (r3 = e3.subscribe) || void 0 === r3 ? void 0 : r3.call(e3, nr(nr({}, o2), {}, { navigator: n2.navigator, refresh: c2, onSelect: function(e4) {
        t2.push({ onSelect: e4 });
      }, onActive: function(e4) {
        t2.push({ onActive: e4 });
      }, onResolve: function(e4) {
        t2.push({ onResolve: e4 });
      } }));
    }), function(e3) {
      var t3, n3, r3 = e3.metadata, o3 = e3.environment;
      if (null === (t3 = o3.navigator) || void 0 === t3 || null === (n3 = t3.userAgent) || void 0 === n3 ? void 0 : n3.includes("Algolia Crawler")) {
        var i3 = o3.document.createElement("meta"), c3 = o3.document.querySelector("head");
        i3.name = "algolia:metadata", setTimeout(function() {
          i3.content = JSON.stringify(r3), c3.appendChild(i3);
        }, 0);
      }
    }({ metadata: Jn({ plugins: n2.plugins, options: e2 }), environment: n2.environment }), nr(nr({ refresh: c2, navigator: n2.navigator }, i2), o2);
  }
  function ir(e2) {
    var t2 = e2.translations, n2 = (void 0 === t2 ? {} : t2).searchByText, r2 = void 0 === n2 ? "Search by" : n2;
    return Fe.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, Fe.createElement("span", { className: "DocSearch-Label" }, r2), Fe.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, Fe.createElement("defs", null, Fe.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), Fe.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Fe.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), Fe.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), Fe.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Fe.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), Fe.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Fe.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Fe.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), Fe.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
  }
  function cr(e2) {
    return Fe.createElement("svg", { width: "15", height: "15", "aria-label": e2.ariaLabel, role: "img" }, Fe.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
  }
  function ar(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.selectText, o2 = void 0 === r2 ? "to select" : r2, i2 = n2.selectKeyAriaLabel, c2 = void 0 === i2 ? "Enter key" : i2, a2 = n2.navigateText, u2 = void 0 === a2 ? "to navigate" : a2, l2 = n2.navigateUpKeyAriaLabel, s2 = void 0 === l2 ? "Arrow up" : l2, f2 = n2.navigateDownKeyAriaLabel, p2 = void 0 === f2 ? "Arrow down" : f2, m2 = n2.closeText, v2 = void 0 === m2 ? "to close" : m2, d2 = n2.closeKeyAriaLabel, h2 = void 0 === d2 ? "Escape key" : d2, y2 = n2.searchByText, _2 = void 0 === y2 ? "Search by" : y2;
    return Fe.createElement(Fe.Fragment, null, Fe.createElement("div", { className: "DocSearch-Logo" }, Fe.createElement(ir, { translations: { searchByText: _2 } })), Fe.createElement("ul", { className: "DocSearch-Commands" }, Fe.createElement("li", null, Fe.createElement("kbd", { className: "DocSearch-Commands-Key" }, Fe.createElement(cr, { ariaLabel: c2 }, Fe.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), Fe.createElement("span", { className: "DocSearch-Label" }, o2)), Fe.createElement("li", null, Fe.createElement("kbd", { className: "DocSearch-Commands-Key" }, Fe.createElement(cr, { ariaLabel: p2 }, Fe.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), Fe.createElement("kbd", { className: "DocSearch-Commands-Key" }, Fe.createElement(cr, { ariaLabel: s2 }, Fe.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), Fe.createElement("span", { className: "DocSearch-Label" }, u2)), Fe.createElement("li", null, Fe.createElement("kbd", { className: "DocSearch-Commands-Key" }, Fe.createElement(cr, { ariaLabel: h2 }, Fe.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), Fe.createElement("span", { className: "DocSearch-Label" }, v2))));
  }
  function ur(e2) {
    var t2 = e2.hit, n2 = e2.children;
    return Fe.createElement("a", { href: t2.url }, n2);
  }
  function lr() {
    return Fe.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, Fe.createElement("g", { fill: "none", fillRule: "evenodd" }, Fe.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Fe.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Fe.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Fe.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
  }
  function sr() {
    return Fe.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Fe.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Fe.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Fe.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
  }
  function fr() {
    return Fe.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Fe.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function pr() {
    return Fe.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Fe.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Fe.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Fe.createElement("path", { d: "M8 17l-6-6 6-6" })));
  }
  var mr = function() {
    return Fe.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Fe.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  };
  function vr(e2) {
    switch (e2.type) {
      case "lvl1":
        return Fe.createElement(mr, null);
      case "content":
        return Fe.createElement(hr, null);
      default:
        return Fe.createElement(dr, null);
    }
  }
  function dr() {
    return Fe.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Fe.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function hr() {
    return Fe.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Fe.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function yr() {
    return Fe.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Fe.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function _r() {
    return Fe.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Fe.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
  }
  function br() {
    return Fe.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Fe.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
  }
  function gr(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.titleText, o2 = void 0 === r2 ? "Unable to fetch results" : r2, i2 = n2.helpText, c2 = void 0 === i2 ? "You might want to check your network connection." : i2;
    return Fe.createElement("div", { className: "DocSearch-ErrorScreen" }, Fe.createElement("div", { className: "DocSearch-Screen-Icon" }, Fe.createElement(_r, null)), Fe.createElement("p", { className: "DocSearch-Title" }, o2), Fe.createElement("p", { className: "DocSearch-Help" }, c2));
  }
  var Sr = ["translations"];
  function Or(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Je(e2, Sr), o2 = n2.noResultsText, i2 = void 0 === o2 ? "No results for" : o2, c2 = n2.suggestedQueryText, a2 = void 0 === c2 ? "Try searching for" : c2, u2 = n2.reportMissingResultsText, l2 = void 0 === u2 ? "Believe this query should return results?" : u2, s2 = n2.reportMissingResultsLinkText, f2 = void 0 === s2 ? "Let us know." : s2, p2 = r2.state.context.searchSuggestions;
    return Fe.createElement("div", { className: "DocSearch-NoResults" }, Fe.createElement("div", { className: "DocSearch-Screen-Icon" }, Fe.createElement(br, null)), Fe.createElement("p", { className: "DocSearch-Title" }, i2, ' "', Fe.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && Fe.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Fe.createElement("p", { className: "DocSearch-Help" }, a2, ":"), Fe.createElement("ul", null, p2.slice(0, 3).reduce(function(e3, t3) {
      return [].concat(function(e4) {
        return function(e5) {
          if (Array.isArray(e5)) return Qe(e5);
        }(e4) || function(e5) {
          if ("undefined" != typeof Symbol && null != e5[Symbol.iterator] || null != e5["@@iterator"]) return Array.from(e5);
        }(e4) || Ze(e4) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }(e3), [Fe.createElement("li", { key: t3 }, Fe.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
        r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
      } }, t3))]);
    }, []))), r2.getMissingResultsUrl && Fe.createElement("p", { className: "DocSearch-Help" }, "".concat(l2, " "), Fe.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
  }
  var wr = ["hit", "attribute", "tagName"];
  function Er(e2, t2) {
    return t2.split(".").reduce(function(e3, t3) {
      return null != e3 && e3[t3] ? e3[t3] : null;
    }, e2);
  }
  function jr(e2) {
    var t2 = e2.hit, n2 = e2.attribute, r2 = e2.tagName;
    return b(void 0 === r2 ? "span" : r2, Ke(Ke({}, Je(e2, wr)), {}, { dangerouslySetInnerHTML: { __html: Er(t2, "_snippetResult.".concat(n2, ".value")) || Er(t2, n2) } }));
  }
  function Pr(e2) {
    return e2.collection && 0 !== e2.collection.items.length ? Fe.createElement("section", { className: "DocSearch-Hits" }, Fe.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), Fe.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n2) {
      return Fe.createElement(Ir, ze({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n2 }, e2));
    }))) : null;
  }
  function Ir(e2) {
    var t2 = e2.item, n2 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, i2 = e2.getItemProps, c2 = e2.onItemClick, a2 = e2.collection, u2 = e2.hitComponent, l2 = $e(Fe.useState(false), 2), s2 = l2[0], f2 = l2[1], p2 = $e(Fe.useState(false), 2), m2 = p2[0], v2 = p2[1], d2 = Fe.useRef(null), h2 = u2;
    return Fe.createElement("li", ze({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s2 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
      d2.current && d2.current();
    } }, i2({ item: t2, source: a2.source, onClick: function(e3) {
      c2(t2, e3);
    } })), Fe.createElement(h2, { hit: t2 }, Fe.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && "lvl1" === t2.type && Fe.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Fe.createElement(jr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && Fe.createElement(jr, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && Fe.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Fe.createElement(jr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), Fe.createElement(jr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && Fe.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Fe.createElement(jr, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), Fe.createElement(jr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
      f2(true), d2.current = e3;
    }, runFavoriteTransition: function(e3) {
      v2(true), d2.current = e3;
    } }))));
  }
  function Dr(e2, t2, n2) {
    return e2.reduce(function(e3, r2) {
      var o2 = t2(r2);
      return e3.hasOwnProperty(o2) || (e3[o2] = []), e3[o2].length < (n2 || 5) && e3[o2].push(r2), e3;
    }, {});
  }
  function kr(e2) {
    return e2;
  }
  function Cr(e2) {
    return 1 === e2.button || e2.altKey || e2.ctrlKey || e2.metaKey || e2.shiftKey;
  }
  function Ar() {
  }
  var xr = /(<mark>|<\/mark>)/g;
  var Nr = RegExp(xr.source);
  function Tr(e2) {
    var t2, n2, r2 = e2;
    if (!r2.__docsearch_parent && !e2._highlightResult) return e2.hierarchy.lvl0;
    var o2 = ((r2.__docsearch_parent ? null === (t2 = r2.__docsearch_parent) || void 0 === t2 || null === (t2 = t2._highlightResult) || void 0 === t2 || null === (t2 = t2.hierarchy) || void 0 === t2 ? void 0 : t2.lvl0 : null === (n2 = e2._highlightResult) || void 0 === n2 || null === (n2 = n2.hierarchy) || void 0 === n2 ? void 0 : n2.lvl0) || {}).value;
    return o2 && Nr.test(o2) ? o2.replace(xr, "") : o2;
  }
  function Rr(e2) {
    return Fe.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2) {
      if (0 === t2.items.length) return null;
      var n2 = Tr(t2.items[0]);
      return Fe.createElement(Pr, ze({}, e2, { key: t2.source.sourceId, title: n2, collection: t2, renderIcon: function(e3) {
        var n3, r2 = e3.item, o2 = e3.index;
        return Fe.createElement(Fe.Fragment, null, r2.__docsearch_parent && Fe.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Fe.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r2.__docsearch_parent !== (null === (n3 = t2.items[o2 + 1]) || void 0 === n3 ? void 0 : n3.__docsearch_parent) ? Fe.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Fe.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Fe.createElement("div", { className: "DocSearch-Hit-icon" }, Fe.createElement(vr, { type: r2.type })));
      }, renderAction: function() {
        return Fe.createElement("div", { className: "DocSearch-Hit-action" }, Fe.createElement(pr, null));
      } }));
    }), e2.resultsFooterComponent && Fe.createElement("section", { className: "DocSearch-HitsFooter" }, Fe.createElement(e2.resultsFooterComponent, { state: e2.state })));
  }
  var qr = ["translations"];
  function Lr(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Je(e2, qr), o2 = n2.recentSearchesTitle, i2 = void 0 === o2 ? "Recent" : o2, c2 = n2.noRecentSearchesText, a2 = void 0 === c2 ? "No recent searches" : c2, u2 = n2.saveRecentSearchButtonTitle, l2 = void 0 === u2 ? "Save this search" : u2, s2 = n2.removeRecentSearchButtonTitle, f2 = void 0 === s2 ? "Remove this search from history" : s2, p2 = n2.favoriteSearchesTitle, m2 = void 0 === p2 ? "Favorite" : p2, v2 = n2.removeFavoriteSearchButtonTitle, d2 = void 0 === v2 ? "Remove this search from favorites" : v2;
    return "idle" === r2.state.status && false === r2.hasCollections ? r2.disableUserPersonalization ? null : Fe.createElement("div", { className: "DocSearch-StartScreen" }, Fe.createElement("p", { className: "DocSearch-Help" }, a2)) : false === r2.hasCollections ? null : Fe.createElement("div", { className: "DocSearch-Dropdown-Container" }, Fe.createElement(Pr, ze({}, r2, { title: i2, collection: r2.state.collections[0], renderIcon: function() {
      return Fe.createElement("div", { className: "DocSearch-Hit-icon" }, Fe.createElement(sr, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runFavoriteTransition, o3 = e3.runDeleteTransition;
      return Fe.createElement(Fe.Fragment, null, Fe.createElement("div", { className: "DocSearch-Hit-action" }, Fe.createElement("button", { className: "DocSearch-Hit-action-button", title: l2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, Fe.createElement(yr, null))), Fe.createElement("div", { className: "DocSearch-Hit-action" }, Fe.createElement("button", { className: "DocSearch-Hit-action-button", title: f2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), o3(function() {
          r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, Fe.createElement(fr, null))));
    } })), Fe.createElement(Pr, ze({}, r2, { title: m2, collection: r2.state.collections[1], renderIcon: function() {
      return Fe.createElement("div", { className: "DocSearch-Hit-icon" }, Fe.createElement(yr, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runDeleteTransition;
      return Fe.createElement("div", { className: "DocSearch-Hit-action" }, Fe.createElement("button", { className: "DocSearch-Hit-action-button", title: d2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.remove(t3), r2.refresh();
        });
      } }, Fe.createElement(fr, null)));
    } })));
  }
  var Mr = ["translations"];
  var Hr = Fe.memo(function(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Je(e2, Mr);
    if ("error" === r2.state.status) return Fe.createElement(gr, { translations: null == n2 ? void 0 : n2.errorScreen });
    var o2 = r2.state.collections.some(function(e3) {
      return e3.items.length > 0;
    });
    return r2.state.query ? false === o2 ? Fe.createElement(Or, ze({}, r2, { translations: null == n2 ? void 0 : n2.noResultsScreen })) : Fe.createElement(Rr, r2) : Fe.createElement(Lr, ze({}, r2, { hasCollections: o2, translations: null == n2 ? void 0 : n2.startScreen }));
  }, function(e2, t2) {
    return "loading" === t2.state.status || "stalled" === t2.state.status;
  });
  var Ur = ["translations"];
  function Fr(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Je(e2, Ur), o2 = n2.resetButtonTitle, i2 = void 0 === o2 ? "Clear the query" : o2, c2 = n2.resetButtonAriaLabel, a2 = void 0 === c2 ? "Clear the query" : c2, u2 = n2.cancelButtonText, l2 = void 0 === u2 ? "Cancel" : u2, s2 = n2.cancelButtonAriaLabel, f2 = void 0 === s2 ? "Cancel" : s2, p2 = n2.searchInputLabel, m2 = void 0 === p2 ? "Search" : p2, v2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
    return Fe.useEffect(function() {
      r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
    }, [r2.autoFocus, r2.inputRef]), Fe.useEffect(function() {
      r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
    }, [r2.isFromSelection, r2.inputRef]), Fe.createElement(Fe.Fragment, null, Fe.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
      e3.preventDefault();
    }, onReset: v2 }, Fe.createElement("label", ze({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), Fe.createElement(Ye, null), Fe.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, m2)), Fe.createElement("div", { className: "DocSearch-LoadingIndicator" }, Fe.createElement(lr, null)), Fe.createElement("input", ze({ className: "DocSearch-Input", ref: r2.inputRef }, r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 64 }))), Fe.createElement("button", { type: "reset", title: i2, className: "DocSearch-Reset", "aria-label": a2, hidden: !r2.state.query }, Fe.createElement(fr, null))), Fe.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f2, onClick: r2.onClose }, l2));
  }
  var Br = ["_highlightResult", "_snippetResult"];
  function Vr(e2) {
    var t2 = e2.key, n2 = e2.limit, r2 = void 0 === n2 ? 5 : n2, o2 = function(e3) {
      return false === function() {
        var e4 = "__TEST_KEY__";
        try {
          return localStorage.setItem(e4, ""), localStorage.removeItem(e4), true;
        } catch (e5) {
          return false;
        }
      }() ? { setItem: function() {
      }, getItem: function() {
        return [];
      } } : { setItem: function(t3) {
        return window.localStorage.setItem(e3, JSON.stringify(t3));
      }, getItem: function() {
        var t3 = window.localStorage.getItem(e3);
        return t3 ? JSON.parse(t3) : [];
      } };
    }(t2), i2 = o2.getItem().slice(0, r2);
    return { add: function(e3) {
      var t3 = e3, n3 = (t3._highlightResult, t3._snippetResult, Je(t3, Br)), c2 = i2.findIndex(function(e4) {
        return e4.objectID === n3.objectID;
      });
      c2 > -1 && i2.splice(c2, 1), i2.unshift(n3), i2 = i2.slice(0, r2), o2.setItem(i2);
    }, remove: function(e3) {
      i2 = i2.filter(function(t3) {
        return t3.objectID !== e3.objectID;
      }), o2.setItem(i2);
    }, getAll: function() {
      return i2;
    } };
  }
  function Kr(e2) {
    var t2, n2 = "algoliasearch-client-js-".concat(e2.key), r2 = function() {
      return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
    }, o2 = function() {
      return JSON.parse(r2().getItem(n2) || "{}");
    }, c2 = function(e3) {
      r2().setItem(n2, JSON.stringify(e3));
    };
    return { get: function(t3, n3) {
      var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return Promise.resolve().then(function() {
        !function() {
          var t4 = e2.timeToLive ? 1e3 * e2.timeToLive : null, n5 = o2(), r4 = Object.fromEntries(Object.entries(n5).filter(function(e3) {
            return void 0 !== i(e3, 2)[1].timestamp;
          }));
          if (c2(r4), t4) {
            var a2 = Object.fromEntries(Object.entries(r4).filter(function(e3) {
              var n6 = i(e3, 2)[1], r5 = (/* @__PURE__ */ new Date()).getTime();
              return !(n6.timestamp + t4 < r5);
            }));
            c2(a2);
          }
        }();
        var n4 = JSON.stringify(t3);
        return o2()[n4];
      }).then(function(e3) {
        return Promise.all([e3 ? e3.value : n3(), void 0 !== e3]);
      }).then(function(e3) {
        var t4 = i(e3, 2), n4 = t4[0], o3 = t4[1];
        return Promise.all([n4, o3 || r3.miss(n4)]);
      }).then(function(e3) {
        return i(e3, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve().then(function() {
        var i2 = o2();
        return i2[JSON.stringify(e3)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, r2().setItem(n2, JSON.stringify(i2)), t3;
      });
    }, delete: function(e3) {
      return Promise.resolve().then(function() {
        var t3 = o2();
        delete t3[JSON.stringify(e3)], r2().setItem(n2, JSON.stringify(t3));
      });
    }, clear: function() {
      return Promise.resolve().then(function() {
        r2().removeItem(n2);
      });
    } };
  }
  function Wr(e2) {
    var t2 = c(e2.caches), n2 = t2.shift();
    return void 0 === n2 ? { get: function(e3, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return t3().then(function(e4) {
        return Promise.all([e4, n3.miss(e4)]);
      }).then(function(e4) {
        return i(e4, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve(t3);
    }, delete: function(e3) {
      return Promise.resolve();
    }, clear: function() {
      return Promise.resolve();
    } } : { get: function(e3, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return n2.get(e3, r2, o2).catch(function() {
        return Wr({ caches: t2 }).get(e3, r2, o2);
      });
    }, set: function(e3, r2) {
      return n2.set(e3, r2).catch(function() {
        return Wr({ caches: t2 }).set(e3, r2);
      });
    }, delete: function(e3) {
      return n2.delete(e3).catch(function() {
        return Wr({ caches: t2 }).delete(e3);
      });
    }, clear: function() {
      return n2.clear().catch(function() {
        return Wr({ caches: t2 }).clear();
      });
    } };
  }
  function zr() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
    return { get: function(n2, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } }, i2 = JSON.stringify(n2);
      if (i2 in t2) return Promise.resolve(e2.serializable ? JSON.parse(t2[i2]) : t2[i2]);
      var c2 = r2(), a2 = o2 && o2.miss || function() {
        return Promise.resolve();
      };
      return c2.then(function(e3) {
        return a2(e3);
      }).then(function() {
        return c2;
      });
    }, set: function(n2, r2) {
      return t2[JSON.stringify(n2)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
    }, delete: function(e3) {
      return delete t2[JSON.stringify(e3)], Promise.resolve();
    }, clear: function() {
      return t2 = {}, Promise.resolve();
    } };
  }
  function Jr(e2) {
    for (var t2 = e2.length - 1; t2 > 0; t2--) {
      var n2 = Math.floor(Math.random() * (t2 + 1)), r2 = e2[t2];
      e2[t2] = e2[n2], e2[n2] = r2;
    }
    return e2;
  }
  function $r(e2, t2) {
    return t2 ? (Object.keys(t2).forEach(function(n2) {
      e2[n2] = t2[n2](e2);
    }), e2) : e2;
  }
  function Zr(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
    var o2 = 0;
    return e2.replace(/%s/g, function() {
      return encodeURIComponent(n2[o2++]);
    });
  }
  function Qr(e2, t2) {
    var n2 = e2 || {}, r2 = n2.data || {};
    return Object.keys(n2).forEach(function(e3) {
      -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) && (r2[e3] = n2[e3]);
    }), { data: Object.entries(r2).length > 0 ? r2 : void 0, timeout: n2.timeout || t2, headers: n2.headers || {}, queryParameters: n2.queryParameters || {}, cacheable: n2.cacheable };
  }
  var Gr = { Read: 1, Write: 2, Any: 3 };
  function Yr(e2) {
    var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return t(t({}, e2), {}, { status: n2, lastUpdate: Date.now() });
  }
  function Xr(e2) {
    return "string" == typeof e2 ? { protocol: "https", url: e2, accept: Gr.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || Gr.Any };
  }
  var eo = "POST";
  function to(e2, n2, r2, o2) {
    var i2 = [], a2 = function(e3, n3) {
      if ("GET" !== e3.method && (void 0 !== e3.data || void 0 !== n3.data)) {
        var r3 = Array.isArray(e3.data) ? e3.data : t(t({}, e3.data), n3.data);
        return JSON.stringify(r3);
      }
    }(r2, o2), u2 = function(e3, n3) {
      var r3 = t(t({}, e3.headers), n3.headers), o3 = {};
      return Object.keys(r3).forEach(function(e4) {
        var t2 = r3[e4];
        o3[e4.toLowerCase()] = t2;
      }), o3;
    }(e2, o2), l2 = r2.method, s2 = "GET" !== r2.method ? {} : t(t({}, r2.data), o2.data), f2 = t(t(t({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), s2), o2.queryParameters), p2 = 0, m2 = function t2(n3, c2) {
      var s3 = n3.pop();
      if (void 0 === s3) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: io(i2) };
      var m3 = { data: a2, headers: u2, method: l2, url: ro(s3, r2.path, f2), connectTimeout: c2(p2, e2.timeouts.connect), responseTimeout: c2(p2, o2.timeout) }, v2 = function(e3) {
        var t3 = { request: m3, response: e3, host: s3, triesLeft: n3.length };
        return i2.push(t3), t3;
      }, d2 = { onSuccess: function(e3) {
        return function(e4) {
          try {
            return JSON.parse(e4.content);
          } catch (t3) {
            throw /* @__PURE__ */ function(e5, t4) {
              return { name: "DeserializationError", message: e5, response: t4 };
            }(t3.message, e4);
          }
        }(e3);
      }, onRetry: function(r3) {
        var o3 = v2(r3);
        return r3.isTimedOut && p2++, Promise.all([e2.logger.info("Retryable failure", co(o3)), e2.hostsCache.set(s3, Yr(s3, r3.isTimedOut ? 3 : 2))]).then(function() {
          return t2(n3, c2);
        });
      }, onFail: function(e3) {
        throw v2(e3), function(e4, t3) {
          var n4 = e4.content, r3 = e4.status, o3 = n4;
          try {
            o3 = JSON.parse(n4).message;
          } catch (n5) {
          }
          return /* @__PURE__ */ function(e5, t4, n5) {
            return { name: "ApiError", message: e5, status: t4, transporterStackTrace: n5 };
          }(o3, r3, t3);
        }(e3, io(i2));
      } };
      return e2.requester.send(m3).then(function(e3) {
        return function(e4, t3) {
          return function(e5) {
            var t4 = e5.status;
            return e5.isTimedOut || function(e6) {
              var t5 = e6.isTimedOut, n4 = e6.status;
              return !t5 && 0 == ~~n4;
            }(e5) || 2 != ~~(t4 / 100) && 4 != ~~(t4 / 100);
          }(e4) ? t3.onRetry(e4) : 2 == ~~(e4.status / 100) ? t3.onSuccess(e4) : t3.onFail(e4);
        }(e3, d2);
      });
    };
    return function(e3, t2) {
      return Promise.all(t2.map(function(t3) {
        return e3.get(t3, function() {
          return Promise.resolve(Yr(t3));
        });
      })).then(function(e4) {
        var n3 = e4.filter(function(e5) {
          return function(e6) {
            return 1 === e6.status || Date.now() - e6.lastUpdate > 12e4;
          }(e5);
        }), r3 = e4.filter(function(e5) {
          return function(e6) {
            return 3 === e6.status && Date.now() - e6.lastUpdate <= 12e4;
          }(e5);
        }), o3 = [].concat(c(n3), c(r3));
        return { getTimeout: function(e5, t3) {
          return (0 === r3.length && 0 === e5 ? 1 : r3.length + 3 + e5) * t3;
        }, statelessHosts: o3.length > 0 ? o3.map(function(e5) {
          return Xr(e5);
        }) : t2 };
      });
    }(e2.hostsCache, n2).then(function(e3) {
      return m2(c(e3.statelessHosts).reverse(), e3.getTimeout);
    });
  }
  function no(e2) {
    var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
      var n2 = "; ".concat(e3.segment).concat(void 0 !== e3.version ? " (".concat(e3.version, ")") : "");
      return -1 === t2.value.indexOf(n2) && (t2.value = "".concat(t2.value).concat(n2)), t2;
    } };
    return t2;
  }
  function ro(e2, t2, n2) {
    var r2 = oo(n2), o2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat("/" === t2.charAt(0) ? t2.substr(1) : t2);
    return r2.length && (o2 += "?".concat(r2)), o2;
  }
  function oo(e2) {
    return Object.keys(e2).map(function(t2) {
      return Zr("%s=%s", t2, (n2 = e2[t2], "[object Object]" === Object.prototype.toString.call(n2) || "[object Array]" === Object.prototype.toString.call(n2) ? JSON.stringify(e2[t2]) : e2[t2]));
      var n2;
    }).join("&");
  }
  function io(e2) {
    return e2.map(function(e3) {
      return co(e3);
    });
  }
  function co(e2) {
    var n2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return t(t({}, e2), {}, { request: t(t({}, e2.request), {}, { headers: t(t({}, e2.request.headers), n2) }) });
  }
  var ao = function(e2) {
    return function(t2, n2) {
      return "GET" === t2.method ? e2.transporter.read(t2, n2) : e2.transporter.write(t2, n2);
    };
  };
  var uo = function(e2) {
    return function(t2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return $r({ transporter: e2.transporter, appId: e2.appId, indexName: t2 }, n2.methods);
    };
  };
  var lo = function(e2) {
    return function(n2, r2) {
      var o2 = n2.map(function(e3) {
        return t(t({}, e3), {}, { params: oo(e3.params || {}) });
      });
      return e2.transporter.read({ method: eo, path: "1/indexes/*/queries", data: { requests: o2 }, cacheable: true }, r2);
    };
  };
  var so = function(e2) {
    return function(n2, r2) {
      return Promise.all(n2.map(function(n3) {
        var o2 = n3.params, i2 = o2.facetName, c2 = o2.facetQuery, a2 = function(e3, t2) {
          if (null == e3) return {};
          var n4, r3, o3 = function(e4, t3) {
            if (null == e4) return {};
            var n5, r4, o4 = {}, i4 = Object.keys(e4);
            for (r4 = 0; r4 < i4.length; r4++) n5 = i4[r4], t3.indexOf(n5) >= 0 || (o4[n5] = e4[n5]);
            return o4;
          }(e3, t2);
          if (Object.getOwnPropertySymbols) {
            var i3 = Object.getOwnPropertySymbols(e3);
            for (r3 = 0; r3 < i3.length; r3++) n4 = i3[r3], t2.indexOf(n4) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n4) && (o3[n4] = e3[n4]);
          }
          return o3;
        }(o2, Be);
        return uo(e2)(n3.indexName, { methods: { searchForFacetValues: mo } }).searchForFacetValues(i2, c2, t(t({}, r2), a2));
      }));
    };
  };
  var fo = function(e2) {
    return function(t2, n2, r2) {
      return e2.transporter.read({ method: eo, path: Zr("1/answers/%s/prediction", e2.indexName), data: { query: t2, queryLanguages: n2 }, cacheable: true }, r2);
    };
  };
  var po = function(e2) {
    return function(t2, n2) {
      return e2.transporter.read({ method: eo, path: Zr("1/indexes/%s/query", e2.indexName), data: { query: t2 }, cacheable: true }, n2);
    };
  };
  var mo = function(e2) {
    return function(t2, n2, r2) {
      return e2.transporter.read({ method: eo, path: Zr("1/indexes/%s/facets/%s/query", e2.indexName, t2), data: { facetQuery: n2 }, cacheable: true }, r2);
    };
  };
  function vo(e2, n2, r2) {
    var o2 = { appId: e2, apiKey: n2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
      return new Promise(function(t2) {
        var n3 = new XMLHttpRequest();
        n3.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t3) {
          return n3.setRequestHeader(t3, e3.headers[t3]);
        });
        var r3, o3 = function(e4, r4) {
          return setTimeout(function() {
            n3.abort(), t2({ status: 0, content: r4, isTimedOut: true });
          }, 1e3 * e4);
        }, i2 = o3(e3.connectTimeout, "Connection timeout");
        n3.onreadystatechange = function() {
          n3.readyState > n3.OPENED && void 0 === r3 && (clearTimeout(i2), r3 = o3(e3.responseTimeout, "Socket timeout"));
        }, n3.onerror = function() {
          0 === n3.status && (clearTimeout(i2), clearTimeout(r3), t2({ content: n3.responseText || "Network request failed", status: n3.status, isTimedOut: false }));
        }, n3.onload = function() {
          clearTimeout(i2), clearTimeout(r3), t2({ content: n3.responseText, status: n3.status, isTimedOut: false });
        }, n3.send(e3.data);
      });
    } }, logger: { debug: function(e3, t2) {
      return Promise.resolve();
    }, info: function(e3, t2) {
      return Promise.resolve();
    }, error: function(e3, t2) {
      return console.error(e3, t2), Promise.resolve();
    } }, responsesCache: zr(), requestsCache: zr({ serializable: false }), hostsCache: Wr({ caches: [Kr({ key: "4.19.1-".concat(e2) }), zr()] }), userAgent: no("4.19.1").add({ segment: "Browser", version: "lite" }), authMode: 0 };
    return function(e3) {
      var n3 = e3.appId, r3 = /* @__PURE__ */ function(e4, t2, n4) {
        var r4 = { "x-algolia-api-key": n4, "x-algolia-application-id": t2 };
        return { headers: function() {
          return 1 === e4 ? r4 : {};
        }, queryParameters: function() {
          return 0 === e4 ? r4 : {};
        } };
      }(void 0 !== e3.authMode ? e3.authMode : 1, n3, e3.apiKey), o3 = function(e4) {
        var t2 = e4.hostsCache, n4 = e4.logger, r4 = e4.requester, o4 = e4.requestsCache, c3 = e4.responsesCache, a2 = e4.timeouts, u2 = e4.userAgent, l2 = e4.hosts, s2 = e4.queryParameters, f2 = { hostsCache: t2, logger: n4, requester: r4, requestsCache: o4, responsesCache: c3, timeouts: a2, userAgent: u2, headers: e4.headers, queryParameters: s2, hosts: l2.map(function(e5) {
          return Xr(e5);
        }), read: function(e5, t3) {
          var n5 = Qr(t3, f2.timeouts.read), r5 = function() {
            return to(f2, f2.hosts.filter(function(e6) {
              return 0 != (e6.accept & Gr.Read);
            }), e5, n5);
          };
          if (true !== (void 0 !== n5.cacheable ? n5.cacheable : e5.cacheable)) return r5();
          var o5 = { request: e5, mappedRequestOptions: n5, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
          return f2.responsesCache.get(o5, function() {
            return f2.requestsCache.get(o5, function() {
              return f2.requestsCache.set(o5, r5()).then(function(e6) {
                return Promise.all([f2.requestsCache.delete(o5), e6]);
              }, function(e6) {
                return Promise.all([f2.requestsCache.delete(o5), Promise.reject(e6)]);
              }).then(function(e6) {
                var t4 = i(e6, 2);
                return t4[0], t4[1];
              });
            });
          }, { miss: function(e6) {
            return f2.responsesCache.set(o5, e6);
          } });
        }, write: function(e5, t3) {
          return to(f2, f2.hosts.filter(function(e6) {
            return 0 != (e6.accept & Gr.Write);
          }), e5, Qr(t3, f2.timeouts.write));
        } };
        return f2;
      }(t(t({ hosts: [{ url: "".concat(n3, "-dsn.algolia.net"), accept: Gr.Read }, { url: "".concat(n3, ".algolia.net"), accept: Gr.Write }].concat(Jr([{ url: "".concat(n3, "-1.algolianet.com") }, { url: "".concat(n3, "-2.algolianet.com") }, { url: "".concat(n3, "-3.algolianet.com") }])) }, e3), {}, { headers: t(t({}, r3.headers()), {}, { "content-type": "application/x-www-form-urlencoded" }, e3.headers), queryParameters: t(t({}, r3.queryParameters()), e3.queryParameters) })), c2 = { transporter: o3, appId: n3, addAlgoliaAgent: function(e4, t2) {
        o3.userAgent.add({ segment: e4, version: t2 });
      }, clearCache: function() {
        return Promise.all([o3.requestsCache.clear(), o3.responsesCache.clear()]).then(function() {
        });
      } };
      return $r(c2, e3.methods);
    }(t(t(t({}, o2), r2), {}, { methods: { search: lo, searchForFacetValues: so, multipleQueries: lo, multipleSearchForFacetValues: so, customRequest: ao, initIndex: function(e3) {
      return function(t2) {
        return uo(e3)(t2, { methods: { search: po, searchForFacetValues: mo, findAnswers: fo } });
      };
    } } }));
  }
  vo.version = "4.19.1";
  var ho = ["footer", "searchBox"];
  function yo(e2) {
    var t2 = e2.appId, n2 = e2.apiKey, r2 = e2.indexName, o2 = e2.placeholder, i2 = void 0 === o2 ? "Search docs" : o2, c2 = e2.searchParameters, a2 = e2.maxResultsPerGroup, u2 = e2.onClose, l2 = void 0 === u2 ? Ar : u2, s2 = e2.transformItems, f2 = void 0 === s2 ? kr : s2, p2 = e2.hitComponent, m2 = void 0 === p2 ? ur : p2, v2 = e2.resultsFooterComponent, d2 = void 0 === v2 ? function() {
      return null;
    } : v2, h2 = e2.navigator, y2 = e2.initialScrollY, _2 = void 0 === y2 ? 0 : y2, b2 = e2.transformSearchClient, g2 = void 0 === b2 ? kr : b2, S2 = e2.disableUserPersonalization, O2 = void 0 !== S2 && S2, w2 = e2.initialQuery, E2 = void 0 === w2 ? "" : w2, j2 = e2.translations, P2 = void 0 === j2 ? {} : j2, I2 = e2.getMissingResultsUrl, D2 = e2.insights, k2 = void 0 !== D2 && D2, C2 = P2.footer, A2 = P2.searchBox, x2 = Je(P2, ho), N2 = $e(Fe.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), T2 = N2[0], R2 = N2[1], q2 = Fe.useRef(null), L2 = Fe.useRef(null), M2 = Fe.useRef(null), H2 = Fe.useRef(null), U2 = Fe.useRef(null), F2 = Fe.useRef(10), B2 = Fe.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current, V2 = Fe.useRef(E2 || B2).current, K2 = function(e3, t3, n3) {
      return Fe.useMemo(function() {
        var r3 = vo(e3, t3);
        return r3.addAlgoliaAgent("docsearch", "3.6.1"), false === /docsearch.js \(.*\)/.test(r3.transporter.userAgent.value) && r3.addAlgoliaAgent("docsearch-react", "3.6.1"), n3(r3);
      }, [e3, t3, n3]);
    }(t2, n2, g2), W2 = Fe.useRef(Vr({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r2), limit: 10 })).current, z2 = Fe.useRef(Vr({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r2), limit: 0 === W2.getAll().length ? 7 : 4 })).current, J2 = Fe.useCallback(function(e3) {
      if (!O2) {
        var t3 = "content" === e3.type ? e3.__docsearch_parent : e3;
        t3 && -1 === W2.getAll().findIndex(function(e4) {
          return e4.objectID === t3.objectID;
        }) && z2.add(t3);
      }
    }, [W2, z2, O2]), $2 = Fe.useCallback(function(e3) {
      if (T2.context.algoliaInsightsPlugin && e3.__autocomplete_id) {
        var t3 = e3, n3 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e3.__autocomplete_id], queryID: t3.__autocomplete_queryID };
        T2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n3);
      }
    }, [T2.context.algoliaInsightsPlugin]), Z2 = Fe.useMemo(function() {
      return or({ id: "docsearch", defaultActiveItemId: 0, placeholder: i2, openOnFocus: true, initialState: { query: V2, context: { searchSuggestions: [] } }, insights: k2, navigator: h2, onStateChange: function(e3) {
        R2(e3.state);
      }, getSources: function(e3) {
        var o3 = e3.query, i3 = e3.state, u3 = e3.setContext, s3 = e3.setStatus;
        if (!o3) return O2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
          var t3 = e4.item, n3 = e4.event;
          J2(t3), Cr(n3) || l2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return z2.getAll();
        } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
          var t3 = e4.item, n3 = e4.event;
          J2(t3), Cr(n3) || l2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return W2.getAll();
        } }];
        var p3 = Boolean(k2);
        return K2.search([{ query: o3, indexName: r2, params: Ke({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(F2.current), "hierarchy.lvl2:".concat(F2.current), "hierarchy.lvl3:".concat(F2.current), "hierarchy.lvl4:".concat(F2.current), "hierarchy.lvl5:".concat(F2.current), "hierarchy.lvl6:".concat(F2.current), "content:".concat(F2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20, clickAnalytics: p3 }, c2) }]).catch(function(e4) {
          throw "RetryError" === e4.name && s3("error"), e4;
        }).then(function(e4) {
          var o4 = e4.results[0], c3 = o4.hits, s4 = o4.nbHits, m3 = Dr(c3, function(e5) {
            return Tr(e5);
          }, a2);
          i3.context.searchSuggestions.length < Object.keys(m3).length && u3({ searchSuggestions: Object.keys(m3) }), u3({ nbHits: s4 });
          var v3 = {};
          return p3 && (v3 = { __autocomplete_indexName: r2, __autocomplete_queryID: o4.queryID, __autocomplete_algoliaCredentials: { appId: t2, apiKey: n2 } }), Object.values(m3).map(function(e5, t3) {
            return { sourceId: "hits".concat(t3), onSelect: function(e6) {
              var t4 = e6.item, n3 = e6.event;
              J2(t4), Cr(n3) || l2();
            }, getItemUrl: function(e6) {
              return e6.item.url;
            }, getItems: function() {
              return Object.values(Dr(e5, function(e6) {
                return e6.hierarchy.lvl1;
              }, a2)).map(f2).map(function(e6) {
                return e6.map(function(t4) {
                  var n3 = null, r3 = e6.find(function(e7) {
                    return "lvl1" === e7.type && e7.hierarchy.lvl1 === t4.hierarchy.lvl1;
                  });
                  return "lvl1" !== t4.type && r3 && (n3 = r3), Ke(Ke({}, t4), {}, { __docsearch_parent: n3 }, v3);
                });
              }).flat();
            } };
          });
        });
      } });
    }, [r2, c2, a2, K2, l2, z2, W2, J2, V2, i2, h2, f2, O2, k2, t2, n2]), Q2 = Z2.getEnvironmentProps, G2 = Z2.getRootProps, Y2 = Z2.refresh;
    return function(e3) {
      var t3 = e3.getEnvironmentProps, n3 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
      Fe.useEffect(function() {
        if (n3 && r3 && o3) {
          var e4 = t3({ panelElement: n3, formElement: r3, inputElement: o3 }), i3 = e4.onTouchStart, c3 = e4.onTouchMove;
          return window.addEventListener("touchstart", i3), window.addEventListener("touchmove", c3), function() {
            window.removeEventListener("touchstart", i3), window.removeEventListener("touchmove", c3);
          };
        }
      }, [t3, n3, r3, o3]);
    }({ getEnvironmentProps: Q2, panelElement: H2.current, formElement: M2.current, inputElement: U2.current }), function(e3) {
      var t3 = e3.container;
      Fe.useEffect(function() {
        if (t3) {
          var e4 = t3.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), n3 = e4[0], r3 = e4[e4.length - 1];
          return t3.addEventListener("keydown", o3), function() {
            t3.removeEventListener("keydown", o3);
          };
        }
        function o3(e5) {
          "Tab" === e5.key && (e5.shiftKey ? document.activeElement === n3 && (e5.preventDefault(), r3.focus()) : document.activeElement === r3 && (e5.preventDefault(), n3.focus()));
        }
      }, [t3]);
    }({ container: q2.current }), Fe.useEffect(function() {
      return document.body.classList.add("DocSearch--active"), function() {
        var e3, t3;
        document.body.classList.remove("DocSearch--active"), null === (e3 = (t3 = window).scrollTo) || void 0 === e3 || e3.call(t3, 0, _2);
      };
    }, []), Fe.useEffect(function() {
      window.matchMedia("(max-width: 768px)").matches && (F2.current = 5);
    }, []), Fe.useEffect(function() {
      H2.current && (H2.current.scrollTop = 0);
    }, [T2.query]), Fe.useEffect(function() {
      V2.length > 0 && (Y2(), U2.current && U2.current.focus());
    }, [V2, Y2]), Fe.useEffect(function() {
      function e3() {
        if (L2.current) {
          var e4 = 0.01 * window.innerHeight;
          L2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
        }
      }
      return e3(), window.addEventListener("resize", e3), function() {
        window.removeEventListener("resize", e3);
      };
    }, []), Fe.createElement("div", ze({ ref: q2 }, G2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === T2.status && "DocSearch-Container--Stalled", "error" === T2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e3) {
      e3.target === e3.currentTarget && l2();
    } }), Fe.createElement("div", { className: "DocSearch-Modal", ref: L2 }, Fe.createElement("header", { className: "DocSearch-SearchBar", ref: M2 }, Fe.createElement(Fr, ze({}, Z2, { state: T2, autoFocus: 0 === V2.length, inputRef: U2, isFromSelection: Boolean(V2) && V2 === B2, translations: A2, onClose: l2 }))), Fe.createElement("div", { className: "DocSearch-Dropdown", ref: H2 }, Fe.createElement(Hr, ze({}, Z2, { indexName: r2, state: T2, hitComponent: m2, resultsFooterComponent: d2, disableUserPersonalization: O2, recentSearches: z2, favoriteSearches: W2, inputRef: U2, translations: x2, getMissingResultsUrl: I2, onItemClick: function(e3, t3) {
      $2(e3), J2(e3), Cr(t3) || l2();
    } }))), Fe.createElement("footer", { className: "DocSearch-Footer" }, Fe.createElement(ar, { translations: C2 }))));
  }
  function _o(e2) {
    var t2, n2, r2 = Fe.useRef(null), o2 = $e(Fe.useState(false), 2), i2 = o2[0], c2 = o2[1], a2 = $e(Fe.useState((null == e2 ? void 0 : e2.initialQuery) || void 0), 2), u2 = a2[0], l2 = a2[1], s2 = Fe.useCallback(function() {
      c2(true);
    }, [c2]), f2 = Fe.useCallback(function() {
      c2(false);
    }, [c2]);
    return function(e3) {
      var t3 = e3.isOpen, n3 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, i3 = e3.searchButtonRef;
      Fe.useEffect(function() {
        function e4(e5) {
          var c3;
          (27 === e5.keyCode && t3 || "k" === (null === (c3 = e5.key) || void 0 === c3 ? void 0 : c3.toLowerCase()) && (e5.metaKey || e5.ctrlKey) || !function(e6) {
            var t4 = e6.target, n4 = t4.tagName;
            return t4.isContentEditable || "INPUT" === n4 || "SELECT" === n4 || "TEXTAREA" === n4;
          }(e5) && "/" === e5.key && !t3) && (e5.preventDefault(), t3 ? r3() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n3()), i3 && i3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
        }
        return window.addEventListener("keydown", e4), function() {
          window.removeEventListener("keydown", e4);
        };
      }, [t3, n3, r3, o3, i3]);
    }({ isOpen: i2, onOpen: s2, onClose: f2, onInput: Fe.useCallback(function(e3) {
      c2(true), l2(e3.key);
    }, [c2, l2]), searchButtonRef: r2 }), Fe.createElement(Fe.Fragment, null, Fe.createElement(et, { ref: r2, translations: null == e2 || null === (t2 = e2.translations) || void 0 === t2 ? void 0 : t2.button, onClick: s2 }), i2 && Pe(Fe.createElement(yo, ze({}, e2, { initialScrollY: window.scrollY, initialQuery: u2, translations: null == e2 || null === (n2 = e2.translations) || void 0 === n2 ? void 0 : n2.modal, onClose: f2 })), document.body));
  }
  function bo(e2) {
    Ce(Fe.createElement(_o, o({}, e2, { transformSearchClient: function(t2) {
      return t2.addAlgoliaAgent("docsearch.js", "3.6.1"), e2.transformSearchClient ? e2.transformSearchClient(t2) : t2;
    } })), function(e3) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
      return "string" == typeof e3 ? t2.document.querySelector(e3) : e3;
    }(e2.container, e2.environment));
  }
  var esm_default = bo;

  // <stdin>
  esm_default({
    container: "#docsearch",
    appId: "KMWY81ZWS3",
    indexName: "getdoks",
    apiKey: "691951526b11e1a708258e4e1a51adc7",
    insights: true
  });
  var onClick = function() {
    document.getElementsByClassName("DocSearch-Button")[0].click();
  };
  document.getElementById("searchToggleMobile").onclick = onClick;
  document.getElementById("searchToggleDesktop").onclick = onClick;
})();
/*! Bundled license information:

@docsearch/js/dist/esm/index.js:
  (*! @docsearch/js 3.6.1 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwgIm5vZGVfbW9kdWxlcy9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwgIm5vZGVfbW9kdWxlcy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCAibm9kZV9tb2R1bGVzL0Bkb2NzZWFyY2gvZG9jc2VhcmNoLXJlYWN0L2Rpc3QvZXNtL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9AZG9jc2VhcmNoL2pzL3NyYy9kb2NzZWFyY2gudHN4IiwgIjxzdGRpbj4iXSwKICAic291cmNlc0NvbnRlbnQiOiBbInZhciBuLGwsdSxpLHQscixvPXt9LGY9W10sZT0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGMobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gcyhuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBhKG4sbCx1KXt2YXIgaSx0LHIsbz1hcmd1bWVudHMsZj17fTtmb3IociBpbiBsKVwia2V5XCI9PXI/aT1sW3JdOlwicmVmXCI9PXI/dD1sW3JdOmZbcl09bFtyXTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLHI9MztyPGFyZ3VtZW50cy5sZW5ndGg7cisrKXUucHVzaChvW3JdKTtpZihudWxsIT11JiYoZi5jaGlsZHJlbj11KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZudWxsIT1uLmRlZmF1bHRQcm9wcylmb3IociBpbiBuLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1uLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHYobixmLGksdCxudWxsKX1mdW5jdGlvbiB2KGwsdSxpLHQscil7dmFyIG89e3R5cGU6bCxwcm9wczp1LGtleTppLHJlZjp0LF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/KytuLl9fdjpyfTtyZXR1cm4gbnVsbCE9bi52bm9kZSYmbi52bm9kZShvKSxvfWZ1bmN0aW9uIGgoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiB5KG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIHAobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gZChuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ZChuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9kKG4pOm51bGx9ZnVuY3Rpb24gXyhuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIF8obil9fWZ1bmN0aW9uIGsobCl7KCFsLl9fZCYmKGwuX19kPSEwKSYmdS5wdXNoKGwpJiYhbS5fX3IrK3x8dCE9PW4uZGVib3VuY2VSZW5kZXJpbmcpJiYoKHQ9bi5kZWJvdW5jZVJlbmRlcmluZyl8fGkpKG0pfWZ1bmN0aW9uIG0oKXtmb3IodmFyIG47bS5fX3I9dS5sZW5ndGg7KW49dS5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx1PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9Yyh7fSx0KSkuX192PXQuX192KzEsVChvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ZCh0KTpyLHQuX19oKSxqKHUsdCksdC5fX2UhPXImJl8odCkpKX0pfWZ1bmN0aW9uIGIobixsLHUsaSx0LHIsZSxjLHMsYSl7dmFyIGgscCxfLGssbSxiLHcsQT1pJiZpLl9fa3x8ZixQPUEubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KGs9dS5fX2tbaF09bnVsbD09KGs9bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2Ygaz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBrfHxcIm51bWJlclwiPT10eXBlb2Ygaz92KG51bGwsayxudWxsLG51bGwsayk6QXJyYXkuaXNBcnJheShrKT92KHkse2NoaWxkcmVuOmt9LG51bGwsbnVsbCxudWxsKTprLl9fYj4wP3Yoay50eXBlLGsucHJvcHMsay5rZXksbnVsbCxrLl9fdik6aykpe2lmKGsuX189dSxrLl9fYj11Ll9fYisxLG51bGw9PT0oXz1BW2hdKXx8XyYmay5rZXk9PV8ua2V5JiZrLnR5cGU9PT1fLnR5cGUpQVtoXT12b2lkIDA7ZWxzZSBmb3IocD0wO3A8UDtwKyspe2lmKChfPUFbcF0pJiZrLmtleT09Xy5rZXkmJmsudHlwZT09PV8udHlwZSl7QVtwXT12b2lkIDA7YnJlYWt9Xz1udWxsfVQobixrLF89X3x8byx0LHIsZSxjLHMsYSksbT1rLl9fZSwocD1rLnJlZikmJl8ucmVmIT1wJiYod3x8KHc9W10pLF8ucmVmJiZ3LnB1c2goXy5yZWYsbnVsbCxrKSx3LnB1c2gocCxrLl9fY3x8bSxrKSksbnVsbCE9bT8obnVsbD09YiYmKGI9bSksXCJmdW5jdGlvblwiPT10eXBlb2Ygay50eXBlJiZudWxsIT1rLl9fayYmay5fX2s9PT1fLl9faz9rLl9fZD1zPWcoayxzLG4pOnM9eChuLGssXyxBLG0scyksYXx8XCJvcHRpb25cIiE9PXUudHlwZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKTpuLnZhbHVlPVwiXCIpOnMmJl8uX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWQoXykpfWZvcih1Ll9fZT1iLGg9UDtoLS07KW51bGwhPUFbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPUFbaF0uX19lJiZBW2hdLl9fZT09dS5fX2QmJih1Ll9fZD1kKGksaCsxKSksTChBW2hdLEFbaF0pKTtpZih3KWZvcihoPTA7aDx3Lmxlbmd0aDtoKyspSSh3W2hdLHdbKytoXSx3WysraF0pfWZ1bmN0aW9uIGcobixsLHUpe3ZhciBpLHQ7Zm9yKGk9MDtpPG4uX19rLmxlbmd0aDtpKyspKHQ9bi5fX2tbaV0pJiYodC5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP2codCxsLHUpOngodSx0LHQsbi5fX2ssdC5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIHcobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXt3KG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24geChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBBKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxDKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8QyhuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uIFAobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fGUudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fFAobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8UChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/SDokLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/SDokLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uICQobCl7dGhpcy5sW2wudHlwZSshMV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIEgobCl7dGhpcy5sW2wudHlwZSshMF0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIFQobCx1LGksdCxyLG8sZixlLHMpe3ZhciBhLHYsaCxkLF8sayxtLGcsdyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKHM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwoYT1uLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYoZz11LnByb3BzLHc9KGE9UC5jb250ZXh0VHlwZSkmJnRbYS5fX2NdLHg9YT93P3cucHJvcHMudmFsdWU6YS5fXzp0LGkuX19jP209KHY9dS5fX2M9aS5fX2MpLl9fPXYuX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPXY9bmV3IFAoZyx4KToodS5fX2M9dj1uZXcgcChnLHgpLHYuY29uc3RydWN0b3I9UCx2LnJlbmRlcj1NKSx3JiZ3LnN1Yih2KSx2LnByb3BzPWcsdi5zdGF0ZXx8KHYuc3RhdGU9e30pLHYuY29udGV4dD14LHYuX19uPXQsaD12Ll9fZD0hMCx2Ll9faD1bXSksbnVsbD09di5fX3MmJih2Ll9fcz12LnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKHYuX19zPT12LnN0YXRlJiYodi5fX3M9Yyh7fSx2Ll9fcykpLGModi5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoZyx2Ll9fcykpKSxkPXYucHJvcHMsXz12LnN0YXRlLGgpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPXYuY29tcG9uZW50V2lsbE1vdW50JiZ2LmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPXYuY29tcG9uZW50RGlkTW91bnQmJnYuX19oLnB1c2godi5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmZyE9PWQmJm51bGwhPXYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmdi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGcseCksIXYuX19lJiZudWxsIT12LnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT12LnNob3VsZENvbXBvbmVudFVwZGF0ZShnLHYuX19zLHgpfHx1Ll9fdj09PWkuX192KXt2LnByb3BzPWcsdi5zdGF0ZT12Ll9fcyx1Ll9fdiE9PWkuX192JiYodi5fX2Q9ITEpLHYuX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdi5fX2gubGVuZ3RoJiZmLnB1c2godik7YnJlYWsgbn1udWxsIT12LmNvbXBvbmVudFdpbGxVcGRhdGUmJnYuY29tcG9uZW50V2lsbFVwZGF0ZShnLHYuX19zLHgpLG51bGwhPXYuY29tcG9uZW50RGlkVXBkYXRlJiZ2Ll9faC5wdXNoKGZ1bmN0aW9uKCl7di5jb21wb25lbnREaWRVcGRhdGUoZCxfLGspfSl9di5jb250ZXh0PXgsdi5wcm9wcz1nLHYuc3RhdGU9di5fX3MsKGE9bi5fX3IpJiZhKHUpLHYuX19kPSExLHYuX192PXUsdi5fX1A9bCxhPXYucmVuZGVyKHYucHJvcHMsdi5zdGF0ZSx2LmNvbnRleHQpLHYuc3RhdGU9di5fX3MsbnVsbCE9di5nZXRDaGlsZENvbnRleHQmJih0PWMoYyh7fSx0KSx2LmdldENoaWxkQ29udGV4dCgpKSksaHx8bnVsbD09di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShkLF8pKSxBPW51bGwhPWEmJmEudHlwZT09PXkmJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSxiKGwsQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxyLG8sZixlLHMpLHYuYmFzZT11Ll9fZSx1Ll9faD1udWxsLHYuX19oLmxlbmd0aCYmZi5wdXNoKHYpLG0mJih2Ll9fRT12Ll9fPW51bGwpLHYuX19lPSExfWVsc2UgbnVsbD09byYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPXooaS5fX2UsdSxpLHQscixvLGYscyk7KGE9bi5kaWZmZWQpJiZhKHUpfWNhdGNoKGwpe3UuX192PW51bGwsKHN8fG51bGwhPW8pJiYodS5fX2U9ZSx1Ll9faD0hIXMsb1tvLmluZGV4T2YoZSldPW51bGwpLG4uX19lKGwsdSxpKX19ZnVuY3Rpb24gaihsLHUpe24uX19jJiZuLl9fYyh1LGwpLGwuc29tZShmdW5jdGlvbih1KXt0cnl7bD11Ll9faCx1Ll9faD1bXSxsLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobCl7bi5fX2UobCx1Ll9fdil9fSl9ZnVuY3Rpb24geihuLGwsdSxpLHQscixlLGMpe3ZhciBhLHYsaCx5LHA9dS5wcm9wcyxkPWwucHJvcHMsXz1sLnR5cGUsaz0wO2lmKFwic3ZnXCI9PT1fJiYodD0hMCksbnVsbCE9cilmb3IoO2s8ci5sZW5ndGg7aysrKWlmKChhPXJba10pJiYoYT09PW58fChfP2EubG9jYWxOYW1lPT1fOjM9PWEubm9kZVR5cGUpKSl7bj1hLHJba109bnVsbDticmVha31pZihudWxsPT1uKXtpZihudWxsPT09XylyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZCk7bj10P2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXyk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfLGQuaXMmJmQpLHI9bnVsbCxjPSExfWlmKG51bGw9PT1fKXA9PT1kfHxjJiZuLmRhdGE9PT1kfHwobi5kYXRhPWQpO2Vsc2V7aWYocj1yJiZmLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSx2PShwPXUucHJvcHN8fG8pLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLGg9ZC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9cilmb3IocD17fSx5PTA7eTxuLmF0dHJpYnV0ZXMubGVuZ3RoO3krKylwW24uYXR0cmlidXRlc1t5XS5uYW1lXT1uLmF0dHJpYnV0ZXNbeV0udmFsdWU7KGh8fHYpJiYoaCYmKHYmJmguX19odG1sPT12Ll9faHRtbHx8aC5fX2h0bWw9PT1uLmlubmVySFRNTCl8fChuLmlubmVySFRNTD1oJiZoLl9faHRtbHx8XCJcIikpfWlmKEEobixkLHAsdCxjKSxoKWwuX19rPVtdO2Vsc2UgaWYoaz1sLnByb3BzLmNoaWxkcmVuLGIobixBcnJheS5pc0FycmF5KGspP2s6W2tdLGwsdSxpLHQmJlwiZm9yZWlnbk9iamVjdFwiIT09XyxyLGUsbi5maXJzdENoaWxkLGMpLG51bGwhPXIpZm9yKGs9ci5sZW5ndGg7ay0tOyludWxsIT1yW2tdJiZzKHJba10pO2N8fChcInZhbHVlXCJpbiBkJiZ2b2lkIDAhPT0oaz1kLnZhbHVlKSYmKGshPT1uLnZhbHVlfHxcInByb2dyZXNzXCI9PT1fJiYhaykmJkMobixcInZhbHVlXCIsayxwLnZhbHVlLCExKSxcImNoZWNrZWRcImluIGQmJnZvaWQgMCE9PShrPWQuY2hlY2tlZCkmJmshPT1uLmNoZWNrZWQmJkMobixcImNoZWNrZWRcIixrLHAuY2hlY2tlZCwhMSkpfXJldHVybiBufWZ1bmN0aW9uIEkobCx1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXV9Y2F0Y2gobCl7bi5fX2UobCxpKX19ZnVuY3Rpb24gTChsLHUsaSl7dmFyIHQscixvO2lmKG4udW5tb3VudCYmbi51bm1vdW50KGwpLCh0PWwucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bC5fX2V8fEkodCxudWxsLHUpKSxpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fChpPW51bGwhPShyPWwuX19lKSksbC5fX2U9bC5fX2Q9dm9pZCAwLG51bGwhPSh0PWwuX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGwpe24uX19lKGwsdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1sLl9faylmb3Iobz0wO288dC5sZW5ndGg7bysrKXRbb10mJkwodFtvXSx1LGkpO251bGwhPXImJnMocil9ZnVuY3Rpb24gTShuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBOKGwsdSxpKXt2YXIgdCxyLGU7bi5fXyYmbi5fXyhsLHUpLHI9KHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgaSk/bnVsbDppJiZpLl9fa3x8dS5fX2ssZT1bXSxUKHUsbD0oIXQmJml8fHUpLl9faz1hKHksbnVsbCxbbF0pLHJ8fG8sbyx2b2lkIDAhPT11Lm93bmVyU1ZHRWxlbWVudCwhdCYmaT9baV06cj9udWxsOnUuZmlyc3RDaGlsZD9mLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKTpudWxsLGUsIXQmJmk/aTpyP3IuX19lOnUuZmlyc3RDaGlsZCx0KSxqKGUsbCl9ZnVuY3Rpb24gTyhuLGwpe04obixsLE8pfWZ1bmN0aW9uIFMobixsLHUpe3ZhciBpLHQscixvPWFyZ3VtZW50cyxmPWMoe30sbi5wcm9wcyk7Zm9yKHIgaW4gbClcImtleVwiPT1yP2k9bFtyXTpcInJlZlwiPT1yP3Q9bFtyXTpmW3JdPWxbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxyPTM7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyl1LnB1c2gob1tyXSk7cmV0dXJuIG51bGwhPXUmJihmLmNoaWxkcmVuPXUpLHYobi50eXBlLGYsaXx8bi5rZXksdHx8bi5yZWYsbnVsbCl9ZnVuY3Rpb24gcShuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIityKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShrKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYoKGk9dS5jb25zdHJ1Y3RvcikmJm51bGwhPWkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodS5zZXRTdGF0ZShpLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksdD11Ll9fZCksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHUuY29tcG9uZW50RGlkQ2F0Y2gobiksdD11Ll9fZCksdClyZXR1cm4gdS5fX0U9dX1jYXRjaChsKXtuPWx9dGhyb3cgbn0sX192OjB9LGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LHAucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWMoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihjKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZjKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLGsodGhpcykpfSxwLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksayh0aGlzKSl9LHAucHJvdG90eXBlLnJlbmRlcj15LHU9W10saT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxtLl9fcj0wLHI9MDtleHBvcnR7TiBhcyByZW5kZXIsTyBhcyBoeWRyYXRlLGEgYXMgY3JlYXRlRWxlbWVudCxhIGFzIGgseSBhcyBGcmFnbWVudCxoIGFzIGNyZWF0ZVJlZixsIGFzIGlzVmFsaWRFbGVtZW50LHAgYXMgQ29tcG9uZW50LFMgYXMgY2xvbmVFbGVtZW50LHEgYXMgY3JlYXRlQ29udGV4dCx3IGFzIHRvQ2hpbGRBcnJheSxuIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsICJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHUscixvPTAsaT1bXSxjPW4uX19iLGY9bi5fX3IsZT1uLmRpZmZlZCxhPW4uX19jLHY9bi51bm1vdW50O2Z1bmN0aW9uIG0odCxyKXtuLl9faCYmbi5fX2godSx0LG98fHIpLG89MDt2YXIgaT11Ll9fSHx8KHUuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7fSksaS5fX1t0XX1mdW5jdGlvbiBsKG4pe3JldHVybiBvPTEscCh3LG4pfWZ1bmN0aW9uIHAobixyLG8pe3ZhciBpPW0odCsrLDIpO3JldHVybiBpLnQ9bixpLl9fY3x8KGkuX189W28/byhyKTp3KHZvaWQgMCxyKSxmdW5jdGlvbihuKXt2YXIgdD1pLnQoaS5fX1swXSxuKTtpLl9fWzBdIT09dCYmKGkuX189W3QsaS5fX1sxXV0saS5fX2Muc2V0U3RhdGUoe30pKX1dLGkuX19jPXUpLGkuX199ZnVuY3Rpb24geShyLG8pe3ZhciBpPW0odCsrLDMpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBoKHIsbyl7dmFyIGk9bSh0KyssNCk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX2gucHVzaChpKSl9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gbz01LGQoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIF8obix0LHUpe289NixoKGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHQoKSk6biYmKG4uY3VycmVudD10KCkpfSxudWxsPT11P3U6dS5jb25jYXQobikpfWZ1bmN0aW9uIGQobix1KXt2YXIgcj1tKHQrKyw3KTtyZXR1cm4gayhyLl9fSCx1KSYmKHIuX189bigpLHIuX19IPXUsci5fX2g9biksci5fX31mdW5jdGlvbiBBKG4sdCl7cmV0dXJuIG89OCxkKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIEYobil7dmFyIHI9dS5jb250ZXh0W24uX19jXSxvPW0odCsrLDkpO3JldHVybiBvLl9fYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT12b2lkIDB9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsZCBhcyB1c2VNZW1vLEEgYXMgdXNlQ2FsbGJhY2ssRiBhcyB1c2VDb250ZXh0LFQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwgImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBmLHVzZURlYnVnVmFsdWUgYXMgY31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIHAsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgZCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOlModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIFModGhpcy5wcm9wcyxuKXx8Uyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPUMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpwKHAobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP3AobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9cChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpwfSxBPWguX19lO2Z1bmN0aW9uIE8oKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gTChuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIFUobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gRCgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWguX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9LChPLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9TChyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5jb21wb25lbnRXaWxsVW5tb3VudD1lLl9fYyx1P3UobCk6bCgpKX07ZS5fX2M9ZS5jb21wb25lbnRXaWxsVW5tb3VudCxlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7aSgpLGUuX19jJiZlLl9fYygpfTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxmPSEwPT09dC5fX2g7ci5fX3UrK3x8Znx8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxPLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTy5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PUMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyh2LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyh2LG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIEY9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gTShuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIFQobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7ZChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxkKHMoTSx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBqKG4sdCl7cmV0dXJuIHMoVCx7X192Om4saTp0fSl9KEQucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPUwodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLEYodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxELnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9cChuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sRC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPUQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe0YobixlLHQpfSl9O3ZhciBJPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxXPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sUD1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIFYobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIiksZChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24geihuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgQj1oLmV2ZW50O2Z1bmN0aW9uIEgoKXt9ZnVuY3Rpb24gWigpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBZKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBCJiYobj1CKG4pKSxuLnBlcnNpc3Q9SCxuLmlzUHJvcGFnYXRpb25TdG9wcGVkPVosbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9WSxuLm5hdGl2ZUV2ZW50PW59O3ZhciAkLHE9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEc9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtmb3IodmFyIHUgaW4gcj17fSxlKXt2YXIgbz1lW3VdO1widmFsdWVcIj09PXUmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1vfHwoXCJkZWZhdWx0VmFsdWVcIj09PXUmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/dT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09dSYmITA9PT1vP289XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QodSk/dT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QodSt0KSYmIVAoZS50eXBlKT91PVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdCh1KT91PXUudG9Mb3dlckNhc2UoKTpXLnRlc3QodSk/dT11LnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1vJiYobz12b2lkIDApLHJbdV09byl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9cChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9cChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXJ9dCYmZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihxLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLHEpKSxuLiQkdHlwZW9mPUksRyYmRyhuKX07dmFyIEo9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7SiYmSihuKSwkPW4uX19jfTt2YXIgSz17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuICQuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sUT0xLFg9Mixubj0zLHRuPTQsZW49NTtmdW5jdGlvbiBybihuLHQpe3JldHVybiB0KCl9dmFyIHVuPVwib2JqZWN0XCI9PXR5cGVvZiBwZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlLm5vdy5iaW5kKHBlcmZvcm1hbmNlKTpmdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpfSxvbj1cIjE2LjguMFwiO2Z1bmN0aW9uIGxuKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBmbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1JfWZ1bmN0aW9uIGNuKG4pe3JldHVybiBmbihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIGFuKG4pe3JldHVybiEhbi5fX2smJihkKG51bGwsbiksITApfWZ1bmN0aW9uIHNuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGhuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LHBuPXY7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Zix1c2VEZWJ1Z1ZhbHVlOmMsdmVyc2lvbjpcIjE2LjguMFwiLENoaWxkcmVuOmsscmVuZGVyOlYsaHlkcmF0ZTp6LHVubW91bnRDb21wb25lbnRBdE5vZGU6YW4sY3JlYXRlUG9ydGFsOmosY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5OmxuLGNsb25lRWxlbWVudDpjbixjcmVhdGVSZWY6YixGcmFnbWVudDp2LGlzVmFsaWRFbGVtZW50OmZuLGZpbmRET01Ob2RlOnNuLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmhuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpPLFN1c3BlbnNlTGlzdDpELGxhenk6VSxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpLfTtleHBvcnR7b24gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLFYgYXMgcmVuZGVyLHogYXMgaHlkcmF0ZSxhbiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLGogYXMgY3JlYXRlUG9ydGFsLGxuIGFzIGNyZWF0ZUZhY3RvcnksY24gYXMgY2xvbmVFbGVtZW50LGZuIGFzIGlzVmFsaWRFbGVtZW50LHNuIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGhuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLHBuIGFzIFN0cmljdE1vZGUsTyBhcyBTdXNwZW5zZSxEIGFzIFN1c3BlbnNlTGlzdCxVIGFzIGxhenksSyBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxRIGFzIHVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LFggYXMgdW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksbm4gYXMgdW5zdGFibGVfTm9ybWFsUHJpb3JpdHksdG4gYXMgdW5zdGFibGVfTG93UHJpb3JpdHksZW4gYXMgdW5zdGFibGVfSWRsZVByaW9yaXR5LHJuIGFzIHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSx1biBhcyB1bnN0YWJsZV9ub3d9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsICJpbXBvcnQgZSx7dXNlU3RhdGUgYXMgdCx1c2VFZmZlY3QgYXMgcixjcmVhdGVFbGVtZW50IGFzIG59ZnJvbVwicmVhY3RcIjtpbXBvcnR7Y3JlYXRlUG9ydGFsIGFzIG99ZnJvbVwicmVhY3QtZG9tXCI7ZnVuY3Rpb24gaShlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gYShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9pKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7YyhlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6aShPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBjKGUsdCxyKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBsKCl7cmV0dXJuIGw9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9YXJndW1lbnRzW3RdO2Zvcih2YXIgbiBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLG4pJiYoZVtuXT1yW25dKX1yZXR1cm4gZX0sbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gdShlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIHIsbixvPWZ1bmN0aW9uKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgcixuLG89e30saT1PYmplY3Qua2V5cyhlKTtmb3Iobj0wO248aS5sZW5ndGg7bisrKXI9aVtuXSx0LmluZGV4T2Yocik+PTB8fChvW3JdPWVbcl0pO3JldHVybiBvfShlLHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBpPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7Zm9yKG49MDtuPGkubGVuZ3RoO24rKylyPWlbbl0sdC5pbmRleE9mKHIpPj0wfHxPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSxyKSYmKG9bcl09ZVtyXSl9cmV0dXJuIG99ZnVuY3Rpb24gcyhlLHQpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24oZSx0KXt2YXIgcj1udWxsPT1lP251bGw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmZVtTeW1ib2wuaXRlcmF0b3JdfHxlW1wiQEBpdGVyYXRvclwiXTtpZihudWxsPT1yKXJldHVybjt2YXIgbixvLGk9W10sYT0hMCxjPSExO3RyeXtmb3Iocj1yLmNhbGwoZSk7IShhPShuPXIubmV4dCgpKS5kb25lKSYmKGkucHVzaChuLnZhbHVlKSwhdHx8aS5sZW5ndGghPT10KTthPSEwKTt9Y2F0Y2goZSl7Yz0hMCxvPWV9ZmluYWxseXt0cnl7YXx8bnVsbD09ci5yZXR1cm58fHIucmV0dXJuKCl9ZmluYWxseXtpZihjKXRocm93IG99fXJldHVybiBpfShlLHQpfHxtKGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBmKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBwKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fG0oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gbShlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBwKGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cj9BcnJheS5mcm9tKGUpOlwiQXJndW1lbnRzXCI9PT1yfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChyKT9wKGUsdCk6dm9pZCAwfX1mdW5jdGlvbiBwKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkodCk7cjx0O3IrKyluW3JdPWVbcl07cmV0dXJuIG59ZnVuY3Rpb24gZCgpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7d2lkdGg6XCIxNVwiLGhlaWdodDpcIjE1XCIsY2xhc3NOYW1lOlwiRG9jU2VhcmNoLUNvbnRyb2wtS2V5LUljb25cIn0sZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTQuNTA1IDQuNDk2aDJNNS41MDUgNS40OTZ2NU04LjIxNiA0LjQ5NmwuMDU1IDUuOTkzTTEwIDcuNWMuMzMzLjMzMy41LjY2Ny41IDF2Mk0xMi4zMjYgNC41djUuOTk2TTguMzg0IDQuNDk2YzEuNjc0IDAgMi4xMTYgMCAyLjExNiAxLjVzLS40NDIgMS41LTIuMTE2IDEuNU0zLjIwNSA5LjMwM2MtLjA5LjQ0OC0uMjc3IDEuMjEtMS4yNDEgMS4yMDNDMSAxMC41LjUgOS41MTMuNSA4VjdjMC0xLjU3LjUtMi41IDEuNDY0LTIuNDk0Ljk2NC4wMDYgMS4xMzQuNTk4IDEuMjQgMS4zNDJNMTIuNTUzIDEwLjVoMS45NTNcIixzdHJva2VXaWR0aDpcIjEuMlwiLHN0cm9rZTpcImN1cnJlbnRDb2xvclwiLGZpbGw6XCJub25lXCIsc3Ryb2tlTGluZWNhcDpcInNxdWFyZVwifSkpfWZ1bmN0aW9uIHYoKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiMjBcIixoZWlnaHQ6XCIyMFwiLGNsYXNzTmFtZTpcIkRvY1NlYXJjaC1TZWFyY2gtSWNvblwiLHZpZXdCb3g6XCIwIDAgMjAgMjBcIixcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xNC4zODYgMTQuMzg2bDQuMDg3NyA0LjA4NzctNC4wODc3LTQuMDg3N2MtMi45NDE4IDIuOTQxOS03LjcxMTUgMi45NDE5LTEwLjY1MzMgMC0yLjk0MTktMi45NDE4LTIuOTQxOS03LjcxMTUgMC0xMC42NTMzIDIuOTQxOC0yLjk0MTkgNy43MTE1LTIuOTQxOSAxMC42NTMzIDAgMi45NDE5IDIuOTQxOCAyLjk0MTkgNy43MTE1IDAgMTAuNjUzM3pcIixzdHJva2U6XCJjdXJyZW50Q29sb3JcIixmaWxsOlwibm9uZVwiLGZpbGxSdWxlOlwiZXZlbm9kZFwiLHN0cm9rZUxpbmVjYXA6XCJyb3VuZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIn0pKX12YXIgaD1bXCJ0cmFuc2xhdGlvbnNcIl07dmFyIHk9ZS5mb3J3YXJkUmVmKChmdW5jdGlvbihuLG8pe3ZhciBpPW4udHJhbnNsYXRpb25zLGE9dm9pZCAwPT09aT97fTppLGM9dShuLGgpLGY9YS5idXR0b25UZXh0LG09dm9pZCAwPT09Zj9cIlNlYXJjaFwiOmYscD1hLmJ1dHRvbkFyaWFMYWJlbCx5PXZvaWQgMD09PXA/XCJTZWFyY2hcIjpwLGc9cyh0KG51bGwpLDIpLFM9Z1swXSxPPWdbMV07cmV0dXJuIHIoKGZ1bmN0aW9uKCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmKC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pP08oXCLijJhcIik6TyhcIkN0cmxcIikpfSksW10pLGUuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLGwoe3R5cGU6XCJidXR0b25cIixjbGFzc05hbWU6XCJEb2NTZWFyY2ggRG9jU2VhcmNoLUJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOnl9LGMse3JlZjpvfSksZS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtQnV0dG9uLUNvbnRhaW5lclwifSxlLmNyZWF0ZUVsZW1lbnQodixudWxsKSxlLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1CdXR0b24tUGxhY2Vob2xkZXJcIn0sbSkpLGUuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUJ1dHRvbi1LZXlzXCJ9LG51bGwhPT1TJiZlLmNyZWF0ZUVsZW1lbnQoZS5GcmFnbWVudCxudWxsLGUuY3JlYXRlRWxlbWVudChiLHtyZWFjdHNUb0tleTpcIkN0cmxcIj09PVM/XCJDdHJsXCI6XCJNZXRhXCJ9LFwiQ3RybFwiPT09Uz9lLmNyZWF0ZUVsZW1lbnQoZCxudWxsKTpTKSxlLmNyZWF0ZUVsZW1lbnQoYix7cmVhY3RzVG9LZXk6XCJrXCJ9LFwiS1wiKSkpKX0pKTtmdW5jdGlvbiBiKG4pe3ZhciBvPW4ucmVhY3RzVG9LZXksaT1uLmNoaWxkcmVuLGE9cyh0KCExKSwyKSxjPWFbMF0sbD1hWzFdO3JldHVybiByKChmdW5jdGlvbigpe2lmKG8pcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0KSxmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIix0KX07ZnVuY3Rpb24gZShlKXtlLmtleT09PW8mJmwoITApfWZ1bmN0aW9uIHQoZSl7ZS5rZXkhPT1vJiZcIk1ldGFcIiE9PWUua2V5fHxsKCExKX19KSxbb10pLGUuY3JlYXRlRWxlbWVudChcImtiZFwiLHtjbGFzc05hbWU6Yz9cIkRvY1NlYXJjaC1CdXR0b24tS2V5IERvY1NlYXJjaC1CdXR0b24tS2V5LS1wcmVzc2VkXCI6XCJEb2NTZWFyY2gtQnV0dG9uLUtleVwifSxpKX1mdW5jdGlvbiBnKGUsdCl7dmFyIHI9dm9pZCAwO3JldHVybiBmdW5jdGlvbigpe2Zvcih2YXIgbj1hcmd1bWVudHMubGVuZ3RoLG89bmV3IEFycmF5KG4pLGk9MDtpPG47aSsrKW9baV09YXJndW1lbnRzW2ldO3ImJmNsZWFyVGltZW91dChyKSxyPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodm9pZCAwLG8pfSksdCl9fWZ1bmN0aW9uIFMoZSl7cmV0dXJuIGUucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiBlLmNvbmNhdCh0KX0pLFtdKX12YXIgTz0wO2Z1bmN0aW9uIHcoZSl7cmV0dXJuIDA9PT1lLmNvbGxlY3Rpb25zLmxlbmd0aD8wOmUuY29sbGVjdGlvbnMucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiBlK3QuaXRlbXMubGVuZ3RofSksMCl9ZnVuY3Rpb24gRShlKXtyZXR1cm4gZSE9PU9iamVjdChlKX1mdW5jdGlvbiBqKGUsdCl7aWYoZT09PXQpcmV0dXJuITA7aWYoRShlKXx8RSh0KXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgdClyZXR1cm4gZT09PXQ7aWYoT2JqZWN0LmtleXMoZSkubGVuZ3RoIT09T2JqZWN0LmtleXModCkubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgcj0wLG49T2JqZWN0LmtleXMoZSk7cjxuLmxlbmd0aDtyKyspe3ZhciBvPW5bcl07aWYoIShvIGluIHQpKXJldHVybiExO2lmKCFqKGVbb10sdFtvXSkpcmV0dXJuITF9cmV0dXJuITB9dmFyIEk9ZnVuY3Rpb24oKXt9O3ZhciBQPVt7c2VnbWVudDpcImF1dG9jb21wbGV0ZS1jb3JlXCIsdmVyc2lvbjpcIjEuOS4zXCJ9XTtmdW5jdGlvbiBEKGUpe3ZhciB0PWUuaXRlbSxyPWUuaXRlbXM7cmV0dXJue2luZGV4OnQuX19hdXRvY29tcGxldGVfaW5kZXhOYW1lLGl0ZW1zOlt0XSxwb3NpdGlvbnM6WzErci5maW5kSW5kZXgoKGZ1bmN0aW9uKGUpe3JldHVybiBlLm9iamVjdElEPT09dC5vYmplY3RJRH0pKV0scXVlcnlJRDp0Ll9fYXV0b2NvbXBsZXRlX3F1ZXJ5SUQsYWxnb2xpYVNvdXJjZTpbXCJhdXRvY29tcGxldGVcIl19fWZ1bmN0aW9uIEEoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7dmFyIHI9bnVsbD09ZT9udWxsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJmVbU3ltYm9sLml0ZXJhdG9yXXx8ZVtcIkBAaXRlcmF0b3JcIl07aWYobnVsbCE9cil7dmFyIG4sbyxpLGEsYz1bXSxsPSEwLHU9ITE7dHJ5e2lmKGk9KHI9ci5jYWxsKGUpKS5uZXh0LDA9PT10KXtpZihPYmplY3QocikhPT1yKXJldHVybjtsPSExfWVsc2UgZm9yKDshKGw9KG49aS5jYWxsKHIpKS5kb25lKSYmKGMucHVzaChuLnZhbHVlKSxjLmxlbmd0aCE9PXQpO2w9ITApO31jYXRjaChlKXt1PSEwLG89ZX1maW5hbGx5e3RyeXtpZighbCYmbnVsbCE9ci5yZXR1cm4mJihhPXIucmV0dXJuKCksT2JqZWN0KGEpIT09YSkpcmV0dXJufWZpbmFsbHl7aWYodSl0aHJvdyBvfX1yZXR1cm4gY319KGUsdCl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBrKGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cilyZXR1cm4gQXJyYXkuZnJvbShlKTtpZihcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QocikpcmV0dXJuIGsoZSx0KX0oZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGsoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn12YXIgQz1bXCJpdGVtc1wiXSxOPVtcIml0ZW1zXCJdO2Z1bmN0aW9uIF8oZSl7cmV0dXJuIF89XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sXyhlKX1mdW5jdGlvbiB4KGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBUKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBUKGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cilyZXR1cm4gQXJyYXkuZnJvbShlKTtpZihcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QocikpcmV0dXJuIFQoZSx0KX0oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gVChlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgcj0wLG49bmV3IEFycmF5KHQpO3I8dDtyKyspbltyXT1lW3JdO3JldHVybiBufWZ1bmN0aW9uIFIoZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciByLG4sbz1mdW5jdGlvbihlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIHIsbixvPXt9LGk9T2JqZWN0LmtleXMoZSk7Zm9yKG49MDtuPGkubGVuZ3RoO24rKylyPWlbbl0sdC5pbmRleE9mKHIpPj0wfHwob1tyXT1lW3JdKTtyZXR1cm4gb30oZSx0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO2ZvcihuPTA7bjxpLmxlbmd0aDtuKyspcj1pW25dLHQuaW5kZXhPZihyKT49MHx8T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUscikmJihvW3JdPWVbcl0pfXJldHVybiBvfWZ1bmN0aW9uIHEoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIEwoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/cShPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe00oZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOnEoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gTShlLHQscil7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT09XyhlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09XyhuKSlyZXR1cm4gbjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT10P1N0cmluZzpOdW1iZXIpKGUpfShlLFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PT1fKHQpP3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBIKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MjAscj1bXSxuPTA7bjxlLm9iamVjdElEcy5sZW5ndGg7bis9dClyLnB1c2goTChMKHt9LGUpLHt9LHtvYmplY3RJRHM6ZS5vYmplY3RJRHMuc2xpY2UobixuK3QpfSkpO3JldHVybiByfWZ1bmN0aW9uIEYoZSl7cmV0dXJuIGUubWFwKChmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW1zLHI9UihlLEMpO3JldHVybiBMKEwoe30scikse30se29iamVjdElEczoobnVsbD09dD92b2lkIDA6dC5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLm9iamVjdElEfSkpKXx8ci5vYmplY3RJRHN9KX0pKX1mdW5jdGlvbiBCKGUpe3ZhciB0LHIsbixvPSh0PUEoKGUudmVyc2lvbnx8XCJcIikuc3BsaXQoXCIuXCIpLm1hcChOdW1iZXIpLDIpLHI9dFswXSxuPXRbMV0scj49M3x8Mj09PXImJm4+PTR8fDE9PT1yJiZuPj0xMCk7ZnVuY3Rpb24gaSh0LHIsbil7aWYobyYmdm9pZCAwIT09bil7dmFyIGk9blswXS5fX2F1dG9jb21wbGV0ZV9hbGdvbGlhQ3JlZGVudGlhbHMsYT17XCJYLUFsZ29saWEtQXBwbGljYXRpb24tSWRcIjppLmFwcElkLFwiWC1BbGdvbGlhLUFQSS1LZXlcIjppLmFwaUtleX07ZS5hcHBseSh2b2lkIDAsW3RdLmNvbmNhdCh4KHIpLFt7aGVhZGVyczphfV0pKX1lbHNlIGUuYXBwbHkodm9pZCAwLFt0XS5jb25jYXQoeChyKSkpfXJldHVybntpbml0OmZ1bmN0aW9uKHQscil7ZShcImluaXRcIix7YXBwSWQ6dCxhcGlLZXk6cn0pfSxzZXRVc2VyVG9rZW46ZnVuY3Rpb24odCl7ZShcInNldFVzZXJUb2tlblwiLHQpfSxjbGlja2VkT2JqZWN0SURzQWZ0ZXJTZWFyY2g6ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyl0W3JdPWFyZ3VtZW50c1tyXTt0Lmxlbmd0aD4wJiZpKFwiY2xpY2tlZE9iamVjdElEc0FmdGVyU2VhcmNoXCIsRih0KSx0WzBdLml0ZW1zKX0sY2xpY2tlZE9iamVjdElEczpmdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHQ9bmV3IEFycmF5KGUpLHI9MDtyPGU7cisrKXRbcl09YXJndW1lbnRzW3JdO3QubGVuZ3RoPjAmJmkoXCJjbGlja2VkT2JqZWN0SURzXCIsRih0KSx0WzBdLml0ZW1zKX0sY2xpY2tlZEZpbHRlcnM6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxyPW5ldyBBcnJheSh0KSxuPTA7bjx0O24rKylyW25dPWFyZ3VtZW50c1tuXTtyLmxlbmd0aD4wJiZlLmFwcGx5KHZvaWQgMCxbXCJjbGlja2VkRmlsdGVyc1wiXS5jb25jYXQocikpfSxjb252ZXJ0ZWRPYmplY3RJRHNBZnRlclNlYXJjaDpmdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHQ9bmV3IEFycmF5KGUpLHI9MDtyPGU7cisrKXRbcl09YXJndW1lbnRzW3JdO3QubGVuZ3RoPjAmJmkoXCJjb252ZXJ0ZWRPYmplY3RJRHNBZnRlclNlYXJjaFwiLEYodCksdFswXS5pdGVtcyl9LGNvbnZlcnRlZE9iamVjdElEczpmdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHQ9bmV3IEFycmF5KGUpLHI9MDtyPGU7cisrKXRbcl09YXJndW1lbnRzW3JdO3QubGVuZ3RoPjAmJmkoXCJjb252ZXJ0ZWRPYmplY3RJRHNcIixGKHQpLHRbMF0uaXRlbXMpfSxjb252ZXJ0ZWRGaWx0ZXJzOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkodCksbj0wO248dDtuKyspcltuXT1hcmd1bWVudHNbbl07ci5sZW5ndGg+MCYmZS5hcHBseSh2b2lkIDAsW1wiY29udmVydGVkRmlsdGVyc1wiXS5jb25jYXQocikpfSx2aWV3ZWRPYmplY3RJRHM6ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyl0W3JdPWFyZ3VtZW50c1tyXTt0Lmxlbmd0aD4wJiZ0LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXt2YXIgcj10Lml0ZW1zLG49Uih0LE4pO3JldHVybltdLmNvbmNhdCh4KGUpLHgoSChMKEwoe30sbikse30se29iamVjdElEczoobnVsbD09cj92b2lkIDA6ci5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLm9iamVjdElEfSkpKXx8bi5vYmplY3RJRHN9KSkubWFwKChmdW5jdGlvbihlKXtyZXR1cm57aXRlbXM6cixwYXlsb2FkOmV9fSkpKSl9KSxbXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtcztyZXR1cm4gaShcInZpZXdlZE9iamVjdElEc1wiLFtlLnBheWxvYWRdLHQpfSkpfSx2aWV3ZWRGaWx0ZXJzOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkodCksbj0wO248dDtuKyspcltuXT1hcmd1bWVudHNbbl07ci5sZW5ndGg+MCYmZS5hcHBseSh2b2lkIDAsW1widmlld2VkRmlsdGVyc1wiXS5jb25jYXQocikpfX19ZnVuY3Rpb24gVShlKXt2YXIgdD1lLml0ZW1zLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXt2YXIgcjtyZXR1cm4gZVt0Ll9fYXV0b2NvbXBsZXRlX2luZGV4TmFtZV09KG51bGwhPT0ocj1lW3QuX19hdXRvY29tcGxldGVfaW5kZXhOYW1lXSkmJnZvaWQgMCE9PXI/cjpbXSkuY29uY2F0KHQpLGV9KSx7fSk7cmV0dXJuIE9iamVjdC5rZXlzKHQpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJue2luZGV4OmUsaXRlbXM6dFtlXSxhbGdvbGlhU291cmNlOltcImF1dG9jb21wbGV0ZVwiXX19KSl9ZnVuY3Rpb24gVihlKXtyZXR1cm4gZS5vYmplY3RJRCYmZS5fX2F1dG9jb21wbGV0ZV9pbmRleE5hbWUmJmUuX19hdXRvY29tcGxldGVfcXVlcnlJRH1mdW5jdGlvbiBLKGUpe3JldHVybiBLPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LEsoZSl9ZnVuY3Rpb24gSihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gJChlKX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJm51bGwhPWVbU3ltYm9sLml0ZXJhdG9yXXx8bnVsbCE9ZVtcIkBAaXRlcmF0b3JcIl0pcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gJChlLHQpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09cnx8XCJTZXRcIj09PXIpcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PXJ8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHIpKXJldHVybiAkKGUsdCl9KGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uICQoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn1mdW5jdGlvbiB6KGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBRKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP3ooT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtXKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTp6KE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIFcoZSx0LHIpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9PUsoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PUsobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09Syh0KT90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9dmFyIFo9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlYXJjaC1pbnNpZ2h0c0BcIi5jb25jYXQoXCIyLjYuMFwiLFwiL2Rpc3Qvc2VhcmNoLWluc2lnaHRzLm1pbi5qc1wiKSxZPWcoKGZ1bmN0aW9uKGUpe3ZhciB0PWUub25JdGVtc0NoYW5nZSxyPWUuaXRlbXMsbj1lLmluc2lnaHRzLG89ZS5zdGF0ZTt0KHtpbnNpZ2h0czpuLGluc2lnaHRzRXZlbnRzOlUoe2l0ZW1zOnJ9KS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBRKHtldmVudE5hbWU6XCJJdGVtcyBWaWV3ZWRcIn0sZSl9KSksc3RhdGU6b30pfSksNDAwKTtmdW5jdGlvbiBYKGUpe3ZhciB0PWZ1bmN0aW9uKGUpe3JldHVybiBRKHtvbkl0ZW1zQ2hhbmdlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuaW5zaWdodHMscj1lLmluc2lnaHRzRXZlbnRzO3Qudmlld2VkT2JqZWN0SURzLmFwcGx5KHQsSihyLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIFEoUSh7fSxlKSx7fSx7YWxnb2xpYVNvdXJjZTpbXS5jb25jYXQoSihlLmFsZ29saWFTb3VyY2V8fFtdKSxbXCJhdXRvY29tcGxldGUtaW50ZXJuYWxcIl0pfSl9KSkpKX0sb25TZWxlY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pbnNpZ2h0cyxyPWUuaW5zaWdodHNFdmVudHM7dC5jbGlja2VkT2JqZWN0SURzQWZ0ZXJTZWFyY2guYXBwbHkodCxKKHIubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gUShRKHt9LGUpLHt9LHthbGdvbGlhU291cmNlOltdLmNvbmNhdChKKGUuYWxnb2xpYVNvdXJjZXx8W10pLFtcImF1dG9jb21wbGV0ZS1pbnRlcm5hbFwiXSl9KX0pKSkpfSxvbkFjdGl2ZTpJfSxlKX0oZSkscj10Lmluc2lnaHRzQ2xpZW50LG49dC5vbkl0ZW1zQ2hhbmdlLG89dC5vblNlbGVjdCxpPXQub25BY3RpdmUsYT1yO3J8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpZSh7d2luZG93OndpbmRvd30pfSgoZnVuY3Rpb24oZSl7dmFyIHQ9ZS53aW5kb3cscj10LkFsZ29saWFBbmFseXRpY3NPYmplY3R8fFwiYWFcIjtcInN0cmluZ1wiPT10eXBlb2YgciYmKGE9dFtyXSksYXx8KHQuQWxnb2xpYUFuYWx5dGljc09iamVjdD1yLHRbcl18fCh0W3JdPWZ1bmN0aW9uKCl7dFtyXS5xdWV1ZXx8KHRbcl0ucXVldWU9W10pO2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KGUpLG89MDtvPGU7bysrKW5bb109YXJndW1lbnRzW29dO3Rbcl0ucXVldWUucHVzaChuKX0pLHRbcl0udmVyc2lvbj1cIjIuNi4wXCIsYT10W3JdLGZ1bmN0aW9uKGUpe3ZhciB0PVwiW0F1dG9jb21wbGV0ZV06IENvdWxkIG5vdCBsb2FkIHNlYXJjaC1pbnNpZ2h0cy5qcy4gUGxlYXNlIGxvYWQgaXQgbWFudWFsbHkgZm9sbG93aW5nIGh0dHBzOi8vYWxnLmxpL2luc2lnaHRzLWF1dG9jb21wbGV0ZVwiO3RyeXt2YXIgcj1lLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5hc3luYz0hMCxyLnNyYz1aLHIub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IodCl9LGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocil9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcih0KX19KHQpKX0pKTt2YXIgYz1CKGEpLGw9e2N1cnJlbnQ6W119LHU9ZygoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGF0ZTtpZih0LmlzT3Blbil7dmFyIHI9dC5jb2xsZWN0aW9ucy5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW10uY29uY2F0KEooZSksSih0Lml0ZW1zKSl9KSxbXSkuZmlsdGVyKFYpO2oobC5jdXJyZW50Lm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUub2JqZWN0SUR9KSksci5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLm9iamVjdElEfSkpKXx8KGwuY3VycmVudD1yLHIubGVuZ3RoPjAmJlkoe29uSXRlbXNDaGFuZ2U6bixpdGVtczpyLGluc2lnaHRzOmMsc3RhdGU6dH0pKX19KSwwKTtyZXR1cm57bmFtZTpcImFhLmFsZ29saWFJbnNpZ2h0c1BsdWdpblwiLHN1YnNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1lLnNldENvbnRleHQscj1lLm9uU2VsZWN0LG49ZS5vbkFjdGl2ZTthKFwiYWRkQWxnb2xpYUFnZW50XCIsXCJpbnNpZ2h0cy1wbHVnaW5cIiksdCh7YWxnb2xpYUluc2lnaHRzUGx1Z2luOntfX2FsZ29saWFTZWFyY2hQYXJhbWV0ZXJzOntjbGlja0FuYWx5dGljczohMH0saW5zaWdodHM6Y319KSxyKChmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW0scj1lLnN0YXRlLG49ZS5ldmVudDtWKHQpJiZvKHtzdGF0ZTpyLGV2ZW50Om4saW5zaWdodHM6YyxpdGVtOnQsaW5zaWdodHNFdmVudHM6W1Eoe2V2ZW50TmFtZTpcIkl0ZW0gU2VsZWN0ZWRcIn0sRCh7aXRlbTp0LGl0ZW1zOmwuY3VycmVudH0pKV19KX0pKSxuKChmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW0scj1lLnN0YXRlLG49ZS5ldmVudDtWKHQpJiZpKHtzdGF0ZTpyLGV2ZW50Om4saW5zaWdodHM6YyxpdGVtOnQsaW5zaWdodHNFdmVudHM6W1Eoe2V2ZW50TmFtZTpcIkl0ZW0gQWN0aXZlXCJ9LEQoe2l0ZW06dCxpdGVtczpsLmN1cnJlbnR9KSldfSl9KSl9LG9uU3RhdGVDaGFuZ2U6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGF0ZTt1KHtzdGF0ZTp0fSl9LF9fYXV0b2NvbXBsZXRlX3BsdWdpbk9wdGlvbnM6ZX19ZnVuY3Rpb24gRyhlLHQpe3ZhciByPXQ7cmV0dXJue3RoZW46ZnVuY3Rpb24odCxuKXtyZXR1cm4gRyhlLnRoZW4odGUodCxyLGUpLHRlKG4scixlKSkscil9LGNhdGNoOmZ1bmN0aW9uKHQpe3JldHVybiBHKGUuY2F0Y2godGUodCxyLGUpKSxyKX0sZmluYWxseTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmci5vbkNhbmNlbExpc3QucHVzaCh0KSxHKGUuZmluYWxseSh0ZSh0JiZmdW5jdGlvbigpe3JldHVybiByLm9uQ2FuY2VsTGlzdD1bXSx0KCl9LHIsZSkpLHIpfSxjYW5jZWw6ZnVuY3Rpb24oKXtyLmlzQ2FuY2VsZWQ9ITA7dmFyIGU9ci5vbkNhbmNlbExpc3Q7ci5vbkNhbmNlbExpc3Q9W10sZS5mb3JFYWNoKChmdW5jdGlvbihlKXtlKCl9KSl9LGlzQ2FuY2VsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMD09PXIuaXNDYW5jZWxlZH19fWZ1bmN0aW9uIGVlKGUpe3JldHVybiBHKGUse2lzQ2FuY2VsZWQ6ITEsb25DYW5jZWxMaXN0OltdfSl9ZnVuY3Rpb24gdGUoZSx0LHIpe3JldHVybiBlP2Z1bmN0aW9uKHIpe3JldHVybiB0LmlzQ2FuY2VsZWQ/cjplKHIpfTpyfWZ1bmN0aW9uIHJlKGUsdCxyLG4pe2lmKCFyKXJldHVybiBudWxsO2lmKGU8MCYmKG51bGw9PT10fHxudWxsIT09biYmMD09PXQpKXJldHVybiByK2U7dmFyIG89KG51bGw9PT10Py0xOnQpK2U7cmV0dXJuIG88PS0xfHxvPj1yP251bGw9PT1uP251bGw6MDpvfWZ1bmN0aW9uIG5lKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBvZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9uZShPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe2llKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpuZShPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBpZShlLHQscil7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT09YWUoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PWFlKG4pKXJldHVybiBuO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09PWFlKHQpP3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBhZShlKXtyZXR1cm4gYWU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sYWUoZSl9ZnVuY3Rpb24gY2UoZSl7dmFyIHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb2xsZWN0aW9ucy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLml0ZW1zLmxlbmd0aH0pKS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCxyKXt2YXIgbj0oZVtyLTFdfHwwKSt0O3JldHVybiBlLnB1c2gobiksZX0pLFtdKS5yZWR1Y2UoKGZ1bmN0aW9uKHQscil7cmV0dXJuIHI8PWUuYWN0aXZlSXRlbUlkP3QrMTp0fSksMCk7cmV0dXJuIGUuY29sbGVjdGlvbnNbdF19KGUpO2lmKCF0KXJldHVybiBudWxsO3ZhciByPXQuaXRlbXNbZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3RhdGUscj1lLmNvbGxlY3Rpb24sbj0hMSxvPTAsaT0wOyExPT09bjspe3ZhciBhPXQuY29sbGVjdGlvbnNbb107aWYoYT09PXIpe249ITA7YnJlYWt9aSs9YS5pdGVtcy5sZW5ndGgsbysrfXJldHVybiB0LmFjdGl2ZUl0ZW1JZC1pfSh7c3RhdGU6ZSxjb2xsZWN0aW9uOnR9KV0sbj10LnNvdXJjZTtyZXR1cm57aXRlbTpyLGl0ZW1JbnB1dFZhbHVlOm4uZ2V0SXRlbUlucHV0VmFsdWUoe2l0ZW06cixzdGF0ZTplfSksaXRlbVVybDpuLmdldEl0ZW1Vcmwoe2l0ZW06cixzdGF0ZTplfSksc291cmNlOm59fXZhciBsZT0vKChndHxzbSktfGdhbGF4eSBuZXh1cyl8c2Ftc3VuZ1stIF18c2Ftc3VuZ2Jyb3dzZXIvaTtmdW5jdGlvbiB1ZShlKXtyZXR1cm4gdWU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sdWUoZSl9ZnVuY3Rpb24gc2UoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIGZlKGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT11ZShlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09dWUobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09dWUodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIG1lKGUsdCxyKXt2YXIgbixvPXQuaW5pdGlhbFN0YXRlO3JldHVybntnZXRTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBvfSxkaXNwYXRjaDpmdW5jdGlvbihuLGkpe3ZhciBhPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP3NlKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZmUoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOnNlKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfSh7fSxvKTtvPWUobyx7dHlwZTpuLHByb3BzOnQscGF5bG9hZDppfSkscih7c3RhdGU6byxwcmV2U3RhdGU6YX0pfSxwZW5kaW5nUmVxdWVzdHM6KG49W10se2FkZDpmdW5jdGlvbihlKXtyZXR1cm4gbi5wdXNoKGUpLGUuZmluYWxseSgoZnVuY3Rpb24oKXtuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWV9KSl9KSl9LGNhbmNlbEFsbDpmdW5jdGlvbigpe24uZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2FuY2VsKCl9KSl9LGlzRW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gMD09PW4ubGVuZ3RofX0pfX1mdW5jdGlvbiBwZShlKXtyZXR1cm4gcGU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scGUoZSl9ZnVuY3Rpb24gZGUoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIHZlKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP2RlKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7aGUoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOmRlKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIGhlKGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT1wZShlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09cGUobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09cGUodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIHllKGUpe3JldHVybiB5ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSx5ZShlKX1mdW5jdGlvbiBiZShlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZ2UoZSl9KGUpfHxmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZudWxsIT1lW1N5bWJvbC5pdGVyYXRvcl18fG51bGwhPWVbXCJAQGl0ZXJhdG9yXCJdKXJldHVybiBBcnJheS5mcm9tKGUpfShlKXx8ZnVuY3Rpb24oZSx0KXtpZighZSlyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGdlKGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cilyZXR1cm4gQXJyYXkuZnJvbShlKTtpZihcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QocikpcmV0dXJuIGdlKGUsdCl9KGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGdlKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkodCk7cjx0O3IrKyluW3JdPWVbcl07cmV0dXJuIG59ZnVuY3Rpb24gU2UoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIE9lKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP1NlKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7d2UoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOlNlKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIHdlKGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT15ZShlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09eWUobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09eWUodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIEVlKGUsdCl7dmFyIHIsbj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSxvPWUucGx1Z2luc3x8W107cmV0dXJuIE9lKE9lKHtkZWJ1ZzohMSxvcGVuT25Gb2N1czohMSxwbGFjZWhvbGRlcjpcIlwiLGF1dG9Gb2N1czohMSxkZWZhdWx0QWN0aXZlSXRlbUlkOm51bGwsc3RhbGxUaHJlc2hvbGQ6MzAwLGluc2lnaHRzOiExLGVudmlyb25tZW50Om4sc2hvdWxkUGFuZWxPcGVuOmZ1bmN0aW9uKGUpe3JldHVybiB3KGUuc3RhdGUpPjB9LHJlc2hhcGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc291cmNlc319LGUpLHt9LHtpZDpudWxsIT09KHI9ZS5pZCkmJnZvaWQgMCE9PXI/cjpcImF1dG9jb21wbGV0ZS1cIi5jb25jYXQoTysrKSxwbHVnaW5zOm8saW5pdGlhbFN0YXRlOk9lKHthY3RpdmVJdGVtSWQ6bnVsbCxxdWVyeTpcIlwiLGNvbXBsZXRpb246bnVsbCxjb2xsZWN0aW9uczpbXSxpc09wZW46ITEsc3RhdHVzOlwiaWRsZVwiLGNvbnRleHQ6e319LGUuaW5pdGlhbFN0YXRlKSxvblN0YXRlQ2hhbmdlOmZ1bmN0aW9uKHQpe3ZhciByO251bGw9PT0ocj1lLm9uU3RhdGVDaGFuZ2UpfHx2b2lkIDA9PT1yfHxyLmNhbGwoZSx0KSxvLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciByO3JldHVybiBudWxsPT09KHI9ZS5vblN0YXRlQ2hhbmdlKXx8dm9pZCAwPT09cj92b2lkIDA6ci5jYWxsKGUsdCl9KSl9LG9uU3VibWl0OmZ1bmN0aW9uKHQpe3ZhciByO251bGw9PT0ocj1lLm9uU3VibWl0KXx8dm9pZCAwPT09cnx8ci5jYWxsKGUsdCksby5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgcjtyZXR1cm4gbnVsbD09PShyPWUub25TdWJtaXQpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmNhbGwoZSx0KX0pKX0sb25SZXNldDpmdW5jdGlvbih0KXt2YXIgcjtudWxsPT09KHI9ZS5vblJlc2V0KXx8dm9pZCAwPT09cnx8ci5jYWxsKGUsdCksby5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgcjtyZXR1cm4gbnVsbD09PShyPWUub25SZXNldCl8fHZvaWQgMD09PXI/dm9pZCAwOnIuY2FsbChlLHQpfSkpfSxnZXRTb3VyY2VzOmZ1bmN0aW9uKHIpe3JldHVybiBQcm9taXNlLmFsbChbXS5jb25jYXQoYmUoby5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldFNvdXJjZXN9KSkpLFtlLmdldFNvdXJjZXNdKS5maWx0ZXIoQm9vbGVhbikubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXt2YXIgcj1bXTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUodCkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBQcm9taXNlLmFsbChlLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIEJvb2xlYW4oZSl9KSkubWFwKChmdW5jdGlvbihlKXtpZihlLnNvdXJjZUlkLHIuaW5jbHVkZXMoZS5zb3VyY2VJZCkpdGhyb3cgbmV3IEVycm9yKFwiW0F1dG9jb21wbGV0ZV0gVGhlIGBzb3VyY2VJZGAgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGUuc291cmNlSWQpLFwiIGlzIG5vdCB1bmlxdWUuXCIpKTtyLnB1c2goZS5zb3VyY2VJZCk7dmFyIHQ9e2dldEl0ZW1JbnB1dFZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnN0YXRlLnF1ZXJ5fSxnZXRJdGVtVXJsOmZ1bmN0aW9uKCl7fSxvblNlbGVjdDpmdW5jdGlvbihlKXsoMCxlLnNldElzT3BlbikoITEpfSxvbkFjdGl2ZTpJLG9uUmVzb2x2ZTpJfTtPYmplY3Qua2V5cyh0KS5mb3JFYWNoKChmdW5jdGlvbihlKXt0W2VdLl9fZGVmYXVsdD0hMH0pKTt2YXIgbj1vZShvZSh7fSx0KSxlKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4pfSkpKX0pKX0oZSxyKX0pKSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIFMoZSl9KSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIGUubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gT2UoT2Uoe30sZSkse30se29uU2VsZWN0OmZ1bmN0aW9uKHIpe2Uub25TZWxlY3QociksdC5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gbnVsbD09PSh0PWUub25TZWxlY3QpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmNhbGwoZSxyKX0pKX0sb25BY3RpdmU6ZnVuY3Rpb24ocil7ZS5vbkFjdGl2ZShyKSx0LmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBudWxsPT09KHQ9ZS5vbkFjdGl2ZSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuY2FsbChlLHIpfSkpfSxvblJlc29sdmU6ZnVuY3Rpb24ocil7ZS5vblJlc29sdmUociksdC5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gbnVsbD09PSh0PWUub25SZXNvbHZlKXx8dm9pZCAwPT09dD92b2lkIDA6dC5jYWxsKGUscil9KSl9fSl9KSl9KSl9LG5hdmlnYXRvcjpPZSh7bmF2aWdhdGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtVXJsO24ubG9jYXRpb24uYXNzaWduKHQpfSxuYXZpZ2F0ZU5ld1RhYjpmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW1Vcmwscj1uLm9wZW4odCxcIl9ibGFua1wiLFwibm9vcGVuZXJcIik7bnVsbD09cnx8ci5mb2N1cygpfSxuYXZpZ2F0ZU5ld1dpbmRvdzpmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW1Vcmw7bi5vcGVuKHQsXCJfYmxhbmtcIixcIm5vb3BlbmVyXCIpfX0sZS5uYXZpZ2F0b3IpfSl9ZnVuY3Rpb24gamUoZSl7cmV0dXJuIGplPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGplKGUpfWZ1bmN0aW9uIEllKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBQZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9JZShPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe0RlKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpJZShPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBEZShlLHQscil7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT09amUoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PWplKG4pKXJldHVybiBuO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09PWplKHQpP3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBBZShlKXtyZXR1cm4gQWU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sQWUoZSl9ZnVuY3Rpb24ga2UoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIENlKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP2tlKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7TmUoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOmtlKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIE5lKGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT1BZShlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09QWUobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09QWUodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIF9lKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiB4ZShlKX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJm51bGwhPWVbU3ltYm9sLml0ZXJhdG9yXXx8bnVsbCE9ZVtcIkBAaXRlcmF0b3JcIl0pcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4geGUoZSx0KTt2YXIgcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PXImJmUuY29uc3RydWN0b3ImJihyPWUuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PXJ8fFwiU2V0XCI9PT1yKXJldHVybiBBcnJheS5mcm9tKGUpO2lmKFwiQXJndW1lbnRzXCI9PT1yfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChyKSlyZXR1cm4geGUoZSx0KX0oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24geGUoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn1mdW5jdGlvbiBUZShlKXtyZXR1cm4gQm9vbGVhbihlLmV4ZWN1dGUpfWZ1bmN0aW9uIFJlKGUsdCxyKXtpZihvPWUsQm9vbGVhbihudWxsPT1vP3ZvaWQgMDpvLmV4ZWN1dGUpKXt2YXIgbj1cImFsZ29saWFcIj09PWUucmVxdWVzdGVySWQ/T2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsW3t9XS5jb25jYXQoX2UoT2JqZWN0LmtleXMoci5jb250ZXh0KS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBudWxsPT09KHQ9ci5jb250ZXh0W2VdKXx8dm9pZCAwPT09dD92b2lkIDA6dC5fX2FsZ29saWFTZWFyY2hQYXJhbWV0ZXJzfSkpKSkpOnt9O3JldHVybiBDZShDZSh7fSxlKSx7fSx7cmVxdWVzdHM6ZS5xdWVyaWVzLm1hcCgoZnVuY3Rpb24ocil7cmV0dXJue3F1ZXJ5OlwiYWxnb2xpYVwiPT09ZS5yZXF1ZXN0ZXJJZD9DZShDZSh7fSxyKSx7fSx7cGFyYW1zOkNlKENlKHt9LG4pLHIucGFyYW1zKX0pOnIsc291cmNlSWQ6dCx0cmFuc2Zvcm1SZXNwb25zZTplLnRyYW5zZm9ybVJlc3BvbnNlfX0pKX0pfXZhciBvO3JldHVybntpdGVtczplLHNvdXJjZUlkOnR9fWZ1bmN0aW9uIHFlKGUpe3ZhciB0PWUucmVkdWNlKChmdW5jdGlvbihlLHQpe2lmKCFUZSh0KSlyZXR1cm4gZS5wdXNoKHQpLGU7dmFyIHI9dC5zZWFyY2hDbGllbnQsbj10LmV4ZWN1dGUsbz10LnJlcXVlc3RlcklkLGk9dC5yZXF1ZXN0cyxhPWUuZmluZCgoZnVuY3Rpb24oZSl7cmV0dXJuIFRlKHQpJiZUZShlKSYmZS5zZWFyY2hDbGllbnQ9PT1yJiZCb29sZWFuKG8pJiZlLnJlcXVlc3RlcklkPT09b30pKTtpZihhKXt2YXIgYzsoYz1hLml0ZW1zKS5wdXNoLmFwcGx5KGMsX2UoaSkpfWVsc2V7dmFyIGw9e2V4ZWN1dGU6bixyZXF1ZXN0ZXJJZDpvLGl0ZW1zOmksc2VhcmNoQ2xpZW50OnJ9O2UucHVzaChsKX1yZXR1cm4gZX0pLFtdKS5tYXAoKGZ1bmN0aW9uKGUpe2lmKCFUZShlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpO3ZhciB0PWUscj10LmV4ZWN1dGUsbj10Lml0ZW1zO3JldHVybiByKHtzZWFyY2hDbGllbnQ6dC5zZWFyY2hDbGllbnQscmVxdWVzdHM6bn0pfSkpO3JldHVybiBQcm9taXNlLmFsbCh0KS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gUyhlKX0pKX1mdW5jdGlvbiBMZShlLHQscil7cmV0dXJuIHQubWFwKChmdW5jdGlvbih0KXt2YXIgbixvPWUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5zb3VyY2VJZD09PXQuc291cmNlSWR9KSksaT1vLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaXRlbXN9KSksYT1vWzBdLnRyYW5zZm9ybVJlc3BvbnNlLGM9YT9hKHtyZXN1bHRzOm49aSxoaXRzOm4ubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5oaXRzfSkpLmZpbHRlcihCb29sZWFuKSxmYWNldEhpdHM6bi5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBudWxsPT09KHQ9ZS5mYWNldEhpdHMpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJue2xhYmVsOmUudmFsdWUsY291bnQ6ZS5jb3VudCxfaGlnaGxpZ2h0UmVzdWx0OntsYWJlbDp7dmFsdWU6ZS5oaWdobGlnaHRlZH19fX0pKX0pKS5maWx0ZXIoQm9vbGVhbil9KTppO3JldHVybiB0Lm9uUmVzb2x2ZSh7c291cmNlOnQscmVzdWx0czppLGl0ZW1zOmMsc3RhdGU6ci5nZXRTdGF0ZSgpfSksYy5ldmVyeShCb29sZWFuKSwnVGhlIGBnZXRJdGVtc2AgZnVuY3Rpb24gZnJvbSBzb3VyY2UgXCInLmNvbmNhdCh0LnNvdXJjZUlkLCdcIiBtdXN0IHJldHVybiBhbiBhcnJheSBvZiBpdGVtcyBidXQgcmV0dXJuZWQgJykuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZvaWQgMCksXCIuXFxuXFxuRGlkIHlvdSBmb3JnZXQgdG8gcmV0dXJuIGl0ZW1zP1xcblxcblNlZTogaHR0cHM6Ly93d3cuYWxnb2xpYS5jb20vZG9jL3VpLWxpYnJhcmllcy9hdXRvY29tcGxldGUvY29yZS1jb25jZXB0cy9zb3VyY2VzLyNwYXJhbS1nZXRpdGVtc1wiKSx7c291cmNlOnQsaXRlbXM6Y319KSl9ZnVuY3Rpb24gTWUoZSl7cmV0dXJuIE1lPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LE1lKGUpfXZhciBIZT1bXCJldmVudFwiLFwibmV4dFN0YXRlXCIsXCJwcm9wc1wiLFwicXVlcnlcIixcInJlZnJlc2hcIixcInN0b3JlXCJdO2Z1bmN0aW9uIEZlKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBCZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9GZShPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe1VlKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpGZShPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBVZShlLHQscil7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT09TWUoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PU1lKG4pKXJldHVybiBuO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09PU1lKHQpP3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBWZShlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIHIsbixvPWZ1bmN0aW9uKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgcixuLG89e30saT1PYmplY3Qua2V5cyhlKTtmb3Iobj0wO248aS5sZW5ndGg7bisrKXI9aVtuXSx0LmluZGV4T2Yocik+PTB8fChvW3JdPWVbcl0pO3JldHVybiBvfShlLHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBpPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7Zm9yKG49MDtuPGkubGVuZ3RoO24rKylyPWlbbl0sdC5pbmRleE9mKHIpPj0wfHxPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSxyKSYmKG9bcl09ZVtyXSl9cmV0dXJuIG99dmFyIEtlLEplLCRlLHplPW51bGwsUWU9KEtlPS0xLEplPS0xLCRlPXZvaWQgMCxmdW5jdGlvbihlKXt2YXIgdD0rK0tlO3JldHVybiBQcm9taXNlLnJlc29sdmUoZSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuICRlJiZ0PEplPyRlOihKZT10LCRlPWUsZSl9KSl9KTtmdW5jdGlvbiBXZShlKXt2YXIgdD1lLmV2ZW50LHI9ZS5uZXh0U3RhdGUsbj12b2lkIDA9PT1yP3t9OnIsbz1lLnByb3BzLGk9ZS5xdWVyeSxhPWUucmVmcmVzaCxjPWUuc3RvcmUsbD1WZShlLEhlKTt6ZSYmby5lbnZpcm9ubWVudC5jbGVhclRpbWVvdXQoemUpO3ZhciB1PWwuc2V0Q29sbGVjdGlvbnMscz1sLnNldElzT3BlbixmPWwuc2V0UXVlcnksbT1sLnNldEFjdGl2ZUl0ZW1JZCxwPWwuc2V0U3RhdHVzO2lmKGYoaSksbShvLmRlZmF1bHRBY3RpdmVJdGVtSWQpLCFpJiYhMT09PW8ub3Blbk9uRm9jdXMpe3ZhciBkLHY9Yy5nZXRTdGF0ZSgpLmNvbGxlY3Rpb25zLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIEJlKEJlKHt9LGUpLHt9LHtpdGVtczpbXX0pfSkpO3AoXCJpZGxlXCIpLHUodikscyhudWxsIT09KGQ9bi5pc09wZW4pJiZ2b2lkIDAhPT1kP2Q6by5zaG91bGRQYW5lbE9wZW4oe3N0YXRlOmMuZ2V0U3RhdGUoKX0pKTt2YXIgaD1lZShRZSh2KS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKX0pKSk7cmV0dXJuIGMucGVuZGluZ1JlcXVlc3RzLmFkZChoKX1wKFwibG9hZGluZ1wiKSx6ZT1vLmVudmlyb25tZW50LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cChcInN0YWxsZWRcIil9KSxvLnN0YWxsVGhyZXNob2xkKTt2YXIgeT1lZShRZShvLmdldFNvdXJjZXMoQmUoe3F1ZXJ5OmkscmVmcmVzaDphLHN0YXRlOmMuZ2V0U3RhdGUoKX0sbCkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBQcm9taXNlLmFsbChlLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShlLmdldEl0ZW1zKEJlKHtxdWVyeTppLHJlZnJlc2g6YSxzdGF0ZTpjLmdldFN0YXRlKCl9LGwpKSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIFJlKHQsZS5zb3VyY2VJZCxjLmdldFN0YXRlKCkpfSkpfSkpKS50aGVuKHFlKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm4gTGUodCxlLGMpfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1lLmNvbGxlY3Rpb25zLHI9ZS5wcm9wcyxuPWUuc3RhdGUsbz10LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gUGUoUGUoe30sZSkse30sRGUoe30sdC5zb3VyY2Uuc291cmNlSWQsUGUoUGUoe30sdC5zb3VyY2UpLHt9LHtnZXRJdGVtczpmdW5jdGlvbigpe3JldHVybiBTKHQuaXRlbXMpfX0pKSl9KSx7fSksaT1yLnBsdWdpbnMucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiB0LnJlc2hhcGU/dC5yZXNoYXBlKGUpOmV9KSx7c291cmNlc0J5U291cmNlSWQ6byxzdGF0ZTpufSkuc291cmNlc0J5U291cmNlSWQ7cmV0dXJuIFMoci5yZXNoYXBlKHtzb3VyY2VzQnlTb3VyY2VJZDppLHNvdXJjZXM6T2JqZWN0LnZhbHVlcyhpKSxzdGF0ZTpufSkpLmZpbHRlcihCb29sZWFuKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybntzb3VyY2U6ZSxpdGVtczplLmdldEl0ZW1zKCl9fSkpfSh7Y29sbGVjdGlvbnM6ZSxwcm9wczpvLHN0YXRlOmMuZ2V0U3RhdGUoKX0pfSkpfSkpKSkudGhlbigoZnVuY3Rpb24oZSl7dmFyIHI7cChcImlkbGVcIiksdShlKTt2YXIgZj1vLnNob3VsZFBhbmVsT3Blbih7c3RhdGU6Yy5nZXRTdGF0ZSgpfSk7cyhudWxsIT09KHI9bi5pc09wZW4pJiZ2b2lkIDAhPT1yP3I6by5vcGVuT25Gb2N1cyYmIWkmJmZ8fGYpO3ZhciBtPWNlKGMuZ2V0U3RhdGUoKSk7aWYobnVsbCE9PWMuZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQmJm0pe3ZhciBkPW0uaXRlbSx2PW0uaXRlbUlucHV0VmFsdWUsaD1tLml0ZW1VcmwseT1tLnNvdXJjZTt5Lm9uQWN0aXZlKEJlKHtldmVudDp0LGl0ZW06ZCxpdGVtSW5wdXRWYWx1ZTp2LGl0ZW1Vcmw6aCxyZWZyZXNoOmEsc291cmNlOnksc3RhdGU6Yy5nZXRTdGF0ZSgpfSxsKSl9fSkpLmZpbmFsbHkoKGZ1bmN0aW9uKCl7cChcImlkbGVcIiksemUmJm8uZW52aXJvbm1lbnQuY2xlYXJUaW1lb3V0KHplKX0pKTtyZXR1cm4gYy5wZW5kaW5nUmVxdWVzdHMuYWRkKHkpfWZ1bmN0aW9uIFplKGUpe3JldHVybiBaZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxaZShlKX12YXIgWWU9W1wiZXZlbnRcIixcInByb3BzXCIsXCJyZWZyZXNoXCIsXCJzdG9yZVwiXTtmdW5jdGlvbiBYZShlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gR2UoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/WGUoT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtldChlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6WGUoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gZXQoZSx0LHIpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9PVplKGUpfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgcj1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09cil7dmFyIG49ci5jYWxsKGUsdHx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPT1aZShuKSlyZXR1cm4gbjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT10P1N0cmluZzpOdW1iZXIpKGUpfShlLFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PT1aZSh0KT90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gdHQoZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciByLG4sbz1mdW5jdGlvbihlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIHIsbixvPXt9LGk9T2JqZWN0LmtleXMoZSk7Zm9yKG49MDtuPGkubGVuZ3RoO24rKylyPWlbbl0sdC5pbmRleE9mKHIpPj0wfHwob1tyXT1lW3JdKTtyZXR1cm4gb30oZSx0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO2ZvcihuPTA7bjxpLmxlbmd0aDtuKyspcj1pW25dLHQuaW5kZXhPZihyKT49MHx8T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUscikmJihvW3JdPWVbcl0pfXJldHVybiBvfWZ1bmN0aW9uIHJ0KGUpe3JldHVybiBydD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxydChlKX12YXIgbnQ9W1wicHJvcHNcIixcInJlZnJlc2hcIixcInN0b3JlXCJdLG90PVtcImlucHV0RWxlbWVudFwiLFwiZm9ybUVsZW1lbnRcIixcInBhbmVsRWxlbWVudFwiXSxpdD1bXCJpbnB1dEVsZW1lbnRcIl0sYXQ9W1wiaW5wdXRFbGVtZW50XCIsXCJtYXhMZW5ndGhcIl0sY3Q9W1wic291cmNlSW5kZXhcIl0sbHQ9W1wic291cmNlSW5kZXhcIl0sdXQ9W1wiaXRlbVwiLFwic291cmNlXCIsXCJzb3VyY2VJbmRleFwiXTtmdW5jdGlvbiBzdChlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gZnQoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/c3QoT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXttdChlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6c3QoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gbXQoZSx0LHIpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9PXJ0KGUpfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgcj1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09cil7dmFyIG49ci5jYWxsKGUsdHx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPT1ydChuKSlyZXR1cm4gbjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT10P1N0cmluZzpOdW1iZXIpKGUpfShlLFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PT1ydCh0KT90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gcHQoZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciByLG4sbz1mdW5jdGlvbihlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIHIsbixvPXt9LGk9T2JqZWN0LmtleXMoZSk7Zm9yKG49MDtuPGkubGVuZ3RoO24rKylyPWlbbl0sdC5pbmRleE9mKHIpPj0wfHwob1tyXT1lW3JdKTtyZXR1cm4gb30oZSx0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO2ZvcihuPTA7bjxpLmxlbmd0aDtuKyspcj1pW25dLHQuaW5kZXhPZihyKT49MHx8T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUscikmJihvW3JdPWVbcl0pfXJldHVybiBvfWZ1bmN0aW9uIGR0KGUpe3ZhciB0PWUucHJvcHMscj1lLnJlZnJlc2gsbj1lLnN0b3JlLG89cHQoZSxudCksaT1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDAhPT10P1wiXCIuY29uY2F0KGUsXCItXCIpLmNvbmNhdCh0KTplfTtyZXR1cm57Z2V0RW52aXJvbm1lbnRQcm9wczpmdW5jdGlvbihlKXt2YXIgcj1lLmlucHV0RWxlbWVudCxvPWUuZm9ybUVsZW1lbnQsaT1lLnBhbmVsRWxlbWVudDtmdW5jdGlvbiBhKGUpeyFuLmdldFN0YXRlKCkuaXNPcGVuJiZuLnBlbmRpbmdSZXF1ZXN0cy5pc0VtcHR5KCl8fGUudGFyZ2V0PT09cnx8ITE9PT1bbyxpXS5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gcj10LG49ZS50YXJnZXQscj09PW58fHIuY29udGFpbnMobik7dmFyIHIsbn0pKSYmKG4uZGlzcGF0Y2goXCJibHVyXCIsbnVsbCksdC5kZWJ1Z3x8bi5wZW5kaW5nUmVxdWVzdHMuY2FuY2VsQWxsKCkpfXJldHVybiBmdCh7b25Ub3VjaFN0YXJ0OmEsb25Nb3VzZURvd246YSxvblRvdWNoTW92ZTpmdW5jdGlvbihlKXshMSE9PW4uZ2V0U3RhdGUoKS5pc09wZW4mJnI9PT10LmVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJmUudGFyZ2V0IT09ciYmci5ibHVyKCl9fSxwdChlLG90KSl9LGdldFJvb3RQcm9wczpmdW5jdGlvbihlKXtyZXR1cm4gZnQoe3JvbGU6XCJjb21ib2JveFwiLFwiYXJpYS1leHBhbmRlZFwiOm4uZ2V0U3RhdGUoKS5pc09wZW4sXCJhcmlhLWhhc3BvcHVwXCI6XCJsaXN0Ym94XCIsXCJhcmlhLW93bnNcIjpuLmdldFN0YXRlKCkuaXNPcGVuP1wiXCIuY29uY2F0KHQuaWQsXCItbGlzdFwiKTp2b2lkIDAsXCJhcmlhLWxhYmVsbGVkYnlcIjpcIlwiLmNvbmNhdCh0LmlkLFwiLWxhYmVsXCIpfSxlKX0sZ2V0Rm9ybVByb3BzOmZ1bmN0aW9uKGUpe2UuaW5wdXRFbGVtZW50O3JldHVybiBmdCh7YWN0aW9uOlwiXCIsbm9WYWxpZGF0ZTohMCxyb2xlOlwic2VhcmNoXCIsb25TdWJtaXQ6ZnVuY3Rpb24oaSl7dmFyIGE7aS5wcmV2ZW50RGVmYXVsdCgpLHQub25TdWJtaXQoZnQoe2V2ZW50OmkscmVmcmVzaDpyLHN0YXRlOm4uZ2V0U3RhdGUoKX0sbykpLG4uZGlzcGF0Y2goXCJzdWJtaXRcIixudWxsKSxudWxsPT09KGE9ZS5pbnB1dEVsZW1lbnQpfHx2b2lkIDA9PT1hfHxhLmJsdXIoKX0sb25SZXNldDpmdW5jdGlvbihpKXt2YXIgYTtpLnByZXZlbnREZWZhdWx0KCksdC5vblJlc2V0KGZ0KHtldmVudDppLHJlZnJlc2g6cixzdGF0ZTpuLmdldFN0YXRlKCl9LG8pKSxuLmRpc3BhdGNoKFwicmVzZXRcIixudWxsKSxudWxsPT09KGE9ZS5pbnB1dEVsZW1lbnQpfHx2b2lkIDA9PT1hfHxhLmZvY3VzKCl9fSxwdChlLGl0KSl9LGdldExhYmVsUHJvcHM6ZnVuY3Rpb24oZSl7dmFyIHI9ZXx8e30sbj1yLnNvdXJjZUluZGV4LG89cHQocixjdCk7cmV0dXJuIGZ0KHtodG1sRm9yOlwiXCIuY29uY2F0KGkodC5pZCxuKSxcIi1pbnB1dFwiKSxpZDpcIlwiLmNvbmNhdChpKHQuaWQsbiksXCItbGFiZWxcIil9LG8pfSxnZXRJbnB1dFByb3BzOmZ1bmN0aW9uKGUpe3ZhciBpO2Z1bmN0aW9uIGEoZSl7KHQub3Blbk9uRm9jdXN8fEJvb2xlYW4obi5nZXRTdGF0ZSgpLnF1ZXJ5KSkmJldlKGZ0KHtldmVudDplLHByb3BzOnQscXVlcnk6bi5nZXRTdGF0ZSgpLmNvbXBsZXRpb258fG4uZ2V0U3RhdGUoKS5xdWVyeSxyZWZyZXNoOnIsc3RvcmU6bn0sbykpLG4uZGlzcGF0Y2goXCJmb2N1c1wiLG51bGwpfXZhciBjPWV8fHt9LGw9KGMuaW5wdXRFbGVtZW50LGMubWF4TGVuZ3RoKSx1PXZvaWQgMD09PWw/NTEyOmwscz1wdChjLGF0KSxmPWNlKG4uZ2V0U3RhdGUoKSksbT1mdW5jdGlvbihlKXtyZXR1cm4gQm9vbGVhbihlJiZlLm1hdGNoKGxlKSl9KChudWxsPT09KGk9dC5lbnZpcm9ubWVudC5uYXZpZ2F0b3IpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLnVzZXJBZ2VudCl8fFwiXCIpLHA9bnVsbCE9ZiYmZi5pdGVtVXJsJiYhbT9cImdvXCI6XCJzZWFyY2hcIjtyZXR1cm4gZnQoe1wiYXJpYS1hdXRvY29tcGxldGVcIjpcImJvdGhcIixcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiOm4uZ2V0U3RhdGUoKS5pc09wZW4mJm51bGwhPT1uLmdldFN0YXRlKCkuYWN0aXZlSXRlbUlkP1wiXCIuY29uY2F0KHQuaWQsXCItaXRlbS1cIikuY29uY2F0KG4uZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQpOnZvaWQgMCxcImFyaWEtY29udHJvbHNcIjpuLmdldFN0YXRlKCkuaXNPcGVuP1wiXCIuY29uY2F0KHQuaWQsXCItbGlzdFwiKTp2b2lkIDAsXCJhcmlhLWxhYmVsbGVkYnlcIjpcIlwiLmNvbmNhdCh0LmlkLFwiLWxhYmVsXCIpLHZhbHVlOm4uZ2V0U3RhdGUoKS5jb21wbGV0aW9ufHxuLmdldFN0YXRlKCkucXVlcnksaWQ6XCJcIi5jb25jYXQodC5pZCxcIi1pbnB1dFwiKSxhdXRvQ29tcGxldGU6XCJvZmZcIixhdXRvQ29ycmVjdDpcIm9mZlwiLGF1dG9DYXBpdGFsaXplOlwib2ZmXCIsZW50ZXJLZXlIaW50OnAsc3BlbGxDaGVjazpcImZhbHNlXCIsYXV0b0ZvY3VzOnQuYXV0b0ZvY3VzLHBsYWNlaG9sZGVyOnQucGxhY2Vob2xkZXIsbWF4TGVuZ3RoOnUsdHlwZTpcInNlYXJjaFwiLG9uQ2hhbmdlOmZ1bmN0aW9uKGUpe1dlKGZ0KHtldmVudDplLHByb3BzOnQscXVlcnk6ZS5jdXJyZW50VGFyZ2V0LnZhbHVlLnNsaWNlKDAsdSkscmVmcmVzaDpyLHN0b3JlOm59LG8pKX0sb25LZXlEb3duOmZ1bmN0aW9uKGUpeyFmdW5jdGlvbihlKXt2YXIgdD1lLmV2ZW50LHI9ZS5wcm9wcyxuPWUucmVmcmVzaCxvPWUuc3RvcmUsaT10dChlLFllKTtpZihcIkFycm93VXBcIj09PXQua2V5fHxcIkFycm93RG93blwiPT09dC5rZXkpe3ZhciBhPWZ1bmN0aW9uKCl7dmFyIGU9ci5lbnZpcm9ubWVudC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlwiLmNvbmNhdChyLmlkLFwiLWl0ZW0tXCIpLmNvbmNhdChvLmdldFN0YXRlKCkuYWN0aXZlSXRlbUlkKSk7ZSYmKGUuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZD9lLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoITEpOmUuc2Nyb2xsSW50b1ZpZXcoITEpKX0sYz1mdW5jdGlvbigpe3ZhciBlPWNlKG8uZ2V0U3RhdGUoKSk7aWYobnVsbCE9PW8uZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQmJmUpe3ZhciByPWUuaXRlbSxhPWUuaXRlbUlucHV0VmFsdWUsYz1lLml0ZW1VcmwsbD1lLnNvdXJjZTtsLm9uQWN0aXZlKEdlKHtldmVudDp0LGl0ZW06cixpdGVtSW5wdXRWYWx1ZTphLGl0ZW1Vcmw6YyxyZWZyZXNoOm4sc291cmNlOmwsc3RhdGU6by5nZXRTdGF0ZSgpfSxpKSl9fTt0LnByZXZlbnREZWZhdWx0KCksITE9PT1vLmdldFN0YXRlKCkuaXNPcGVuJiYoci5vcGVuT25Gb2N1c3x8Qm9vbGVhbihvLmdldFN0YXRlKCkucXVlcnkpKT9XZShHZSh7ZXZlbnQ6dCxwcm9wczpyLHF1ZXJ5Om8uZ2V0U3RhdGUoKS5xdWVyeSxyZWZyZXNoOm4sc3RvcmU6b30saSkpLnRoZW4oKGZ1bmN0aW9uKCl7by5kaXNwYXRjaCh0LmtleSx7bmV4dEFjdGl2ZUl0ZW1JZDpyLmRlZmF1bHRBY3RpdmVJdGVtSWR9KSxjKCksc2V0VGltZW91dChhLDApfSkpOihvLmRpc3BhdGNoKHQua2V5LHt9KSxjKCksYSgpKX1lbHNlIGlmKFwiRXNjYXBlXCI9PT10LmtleSl0LnByZXZlbnREZWZhdWx0KCksby5kaXNwYXRjaCh0LmtleSxudWxsKSxvLnBlbmRpbmdSZXF1ZXN0cy5jYW5jZWxBbGwoKTtlbHNlIGlmKFwiVGFiXCI9PT10LmtleSlvLmRpc3BhdGNoKFwiYmx1clwiLG51bGwpLG8ucGVuZGluZ1JlcXVlc3RzLmNhbmNlbEFsbCgpO2Vsc2UgaWYoXCJFbnRlclwiPT09dC5rZXkpe2lmKG51bGw9PT1vLmdldFN0YXRlKCkuYWN0aXZlSXRlbUlkfHxvLmdldFN0YXRlKCkuY29sbGVjdGlvbnMuZXZlcnkoKGZ1bmN0aW9uKGUpe3JldHVybiAwPT09ZS5pdGVtcy5sZW5ndGh9KSkpcmV0dXJuIHZvaWQoci5kZWJ1Z3x8by5wZW5kaW5nUmVxdWVzdHMuY2FuY2VsQWxsKCkpO3QucHJldmVudERlZmF1bHQoKTt2YXIgbD1jZShvLmdldFN0YXRlKCkpLHU9bC5pdGVtLHM9bC5pdGVtSW5wdXRWYWx1ZSxmPWwuaXRlbVVybCxtPWwuc291cmNlO2lmKHQubWV0YUtleXx8dC5jdHJsS2V5KXZvaWQgMCE9PWYmJihtLm9uU2VsZWN0KEdlKHtldmVudDp0LGl0ZW06dSxpdGVtSW5wdXRWYWx1ZTpzLGl0ZW1Vcmw6ZixyZWZyZXNoOm4sc291cmNlOm0sc3RhdGU6by5nZXRTdGF0ZSgpfSxpKSksci5uYXZpZ2F0b3IubmF2aWdhdGVOZXdUYWIoe2l0ZW1Vcmw6ZixpdGVtOnUsc3RhdGU6by5nZXRTdGF0ZSgpfSkpO2Vsc2UgaWYodC5zaGlmdEtleSl2b2lkIDAhPT1mJiYobS5vblNlbGVjdChHZSh7ZXZlbnQ6dCxpdGVtOnUsaXRlbUlucHV0VmFsdWU6cyxpdGVtVXJsOmYscmVmcmVzaDpuLHNvdXJjZTptLHN0YXRlOm8uZ2V0U3RhdGUoKX0saSkpLHIubmF2aWdhdG9yLm5hdmlnYXRlTmV3V2luZG93KHtpdGVtVXJsOmYsaXRlbTp1LHN0YXRlOm8uZ2V0U3RhdGUoKX0pKTtlbHNlIGlmKHQuYWx0S2V5KTtlbHNle2lmKHZvaWQgMCE9PWYpcmV0dXJuIG0ub25TZWxlY3QoR2Uoe2V2ZW50OnQsaXRlbTp1LGl0ZW1JbnB1dFZhbHVlOnMsaXRlbVVybDpmLHJlZnJlc2g6bixzb3VyY2U6bSxzdGF0ZTpvLmdldFN0YXRlKCl9LGkpKSx2b2lkIHIubmF2aWdhdG9yLm5hdmlnYXRlKHtpdGVtVXJsOmYsaXRlbTp1LHN0YXRlOm8uZ2V0U3RhdGUoKX0pO1dlKEdlKHtldmVudDp0LG5leHRTdGF0ZTp7aXNPcGVuOiExfSxwcm9wczpyLHF1ZXJ5OnMscmVmcmVzaDpuLHN0b3JlOm99LGkpKS50aGVuKChmdW5jdGlvbigpe20ub25TZWxlY3QoR2Uoe2V2ZW50OnQsaXRlbTp1LGl0ZW1JbnB1dFZhbHVlOnMsaXRlbVVybDpmLHJlZnJlc2g6bixzb3VyY2U6bSxzdGF0ZTpvLmdldFN0YXRlKCl9LGkpKX0pKX19fShmdCh7ZXZlbnQ6ZSxwcm9wczp0LHJlZnJlc2g6cixzdG9yZTpufSxvKSl9LG9uRm9jdXM6YSxvbkJsdXI6SSxvbkNsaWNrOmZ1bmN0aW9uKHIpe2UuaW5wdXRFbGVtZW50IT09dC5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50fHxuLmdldFN0YXRlKCkuaXNPcGVufHxhKHIpfX0scyl9LGdldFBhbmVsUHJvcHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGZ0KHtvbk1vdXNlRG93bjpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9LG9uTW91c2VMZWF2ZTpmdW5jdGlvbigpe24uZGlzcGF0Y2goXCJtb3VzZWxlYXZlXCIsbnVsbCl9fSxlKX0sZ2V0TGlzdFByb3BzOmZ1bmN0aW9uKGUpe3ZhciByPWV8fHt9LG49ci5zb3VyY2VJbmRleCxvPXB0KHIsbHQpO3JldHVybiBmdCh7cm9sZTpcImxpc3Rib3hcIixcImFyaWEtbGFiZWxsZWRieVwiOlwiXCIuY29uY2F0KGkodC5pZCxuKSxcIi1sYWJlbFwiKSxpZDpcIlwiLmNvbmNhdChpKHQuaWQsbiksXCItbGlzdFwiKX0sbyl9LGdldEl0ZW1Qcm9wczpmdW5jdGlvbihlKXt2YXIgYT1lLml0ZW0sYz1lLnNvdXJjZSxsPWUuc291cmNlSW5kZXgsdT1wdChlLHV0KTtyZXR1cm4gZnQoe2lkOlwiXCIuY29uY2F0KGkodC5pZCxsKSxcIi1pdGVtLVwiKS5jb25jYXQoYS5fX2F1dG9jb21wbGV0ZV9pZCkscm9sZTpcIm9wdGlvblwiLFwiYXJpYS1zZWxlY3RlZFwiOm4uZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQ9PT1hLl9fYXV0b2NvbXBsZXRlX2lkLG9uTW91c2VNb3ZlOmZ1bmN0aW9uKGUpe2lmKGEuX19hdXRvY29tcGxldGVfaWQhPT1uLmdldFN0YXRlKCkuYWN0aXZlSXRlbUlkKXtuLmRpc3BhdGNoKFwibW91c2Vtb3ZlXCIsYS5fX2F1dG9jb21wbGV0ZV9pZCk7dmFyIHQ9Y2Uobi5nZXRTdGF0ZSgpKTtpZihudWxsIT09bi5nZXRTdGF0ZSgpLmFjdGl2ZUl0ZW1JZCYmdCl7dmFyIGk9dC5pdGVtLGM9dC5pdGVtSW5wdXRWYWx1ZSxsPXQuaXRlbVVybCx1PXQuc291cmNlO3Uub25BY3RpdmUoZnQoe2V2ZW50OmUsaXRlbTppLGl0ZW1JbnB1dFZhbHVlOmMsaXRlbVVybDpsLHJlZnJlc2g6cixzb3VyY2U6dSxzdGF0ZTpuLmdldFN0YXRlKCl9LG8pKX19fSxvbk1vdXNlRG93bjpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9LG9uQ2xpY2s6ZnVuY3Rpb24oZSl7dmFyIGk9Yy5nZXRJdGVtSW5wdXRWYWx1ZSh7aXRlbTphLHN0YXRlOm4uZ2V0U3RhdGUoKX0pLGw9Yy5nZXRJdGVtVXJsKHtpdGVtOmEsc3RhdGU6bi5nZXRTdGF0ZSgpfSk7KGw/UHJvbWlzZS5yZXNvbHZlKCk6V2UoZnQoe2V2ZW50OmUsbmV4dFN0YXRlOntpc09wZW46ITF9LHByb3BzOnQscXVlcnk6aSxyZWZyZXNoOnIsc3RvcmU6bn0sbykpKS50aGVuKChmdW5jdGlvbigpe2Mub25TZWxlY3QoZnQoe2V2ZW50OmUsaXRlbTphLGl0ZW1JbnB1dFZhbHVlOmksaXRlbVVybDpsLHJlZnJlc2g6cixzb3VyY2U6YyxzdGF0ZTpuLmdldFN0YXRlKCl9LG8pKX0pKX19LHUpfX19ZnVuY3Rpb24gdnQoZSl7cmV0dXJuIHZ0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHZ0KGUpfWZ1bmN0aW9uIGh0KGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiB5dChlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9odChPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe2J0KGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpodChPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBidChlLHQscil7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT09dnQoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PXZ0KG4pKXJldHVybiBuO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09PXZ0KHQpP3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBndChlKXt2YXIgdCxyLG4sbyxpPWUucGx1Z2lucyxhPWUub3B0aW9ucyxjPW51bGw9PT0odD0oKG51bGw9PT0ocj1hLl9fYXV0b2NvbXBsZXRlX21ldGFkYXRhKXx8dm9pZCAwPT09cj92b2lkIDA6ci51c2VyQWdlbnRzKXx8W10pWzBdKXx8dm9pZCAwPT09dD92b2lkIDA6dC5zZWdtZW50LGw9Yz9idCh7fSxjLE9iamVjdC5rZXlzKChudWxsPT09KG49YS5fX2F1dG9jb21wbGV0ZV9tZXRhZGF0YSl8fHZvaWQgMD09PW4/dm9pZCAwOm4ub3B0aW9ucyl8fHt9KSk6e307cmV0dXJue3BsdWdpbnM6aS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOmUubmFtZSxvcHRpb25zOk9iamVjdC5rZXlzKGUuX19hdXRvY29tcGxldGVfcGx1Z2luT3B0aW9uc3x8W10pfX0pKSxvcHRpb25zOnl0KHtcImF1dG9jb21wbGV0ZS1jb3JlXCI6T2JqZWN0LmtleXMoYSl9LGwpLHVhOlAuY29uY2F0KChudWxsPT09KG89YS5fX2F1dG9jb21wbGV0ZV9tZXRhZGF0YSl8fHZvaWQgMD09PW8/dm9pZCAwOm8udXNlckFnZW50cyl8fFtdKX19ZnVuY3Rpb24gU3QoZSl7dmFyIHQscj1lLnN0YXRlO3JldHVybiExPT09ci5pc09wZW58fG51bGw9PT1yLmFjdGl2ZUl0ZW1JZD9udWxsOihudWxsPT09KHQ9Y2UocikpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lml0ZW1JbnB1dFZhbHVlKXx8bnVsbH1mdW5jdGlvbiBPdChlKXtyZXR1cm4gT3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sT3QoZSl9ZnVuY3Rpb24gd3QoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIEV0KGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP3d0KE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7anQoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOnd0KE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIGp0KGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT1PdChlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09T3QobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09T3QodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfXZhciBJdD1mdW5jdGlvbihlLHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcInNldEFjdGl2ZUl0ZW1JZFwiOmNhc2VcIm1vdXNlbW92ZVwiOnJldHVybiBFdChFdCh7fSxlKSx7fSx7YWN0aXZlSXRlbUlkOnQucGF5bG9hZH0pO2Nhc2VcInNldFF1ZXJ5XCI6cmV0dXJuIEV0KEV0KHt9LGUpLHt9LHtxdWVyeTp0LnBheWxvYWQsY29tcGxldGlvbjpudWxsfSk7Y2FzZVwic2V0Q29sbGVjdGlvbnNcIjpyZXR1cm4gRXQoRXQoe30sZSkse30se2NvbGxlY3Rpb25zOnQucGF5bG9hZH0pO2Nhc2VcInNldElzT3BlblwiOnJldHVybiBFdChFdCh7fSxlKSx7fSx7aXNPcGVuOnQucGF5bG9hZH0pO2Nhc2VcInNldFN0YXR1c1wiOnJldHVybiBFdChFdCh7fSxlKSx7fSx7c3RhdHVzOnQucGF5bG9hZH0pO2Nhc2VcInNldENvbnRleHRcIjpyZXR1cm4gRXQoRXQoe30sZSkse30se2NvbnRleHQ6RXQoRXQoe30sZS5jb250ZXh0KSx0LnBheWxvYWQpfSk7Y2FzZVwiQXJyb3dEb3duXCI6dmFyIHI9RXQoRXQoe30sZSkse30se2FjdGl2ZUl0ZW1JZDp0LnBheWxvYWQuaGFzT3duUHJvcGVydHkoXCJuZXh0QWN0aXZlSXRlbUlkXCIpP3QucGF5bG9hZC5uZXh0QWN0aXZlSXRlbUlkOnJlKDEsZS5hY3RpdmVJdGVtSWQsdyhlKSx0LnByb3BzLmRlZmF1bHRBY3RpdmVJdGVtSWQpfSk7cmV0dXJuIEV0KEV0KHt9LHIpLHt9LHtjb21wbGV0aW9uOlN0KHtzdGF0ZTpyfSl9KTtjYXNlXCJBcnJvd1VwXCI6dmFyIG49RXQoRXQoe30sZSkse30se2FjdGl2ZUl0ZW1JZDpyZSgtMSxlLmFjdGl2ZUl0ZW1JZCx3KGUpLHQucHJvcHMuZGVmYXVsdEFjdGl2ZUl0ZW1JZCl9KTtyZXR1cm4gRXQoRXQoe30sbikse30se2NvbXBsZXRpb246U3Qoe3N0YXRlOm59KX0pO2Nhc2VcIkVzY2FwZVwiOnJldHVybiBlLmlzT3Blbj9FdChFdCh7fSxlKSx7fSx7YWN0aXZlSXRlbUlkOm51bGwsaXNPcGVuOiExLGNvbXBsZXRpb246bnVsbH0pOkV0KEV0KHt9LGUpLHt9LHthY3RpdmVJdGVtSWQ6bnVsbCxxdWVyeTpcIlwiLHN0YXR1czpcImlkbGVcIixjb2xsZWN0aW9uczpbXX0pO2Nhc2VcInN1Ym1pdFwiOnJldHVybiBFdChFdCh7fSxlKSx7fSx7YWN0aXZlSXRlbUlkOm51bGwsaXNPcGVuOiExLHN0YXR1czpcImlkbGVcIn0pO2Nhc2VcInJlc2V0XCI6cmV0dXJuIEV0KEV0KHt9LGUpLHt9LHthY3RpdmVJdGVtSWQ6ITA9PT10LnByb3BzLm9wZW5PbkZvY3VzP3QucHJvcHMuZGVmYXVsdEFjdGl2ZUl0ZW1JZDpudWxsLHN0YXR1czpcImlkbGVcIixxdWVyeTpcIlwifSk7Y2FzZVwiZm9jdXNcIjpyZXR1cm4gRXQoRXQoe30sZSkse30se2FjdGl2ZUl0ZW1JZDp0LnByb3BzLmRlZmF1bHRBY3RpdmVJdGVtSWQsaXNPcGVuOih0LnByb3BzLm9wZW5PbkZvY3VzfHxCb29sZWFuKGUucXVlcnkpKSYmdC5wcm9wcy5zaG91bGRQYW5lbE9wZW4oe3N0YXRlOmV9KX0pO2Nhc2VcImJsdXJcIjpyZXR1cm4gdC5wcm9wcy5kZWJ1Zz9lOkV0KEV0KHt9LGUpLHt9LHtpc09wZW46ITEsYWN0aXZlSXRlbUlkOm51bGx9KTtjYXNlXCJtb3VzZWxlYXZlXCI6cmV0dXJuIEV0KEV0KHt9LGUpLHt9LHthY3RpdmVJdGVtSWQ6dC5wcm9wcy5kZWZhdWx0QWN0aXZlSXRlbUlkfSk7ZGVmYXVsdDpyZXR1cm5cIlRoZSByZWR1Y2VyIGFjdGlvbiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkodC50eXBlKSxcIiBpcyBub3Qgc3VwcG9ydGVkLlwiKSxlfX07ZnVuY3Rpb24gUHQoZSl7cmV0dXJuIFB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LFB0KGUpfWZ1bmN0aW9uIER0KGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBBdChlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9EdChPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe2t0KGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpEdChPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBrdChlLHQscil7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT09UHQoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PVB0KG4pKXJldHVybiBuO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09PVB0KHQpP3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBDdChlKXt2YXIgdD1bXSxyPUVlKGUsdCksbj1tZShJdCxyLChmdW5jdGlvbihlKXt2YXIgdD1lLnByZXZTdGF0ZSxuPWUuc3RhdGU7ci5vblN0YXRlQ2hhbmdlKEF0KHtwcmV2U3RhdGU6dCxzdGF0ZTpuLHJlZnJlc2g6YSxuYXZpZ2F0b3I6ci5uYXZpZ2F0b3J9LG8pKX0pKSxvPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcmU7cmV0dXJue3NldEFjdGl2ZUl0ZW1JZDpmdW5jdGlvbihlKXt0LmRpc3BhdGNoKFwic2V0QWN0aXZlSXRlbUlkXCIsZSl9LHNldFF1ZXJ5OmZ1bmN0aW9uKGUpe3QuZGlzcGF0Y2goXCJzZXRRdWVyeVwiLGUpfSxzZXRDb2xsZWN0aW9uczpmdW5jdGlvbihlKXt2YXIgcj0wLG49ZS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiB2ZSh2ZSh7fSxlKSx7fSx7aXRlbXM6UyhlLml0ZW1zKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiB2ZSh2ZSh7fSxlKSx7fSx7X19hdXRvY29tcGxldGVfaWQ6cisrfSl9KSl9KX0pKTt0LmRpc3BhdGNoKFwic2V0Q29sbGVjdGlvbnNcIixuKX0sc2V0SXNPcGVuOmZ1bmN0aW9uKGUpe3QuZGlzcGF0Y2goXCJzZXRJc09wZW5cIixlKX0sc2V0U3RhdHVzOmZ1bmN0aW9uKGUpe3QuZGlzcGF0Y2goXCJzZXRTdGF0dXNcIixlKX0sc2V0Q29udGV4dDpmdW5jdGlvbihlKXt0LmRpc3BhdGNoKFwic2V0Q29udGV4dFwiLGUpfX19KHtzdG9yZTpufSksaT1kdChBdCh7cHJvcHM6cixyZWZyZXNoOmEsc3RvcmU6bixuYXZpZ2F0b3I6ci5uYXZpZ2F0b3J9LG8pKTtmdW5jdGlvbiBhKCl7cmV0dXJuIFdlKEF0KHtldmVudDpuZXcgRXZlbnQoXCJpbnB1dFwiKSxuZXh0U3RhdGU6e2lzT3BlbjpuLmdldFN0YXRlKCkuaXNPcGVufSxwcm9wczpyLG5hdmlnYXRvcjpyLm5hdmlnYXRvcixxdWVyeTpuLmdldFN0YXRlKCkucXVlcnkscmVmcmVzaDphLHN0b3JlOm59LG8pKX1pZihlLmluc2lnaHRzJiYhci5wbHVnaW5zLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwiYWEuYWxnb2xpYUluc2lnaHRzUGx1Z2luXCI9PT1lLm5hbWV9KSkpe3ZhciBjPVwiYm9vbGVhblwiPT10eXBlb2YgZS5pbnNpZ2h0cz97fTplLmluc2lnaHRzO3IucGx1Z2lucy5wdXNoKFgoYykpfXJldHVybiByLnBsdWdpbnMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIG47cmV0dXJuIG51bGw9PT0obj1lLnN1YnNjcmliZSl8fHZvaWQgMD09PW4/dm9pZCAwOm4uY2FsbChlLEF0KEF0KHt9LG8pLHt9LHtuYXZpZ2F0b3I6ci5uYXZpZ2F0b3IscmVmcmVzaDphLG9uU2VsZWN0OmZ1bmN0aW9uKGUpe3QucHVzaCh7b25TZWxlY3Q6ZX0pfSxvbkFjdGl2ZTpmdW5jdGlvbihlKXt0LnB1c2goe29uQWN0aXZlOmV9KX0sb25SZXNvbHZlOmZ1bmN0aW9uKGUpe3QucHVzaCh7b25SZXNvbHZlOmV9KX19KSl9KSksZnVuY3Rpb24oZSl7dmFyIHQscixuPWUubWV0YWRhdGEsbz1lLmVudmlyb25tZW50O2lmKG51bGw9PT0odD1vLm5hdmlnYXRvcil8fHZvaWQgMD09PXR8fG51bGw9PT0ocj10LnVzZXJBZ2VudCl8fHZvaWQgMD09PXI/dm9pZCAwOnIuaW5jbHVkZXMoXCJBbGdvbGlhIENyYXdsZXJcIikpe3ZhciBpPW8uZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiksYT1vLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO2kubmFtZT1cImFsZ29saWE6bWV0YWRhdGFcIixzZXRUaW1lb3V0KChmdW5jdGlvbigpe2kuY29udGVudD1KU09OLnN0cmluZ2lmeShuKSxhLmFwcGVuZENoaWxkKGkpfSksMCl9fSh7bWV0YWRhdGE6Z3Qoe3BsdWdpbnM6ci5wbHVnaW5zLG9wdGlvbnM6ZX0pLGVudmlyb25tZW50OnIuZW52aXJvbm1lbnR9KSxBdChBdCh7cmVmcmVzaDphLG5hdmlnYXRvcjpyLm5hdmlnYXRvcn0saSksbyl9ZnVuY3Rpb24gTnQodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj0odm9pZCAwPT09cj97fTpyKS5zZWFyY2hCeVRleHQsbz12b2lkIDA9PT1uP1wiU2VhcmNoIGJ5XCI6bjtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOlwiaHR0cHM6Ly93d3cuYWxnb2xpYS5jb20vcmVmL2RvY3NlYXJjaC8/dXRtX3NvdXJjZT1cIi5jb25jYXQod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLFwiJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9cG93ZXJlZF9ieSZ1dG1fY2FtcGFpZ249ZG9jc2VhcmNoXCIpLHRhcmdldDpcIl9ibGFua1wiLHJlbDpcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIn0sZS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtTGFiZWxcIn0sbyksZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiNzdcIixoZWlnaHQ6XCIxOVwiLFwiYXJpYS1sYWJlbFwiOlwiQWxnb2xpYVwiLHJvbGU6XCJpbWdcIixpZDpcIkxheWVyXzFcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsdmlld0JveDpcIjAgMCAyMTk2LjIgNTAwXCJ9LGUuY3JlYXRlRWxlbWVudChcImRlZnNcIixudWxsLGUuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsbnVsbCxcIi5jbHMtMSwuY2xzLTJ7ZmlsbDojMDAzZGZmO30uY2xzLTJ7ZmlsbC1ydWxlOmV2ZW5vZGQ7fVwiKSksZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtjbGFzc05hbWU6XCJjbHMtMlwiLGQ6XCJNMTA3MC4zOCwyNzUuM1Y1LjkxYzAtMy42My0zLjI0LTYuMzktNi44Mi01LjgzbC01MC40Niw3Ljk0Yy0yLjg3LC40NS00Ljk5LDIuOTMtNC45OSw1Ljg0bC4xNywyNzMuMjJjMCwxMi45MiwwLDkyLjcsOTUuOTcsOTUuNDksMy4zMywuMSw2LjA5LTIuNTgsNi4wOS01Ljkxdi00MC43OGMwLTIuOTYtMi4xOS01LjUxLTUuMTItNS44NC0zNC44NS00LjAxLTM0Ljg1LTQ3LjU3LTM0Ljg1LTU0LjcyWlwifSksZS5jcmVhdGVFbGVtZW50KFwicmVjdFwiLHtjbGFzc05hbWU6XCJjbHMtMVwiLHg6XCIxODQ1Ljg4XCIseTpcIjEwNC43M1wiLHdpZHRoOlwiNjIuNThcIixoZWlnaHQ6XCIyNzcuOVwiLHJ4OlwiNS45XCIscnk6XCI1LjlcIn0pLGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7Y2xhc3NOYW1lOlwiY2xzLTJcIixkOlwiTTE4NTEuNzgsNzEuMzhoNTAuNzdjMy4yNiwwLDUuOS0yLjY0LDUuOS01LjlWNS45YzAtMy42Mi0zLjI0LTYuMzktNi44Mi01LjgzbC01MC43Nyw3Ljk1Yy0yLjg3LC40NS00Ljk5LDIuOTItNC45OSw1LjgzdjUxLjYyYzAsMy4yNiwyLjY0LDUuOSw1LjksNS45WlwifSksZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtjbGFzc05hbWU6XCJjbHMtMlwiLGQ6XCJNMTc2NC4wMywyNzUuM1Y1LjkxYzAtMy42My0zLjI0LTYuMzktNi44Mi01LjgzbC01MC40Niw3Ljk0Yy0yLjg3LC40NS00Ljk5LDIuOTMtNC45OSw1Ljg0bC4xNywyNzMuMjJjMCwxMi45MiwwLDkyLjcsOTUuOTcsOTUuNDksMy4zMywuMSw2LjA5LTIuNTgsNi4wOS01Ljkxdi00MC43OGMwLTIuOTYtMi4xOS01LjUxLTUuMTItNS44NC0zNC44NS00LjAxLTM0Ljg1LTQ3LjU3LTM0Ljg1LTU0LjcyWlwifSksZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtjbGFzc05hbWU6XCJjbHMtMlwiLGQ6XCJNMTYzMS45NSwxNDIuNzJjLTExLjE0LTEyLjI1LTI0LjgzLTIxLjY1LTQwLjc4LTI4LjMxLTE1LjkyLTYuNTMtMzMuMjYtOS44NS01Mi4wNy05Ljg1LTE4Ljc4LDAtMzYuMTUsMy4xNy01MS45Miw5Ljg1LTE1LjU5LDYuNjYtMjkuMjksMTYuMDUtNDAuNzYsMjguMzEtMTEuNDcsMTIuMjMtMjAuMzgsMjYuODctMjYuNzYsNDQuMDMtNi4zOCwxNy4xNy05LjI0LDM3LjM3LTkuMjQsNTguMzYsMCwyMC45OSwzLjE5LDM2Ljg3LDkuNTUsNTQuMjEsNi4zOCwxNy4zMiwxNS4xNCwzMi4xMSwyNi40NSw0NC4zNiwxMS4yOSwxMi4yMywyNC44MywyMS42Miw0MC42LDI4LjQ2LDE1Ljc3LDYuODMsNDAuMTIsMTAuMzMsNTIuNCwxMC40OCwxMi4yNSwwLDM2Ljc4LTMuODIsNTIuNy0xMC40OCwxNS45Mi02LjY4LDI5LjQ2LTE2LjIzLDQwLjc4LTI4LjQ2LDExLjI5LTEyLjI1LDIwLjA1LTI3LjA0LDI2LjI1LTQ0LjM2LDYuMjItMTcuMzQsOS4yNC0zMy4yMiw5LjI0LTU0LjIxLDAtMjAuOTktMy4zNC00MS4xOS0xMC4wMy01OC4zNi02LjM4LTE3LjE3LTE1LjE0LTMxLjgtMjYuNDMtNDQuMDNabS00NC40MywxNjMuNzVjLTExLjQ3LDE1Ljc1LTI3LjU2LDIzLjctNDguMDksMjMuNy0yMC41NSwwLTM2LjYzLTcuOC00OC4xLTIzLjctMTEuNDctMTUuNzUtMTcuMjEtMzQuMDEtMTcuMjEtNjEuMiwwLTI2Ljg5LDUuNTktNDkuMTQsMTcuMDYtNjQuODcsMTEuNDUtMTUuNzUsMjcuNTQtMjMuNTIsNDguMDctMjMuNTIsMjAuNTUsMCwzNi42Myw3Ljc4LDQ4LjA5LDIzLjUyLDExLjQ3LDE1LjU3LDE3LjM2LDM3Ljk4LDE3LjM2LDY0Ljg3LDAsMjcuMTktNS43Miw0NS4zLTE3LjE5LDYxLjJaXCJ9KSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2NsYXNzTmFtZTpcImNscy0yXCIsZDpcIk04OTQuNDIsMTA0LjczaC00OS4zM2MtNDguMzYsMC05MC45MSwyNS40OC0xMTUuNzUsNjQuMS0xNC41MiwyMi41OC0yMi45OSw0OS42My0yMi45OSw3OC43MywwLDQ0Ljg5LDIwLjEzLDg0LjkyLDUxLjU5LDExMS4xLDIuOTMsMi42LDYuMDUsNC45OCw5LjMxLDcuMTQsMTIuODYsOC40OSwyOC4xMSwxMy40Nyw0NC41MiwxMy40NywxLjIzLDAsMi40Ni0uMDMsMy42OC0uMDksLjM2LS4wMiwuNzEtLjA1LDEuMDctLjA3LC44Ny0uMDUsMS43NS0uMTEsMi42Mi0uMiwuMzQtLjAzLC42OC0uMDgsMS4wMi0uMTIsLjkxLS4xLDEuODItLjIxLDIuNzMtLjM0LC4yMS0uMDMsLjQyLS4wNywuNjMtLjEsMzIuODktNS4wNyw2MS41Ni0zMC44Miw3MC45LTYyLjgxdjU3LjgzYzAsMy4yNiwyLjY0LDUuOSw1LjksNS45aDUwLjQyYzMuMjYsMCw1LjktMi42NCw1LjktNS45VjExMC42M2MwLTMuMjYtMi42NC01LjktNS45LTUuOWgtNTYuMzJabTAsMjA2LjkyYy0xMi4yLDEwLjE2LTI3Ljk3LDEzLjk4LTQ0Ljg0LDE1LjEyLS4xNiwuMDEtLjMzLC4wMy0uNDksLjA0LTEuMTIsLjA3LTIuMjQsLjEtMy4zNiwuMS00Mi4yNCwwLTc3LjEyLTM1Ljg5LTc3LjEyLTc5LjM3LDAtMTAuMjUsMS45Ni0yMC4wMSw1LjQyLTI4Ljk4LDExLjIyLTI5LjEyLDM4Ljc3LTQ5Ljc0LDcxLjA2LTQ5Ljc0aDQ5LjMzdjE0Mi44M1pcIn0pLGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7Y2xhc3NOYW1lOlwiY2xzLTJcIixkOlwiTTIxMzMuOTcsMTA0LjczaC00OS4zM2MtNDguMzYsMC05MC45MSwyNS40OC0xMTUuNzUsNjQuMS0xNC41MiwyMi41OC0yMi45OSw0OS42My0yMi45OSw3OC43MywwLDQ0Ljg5LDIwLjEzLDg0LjkyLDUxLjU5LDExMS4xLDIuOTMsMi42LDYuMDUsNC45OCw5LjMxLDcuMTQsMTIuODYsOC40OSwyOC4xMSwxMy40Nyw0NC41MiwxMy40NywxLjIzLDAsMi40Ni0uMDMsMy42OC0uMDksLjM2LS4wMiwuNzEtLjA1LDEuMDctLjA3LC44Ny0uMDUsMS43NS0uMTEsMi42Mi0uMiwuMzQtLjAzLC42OC0uMDgsMS4wMi0uMTIsLjkxLS4xLDEuODItLjIxLDIuNzMtLjM0LC4yMS0uMDMsLjQyLS4wNywuNjMtLjEsMzIuODktNS4wNyw2MS41Ni0zMC44Miw3MC45LTYyLjgxdjU3LjgzYzAsMy4yNiwyLjY0LDUuOSw1LjksNS45aDUwLjQyYzMuMjYsMCw1LjktMi42NCw1LjktNS45VjExMC42M2MwLTMuMjYtMi42NC01LjktNS45LTUuOWgtNTYuMzJabTAsMjA2LjkyYy0xMi4yLDEwLjE2LTI3Ljk3LDEzLjk4LTQ0Ljg0LDE1LjEyLS4xNiwuMDEtLjMzLC4wMy0uNDksLjA0LTEuMTIsLjA3LTIuMjQsLjEtMy4zNiwuMS00Mi4yNCwwLTc3LjEyLTM1Ljg5LTc3LjEyLTc5LjM3LDAtMTAuMjUsMS45Ni0yMC4wMSw1LjQyLTI4Ljk4LDExLjIyLTI5LjEyLDM4Ljc3LTQ5Ljc0LDcxLjA2LTQ5Ljc0aDQ5LjMzdjE0Mi44M1pcIn0pLGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7Y2xhc3NOYW1lOlwiY2xzLTJcIixkOlwiTTEzMTQuMDUsMTA0LjczaC00OS4zM2MtNDguMzYsMC05MC45MSwyNS40OC0xMTUuNzUsNjQuMS0xMS43OSwxOC4zNC0xOS42LDM5LjY0LTIyLjExLDYyLjU5LS41OCw1LjMtLjg4LDEwLjY4LS44OCwxNi4xNHMuMzEsMTEuMTUsLjkzLDE2LjU5YzQuMjgsMzguMDksMjMuMTQsNzEuNjEsNTAuNjYsOTQuNTIsMi45MywyLjYsNi4wNSw0Ljk4LDkuMzEsNy4xNCwxMi44Niw4LjQ5LDI4LjExLDEzLjQ3LDQ0LjUyLDEzLjQ3aDBjMTcuOTksMCwzNC42MS01LjkzLDQ4LjE2LTE1Ljk3LDE2LjI5LTExLjU4LDI4Ljg4LTI4LjU0LDM0LjQ4LTQ3Ljc1djUwLjI2aC0uMTF2MTEuMDhjMCwyMS44NC01LjcxLDM4LjI3LTE3LjM0LDQ5LjM2LTExLjYxLDExLjA4LTMxLjA0LDE2LjYzLTU4LjI1LDE2LjYzLTExLjEyLDAtMjguNzktLjU5LTQ2LjYtMi40MS0yLjgzLS4yOS01LjQ2LDEuNS02LjI3LDQuMjJsLTEyLjc4LDQzLjExYy0xLjAyLDMuNDYsMS4yNyw3LjAyLDQuODMsNy41MywyMS41MiwzLjA4LDQyLjUyLDQuNjgsNTQuNjUsNC42OCw0OC45MSwwLDg1LjE2LTEwLjc1LDEwOC44OS0zMi4yMSwyMS40OC0xOS40MSwzMy4xNS00OC44OSwzNS4yLTg4LjUyVjExMC42M2MwLTMuMjYtMi42NC01LjktNS45LTUuOWgtNTYuMzJabTAsNjQuMXMuNjUsMTM5LjEzLDAsMTQzLjM2Yy0xMi4wOCw5Ljc3LTI3LjExLDEzLjU5LTQzLjQ5LDE0LjctLjE2LC4wMS0uMzMsLjAzLS40OSwuMDQtMS4xMiwuMDctMi4yNCwuMS0zLjM2LC4xLTEuMzIsMC0yLjYzLS4wMy0zLjk0LS4xLTQwLjQxLTIuMTEtNzQuNTItMzcuMjYtNzQuNTItNzkuMzgsMC0xMC4yNSwxLjk2LTIwLjAxLDUuNDItMjguOTgsMTEuMjItMjkuMTIsMzguNzctNDkuNzQsNzEuMDYtNDkuNzRoNDkuMzNaXCJ9KSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2NsYXNzTmFtZTpcImNscy0xXCIsZDpcIk0yNDkuODMsMEMxMTMuMywwLDIsMTEwLjA5LC4wMywyNDYuMTZjLTIsMTM4LjE5LDExMC4xMiwyNTIuNywyNDguMzMsMjUzLjUsNDIuNjgsLjI1LDgzLjc5LTEwLjE5LDEyMC4zLTMwLjAzLDMuNTYtMS45Myw0LjExLTYuODMsMS4wOC05LjUxbC0yMy4zOC0yMC43MmMtNC43NS00LjIxLTExLjUxLTUuNC0xNy4zNi0yLjkyLTI1LjQ4LDEwLjg0LTUzLjE3LDE2LjM4LTgxLjcxLDE2LjAzLTExMS42OC0xLjM3LTIwMS45MS05NC4yOS0yMDAuMTMtMjA1Ljk2LDEuNzYtMTEwLjI2LDkyLTE5OS40MSwyMDIuNjctMTk5LjQxaDIwMi42OVY0MDcuNDFsLTExNS0xMDIuMThjLTMuNzItMy4zMS05LjQyLTIuNjYtMTIuNDIsMS4zMS0xOC40NiwyNC40NC00OC41MywzOS42NC04MS45MywzNy4zNC00Ni4zMy0zLjItODMuODctNDAuNS04Ny4zNC04Ni44MS00LjE1LTU1LjI0LDM5LjYzLTEwMS41Miw5NC0xMDEuNTIsNDkuMTgsMCw4OS42OCwzNy44NSw5My45MSw4NS45NSwuMzgsNC4yOCwyLjMxLDguMjcsNS41MiwxMS4xMmwyOS45NSwyNi41NWMzLjQsMy4wMSw4Ljc5LDEuMTcsOS42My0zLjMsMi4xNi0xMS41NSwyLjkyLTIzLjU4LDIuMDctMzUuOTItNC44Mi03MC4zNC02MS44LTEyNi45My0xMzIuMTctMTMxLjI2LTgwLjY4LTQuOTctMTQ4LjEzLDU4LjE0LTE1MC4yNywxMzcuMjUtMi4wOSw3Ny4xLDYxLjA4LDE0My41NiwxMzguMTksMTQ1LjI2LDMyLjE5LC43MSw2Mi4wMy05LjQxLDg2LjE0LTI2Ljk1bDE1MC4yNiwxMzMuMmM2LjQ0LDUuNzEsMTYuNjEsMS4xNCwxNi42MS03LjQ3VjkuNDhDNDk5LjY2LDQuMjUsNDk1LjQyLDAsNDkwLjE4LDBIMjQ5LjgzWlwifSkpKX1mdW5jdGlvbiBfdCh0KXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiMTVcIixoZWlnaHQ6XCIxNVwiLFwiYXJpYS1sYWJlbFwiOnQuYXJpYUxhYmVsLHJvbGU6XCJpbWdcIn0sZS5jcmVhdGVFbGVtZW50KFwiZ1wiLHtmaWxsOlwibm9uZVwiLHN0cm9rZTpcImN1cnJlbnRDb2xvclwiLHN0cm9rZUxpbmVjYXA6XCJyb3VuZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIixzdHJva2VXaWR0aDpcIjEuMlwifSx0LmNoaWxkcmVuKSl9ZnVuY3Rpb24geHQodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj12b2lkIDA9PT1yP3t9OnIsbz1uLnNlbGVjdFRleHQsaT12b2lkIDA9PT1vP1widG8gc2VsZWN0XCI6byxhPW4uc2VsZWN0S2V5QXJpYUxhYmVsLGM9dm9pZCAwPT09YT9cIkVudGVyIGtleVwiOmEsbD1uLm5hdmlnYXRlVGV4dCx1PXZvaWQgMD09PWw/XCJ0byBuYXZpZ2F0ZVwiOmwscz1uLm5hdmlnYXRlVXBLZXlBcmlhTGFiZWwsZj12b2lkIDA9PT1zP1wiQXJyb3cgdXBcIjpzLG09bi5uYXZpZ2F0ZURvd25LZXlBcmlhTGFiZWwscD12b2lkIDA9PT1tP1wiQXJyb3cgZG93blwiOm0sZD1uLmNsb3NlVGV4dCx2PXZvaWQgMD09PWQ/XCJ0byBjbG9zZVwiOmQsaD1uLmNsb3NlS2V5QXJpYUxhYmVsLHk9dm9pZCAwPT09aD9cIkVzY2FwZSBrZXlcIjpoLGI9bi5zZWFyY2hCeVRleHQsZz12b2lkIDA9PT1iP1wiU2VhcmNoIGJ5XCI6YjtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KGUuRnJhZ21lbnQsbnVsbCxlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUxvZ29cIn0sZS5jcmVhdGVFbGVtZW50KE50LHt0cmFuc2xhdGlvbnM6e3NlYXJjaEJ5VGV4dDpnfX0pKSxlLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtQ29tbWFuZHNcIn0sZS5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGUuY3JlYXRlRWxlbWVudChcImtiZFwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtQ29tbWFuZHMtS2V5XCJ9LGUuY3JlYXRlRWxlbWVudChfdCx7YXJpYUxhYmVsOmN9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMiAzLjUzMDg4djNjMCAxLTEgMi0yIDJINE03IDExLjUzMDg4bC0zLTMgMy0zXCJ9KSkpLGUuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUxhYmVsXCJ9LGkpKSxlLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsZS5jcmVhdGVFbGVtZW50KFwia2JkXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1Db21tYW5kcy1LZXlcIn0sZS5jcmVhdGVFbGVtZW50KF90LHthcmlhTGFiZWw6cH0sZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTcuNSAzLjV2OE0xMC41IDguNWwtMyAzLTMtM1wifSkpKSxlLmNyZWF0ZUVsZW1lbnQoXCJrYmRcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUNvbW1hbmRzLUtleVwifSxlLmNyZWF0ZUVsZW1lbnQoX3Qse2FyaWFMYWJlbDpmfSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNNy41IDExLjV2LThNMTAuNSA2LjVsLTMtMy0zIDNcIn0pKSksZS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtTGFiZWxcIn0sdSkpLGUuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxlLmNyZWF0ZUVsZW1lbnQoXCJrYmRcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUNvbW1hbmRzLUtleVwifSxlLmNyZWF0ZUVsZW1lbnQoX3Qse2FyaWFMYWJlbDp5fSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTMuNjE2NyA4LjkzNmMtLjEwNjUuMzU4My0uNjg4My45NjItMS40ODc1Ljk2Mi0uNzk5MyAwLTEuNjUzLS45MTY1LTEuNjUzLTIuMTI1OHYtLjU2NzhjMC0xLjI1NDguNzg5Ni0yLjEwMTYgMS42NTMtMi4xMDE2Ljg2MzQgMCAxLjM2MDEuNDc3OCAxLjQ4NzUgMS4wNzI0TTkgNmMtLjEzNTItLjQ3MzUtLjc1MDYtLjkyMTktMS40Ni0uODk3Mi0uNzA5Mi4wMjQ2LTEuMzQ0LjU3LTEuMzQ0IDEuMjE2NnMuNDE5OC44ODEyIDEuMzQ0NS45ODA1QzguNDY1IDcuMzk5MiA4Ljk2OCA3LjkzMzcgOSA4LjVjLjAzMi41NjYzLS40NTQgMS4zOTgtMS40NTk1IDEuMzk4QzYuNjU5MyA5Ljg5OCA2IDkgNS45NjMgOC40ODUxbS0xLjQ3NDguNTM2OGMtLjI2MzUuNTk0MS0uODA5OS44NzYtMS41NDQzLjg3NnMtMS43MDczLS42MjQ4LTEuNzA3My0yLjIwNHYtLjQ2MDNjMC0xLjA0MTYuNzIxLTIuMTMxIDEuNzA3My0yLjEzMS45ODY0IDAgMS42NDI1IDEuMDMxIDEuNTQ0MyAyLjI0OTJoLTIuOTU2XCJ9KSkpLGUuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUxhYmVsXCJ9LHYpKSkpfWZ1bmN0aW9uIFR0KHQpe3ZhciByPXQuaGl0LG49dC5jaGlsZHJlbjtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOnIudXJsfSxuKX1mdW5jdGlvbiBSdCgpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7dmlld0JveDpcIjAgMCAzOCAzOFwiLHN0cm9rZTpcImN1cnJlbnRDb2xvclwiLHN0cm9rZU9wYWNpdHk6XCIuNVwifSxlLmNyZWF0ZUVsZW1lbnQoXCJnXCIse2ZpbGw6XCJub25lXCIsZmlsbFJ1bGU6XCJldmVub2RkXCJ9LGUuY3JlYXRlRWxlbWVudChcImdcIix7dHJhbnNmb3JtOlwidHJhbnNsYXRlKDEgMSlcIixzdHJva2VXaWR0aDpcIjJcIn0sZS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIse3N0cm9rZU9wYWNpdHk6XCIuM1wiLGN4OlwiMThcIixjeTpcIjE4XCIscjpcIjE4XCJ9KSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIn0sZS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVRyYW5zZm9ybVwiLHthdHRyaWJ1dGVOYW1lOlwidHJhbnNmb3JtXCIsdHlwZTpcInJvdGF0ZVwiLGZyb206XCIwIDE4IDE4XCIsdG86XCIzNjAgMTggMThcIixkdXI6XCIxc1wiLHJlcGVhdENvdW50OlwiaW5kZWZpbml0ZVwifSkpKSkpfWZ1bmN0aW9uIHF0KCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcImdcIix7c3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lY2FwOlwicm91bmRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0zLjE4IDYuNmE4LjIzIDguMjMgMCAxMTEyLjkzIDkuOTRoMGE4LjIzIDguMjMgMCAwMS0xMS42MyAwXCJ9KSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNNi40NCA3LjI1SDIuNTVWMy4zNk0xMC40NSA2djUuNk0xMC40NSAxMS42TDEzIDEzXCJ9KSkpfWZ1bmN0aW9uIEx0KCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMCAxMGw1LjA5LTUuMDlMMTAgMTBsNS4wOSA1LjA5TDEwIDEwem0wIDBMNC45MSA0LjkxIDEwIDEwbC01LjA5IDUuMDlMMTAgMTB6XCIsc3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lY2FwOlwicm91bmRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9KSl9ZnVuY3Rpb24gTXQoKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtU2VsZWN0LUljb25cIix3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcImdcIix7c3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lY2FwOlwicm91bmRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xOCAzdjRjMCAyLTIgNC00IDRIMlwifSksZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTggMTdsLTYtNiA2LTZcIn0pKSl9dmFyIEh0PWZ1bmN0aW9uKCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xNyA2djEyYzAgLjUyLS4yIDEtMSAxSDRjLS43IDAtMS0uMzMtMS0xVjJjMC0uNTUuNDItMSAxLTFoOGw1IDV6TTE0IDhoLTMuMTNjLS41MSAwLS44Ny0uMzQtLjg3LS44N1Y0XCIsc3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9KSl9O2Z1bmN0aW9uIEZ0KHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcImx2bDFcIjpyZXR1cm4gZS5jcmVhdGVFbGVtZW50KEh0LG51bGwpO2Nhc2VcImNvbnRlbnRcIjpyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFV0LG51bGwpO2RlZmF1bHQ6cmV0dXJuIGUuY3JlYXRlRWxlbWVudChCdCxudWxsKX19ZnVuY3Rpb24gQnQoKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiMjBcIixoZWlnaHQ6XCIyMFwiLHZpZXdCb3g6XCIwIDAgMjAgMjBcIn0sZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTEzIDEzaDQtNFY4SDd2NWg2djQtNEg3VjhIM2g0VjN2NWg2VjN2NWg0LTR2NXptLTYgMHY0LTRIM2g0elwiLHN0cm9rZTpcImN1cnJlbnRDb2xvclwiLGZpbGw6XCJub25lXCIsZmlsbFJ1bGU6XCJldmVub2RkXCIsc3Ryb2tlTGluZWNhcDpcInJvdW5kXCIsc3Ryb2tlTGluZWpvaW46XCJyb3VuZFwifSkpfWZ1bmN0aW9uIFV0KCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xNyA1SDNoMTR6bTAgNUgzaDE0em0wIDVIM2gxNHpcIixzdHJva2U6XCJjdXJyZW50Q29sb3JcIixmaWxsOlwibm9uZVwiLGZpbGxSdWxlOlwiZXZlbm9kZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIn0pKX1mdW5jdGlvbiBWdCgpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7d2lkdGg6XCIyMFwiLGhlaWdodDpcIjIwXCIsdmlld0JveDpcIjAgMCAyMCAyMFwifSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTAgMTQuMkw1IDE3bDEtNS42LTQtNCA1LjUtLjcgMi41LTUgMi41IDUgNS42LjgtNCA0IC45IDUuNXpcIixzdHJva2U6XCJjdXJyZW50Q29sb3JcIixmaWxsOlwibm9uZVwiLGZpbGxSdWxlOlwiZXZlbm9kZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIn0pKX1mdW5jdGlvbiBLdCgpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7d2lkdGg6XCI0MFwiLGhlaWdodDpcIjQwXCIsdmlld0JveDpcIjAgMCAyMCAyMFwiLGZpbGw6XCJub25lXCIsZmlsbFJ1bGU6XCJldmVub2RkXCIsc3Ryb2tlOlwiY3VycmVudENvbG9yXCIsc3Ryb2tlTGluZWNhcDpcInJvdW5kXCIsc3Ryb2tlTGluZWpvaW46XCJyb3VuZFwifSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTkgNC44YTE2IDE2IDAgMDAtMi0xLjJtLTMuMy0xLjJBMTYgMTYgMCAwMDEuMSA0LjdNMTYuNyA4YTEyIDEyIDAgMDAtMi44LTEuNE0xMCA2YTEyIDEyIDAgMDAtNi43IDJNMTIuMyAxNC43YTQgNCAwIDAwLTQuNSAwTTE0LjUgMTEuNEE4IDggMCAwMDEwIDEwTTMgMTZMMTggMk0xMCAxOGgwXCJ9KSl9ZnVuY3Rpb24gSnQoKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiNDBcIixoZWlnaHQ6XCI0MFwiLHZpZXdCb3g6XCIwIDAgMjAgMjBcIixmaWxsOlwibm9uZVwiLGZpbGxSdWxlOlwiZXZlbm9kZFwiLHN0cm9rZTpcImN1cnJlbnRDb2xvclwiLHN0cm9rZUxpbmVjYXA6XCJyb3VuZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIn0sZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTE1LjUgNC44YzIgMyAxLjcgNy0xIDkuN2gwbDQuMyA0LjMtNC4zLTQuM2E3LjggNy44IDAgMDEtOS44IDFtLTIuMi0yLjJBNy44IDcuOCAwIDAxMTMuMiAyLjRNMiAxOEwxOCAyXCJ9KSl9ZnVuY3Rpb24gJHQodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj12b2lkIDA9PT1yP3t9OnIsbz1uLnRpdGxlVGV4dCxpPXZvaWQgMD09PW8/XCJVbmFibGUgdG8gZmV0Y2ggcmVzdWx0c1wiOm8sYT1uLmhlbHBUZXh0LGM9dm9pZCAwPT09YT9cIllvdSBtaWdodCB3YW50IHRvIGNoZWNrIHlvdXIgbmV0d29yayBjb25uZWN0aW9uLlwiOmE7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtRXJyb3JTY3JlZW5cIn0sZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1TY3JlZW4tSWNvblwifSxlLmNyZWF0ZUVsZW1lbnQoS3QsbnVsbCkpLGUuY3JlYXRlRWxlbWVudChcInBcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLVRpdGxlXCJ9LGkpLGUuY3JlYXRlRWxlbWVudChcInBcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhlbHBcIn0sYykpfXZhciB6dD1bXCJ0cmFuc2xhdGlvbnNcIl07ZnVuY3Rpb24gUXQodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj12b2lkIDA9PT1yP3t9OnIsbz11KHQsenQpLGk9bi5ub1Jlc3VsdHNUZXh0LGE9dm9pZCAwPT09aT9cIk5vIHJlc3VsdHMgZm9yXCI6aSxjPW4uc3VnZ2VzdGVkUXVlcnlUZXh0LGw9dm9pZCAwPT09Yz9cIlRyeSBzZWFyY2hpbmcgZm9yXCI6YyxzPW4ucmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0LG09dm9pZCAwPT09cz9cIkJlbGlldmUgdGhpcyBxdWVyeSBzaG91bGQgcmV0dXJuIHJlc3VsdHM/XCI6cyxwPW4ucmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dCxkPXZvaWQgMD09PXA/XCJMZXQgdXMga25vdy5cIjpwLHY9by5zdGF0ZS5jb250ZXh0LnNlYXJjaFN1Z2dlc3Rpb25zO3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLU5vUmVzdWx0c1wifSxlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLVNjcmVlbi1JY29uXCJ9LGUuY3JlYXRlRWxlbWVudChKdCxudWxsKSksZS5jcmVhdGVFbGVtZW50KFwicFwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtVGl0bGVcIn0sYSwnIFwiJyxlLmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIixudWxsLG8uc3RhdGUucXVlcnkpLCdcIicpLHYmJnYubGVuZ3RoPjAmJmUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtTm9SZXN1bHRzLVByZWZpbGwtTGlzdFwifSxlLmNyZWF0ZUVsZW1lbnQoXCJwXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IZWxwXCJ9LGwsXCI6XCIpLGUuY3JlYXRlRWxlbWVudChcInVsXCIsbnVsbCx2LnNsaWNlKDAsMykucmVkdWNlKChmdW5jdGlvbih0LHIpe3JldHVybltdLmNvbmNhdChmKHQpLFtlLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtrZXk6cn0sZS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1QcmVmaWxsXCIsa2V5OnIsdHlwZTpcImJ1dHRvblwiLG9uQ2xpY2s6ZnVuY3Rpb24oKXtvLnNldFF1ZXJ5KHIudG9Mb3dlckNhc2UoKStcIiBcIiksby5yZWZyZXNoKCksby5pbnB1dFJlZi5jdXJyZW50LmZvY3VzKCl9fSxyKSldKX0pLFtdKSkpLG8uZ2V0TWlzc2luZ1Jlc3VsdHNVcmwmJmUuY3JlYXRlRWxlbWVudChcInBcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhlbHBcIn0sXCJcIi5jb25jYXQobSxcIiBcIiksZS5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOm8uZ2V0TWlzc2luZ1Jlc3VsdHNVcmwoe3F1ZXJ5Om8uc3RhdGUucXVlcnl9KSx0YXJnZXQ6XCJfYmxhbmtcIixyZWw6XCJub29wZW5lciBub3JlZmVycmVyXCJ9LGQpKSl9dmFyIFd0PVtcImhpdFwiLFwiYXR0cmlidXRlXCIsXCJ0YWdOYW1lXCJdO2Z1bmN0aW9uIFp0KGUsdCl7cmV0dXJuIHQuc3BsaXQoXCIuXCIpLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbCE9ZSYmZVt0XT9lW3RdOm51bGx9KSxlKX1mdW5jdGlvbiBZdChlKXt2YXIgdD1lLmhpdCxyPWUuYXR0cmlidXRlLG89ZS50YWdOYW1lLGk9dm9pZCAwPT09bz9cInNwYW5cIjpvLGM9dShlLFd0KTtyZXR1cm4gbihpLGEoYSh7fSxjKSx7fSx7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpadCh0LFwiX3NuaXBwZXRSZXN1bHQuXCIuY29uY2F0KHIsXCIudmFsdWVcIikpfHxadCh0LHIpfX0pKX1mdW5jdGlvbiBYdCh0KXtyZXR1cm4gdC5jb2xsZWN0aW9uJiYwIT09dC5jb2xsZWN0aW9uLml0ZW1zLmxlbmd0aD9lLmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXRzXCJ9LGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LXNvdXJjZVwifSx0LnRpdGxlKSxlLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHQuZ2V0TGlzdFByb3BzKCksdC5jb2xsZWN0aW9uLml0ZW1zLm1hcCgoZnVuY3Rpb24ocixuKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KEd0LGwoe2tleTpbdC50aXRsZSxyLm9iamVjdElEXS5qb2luKFwiOlwiKSxpdGVtOnIsaW5kZXg6bn0sdCkpfSkpKSk6bnVsbH1mdW5jdGlvbiBHdCh0KXt2YXIgcj10Lml0ZW0sbj10LmluZGV4LG89dC5yZW5kZXJJY29uLGk9dC5yZW5kZXJBY3Rpb24sYT10LmdldEl0ZW1Qcm9wcyxjPXQub25JdGVtQ2xpY2ssdT10LmNvbGxlY3Rpb24sZj10LmhpdENvbXBvbmVudCxtPXMoZS51c2VTdGF0ZSghMSksMikscD1tWzBdLGQ9bVsxXSx2PXMoZS51c2VTdGF0ZSghMSksMiksaD12WzBdLHk9dlsxXSxiPWUudXNlUmVmKG51bGwpLGc9ZjtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwibGlcIixsKHtjbGFzc05hbWU6W1wiRG9jU2VhcmNoLUhpdFwiLHIuX19kb2NzZWFyY2hfcGFyZW50JiZcIkRvY1NlYXJjaC1IaXQtLUNoaWxkXCIscCYmXCJEb2NTZWFyY2gtSGl0LS1kZWxldGluZ1wiLGgmJlwiRG9jU2VhcmNoLUhpdC0tZmF2b3JpdGluZ1wiXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksb25UcmFuc2l0aW9uRW5kOmZ1bmN0aW9uKCl7Yi5jdXJyZW50JiZiLmN1cnJlbnQoKX19LGEoe2l0ZW06cixzb3VyY2U6dS5zb3VyY2Usb25DbGljazpmdW5jdGlvbihlKXtjKHIsZSl9fSkpLGUuY3JlYXRlRWxlbWVudChnLHtoaXQ6cn0sZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtQ29udGFpbmVyXCJ9LG8oe2l0ZW06cixpbmRleDpufSksci5oaWVyYXJjaHlbci50eXBlXSYmXCJsdmwxXCI9PT1yLnR5cGUmJmUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LWNvbnRlbnQtd3JhcHBlclwifSxlLmNyZWF0ZUVsZW1lbnQoWXQse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtdGl0bGVcIixoaXQ6cixhdHRyaWJ1dGU6XCJoaWVyYXJjaHkubHZsMVwifSksci5jb250ZW50JiZlLmNyZWF0ZUVsZW1lbnQoWXQse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtcGF0aFwiLGhpdDpyLGF0dHJpYnV0ZTpcImNvbnRlbnRcIn0pKSxyLmhpZXJhcmNoeVtyLnR5cGVdJiYoXCJsdmwyXCI9PT1yLnR5cGV8fFwibHZsM1wiPT09ci50eXBlfHxcImx2bDRcIj09PXIudHlwZXx8XCJsdmw1XCI9PT1yLnR5cGV8fFwibHZsNlwiPT09ci50eXBlKSYmZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtY29udGVudC13cmFwcGVyXCJ9LGUuY3JlYXRlRWxlbWVudChZdCx7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC10aXRsZVwiLGhpdDpyLGF0dHJpYnV0ZTpcImhpZXJhcmNoeS5cIi5jb25jYXQoci50eXBlKX0pLGUuY3JlYXRlRWxlbWVudChZdCx7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1wYXRoXCIsaGl0OnIsYXR0cmlidXRlOlwiaGllcmFyY2h5Lmx2bDFcIn0pKSxcImNvbnRlbnRcIj09PXIudHlwZSYmZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtY29udGVudC13cmFwcGVyXCJ9LGUuY3JlYXRlRWxlbWVudChZdCx7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC10aXRsZVwiLGhpdDpyLGF0dHJpYnV0ZTpcImNvbnRlbnRcIn0pLGUuY3JlYXRlRWxlbWVudChZdCx7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1wYXRoXCIsaGl0OnIsYXR0cmlidXRlOlwiaGllcmFyY2h5Lmx2bDFcIn0pKSxpKHtpdGVtOnIscnVuRGVsZXRlVHJhbnNpdGlvbjpmdW5jdGlvbihlKXtkKCEwKSxiLmN1cnJlbnQ9ZX0scnVuRmF2b3JpdGVUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3koITApLGIuY3VycmVudD1lfX0pKSkpfWZ1bmN0aW9uIGVyKGUsdCxyKXtyZXR1cm4gZS5yZWR1Y2UoKGZ1bmN0aW9uKGUsbil7dmFyIG89dChuKTtyZXR1cm4gZS5oYXNPd25Qcm9wZXJ0eShvKXx8KGVbb109W10pLGVbb10ubGVuZ3RoPChyfHw1KSYmZVtvXS5wdXNoKG4pLGV9KSx7fSl9ZnVuY3Rpb24gdHIoZSl7cmV0dXJuIGV9ZnVuY3Rpb24gcnIoZSl7cmV0dXJuIDE9PT1lLmJ1dHRvbnx8ZS5hbHRLZXl8fGUuY3RybEtleXx8ZS5tZXRhS2V5fHxlLnNoaWZ0S2V5fWZ1bmN0aW9uIG5yKCl7fXZhciBvcj0vKDxtYXJrPnw8XFwvbWFyaz4pL2csaXI9UmVnRXhwKG9yLnNvdXJjZSk7ZnVuY3Rpb24gYXIoZSl7dmFyIHQscixuPWU7aWYoIW4uX19kb2NzZWFyY2hfcGFyZW50JiYhZS5faGlnaGxpZ2h0UmVzdWx0KXJldHVybiBlLmhpZXJhcmNoeS5sdmwwO3ZhciBvPSgobi5fX2RvY3NlYXJjaF9wYXJlbnQ/bnVsbD09PSh0PW4uX19kb2NzZWFyY2hfcGFyZW50KXx8dm9pZCAwPT09dHx8bnVsbD09PSh0PXQuX2hpZ2hsaWdodFJlc3VsdCl8fHZvaWQgMD09PXR8fG51bGw9PT0odD10LmhpZXJhcmNoeSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQubHZsMDpudWxsPT09KHI9ZS5faGlnaGxpZ2h0UmVzdWx0KXx8dm9pZCAwPT09cnx8bnVsbD09PShyPXIuaGllcmFyY2h5KXx8dm9pZCAwPT09cj92b2lkIDA6ci5sdmwwKXx8e30pLnZhbHVlO3JldHVybiBvJiZpci50ZXN0KG8pP28ucmVwbGFjZShvcixcIlwiKTpvfWZ1bmN0aW9uIGNyKHQpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLURyb3Bkb3duLUNvbnRhaW5lclwifSx0LnN0YXRlLmNvbGxlY3Rpb25zLm1hcCgoZnVuY3Rpb24ocil7aWYoMD09PXIuaXRlbXMubGVuZ3RoKXJldHVybiBudWxsO3ZhciBuPWFyKHIuaXRlbXNbMF0pO3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoWHQsbCh7fSx0LHtrZXk6ci5zb3VyY2Uuc291cmNlSWQsdGl0bGU6bixjb2xsZWN0aW9uOnIscmVuZGVySWNvbjpmdW5jdGlvbih0KXt2YXIgbixvPXQuaXRlbSxpPXQuaW5kZXg7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChlLkZyYWdtZW50LG51bGwsby5fX2RvY3NlYXJjaF9wYXJlbnQmJmUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LVRyZWVcIix2aWV3Qm94OlwiMCAwIDI0IDU0XCJ9LGUuY3JlYXRlRWxlbWVudChcImdcIix7c3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lY2FwOlwicm91bmRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9LG8uX19kb2NzZWFyY2hfcGFyZW50IT09KG51bGw9PT0obj1yLml0ZW1zW2krMV0pfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLl9fZG9jc2VhcmNoX3BhcmVudCk/ZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTggNnYyMU0yMCAyN0g4LjNcIn0pOmUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk04IDZ2NDJNMjAgMjdIOC4zXCJ9KSkpLGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LWljb25cIn0sZS5jcmVhdGVFbGVtZW50KEZ0LHt0eXBlOm8udHlwZX0pKSl9LHJlbmRlckFjdGlvbjpmdW5jdGlvbigpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1hY3Rpb25cIn0sZS5jcmVhdGVFbGVtZW50KE10LG51bGwpKX19KSl9KSksdC5yZXN1bHRzRm9vdGVyQ29tcG9uZW50JiZlLmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXRzRm9vdGVyXCJ9LGUuY3JlYXRlRWxlbWVudCh0LnJlc3VsdHNGb290ZXJDb21wb25lbnQse3N0YXRlOnQuc3RhdGV9KSkpfXZhciBscj1bXCJ0cmFuc2xhdGlvbnNcIl07ZnVuY3Rpb24gdXIodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj12b2lkIDA9PT1yP3t9OnIsbz11KHQsbHIpLGk9bi5yZWNlbnRTZWFyY2hlc1RpdGxlLGE9dm9pZCAwPT09aT9cIlJlY2VudFwiOmksYz1uLm5vUmVjZW50U2VhcmNoZXNUZXh0LHM9dm9pZCAwPT09Yz9cIk5vIHJlY2VudCBzZWFyY2hlc1wiOmMsZj1uLnNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZSxtPXZvaWQgMD09PWY/XCJTYXZlIHRoaXMgc2VhcmNoXCI6ZixwPW4ucmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGUsZD12b2lkIDA9PT1wP1wiUmVtb3ZlIHRoaXMgc2VhcmNoIGZyb20gaGlzdG9yeVwiOnAsdj1uLmZhdm9yaXRlU2VhcmNoZXNUaXRsZSxoPXZvaWQgMD09PXY/XCJGYXZvcml0ZVwiOnYseT1uLnJlbW92ZUZhdm9yaXRlU2VhcmNoQnV0dG9uVGl0bGUsYj12b2lkIDA9PT15P1wiUmVtb3ZlIHRoaXMgc2VhcmNoIGZyb20gZmF2b3JpdGVzXCI6eTtyZXR1cm5cImlkbGVcIj09PW8uc3RhdGUuc3RhdHVzJiYhMT09PW8uaGFzQ29sbGVjdGlvbnM/by5kaXNhYmxlVXNlclBlcnNvbmFsaXphdGlvbj9udWxsOmUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtU3RhcnRTY3JlZW5cIn0sZS5jcmVhdGVFbGVtZW50KFwicFwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGVscFwifSxzKSk6ITE9PT1vLmhhc0NvbGxlY3Rpb25zP251bGw6ZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1Ecm9wZG93bi1Db250YWluZXJcIn0sZS5jcmVhdGVFbGVtZW50KFh0LGwoe30sbyx7dGl0bGU6YSxjb2xsZWN0aW9uOm8uc3RhdGUuY29sbGVjdGlvbnNbMF0scmVuZGVySWNvbjpmdW5jdGlvbigpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1pY29uXCJ9LGUuY3JlYXRlRWxlbWVudChxdCxudWxsKSl9LHJlbmRlckFjdGlvbjpmdW5jdGlvbih0KXt2YXIgcj10Lml0ZW0sbj10LnJ1bkZhdm9yaXRlVHJhbnNpdGlvbixpPXQucnVuRGVsZXRlVHJhbnNpdGlvbjtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KGUuRnJhZ21lbnQsbnVsbCxlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1hY3Rpb25cIn0sZS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtYWN0aW9uLWJ1dHRvblwiLHRpdGxlOm0sdHlwZTpcInN1Ym1pdFwiLG9uQ2xpY2s6ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksbigoZnVuY3Rpb24oKXtvLmZhdm9yaXRlU2VhcmNoZXMuYWRkKHIpLG8ucmVjZW50U2VhcmNoZXMucmVtb3ZlKHIpLG8ucmVmcmVzaCgpfSkpfX0sZS5jcmVhdGVFbGVtZW50KFZ0LG51bGwpKSksZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtYWN0aW9uXCJ9LGUuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LWFjdGlvbi1idXR0b25cIix0aXRsZTpkLHR5cGU6XCJzdWJtaXRcIixvbkNsaWNrOmZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLGkoKGZ1bmN0aW9uKCl7by5yZWNlbnRTZWFyY2hlcy5yZW1vdmUociksby5yZWZyZXNoKCl9KSl9fSxlLmNyZWF0ZUVsZW1lbnQoTHQsbnVsbCkpKSl9fSkpLGUuY3JlYXRlRWxlbWVudChYdCxsKHt9LG8se3RpdGxlOmgsY29sbGVjdGlvbjpvLnN0YXRlLmNvbGxlY3Rpb25zWzFdLHJlbmRlckljb246ZnVuY3Rpb24oKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtaWNvblwifSxlLmNyZWF0ZUVsZW1lbnQoVnQsbnVsbCkpfSxyZW5kZXJBY3Rpb246ZnVuY3Rpb24odCl7dmFyIHI9dC5pdGVtLG49dC5ydW5EZWxldGVUcmFuc2l0aW9uO3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1hY3Rpb25cIn0sZS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtYWN0aW9uLWJ1dHRvblwiLHRpdGxlOmIsdHlwZTpcInN1Ym1pdFwiLG9uQ2xpY2s6ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksbigoZnVuY3Rpb24oKXtvLmZhdm9yaXRlU2VhcmNoZXMucmVtb3ZlKHIpLG8ucmVmcmVzaCgpfSkpfX0sZS5jcmVhdGVFbGVtZW50KEx0LG51bGwpKSl9fSkpKX12YXIgc3I9W1widHJhbnNsYXRpb25zXCJdLGZyPWUubWVtbygoZnVuY3Rpb24odCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj12b2lkIDA9PT1yP3t9OnIsbz11KHQsc3IpO2lmKFwiZXJyb3JcIj09PW8uc3RhdGUuc3RhdHVzKXJldHVybiBlLmNyZWF0ZUVsZW1lbnQoJHQse3RyYW5zbGF0aW9uczpudWxsPT1uP3ZvaWQgMDpuLmVycm9yU2NyZWVufSk7dmFyIGk9by5zdGF0ZS5jb2xsZWN0aW9ucy5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gZS5pdGVtcy5sZW5ndGg+MH0pKTtyZXR1cm4gby5zdGF0ZS5xdWVyeT8hMT09PWk/ZS5jcmVhdGVFbGVtZW50KFF0LGwoe30sbyx7dHJhbnNsYXRpb25zOm51bGw9PW4/dm9pZCAwOm4ubm9SZXN1bHRzU2NyZWVufSkpOmUuY3JlYXRlRWxlbWVudChjcixvKTplLmNyZWF0ZUVsZW1lbnQodXIsbCh7fSxvLHtoYXNDb2xsZWN0aW9uczppLHRyYW5zbGF0aW9uczpudWxsPT1uP3ZvaWQgMDpuLnN0YXJ0U2NyZWVufSkpfSksKGZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJsb2FkaW5nXCI9PT10LnN0YXRlLnN0YXR1c3x8XCJzdGFsbGVkXCI9PT10LnN0YXRlLnN0YXR1c30pKSxtcj1bXCJ0cmFuc2xhdGlvbnNcIl07ZnVuY3Rpb24gcHIodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj12b2lkIDA9PT1yP3t9OnIsbz11KHQsbXIpLGk9bi5yZXNldEJ1dHRvblRpdGxlLGE9dm9pZCAwPT09aT9cIkNsZWFyIHRoZSBxdWVyeVwiOmksYz1uLnJlc2V0QnV0dG9uQXJpYUxhYmVsLHM9dm9pZCAwPT09Yz9cIkNsZWFyIHRoZSBxdWVyeVwiOmMsZj1uLmNhbmNlbEJ1dHRvblRleHQsbT12b2lkIDA9PT1mP1wiQ2FuY2VsXCI6ZixwPW4uY2FuY2VsQnV0dG9uQXJpYUxhYmVsLGQ9dm9pZCAwPT09cD9cIkNhbmNlbFwiOnAsaD1uLnNlYXJjaElucHV0TGFiZWwseT12b2lkIDA9PT1oP1wiU2VhcmNoXCI6aCxiPW8uZ2V0Rm9ybVByb3BzKHtpbnB1dEVsZW1lbnQ6by5pbnB1dFJlZi5jdXJyZW50fSkub25SZXNldDtyZXR1cm4gZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7by5hdXRvRm9jdXMmJm8uaW5wdXRSZWYuY3VycmVudCYmby5pbnB1dFJlZi5jdXJyZW50LmZvY3VzKCl9KSxbby5hdXRvRm9jdXMsby5pbnB1dFJlZl0pLGUudXNlRWZmZWN0KChmdW5jdGlvbigpe28uaXNGcm9tU2VsZWN0aW9uJiZvLmlucHV0UmVmLmN1cnJlbnQmJm8uaW5wdXRSZWYuY3VycmVudC5zZWxlY3QoKX0pLFtvLmlzRnJvbVNlbGVjdGlvbixvLmlucHV0UmVmXSksZS5jcmVhdGVFbGVtZW50KGUuRnJhZ21lbnQsbnVsbCxlLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1Gb3JtXCIsb25TdWJtaXQ6ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpfSxvblJlc2V0OmJ9LGUuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsbCh7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLU1hZ25pZmllckxhYmVsXCJ9LG8uZ2V0TGFiZWxQcm9wcygpKSxlLmNyZWF0ZUVsZW1lbnQodixudWxsKSxlLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1WaXN1YWxseUhpZGRlbkZvckFjY2Vzc2liaWxpdHlcIn0seSkpLGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtTG9hZGluZ0luZGljYXRvclwifSxlLmNyZWF0ZUVsZW1lbnQoUnQsbnVsbCkpLGUuY3JlYXRlRWxlbWVudChcImlucHV0XCIsbCh7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUlucHV0XCIscmVmOm8uaW5wdXRSZWZ9LG8uZ2V0SW5wdXRQcm9wcyh7aW5wdXRFbGVtZW50Om8uaW5wdXRSZWYuY3VycmVudCxhdXRvRm9jdXM6by5hdXRvRm9jdXMsbWF4TGVuZ3RoOjY0fSkpKSxlLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIix7dHlwZTpcInJlc2V0XCIsdGl0bGU6YSxjbGFzc05hbWU6XCJEb2NTZWFyY2gtUmVzZXRcIixcImFyaWEtbGFiZWxcIjpzLGhpZGRlbjohby5zdGF0ZS5xdWVyeX0sZS5jcmVhdGVFbGVtZW50KEx0LG51bGwpKSksZS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1DYW5jZWxcIix0eXBlOlwicmVzZXRcIixcImFyaWEtbGFiZWxcIjpkLG9uQ2xpY2s6by5vbkNsb3NlfSxtKSl9dmFyIGRyPVtcIl9oaWdobGlnaHRSZXN1bHRcIixcIl9zbmlwcGV0UmVzdWx0XCJdO2Z1bmN0aW9uIHZyKGUpe3JldHVybiExPT09ZnVuY3Rpb24oKXt2YXIgZT1cIl9fVEVTVF9LRVlfX1wiO3RyeXtyZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oZSxcIlwiKSxsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShlKSwhMH1jYXRjaChlKXtyZXR1cm4hMX19KCk/e3NldEl0ZW06ZnVuY3Rpb24oKXt9LGdldEl0ZW06ZnVuY3Rpb24oKXtyZXR1cm5bXX19OntzZXRJdGVtOmZ1bmN0aW9uKHQpe3JldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oZSxKU09OLnN0cmluZ2lmeSh0KSl9LGdldEl0ZW06ZnVuY3Rpb24oKXt2YXIgdD13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oZSk7cmV0dXJuIHQ/SlNPTi5wYXJzZSh0KTpbXX19fWZ1bmN0aW9uIGhyKGUpe3ZhciB0PWUua2V5LHI9ZS5saW1pdCxuPXZvaWQgMD09PXI/NTpyLG89dnIodCksaT1vLmdldEl0ZW0oKS5zbGljZSgwLG4pO3JldHVybnthZGQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZSxyPSh0Ll9oaWdobGlnaHRSZXN1bHQsdC5fc25pcHBldFJlc3VsdCx1KHQsZHIpKSxhPWkuZmluZEluZGV4KChmdW5jdGlvbihlKXtyZXR1cm4gZS5vYmplY3RJRD09PXIub2JqZWN0SUR9KSk7YT4tMSYmaS5zcGxpY2UoYSwxKSxpLnVuc2hpZnQociksaT1pLnNsaWNlKDAsbiksby5zZXRJdGVtKGkpfSxyZW1vdmU6ZnVuY3Rpb24oZSl7aT1pLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQub2JqZWN0SUQhPT1lLm9iamVjdElEfSkpLG8uc2V0SXRlbShpKX0sZ2V0QWxsOmZ1bmN0aW9uKCl7cmV0dXJuIGl9fX1mdW5jdGlvbiB5cihlKXtjb25zdCB0PWBhbGdvbGlhc2VhcmNoLWNsaWVudC1qcy0ke2Uua2V5fWA7bGV0IHI7Y29uc3Qgbj0oKT0+KHZvaWQgMD09PXImJihyPWUubG9jYWxTdG9yYWdlfHx3aW5kb3cubG9jYWxTdG9yYWdlKSxyKSxvPSgpPT5KU09OLnBhcnNlKG4oKS5nZXRJdGVtKHQpfHxcInt9XCIpLGk9ZT0+e24oKS5zZXRJdGVtKHQsSlNPTi5zdHJpbmdpZnkoZSkpfTtyZXR1cm57Z2V0Oih0LHIsbj17bWlzczooKT0+UHJvbWlzZS5yZXNvbHZlKCl9KT0+UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKCk9PnsoKCk9Pntjb25zdCB0PWUudGltZVRvTGl2ZT8xZTMqZS50aW1lVG9MaXZlOm51bGwscj1vKCksbj1PYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMocikuZmlsdGVyKCgoWyxlXSk9PnZvaWQgMCE9PWUudGltZXN0YW1wKSkpO2lmKGkobiksIXQpcmV0dXJuO2NvbnN0IGE9T2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG4pLmZpbHRlcigoKFssZV0pPT57Y29uc3Qgcj0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4hKGUudGltZXN0YW1wK3Q8cil9KSkpO2koYSl9KSgpO2NvbnN0IHI9SlNPTi5zdHJpbmdpZnkodCk7cmV0dXJuIG8oKVtyXX0pKS50aGVuKChlPT5Qcm9taXNlLmFsbChbZT9lLnZhbHVlOnIoKSx2b2lkIDAhPT1lXSkpKS50aGVuKCgoW2UsdF0pPT5Qcm9taXNlLmFsbChbZSx0fHxuLm1pc3MoZSldKSkpLnRoZW4oKChbZV0pPT5lKSksc2V0OihlLHIpPT5Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgoKT0+e2NvbnN0IGk9bygpO3JldHVybiBpW0pTT04uc3RyaW5naWZ5KGUpXT17dGltZXN0YW1wOihuZXcgRGF0ZSkuZ2V0VGltZSgpLHZhbHVlOnJ9LG4oKS5zZXRJdGVtKHQsSlNPTi5zdHJpbmdpZnkoaSkpLHJ9KSksZGVsZXRlOmU9PlByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCgpPT57Y29uc3Qgcj1vKCk7ZGVsZXRlIHJbSlNPTi5zdHJpbmdpZnkoZSldLG4oKS5zZXRJdGVtKHQsSlNPTi5zdHJpbmdpZnkocikpfSkpLGNsZWFyOigpPT5Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgoKT0+e24oKS5yZW1vdmVJdGVtKHQpfSkpfX1mdW5jdGlvbiBicihlKXtjb25zdCB0PVsuLi5lLmNhY2hlc10scj10LnNoaWZ0KCk7cmV0dXJuIHZvaWQgMD09PXI/e2dldDooZSx0LHI9e21pc3M6KCk9PlByb21pc2UucmVzb2x2ZSgpfSk9PnQoKS50aGVuKChlPT5Qcm9taXNlLmFsbChbZSxyLm1pc3MoZSldKSkpLnRoZW4oKChbZV0pPT5lKSksc2V0OihlLHQpPT5Qcm9taXNlLnJlc29sdmUodCksZGVsZXRlOmU9PlByb21pc2UucmVzb2x2ZSgpLGNsZWFyOigpPT5Qcm9taXNlLnJlc29sdmUoKX06e2dldDooZSxuLG89e21pc3M6KCk9PlByb21pc2UucmVzb2x2ZSgpfSk9PnIuZ2V0KGUsbixvKS5jYXRjaCgoKCk9PmJyKHtjYWNoZXM6dH0pLmdldChlLG4sbykpKSxzZXQ6KGUsbik9PnIuc2V0KGUsbikuY2F0Y2goKCgpPT5icih7Y2FjaGVzOnR9KS5zZXQoZSxuKSkpLGRlbGV0ZTplPT5yLmRlbGV0ZShlKS5jYXRjaCgoKCk9PmJyKHtjYWNoZXM6dH0pLmRlbGV0ZShlKSkpLGNsZWFyOigpPT5yLmNsZWFyKCkuY2F0Y2goKCgpPT5icih7Y2FjaGVzOnR9KS5jbGVhcigpKSl9fWZ1bmN0aW9uIGdyKGU9e3NlcmlhbGl6YWJsZTohMH0pe2xldCB0PXt9O3JldHVybntnZXQocixuLG89e21pc3M6KCk9PlByb21pc2UucmVzb2x2ZSgpfSl7Y29uc3QgaT1KU09OLnN0cmluZ2lmeShyKTtpZihpIGluIHQpcmV0dXJuIFByb21pc2UucmVzb2x2ZShlLnNlcmlhbGl6YWJsZT9KU09OLnBhcnNlKHRbaV0pOnRbaV0pO2NvbnN0IGE9bigpLGM9byYmby5taXNzfHwoKCk9PlByb21pc2UucmVzb2x2ZSgpKTtyZXR1cm4gYS50aGVuKChlPT5jKGUpKSkudGhlbigoKCk9PmEpKX0sc2V0OihyLG4pPT4odFtKU09OLnN0cmluZ2lmeShyKV09ZS5zZXJpYWxpemFibGU/SlNPTi5zdHJpbmdpZnkobik6bixQcm9taXNlLnJlc29sdmUobikpLGRlbGV0ZTplPT4oZGVsZXRlIHRbSlNPTi5zdHJpbmdpZnkoZSldLFByb21pc2UucmVzb2x2ZSgpKSxjbGVhcjooKT0+KHQ9e30sUHJvbWlzZS5yZXNvbHZlKCkpfX1mdW5jdGlvbiBTcihlKXtsZXQgdD1lLmxlbmd0aC0xO2Zvcig7dD4wO3QtLSl7Y29uc3Qgcj1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKHQrMSkpLG49ZVt0XTtlW3RdPWVbcl0sZVtyXT1ufXJldHVybiBlfWZ1bmN0aW9uIE9yKGUsdCl7cmV0dXJuIHQ/KE9iamVjdC5rZXlzKHQpLmZvckVhY2goKHI9PntlW3JdPXRbcl0oZSl9KSksZSk6ZX1mdW5jdGlvbiB3cihlLC4uLnQpe2xldCByPTA7cmV0dXJuIGUucmVwbGFjZSgvJXMvZywoKCk9PmVuY29kZVVSSUNvbXBvbmVudCh0W3IrK10pKSl9Y29uc3QgRXI9e1dpdGhpblF1ZXJ5UGFyYW1ldGVyczowLFdpdGhpbkhlYWRlcnM6MX07ZnVuY3Rpb24ganIoZSx0KXtjb25zdCByPWV8fHt9LG49ci5kYXRhfHx7fTtyZXR1cm4gT2JqZWN0LmtleXMocikuZm9yRWFjaCgoZT0+ey0xPT09W1widGltZW91dFwiLFwiaGVhZGVyc1wiLFwicXVlcnlQYXJhbWV0ZXJzXCIsXCJkYXRhXCIsXCJjYWNoZWFibGVcIl0uaW5kZXhPZihlKSYmKG5bZV09cltlXSl9KSkse2RhdGE6T2JqZWN0LmVudHJpZXMobikubGVuZ3RoPjA/bjp2b2lkIDAsdGltZW91dDpyLnRpbWVvdXR8fHQsaGVhZGVyczpyLmhlYWRlcnN8fHt9LHF1ZXJ5UGFyYW1ldGVyczpyLnF1ZXJ5UGFyYW1ldGVyc3x8e30sY2FjaGVhYmxlOnIuY2FjaGVhYmxlfX1jb25zdCBJcj17UmVhZDoxLFdyaXRlOjIsQW55OjN9LFByPTEsRHI9MixBcj0zO2Z1bmN0aW9uIGtyKGUsdD1Qcil7cmV0dXJuey4uLmUsc3RhdHVzOnQsbGFzdFVwZGF0ZTpEYXRlLm5vdygpfX1mdW5jdGlvbiBDcihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT97cHJvdG9jb2w6XCJodHRwc1wiLHVybDplLGFjY2VwdDpJci5Bbnl9Ontwcm90b2NvbDplLnByb3RvY29sfHxcImh0dHBzXCIsdXJsOmUudXJsLGFjY2VwdDplLmFjY2VwdHx8SXIuQW55fX1jb25zdCBOcj1cIkdFVFwiLF9yPVwiUE9TVFwiO2Z1bmN0aW9uIHhyKGUsdCl7cmV0dXJuIFByb21pc2UuYWxsKHQubWFwKCh0PT5lLmdldCh0LCgoKT0+UHJvbWlzZS5yZXNvbHZlKGtyKHQpKSkpKSkpLnRoZW4oKGU9Pntjb25zdCByPWUuZmlsdGVyKChlPT5mdW5jdGlvbihlKXtyZXR1cm4gZS5zdGF0dXM9PT1Qcnx8RGF0ZS5ub3coKS1lLmxhc3RVcGRhdGU+MTJlNH0oZSkpKSxuPWUuZmlsdGVyKChlPT5mdW5jdGlvbihlKXtyZXR1cm4gZS5zdGF0dXM9PT1BciYmRGF0ZS5ub3coKS1lLmxhc3RVcGRhdGU8PTEyZTR9KGUpKSksbz1bLi4uciwuLi5uXTtyZXR1cm57Z2V0VGltZW91dDooZSx0KT0+KDA9PT1uLmxlbmd0aCYmMD09PWU/MTpuLmxlbmd0aCszK2UpKnQsc3RhdGVsZXNzSG9zdHM6by5sZW5ndGg+MD9vLm1hcCgoZT0+Q3IoZSkpKTp0fX0pKX1mdW5jdGlvbiBUcihlLHQscixuKXtjb25zdCBvPVtdLGk9ZnVuY3Rpb24oZSx0KXtpZihlLm1ldGhvZD09PU5yfHx2b2lkIDA9PT1lLmRhdGEmJnZvaWQgMD09PXQuZGF0YSlyZXR1cm47Y29uc3Qgcj1BcnJheS5pc0FycmF5KGUuZGF0YSk/ZS5kYXRhOnsuLi5lLmRhdGEsLi4udC5kYXRhfTtyZXR1cm4gSlNPTi5zdHJpbmdpZnkocil9KHIsbiksYT1mdW5jdGlvbihlLHQpe2NvbnN0IHI9ey4uLmUuaGVhZGVycywuLi50LmhlYWRlcnN9LG49e307cmV0dXJuIE9iamVjdC5rZXlzKHIpLmZvckVhY2goKGU9Pntjb25zdCB0PXJbZV07bltlLnRvTG93ZXJDYXNlKCldPXR9KSksbn0oZSxuKSxjPXIubWV0aG9kLGw9ci5tZXRob2QhPT1Ocj97fTp7Li4uci5kYXRhLC4uLm4uZGF0YX0sdT17XCJ4LWFsZ29saWEtYWdlbnRcIjplLnVzZXJBZ2VudC52YWx1ZSwuLi5lLnF1ZXJ5UGFyYW1ldGVycywuLi5sLC4uLm4ucXVlcnlQYXJhbWV0ZXJzfTtsZXQgcz0wO2NvbnN0IGY9KHQsbCk9Pntjb25zdCBtPXQucG9wKCk7aWYodm9pZCAwPT09bSl0aHJvd3tuYW1lOlwiUmV0cnlFcnJvclwiLG1lc3NhZ2U6XCJVbnJlYWNoYWJsZSBob3N0cyAtIHlvdXIgYXBwbGljYXRpb24gaWQgbWF5IGJlIGluY29ycmVjdC4gSWYgdGhlIGVycm9yIHBlcnNpc3RzLCBjb250YWN0IHN1cHBvcnRAYWxnb2xpYS5jb20uXCIsdHJhbnNwb3J0ZXJTdGFja1RyYWNlOk1yKG8pfTtjb25zdCBwPXtkYXRhOmksaGVhZGVyczphLG1ldGhvZDpjLHVybDpxcihtLHIucGF0aCx1KSxjb25uZWN0VGltZW91dDpsKHMsZS50aW1lb3V0cy5jb25uZWN0KSxyZXNwb25zZVRpbWVvdXQ6bChzLG4udGltZW91dCl9LGQ9ZT0+e2NvbnN0IHI9e3JlcXVlc3Q6cCxyZXNwb25zZTplLGhvc3Q6bSx0cmllc0xlZnQ6dC5sZW5ndGh9O3JldHVybiBvLnB1c2gocikscn0sdj17b25TdWNjZXNzOmU9PmZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gSlNPTi5wYXJzZShlLmNvbnRlbnQpfWNhdGNoKHQpe3Rocm93IGZ1bmN0aW9uKGUsdCl7cmV0dXJue25hbWU6XCJEZXNlcmlhbGl6YXRpb25FcnJvclwiLG1lc3NhZ2U6ZSxyZXNwb25zZTp0fX0odC5tZXNzYWdlLGUpfX0oZSksb25SZXRyeShyKXtjb25zdCBuPWQocik7cmV0dXJuIHIuaXNUaW1lZE91dCYmcysrLFByb21pc2UuYWxsKFtlLmxvZ2dlci5pbmZvKFwiUmV0cnlhYmxlIGZhaWx1cmVcIixIcihuKSksZS5ob3N0c0NhY2hlLnNldChtLGtyKG0sci5pc1RpbWVkT3V0P0FyOkRyKSldKS50aGVuKCgoKT0+Zih0LGwpKSl9LG9uRmFpbChlKXt0aHJvdyBkKGUpLGZ1bmN0aW9uKHtjb250ZW50OmUsc3RhdHVzOnR9LHIpe2xldCBuPWU7dHJ5e249SlNPTi5wYXJzZShlKS5tZXNzYWdlfWNhdGNoKGUpe31yZXR1cm4gZnVuY3Rpb24oZSx0LHIpe3JldHVybntuYW1lOlwiQXBpRXJyb3JcIixtZXNzYWdlOmUsc3RhdHVzOnQsdHJhbnNwb3J0ZXJTdGFja1RyYWNlOnJ9fShuLHQscil9KGUsTXIobykpfX07cmV0dXJuIGUucmVxdWVzdGVyLnNlbmQocCkudGhlbigoZT0+KChlLHQpPT4oZT0+e2NvbnN0IHQ9ZS5zdGF0dXM7cmV0dXJuIGUuaXNUaW1lZE91dHx8KCh7aXNUaW1lZE91dDplLHN0YXR1czp0fSk9PiFlJiYwPT1+fnQpKGUpfHwyIT1+fih0LzEwMCkmJjQhPX5+KHQvMTAwKX0pKGUpP3Qub25SZXRyeShlKTooKHtzdGF0dXM6ZX0pPT4yPT1+fihlLzEwMCkpKGUpP3Qub25TdWNjZXNzKGUpOnQub25GYWlsKGUpKShlLHYpKSl9O3JldHVybiB4cihlLmhvc3RzQ2FjaGUsdCkudGhlbigoZT0+ZihbLi4uZS5zdGF0ZWxlc3NIb3N0c10ucmV2ZXJzZSgpLGUuZ2V0VGltZW91dCkpKX1mdW5jdGlvbiBScihlKXtjb25zdCB0PXt2YWx1ZTpgQWxnb2xpYSBmb3IgSmF2YVNjcmlwdCAoJHtlfSlgLGFkZChlKXtjb25zdCByPWA7ICR7ZS5zZWdtZW50fSR7dm9pZCAwIT09ZS52ZXJzaW9uP2AgKCR7ZS52ZXJzaW9ufSlgOlwiXCJ9YDtyZXR1cm4tMT09PXQudmFsdWUuaW5kZXhPZihyKSYmKHQudmFsdWU9YCR7dC52YWx1ZX0ke3J9YCksdH19O3JldHVybiB0fWZ1bmN0aW9uIHFyKGUsdCxyKXtjb25zdCBuPUxyKHIpO2xldCBvPWAke2UucHJvdG9jb2x9Oi8vJHtlLnVybH0vJHtcIi9cIj09PXQuY2hhckF0KDApP3Quc3Vic3RyKDEpOnR9YDtyZXR1cm4gbi5sZW5ndGgmJihvKz1gPyR7bn1gKSxvfWZ1bmN0aW9uIExyKGUpe3JldHVybiBPYmplY3Qua2V5cyhlKS5tYXAoKHQ9PntyZXR1cm4gd3IoXCIlcz0lc1wiLHQsKHI9ZVt0XSxcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHIpfHxcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocik/SlNPTi5zdHJpbmdpZnkoZVt0XSk6ZVt0XSkpO3ZhciByfSkpLmpvaW4oXCImXCIpfWZ1bmN0aW9uIE1yKGUpe3JldHVybiBlLm1hcCgoZT0+SHIoZSkpKX1mdW5jdGlvbiBIcihlKXtjb25zdCB0PWUucmVxdWVzdC5oZWFkZXJzW1wieC1hbGdvbGlhLWFwaS1rZXlcIl0/e1wieC1hbGdvbGlhLWFwaS1rZXlcIjpcIioqKioqXCJ9Ont9O3JldHVybnsuLi5lLHJlcXVlc3Q6ey4uLmUucmVxdWVzdCxoZWFkZXJzOnsuLi5lLnJlcXVlc3QuaGVhZGVycywuLi50fX19fWNvbnN0IEZyPWU9Pntjb25zdCB0PWUuYXBwSWQscj1mdW5jdGlvbihlLHQscil7Y29uc3Qgbj17XCJ4LWFsZ29saWEtYXBpLWtleVwiOnIsXCJ4LWFsZ29saWEtYXBwbGljYXRpb24taWRcIjp0fTtyZXR1cm57aGVhZGVyczooKT0+ZT09PUVyLldpdGhpbkhlYWRlcnM/bjp7fSxxdWVyeVBhcmFtZXRlcnM6KCk9PmU9PT1Fci5XaXRoaW5RdWVyeVBhcmFtZXRlcnM/bjp7fX19KHZvaWQgMCE9PWUuYXV0aE1vZGU/ZS5hdXRoTW9kZTpFci5XaXRoaW5IZWFkZXJzLHQsZS5hcGlLZXkpLG49ZnVuY3Rpb24oZSl7Y29uc3R7aG9zdHNDYWNoZTp0LGxvZ2dlcjpyLHJlcXVlc3RlcjpuLHJlcXVlc3RzQ2FjaGU6byxyZXNwb25zZXNDYWNoZTppLHRpbWVvdXRzOmEsdXNlckFnZW50OmMsaG9zdHM6bCxxdWVyeVBhcmFtZXRlcnM6dSxoZWFkZXJzOnN9PWUsZj17aG9zdHNDYWNoZTp0LGxvZ2dlcjpyLHJlcXVlc3RlcjpuLHJlcXVlc3RzQ2FjaGU6byxyZXNwb25zZXNDYWNoZTppLHRpbWVvdXRzOmEsdXNlckFnZW50OmMsaGVhZGVyczpzLHF1ZXJ5UGFyYW1ldGVyczp1LGhvc3RzOmwubWFwKChlPT5DcihlKSkpLHJlYWQoZSx0KXtjb25zdCByPWpyKHQsZi50aW1lb3V0cy5yZWFkKSxuPSgpPT5UcihmLGYuaG9zdHMuZmlsdGVyKChlPT4wIT0oZS5hY2NlcHQmSXIuUmVhZCkpKSxlLHIpO2lmKCEwIT09KHZvaWQgMCE9PXIuY2FjaGVhYmxlP3IuY2FjaGVhYmxlOmUuY2FjaGVhYmxlKSlyZXR1cm4gbigpO2NvbnN0IG89e3JlcXVlc3Q6ZSxtYXBwZWRSZXF1ZXN0T3B0aW9uczpyLHRyYW5zcG9ydGVyOntxdWVyeVBhcmFtZXRlcnM6Zi5xdWVyeVBhcmFtZXRlcnMsaGVhZGVyczpmLmhlYWRlcnN9fTtyZXR1cm4gZi5yZXNwb25zZXNDYWNoZS5nZXQobywoKCk9PmYucmVxdWVzdHNDYWNoZS5nZXQobywoKCk9PmYucmVxdWVzdHNDYWNoZS5zZXQobyxuKCkpLnRoZW4oKGU9PlByb21pc2UuYWxsKFtmLnJlcXVlc3RzQ2FjaGUuZGVsZXRlKG8pLGVdKSksKGU9PlByb21pc2UuYWxsKFtmLnJlcXVlc3RzQ2FjaGUuZGVsZXRlKG8pLFByb21pc2UucmVqZWN0KGUpXSkpKS50aGVuKCgoW2UsdF0pPT50KSkpKSkse21pc3M6ZT0+Zi5yZXNwb25zZXNDYWNoZS5zZXQobyxlKX0pfSx3cml0ZTooZSx0KT0+VHIoZixmLmhvc3RzLmZpbHRlcigoZT0+MCE9KGUuYWNjZXB0JklyLldyaXRlKSkpLGUsanIodCxmLnRpbWVvdXRzLndyaXRlKSl9O3JldHVybiBmfSh7aG9zdHM6W3t1cmw6YCR7dH0tZHNuLmFsZ29saWEubmV0YCxhY2NlcHQ6SXIuUmVhZH0se3VybDpgJHt0fS5hbGdvbGlhLm5ldGAsYWNjZXB0OklyLldyaXRlfV0uY29uY2F0KFNyKFt7dXJsOmAke3R9LTEuYWxnb2xpYW5ldC5jb21gfSx7dXJsOmAke3R9LTIuYWxnb2xpYW5ldC5jb21gfSx7dXJsOmAke3R9LTMuYWxnb2xpYW5ldC5jb21gfV0pKSwuLi5lLGhlYWRlcnM6ey4uLnIuaGVhZGVycygpLFwiY29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiwuLi5lLmhlYWRlcnN9LHF1ZXJ5UGFyYW1ldGVyczp7Li4uci5xdWVyeVBhcmFtZXRlcnMoKSwuLi5lLnF1ZXJ5UGFyYW1ldGVyc319KSxvPXt0cmFuc3BvcnRlcjpuLGFwcElkOnQsYWRkQWxnb2xpYUFnZW50KGUsdCl7bi51c2VyQWdlbnQuYWRkKHtzZWdtZW50OmUsdmVyc2lvbjp0fSl9LGNsZWFyQ2FjaGU6KCk9PlByb21pc2UuYWxsKFtuLnJlcXVlc3RzQ2FjaGUuY2xlYXIoKSxuLnJlc3BvbnNlc0NhY2hlLmNsZWFyKCldKS50aGVuKCgoKT0+e30pKX07cmV0dXJuIE9yKG8sZS5tZXRob2RzKX0sQnI9ZT0+KHQscik9PnQubWV0aG9kPT09TnI/ZS50cmFuc3BvcnRlci5yZWFkKHQscik6ZS50cmFuc3BvcnRlci53cml0ZSh0LHIpLFVyPWU9Pih0LHI9e30pPT5Pcih7dHJhbnNwb3J0ZXI6ZS50cmFuc3BvcnRlcixhcHBJZDplLmFwcElkLGluZGV4TmFtZTp0fSxyLm1ldGhvZHMpLFZyPWU9Pih0LHIpPT57Y29uc3Qgbj10Lm1hcCgoZT0+KHsuLi5lLHBhcmFtczpMcihlLnBhcmFtc3x8e30pfSkpKTtyZXR1cm4gZS50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6X3IscGF0aDpcIjEvaW5kZXhlcy8qL3F1ZXJpZXNcIixkYXRhOntyZXF1ZXN0czpufSxjYWNoZWFibGU6ITB9LHIpfSxLcj1lPT4odCxyKT0+UHJvbWlzZS5hbGwodC5tYXAoKHQ9Pntjb25zdHtmYWNldE5hbWU6bixmYWNldFF1ZXJ5Om8sLi4uaX09dC5wYXJhbXM7cmV0dXJuIFVyKGUpKHQuaW5kZXhOYW1lLHttZXRob2RzOntzZWFyY2hGb3JGYWNldFZhbHVlczp6cn19KS5zZWFyY2hGb3JGYWNldFZhbHVlcyhuLG8sey4uLnIsLi4uaX0pfSkpKSxKcj1lPT4odCxyLG4pPT5lLnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDpfcixwYXRoOndyKFwiMS9hbnN3ZXJzLyVzL3ByZWRpY3Rpb25cIixlLmluZGV4TmFtZSksZGF0YTp7cXVlcnk6dCxxdWVyeUxhbmd1YWdlczpyfSxjYWNoZWFibGU6ITB9LG4pLCRyPWU9Pih0LHIpPT5lLnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDpfcixwYXRoOndyKFwiMS9pbmRleGVzLyVzL3F1ZXJ5XCIsZS5pbmRleE5hbWUpLGRhdGE6e3F1ZXJ5OnR9LGNhY2hlYWJsZTohMH0sciksenI9ZT0+KHQscixuKT0+ZS50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6X3IscGF0aDp3cihcIjEvaW5kZXhlcy8lcy9mYWNldHMvJXMvcXVlcnlcIixlLmluZGV4TmFtZSx0KSxkYXRhOntmYWNldFF1ZXJ5OnJ9LGNhY2hlYWJsZTohMH0sbiksUXI9MSxXcj0yLFpyPTM7ZnVuY3Rpb24gWXIoZSx0LHIpe2NvbnN0IG49e2FwcElkOmUsYXBpS2V5OnQsdGltZW91dHM6e2Nvbm5lY3Q6MSxyZWFkOjIsd3JpdGU6MzB9LHJlcXVlc3Rlcjp7c2VuZDplPT5uZXcgUHJvbWlzZSgodD0+e2NvbnN0IHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3Iub3BlbihlLm1ldGhvZCxlLnVybCwhMCksT2JqZWN0LmtleXMoZS5oZWFkZXJzKS5mb3JFYWNoKCh0PT5yLnNldFJlcXVlc3RIZWFkZXIodCxlLmhlYWRlcnNbdF0pKSk7Y29uc3Qgbj0oZSxuKT0+c2V0VGltZW91dCgoKCk9PntyLmFib3J0KCksdCh7c3RhdHVzOjAsY29udGVudDpuLGlzVGltZWRPdXQ6ITB9KX0pLDFlMyplKSxvPW4oZS5jb25uZWN0VGltZW91dCxcIkNvbm5lY3Rpb24gdGltZW91dFwiKTtsZXQgaTtyLm9ucmVhZHlzdGF0ZWNoYW5nZT0oKT0+e3IucmVhZHlTdGF0ZT5yLk9QRU5FRCYmdm9pZCAwPT09aSYmKGNsZWFyVGltZW91dChvKSxpPW4oZS5yZXNwb25zZVRpbWVvdXQsXCJTb2NrZXQgdGltZW91dFwiKSl9LHIub25lcnJvcj0oKT0+ezA9PT1yLnN0YXR1cyYmKGNsZWFyVGltZW91dChvKSxjbGVhclRpbWVvdXQoaSksdCh7Y29udGVudDpyLnJlc3BvbnNlVGV4dHx8XCJOZXR3b3JrIHJlcXVlc3QgZmFpbGVkXCIsc3RhdHVzOnIuc3RhdHVzLGlzVGltZWRPdXQ6ITF9KSl9LHIub25sb2FkPSgpPT57Y2xlYXJUaW1lb3V0KG8pLGNsZWFyVGltZW91dChpKSx0KHtjb250ZW50OnIucmVzcG9uc2VUZXh0LHN0YXR1czpyLnN0YXR1cyxpc1RpbWVkT3V0OiExfSl9LHIuc2VuZChlLmRhdGEpfSkpfSxsb2dnZXI6KG89WnIse2RlYnVnOihlLHQpPT4oUXI+PW8mJmNvbnNvbGUuZGVidWcoZSx0KSxQcm9taXNlLnJlc29sdmUoKSksaW5mbzooZSx0KT0+KFdyPj1vJiZjb25zb2xlLmluZm8oZSx0KSxQcm9taXNlLnJlc29sdmUoKSksZXJyb3I6KGUsdCk9Pihjb25zb2xlLmVycm9yKGUsdCksUHJvbWlzZS5yZXNvbHZlKCkpfSkscmVzcG9uc2VzQ2FjaGU6Z3IoKSxyZXF1ZXN0c0NhY2hlOmdyKHtzZXJpYWxpemFibGU6ITF9KSxob3N0c0NhY2hlOmJyKHtjYWNoZXM6W3lyKHtrZXk6YDQuMTkuMS0ke2V9YH0pLGdyKCldfSksdXNlckFnZW50OlJyKFwiNC4xOS4xXCIpLmFkZCh7c2VnbWVudDpcIkJyb3dzZXJcIix2ZXJzaW9uOlwibGl0ZVwifSksYXV0aE1vZGU6RXIuV2l0aGluUXVlcnlQYXJhbWV0ZXJzfTt2YXIgbztyZXR1cm4gRnIoey4uLm4sLi4ucixtZXRob2RzOntzZWFyY2g6VnIsc2VhcmNoRm9yRmFjZXRWYWx1ZXM6S3IsbXVsdGlwbGVRdWVyaWVzOlZyLG11bHRpcGxlU2VhcmNoRm9yRmFjZXRWYWx1ZXM6S3IsY3VzdG9tUmVxdWVzdDpCcixpbml0SW5kZXg6ZT0+dD0+VXIoZSkodCx7bWV0aG9kczp7c2VhcmNoOiRyLHNlYXJjaEZvckZhY2V0VmFsdWVzOnpyLGZpbmRBbnN3ZXJzOkpyfX0pfX0pfVlyLnZlcnNpb249XCI0LjE5LjFcIjt2YXIgWHI9XCIzLjYuMVwiO3ZhciBHcj1bXCJmb290ZXJcIixcInNlYXJjaEJveFwiXTtmdW5jdGlvbiBlbih0KXt2YXIgcj10LmFwcElkLG49dC5hcGlLZXksbz10LmluZGV4TmFtZSxpPXQucGxhY2Vob2xkZXIsYz12b2lkIDA9PT1pP1wiU2VhcmNoIGRvY3NcIjppLGY9dC5zZWFyY2hQYXJhbWV0ZXJzLG09dC5tYXhSZXN1bHRzUGVyR3JvdXAscD10Lm9uQ2xvc2UsZD12b2lkIDA9PT1wP25yOnAsdj10LnRyYW5zZm9ybUl0ZW1zLGg9dm9pZCAwPT09dj90cjp2LHk9dC5oaXRDb21wb25lbnQsYj12b2lkIDA9PT15P1R0OnksZz10LnJlc3VsdHNGb290ZXJDb21wb25lbnQsUz12b2lkIDA9PT1nP2Z1bmN0aW9uKCl7cmV0dXJuIG51bGx9OmcsTz10Lm5hdmlnYXRvcix3PXQuaW5pdGlhbFNjcm9sbFksRT12b2lkIDA9PT13PzA6dyxqPXQudHJhbnNmb3JtU2VhcmNoQ2xpZW50LEk9dm9pZCAwPT09aj90cjpqLFA9dC5kaXNhYmxlVXNlclBlcnNvbmFsaXphdGlvbixEPXZvaWQgMCE9PVAmJlAsQT10LmluaXRpYWxRdWVyeSxrPXZvaWQgMD09PUE/XCJcIjpBLEM9dC50cmFuc2xhdGlvbnMsTj12b2lkIDA9PT1DP3t9OkMsXz10LmdldE1pc3NpbmdSZXN1bHRzVXJsLHg9dC5pbnNpZ2h0cyxUPXZvaWQgMCE9PXgmJngsUj1OLmZvb3RlcixxPU4uc2VhcmNoQm94LEw9dShOLEdyKSxNPXMoZS51c2VTdGF0ZSh7cXVlcnk6XCJcIixjb2xsZWN0aW9uczpbXSxjb21wbGV0aW9uOm51bGwsY29udGV4dDp7fSxpc09wZW46ITEsYWN0aXZlSXRlbUlkOm51bGwsc3RhdHVzOlwiaWRsZVwifSksMiksSD1NWzBdLEY9TVsxXSxCPWUudXNlUmVmKG51bGwpLFU9ZS51c2VSZWYobnVsbCksVj1lLnVzZVJlZihudWxsKSxLPWUudXNlUmVmKG51bGwpLEo9ZS51c2VSZWYobnVsbCksJD1lLnVzZVJlZigxMCksej1lLnVzZVJlZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLnNsaWNlKDAsNjQpOlwiXCIpLmN1cnJlbnQsUT1lLnVzZVJlZihrfHx6KS5jdXJyZW50LFc9ZnVuY3Rpb24odCxyLG4pe3JldHVybiBlLnVzZU1lbW8oKGZ1bmN0aW9uKCl7dmFyIGU9WXIodCxyKTtyZXR1cm4gZS5hZGRBbGdvbGlhQWdlbnQoXCJkb2NzZWFyY2hcIixcIjMuNi4xXCIpLCExPT09L2RvY3NlYXJjaC5qcyBcXCguKlxcKS8udGVzdChlLnRyYW5zcG9ydGVyLnVzZXJBZ2VudC52YWx1ZSkmJmUuYWRkQWxnb2xpYUFnZW50KFwiZG9jc2VhcmNoLXJlYWN0XCIsXCIzLjYuMVwiKSxuKGUpfSksW3QscixuXSl9KHIsbixJKSxaPWUudXNlUmVmKGhyKHtrZXk6XCJfX0RPQ1NFQVJDSF9GQVZPUklURV9TRUFSQ0hFU19fXCIuY29uY2F0KG8pLGxpbWl0OjEwfSkpLmN1cnJlbnQsWT1lLnVzZVJlZihocih7a2V5OlwiX19ET0NTRUFSQ0hfUkVDRU5UX1NFQVJDSEVTX19cIi5jb25jYXQobyksbGltaXQ6MD09PVouZ2V0QWxsKCkubGVuZ3RoPzc6NH0pKS5jdXJyZW50LFg9ZS51c2VDYWxsYmFjaygoZnVuY3Rpb24oZSl7aWYoIUQpe3ZhciB0PVwiY29udGVudFwiPT09ZS50eXBlP2UuX19kb2NzZWFyY2hfcGFyZW50OmU7dCYmLTE9PT1aLmdldEFsbCgpLmZpbmRJbmRleCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUub2JqZWN0SUQ9PT10Lm9iamVjdElEfSkpJiZZLmFkZCh0KX19KSxbWixZLERdKSxHPWUudXNlQ2FsbGJhY2soKGZ1bmN0aW9uKGUpe2lmKEguY29udGV4dC5hbGdvbGlhSW5zaWdodHNQbHVnaW4mJmUuX19hdXRvY29tcGxldGVfaWQpe3ZhciB0PWUscj17ZXZlbnROYW1lOlwiSXRlbSBTZWxlY3RlZFwiLGluZGV4OnQuX19hdXRvY29tcGxldGVfaW5kZXhOYW1lLGl0ZW1zOlt0XSxwb3NpdGlvbnM6W2UuX19hdXRvY29tcGxldGVfaWRdLHF1ZXJ5SUQ6dC5fX2F1dG9jb21wbGV0ZV9xdWVyeUlEfTtILmNvbnRleHQuYWxnb2xpYUluc2lnaHRzUGx1Z2luLmluc2lnaHRzLmNsaWNrZWRPYmplY3RJRHNBZnRlclNlYXJjaChyKX19KSxbSC5jb250ZXh0LmFsZ29saWFJbnNpZ2h0c1BsdWdpbl0pLGVlPWUudXNlTWVtbygoZnVuY3Rpb24oKXtyZXR1cm4gQ3Qoe2lkOlwiZG9jc2VhcmNoXCIsZGVmYXVsdEFjdGl2ZUl0ZW1JZDowLHBsYWNlaG9sZGVyOmMsb3Blbk9uRm9jdXM6ITAsaW5pdGlhbFN0YXRlOntxdWVyeTpRLGNvbnRleHQ6e3NlYXJjaFN1Z2dlc3Rpb25zOltdfX0saW5zaWdodHM6VCxuYXZpZ2F0b3I6TyxvblN0YXRlQ2hhbmdlOmZ1bmN0aW9uKGUpe0YoZS5zdGF0ZSl9LGdldFNvdXJjZXM6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5xdWVyeSxpPWUuc3RhdGUsYz1lLnNldENvbnRleHQsbD1lLnNldFN0YXR1cztpZighdClyZXR1cm4gRD9bXTpbe3NvdXJjZUlkOlwicmVjZW50U2VhcmNoZXNcIixvblNlbGVjdDpmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW0scj1lLmV2ZW50O1godCkscnIocil8fGQoKX0sZ2V0SXRlbVVybDpmdW5jdGlvbihlKXtyZXR1cm4gZS5pdGVtLnVybH0sZ2V0SXRlbXM6ZnVuY3Rpb24oKXtyZXR1cm4gWS5nZXRBbGwoKX19LHtzb3VyY2VJZDpcImZhdm9yaXRlU2VhcmNoZXNcIixvblNlbGVjdDpmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW0scj1lLmV2ZW50O1godCkscnIocil8fGQoKX0sZ2V0SXRlbVVybDpmdW5jdGlvbihlKXtyZXR1cm4gZS5pdGVtLnVybH0sZ2V0SXRlbXM6ZnVuY3Rpb24oKXtyZXR1cm4gWi5nZXRBbGwoKX19XTt2YXIgdT1Cb29sZWFuKFQpO3JldHVybiBXLnNlYXJjaChbe3F1ZXJ5OnQsaW5kZXhOYW1lOm8scGFyYW1zOmEoe2F0dHJpYnV0ZXNUb1JldHJpZXZlOltcImhpZXJhcmNoeS5sdmwwXCIsXCJoaWVyYXJjaHkubHZsMVwiLFwiaGllcmFyY2h5Lmx2bDJcIixcImhpZXJhcmNoeS5sdmwzXCIsXCJoaWVyYXJjaHkubHZsNFwiLFwiaGllcmFyY2h5Lmx2bDVcIixcImhpZXJhcmNoeS5sdmw2XCIsXCJjb250ZW50XCIsXCJ0eXBlXCIsXCJ1cmxcIl0sYXR0cmlidXRlc1RvU25pcHBldDpbXCJoaWVyYXJjaHkubHZsMTpcIi5jb25jYXQoJC5jdXJyZW50KSxcImhpZXJhcmNoeS5sdmwyOlwiLmNvbmNhdCgkLmN1cnJlbnQpLFwiaGllcmFyY2h5Lmx2bDM6XCIuY29uY2F0KCQuY3VycmVudCksXCJoaWVyYXJjaHkubHZsNDpcIi5jb25jYXQoJC5jdXJyZW50KSxcImhpZXJhcmNoeS5sdmw1OlwiLmNvbmNhdCgkLmN1cnJlbnQpLFwiaGllcmFyY2h5Lmx2bDY6XCIuY29uY2F0KCQuY3VycmVudCksXCJjb250ZW50OlwiLmNvbmNhdCgkLmN1cnJlbnQpXSxzbmlwcGV0RWxsaXBzaXNUZXh0Olwi4oCmXCIsaGlnaGxpZ2h0UHJlVGFnOlwiPG1hcms+XCIsaGlnaGxpZ2h0UG9zdFRhZzpcIjwvbWFyaz5cIixoaXRzUGVyUGFnZToyMCxjbGlja0FuYWx5dGljczp1fSxmKX1dKS5jYXRjaCgoZnVuY3Rpb24oZSl7dGhyb3dcIlJldHJ5RXJyb3JcIj09PWUubmFtZSYmbChcImVycm9yXCIpLGV9KSkudGhlbigoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXN1bHRzWzBdLGw9dC5oaXRzLHM9dC5uYkhpdHMsZj1lcihsLChmdW5jdGlvbihlKXtyZXR1cm4gYXIoZSl9KSxtKTtpLmNvbnRleHQuc2VhcmNoU3VnZ2VzdGlvbnMubGVuZ3RoPE9iamVjdC5rZXlzKGYpLmxlbmd0aCYmYyh7c2VhcmNoU3VnZ2VzdGlvbnM6T2JqZWN0LmtleXMoZil9KSxjKHtuYkhpdHM6c30pO3ZhciBwPXt9O3JldHVybiB1JiYocD17X19hdXRvY29tcGxldGVfaW5kZXhOYW1lOm8sX19hdXRvY29tcGxldGVfcXVlcnlJRDp0LnF1ZXJ5SUQsX19hdXRvY29tcGxldGVfYWxnb2xpYUNyZWRlbnRpYWxzOnthcHBJZDpyLGFwaUtleTpufX0pLE9iamVjdC52YWx1ZXMoZikubWFwKChmdW5jdGlvbihlLHQpe3JldHVybntzb3VyY2VJZDpcImhpdHNcIi5jb25jYXQodCksb25TZWxlY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtLHI9ZS5ldmVudDtYKHQpLHJyKHIpfHxkKCl9LGdldEl0ZW1Vcmw6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuaXRlbS51cmx9LGdldEl0ZW1zOmZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC52YWx1ZXMoZXIoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaGllcmFyY2h5Lmx2bDF9KSxtKSkubWFwKGgpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUubWFwKChmdW5jdGlvbih0KXt2YXIgcj1udWxsLG49ZS5maW5kKChmdW5jdGlvbihlKXtyZXR1cm5cImx2bDFcIj09PWUudHlwZSYmZS5oaWVyYXJjaHkubHZsMT09PXQuaGllcmFyY2h5Lmx2bDF9KSk7cmV0dXJuXCJsdmwxXCIhPT10LnR5cGUmJm4mJihyPW4pLGEoYSh7fSx0KSx7fSx7X19kb2NzZWFyY2hfcGFyZW50OnJ9LHApfSkpfSkpLmZsYXQoKX19fSkpfSkpfX0pfSksW28sZixtLFcsZCxZLFosWCxRLGMsTyxoLEQsVCxyLG5dKSx0ZT1lZS5nZXRFbnZpcm9ubWVudFByb3BzLHJlPWVlLmdldFJvb3RQcm9wcyxuZT1lZS5yZWZyZXNoO3JldHVybiBmdW5jdGlvbih0KXt2YXIgcj10LmdldEVudmlyb25tZW50UHJvcHMsbj10LnBhbmVsRWxlbWVudCxvPXQuZm9ybUVsZW1lbnQsaT10LmlucHV0RWxlbWVudDtlLnVzZUVmZmVjdCgoZnVuY3Rpb24oKXtpZihuJiZvJiZpKXt2YXIgZT1yKHtwYW5lbEVsZW1lbnQ6bixmb3JtRWxlbWVudDpvLGlucHV0RWxlbWVudDppfSksdD1lLm9uVG91Y2hTdGFydCxhPWUub25Ub3VjaE1vdmU7cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsYSksZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0KSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGEpfX19KSxbcixuLG8saV0pfSh7Z2V0RW52aXJvbm1lbnRQcm9wczp0ZSxwYW5lbEVsZW1lbnQ6Sy5jdXJyZW50LGZvcm1FbGVtZW50OlYuY3VycmVudCxpbnB1dEVsZW1lbnQ6Si5jdXJyZW50fSksZnVuY3Rpb24odCl7dmFyIHI9dC5jb250YWluZXI7ZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7aWYocil7dmFyIGU9ci5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlucHV0Om5vdChbZGlzYWJsZWRdKVwiKSx0PWVbMF0sbj1lW2UubGVuZ3RoLTFdO3JldHVybiByLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsbyksZnVuY3Rpb24oKXtyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsbyl9fWZ1bmN0aW9uIG8oZSl7XCJUYWJcIj09PWUua2V5JiYoZS5zaGlmdEtleT9kb2N1bWVudC5hY3RpdmVFbGVtZW50PT09dCYmKGUucHJldmVudERlZmF1bHQoKSxuLmZvY3VzKCkpOmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PT1uJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHQuZm9jdXMoKSkpfX0pLFtyXSl9KHtjb250YWluZXI6Qi5jdXJyZW50fSksZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIkRvY1NlYXJjaC0tYWN0aXZlXCIpLGZ1bmN0aW9uKCl7dmFyIGUsdDtkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJEb2NTZWFyY2gtLWFjdGl2ZVwiKSxudWxsPT09KGU9KHQ9d2luZG93KS5zY3JvbGxUbyl8fHZvaWQgMD09PWV8fGUuY2FsbCh0LDAsRSl9fSksW10pLGUudXNlRWZmZWN0KChmdW5jdGlvbigpe3dpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY4cHgpXCIpLm1hdGNoZXMmJigkLmN1cnJlbnQ9NSl9KSxbXSksZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7Sy5jdXJyZW50JiYoSy5jdXJyZW50LnNjcm9sbFRvcD0wKX0pLFtILnF1ZXJ5XSksZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7US5sZW5ndGg+MCYmKG5lKCksSi5jdXJyZW50JiZKLmN1cnJlbnQuZm9jdXMoKSl9KSxbUSxuZV0pLGUudXNlRWZmZWN0KChmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZihVLmN1cnJlbnQpe3ZhciBlPS4wMSp3aW5kb3cuaW5uZXJIZWlnaHQ7VS5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1kb2NzZWFyY2gtdmhcIixcIlwiLmNvbmNhdChlLFwicHhcIikpfX1yZXR1cm4gZSgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZSksZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGUpfX0pLFtdKSxlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixsKHtyZWY6Qn0scmUoe1wiYXJpYS1leHBhbmRlZFwiOiEwfSkse2NsYXNzTmFtZTpbXCJEb2NTZWFyY2hcIixcIkRvY1NlYXJjaC1Db250YWluZXJcIixcInN0YWxsZWRcIj09PUguc3RhdHVzJiZcIkRvY1NlYXJjaC1Db250YWluZXItLVN0YWxsZWRcIixcImVycm9yXCI9PT1ILnN0YXR1cyYmXCJEb2NTZWFyY2gtQ29udGFpbmVyLS1FcnJvcmVkXCJdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSxyb2xlOlwiYnV0dG9uXCIsdGFiSW5kZXg6MCxvbk1vdXNlRG93bjpmdW5jdGlvbihlKXtlLnRhcmdldD09PWUuY3VycmVudFRhcmdldCYmZCgpfX0pLGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtTW9kYWxcIixyZWY6VX0sZS5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1TZWFyY2hCYXJcIixyZWY6Vn0sZS5jcmVhdGVFbGVtZW50KHByLGwoe30sZWUse3N0YXRlOkgsYXV0b0ZvY3VzOjA9PT1RLmxlbmd0aCxpbnB1dFJlZjpKLGlzRnJvbVNlbGVjdGlvbjpCb29sZWFuKFEpJiZRPT09eix0cmFuc2xhdGlvbnM6cSxvbkNsb3NlOmR9KSkpLGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtRHJvcGRvd25cIixyZWY6S30sZS5jcmVhdGVFbGVtZW50KGZyLGwoe30sZWUse2luZGV4TmFtZTpvLHN0YXRlOkgsaGl0Q29tcG9uZW50OmIscmVzdWx0c0Zvb3RlckNvbXBvbmVudDpTLGRpc2FibGVVc2VyUGVyc29uYWxpemF0aW9uOkQscmVjZW50U2VhcmNoZXM6WSxmYXZvcml0ZVNlYXJjaGVzOlosaW5wdXRSZWY6Six0cmFuc2xhdGlvbnM6TCxnZXRNaXNzaW5nUmVzdWx0c1VybDpfLG9uSXRlbUNsaWNrOmZ1bmN0aW9uKGUsdCl7RyhlKSxYKGUpLHJyKHQpfHxkKCl9fSkpKSxlLmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUZvb3RlclwifSxlLmNyZWF0ZUVsZW1lbnQoeHQse3RyYW5zbGF0aW9uczpSfSkpKSl9ZnVuY3Rpb24gdG4odCl7dmFyIHI9dC5pc09wZW4sbj10Lm9uT3BlbixvPXQub25DbG9zZSxpPXQub25JbnB1dCxhPXQuc2VhcmNoQnV0dG9uUmVmO2UudXNlRWZmZWN0KChmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ7KDI3PT09ZS5rZXlDb2RlJiZyfHxcImtcIj09PShudWxsPT09KHQ9ZS5rZXkpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LnRvTG93ZXJDYXNlKCkpJiYoZS5tZXRhS2V5fHxlLmN0cmxLZXkpfHwhZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQscj10LnRhZ05hbWU7cmV0dXJuIHQuaXNDb250ZW50RWRpdGFibGV8fFwiSU5QVVRcIj09PXJ8fFwiU0VMRUNUXCI9PT1yfHxcIlRFWFRBUkVBXCI9PT1yfShlKSYmXCIvXCI9PT1lLmtleSYmIXIpJiYoZS5wcmV2ZW50RGVmYXVsdCgpLHI/bygpOmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiRG9jU2VhcmNoLS1hY3RpdmVcIil8fGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiRG9jU2VhcmNoLS1hY3RpdmVcIil8fG4oKSksYSYmYS5jdXJyZW50PT09ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCYmaSYmL1thLXpBLVowLTldLy50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKSkmJmkoZSl9cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUpLGZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZSl9fSksW3IsbixvLGksYV0pfWZ1bmN0aW9uIHJuKHQpe3ZhciByLG4saT1lLnVzZVJlZihudWxsKSxhPXMoZS51c2VTdGF0ZSghMSksMiksYz1hWzBdLHU9YVsxXSxmPXMoZS51c2VTdGF0ZSgobnVsbD09dD92b2lkIDA6dC5pbml0aWFsUXVlcnkpfHx2b2lkIDApLDIpLG09ZlswXSxwPWZbMV0sZD1lLnVzZUNhbGxiYWNrKChmdW5jdGlvbigpe3UoITApfSksW3VdKSx2PWUudXNlQ2FsbGJhY2soKGZ1bmN0aW9uKCl7dSghMSl9KSxbdV0pO3JldHVybiB0bih7aXNPcGVuOmMsb25PcGVuOmQsb25DbG9zZTp2LG9uSW5wdXQ6ZS51c2VDYWxsYmFjaygoZnVuY3Rpb24oZSl7dSghMCkscChlLmtleSl9KSxbdSxwXSksc2VhcmNoQnV0dG9uUmVmOml9KSxlLmNyZWF0ZUVsZW1lbnQoZS5GcmFnbWVudCxudWxsLGUuY3JlYXRlRWxlbWVudCh5LHtyZWY6aSx0cmFuc2xhdGlvbnM6bnVsbD09dHx8bnVsbD09PShyPXQudHJhbnNsYXRpb25zKXx8dm9pZCAwPT09cj92b2lkIDA6ci5idXR0b24sb25DbGljazpkfSksYyYmbyhlLmNyZWF0ZUVsZW1lbnQoZW4sbCh7fSx0LHtpbml0aWFsU2Nyb2xsWTp3aW5kb3cuc2Nyb2xsWSxpbml0aWFsUXVlcnk6bSx0cmFuc2xhdGlvbnM6bnVsbD09dHx8bnVsbD09PShuPXQudHJhbnNsYXRpb25zKXx8dm9pZCAwPT09bj92b2lkIDA6bi5tb2RhbCxvbkNsb3NlOnZ9KSksZG9jdW1lbnQuYm9keSkpfWV4cG9ydHtybiBhcyBEb2NTZWFyY2gseSBhcyBEb2NTZWFyY2hCdXR0b24sZW4gYXMgRG9jU2VhcmNoTW9kYWwsdG4gYXMgdXNlRG9jU2VhcmNoS2V5Ym9hcmRFdmVudHMsWHIgYXMgdmVyc2lvbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBEb2NTZWFyY2hQcm9wcyBhcyBEb2NTZWFyY2hDb21wb25lbnRQcm9wcyB9IGZyb20gJ0Bkb2NzZWFyY2gvcmVhY3QnO1xuaW1wb3J0IHsgRG9jU2VhcmNoLCB2ZXJzaW9uIH0gZnJvbSAnQGRvY3NlYXJjaC9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgcmVuZGVyIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5cbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50KFxuICB2YWx1ZTogSFRNTEVsZW1lbnQgfCBzdHJpbmcsXG4gIGVudmlyb25tZW50OiBEb2NTZWFyY2hQcm9wc1snZW52aXJvbm1lbnQnXSA9IHdpbmRvd1xuKTogSFRNTEVsZW1lbnQge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlbnZpcm9ubWVudC5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50Pih2YWx1ZSkhO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5pbnRlcmZhY2UgRG9jU2VhcmNoUHJvcHMgZXh0ZW5kcyBEb2NTZWFyY2hDb21wb25lbnRQcm9wcyB7XG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBzdHJpbmc7XG4gIGVudmlyb25tZW50PzogdHlwZW9mIHdpbmRvdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvY3NlYXJjaChwcm9wczogRG9jU2VhcmNoUHJvcHMpIHtcbiAgcmVuZGVyKFxuICAgIDxEb2NTZWFyY2hcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHRyYW5zZm9ybVNlYXJjaENsaWVudD17KHNlYXJjaENsaWVudCkgPT4ge1xuICAgICAgICBzZWFyY2hDbGllbnQuYWRkQWxnb2xpYUFnZW50KCdkb2NzZWFyY2guanMnLCB2ZXJzaW9uKTtcblxuICAgICAgICByZXR1cm4gcHJvcHMudHJhbnNmb3JtU2VhcmNoQ2xpZW50XG4gICAgICAgICAgPyBwcm9wcy50cmFuc2Zvcm1TZWFyY2hDbGllbnQoc2VhcmNoQ2xpZW50KVxuICAgICAgICAgIDogc2VhcmNoQ2xpZW50O1xuICAgICAgfX1cbiAgICAvPixcbiAgICBnZXRIVE1MRWxlbWVudChwcm9wcy5jb250YWluZXIsIHByb3BzLmVudmlyb25tZW50KVxuICApO1xufVxuIiwgImltcG9ydCBkb2NzZWFyY2ggZnJvbSAnQGRvY3NlYXJjaC9qcyc7XG5cbmRvY3NlYXJjaCh7XG4gICAgY29udGFpbmVyOiAnI2RvY3NlYXJjaCcsXG4gICAgYXBwSWQ6ICdLTVdZODFaV1MzJyxcbiAgICBpbmRleE5hbWU6ICdnZXRkb2tzJyxcbiAgICBhcGlLZXk6ICc2OTE5NTE1MjZiMTFlMWE3MDgyNThlNGUxYTUxYWRjNycsXG4gICAgaW5zaWdodHM6IHRydWVcbn0pO1xuXG5jb25zdCBvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0RvY1NlYXJjaC1CdXR0b24nKVswXS5jbGljaygpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFRvZ2dsZU1vYmlsZScpLm9uY2xpY2sgPSBvbkNsaWNrO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFRvZ2dsZURlc2t0b3AnKS5vbmNsaWNrID0gb25DbGljaztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQWFBLElBQVksQ0FBQTtNQUNaQyxJQUFZLENBQUE7TUFDWkMsSUFBcUI7QUFBQSxXQUFBLEVBQUFDLElBQUFDLElBQUE7QUFBQSxhQUFBQyxNQUFBRCxHQUFBLENBQUFELEdBQUFFLEVBQUEsSUFBQUQsR0FBQUMsRUFBQTtBQUFBLFdBQUFGO0VBQUE7QUFBQSxXQUFBLEVBQUFBLElBQUE7QUFBQSxRQUFBQyxLQUFBRCxHQUFBO0FBQUEsSUFBQUMsTUFBQUEsR0FBQSxZQUFBRCxFQUFBO0VBQUE7QUFBQSxXQUFBLEVBQUFBLElBQUFDLElBQUFDLElBQUE7QUFBQSxRQUFBQyxJQUFBQyxJQUFBQyxJQUFBQyxLQUFBLFdBQUFDLEtBQUEsQ0FBQTtBQUFBLFNBQUFGLE1BQUFKLEdBQUEsVUFBQUksS0FBQUYsS0FBQUYsR0FBQUksRUFBQSxJQUFBLFNBQUFBLEtBQUFELEtBQUFILEdBQUFJLEVBQUEsSUFBQUUsR0FBQUYsRUFBQSxJQUFBSixHQUFBSSxFQUFBO0FBQUEsUUFBQSxVQUFBLFNBQUEsRUFBQSxNQUFBSCxLQUFBLENBQUFBLEVBQUEsR0FBQUcsS0FBQSxHQUFBQSxLQUFBLFVBQUEsUUFBQUEsS0FBQSxDQUFBSCxHQUFBLEtBQUFJLEdBQUFELEVBQUEsQ0FBQTtBQUFBLFFBQUEsUUFBQUgsT0FBQUssR0FBQSxXQUFBTCxLQUFBLGNBQUEsT0FBQUYsTUFBQSxRQUFBQSxHQUFBLGFBQUEsTUFBQUssTUFBQUwsR0FBQSxhQUFBLFlBQUFPLEdBQUFGLEVBQUEsTUFBQUUsR0FBQUYsRUFBQSxJQUFBTCxHQUFBLGFBQUFLLEVBQUE7QUFBQSxXQUFBLEVBQUFMLElBQUFPLElBQUFKLElBQUFDLElBQUEsSUFBQTtFQUFBO0FBQUEsV0FBQSxFQUFBSixJQUFBQyxJQUFBQyxJQUFBQyxJQUFBQyxJQUFBO0FBQUEsUUFBQUMsS0FBQSxFQUFBLE1BQUFMLElBQUEsT0FBQUMsSUFBQSxLQUFBQyxJQUFBLEtBQUFDLElBQUEsS0FBQSxNQUFBLElBQUEsTUFBQSxLQUFBLEdBQUEsS0FBQSxNQUFBLEtBQUEsUUFBQSxLQUFBLE1BQUEsS0FBQSxNQUFBLGFBQUEsUUFBQSxLQUFBLFFBQUFDLEtBQUEsRUFBQSxFQUFBLE1BQUFBLEdBQUE7QUFBQSxXQUFBLFFBQUEsRUFBQSxTQUFBLEVBQUEsTUFBQUMsRUFBQSxHQUFBQTtFQUFBO0FBQUEsV0FBQSxFQUFBTCxJQUFBO0FBQUEsV0FBQUEsR0FBQTtFQUFBO0FBQUEsV0FBQSxFQUFBQSxJQUFBQyxJQUFBO0FBQUEsU0FBQSxRQUFBRCxJQUFBLEtBQUEsVUFBQUM7RUFBQTtBQUFBLFdBQUEsRUFBQUQsSUFBQUMsSUFBQTtBQUFBLFFBQUEsUUFBQUEsR0FBQSxRQUFBRCxHQUFBLEtBQUEsRUFBQUEsR0FBQSxJQUFBQSxHQUFBLEdBQUEsSUFBQSxRQUFBQSxFQUFBLElBQUEsQ0FBQSxJQUFBO0FBQUEsYUFBQUUsSUFBQUQsS0FBQUQsR0FBQSxJQUFBLFFBQUFDLEtBQUEsS0FBQSxTQUFBQyxLQUFBRixHQUFBLElBQUFDLEVBQUEsTUFBQSxRQUFBQyxHQUFBLElBQUEsUUFBQUEsR0FBQTtBQUFBLFdBQUEsY0FBQSxPQUFBRixHQUFBLE9BQUEsRUFBQUEsRUFBQSxJQUFBO0VBQUE7QUFBQSxXQUFBLEVBQUFBLElBQUE7QUFBQSxRQUFBQyxJQUFBQztBQUFBLFFBQUEsU0FBQUYsS0FBQUEsR0FBQSxPQUFBLFFBQUFBLEdBQUEsS0FBQTtBQUFBLFdBQUFBLEdBQUEsTUFBQUEsR0FBQSxJQUFBLE9BQUEsTUFBQUMsS0FBQSxHQUFBQSxLQUFBRCxHQUFBLElBQUEsUUFBQUMsS0FBQSxLQUFBLFNBQUFDLEtBQUFGLEdBQUEsSUFBQUMsRUFBQSxNQUFBLFFBQUFDLEdBQUEsS0FBQTtBQUFBLFFBQUFGLEdBQUEsTUFBQUEsR0FBQSxJQUFBLE9BQUFFLEdBQUE7QUFBQTtNQUFBO0FBQUEsYUFBQSxFQUFBRixFQUFBO0lBQUE7RUFBQTtBQUFBLFdBQUEsRUFBQUEsSUFBQTtBQUFBLEtBQUEsQ0FBQUEsR0FBQSxRQUFBQSxHQUFBLE1BQUEsU0FBQSxFQUFBLEtBQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsU0FBQSxNQUFBLEVBQUEsd0JBQUEsSUFBQSxFQUFBLHNCQUFBLEdBQUEsQ0FBQTtFQUFBO0FBQUEsV0FBQSxJQUFBO0FBQUEsYUFBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxTQUFBLENBQUFBLEtBQUEsRUFBQSxLQUFBLFNBQUFBLElBQUFDLElBQUE7QUFBQSxhQUFBRCxHQUFBLElBQUEsTUFBQUMsR0FBQSxJQUFBO0lBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSxHQUFBRCxHQUFBLEtBQUEsU0FBQUEsSUFBQTtBQUFBLFVBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDO0FBQUEsTUFBQU4sR0FBQSxRQUFBSyxNQUFBRCxNQUFBSCxLQUFBRCxJQUFBLEtBQUEsTUFBQU0sS0FBQUwsR0FBQSxTQUFBQyxLQUFBLENBQUEsSUFBQUMsS0FBQSxFQUFBLENBQUEsR0FBQUMsRUFBQSxHQUFBLE1BQUFBLEdBQUEsTUFBQSxHQUFBLEVBQUFFLElBQUFGLElBQUFELElBQUFGLEdBQUEsS0FBQSxXQUFBSyxHQUFBLGlCQUFBLFFBQUFGLEdBQUEsTUFBQSxDQUFBQyxFQUFBLElBQUEsTUFBQUgsSUFBQSxRQUFBRyxLQUFBLEVBQUFELEVBQUEsSUFBQUMsSUFBQUQsR0FBQSxHQUFBLEdBQUEsRUFBQUYsSUFBQUUsRUFBQSxHQUFBQSxHQUFBLE9BQUFDLE1BQUEsRUFBQUQsRUFBQTtJQUFBLENBQUE7RUFBQTtBQUFBLFdBQUEsRUFBQUosSUFBQUMsSUFBQUMsSUFBQUMsSUFBQUMsSUFBQUMsSUFBQUMsSUFBQUMsSUFBQUMsSUFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDLEtBQUFkLE1BQUFBLEdBQUEsT0FBQSxHQUFBZSxLQUFBRCxHQUFBO0FBQUEsU0FBQWYsR0FBQSxNQUFBLENBQUEsR0FBQVEsS0FBQSxHQUFBQSxLQUFBVCxHQUFBLFFBQUFTLEtBQUEsS0FBQSxTQUFBRyxLQUFBWCxHQUFBLElBQUFRLEVBQUEsSUFBQSxTQUFBRyxLQUFBWixHQUFBUyxFQUFBLE1BQUEsYUFBQSxPQUFBRyxLQUFBLE9BQUEsWUFBQSxPQUFBQSxNQUFBLFlBQUEsT0FBQUEsS0FBQSxFQUFBLE1BQUFBLElBQUEsTUFBQSxNQUFBQSxFQUFBLElBQUEsTUFBQSxRQUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQUEsR0FBQSxHQUFBLE1BQUEsTUFBQSxJQUFBLElBQUFBLEdBQUEsTUFBQSxJQUFBLEVBQUFBLEdBQUEsTUFBQUEsR0FBQSxPQUFBQSxHQUFBLEtBQUEsTUFBQUEsR0FBQSxHQUFBLElBQUFBLEtBQUE7QUFBQSxVQUFBQSxHQUFBLEtBQUFYLElBQUFXLEdBQUEsTUFBQVgsR0FBQSxNQUFBLEdBQUEsVUFBQVUsS0FBQUssR0FBQVAsRUFBQSxNQUFBRSxNQUFBQyxHQUFBLE9BQUFELEdBQUEsT0FBQUMsR0FBQSxTQUFBRCxHQUFBLEtBQUEsQ0FBQUssR0FBQVAsRUFBQSxJQUFBO1VBQUEsTUFBQUMsS0FBQSxHQUFBQSxLQUFBTyxJQUFBUCxNQUFBO0FBQUEsYUFBQUMsS0FBQUssR0FBQU4sRUFBQSxNQUFBRSxHQUFBLE9BQUFELEdBQUEsT0FBQUMsR0FBQSxTQUFBRCxHQUFBLE1BQUE7QUFBQSxVQUFBSyxHQUFBTixFQUFBLElBQUE7QUFBQTtRQUFBO0FBQUEsUUFBQUMsS0FBQTtNQUFBO0FBQUEsUUFBQVosSUFBQWEsSUFBQUQsS0FBQUEsTUFBQSxHQUFBUixJQUFBQyxJQUFBQyxJQUFBQyxJQUFBQyxJQUFBQyxFQUFBLEdBQUFLLEtBQUFELEdBQUEsTUFBQUYsS0FBQUUsR0FBQSxRQUFBRCxHQUFBLE9BQUFELE9BQUFLLE9BQUFBLEtBQUEsQ0FBQSxJQUFBSixHQUFBLE9BQUFJLEdBQUEsS0FBQUosR0FBQSxLQUFBLE1BQUFDLEVBQUEsR0FBQUcsR0FBQSxLQUFBTCxJQUFBRSxHQUFBLE9BQUFDLElBQUFELEVB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LElBQUE7TUFBQTtBQUFBLG9CQUFBLE9BQUFFLE9BQUEsUUFBQUEsT0FBQSxVQUFBQSxNQUFBLFFBQUFELEdBQUEsQ0FBQSxLQUFBLFFBQUFBLEdBQUEsQ0FBQSxLQUFBRCxHQUFBLGFBQUFDLElBQUFDLEVBQUEsSUFBQUYsR0FBQSxnQkFBQUMsRUFBQTtJQUFBO0VBQUE7QUFBQSxXQUFBLEVBQUFELElBQUE7QUFBQSxTQUFBLEVBQUFBLEdBQUEsT0FBQSxLQUFBLEVBQUEsRUFBQSxRQUFBLEVBQUEsTUFBQUEsRUFBQSxJQUFBQSxFQUFBO0VBQUE7QUFBQSxXQUFBLEVBQUFBLElBQUE7QUFBQSxTQUFBLEVBQUFBLEdBQUEsT0FBQSxJQUFBLEVBQUEsRUFBQSxRQUFBLEVBQUEsTUFBQUEsRUFBQSxJQUFBQSxFQUFBO0VBQUE7QUFBQSxXQUFBLEVBQUFBLElBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUFDLElBQUE7QUFBQSxRQUFBRSxJQUFBQyxJQUFBQyxJQUFBQyxJQUFBTSxJQUFBQyxJQUFBTixJQUFBRSxJQUFBQyxJQUFBSSxJQUFBQyxJQUFBQyxLQUFBdEIsR0FBQTtBQUFBLFFBQUEsV0FBQUEsR0FBQSxZQUFBLFFBQUE7QUFBQSxZQUFBQyxHQUFBLFFBQUFNLEtBQUFOLEdBQUEsS0FBQUssS0FBQU4sR0FBQSxNQUFBQyxHQUFBLEtBQUFELEdBQUEsTUFBQSxNQUFBSSxLQUFBLENBQUFFLEVBQUEsS0FBQUcsS0FBQSxFQUFBLFFBQUFBLEdBQUFULEVBQUE7QUFBQSxRQUFBO0FBQUEsUUFBQSxLQUFBLGNBQUEsT0FBQXNCLElBQUE7QUFBQSxZQUFBUCxLQUFBZixHQUFBLE9BQUFnQixNQUFBUCxLQUFBYSxHQUFBLGdCQUFBcEIsR0FBQU8sR0FBQSxHQUFBLEdBQUFXLEtBQUFYLEtBQUFPLEtBQUFBLEdBQUEsTUFBQSxRQUFBUCxHQUFBLEtBQUFQLElBQUFELEdBQUEsTUFBQVksTUFBQUgsS0FBQVYsR0FBQSxNQUFBQyxHQUFBLEtBQUEsS0FBQVMsR0FBQSxPQUFB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QUEsRUFBQUYsSUFBQUMsSUFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLElBQUFDO0FBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxRQUFBTCxFQUFBLElBQUFHLEtBQUFILEdBQUEsU0FBQUcsR0FBQSxXQUFBQSxHQUFBLFlBQUFILEdBQUEsT0FBQSxFQUFBRyxJQUFBLE1BQUFGLEVBQUEsSUFBQUMsTUFBQSxjQUFBLE9BQUFGLEdBQUEsU0FBQUUsS0FBQSxTQUFBRSxLQUFBSixHQUFBLE9BQUFBLEdBQUEsTUFBQUEsR0FBQSxNQUFBLFFBQUEsU0FBQUcsS0FBQUgsR0FBQSxNQUFBO0FBQUEsVUFBQUcsR0FBQSxxQkFBQSxLQUFBO0FBQUEsUUFBQUEsR0FBQSxxQkFBQTtNQUFBLFNBQUFILElBQUE7QUFBQSxVQUFBLElBQUFBLElBQUFDLEVBQUE7TUFBQTtBQUFBLE1BQUFFLEdBQUEsT0FBQUEsR0FBQSxNQUFBO0lBQUE7QUFBQSxRQUFBQSxLQUFBSCxHQUFBLElBQUEsTUFBQUssS0FBQSxHQUFBQSxLQUFBRixHQUFBLFFBQUFFLEtBQUEsQ0FBQUYsR0FBQUUsRUFBQSxLQUFBLEVBQUFGLEdBQUFFLEVBQUEsR0FBQUosSUFBQUMsRUFBQTtBQUFBLFlBQUFFLE1BQUEsRUFBQUEsRUFBQTtFQUFBO0FBQUEsV0FBQSxFQUFBSixJQUFBQyxJQUFBQyxJQUFBO0FBQUEsV0FBQSxLQUFBLFlBQUFGLElBQUFFLEVBQUE7RUFBQTtBQUFBLFdBQUEsRUFBQUYsSUFBQUMsSUFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLElBQUFDO0FBQUEsTUFBQSxNQUFBLEVBQUEsR0FBQUwsSUFBQUMsRUFBQSxHQUFBRyxNQUFBRCxLQUFBLGNBQUEsT0FBQUQsTUFBQSxPQUFBQSxNQUFBQSxHQUFBLE9BQUFELEdBQUEsS0FBQUksS0FBQSxDQUFBLEdBQUEsRUFBQUosSUFBQUQsTUFBQSxDQUFBRyxNQUFBRCxNQUFBRCxJQUFBLE1BQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQUQsRUFBQSxDQUFBLEdBQUFJLE1BQUEsR0FBQSxHQUFB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LElBQUEsT0FBQSxTQUFBRCxJQUFBO0FBQUEsV0FBQUEsS0FBQSxFQUFBQSxFQUFBLEVBQUEsU0FBQTtFQUFBLEdBQUEsTUFBQSxTQUFBQSxJQUFBO0FBQUEsUUFBQUMsS0FBQSxFQUFBRCxFQUFBO0FBQUEsUUFBQSxNQUFBQyxHQUFBLE9BQUEsT0FBQTtBQUFBLFdBQUFBLEdBQUEsQ0FBQTtFQUFBLEdBQUEsU0FBQSxFQUFBO0FBQUEsTUFBQSxLQUFBLEVBQUE7QUFBQSxXQUFBLEtBQUE7QUFBQSxTQUFBLE1BQUEsR0FBQSxLQUFBLElBQUEsTUFBQSxLQUFBLE1BQUE7RUFBQTtBQUFBLFdBQUEsR0FBQUQsSUFBQTtBQUFBLFFBQUFDLEtBQUFELEdBQUEsR0FBQTtBQUFBLFdBQUFDLE1BQUFBLEdBQUEsT0FBQUEsR0FBQSxJQUFBRCxFQUFBO0VBQUE7QUFBQSxXQUFBLEtBQUE7QUFBQSxTQUFBLElBQUEsTUFBQSxLQUFBLElBQUE7RUFBQTtBQUFBLElBQUEsTUFBQSxTQUFBQSxJQUFBQyxJQUFBQyxJQUFBO0FBQUEsUUFBQUYsR0FBQTtBQUFBLGVBQUFHLElBQUFDLEtBQUFILElBQUFHLEtBQUFBLEdBQUEsS0FBQSxNQUFBRCxLQUFBQyxHQUFBLFFBQUFELEdBQUEsSUFBQSxRQUFBLFFBQUFGLEdBQUEsUUFBQUEsR0FBQSxNQUFBQyxHQUFBLEtBQUFELEdBQUEsTUFBQUMsR0FBQSxNQUFBQyxHQUFBLElBQUFILElBQUFDLEVBQUE7O0FBQUEsT0FBQUQsSUFBQUMsSUFBQUMsRUFBQTtFQUFBLElBQUEsR0FBQSxZQUFBLElBQUEsS0FBQSxNQUFBLFNBQUFGLElBQUFDLElBQUE7QUFBQSxRQUFBQyxLQUFBRCxHQUFBLEtBQUFFLEtBQUE7QUFBQSxZQUFBQSxHQUFBLE1BQUFBLEdBQUEsSUFBQSxDQUFBLElBQUFBLEdBQUEsRUFBQSxLQUFBRCxFQUFBO0FBQUEsUUFBQUUsS0FBQSxHQUFBRCxHQUFBLEdBQUEsR0FBQUUsS0FBQSxPQUFBQyxLQUFBLFdBQUE7QUFBQSxNQUFBRCxPQUFBQSxLQUFBLE1BQUFILEdBQUEsdUJBQUFBLEdBQUEsS0FBQUUsS0FBQUEsR0FBQUcsRUFBQSxJQUFBQSxHQUFBO0lBQUE7QUFBQSxJQUFBTCxHQUFBLE1BQUFBLEdBQUEsc0JBQUFBLEdBQUEsdUJBQUEsV0FBQTtBQUFBLE1BQUFJLEdBQUEsR0FBQUosR0FBQSxPQUFBQSxHQUFBLElBQUE7SUFBQTtBQUFBLFFBQUFLLEtBQUEsV0FBQTtBQUFBLFVBQUEsQ0FBQSxFQUFBSixHQUFBLEtBQUE7QUFBQSxZQUFBQSxHQUFBLE1BQUEsS0FBQTtBQUFBLGNBQUFILEtBQUFHLEdBQUEsTUFBQTtBQUFBLFVBQUFBLEdBQUEsSUFBQSxJQUFBLENBQUEsSUFBQSxTQUFBSCxHQUFBQyxJQUFBQyxJQUFBQyxJQUFBO0FBQUEsbUJBQUFGLE9BQUFBLEdBQUEsTUFBQSxNQUFBQSxHQUFBLE1BQUFBLEdBQUEsT0FBQUEsR0FBQSxJQUFBLElBQUEsU0FBQUEsSUFBQTtBQUFBLHFCQUFBRCxHQUFBQyxJQUFBQyxJQUFBQyxFQUFBO1lBQUEsQ0FBQSxHQUFBRixHQUFBLE9BQUFBLEdBQUEsSUFBQSxRQUFBQyxPQUFBRCxHQUFBLE9BQUFFLEdBQUEsYUFBQUYsR0FBQSxLQUFBQSxHQUFBLEdBQUEsR0FBQUEsR0FBQSxJQUFBLE1BQUEsTUFBQUEsR0FBQSxJQUFBLE1BQUFFLE1BQUFGO1VBQUEsRUFBQUQsSUFBQUEsR0FBQSxJQUFBLEtBQUFBLEdBQUEsSUFBQSxHQUFBO1FBQUE7QUFBQSxZQUFBQztBQUFBLGFBQUFFLEdBQUEsU0FBQSxFQUFBLEtBQUFBLEdBQUEsTUFBQSxLQUFBLENBQUEsR0FBQUYsS0FBQUUsR0FBQSxFQUFBLElBQUEsSUFBQSxDQUFBRixHQUFBLFlBQUE7TUFBQTtJQUFBLEdBQUFPLEtBQUEsU0FBQVAsR0FBQTtBQUFBLElBQUFFLEdBQUEsU0FBQUssTUFBQUwsR0FBQSxTQUFBLEVBQUEsS0FBQUEsR0FBQSxNQUFBQSxHQUFBLElBQUEsSUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBSCxHQUFBLEtBQUFNLElBQUFBLEVBQUE7RUFBQSxHQUFBLEdBQUEsVUFBQSx1QkFBQSxXQUFBO0FBQUEsU0FBQSxJQUFBLENBQUE7RUFBQSxHQUFBLEdBQUEsVUFBQSxTQUFBLFNBQUFOLElBQUFDLElBQUE7QUFBQSxRQUFBLEtBQUEsS0FBQTtBQUFBLFVBQUEsS0FBQSxJQUFBLEtBQUE7QUFBQSxZQUFBQyxLQUFBLFNBQUEsY0FBQSxLQUFBLEdBQUFDLEtBQUEsS0FBQSxJQUFBLElBQUEsQ0FBQSxFQUFBO0FBQUEsYUFBQSxJQUFBLElBQUEsQ0FBQSxJQUFBLFNBQUFILEdBQUFDLElBQUFDLElBQUFDLElBQUE7QUFBQSxpQkFBQUYsT0FBQUEsR0FBQSxPQUFBQSxHQUFBLElBQUEsUUFBQUEsR0FBQSxJQUFBLElBQUEsR0FBQSxRQUFBLFNBQUFELElBQUE7QUFBQSwwQkFBQSxPQUFBQSxHQUFBLE9BQUFBLEdBQUEsSUFBQTtVQUFBLENBQUEsR0FBQUMsR0FBQSxJQUFBLE1BQUEsT0FBQSxTQUFBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBQSxFQUFBLEdBQUEsUUFBQUEsR0FBQSxJQUFBLFFBQUFFLE9BQUFGLEdBQUEsSUFBQSxNQUFBQyxLQUFBRCxHQUFBLE1BQUEsT0FBQUEsR0FBQSxNQUFBQSxHQUFBLE9BQUFBLEdBQUEsSUFBQSxJQUFBLFNBQUFBLElBQUE7QUFBQSxtQkFBQUQsR0FBQUMsSUFBQUMsSUFBQUMsRUFBQTtVQUFBLENBQUEsSUFBQUY7UUFBQSxFQUFBLEtBQUEsS0FBQUMsSUFBQUMsR0FBQSxNQUFBQSxHQUFBLEdBQUE7TUFBQTtBQUFBLFdBQUEsTUFBQTtJQUFBO0FBQUEsUUFBQUMsS0FBQUgsR0FBQSxPQUFBLEVBQUEsR0FBQSxNQUFBRCxHQUFBLFFBQUE7QUFBQSxXQUFBSSxPQUFBQSxHQUFBLE1BQUEsT0FBQSxDQUFBLEVBQUEsR0FBQSxNQUFBSCxHQUFBLE1BQUEsT0FBQUQsR0FBQSxRQUFBLEdBQUFJLEVBQUE7RUFBQTtBQUFBLE1BQUEsS0FBQSxTQUFBSixJQUFBQyxJQUFBQyxJQUFBO0FBQUEsUUFBQSxFQUFBQSxHQUFBLENBQUEsTUFBQUEsR0FBQSxDQUFBLEtBQUFGLEdBQUEsRUFBQSxPQUFBQyxFQUFBLEdBQUFELEdBQUEsTUFBQSxnQkFBQSxRQUFBQSxHQUFBLE1BQUEsWUFBQSxDQUFBLEtBQUEsQ0FBQUEsR0FBQSxFQUFBLE1BQUEsTUFBQUUsS0FBQUYsR0FBQSxHQUFBRSxNQUFBO0FBQUEsYUFBQUEsR0FBQSxTQUFBLElBQUEsQ0FBQUEsR0FBQSxJQUFBLEVBQUE7QUFBQSxVQUFBQSxHQUFBLENBQUEsSUFBQUEsR0FBQSxDQUFBLEVBQUE7QUFBQSxNQUFBRixHQUFBLElBQUFFLEtBQUFBLEdBQUEsQ0FBQTtJQUFBO0VBQUE7QUFBQSxXQUFBLEdBQUFGLElBQUE7QUFBQSxXQUFBLEtBQUEsa0JBQUEsV0FBQTtBQUFBLGFBQUFBLEdBQUE7SUFBQSxHQUFBQSxHQUFBO0VBQUE7QUFBQSxXQUFBLEdBQUFBLElBQUE7QUFBQSxRQUFBQyxLQUFBLE1BQUFDLEtBQUFGLEdBQUE7QUFBQSxJQUFBQyxHQUFBLHVCQUFBLFdBQUE7QUFBQSxRQUFBLE1BQUFBLEdBQUEsQ0FBQSxHQUFBQSxHQUFBLElBQUEsTUFBQUEsR0FBQSxJQUFBO0lBQUEsR0FBQUEsR0FBQSxLQUFBQSxHQUFBLE1BQUFDLE1BQUFELEdBQUEscUJBQUEsR0FBQUQsR0FBQSxPQUFBQyxHQUFBLE1BQUFBLEdBQUEsSUFBQUMsSUFBQUQsR0FBQSxJQUFBLEVBQUEsVUFBQSxHQUFBLFlBQUFDLElBQUEsWUFBQSxDQUFBLEdBQUEsYUFBQSxTQUFBRixJQUFBO0FBQUEsV0FBQSxXQUFBLEtBQUFBLEVBQUEsR0FBQUMsR0FBQSxFQUFBLFlBQUFELEVBQUE7SUFBQSxHQUFBLGNBQUEsU0FBQUEsSUFBQUUsSUFBQTtBQUFBLFdBQUEsV0FBQSxLQUFBRixFQUFBLEdBQUFDLEdBQUEsRUFBQSxZQUFBRCxFQUFBO0lBQUEsR0FBQSxhQUFBLFNBQUFBLElBQUE7QUFBQSxXQUFBLFdBQUEsT0FBQSxLQUFBLFdBQUEsUUFBQUEsRUFBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBQyxHQUFBLEVBQUEsWUFBQUQsRUFBQTtJQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLFNBQUFDLEdBQUEsUUFBQSxHQUFBRCxHQUFBLEdBQUEsR0FBQUMsR0FBQSxDQUFBLEtBQUFBLEdBQUEsS0FBQUEsR0FBQSxxQkFBQTtFQUFBO0FBQUEsV0FBQSxHQUFBRCxJQUFBQyxJQUFBO0FBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBRCxJQUFBLEdBQUFDLEdBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxHQUFBLFlBQUEsSUFBQSxLQUFBLE1BQUEsU0FBQUQsSUFBQTtBQUFBLFFBQUFDLEtBQUEsTUFBQUMsS0FBQSxHQUFBRCxHQUFBLEdBQUEsR0FBQUUsS0FBQUYsR0FBQSxFQUFBLElBQUFELEVBQUE7QUFBQSxXQUFBRyxHQUFBLENBQUEsS0FBQSxTQUFBQyxJQUFBO0FBQUEsVUFBQUMsS0FBQSxXQUFBO0FBQUEsUUFBQUosR0FBQSxNQUFBLGVBQUFFLEdBQUEsS0FBQUMsRUFBQSxHQUFBLEdBQUFILElBQUFELElBQUFHLEVBQUEsS0FBQUMsR0FBQTtNQUFBO0FBQUEsTUFBQUYsS0FBQUEsR0FBQUcsRUFBQSxJQUFBQSxHQUFBO0lBQUE7RUFBQSxHQUFBLEdBQUEsVUFBQSxTQUFBLFNBQUFMLElBQUE7QUFBQSxTQUFBLElBQUEsTUFBQSxLQUFBLElBQUEsb0JBQUE7QUFBQSxRQUFBQyxLQUFBLEVBQUFELEdBQUEsUUFBQTtBQUFBLElBQUFBLEdBQUEsZUFBQSxRQUFBQSxHQUFBLFlBQUEsQ0FBQSxLQUFBQyxHQUFBLFFBQUE7QUFBQSxhQUFBQyxLQUFBRCxHQUFBLFFBQUFDLE9BQUEsTUFBQSxFQUFBLElBQUFELEdBQUFDLEVBQUEsR0FBQSxLQUFBLElBQUEsQ0FBQSxHQUFBLEdBQUEsS0FBQSxDQUFBLENBQUE7QUFBQSxXQUFBRixHQUFBO0VBQUEsR0FBQSxHQUFBLFVBQUEscUJBQUEsR0FBQSxVQUFBLG9CQUFBLFdBQUE7QUFBQSxRQUFBQSxLQUFBO0FBQUEsU0FBQSxFQUFBLFFBQUEsU0FBQUMsSUFBQUMsSUFBQTtBQUFBLFNBQUFGLElBQUFFLElBQUFELEVBQUE7SUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBLEtBQUEsZUFBQSxPQUFBLFVBQUEsT0FBQSxPQUFBLE9BQUEsSUFBQSxlQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsU0FBQUQsSUFBQTtBQUFBLFlBQUEsZUFBQSxPQUFBLFVBQUEsWUFBQSxFQUFBLE9BQUEsQ0FBQSxJQUFBLGlCQUFBLGVBQUEsS0FBQUEsRUFBQTtFQUFBO0FBQUEsV0FBQSxHQUFBQSxJQUFBQyxJQUFBQyxJQUFBO0FBQUEsV0FBQSxRQUFBRCxHQUFBLFFBQUFBLEdBQUEsY0FBQSxLQUFBLEVBQUFELElBQUFDLEVBQUEsR0FBQSxjQUFBLE9BQUFDLE1BQUFBLEdBQUEsR0FBQUYsS0FBQUEsR0FBQSxNQUFBO0VBQUE7QUFBQSxJQUFBLFVBQUEsbUJBQUEsQ0FBQSxHQUFBLENBQUEsc0JBQUEsNkJBQUEscUJBQUEsRUFBQSxRQUFBLFNBQUFBLElBQUE7QUFBQSxXQUFBLGVBQUEsRUFBQSxXQUFBQSxJQUFBLEVBQUEsY0FBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGFBQUEsS0FBQSxZQUFBQSxFQUFBO0lBQUEsR0FBQSxLQUFBLFNBQUFDLElBQUE7QUFBQSxhQUFBLGVBQUEsTUFBQUQsSUFBQSxFQUFBLGNBQUEsTUFBQSxVQUFBLE1BQUEsT0FBQUMsR0FBQSxDQUFBO0lBQUEsRUFBQSxDQUFBO0VBQUEsQ0FBQTtBQUFBLE1BQUEsS0FBQSxFQUFBO0FBQUEsV0FBQSxLQUFBO0VBQUE7QUFBQSxXQUFBLEtBQUE7QUFBQSxXQUFBLEtBQUE7RUFBQTtBQUFBLFdBQUEsS0FBQTtBQUFBLFdBQUEsS0FBQTtFQUFBO0FBQUEsSUFBQSxRQUFBLFNBQUFELElBQUE7QUFBQSxXQUFBLE9BQUFBLEtBQUEsR0FBQUEsRUFBQSxJQUFBQSxHQUFBLFVBQUEsSUFBQUEsR0FBQSx1QkFBQSxJQUFBQSxHQUFBLHFCQUFBLElBQUFBLEdBQUEsY0FBQUE7RUFBQTtBQUFBLE1B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QSxLQUFBQSxFQUFBQSxLQUFBQSxLQUFBQSxTQUFBQSxLQUFBQSxJQUFBQSxJQUFBQSxVQUFBQSxTQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxhQUFBQSxHQUFBQSxTQUFBQSxFQUFBQTtJQUFBQSxHQUFBQSxVQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxVQUFBQSxJQUFBQTtBQUFBQSxhQUFBQSxLQUFBQSxvQkFBQUEsS0FBQUEsQ0FBQUEsSUFBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsSUFBQUEsTUFBQUEsS0FBQUEsa0JBQUFBLFdBQUFBO0FBQUFBLGVBQUFBO01BQUFBLEdBQUFBLEtBQUFBLHdCQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxhQUFBQSxNQUFBQSxVQUFBQSxHQUFBQSxTQUFBQSxHQUFBQSxLQUFBQSxDQUFBQTtNQUFBQSxHQUFBQSxLQUFBQSxNQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxHQUFBQSxLQUFBQSxFQUFBQTtBQUFBQSxZQUFBQSxLQUFBQSxHQUFBQTtBQUFBQSxRQUFBQSxHQUFBQSx1QkFBQUEsV0FBQUE7QUFBQUEsVUFBQUEsR0FBQUEsT0FBQUEsR0FBQUEsUUFBQUEsRUFBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsTUFBQUEsR0FBQUEsS0FBQUEsRUFBQUE7UUFBQUE7TUFBQUEsSUFBQUEsR0FBQUE7SUFBQUEsRUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsU0FBQUEsS0FBQUEsR0FBQUEsU0FBQUEsY0FBQUE7RUFBQUEsR0FBQUEsZUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsV0FBQUEsRUFBQUEsS0FBQUEsTUFBQUEsRUFBQUE7RUFBQUEsR0FBQUEsY0FBQUEsU0FBQUEsSUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsRUFBQUEsSUFBQUEsRUFBQUEsTUFBQUEsTUFBQUEsU0FBQUEsSUFBQUE7RUFBQUEsR0FBQUEsV0FBQUEsV0FBQUE7QUFBQUEsV0FBQUEsRUFBQUEsU0FBQUEsS0FBQUE7RUFBQUEsR0FBQUEsVUFBQUEsR0FBQUEsZ0JBQUFBLElBQUFBLGFBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFdBQUFBLE9BQUFBLEdBQUFBLFFBQUFBLE1BQUFBLEdBQUFBLFlBQUFBLE9BQUFBO0VBQUFBLEdBQUFBLFdBQUFBLEdBQUFBLGVBQUFBLElBQUFBLE1BQUFBLFNBQUFBLElBQUFBLElBQUFBO0FBQUFBLGFBQUFBLEdBQUFBLElBQUFBO0FBQUFBLFVBQUFBLEtBQUFBLEtBQUFBLE1BQUFBLEtBQUFBLEtBQUFBLE1BQUFBLEdBQUFBO0FBQUFBLGFBQUFBLENBQUFBLE1BQUFBLE9BQUFBLEdBQUFBLE9BQUFBLEdBQUFBLElBQUFBLElBQUFBLEdBQUFBLFVBQUFBLE9BQUFBLEtBQUFBLENBQUFBLEdBQUFBLEtBQUFBLE9BQUFBLEVBQUFBLEtBQUFBLENBQUFBLEtBQUFBLEdBQUFBLEtBQUFBLE9BQUFBLEVBQUFBO0lBQUFBO0FBQUFBLGFBQUFBLEdBQUFBLElBQUFBO0FBQUFBLGFBQUFBLEtBQUFBLHdCQUFBQSxJQUFBQSxFQUFBQSxJQUFBQSxFQUFBQTtJQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxjQUFBQSxXQUFBQSxHQUFBQSxlQUFBQSxHQUFBQSxRQUFBQSxLQUFBQSxHQUFBQSxVQUFBQSxtQkFBQUEsTUFBQUEsR0FBQUEsTUFBQUEsTUFBQUE7RUFBQUEsR0FBQUEsWUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsYUFBQUEsR0FBQUEsSUFBQUEsSUFBQUE7QUFBQUEsVUFBQUEsS0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUE7QUFBQUEsYUFBQUEsT0FBQUEsR0FBQUEsS0FBQUEsR0FBQUEsS0FBQUEsS0FBQUEsR0FBQUEsT0FBQUEsUUFBQUEsWUFBQUEsRUFBQUEsRUFBQUEsS0FBQUEsYUFBQUEsTUFBQUEsS0FBQUEsSUFBQUE7SUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsV0FBQUEsSUFBQUEsR0FBQUEsU0FBQUEsSUFBQUEsR0FBQUEsVUFBQUEsbUJBQUFBLEdBQUFBLE1BQUFBLE1BQUFBLEdBQUFBLGNBQUFBLGlCQUFBQSxHQUFBQSxlQUFBQSxHQUFBQSxRQUFBQSxLQUFBQTtF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QkEsR0FBYWdaLGdCQUFnQixnQkR6Qnd1bkYsT0FBQSxHQzJCOXZuRjNsQixHQUFNeW1CLHdCQUNUem1CLEdBQU15bUIsc0JBQXNCOVosRUFBQUEsSUFDNUJBO0lBQUFBLEVBQUFBLENBQUFBLENBQUFBLEdBekJaLFNBQ0VqTSxJQUFBQTtBQUFBQSxVQUNBdU4sS0FBQUEsVUFBQUEsU0FBQUEsS0FBQUEsV0FBQUEsVUFBQUEsQ0FBQUEsSUFBQUEsVUFBQUEsQ0FBQUEsSUFBNkNoSztBQUFBQSxhQUV4QixZQUFBLE9BQVZ2RCxLQUNGdU4sR0FBWXRHLFNBQVNvUCxjQUEyQnJXLEVBQUFBLElBR2xEQTtJQUFBQSxFQW9CVVYsR0FBTTBuQixXQUFXMW5CLEdBQU1pTyxXQUFBQSxDQUFBQTtFQUFBQTtBQUFBQSxNQUFBQSxjQUFBQTs7O0FDOUIxQyxjQUFVO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsRUFDZCxDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVk7QUFDeEIsYUFBUyx1QkFBdUIsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLE1BQU07QUFBQSxFQUNqRTtBQUVBLFdBQVMsZUFBZSxvQkFBb0IsRUFBRSxVQUFVO0FBQ3hELFdBQVMsZUFBZSxxQkFBcUIsRUFBRSxVQUFVOyIsCiAgIm5hbWVzIjogWyJFTVBUWV9PQkoiLCAiRU1QVFlfQVJSIiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJlIiwgInQiLCAibiIsICJyIiwgIm8iLCAiaSIsICJjIiwgImEiLCAidSIsICJsIiwgInMiLCAiZiIsICJwIiwgIm0iLCAiaCIsICJ5IiwgIl8iLCAiYiIsICJPIiwgInYiLCAiZCIsICJnIiwgInciLCAiRSIsICJjdXJyZW50SW5kZXgiLCAiY3VycmVudENvbXBvbmVudCIsICJwcmV2UmFmIiwgImN1cnJlbnRIb29rIiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgIm9sZEJlZm9yZURpZmYiLCAib3B0aW9ucyIsICJvbGRCZWZvcmVSZW5kZXIiLCAib2xkQWZ0ZXJEaWZmIiwgImRpZmZlZCIsICJvbGRDb21taXQiLCAib2xkQmVmb3JlVW5tb3VudCIsICJ1bm1vdW50IiwgImdldEhvb2tTdGF0ZSIsICJpbmRleCIsICJ0eXBlIiwgImhvb2tzIiwgIl9fIiwgIl9faCIsICJsZW5ndGgiLCAicHVzaCIsICJ1c2VTdGF0ZSIsICJpbml0aWFsU3RhdGUiLCAidXNlUmVkdWNlciIsICJpbnZva2VPclJldHVybiIsICJyZWR1Y2VyIiwgImluaXQiLCAiaG9va1N0YXRlIiwgIl9yZWR1Y2VyIiwgIm5leHRWYWx1ZSIsICJhY3Rpb24iLCAic2V0U3RhdGUiLCAidXNlRWZmZWN0IiwgImNhbGxiYWNrIiwgImFyZ3MiLCAic3RhdGUiLCAiYXJnc0NoYW5nZWQiLCAidXNlTGF5b3V0RWZmZWN0IiwgInVzZU1lbW8iLCAiZmFjdG9yeSIsICJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwgImZvckVhY2giLCAiY29tcG9uZW50IiwgImludm9rZUNsZWFudXAiLCAiaW52b2tlRWZmZWN0IiwgInZub2RlIiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJyYWYiLCAiZG9uZSIsICJjbGVhclRpbWVvdXQiLCAidGltZW91dCIsICJIQVNfUkFGIiwgImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwgInNldFRpbWVvdXQiLCAiY29tbWl0UXVldWUiLCAic29tZSIsICJmaWx0ZXIiLCAiY2IiLCAiaG9vayIsICJjb21wIiwgIm9sZEFyZ3MiLCAibmV3QXJncyIsICJhcmciLCAiYXNzaWduIiwgIm9iaiIsICJwcm9wcyIsICJzaGFsbG93RGlmZmVycyIsICJpbml0aWFsVmFsdWUiLCAiY3VycmVudCIsICJyZWYiLCAiY3JlYXRlSGFuZGxlIiwgImNvbmNhdCIsICJjb250ZXh0IiwgInByb3ZpZGVyIiwgInN1YiIsICJ2YWx1ZSIsICJmb3JtYXR0ZXIiLCAidXNlRGVidWdWYWx1ZSIsICJPYmplY3QiLCAia2V5cyIsICJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCAiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwgImVudW1lcmFibGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCAiZGVmaW5lUHJvcGVydGllcyIsICJkZWZpbmVQcm9wZXJ0eSIsICJjb25maWd1cmFibGUiLCAid3JpdGFibGUiLCAicHJvdG90eXBlIiwgImhhc093blByb3BlcnR5IiwgImNhbGwiLCAidGhpcyIsICJpbmRleE9mIiwgInByb3BlcnR5SXNFbnVtZXJhYmxlIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiU3ltYm9sIiwgIml0ZXJhdG9yIiwgIm5leHQiLCAicmV0dXJuIiwgIlR5cGVFcnJvciIsICJ0b1N0cmluZyIsICJzbGljZSIsICJjb25zdHJ1Y3RvciIsICJuYW1lIiwgImZyb20iLCAidGVzdCIsICJjcmVhdGVFbGVtZW50IiwgIndpZHRoIiwgImhlaWdodCIsICJjbGFzc05hbWUiLCAic3Ryb2tlV2lkdGgiLCAic3Ryb2tlIiwgImZpbGwiLCAic3Ryb2tlTGluZWNhcCIsICJ2aWV3Qm94IiwgImZpbGxSdWxlIiwgInN0cm9rZUxpbmVqb2luIiwgImZvcndhcmRSZWYiLCAidHJhbnNsYXRpb25zIiwgImJ1dHRvblRleHQiLCAiYnV0dG9uQXJpYUxhYmVsIiwgIlMiLCAibmF2aWdhdG9yIiwgInBsYXRmb3JtIiwgIkZyYWdtZW50IiwgInJlYWN0c1RvS2V5IiwgImNoaWxkcmVuIiwgIndpbmRvdyIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAia2V5IiwgInJlZHVjZSIsICJjb2xsZWN0aW9ucyIsICJpdGVtcyIsICJqIiwgIkkiLCAiUCIsICJzZWdtZW50IiwgInZlcnNpb24iLCAiRCIsICJpdGVtIiwgIl9fYXV0b2NvbXBsZXRlX2luZGV4TmFtZSIsICJwb3NpdGlvbnMiLCAiZmluZEluZGV4IiwgIm9iamVjdElEIiwgInF1ZXJ5SUQiLCAiX19hdXRvY29tcGxldGVfcXVlcnlJRCIsICJhbGdvbGlhU291cmNlIiwgImsiLCAiQyIsICJOIiwgIngiLCAiVCIsICJSIiwgInEiLCAiTCIsICJNIiwgInRvUHJpbWl0aXZlIiwgIlN0cmluZyIsICJIIiwgIm9iamVjdElEcyIsICJGIiwgIm1hcCIsICJVIiwgIlYiLCAiSyIsICJKIiwgIiQiLCAieiIsICJRIiwgIlciLCAiWiIsICJZIiwgIm9uSXRlbXNDaGFuZ2UiLCAiaW5zaWdodHMiLCAiaW5zaWdodHNFdmVudHMiLCAiZXZlbnROYW1lIiwgIlgiLCAidmlld2VkT2JqZWN0SURzIiwgIm9uU2VsZWN0IiwgImNsaWNrZWRPYmplY3RJRHNBZnRlclNlYXJjaCIsICJvbkFjdGl2ZSIsICJpbnNpZ2h0c0NsaWVudCIsICJBbGdvbGlhQW5hbHl0aWNzT2JqZWN0IiwgInF1ZXVlIiwgImRvY3VtZW50IiwgImFzeW5jIiwgInNyYyIsICJvbmVycm9yIiwgImNvbnNvbGUiLCAiZXJyb3IiLCAiYm9keSIsICJhcHBlbmRDaGlsZCIsICJzcGxpdCIsICJOdW1iZXIiLCAiX19hdXRvY29tcGxldGVfYWxnb2xpYUNyZWRlbnRpYWxzIiwgImFwcElkIiwgImFwaUtleSIsICJoZWFkZXJzIiwgInNldFVzZXJUb2tlbiIsICJjbGlja2VkT2JqZWN0SURzIiwgImNsaWNrZWRGaWx0ZXJzIiwgImNvbnZlcnRlZE9iamVjdElEc0FmdGVyU2VhcmNoIiwgImNvbnZlcnRlZE9iamVjdElEcyIsICJjb252ZXJ0ZWRGaWx0ZXJzIiwgInBheWxvYWQiLCAidmlld2VkRmlsdGVycyIsICJpc09wZW4iLCAic3Vic2NyaWJlIiwgInNldENvbnRleHQiLCAiYWxnb2xpYUluc2lnaHRzUGx1Z2luIiwgIl9fYWxnb2xpYVNlYXJjaFBhcmFtZXRlcnMiLCAiY2xpY2tBbmFseXRpY3MiLCAiZXZlbnQiLCAib25TdGF0ZUNoYW5nZSIsICJfX2F1dG9jb21wbGV0ZV9wbHVnaW5PcHRpb25zIiwgIkciLCAidGhlbiIsICJ0ZSIsICJjYXRjaCIsICJmaW5hbGx5IiwgIm9uQ2FuY2VsTGlzdCIsICJjYW5jZWwiLCAiaXNDYW5jZWxlZCIsICJlZSIsICJyZSIsICJuZSIsICJvZSIsICJpZSIsICJhZSIsICJjZSIsICJhY3RpdmVJdGVtSWQiLCAiY29sbGVjdGlvbiIsICJzb3VyY2UiLCAiaXRlbUlucHV0VmFsdWUiLCAiZ2V0SXRlbUlucHV0VmFsdWUiLCAiaXRlbVVybCIsICJnZXRJdGVtVXJsIiwgImxlIiwgInVlIiwgInNlIiwgImZlIiwgInBlIiwgImRlIiwgInZlIiwgImhlIiwgInllIiwgImdlIiwgIlNlIiwgIk9lIiwgIndlIiwgImplIiwgIkllIiwgIlBlIiwgIkRlIiwgIkFlIiwgImtlIiwgIkNlIiwgIk5lIiwgIl9lIiwgInhlIiwgIlRlIiwgIkJvb2xlYW4iLCAiZXhlY3V0ZSIsICJxZSIsICJzZWFyY2hDbGllbnQiLCAicmVxdWVzdGVySWQiLCAicmVxdWVzdHMiLCAiZmluZCIsICJQcm9taXNlIiwgInJlc29sdmUiLCAiYWxsIiwgIk1lIiwgIkhlIiwgIkZlIiwgIkJlIiwgIlVlIiwgIktlIiwgIkplIiwgIiRlIiwgInplIiwgIlFlIiwgIldlIiwgIm5leHRTdGF0ZSIsICJxdWVyeSIsICJyZWZyZXNoIiwgInN0b3JlIiwgImVudmlyb25tZW50IiwgInNldENvbGxlY3Rpb25zIiwgInNldElzT3BlbiIsICJzZXRRdWVyeSIsICJzZXRBY3RpdmVJdGVtSWQiLCAic2V0U3RhdHVzIiwgImRlZmF1bHRBY3RpdmVJdGVtSWQiLCAib3Blbk9uRm9jdXMiLCAiZ2V0U3RhdGUiLCAic2hvdWxkUGFuZWxPcGVuIiwgInBlbmRpbmdSZXF1ZXN0cyIsICJhZGQiLCAic3RhbGxUaHJlc2hvbGQiLCAiZ2V0U291cmNlcyIsICJnZXRJdGVtcyIsICJxdWVyaWVzIiwgInBhcmFtcyIsICJzb3VyY2VJZCIsICJ0cmFuc2Zvcm1SZXNwb25zZSIsICJyZXN1bHRzIiwgImhpdHMiLCAiZmFjZXRIaXRzIiwgImxhYmVsIiwgImNvdW50IiwgIl9oaWdobGlnaHRSZXN1bHQiLCAiaGlnaGxpZ2h0ZWQiLCAib25SZXNvbHZlIiwgImV2ZXJ5IiwgIkpTT04iLCAic3RyaW5naWZ5IiwgInBsdWdpbnMiLCAicmVzaGFwZSIsICJzb3VyY2VzQnlTb3VyY2VJZCIsICJzb3VyY2VzIiwgInZhbHVlcyIsICJaZSIsICJZZSIsICJYZSIsICJHZSIsICJldCIsICJydCIsICJudCIsICJvdCIsICJpdCIsICJhdCIsICJjdCIsICJsdCIsICJ1dCIsICJzdCIsICJmdCIsICJtdCIsICJwdCIsICJ2dCIsICJodCIsICJ5dCIsICJidCIsICJndCIsICJfX2F1dG9jb21wbGV0ZV9tZXRhZGF0YSIsICJ1c2VyQWdlbnRzIiwgInVhIiwgIlN0IiwgIk90IiwgInd0IiwgIkV0IiwgImp0IiwgIkl0IiwgImNvbXBsZXRpb24iLCAic3RhdHVzIiwgIm5leHRBY3RpdmVJdGVtSWQiLCAiZGVidWciLCAiUHQiLCAiRHQiLCAiQXQiLCAia3QiLCAiQ3QiLCAicGxhY2Vob2xkZXIiLCAiYXV0b0ZvY3VzIiwgImlkIiwgIm9uU3VibWl0IiwgIm9uUmVzZXQiLCAiaW5jbHVkZXMiLCAiRXJyb3IiLCAiX19kZWZhdWx0IiwgIm5hdmlnYXRlIiwgImxvY2F0aW9uIiwgIm5hdmlnYXRlTmV3VGFiIiwgIm9wZW4iLCAiZm9jdXMiLCAibmF2aWdhdGVOZXdXaW5kb3ciLCAiZGlzcGF0Y2giLCAicHJldlN0YXRlIiwgImNhbmNlbEFsbCIsICJpc0VtcHR5IiwgIl9fYXV0b2NvbXBsZXRlX2lkIiwgImdldEVudmlyb25tZW50UHJvcHMiLCAiaW5wdXRFbGVtZW50IiwgImZvcm1FbGVtZW50IiwgInBhbmVsRWxlbWVudCIsICJ0YXJnZXQiLCAiY29udGFpbnMiLCAib25Ub3VjaFN0YXJ0IiwgIm9uTW91c2VEb3duIiwgIm9uVG91Y2hNb3ZlIiwgImFjdGl2ZUVsZW1lbnQiLCAiYmx1ciIsICJnZXRSb290UHJvcHMiLCAicm9sZSIsICJnZXRGb3JtUHJvcHMiLCAibm9WYWxpZGF0ZSIsICJwcmV2ZW50RGVmYXVsdCIsICJnZXRMYWJlbFByb3BzIiwgInNvdXJjZUluZGV4IiwgImh0bWxGb3IiLCAiZ2V0SW5wdXRQcm9wcyIsICJtYXhMZW5ndGgiLCAibWF0Y2giLCAidXNlckFnZW50IiwgImF1dG9Db21wbGV0ZSIsICJhdXRvQ29ycmVjdCIsICJhdXRvQ2FwaXRhbGl6ZSIsICJlbnRlcktleUhpbnQiLCAic3BlbGxDaGVjayIsICJvbkNoYW5nZSIsICJjdXJyZW50VGFyZ2V0IiwgIm9uS2V5RG93biIsICJnZXRFbGVtZW50QnlJZCIsICJzY3JvbGxJbnRvVmlld0lmTmVlZGVkIiwgInNjcm9sbEludG9WaWV3IiwgIm1ldGFLZXkiLCAiY3RybEtleSIsICJzaGlmdEtleSIsICJhbHRLZXkiLCAib25Gb2N1cyIsICJvbkJsdXIiLCAib25DbGljayIsICJnZXRQYW5lbFByb3BzIiwgIm9uTW91c2VMZWF2ZSIsICJnZXRMaXN0UHJvcHMiLCAiZ2V0SXRlbVByb3BzIiwgIm9uTW91c2VNb3ZlIiwgIkV2ZW50IiwgIm1ldGFkYXRhIiwgInF1ZXJ5U2VsZWN0b3IiLCAiY29udGVudCIsICJOdCIsICJzZWFyY2hCeVRleHQiLCAiaHJlZiIsICJob3N0bmFtZSIsICJyZWwiLCAieG1sbnMiLCAicngiLCAicnkiLCAiX3QiLCAiYXJpYUxhYmVsIiwgInh0IiwgInNlbGVjdFRleHQiLCAic2VsZWN0S2V5QXJpYUxhYmVsIiwgIm5hdmlnYXRlVGV4dCIsICJuYXZpZ2F0ZVVwS2V5QXJpYUxhYmVsIiwgIm5hdmlnYXRlRG93bktleUFyaWFMYWJlbCIsICJjbG9zZVRleHQiLCAiY2xvc2VLZXlBcmlhTGFiZWwiLCAiVHQiLCAiaGl0IiwgInVybCIsICJSdCIsICJzdHJva2VPcGFjaXR5IiwgInRyYW5zZm9ybSIsICJjeCIsICJjeSIsICJhdHRyaWJ1dGVOYW1lIiwgInRvIiwgImR1ciIsICJyZXBlYXRDb3VudCIsICJxdCIsICJMdCIsICJNdCIsICJIdCIsICJGdCIsICJVdCIsICJCdCIsICJWdCIsICJLdCIsICJKdCIsICIkdCIsICJ0aXRsZVRleHQiLCAiaGVscFRleHQiLCAienQiLCAiUXQiLCAibm9SZXN1bHRzVGV4dCIsICJzdWdnZXN0ZWRRdWVyeVRleHQiLCAicmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0IiwgInJlcG9ydE1pc3NpbmdSZXN1bHRzTGlua1RleHQiLCAic2VhcmNoU3VnZ2VzdGlvbnMiLCAidG9Mb3dlckNhc2UiLCAiaW5wdXRSZWYiLCAiZ2V0TWlzc2luZ1Jlc3VsdHNVcmwiLCAiV3QiLCAiWnQiLCAiWXQiLCAiYXR0cmlidXRlIiwgInRhZ05hbWUiLCAiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCAiX19odG1sIiwgIlh0IiwgInRpdGxlIiwgIkd0IiwgImpvaW4iLCAicmVuZGVySWNvbiIsICJyZW5kZXJBY3Rpb24iLCAib25JdGVtQ2xpY2siLCAiaGl0Q29tcG9uZW50IiwgInVzZVJlZiIsICJfX2RvY3NlYXJjaF9wYXJlbnQiLCAib25UcmFuc2l0aW9uRW5kIiwgImhpZXJhcmNoeSIsICJydW5EZWxldGVUcmFuc2l0aW9uIiwgInJ1bkZhdm9yaXRlVHJhbnNpdGlvbiIsICJlciIsICJ0ciIsICJyciIsICJidXR0b24iLCAibnIiLCAib3IiLCAiaXIiLCAiUmVnRXhwIiwgImFyIiwgImx2bDAiLCAicmVwbGFjZSIsICJjciIsICJyZXN1bHRzRm9vdGVyQ29tcG9uZW50IiwgImxyIiwgInVyIiwgInJlY2VudFNlYXJjaGVzVGl0bGUiLCAibm9SZWNlbnRTZWFyY2hlc1RleHQiLCAic2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlIiwgInJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlIiwgImZhdm9yaXRlU2VhcmNoZXNUaXRsZSIsICJyZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlIiwgImhhc0NvbGxlY3Rpb25zIiwgImRpc2FibGVVc2VyUGVyc29uYWxpemF0aW9uIiwgInN0b3BQcm9wYWdhdGlvbiIsICJmYXZvcml0ZVNlYXJjaGVzIiwgInJlY2VudFNlYXJjaGVzIiwgInJlbW92ZSIsICJzciIsICJmciIsICJtZW1vIiwgImVycm9yU2NyZWVuIiwgIm5vUmVzdWx0c1NjcmVlbiIsICJzdGFydFNjcmVlbiIsICJtciIsICJwciIsICJyZXNldEJ1dHRvblRpdGxlIiwgInJlc2V0QnV0dG9uQXJpYUxhYmVsIiwgImNhbmNlbEJ1dHRvblRleHQiLCAiY2FuY2VsQnV0dG9uQXJpYUxhYmVsIiwgInNlYXJjaElucHV0TGFiZWwiLCAiaXNGcm9tU2VsZWN0aW9uIiwgInNlbGVjdCIsICJoaWRkZW4iLCAib25DbG9zZSIsICJkciIsICJociIsICJsaW1pdCIsICJsb2NhbFN0b3JhZ2UiLCAic2V0SXRlbSIsICJyZW1vdmVJdGVtIiwgImdldEl0ZW0iLCAicGFyc2UiLCAiX3NuaXBwZXRSZXN1bHQiLCAic3BsaWNlIiwgInVuc2hpZnQiLCAiZ2V0QWxsIiwgInlyIiwgImdldCIsICJtaXNzIiwgInRpbWVUb0xpdmUiLCAiZnJvbUVudHJpZXMiLCAiZW50cmllcyIsICJ0aW1lc3RhbXAiLCAiRGF0ZSIsICJnZXRUaW1lIiwgInNldCIsICJkZWxldGUiLCAiY2xlYXIiLCAiYnIiLCAiY2FjaGVzIiwgInNoaWZ0IiwgImdyIiwgInNlcmlhbGl6YWJsZSIsICJTciIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJPciIsICJ3ciIsICJlbmNvZGVVUklDb21wb25lbnQiLCAianIiLCAiZGF0YSIsICJxdWVyeVBhcmFtZXRlcnMiLCAiY2FjaGVhYmxlIiwgIklyIiwgIlJlYWQiLCAiV3JpdGUiLCAiQW55IiwgImtyIiwgImxhc3RVcGRhdGUiLCAibm93IiwgIkNyIiwgInByb3RvY29sIiwgImFjY2VwdCIsICJfciIsICJUciIsICJtZXRob2QiLCAicG9wIiwgIm1lc3NhZ2UiLCAidHJhbnNwb3J0ZXJTdGFja1RyYWNlIiwgIk1yIiwgInFyIiwgInBhdGgiLCAiY29ubmVjdFRpbWVvdXQiLCAidGltZW91dHMiLCAiY29ubmVjdCIsICJyZXNwb25zZVRpbWVvdXQiLCAicmVxdWVzdCIsICJyZXNwb25zZSIsICJob3N0IiwgInRyaWVzTGVmdCIsICJvblN1Y2Nlc3MiLCAib25SZXRyeSIsICJpc1RpbWVkT3V0IiwgImxvZ2dlciIsICJpbmZvIiwgIkhyIiwgImhvc3RzQ2FjaGUiLCAib25GYWlsIiwgInJlcXVlc3RlciIsICJzZW5kIiwgImdldFRpbWVvdXQiLCAic3RhdGVsZXNzSG9zdHMiLCAiX3RvQ29uc3VtYWJsZUFycmF5IiwgInJldmVyc2UiLCAiUnIiLCAiTHIiLCAiY2hhckF0IiwgInN1YnN0ciIsICJCciIsICJ0cmFuc3BvcnRlciIsICJyZWFkIiwgIndyaXRlIiwgIlVyIiwgImluZGV4TmFtZSIsICJtZXRob2RzIiwgIlZyIiwgIktyIiwgImZhY2V0TmFtZSIsICJmYWNldFF1ZXJ5IiwgInNlYXJjaEZvckZhY2V0VmFsdWVzIiwgInpyIiwgIkpyIiwgInF1ZXJ5TGFuZ3VhZ2VzIiwgIiRyIiwgIllyIiwgIlhNTEh0dHBSZXF1ZXN0IiwgInNldFJlcXVlc3RIZWFkZXIiLCAiYWJvcnQiLCAib25yZWFkeXN0YXRlY2hhbmdlIiwgInJlYWR5U3RhdGUiLCAiT1BFTkVEIiwgInJlc3BvbnNlVGV4dCIsICJvbmxvYWQiLCAicmVzcG9uc2VzQ2FjaGUiLCAicmVxdWVzdHNDYWNoZSIsICJhdXRoTW9kZSIsICJob3N0cyIsICJtYXBwZWRSZXF1ZXN0T3B0aW9ucyIsICJyZWplY3QiLCAiYWRkQWxnb2xpYUFnZW50IiwgImNsZWFyQ2FjaGUiLCAic2VhcmNoIiwgIm11bHRpcGxlUXVlcmllcyIsICJtdWx0aXBsZVNlYXJjaEZvckZhY2V0VmFsdWVzIiwgImN1c3RvbVJlcXVlc3QiLCAiaW5pdEluZGV4IiwgImZpbmRBbnN3ZXJzIiwgIkdyIiwgImVuIiwgInNlYXJjaFBhcmFtZXRlcnMiLCAibWF4UmVzdWx0c1Blckdyb3VwIiwgInRyYW5zZm9ybUl0ZW1zIiwgImluaXRpYWxTY3JvbGxZIiwgInRyYW5zZm9ybVNlYXJjaENsaWVudCIsICJBIiwgImluaXRpYWxRdWVyeSIsICJmb290ZXIiLCAic2VhcmNoQm94IiwgIkIiLCAiZ2V0U2VsZWN0aW9uIiwgInVzZUNhbGxiYWNrIiwgImF0dHJpYnV0ZXNUb1JldHJpZXZlIiwgImF0dHJpYnV0ZXNUb1NuaXBwZXQiLCAic25pcHBldEVsbGlwc2lzVGV4dCIsICJoaWdobGlnaHRQcmVUYWciLCAiaGlnaGxpZ2h0UG9zdFRhZyIsICJoaXRzUGVyUGFnZSIsICJuYkhpdHMiLCAibHZsMSIsICJmbGF0IiwgImNvbnRhaW5lciIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImNsYXNzTGlzdCIsICJzY3JvbGxUbyIsICJtYXRjaE1lZGlhIiwgIm1hdGNoZXMiLCAic2Nyb2xsVG9wIiwgImlubmVySGVpZ2h0IiwgInN0eWxlIiwgInNldFByb3BlcnR5IiwgInRhYkluZGV4IiwgInJuIiwgIm9uT3BlbiIsICJvbklucHV0IiwgInNlYXJjaEJ1dHRvblJlZiIsICJrZXlDb2RlIiwgImlzQ29udGVudEVkaXRhYmxlIiwgImZyb21DaGFyQ29kZSIsICJzY3JvbGxZIiwgIm1vZGFsIiwgImRvY3NlYXJjaCIsICJyZW5kZXIiLCAiUmVhY3QiLCAiRG9jU2VhcmNoIl0KfQo=
