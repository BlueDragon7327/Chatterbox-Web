"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Use your Render backend URL here:
var BACKEND_URL = "https://cb-backend-vjli.onrender.com";
var socket = io(BACKEND_URL);

// Utility functions to handle cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  document.cookie = "".concat(cname, "=").concat(cvalue, ";expires=").concat(d.toUTCString(), ";path=/");
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  var _iterator = _createForOfIteratorHelper(ca),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var c = _step.value;
      c = c.trim();
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return "";
}
function eraseCookie(cname) {
  document.cookie = "".concat(cname, "=; Max-Age=-99999999;path=/");
}
function App() {
  // Authentication state
  var _React$useState = React.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    username = _React$useState2[0],
    setUsername = _React$useState2[1];
  var _React$useState3 = React.useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    email = _React$useState4[0],
    setEmail = _React$useState4[1];
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    password = _React$useState6[0],
    setPassword = _React$useState6[1];
  var _React$useState7 = React.useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    token = _React$useState8[0],
    setToken = _React$useState8[1];
  var _React$useState9 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    loggedIn = _React$useState10[0],
    setLoggedIn = _React$useState10[1];
  var _React$useState11 = React.useState(''),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    error = _React$useState12[0],
    setError = _React$useState12[1];

  // DM-related state
  var _React$useState13 = React.useState({}),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    dmConversations = _React$useState14[0],
    setDmConversations = _React$useState14[1]; // { partner: [messages] }
  var _React$useState15 = React.useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    selectedConversation = _React$useState16[0],
    setSelectedConversation = _React$useState16[1];
  var _React$useState17 = React.useState(''),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    messageInput = _React$useState18[0],
    setMessageInput = _React$useState18[1];

  // New DM form state
  var _React$useState19 = React.useState(''),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    newDMRecipient = _React$useState20[0],
    setNewDMRecipient = _React$useState20[1];

  // Active tab: "messages", "newDM", or "account"
  var _React$useState21 = React.useState('messages'),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    activeTab = _React$useState22[0],
    setActiveTab = _React$useState22[1];
  var _React$useState23 = React.useState('account'),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    settingsTab = _React$useState24[0],
    setSettingsTab = _React$useState24[1];

  // Refs for scrolling messages area
  var messagesEndRef = React.useRef(null);
  var messagesContainerRef = React.useRef(null);

  // Add new profile-related state
  var _React$useState25 = React.useState({
      avatar: '',
      aboutMe: '',
      status: 'online',
      customStatus: '',
      backgroundColor: '#7C3AED'
    }),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    profile = _React$useState26[0],
    setProfile = _React$useState26[1];
  var _React$useState27 = React.useState(false),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    editingProfile = _React$useState28[0],
    setEditingProfile = _React$useState28[1];
  var fileInputRef = React.useRef();

  // Add new profile-related states for DM list and selected conversation
  var _React$useState29 = React.useState({}),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    dmProfiles = _React$useState30[0],
    setDmProfiles = _React$useState30[1];
  var _React$useState31 = React.useState(null),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    selectedProfile = _React$useState32[0],
    setSelectedProfile = _React$useState32[1];

  // Add new state (partnerTyping) plus a ref (typingTimeoutRef) to manage the typing indicator.
  var _React$useState33 = React.useState(""),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    partnerTyping = _React$useState34[0],
    setPartnerTyping = _React$useState34[1];
  var typingTimeoutRef = React.useRef(null);

  // Add themes preset object and new state for tracking the current theme
  var themes = {
    "default": {
      '--primary-color': '#7C3AED',
      '--primary-light': '#8B5CF6',
      '--bg-secondary': '#1F2937',
      '--bg-tertiary': '#374151',
      '--accent-color': '#4ADE80'
    },
    sunrise: {
      '--primary-color': '#FF4500',
      '--primary-light': '#FF6347',
      '--bg-secondary': 'linear-gradient(135deg, #FF5F6D, #FFC371)',
      '--bg-tertiary': '#FF4500',
      '--accent-color': '#FFD700'
    },
    aurora: {
      '--primary-color': '#00BFFF',
      '--primary-light': '#1E90FF',
      '--bg-secondary': 'linear-gradient(135deg, #1FA2FF, #12D8FA, #A6FFCB)',
      '--bg-tertiary': '#1E90FF',
      '--accent-color': '#00FF7F'
    },
    nebula: {
      '--primary-color': '#8A2BE2',
      '--primary-light': '#9370DB',
      '--bg-secondary': 'linear-gradient(135deg, #654ea3, #eaafc8)',
      '--bg-tertiary': '#8A2BE2',
      '--accent-color': '#FFD700'
    },
    cyberpunk: {
      '--primary-color': '#FF00FF',
      '--primary-light': '#EE82EE',
      '--bg-secondary': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      '--bg-tertiary': '#333',
      '--accent-color': '#00FFFF'
    }
  };
  var _React$useState35 = React.useState('default'),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    currentTheme = _React$useState36[0],
    setCurrentTheme = _React$useState36[1];
  function applyTheme(themeName) {
    var theme = themes[themeName];
    for (var key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
    setCurrentTheme(themeName);
  }

  // Add a new state for DM ordering:
  var _React$useState37 = React.useState([]),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    dmOrder = _React$useState38[0],
    setDmOrder = _React$useState38[1];
  // NEW: Track unread DM status; true means unread.
  var _React$useState39 = React.useState({}),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    unreadDM = _React$useState40[0],
    setUnreadDM = _React$useState40[1];

  // Add new state for mobile view:
  var _React$useState41 = React.useState("dmList"),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    mobileView = _React$useState42[0],
    setMobileView = _React$useState42[1];

  // Auto-login from cookies on mount
  React.useEffect(function () {
    var savedUsername = getCookie("username");
    var savedToken = getCookie("token");
    if (savedUsername && savedToken) {
      setUsername(savedUsername);
      setToken(savedToken);
      setLoggedIn(true);
      socket.emit('registerUser', savedUsername);
    }
  }, []);

  // Fetch DM list upon login
  React.useEffect(function () {
    if (loggedIn && username) {
      socket.emit('registerUser', username);
      axios.get("".concat(BACKEND_URL, "/api/dmList"), {
        params: {
          user: username
        }
      }).then(function (response) {
        setDmConversations(function (prev) {
          var convs = _objectSpread({}, prev);
          response.data.forEach(function (partner) {
            if (!convs[partner]) {
              convs[partner] = [];
            }
          });
          // Initialize dmOrder with the DM partners order
          setDmOrder(response.data);
          return convs;
        });
      })["catch"](function (err) {
        return console.error("Error fetching DM list", err);
      });
    }
  }, [loggedIn, username]);

  // Fetch profile upon login
  React.useEffect(function () {
    if (loggedIn && username) {
      axios.get("".concat(BACKEND_URL, "/api/profile/").concat(username)).then(function (response) {
        return setProfile(response.data.profile);
      })["catch"](console.error);
    }
  }, [loggedIn, username]);

  // When DM conversations update, fetch each partner's profile if not already fetched
  React.useEffect(function () {
    Object.keys(dmConversations).forEach(function (partner) {
      if (partner !== username && !dmProfiles[partner]) {
        axios.get("".concat(BACKEND_URL, "/api/profile/").concat(partner)).then(function (response) {
          setDmProfiles(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, partner, response.data.profile));
          });
        })["catch"](console.error);
      }
    });
  }, [dmConversations, username]);

  // When selectedConversation changes, fetch that user's profile for the right sidebar
  React.useEffect(function () {
    if (selectedConversation && selectedConversation !== username) {
      axios.get("".concat(BACKEND_URL, "/api/profile/").concat(selectedConversation)).then(function (response) {
        return setSelectedProfile(response.data.profile);
      })["catch"](function (err) {
        return setSelectedProfile(null);
      });
    } else {
      setSelectedProfile(null);
    }
  }, [selectedConversation, username]);

  // Reset scroll and fetch conversation history when a conversation is selected
  React.useEffect(function () {
    if (selectedConversation && username) {
      // Reset scroll position for the new conversation
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = 0;
      }
      axios.get("".concat(BACKEND_URL, "/api/messages"), {
        params: {
          user1: username,
          user2: selectedConversation
        }
      }).then(function (response) {
        setDmConversations(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, selectedConversation, response.data));
        });

        // After loading messages, scroll to bottom
        setTimeout(function () {
          if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }, 100);
      })["catch"](function (error) {
        return console.error('Error fetching conversation:', error);
      });
    }
  }, [selectedConversation, username]);

  // Auto-scroll logic for new messages (only if user is near the bottom)
  React.useEffect(function () {
    if (!selectedConversation) return;
    var container = messagesContainerRef.current;
    if (container && messagesEndRef.current) {
      var isUserNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
      if (isUserNearBottom) {
        messagesEndRef.current.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, [dmConversations, selectedConversation]);

  // Listen for incoming messages via socket
  React.useEffect(function () {
    socket.on('receiveMessage', function (data) {
      if (data.sender === username || data.recipient === username) {
        var partner = data.sender === username ? data.recipient : data.sender;
        // Update conversation
        setDmConversations(function (prev) {
          var conv = prev[partner] ? _toConsumableArray(prev[partner]) : [];
          conv.push(data);
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, partner, conv));
        });
        // Play notification sound if the DM is from someone else
        if (data.sender !== username) {
          new Audio('notification.mp3').play()["catch"](function (err) {
            return console.error("Audio play error:", err);
          });
          if (Notification.permission === "granted") {
            new Notification("New DM from " + data.sender, {
              body: "Click to view the conversation."
            });
          } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
              if (permission === "granted") {
                new Notification("New DM from " + data.sender, {
                  body: "Click to view the conversation."
                });
              }
            });
          }
          // Mark as unread if this conversation is not currently open.
          if (selectedConversation !== partner) {
            setUnreadDM(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, partner, true));
            });
          }
        }
        // Reorder dmOrder so that 'partner' goes to the top
        setDmOrder(function (prevOrder) {
          var filtered = prevOrder.filter(function (p) {
            return p !== partner;
          });
          return [partner].concat(_toConsumableArray(filtered));
        });
      }
    });
    return function () {
      socket.off('receiveMessage');
    };
  }, [loggedIn, username]);

  // Add socket listeners for typing events:
  React.useEffect(function () {
    socket.on("typing", function (data) {
      console.log("Received typing event", data);
      // Only set typing indicator if the typing sender is your currently selected conversation.
      if (data.recipient === username && data.sender === selectedConversation) {
        setPartnerTyping(data.sender);
      }
    });
    socket.on("stopTyping", function (data) {
      console.log("Received stopTyping event", data);
      if (data.recipient === username && data.sender === selectedConversation) {
        setPartnerTyping("");
      }
    });
    return function () {
      socket.off("typing");
      socket.off("stopTyping");
    };
  }, [username, selectedConversation]);
  var _React$useState43 = React.useState([]),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    onlineUsers = _React$useState44[0],
    setOnlineUsers = _React$useState44[1];
  React.useEffect(function () {
    socket.on('onlineUsers', function (list) {
      setOnlineUsers(list);
    });
    return function () {
      socket.off('onlineUsers');
    };
  }, []);
  var handleRegister = function handleRegister() {
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }
    axios.post("".concat(BACKEND_URL, "/api/register"), {
      username: username,
      email: email,
      password: password
    }).then(function (response) {
      return alert(response.data.message);
    })["catch"](function (err) {
      var _err$response;
      return setError(((_err$response = err.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.error) || 'Registration error');
    });
  };
  var handleLogin = function handleLogin() {
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    axios.post("".concat(BACKEND_URL, "/api/login"), {
      email: email,
      password: password
    }).then(function (response) {
      var loggedUsername = response.data.username || username;
      setToken(response.data.token);
      setLoggedIn(true);
      setUsername(loggedUsername);
      socket.emit('registerUser', loggedUsername);
      // Save login details to cookies for 7 days
      setCookie("username", loggedUsername, 7);
      setCookie("token", response.data.token, 7);
    })["catch"](function (err) {
      var _err$response2;
      return setError(((_err$response2 = err.response) === null || _err$response2 === void 0 || (_err$response2 = _err$response2.data) === null || _err$response2 === void 0 ? void 0 : _err$response2.message) || 'Login error');
    });
  };
  var handleLogout = function handleLogout() {
    setUsername("");
    setToken("");
    setLoggedIn(false);
    eraseCookie("username");
    eraseCookie("token");
    setActiveTab('messages');
  };
  var handleSendMessage = function handleSendMessage() {
    if (!selectedConversation) {
      alert("Select a conversation first");
      return;
    }
    if (selectedConversation === username) {
      alert("You cannot send messages to yourself");
      return;
    }
    if (selectedConversation && username) {
      clearTimeout(typingTimeoutRef.current);
      socket.emit("stopTyping", {
        sender: username,
        recipient: selectedConversation
      });
    }
    if (messageInput.trim() !== '') {
      var dmData = {
        sender: username,
        recipient: selectedConversation,
        message: messageInput
      };
      socket.emit('sendMessage', dmData);
      setMessageInput('');

      // Force scroll to bottom after sending message
      setTimeout(function () {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  };
  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // New function: handleTyping on message input change
  var handleTyping = function handleTyping() {
    if (selectedConversation && username) {
      console.log("Emitting typing event", {
        sender: username,
        recipient: selectedConversation
      });
      socket.emit("typing", {
        sender: username,
        recipient: selectedConversation
      });
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(function () {
        console.log("Emitting stopTyping event", {
          sender: username,
          recipient: selectedConversation
        });
        socket.emit("stopTyping", {
          sender: username,
          recipient: selectedConversation
        });
      }, 2000);
    }
  };

  // New function: handle file upload via axios.
  var handleFileUpload = function handleFileUpload(e) {
    var file = e.target.files[0];
    if (!file) return;
    var formData = new FormData();
    formData.append('file', file);
    axios.post("".concat(BACKEND_URL, "/api/upload"), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (response) {
      var fileUrl = response.data.fileUrl;
      // Optionally send a DM with file URL as attachment
      if (selectedConversation && username) {
        var dmData = {
          sender: username,
          recipient: selectedConversation,
          message: "File: ".concat(fileUrl)
        };
        socket.emit('sendMessage', dmData);
      }
    })["catch"](function (err) {
      return console.error("File upload error:", err);
    });
  };
  var handleStartNewDM = function handleStartNewDM() {
    if (newDMRecipient.trim() === username) {
      alert("You cannot start a DM with yourself");
      return;
    }
    if (newDMRecipient.trim() !== '') {
      // Verify user exists first
      axios.get("".concat(BACKEND_URL, "/api/profile/").concat(newDMRecipient)).then(function (response) {
        setDmConversations(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, newDMRecipient, []));
        });
        setSelectedConversation(newDMRecipient);
        setActiveTab('messages');
        setNewDMRecipient('');
      })["catch"](function (error) {
        alert("User not found!");
      });
    }
  };
  var selectConversation = function selectConversation(partner) {
    if (selectedConversation !== partner) {
      // Clear any existing typing indicator when switching
      setPartnerTyping("");
      setSelectedConversation(partner);
      setActiveTab('messages');
      setMessageInput('');
      // Mark conversation as read:
      setUnreadDM(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, partner, false));
      });
      if (window.innerWidth <= 768) {
        setMobileView("chat");
      }
    }
  };
  var handleProfileUpdate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios.put("".concat(BACKEND_URL, "/api/profile/").concat(username), {
              profile: profile
            });
          case 3:
            response = _context.sent;
            setProfile(response.data.profile);
            setEditingProfile(false);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error('Error updating profile:', _context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function handleProfileUpdate() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleAvatarChange = function handleAvatarChange(e) {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setProfile(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            avatar: reader.result
          });
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // If not logged in, show registration/login overlay
  if (!loggedIn) {
    return /*#__PURE__*/React.createElement("div", {
      id: "register-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "register-card"
    }, /*#__PURE__*/React.createElement("h2", null, "Chatterbox"), error && /*#__PURE__*/React.createElement("div", {
      className: "error"
    }, error), /*#__PURE__*/React.createElement("input", {
      id: "username",
      type: "text",
      placeholder: "Username",
      value: username,
      onChange: function onChange(e) {
        return setUsername(e.target.value);
      }
    }), /*#__PURE__*/React.createElement("input", {
      id: "username",
      type: "email",
      placeholder: "Email",
      value: email,
      onChange: function onChange(e) {
        return setEmail(e.target.value);
      }
    }), /*#__PURE__*/React.createElement("input", {
      id: "username",
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: function onChange(e) {
        return setPassword(e.target.value);
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "register-button",
      onClick: handleRegister
    }, "Register"), /*#__PURE__*/React.createElement("button", {
      className: "register-button",
      onClick: handleLogin
    }, "Login")));
  }

  // Main UI
  if (window.innerWidth <= 768) {
    return /*#__PURE__*/React.createElement("div", {
      id: "app"
    }, mobileView === "dmList" && /*#__PURE__*/React.createElement("div", {
      id: "mobile-dm-list",
      style: {
        padding: '1rem'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        marginBottom: '1rem'
      }
    }, "DM List"), dmOrder.map(function (partner) {
      var _dmProfiles$partner;
      return /*#__PURE__*/React.createElement("div", {
        key: partner,
        className: "dm-user ".concat(selectedConversation === partner ? 'active' : ''),
        onClick: function onClick() {
          return selectConversation(partner);
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: ((_dmProfiles$partner = dmProfiles[partner]) === null || _dmProfiles$partner === void 0 ? void 0 : _dmProfiles$partner.avatar) || 'default-avatar.png',
        alt: "avatar",
        className: "user-avatar"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: unreadDM[partner] ? 'bold' : 'normal'
        }
      }, partner), onlineUsers.includes(partner) && /*#__PURE__*/React.createElement("span", {
        className: "online-indicator"
      }));
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMobileView("chat");
      },
      style: {
        marginTop: '1rem',
        padding: '0.5rem 1rem'
      }
    }, "Open Chat (select a DM)")), mobileView === "chat" && /*#__PURE__*/React.createElement("div", {
      id: "mobile-chat",
      style: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1rem',
        borderBottom: '1px solid #444',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'var(--bg-secondary)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMobileView("dmList");
      },
      style: {
        marginRight: '1rem',
        padding: '0.5rem 1rem'
      }
    }, "Back"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '1.25rem'
      }
    }, selectedConversation || "No Conversation Selected")), /*#__PURE__*/React.createElement("div", {
      id: "mobile-chat-body",
      ref: messagesContainerRef,
      style: {
        marginTop: '70px',
        flex: 1,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      id: "messages"
    }, selectedConversation && dmConversations[selectedConversation] && dmConversations[selectedConversation].length > 0 ? dmConversations[selectedConversation].map(function (msg, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "message ".concat(msg.sender === username ? 'sent' : 'received')
      }, /*#__PURE__*/React.createElement("div", {
        className: "message-header"
      }, msg.sender), /*#__PURE__*/React.createElement("div", {
        className: "message-body"
      }, msg.message.startsWith("File:") ? /*#__PURE__*/React.createElement("a", {
        href: msg.message.slice(5).trim(),
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Download File") : msg.message));
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: '2rem',
        color: 'var(--text-secondary)'
      }
    }, selectedConversation ? 'No messages yet. Say hello!' : 'Select a conversation to start chatting'), /*#__PURE__*/React.createElement("div", {
      ref: messagesEndRef
    }))), /*#__PURE__*/React.createElement("div", {
      id: "message-input",
      style: {
        padding: '1rem',
        borderTop: '1px solid #444'
      }
    }, partnerTyping && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        margin: '0.25rem 1rem'
      }
    }, partnerTyping, " is typing..."), /*#__PURE__*/React.createElement("div", {
      className: "input-wrapper",
      style: {
        display: 'flex',
        gap: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: "currentMessage",
      type: "text",
      placeholder: selectedConversation ? "Message @" + selectedConversation : "Select a conversation first",
      value: messageInput,
      onChange: function onChange(e) {
        setMessageInput(e.target.value);
        handleTyping();
      },
      onKeyPress: handleKeyPress,
      disabled: !selectedConversation,
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "send-button",
      onClick: handleSendMessage,
      disabled: !selectedConversation,
      style: {
        padding: '0.5rem 1rem'
      }
    }, "Send"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return document.getElementById('fileUpload').click();
      },
      style: {
        padding: '0.5rem 1rem'
      }
    }, "Upload File"), /*#__PURE__*/React.createElement("input", {
      id: "fileUpload",
      type: "file",
      style: {
        display: 'none'
      },
      onChange: handleFileUpload
    })))));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      id: "app"
    }, /*#__PURE__*/React.createElement("div", {
      id: "sidebar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "brand"
    }, /*#__PURE__*/React.createElement("i", {
      className: "icon"
    }, "\uD83D\uDCAC"), /*#__PURE__*/React.createElement("h2", null, "Chatterbox")), /*#__PURE__*/React.createElement("div", {
      id: "dm-list"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-title"
    }, "Direct Messages"), dmOrder.map(function (partner) {
      var _dmProfiles$partner2;
      return /*#__PURE__*/React.createElement("div", {
        key: partner,
        className: "dm-user ".concat(selectedConversation === partner ? 'active' : ''),
        onClick: function onClick() {
          return selectConversation(partner);
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: ((_dmProfiles$partner2 = dmProfiles[partner]) === null || _dmProfiles$partner2 === void 0 ? void 0 : _dmProfiles$partner2.avatar) || 'default-avatar.png',
        alt: "avatar",
        className: "user-avatar"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: unreadDM[partner] ? 'bold' : 'normal'
        }
      }, partner), onlineUsers.includes(partner) && /*#__PURE__*/React.createElement("span", {
        className: "online-indicator"
      }));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      id: "main",
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      id: "tabs"
    }, /*#__PURE__*/React.createElement("button", {
      className: activeTab === 'messages' ? 'active' : '',
      onClick: function onClick() {
        return setActiveTab('messages');
      }
    }, "Messages"), /*#__PURE__*/React.createElement("button", {
      className: activeTab === 'newDM' ? 'active' : '',
      onClick: function onClick() {
        return setActiveTab('newDM');
      }
    }, "New DM"), /*#__PURE__*/React.createElement("button", {
      className: activeTab === 'profile' ? 'active' : '',
      onClick: function onClick() {
        return setActiveTab('profile');
      }
    }, "Profile"), /*#__PURE__*/React.createElement("button", {
      className: activeTab === 'settings' ? 'active' : '',
      onClick: function onClick() {
        return setActiveTab('settings');
      }
    }, "Settings")), /*#__PURE__*/React.createElement("div", {
      id: "messages-section",
      className: activeTab === 'messages' ? 'active' : ''
    }, /*#__PURE__*/React.createElement("div", {
      id: "chat-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "current-user"
    }, selectedConversation && /*#__PURE__*/React.createElement("div", {
      className: "user-avatar"
    }, /*#__PURE__*/React.createElement("img", {
      src: selectedProfile && selectedProfile.avatar ? selectedProfile.avatar : 'default-avatar.png',
      alt: selectedConversation,
      style: {
        width: '32px',
        height: '32px',
        borderRadius: '50%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "user-info"
    }, /*#__PURE__*/React.createElement("h3", null, selectedConversation || 'No Conversation Selected'), selectedConversation && /*#__PURE__*/React.createElement("p", null, "Chatting with ", selectedConversation)))), /*#__PURE__*/React.createElement("div", {
      id: "messages-container",
      ref: messagesContainerRef
    }, /*#__PURE__*/React.createElement("div", {
      id: "messages"
    }, selectedConversation && dmConversations[selectedConversation] && dmConversations[selectedConversation].length > 0 ? dmConversations[selectedConversation].map(function (msg, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "message ".concat(msg.sender === username ? 'sent' : 'received')
      }, /*#__PURE__*/React.createElement("div", {
        className: "message-header"
      }, msg.sender), /*#__PURE__*/React.createElement("div", {
        className: "message-body"
      }, msg.message.startsWith("File:") ? /*#__PURE__*/React.createElement("a", {
        href: msg.message.slice(5).trim(),
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Download File") : msg.message));
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: '2rem',
        color: 'var(--text-secondary)'
      }
    }, selectedConversation ? 'No messages yet. Say hello!' : 'Select a conversation to start chatting'), /*#__PURE__*/React.createElement("div", {
      ref: messagesEndRef
    }))), /*#__PURE__*/React.createElement("div", {
      id: "message-input"
    }, partnerTyping && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        margin: '0.25rem 1rem'
      }
    }, partnerTyping, " is typing..."), /*#__PURE__*/React.createElement("div", {
      className: "input-wrapper"
    }, /*#__PURE__*/React.createElement("input", {
      id: "currentMessage",
      type: "text",
      placeholder: selectedConversation ? "Message @" + selectedConversation : "Select a conversation first",
      value: messageInput,
      onChange: function onChange(e) {
        setMessageInput(e.target.value);
        handleTyping();
      },
      onKeyPress: handleKeyPress,
      disabled: !selectedConversation
    }), /*#__PURE__*/React.createElement("button", {
      className: "send-button",
      onClick: handleSendMessage,
      disabled: !selectedConversation
    }, "Send"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return document.getElementById('fileUpload').click();
      },
      style: {
        marginLeft: '0.5rem',
        padding: '0.5rem 1rem'
      }
    }, "Upload File"), /*#__PURE__*/React.createElement("input", {
      id: "fileUpload",
      type: "file",
      style: {
        display: 'none'
      },
      onChange: handleFileUpload
    })))), /*#__PURE__*/React.createElement("div", {
      id: "dm-section",
      className: activeTab === 'newDM' ? 'active' : ''
    }, /*#__PURE__*/React.createElement("div", {
      className: "send-dm-wrapper"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Recipient's username",
      value: newDMRecipient,
      onChange: function onChange(e) {
        return setNewDMRecipient(e.target.value);
      },
      onKeyPress: function onKeyPress(e) {
        return e.key === 'Enter' && handleStartNewDM();
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: handleStartNewDM
    }, "Start DM"))), /*#__PURE__*/React.createElement("div", {
      id: "profile-section",
      className: activeTab === 'profile' ? 'active' : ''
    }, /*#__PURE__*/React.createElement("div", {
      className: "account-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "account-info"
    }, /*#__PURE__*/React.createElement("h2", null, "Profile Info"), /*#__PURE__*/React.createElement("p", null, "Logged in as: ", username)), /*#__PURE__*/React.createElement("div", {
      className: "profile-update"
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-avatar-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: profile.avatar || 'default-avatar.png',
      alt: "Profile",
      className: "profile-avatar"
    }), editingProfile && /*#__PURE__*/React.createElement("div", {
      className: "avatar-upload",
      onClick: function onClick() {
        return fileInputRef.current.click();
      }
    }, "\uD83D\uDCF7", /*#__PURE__*/React.createElement("input", {
      type: "file",
      ref: fileInputRef,
      hidden: true,
      accept: "image/*",
      onChange: handleAvatarChange
    }))), /*#__PURE__*/React.createElement("div", {
      className: "profile-info"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "profile-username"
    }, username), /*#__PURE__*/React.createElement("div", {
      className: "profile-status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "status-dot"
    }), profile.customStatus || 'Online'))), /*#__PURE__*/React.createElement("div", {
      className: "profile-content"
    }, editingProfile ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "profile-about"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "profile-section-title"
    }, "About Me"), /*#__PURE__*/React.createElement("textarea", {
      value: profile.aboutMe,
      onChange: function onChange(e) {
        return setProfile(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            aboutMe: e.target.value
          });
        });
      },
      placeholder: "Tell us about yourself..."
    })), /*#__PURE__*/React.createElement("div", {
      className: "profile-customization"
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-status-custom"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "profile-section-title"
    }, "Custom Status"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: profile.customStatus,
      onChange: function onChange(e) {
        return setProfile(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            customStatus: e.target.value
          });
        });
      },
      placeholder: "Set a custom status..."
    })), /*#__PURE__*/React.createElement("div", {
      className: "color-picker"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "profile-section-title"
    }, "Theme Color"), /*#__PURE__*/React.createElement("input", {
      type: "color",
      value: profile.backgroundColor,
      onChange: function onChange(e) {
        return setProfile(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            backgroundColor: e.target.value
          });
        });
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "profile-actions"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: handleProfileUpdate
    }, "Save Changes"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEditingProfile(false);
      }
    }, "Cancel"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "profile-about"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "profile-section-title"
    }, "About Me"), /*#__PURE__*/React.createElement("p", null, profile.aboutMe || 'No bio yet')), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEditingProfile(true);
      }
    }, "Edit Profile")))))), /*#__PURE__*/React.createElement("div", {
      id: "settings-section",
      className: activeTab === 'settings' ? 'active' : '',
      style: {
        display: 'flex',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "settings-sidebar"
    }, /*#__PURE__*/React.createElement("button", {
      className: settingsTab === 'account' ? 'active' : '',
      onClick: function onClick() {
        return setSettingsTab('account');
      }
    }, "Account"), /*#__PURE__*/React.createElement("button", {
      className: settingsTab === 'themes' ? 'active' : '',
      onClick: function onClick() {
        return setSettingsTab('themes');
      }
    }, "Themes")), /*#__PURE__*/React.createElement("div", {
      className: "settings-content"
    }, settingsTab === 'account' && /*#__PURE__*/React.createElement("div", {
      className: "account-info"
    }, /*#__PURE__*/React.createElement("h2", null, "Account Info"), /*#__PURE__*/React.createElement("p", null, "Logged in as: ", username), /*#__PURE__*/React.createElement("button", {
      onClick: handleLogout
    }, "Log Out")), settingsTab === 'themes' && /*#__PURE__*/React.createElement("div", {
      className: "theme-options",
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem'
      }
    }, Object.keys(themes).map(function (themeName) {
      return /*#__PURE__*/React.createElement("button", {
        key: themeName,
        onClick: function onClick() {
          return applyTheme(themeName);
        },
        style: {
          padding: '0.75rem 1rem',
          border: 'none',
          borderRadius: '6px',
          background: currentTheme === themeName ? 'var(--primary-light)' : 'var(--primary-color)',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }
      }, themeName.charAt(0).toUpperCase() + themeName.slice(1));
    }))))), /*#__PURE__*/React.createElement("div", {
      id: "profile-sidebar",
      style: {
        width: '300px',
        background: 'var(--bg-secondary)',
        padding: '1rem',
        overflowY: 'auto'
      }
    }, selectedConversation ? selectedProfile ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: selectedProfile.avatar ? selectedProfile.avatar : 'default-avatar.png',
      alt: selectedConversation,
      style: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        border: '3px solid var(--primary-color)'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, selectedConversation), /*#__PURE__*/React.createElement("p", null, selectedProfile.customStatus || selectedProfile.status))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem'
      }
    }, /*#__PURE__*/React.createElement("h4", null, "About"), /*#__PURE__*/React.createElement("p", null, selectedProfile.aboutMe || 'No bio available.'))) : /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        color: 'var(--text-secondary)'
      }
    }, "Loading profile\u2026") : /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        color: 'var(--text-secondary)'
      }
    }, "Select a conversation to see profile details."))));
  }
}
// Add support for the install prompt (clean version)
var deferredPrompt;
window.addEventListener('beforeinstallprompt', function (e) {
  e.preventDefault();
  deferredPrompt = e;
  var installButton = document.getElementById('install-button');
  if (!installButton) {
    installButton = document.createElement('button');
    installButton.id = 'install-button';
    installButton.textContent = 'Install App';
    installButton.style.position = 'fixed';
    installButton.style.bottom = '20px';
    installButton.style.right = '20px';
    installButton.style.padding = '0.75rem 1.5rem';
    installButton.style.zIndex = 10000;
    document.body.appendChild(installButton);
    installButton.addEventListener('click', function () {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choice) {
        console.log('User choice:', choice.outcome);
        if (choice.outcome === 'accepted') {
          installButton.style.display = 'none';
        }
        deferredPrompt = null;
      });
    });
  }
});
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
