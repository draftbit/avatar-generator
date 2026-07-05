var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.3.1";
        var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.element");
        var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = /* @__PURE__ */ Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
        var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        __name(getIteratorFn, "getIteratorFn");
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        __name(setExtraStackFrame, "setExtraStackFrame");
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        __name(warn, "warn");
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        __name(error, "error");
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        __name(printWarning, "printWarning");
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        __name(warnNoop, "warnNoop");
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: /* @__PURE__ */ __name(function(publicInstance) {
            return false;
          }, "isMounted"),
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: /* @__PURE__ */ __name(function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          }, "enqueueForceUpdate"),
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: /* @__PURE__ */ __name(function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          }, "enqueueReplaceState"),
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: /* @__PURE__ */ __name(function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }, "enqueueSetState")
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        __name(Component, "Component");
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = /* @__PURE__ */ __name(function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: /* @__PURE__ */ __name(function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }, "get")
            });
          }, "defineDeprecationWarning");
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        __name(ComponentDummy, "ComponentDummy");
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        __name(PureComponent, "PureComponent");
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        __name(createRef, "createRef");
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        __name(isArray, "isArray");
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        __name(typeName, "typeName");
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        __name(willCoercionThrow, "willCoercionThrow");
        function testStringCoercion(value) {
          return "" + value;
        }
        __name(testStringCoercion, "testStringCoercion");
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        __name(checkKeyStringCoercion, "checkKeyStringCoercion");
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        __name(getWrappedName, "getWrappedName");
        function getContextName(type) {
          return type.displayName || "Context";
        }
        __name(getContextName, "getContextName");
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        __name(getComponentNameFromType, "getComponentNameFromType");
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        __name(hasValidRef, "hasValidRef");
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        __name(hasValidKey, "hasValidKey");
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = /* @__PURE__ */ __name(function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          }, "warnAboutAccessingKey");
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        __name(defineKeyPropWarningGetter, "defineKeyPropWarningGetter");
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = /* @__PURE__ */ __name(function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          }, "warnAboutAccessingRef");
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        __name(defineRefPropWarningGetter, "defineRefPropWarningGetter");
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        __name(warnIfStringRefCannotBeAutoConverted, "warnIfStringRefCannotBeAutoConverted");
        var ReactElement = /* @__PURE__ */ __name(function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        }, "ReactElement");
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        __name(createElement, "createElement");
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        __name(cloneAndReplaceKey, "cloneAndReplaceKey");
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        __name(cloneElement, "cloneElement");
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        __name(isValidElement, "isValidElement");
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        __name(escape, "escape");
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        __name(escapeUserProvidedKey, "escapeUserProvidedKey");
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        __name(getElementKey, "getElementKey");
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        __name(mapIntoArray, "mapIntoArray");
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        __name(mapChildren, "mapChildren");
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        __name(countChildren, "countChildren");
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        __name(forEachChildren, "forEachChildren");
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        __name(toArray, "toArray");
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        __name(onlyChild, "onlyChild");
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: /* @__PURE__ */ __name(function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                }, "get"),
                set: /* @__PURE__ */ __name(function(_Provider) {
                  context.Provider = _Provider;
                }, "set")
              },
              _currentValue: {
                get: /* @__PURE__ */ __name(function() {
                  return context._currentValue;
                }, "get"),
                set: /* @__PURE__ */ __name(function(_currentValue) {
                  context._currentValue = _currentValue;
                }, "set")
              },
              _currentValue2: {
                get: /* @__PURE__ */ __name(function() {
                  return context._currentValue2;
                }, "get"),
                set: /* @__PURE__ */ __name(function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }, "set")
              },
              _threadCount: {
                get: /* @__PURE__ */ __name(function() {
                  return context._threadCount;
                }, "get"),
                set: /* @__PURE__ */ __name(function(_threadCount) {
                  context._threadCount = _threadCount;
                }, "set")
              },
              Consumer: {
                get: /* @__PURE__ */ __name(function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }, "get")
              },
              displayName: {
                get: /* @__PURE__ */ __name(function() {
                  return context.displayName;
                }, "get"),
                set: /* @__PURE__ */ __name(function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }, "set")
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        __name(createContext, "createContext");
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        __name(lazyInitializer, "lazyInitializer");
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: /* @__PURE__ */ __name(function() {
                  return defaultProps;
                }, "get"),
                set: /* @__PURE__ */ __name(function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }, "set")
              },
              propTypes: {
                configurable: true,
                get: /* @__PURE__ */ __name(function() {
                  return propTypes;
                }, "get"),
                set: /* @__PURE__ */ __name(function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }, "set")
              }
            });
          }
          return lazyType;
        }
        __name(lazy, "lazy");
        function forwardRef(render2) {
          {
            if (render2 != null && render2.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render2 !== "function") {
              error("forwardRef requires a render function but was given %s.", render2 === null ? "null" : typeof render2);
            } else {
              if (render2.length !== 0 && render2.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render2.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render2 != null) {
              if (render2.defaultProps != null || render2.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render2
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: /* @__PURE__ */ __name(function() {
                return ownName;
              }, "get"),
              set: /* @__PURE__ */ __name(function(name) {
                ownName = name;
                if (!render2.name && !render2.displayName) {
                  render2.displayName = name;
                }
              }, "set")
            });
          }
          return elementType;
        }
        __name(forwardRef, "forwardRef");
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = /* @__PURE__ */ Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        __name(isValidElementType, "isValidElementType");
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: /* @__PURE__ */ __name(function() {
                return ownName;
              }, "get"),
              set: /* @__PURE__ */ __name(function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }, "set")
            });
          }
          return elementType;
        }
        __name(memo, "memo");
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        __name(resolveDispatcher, "resolveDispatcher");
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        __name(useContext, "useContext");
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        __name(useState, "useState");
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        __name(useReducer, "useReducer");
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        __name(useRef, "useRef");
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        __name(useEffect, "useEffect");
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        __name(useInsertionEffect, "useInsertionEffect");
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        __name(useLayoutEffect, "useLayoutEffect");
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        __name(useCallback, "useCallback");
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        __name(useMemo, "useMemo");
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        __name(useImperativeHandle, "useImperativeHandle");
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        __name(useDebugValue, "useDebugValue");
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        __name(useTransition, "useTransition");
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        __name(useDeferredValue, "useDeferredValue");
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        __name(useId, "useId");
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        __name(useSyncExternalStore, "useSyncExternalStore");
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        __name(disabledLog, "disabledLog");
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        __name(disableLogs, "disableLogs");
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        __name(reenableLogs, "reenableLogs");
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        __name(describeBuiltInComponentFrame, "describeBuiltInComponentFrame");
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = /* @__PURE__ */ __name(function() {
                throw Error();
              }, "Fake");
              Object.defineProperty(Fake.prototype, "props", {
                set: /* @__PURE__ */ __name(function() {
                  throw Error();
                }, "set")
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        __name(describeNativeComponentFrame, "describeNativeComponentFrame");
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        __name(describeFunctionComponentFrame, "describeFunctionComponentFrame");
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        __name(shouldConstruct, "shouldConstruct");
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        __name(describeUnknownElementTypeFrameInDEV, "describeUnknownElementTypeFrameInDEV");
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        __name(setCurrentlyValidatingElement, "setCurrentlyValidatingElement");
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        __name(checkPropTypes, "checkPropTypes");
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        __name(setCurrentlyValidatingElement$1, "setCurrentlyValidatingElement$1");
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        __name(getDeclarationErrorAddendum, "getDeclarationErrorAddendum");
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        __name(getSourceInfoErrorAddendum, "getSourceInfoErrorAddendum");
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        __name(getSourceInfoErrorAddendumForProps, "getSourceInfoErrorAddendumForProps");
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        __name(getCurrentComponentErrorInfo, "getCurrentComponentErrorInfo");
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        __name(validateExplicitKey, "validateExplicitKey");
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        __name(validateChildKeys, "validateChildKeys");
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        __name(validatePropTypes, "validatePropTypes");
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        __name(validateFragmentProps, "validateFragmentProps");
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        __name(createElementWithValidation, "createElementWithValidation");
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: /* @__PURE__ */ __name(function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }, "get")
            });
          }
          return validatedFactory;
        }
        __name(createFactoryWithValidation, "createFactoryWithValidation");
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        __name(cloneElementWithValidation, "cloneElementWithValidation");
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        __name(startTransition, "startTransition");
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = /* @__PURE__ */ __name(function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              }, "enqueueTaskImpl");
            }
          }
          return enqueueTaskImpl(task);
        }
        __name(enqueueTask, "enqueueTask");
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: /* @__PURE__ */ __name(function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }, "then")
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: /* @__PURE__ */ __name(function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }, "then")
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: /* @__PURE__ */ __name(function(resolve, reject) {
                    resolve(returnValue);
                  }, "then")
                };
                return _thenable2;
              }
            }
          }
        }
        __name(act, "act");
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        __name(popActScope, "popActScope");
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        __name(recursivelyFlushAsyncActWork, "recursivelyFlushAsyncActWork");
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        __name(flushActQueue, "flushActQueue");
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.act = act;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.element");
        var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = /* @__PURE__ */ Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
        var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        __name(getIteratorFn, "getIteratorFn");
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        __name(error, "error");
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        __name(printWarning, "printWarning");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = /* @__PURE__ */ Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        __name(isValidElementType, "isValidElementType");
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        __name(getWrappedName, "getWrappedName");
        function getContextName(type) {
          return type.displayName || "Context";
        }
        __name(getContextName, "getContextName");
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        __name(getComponentNameFromType, "getComponentNameFromType");
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        __name(disabledLog, "disabledLog");
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        __name(disableLogs, "disableLogs");
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        __name(reenableLogs, "reenableLogs");
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        __name(describeBuiltInComponentFrame, "describeBuiltInComponentFrame");
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = /* @__PURE__ */ __name(function() {
                throw Error();
              }, "Fake");
              Object.defineProperty(Fake.prototype, "props", {
                set: /* @__PURE__ */ __name(function() {
                  throw Error();
                }, "set")
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        __name(describeNativeComponentFrame, "describeNativeComponentFrame");
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        __name(describeFunctionComponentFrame, "describeFunctionComponentFrame");
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        __name(shouldConstruct, "shouldConstruct");
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        __name(describeUnknownElementTypeFrameInDEV, "describeUnknownElementTypeFrameInDEV");
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        __name(setCurrentlyValidatingElement, "setCurrentlyValidatingElement");
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        __name(checkPropTypes, "checkPropTypes");
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        __name(isArray, "isArray");
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        __name(typeName, "typeName");
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        __name(willCoercionThrow, "willCoercionThrow");
        function testStringCoercion(value) {
          return "" + value;
        }
        __name(testStringCoercion, "testStringCoercion");
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        __name(checkKeyStringCoercion, "checkKeyStringCoercion");
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        __name(hasValidRef, "hasValidRef");
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        __name(hasValidKey, "hasValidKey");
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        __name(warnIfStringRefCannotBeAutoConverted, "warnIfStringRefCannotBeAutoConverted");
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = /* @__PURE__ */ __name(function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }, "warnAboutAccessingKey");
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        __name(defineKeyPropWarningGetter, "defineKeyPropWarningGetter");
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = /* @__PURE__ */ __name(function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }, "warnAboutAccessingRef");
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        __name(defineRefPropWarningGetter, "defineRefPropWarningGetter");
        var ReactElement = /* @__PURE__ */ __name(function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        }, "ReactElement");
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        __name(jsxDEV, "jsxDEV");
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        __name(setCurrentlyValidatingElement$1, "setCurrentlyValidatingElement$1");
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        __name(isValidElement, "isValidElement");
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        __name(getDeclarationErrorAddendum, "getDeclarationErrorAddendum");
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        __name(getSourceInfoErrorAddendum, "getSourceInfoErrorAddendum");
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        __name(getCurrentComponentErrorInfo, "getCurrentComponentErrorInfo");
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        __name(validateExplicitKey, "validateExplicitKey");
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        __name(validateChildKeys, "validateChildKeys");
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        __name(validatePropTypes, "validatePropTypes");
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        __name(validateFragmentProps, "validateFragmentProps");
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        __name(jsxWithValidation, "jsxWithValidation");
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        __name(jsxWithValidationStatic, "jsxWithValidationStatic");
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        __name(jsxWithValidationDynamic, "jsxWithValidationDynamic");
        var jsx2 = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx2;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// .wrangler/tmp/bundle-hfhVdy/middleware-loader.entry.ts
init_modules_watch_stub();

// .wrangler/tmp/bundle-hfhVdy/middleware-insertion-facade.js
init_modules_watch_stub();

// worker/index.js
init_modules_watch_stub();

// src/data/config.json
var config_default = {
  skinStyles: [
    "Skin"
  ],
  hairStyles: [
    "Bald",
    "Hat",
    "Balding",
    "Bigcurls",
    "Bobbangs",
    "Bobcut",
    "Buncurls",
    "Buzzcut",
    "Curlybun",
    "Hightopcurly",
    "Long",
    "Pigtails",
    "Shortcombover",
    "Beanie",
    "Bunundercut",
    "Extralong",
    "Fade",
    "Mohawk",
    "Shortcomboverchops",
    "Sidebuzz",
    "Straightbun"
  ],
  facialHairStyles: [
    "BeardMustache",
    "Mustache",
    "None",
    "Goatee",
    "Shadow",
    "Soulpatch",
    "Walrus"
  ],
  bodyStyles: [
    "Oval",
    "Round",
    "Square",
    "Checkered",
    "Hoodie",
    "Stripes"
  ],
  eyeStyles: [
    "Glasses",
    "Happy",
    "Open",
    "Sleepy",
    "Sunglasses",
    "Wink",
    "Closed",
    "Hearts",
    "Dizzy",
    "Sideeye"
  ],
  mouthStyles: [
    "Bigsmile",
    "Frown",
    "Lips",
    "Pacifier",
    "Smile",
    "Smirk",
    "Surprise",
    "Grin",
    "Tongue",
    "Whistle",
    "Laugh"
  ],
  noseStyles: [
    "Mediumround",
    "Smallround",
    "Wrinkles",
    "Pointed",
    "Button"
  ],
  accessoryStyles: [
    "None",
    "Earring",
    "Earrings"
  ],
  bgStyles: [
    "Background"
  ],
  skinColors: [
    "FFCC22",
    "FFDFC4",
    "FBD2C7",
    "F2AD9B",
    "E58F7B",
    "E4A070",
    "B16A5B",
    "92594B",
    "7A4536",
    "623D36",
    "C9E6DC",
    "C4B5F2"
  ],
  hairColors: [
    "362C47",
    "675E97",
    "4E7DE0",
    "5AC4D4",
    "58B368",
    "DEE1F5",
    "6C4545",
    "F29C65",
    "F2C94C",
    "E16381",
    "E15C66",
    "979FB0"
  ],
  facialHairColors: [
    "362C47",
    "675E97",
    "4E7DE0",
    "5AC4D4",
    "58B368",
    "DEE1F5",
    "6C4545",
    "F29C65",
    "F2C94C",
    "E16381",
    "E15C66",
    "979FB0"
  ],
  bodyColors: [
    "456DFF",
    "5A45FF",
    "6DBB58",
    "F55D81",
    "7555CA",
    "E24553",
    "54D7C7",
    "F3B63A",
    "FF8A5C",
    "3E4E7C",
    "C866D9",
    "68C9F2"
  ],
  accessoryColors: [
    "F3B63A",
    "C9CFDB",
    "C98850",
    "362C47",
    "F55D81",
    "54D7C7",
    "456DFF",
    "5A45FF"
  ],
  bgColors: [
    "93A7FF",
    "A9E775",
    "FF7A9A",
    "B379F7",
    "FF6674",
    "89E6E4",
    "FFCC65",
    "FFB27A",
    "B8EBC5",
    "D9CCFF",
    "6C7BC4",
    "F8FBFF"
  ],
  disabledColors: [
    "EEEFF5",
    "EEEFF5",
    "EEEFF5",
    "EEEFF5",
    "EEEFF5",
    "EEEFF5",
    "EEEFF5",
    "EEEFF5"
  ]
};

// src/components/SvgLoader.bs.js
init_modules_watch_stub();
var JsxRuntime = __toESM(require_jsx_runtime());
function getBackground(fill, size) {
  return '<svg height="' + size + '" width="' + size + '" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h64v64h-64z" fill="' + fill + '"/></svg>';
}
__name(getBackground, "getBackground");
function getBeardMustache(fill, size) {
  return '\n<?xml version="1.0" encoding="UTF-8"?>\n<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <path d="M10.8956938,6.6310802 C12.1391474,6.20678218 13.4857125,6.81653808 14,8.00090947 C14.5142875,6.81653808 15.8608526,6.20678218 17.1043062,6.6310802 L19.5274283,7.45791118 C22.992911,6.12710456 25.9521992,3.64111062 27.9968866,0.701774452 C27.9989588,0.800932919 28,0.900344863 28,1 L28,7 C28,14.7319865 21.7319865,21 14,21 C6.2680135,21 1.77635684e-15,14.7319865 0,7 L0,1 C0,0.900344863 0.0010412311,0.800932919 0.00311340763,0.701774452 C2.04780082,3.64111062 5.007089,6.12710456 8.47257173,7.45791118 L10.8956938,6.6310802 Z" id="path-1"></path>\n    </defs>\n    <g id="face" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Facial-Hair" transform="translate(18.000000, 28.000000)">\n            <mask id="mask-2" fill="white">\n                <use xlink:href="#path-1"></use>\n            </mask>\n            <use id="Dye" fill="' + fill + '" fill-rule="nonzero" xlink:href="#path-1"></use>\n            <path d="M8.47257173,7.45791118 L5.66081479,8.41735427 C5.34148331,8.5263183 5.09863248,8.78896829 5.01497871,9.11584411 C4.87805139,9.65088556 5.20078665,10.1956239 5.7358281,10.3325512 L10.8174354,11.6330316 C11.0375528,11.6893638 11.2638669,11.7178637 11.4910782,11.7178637 C12.6214359,11.7178637 13.5905776,11.0276159 14,10.0456238 C14.4094224,11.0276159 15.3785641,11.7178637 16.5089218,11.7178637 C16.7361331,11.7178637 16.9624472,11.6893638 17.1825646,11.6330316 L22.2641719,10.3325512 C22.7992134,10.1956239 23.1219486,9.65088556 22.9850213,9.11584411 C22.9013675,8.78896829 22.6585167,8.5263183 22.3391852,8.41735427 L19.5274283,7.45791118 C22.992911,6.12710456 25.9521992,3.64111062 27.9968866,0.701774452 C27.9989588,0.800932919 28,0.900344863 28,1 L28,7 C28,14.7319865 21.7319865,21 14,21 C6.2680135,21 1.77635684e-15,14.7319865 0,7 L0,1 C0,0.900344863 0.0010412311,0.800932919 0.00311340763,0.701774452 C2.04780082,3.64111062 5.007089,6.12710456 8.47257173,7.45791118 Z" id="Overlay" fill="#FFFFFF" fill-rule="nonzero" opacity="0.26" style="mix-blend-mode: overlay;" mask="url(#mask-2)"></path>\n            <path d="M17.999058,11.4240753 C17.9996848,11.4493075 18,11.4746169 18,11.5 C18,13.1568542 16.6568542,14.5 15,14.5 L13,14.5 C11.3431458,14.5 10,13.1568542 10,11.5 C10,11.4746169 10.0003152,11.4493075 10.000942,11.4240753 L10.8174354,11.6330316 C11.0375528,11.6893638 11.2638669,11.7178637 11.4910782,11.7178637 C12.6214359,11.7178637 13.5905776,11.0276159 14,10.0456238 C14.4094224,11.0276159 15.3785641,11.7178637 16.5089218,11.7178637 C16.7361331,11.7178637 16.9624472,11.6893638 17.1825646,11.6330316 L17.999058,11.4240753 Z" id="Mouth" fill="#FFFEFD" fill-rule="nonzero" mask="url(#mask-2)"></path>\n        </g>\n    </g>\n</svg>\n';
}
__name(getBeardMustache, "getBeardMustache");
function getSkin(fill, size) {
  return '\n<svg height="' + size + '" width="' + size + '" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg"><g fill="none" transform="translate(14 13)"><path d="m23 33.0807424v5.9192576c0 2.7614237-2.2385763 5-5 5s-5-2.2385763-5-5v-5.9192576c-4.03776277-1.5443264-7.17755008-4.9044416-8.42044769-9.0814314-.02646239.0004587-.05298045.000689-.07955231.000689-2.48528137 0-4.5-2.0147186-4.5-4.5 0-2.3162768 1.75002477-4.2238135 4-4.4725356v-1.0274644c0-7.7319865 6.2680135-14 14-14s14 6.2680135 14 14v1.0274644c2.2499752.2487221 4 2.1562588 4 4.4725356 0 2.4852814-2.0147186 4.5-4.5 4.5-.0265719 0-.0530899-.0002303-.0795523-.000689-1.2428976 4.1769898-4.3826849 7.537105-8.4204477 9.0814314z" fill="' + fill + '"/>\n  <path style="mix-blend-mode: overlay" d="m18 0c7.7319865 0 14 6.2680135 14 14v6c0 7.7319865-6.2680135 14-14 14s-14-6.2680135-14-14v-6c0-7.7319865 6.2680135-14 14-14z" fill="#FFF" fill-opacity="0.3"/></g></svg>\n';
}
__name(getSkin, "getSkin");
function getMustache(fill, size) {
  return '<svg fill="' + fill + '" height="' + size + '" width="' + size + '" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"> <path d="M32.016 38.05a2.718 2.718 0 0 1-3.182 1.587l-5.082-1.3a1 1 0 0 1-.075-1.916l5.235-1.786a2.504 2.504 0 0 1 3.104 1.37 2.504 2.504 0 0 1 3.105-1.37l5.235 1.786a1 1 0 0 1-.075 1.915l-5.082 1.3a2.717 2.717 0 0 1-3.183-1.587z" /></svg>';
}
__name(getMustache, "getMustache");
function getGoatee(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" fill="' + fill + '" viewBox="0 0 64 64"><path d="M28.033 36.527C29.444 36.176 30.766 36 32 36s2.556.176 3.967.527A4 4 0 0 1 39 40.408v4.475a3 3 0 0 1-1.513 2.606C35.72 48.496 33.944 49 32.157 49c-1.807 0-3.666-.514-5.578-1.542A3 3 0 0 1 25 44.816v-4.408a4 4 0 0 1 3.033-3.881zm.019 1.492a2 2 0 0 0-1.462 1.926v2.485a3 3 0 0 0 1.846 2.769c1.282.534 2.504.801 3.668.801 1.15 0 2.338-.26 3.567-.781a3 3 0 0 0 1.829-2.762v-2.5a2 2 0 0 0-1.47-1.93 15.16 15.16 0 0 0-4.03-.565c-1.304 0-2.62.185-3.948.557z"/></svg>';
}
__name(getGoatee, "getGoatee");
function getShadow(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" fill="' + fill + '" viewBox="0 0 64 64"><path d="M46 29v4c0 7.732-6.268 14-14 14s-14-6.268-14-14v-4c0-.1.001-.2.003-.298C20.048 31.642 22.535 35.669 26 37c2-1.003 4-1.504 6-1.504s4 .501 6 1.504c3.465-1.33 5.952-5.359 7.997-8.298.002.099.003.198.003.298z" opacity=".2"/></svg>';
}
__name(getShadow, "getShadow");
function getSoulpatch(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" fill="' + fill + '" viewBox="0 0 64 64"><path d="M30 43.5h4l-.684 2.051a1.387 1.387 0 0 1-2.632 0z"/></svg>';
}
__name(getSoulpatch, "getSoulpatch");
function getWalrus(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" fill="' + fill + '" viewBox="0 0 64 64"><path d="M29 35h6a5 5 0 0 1 5 5H24a5 5 0 0 1 5-5z"/></svg>';
}
__name(getWalrus, "getWalrus");
function getEyesGlasses(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="#1b0640" d="M26 30a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/><path fill="#fff" d="M23 26h6v6h-6zm12 0h6v6h-6z" opacity=".303"/><path fill="#1b0640" d="M31 25.053h2c1.5 0 2.5-1.053 5-1.053 1.667 0 3.333.35 5 1.053l1 .526v1.579l-1 .526v3.158C43 32.586 41.657 34 40 34h-4c-1.657 0-3-1.414-3-3.158v-3.684h-2v3.684C31 32.586 29.657 34 28 34h-4c-1.657 0-3-1.414-3-3.158v-3.158l-1-.526v-1.58l1-.525C22.667 24.35 24.333 24 26 24c2.5 0 3.5 1.053 5 1.053zm-2.757 1.47c-.844-.296-1.425-.418-2.243-.418-.995 0-1.993.15-3 .45v4.287c0 .581.448 1.053 1 1.053h4c.552 0 1-.472 1-1.053v-4.051c-.209-.07-.447-.155-.757-.267zm7.514 0c-.31.113-.548.198-.757.268v4.051c0 .581.448 1.053 1 1.053h4c.552 0 1-.472 1-1.053v-4.287c-1.007-.3-2.005-.45-3-.45-.818 0-1.399.122-2.243.419z"/></g></svg>';
}
__name(getEyesGlasses, "getEyesGlasses");
function getEyesHappy(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + size + '" d="M24.712 29.737a.75.75 0 1 1-1.424-.474c.434-1.301 1.383-2.013 2.712-2.013s2.278.712 2.712 2.013a.75.75 0 1 1-1.424.474c-.233-.699-.617-.987-1.288-.987s-1.055.288-1.288.987zm12 0a.75.75 0 0 1-1.424-.474c.434-1.301 1.383-2.013 2.712-2.013s2.278.712 2.712 2.013a.75.75 0 0 1-1.424.474c-.233-.699-.617-.987-1.288-.987s-1.055.288-1.288.987z"/></svg>';
}
__name(getEyesHappy, "getEyesHappy");
function getEyesOpen(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + size + '" d="M25.5 30a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm13 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>';
}
__name(getEyesOpen, "getEyesOpen");
function getEyesSleepy(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '" d="M36.004 29.368a1 1 0 1 1 .992-1.736c.438.25.852.368 1.254.368s.816-.118 1.254-.368a1 1 0 1 1 .992 1.736c-.73.417-1.482.632-2.246.632s-1.517-.215-2.246-.632zm-12 0a1 1 0 0 1 .992-1.736c.438.25.852.368 1.254.368s.816-.118 1.254-.368a1 1 0 0 1 .992 1.736c-.73.417-1.482.632-2.246.632s-1.517-.215-2.246-.632z"/></svg>';
}
__name(getEyesSleepy, "getEyesSleepy");
function getEyesSunglasses(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="' + fill + '"><path d="M26 30a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/><path d="M23 26h6v6h-6zm12 0h6v6h-6z" opacity=".801"/><path d="M33 25.053c1.5 0 2.5-1.053 5-1.053 1.667 0 3.333.35 5 1.053l1 .526v1.579l-1 .526v3.158C43 32.586 41.657 34 40 34h-4c-1.657 0-3-1.414-3-3.158v-3.684h-2v3.684C31 32.586 29.657 34 28 34h-4c-1.657 0-3-1.414-3-3.158v-3.158l-1-.526v-1.58l1-.525C22.667 24.35 24.333 24 26 24c2.5 0 3.5 1.053 5 1.053zm-4.757 1.47c-.844-.296-1.425-.418-2.243-.418-.995 0-1.993.15-3 .45v4.287c0 .581.448 1.053 1 1.053h4c.552 0 1-.472 1-1.053v-4.051c-.209-.07-.447-.155-.757-.267zm7.514 0c-.31.113-.548.198-.757.268v4.051c0 .581.448 1.053 1 1.053h4c.552 0 1-.472 1-1.053v-4.287c-1.007-.3-2.005-.45-3-.45-.818 0-1.399.122-2.243.419z"/></g></svg>';
}
__name(getEyesSunglasses, "getEyesSunglasses");
function getEyesWink(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '" d="M25.5 30a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm14.907-2.744a.75.75 0 0 1 .186 1.488l-4 .5a.75.75 0 0 1-.186-1.488z"/></svg>';
}
__name(getEyesWink, "getEyesWink");
function getMouthBigsmile(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="#1b0640" d="M29 38h6v1a3 3 0 0 1-6 0z"/></svg>';
}
__name(getMouthBigsmile, "getMouthBigsmile");
function getMouthFrown(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="#1b0640" d="M28.004 40.132a1 1 0 0 0 .992 1.736C30.016 41.285 31.014 41 32 41s1.983.285 3.004.868a1 1 0 1 0 .992-1.736C34.684 39.382 33.348 39 32 39c-1.348 0-2.684.382-3.996 1.132z"/></svg>';
}
__name(getMouthFrown, "getMouthFrown");
function getMouthLips(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="#dc5c7a" d="M28 41h8c-.667 1.667-2 2.5-4 2.5s-3.333-.833-4-2.5z"/><path fill="#f57b98" d="M32 40a2.092 2.092 0 0 1 3.612.225L36 41h-8l.388-.775A2.092 2.092 0 0 1 32 40z"/></g></svg>';
}
__name(getMouthLips, "getMouthLips");
function getMouthPacifier(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="#456dff" d="M34.996 42.665a3 3 0 0 1-5.992 0A3.5 3.5 0 0 1 27 39.5a2.035 2.035 0 0 1 2.73-1.912c.756.275 1.513.412 2.27.412s1.514-.137 2.27-.412A2.035 2.035 0 0 1 37 39.5a3.5 3.5 0 0 1-2.004 3.165zM33.415 43h-2.83a1.5 1.5 0 0 0 2.83 0z"/><g fill="#fff" transform="translate(23 36)"><path fill-opacity=".26" d="M11.996 6.665a3 3 0 1 0-5.991 0A3.5 3.5 0 0 1 4 3.5a2.035 2.035 0 0 1 2.73-1.912C7.485 1.863 8.242 2 9 2s1.514-.137 2.27-.412A2.035 2.035 0 0 1 14 3.5a3.5 3.5 0 0 1-2.004 3.165zM10.415 7h-2.83a1.5 1.5 0 1 1 2.83 0z"/><circle cx="9" cy="4.5" r="1.5"/></g></g></svg>';
}
__name(getMouthPacifier, "getMouthPacifier");
function getMouthSmile(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="#1b0640" d="M28.004 41.868a1 1 0 0 1 .992-1.736c1.02.583 2.018.868 3.004.868s1.983-.285 3.004-.868a1 1 0 1 1 .992 1.736C34.684 42.618 33.348 43 32 43c-1.348 0-2.684-.382-3.996-1.132z"/></svg>';
}
__name(getMouthSmile, "getMouthSmile");
function getMouthSmirk(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="#1b0640" d="M30.318 41.728a.75.75 0 0 1 .364-1.456c2.433.609 4.165.32 5.288-.802a.75.75 0 0 1 1.06 1.06c-1.544 1.545-3.812 1.923-6.712 1.198z"/></svg>';
}
__name(getMouthSmirk, "getMouthSmirk");
function getMouthSurprise(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><ellipse cx="32" cy="41" fill="#1b0640" rx="2" ry="2.5"/></svg>';
}
__name(getMouthSurprise, "getMouthSurprise");
function getNoseMediumround(fill, size) {
  return '\n<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M28.25 34a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75c0 1.664-1.586 3.25-3.75 3.25-2.164 0-3.75-1.586-3.75-3.25z"/>\n  <path style="mix-blend-mode: overlay" fill="#fff" d="M35 33.25a.75.75 0 0 0-.75.75c0 .836-.914 1.75-2.25 1.75s-2.25-.914-2.25-1.75a.75.75 0 0 0-.75-.75v-.002h6z" opacity=".36"/></g></svg>';
}
__name(getNoseMediumround, "getNoseMediumround");
function getNoseSmallround(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M29.288 35.237a.75.75 0 0 1 .475-.949 1.09 1.09 0 0 1 .307-.028H33.92c.133 0 .263.01.317.028a.75.75 0 0 1 .475.95c-.434 1.3-1.383 2.012-2.712 2.012s-2.278-.712-2.712-2.013z"/>\n<path style="mix-blend-mode: overlay" fill="#fff" d="M33.945 34.255c-.3 0-.558.212-.657.508-.233.699-.617.987-1.288.987s-1.055-.288-1.288-.987c-.1-.296-.367-.503-.657-.503z" opacity=".36"/></g></svg>';
}
__name(getNoseSmallround, "getNoseSmallround");
function getNoseWrinkles(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M29.18 33.758h5.632c.335 0 .593.045.776.276.037.056.083.139.099.182.208.574.284 1.252.229 2.033-.223 1.613-1.589 2.501-3.916 2.501-2.321 0-3.686-.884-3.914-2.488-.054-.814.027-1.509.242-2.084.012-.032.035-.069.066-.12.18-.247.454-.3.785-.3z"/>\n<path style="mix-blend-mode: overlay" fill="#fff" d="M34.794 33.779a.75.75 0 0 0-.515.927c.523 1.83-.089 2.544-2.279 2.544s-2.802-.713-2.279-2.544a.75.75 0 0 0-.515-.927c-.069-.02-.037-.019-.105-.019h5.773c-.053 0-.08.006-.08.019z" opacity=".36"/><path fill="#000" d="M28.394 34.057a.748.748 0 0 0-.115.237c-.212.741-.274 1.4-.193 1.968a20.878 20.878 0 0 0-.875 1.48 20.24 20.24 0 0 0-1.238 2.92.5.5 0 0 1-.946-.324c.394-1.15.827-2.172 1.3-3.065.472-.89 1.137-1.934 1.996-3.135a.502.502 0 0 1 .071-.08zm7.522 2.192c.078-.565.015-1.22-.195-1.955a.748.748 0 0 0-.133-.26.5.5 0 0 1 .1.104c.858 1.201 1.522 2.245 1.994 3.135.474.893.907 1.914 1.301 3.065a.5.5 0 1 1-.946.324 20.24 20.24 0 0 0-1.238-2.92c-.24-.452-.534-.95-.883-1.493z" opacity=".119"/></g></svg>';
}
__name(getNoseWrinkles, "getNoseWrinkles");
function getCheckered(fill, size) {
  return '\n<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64">\n  <path fill="' + fill + '" d="M27 49v3a5 5 0 0 0 10 0v-3l6.647 2.045A9 9 0 0 1 50 59.647V64H14v-4.353a9 9 0 0 1 6.353-8.602z"/>\n  <path fill="#000" d="M42 50.538l1.647.507A8.99 8.99 0 0 1 46 52.163V64h-4zM38 64h-4v-5.29a7.017 7.017 0 0 0 4-3.102zm-8 0h-4v-8.392a7.017 7.017 0 0 0 4 3.102zm-8 0h-4V52.163a8.99 8.99 0 0 1 2.353-1.118L22 50.538z" opacity=".20"/>\n  <path fill="#fff" d="M47.068 53a9.013 9.013 0 0 1 2.535 4H36.899a6.982 6.982 0 0 0 2.03-4zM50 61v3H14v-3zm-35.603-4a9.013 9.013 0 0 1 2.535-4h8.139a6.982 6.982 0 0 0 2.03 4z" opacity=".18"/>\n</svg>\n';
}
__name(getCheckered, "getCheckered");
function getBodyOval(fill, size) {
  return '<svg height="' + size + '" width="' + size + '" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="' + fill + '" fill-rule="nonzero" transform="translate(21 46)"><path d="m22 18h-22v-8c0-4.27468547 2.43832409-7.97986983 6-9.80058081v1.80058081c0 2.76142375 2.23857625 5 5 5 2.7614237 0 5-2.23857625 5-5v-1.80058081c3.5616759 1.82071098 6 5.52589534 6 9.80058081z"/><path d="m22 18h-22v-8c0-4.27468547 2.43832409-7.97986983 6-9.80058081v1.80058081c0 2.76142375 2.23857625 5 5 5 2.7614237 0 5-2.23857625 5-5v-1.80058081c3.5616759 1.82071098 6 5.52589534 6 9.80058081z"/></g></svg>';
}
__name(getBodyOval, "getBodyOval");
function getBodyRound(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '" d="M27 51v.47a5 5 0 0 0 10 0V51c7.063 1.523 12.93 6.735 16 13H11c3.07-6.265 8.937-11.477 16-13z"/></svg>';
}
__name(getBodyRound, "getBodyRound");
function getBodySquare(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '" d="M27 49v3a5 5 0 0 0 10 0v-3l6.647 2.045A9 9 0 0 1 50 59.647V64H14v-4.353a9 9 0 0 1 6.353-8.602z"/></svg>';
}
__name(getBodySquare, "getBodySquare");
function getBald(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="#FFF" d="M22.386 23.438a.75.75 0 1 1-1.342-.67 16.551 16.551 0 0 1 2.202-3.366 11.86 11.86 0 0 1 3-2.522.75.75 0 0 1 .765 1.29 10.36 10.36 0 0 0-2.623 2.205 15.055 15.055 0 0 0-2.002 3.063zM28.75 17a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" opacity=".198"/></svg>';
}
__name(getBald, "getBald");
function getBalding(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M41.668 19h1.667a3 3 0 0 1 2.984 3.314l-.651 6.186a1.364 1.364 0 0 1-1.301-.954zm-20 0l-2.7 8.546a1.362 1.362 0 0 1-1.3.954l-.652-6.186A3 3 0 0 1 20 19z"/><path fill="#fff" d="M22.386 23.438a.75.75 0 0 1-1.342-.67 16.551 16.551 0 0 1 2.202-3.366 11.86 11.86 0 0 1 3-2.522.75.75 0 1 1 .765 1.29 10.36 10.36 0 0 0-2.623 2.205 15.055 15.055 0 0 0-2.002 3.063zM28.75 17a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" opacity=".198"/></g></svg>';
}
__name(getBalding, "getBalding");
function getBigcurls(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '"  d="M46 28a16 16 0 0 1-.021-.023 2 2 0 0 1-2.104-2.855 2 2 0 0 1-2.729-2.095 2 2 0 0 1-3.303.553l-.012.005v.042a2 2 0 0 1-3.752.965 2 2 0 0 1-3.922.333 2 2 0 0 1-3.865-.598 23.239 23.239 0 0 1-.131-.022 2 2 0 0 1-3.676-.981 20.21 20.21 0 0 1-.83-.326 2 2 0 0 1-2.725 2.123 2 2 0 0 1-.93 2.68v.226A4.5 4.5 0 0 0 18.58 37 14.036 14.036 0 0 0 27 46.081v3.062a3.483 3.483 0 0 1-.652-.68c-.484-.137-.961-.29-1.43-.46a3.46 3.46 0 0 1-2.719-.138 3.461 3.461 0 0 1-1.816-2.166 20.882 20.882 0 0 1-.987-.707 3.462 3.462 0 0 1-2.742-.912 3.464 3.464 0 0 1-1.087-2.877c-.17-.217-.334-.438-.495-.661a3.465 3.465 0 0 1-2.604-1.712 3.467 3.467 0 0 1-.062-3.358c-.046-.13-.092-.26-.136-.39a3.47 3.47 0 0 1-1.077-5.965v-.009a3.47 3.47 0 0 1 .471-6.196 3.47 3.47 0 0 1 2.272-5.788 3.47 3.47 0 0 1 3.876-4.861A3.47 3.47 0 0 1 22.95 8.76a3.47 3.47 0 0 1 5.941-1.833 3.47 3.47 0 0 1 6.218 0A3.47 3.47 0 0 1 41.05 8.76a3.47 3.47 0 0 1 5.138 3.503 3.47 3.47 0 0 1 3.876 4.86 3.47 3.47 0 0 1 2.272 5.789 3.47 3.47 0 0 1 .471 6.196v.01a3.47 3.47 0 0 1-1.077 5.965c-.044.13-.09.26-.136.389a3.467 3.467 0 0 1-.062 3.358 3.465 3.465 0 0 1-2.604 1.712c-.16.223-.326.444-.495.661a3.464 3.464 0 0 1-1.087 2.877 3.462 3.462 0 0 1-2.742.912c-.322.245-.651.48-.987.707a3.461 3.461 0 0 1-1.816 2.166 3.46 3.46 0 0 1-2.719.138c-.469.17-.946.323-1.43.46a3.483 3.483 0 0 1-.652.68v-3.062a14.036 14.036 0 0 0 8.42-9.082l.08.001a4.5 4.5 0 0 0 .5-8.973z"/></svg>';
}
__name(getBigcurls, "getBigcurls");
function getBobbangs(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '"  d="M46 28c-2.177-2.419-3.652-5.54-4.425-9.363-2.252 3.614-5.277 6.235-9.075 7.863-4.667 2-9.5 2.333-14.5 1v.527a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73zm-9 21.313v-3.232a14.036 14.036 0 0 0 8.42-9.082l.08.001a4.48 4.48 0 0 0 2.5-.758V47c-3.113 1.211-6.78 1.982-11 2.313zm-10 0c-4.22-.331-7.887-1.102-11-2.313V36.242a4.48 4.48 0 0 0 2.58.757A14.036 14.036 0 0 0 27 46.081z"/></svg>';
}
__name(getBobbangs, "getBobbangs");
function getBobcut(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '"  d="M46 28c-1.412-1.57-2.53-3.434-3.35-5.595-3.192 1.086-6.742 1.629-10.65 1.629-4.848 0-9.145-.836-12.89-2.506A13.955 13.955 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73v-1.375C16 18.334 23.163 11 32 11s16 7.334 16 16.382v1.376a4.474 4.474 0 0 0-2-.73zm-9 20.06v-1.98A14.036 14.036 0 0 0 45.42 37h.08a4.48 4.48 0 0 0 2.5-.758v6.376c0 .477-.02.949-.059 1.415-3.647 2.044-7.294 3.386-10.941 4.028zm-10 0c-3.647-.64-7.294-1.983-10.941-4.027A16.99 16.99 0 0 1 16 42.618v-6.376a4.48 4.48 0 0 0 2.58.757A14.036 14.036 0 0 0 27 46.081z"/></svg>';
}
__name(getBobcut, "getBobcut");
function getBuncurls(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M44.544 20.777C42.254 16.167 37.497 13 32 13s-10.254 3.168-12.544 7.777a2 2 0 0 1 .551-2.376v-.005a2 2 0 0 1 .271-3.571 2 2 0 0 1 1.31-3.337 2 2 0 0 1 2.234-2.802 2 2 0 0 1 2.961-2.019 2 2 0 0 1 3.425-1.056 2 2 0 0 1 3.584 0 2 2 0 0 1 3.425 1.056 2 2 0 0 1 2.961 2.02 2 2 0 0 1 2.235 2.801 2 2 0 0 1 1.309 3.337 2 2 0 0 1 .272 3.571v.005a2 2 0 0 1 .55 2.376z"/><path fill="#5ac4d4" d="M45.934 25.632C43.828 20.564 38.83 17 33 17h-2c-5.83 0-10.828 3.564-12.934 8.632C18.753 18.542 24.73 13 32 13s13.247 5.542 13.934 12.632z"/></g></svg>';
}
__name(getBuncurls, "getBuncurls");
function getBuzzcut(fill, size) {
  return '<svg style="mix-blend-mode: multiply;" width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '"  d="M46 27v3c-1.333-1.667-2.667-4.667-4-9-2.657 1.333-5.99 2-10 2s-7.343-.667-10-2c-1.333 3.667-2.667 6.333-4 8v-2c0-7.732 6.268-14 14-14s14 6.268 14 14z"/></svg>';
}
__name(getBuzzcut, "getBuzzcut");
function getCurlybun(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M44.544 20.777C42.254 16.167 37.497 13 32 13c-5.497 0-10.254 3.168-12.544 7.777a2 2 0 0 1 .551-2.376v-.005a2 2 0 0 1 .271-3.571 2 2 0 0 1 1.31-3.337 2 2 0 0 1 2.234-2.802 2 2 0 0 1 2.961-2.019 2 2 0 0 1 3.425-1.056 2 2 0 0 1 3.584 0 2 2 0 0 1 3.425 1.056 2 2 0 0 1 2.961 2.02 2 2 0 0 1 2.235 2.801 2 2 0 0 1 1.309 3.337 2 2 0 0 1 .272 3.571v.005a2 2 0 0 1 .55 2.376z"/><path fill="#f55d81" d="M45.934 25.632C43.828 20.564 38.83 17 33 17h-2c-5.83 0-10.828 3.564-12.934 8.632C18.753 18.542 24.73 13 32 13s13.247 5.542 13.934 12.632z"/></g></svg>';
}
__name(getCurlybun, "getCurlybun");
function getCurlyhightop(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '" d="M33.792 9a2 2 0 0 1 3.816 0h.558a2 2 0 0 1 3.83.668c.075.03.15.063.224.095a2 2 0 0 1 3.13 2.298l.152.179a2 2 0 0 1 1.775 3.41c.042.156.08.314.114.473a2 2 0 0 1 .018 3.748l-.047.324a2 2 0 0 1-.022 3.62 1.994 1.994 0 0 1 .159.852 1.8 1.8 0 0 1-1.22 2.924L46 29.5c-.44-.659-.842-1.48-1.209-2.465a1.797 1.797 0 0 1-.437-.796 1.998 1.998 0 0 1-.563-2.679 38.655 38.655 0 0 1-.022-.098 2 2 0 0 1-.956-2.937 1.994 1.994 0 0 1-2.44-.323 2 2 0 0 1-3.724.057l-.312.032a2 2 0 0 1-3.573.203l-.23.003a2 2 0 0 1-3.521-.099 36.13 36.13 0 0 1-.41-.031 2 2 0 0 1-3.676-.165 1.997 1.997 0 0 1-3.04-.22 19.96 19.96 0 0 1-.023.155 2 2 0 0 1-.701 3.35 2 2 0 0 1-1.397 3.095A24.897 24.897 0 0 1 18 29.5l-.188-1.923a1.8 1.8 0 0 1-.338-3.465l-.012-.126a2 2 0 0 1-.38-3.889l-.013-.144a2 2 0 0 1 .067-3.92 8.93 8.93 0 0 1 .041-.177 2 2 0 0 1 1.46-3.627 2 2 0 0 1 3.066-2.326 2 2 0 0 1 3.835-.894 9 9 0 0 1 .052-.003A2 2 0 0 1 29.408 9h.184a2 2 0 0 1 3.816 0z"/></svg>';
}
__name(getCurlyhightop, "getCurlyhightop");
function getLong(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M46 28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73zm2 8.242v6.604c0 7.312-4.612 13.513-11 15.679V46.08a14.036 14.036 0 0 0 8.42-9.082l.08.001a4.48 4.48 0 0 0 2.5-.758zM27.13 58.568C20.675 56.443 16 50.208 16 42.846v-6.604a4.48 4.48 0 0 0 2.58.757A14.036 14.036 0 0 0 27 46.081v5.464c.051 2.356.095 4.697.13 7.023z"/><path fill="#fff" d="M46 28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73z" opacity=".258"/></g></svg>';
}
__name(getLong, "getLong");
function getPigtails(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M41.001 13.836C41.057 11.156 43.291 9 46.04 9c2.783 0 5.04 2.211 5.04 4.94 0 .079-.003.158-.007.237.018 3.201.708 7.08 1.928 9.823-2.256-.606-4.334-1.62-6.22-2.903A16.67 16.67 0 0 1 48 27.382v1.376a4.474 4.474 0 0 0-2-.73V28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73v-1.375c0-2.227.434-4.35 1.22-6.285C15.334 22.38 13.256 23.394 11 24c1.22-2.743 1.91-6.622 1.928-9.823a4.923 4.923 0 0 1-.006-.238C12.922 11.211 15.178 9 17.96 9c2.748 0 4.982 2.156 5.038 4.836C25.563 12.046 28.662 11 32 11s6.437 1.046 9.001 2.836z"/><path fill="#fff" d="M41.013 13.582C45.213 16.545 48 21.767 48 27.714v1.044a4.474 4.474 0 0 0-2-.73V28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73v-1.043c0-5.947 2.788-11.17 6.987-14.132.006.084.01.169.012.254C25.563 12.046 28.662 11 32 11s6.437 1.046 9.001 2.836c.002-.085.006-.17.012-.254z" opacity=".259"/><path fill="#f55d81" d="M18 16a5 5 0 0 1 8.16-3.875c-3.106 1.248-5.739 3.46-7.545 6.279A4.978 4.978 0 0 1 18 16zm23-5a5 5 0 0 1 4.385 7.404c-1.806-2.818-4.44-5.031-7.545-6.279A4.98 4.98 0 0 1 41 11z"/></g></svg>';
}
__name(getPigtails, "getPigtails");
function getShortcombover(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '" d="M42.26 14.63a7.926 7.926 0 0 1 4.6 8.351L46 29c-2.827-1.696-4.695-5.55-5.604-11.561a9.238 9.238 0 0 1-5.692 2.774c-1.823.191-3.391.287-4.704.287-3 0-5.667-.5-8-1.5 0 3.667-1.333 7.167-4 10.5l-.922-8.533A9 9 0 0 1 26.025 11H43a9.237 9.237 0 0 1-.74 3.63z"/></svg>';
}
__name(getShortcombover, "getShortcombover");
function getBeanie(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="' + fill + '" d="M18.996 21.804C21.059 16.644 26.104 13 32 13s10.94 3.645 13.004 8.804c.079.063.157.127.235.192a1 1 0 0 1 .338.54l.627 2.64a.5.5 0 0 1-.774.523C40.989 22.566 36.512 21 32 21c-4.513 0-8.985 1.567-13.417 4.702a.5.5 0 0 1-.775-.522l.616-2.64a1 1 0 0 1 .338-.546l.234-.19z"/><path d="M32 17c4.779 0 9.192 1.665 13.24 4.996a1 1 0 0 1 .337.54l.627 2.64a.5.5 0 0 1-.774.523C40.989 22.566 36.512 21 32 21c-4.513 0-8.985 1.567-13.417 4.702a.5.5 0 0 1-.775-.522l.616-2.64a1 1 0 0 1 .338-.546C22.81 18.664 27.222 17 32 17z" opacity=".255"/></svg>';
}
__name(getBeanie, "getBeanie");
function getBunundercut(fill, size) {
  return '\n<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64">\n  <g fill="none" transform="translate(18 8)">\n    <circle cx="14" cy="6" r="4" fill="#5a45ff"/>\n    <g fill="' + fill + '">\n      <path d="M17.67 14.5l.054-7.663c2.136-.013 3.207-.013 3.214 0C25.157 9.25 28 13.792 28 19v3c-1.333-1.667-2.667-4.667-4-9-.496.25-2.606.75-6.33 1.5zm-7.34 0C6.606 13.75 4.496 13.25 4 13c-1.333 4.333-2.667 7.333-4 9v-3c0-5.208 2.843-9.751 7.062-12.163h3.27z" opacity=".303"/>\n      <path d="M10.014 4.572C10.188 2.012 11.906 0 14 0c2.085 0 3.798 1.994 3.983 4.54.735.393 1.46.897 2.176 1.512a3 3 0 0 1 1.04 2.14l.098 2.17a4 4 0 0 1-3.13 4.086C16.51 14.816 15.12 15 14 15c-1.132 0-2.564-.192-4.294-.576a3.872 3.872 0 0 1-3.016-4.145l.208-2.2a3 3 0 0 1 .964-1.932 11.545 11.545 0 0 1 2.152-1.575zm.317-.169C11.516 3.801 12.738 3.5 14 3.5c1.244 0 2.462.29 3.655.872a4 4 0 0 0-7.324.031z"/>\n      <path fill="#000" d="M10.015 4.56C10.193 2.005 11.91 0 14 0c2.066 0 3.765 1.957 3.978 4.469a10.96 10.96 0 0 0-.354-.165 4 4 0 0 0-7.286.085 9.194 9.194 0 0 0-.323.171z" opacity=".318"/>\n    </g>\n  </g>\n</svg>\n';
}
__name(getBunundercut, "getBunundercut");
function getExtralong(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M46 28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73zm2 8.242V64H37V46.08A14.036 14.036 0 0 0 45.42 37h.08a4.48 4.48 0 0 0 2.5-.758zM27 64l-11.13-.068.13-27.69a4.48 4.48 0 0 0 2.58.757A14.036 14.036 0 0 0 27 46.081v5.464c.034 1.57.034 5.723 0 12.455z"/><path fill="#fff" d="M46 28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73z" opacity=".258"/></g></svg>';
}
__name(getExtralong, "getExtralong");
function getFade(fill, size) {
  return '\n<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop style="stop-color: ' + fill + '" offset="0"/><stop style="stop-color: ' + fill + '" offset="1" stop-opacity="0"/></linearGradient>\n  <g fill="none">\n    <path fill="url(#a)" d="M28 15v2c-1.323-3.514-3.06-5.389-3.759-6-1.048-.917-2.478-1.795-3.35-3.731-.57-1.268-.474-2.94-.393-4.673C24.958 4.937 28 9.613 28 15zM0 15v2c1.323-3.514 3.06-5.389 3.759-6 1.048-.917 2.478-1.795 3.35-3.731.57-1.268.474-2.94.393-4.673C3.042 4.937 0 9.613 0 15z" transform="translate(18 12)"/>\n    <path fill="' + fill + '" d="M27.977 13.226L40 12a6.838 6.838 0 0 1-6.487 9h-6.216a3 3 0 0 1-3-3v-.7a4.096 4.096 0 0 1 3.68-4.074z"/>\n  </g>\n</svg>';
}
__name(getFade, "getFade");
function getHat(fill, size) {
  return '\n<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64">\n    <path fill="#000" d="M32 19.002c3.881 0 7.548-.376 11 4.218l-1.9 6.493c-.611 1.227-1.636 1.558-2.463.795-2.09-1.929-4.302-2.893-6.637-2.893s-4.547.964-6.637 2.893c-.827.763-1.852.432-2.462-.795L21 23.22c3.452-4.594 7.119-4.218 11-4.218z" fill-opacity=".203"/>\n    <path fill="' + fill + '" d="M29.292 13.206a3 3 0 0 1 5.416 0c6.1.957 10.809 5.236 11.292 12.711a27.685 27.685 0 0 0-3.96-1.302l-.94.602a2 2 0 0 1-2.463.462C36.547 24.559 34.335 24 32 24s-4.547.56-6.637 1.679a2 2 0 0 1-2.462-.462l-.94-.602A27.685 27.685 0 0 0 18 25.917c.483-7.475 5.192-11.754 11.292-12.71z"/>\n    <path fill="#FFF" d="M41.448 24.994l-.349.223a2 2 0 0 1-2.462.462C36.547 24.559 34.335 24 32 24s-4.547.56-6.637 1.679a2 2 0 0 1-2.462-.462l-.349-.223c.866.068 2.183-.479 2.811-.815 2.09-1.12 4.302-1.679 6.637-1.679s4.547.56 6.637 1.679c.628.336 1.945.883 2.811.815z" fill-opacity=".203"/>\n    <path style="mix-blend-mode: overlay" fill="#000" d="M21.96 24.615A27.685 27.685 0 0 0 18 25.917C18.553 17.367 24.632 13 32 13s13.447 4.368 14 12.917a27.685 27.685 0 0 0-3.96-1.302L43 24c-3.452-2.667-7.119-4-11-4s-7.548 1.333-11 4z" fill-opacity=".28"/>\n  </g>\n</svg>\n';
}
__name(getHat, "getHat");
function getMohawk(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M32.034 10c2.746 0 4.217 1.437 4.842 2.052.563.54.968 1.313 1.112 2.14l.663 4.17c.354 1.942-.698 3.665-2.526 4.086C34.5 22.816 33.12 23 32 23c-1.132 0-2.553-.192-4.244-.576-1.832-.423-2.834-2.2-2.375-4.145l.786-4.2a3.972 3.972 0 0 1 1.035-1.932c.624-.642 2.086-2.147 4.832-2.147z"/><path fill="#fff" d="M36.876 12.052c.563.54.968 1.313 1.112 2.14l.663 4.17c.354 1.942-.698 3.665-2.526 4.086C34.5 22.816 33.12 23 32 23c-1.132 0-2.553-.192-4.244-.576-1.832-.423-2.834-2.2-2.375-4.145l.786-4.2a3.972 3.972 0 0 1 1.035-1.932c.26-.268.666-.686 1.25-1.082-.316.488-1.452.987-1.452 2.435V17c-.322 1.645.73 3.154 2.017 3.513 1.187.325 2.186.487 2.981.487.787 0 1.757-.156 2.898-.467 1.285-.356 2.352-1.89 2.104-3.533v-3c0-1.5-1.105-2.544-1.5-3a1.47 1.47 0 0 0-.136-.14c.726.42 1.215.9 1.512 1.192z" opacity=".257"/></g></svg>';
}
__name(getMohawk, "getMohawk");
function getShortcomboverchops(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M17.79 27.558l-.712-6.59A9 9 0 0 1 26.025 11H43a9.237 9.237 0 0 1-.74 3.63 7.926 7.926 0 0 1 4.6 8.351L46 29l-.002-.001v4.222a14.005 14.005 0 0 1-.476 3.42l-2.523.539a1 1 0 0 1-1.188-1.182l1.899-9.114c-1.574-2.093-2.678-5.242-3.314-9.445a9.238 9.238 0 0 1-5.692 2.774c-1.823.191-3.391.287-4.704.287-3 0-5.667-.5-8-1.5 0 2.59-.666 5.098-1.997 7.523l1.974 9.475a1 1 0 0 1-1.188 1.182l-2.522-.538a14.005 14.005 0 0 1-.477-3.421z"/><path fill="#fff" d="M20.003 26.523l1.974 9.475a1 1 0 0 1-1.188 1.182l-2.522-.538a14.005 14.005 0 0 1-.477-3.421v-5.664l-.712-6.59A9 9 0 0 1 26.025 11H43a9.237 9.237 0 0 1-2.604 6.439 9.238 9.238 0 0 1-5.692 2.774c-1.823.191-3.391.287-4.704.287-3 0-5.667-.5-8-1.5 0 2.59-.666 5.098-1.997 7.523zm25.995 2.476v4.222a14.005 14.005 0 0 1-.476 3.42l-2.523.539a1 1 0 0 1-1.188-1.182l1.899-9.114c-1.149-1.528-2.047-3.618-2.696-6.27a9.288 9.288 0 0 0 3.45-4.506 7.91 7.91 0 0 1 2.396 6.873L46 29z" opacity=".259"/></g></svg>';
}
__name(getShortcomboverchops, "getShortcomboverchops");
function getSidebuzz(fill, size) {
  return '\n<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64">\n  <path fill="' + fill + '" d="M37 13.92c5.263 2.012 9 7.11 9 13.08v1c-.887-2.07-1.942-3.711-3.165-4.926-1.834-1.823-3.335-.694-4.526-2.522-.795-1.219-1.231-3.43-1.309-6.633z" opacity=".298"/>\n  <path fill="' + fill + '" d="M14.567 47.184a5.642 5.642 0 0 1-2.93.816H10.5c2.773-2.536 4.562-5.795 5.367-9.777.047-.632.091-1.292.133-1.98a4.48 4.48 0 0 0 2.58.756A14.036 14.036 0 0 0 27 46.081V49a9.403 9.403 0 0 1-9.439 9.531L9.5 58.5c2.667-5.484 4.333-9.189 5-11.113.023-.066.045-.133.067-.203zM32.653 25.09C28.466 28.4 16 27.256 16 33.568V27.5C16 18.387 23.163 11 32 11c4.84 0 5.683 2.647 5.457 6.23-.188 2.99-.617 4.546-4.804 7.859z"/>\n</svg>';
}
__name(getSidebuzz, "getSidebuzz");
function getStraightbun(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M22.2 17.002c-.131-.647-.2-1.316-.2-2.002 0-5.523 4.477-10 10-10s10 4.477 10 10c0 .686-.069 1.355-.2 2.002C39.274 14.526 35.815 13 32 13s-7.274 1.526-9.8 4.002z"/><path fill="#f55d81" d="M45.934 25.632C43.828 20.564 38.83 17 33 17h-2c-5.83 0-10.828 3.564-12.934 8.632C18.753 18.542 24.73 13 32 13s13.247 5.542 13.934 12.632z"/></g></svg>';
}
__name(getStraightbun, "getStraightbun");
function getEyesClosed(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="#1b0640" d="M24.712 27.263a.75.75 0 1 0-1.424.474c.434 1.301 1.383 2.013 2.712 2.013s2.278-.712 2.712-2.013a.75.75 0 1 0-1.424-.474c-.233.699-.617.987-1.288.987s-1.055-.288-1.288-.987zm12 0a.75.75 0 0 0-1.424.474c.434 1.301 1.383 2.013 2.712 2.013s2.278-.712 2.712-2.013a.75.75 0 0 0-1.424-.474c-.233.699-.617.987-1.288.987s-1.055-.288-1.288-.987z"/></svg>';
}
__name(getEyesClosed, "getEyesClosed");
function getEyesHearts(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><path fill="#f55d81" d="M25.5 31c-2.1-1.5-3.2-2.6-3.2-3.9 0-1 .8-1.8 1.8-1.8.55 0 1.05.25 1.4.7.35-.45.85-.7 1.4-.7 1 0 1.8.8 1.8 1.8 0 1.3-1.1 2.4-3.2 3.9zm13 0c-2.1-1.5-3.2-2.6-3.2-3.9 0-1 .8-1.8 1.8-1.8.55 0 1.05.25 1.4.7.35-.45.85-.7 1.4-.7 1 0 1.8.8 1.8 1.8 0 1.3-1.1 2.4-3.2 3.9z"/></svg>';
}
__name(getEyesHearts, "getEyesHearts");
function getEyesDizzy(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g stroke="#1b0640" stroke-width="1.5" stroke-linecap="round"><path d="m24 27 3.5 3.5m0-3.5L24 30.5m10.5-3.5 3.5 3.5m0-3.5-3.5 3.5"/></g></svg>';
}
__name(getEyesDizzy, "getEyesDizzy");
function getEyesSideeye(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="#fff" d="M28.5 28.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill="#1b0640" d="M28.4 28.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm13 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></g></svg>';
}
__name(getEyesSideeye, "getEyesSideeye");
function getMouthGrin(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="#1b0640" d="M26.5 38.5h11a5.5 5.5 0 0 1-11 0z"/><path fill="#fff" d="M27.6 39.5h8.8v.8a1.4 1.4 0 0 1-1.4 1.4h-6a1.4 1.4 0 0 1-1.4-1.4z"/></g></svg>';
}
__name(getMouthGrin, "getMouthGrin");
function getMouthTongue(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="#1b0640" d="M28.004 39.868a1 1 0 0 1 .992-1.736c1.02.583 2.018.868 3.004.868s1.983-.285 3.004-.868a1 1 0 1 1 .992 1.736C34.684 40.618 33.348 41 32 41c-1.348 0-2.684-.382-3.996-1.132z"/><path fill="#f57b98" d="M30 40.6c.66.27 1.33.4 2 .4s1.34-.13 2-.4v1.4a2 2 0 0 1-4 0z"/></g></svg>';
}
__name(getMouthTongue, "getMouthTongue");
function getMouthWhistle(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><ellipse fill="#1b0640" cx="33" cy="40.3" rx="1.7" ry="2.1"/></svg>';
}
__name(getMouthWhistle, "getMouthWhistle");
function getMouthLaugh(param, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="#1b0640" d="M27 38h10c0 3.6-2.2 6-5 6s-5-2.4-5-6z"/><path fill="#f57b98" d="M29.3 42.8c.76.76 1.68 1.2 2.7 1.2s1.94-.44 2.7-1.2c-.7-.95-1.63-1.5-2.7-1.5s-2 .55-2.7 1.5z"/></g></svg>';
}
__name(getMouthLaugh, "getMouthLaugh");
function getNosePointed(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M31.13 31.5a1 1 0 0 1 1.74 0l2.6 4.55a1 1 0 0 1-.87 1.5h-5.2a1 1 0 0 1-.87-1.5z"/><path style="mix-blend-mode: overlay" fill="#fff" d="M32 31l2.6 4.55a1 1 0 0 1-.87 1.5H32z" opacity=".36"/></g></svg>';
}
__name(getNosePointed, "getNosePointed");
function getNoseButton(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><circle fill="' + fill + '" cx="32" cy="35.3" r="2.3"/><path style="mix-blend-mode: overlay" fill="#fff" d="M32 33a2.3 2.3 0 0 1 0 4.6z" opacity=".36"/></g></svg>';
}
__name(getNoseButton, "getNoseButton");
function getBodyHoodie(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none"><path fill="' + fill + '" d="M27 51v.47a5 5 0 0 0 10 0V51c7.063 1.523 12.93 6.735 16 13H11c3.07-6.265 8.937-11.477 16-13z"/><path fill="#000" opacity=".18" d="M23.5 52.2c2.2 3.1 5.1 4.8 8.5 4.8s6.3-1.7 8.5-4.8l2.6 1c-2.5 4-6.4 6.2-11.1 6.2s-8.6-2.2-11.1-6.2z"/><path stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".8" d="M29.5 58.5v4m5-4v4"/></g></svg>';
}
__name(getBodyHoodie, "getBodyHoodie");
function getBodyStripes(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><defs><path id="stripes-body" d="M27 51v.47a5 5 0 0 0 10 0V51c7.063 1.523 12.93 6.735 16 13H11c3.07-6.265 8.937-11.477 16-13z"/><clipPath id="stripes-clip"><use href="#stripes-body"/></clipPath></defs><g fill="none"><use fill="' + fill + '" href="#stripes-body"/><g clip-path="url(#stripes-clip)" fill="#fff" opacity=".4"><rect x="10" y="54" width="44" height="2.4"/><rect x="10" y="59" width="44" height="2.4"/></g></g></svg>';
}
__name(getBodyStripes, "getBodyStripes");
function getEarring(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><circle cx="17" cy="37.5" r="1.7" fill="none" stroke="' + fill + '" stroke-width="1.3"/></svg>';
}
__name(getEarring, "getEarring");
function getEarrings(fill, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64"><g fill="none" stroke="' + fill + '" stroke-width="1.3"><circle cx="17" cy="37.5" r="1.7"/><circle cx="47" cy="37.5" r="1.7"/></g></svg>';
}
__name(getEarrings, "getEarrings");
function render(name, fill, size) {
  switch (name) {
    case "Background":
      return getBackground(fill, size);
    case "Bald":
      return getBald(fill, size);
    case "Balding":
      return getBalding(fill, size);
    case "Beanie":
      return getBeanie(fill, size);
    case "BeardMustache":
      return getBeardMustache(fill, size);
    case "Bigcurls":
      return getBigcurls(fill, size);
    case "Bigsmile":
      return getMouthBigsmile(fill, size);
    case "Bobbangs":
      return getBobbangs(fill, size);
    case "Bobcut":
      return getBobcut(fill, size);
    case "Buncurls":
      return getBuncurls(fill, size);
    case "Bunundercut":
      return getBunundercut(fill, size);
    case "Button":
      return getNoseButton(fill, size);
    case "Buzzcut":
      return getBuzzcut(fill, size);
    case "Checkered":
      return getCheckered(fill, size);
    case "Closed":
      return getEyesClosed(fill, size);
    case "Curlybun":
      return getCurlybun(fill, size);
    case "Dizzy":
      return getEyesDizzy(fill, size);
    case "Earring":
      return getEarring(fill, size);
    case "Earrings":
      return getEarrings(fill, size);
    case "Extralong":
      return getExtralong(fill, size);
    case "Fade":
      return getFade(fill, size);
    case "Frown":
      return getMouthFrown(fill, size);
    case "Glasses":
      return getEyesGlasses(fill, size);
    case "Goatee":
      return getGoatee(fill, size);
    case "Grin":
      return getMouthGrin(fill, size);
    case "Happy":
      return getEyesHappy(fill, size);
    case "Hat":
      return getHat(fill, size);
    case "Hearts":
      return getEyesHearts(fill, size);
    case "Hightopcurly":
      return getCurlyhightop(fill, size);
    case "Hoodie":
      return getBodyHoodie(fill, size);
    case "Laugh":
      return getMouthLaugh(fill, size);
    case "Lips":
      return getMouthLips(fill, size);
    case "Long":
      return getLong(fill, size);
    case "Mediumround":
      return getNoseMediumround(fill, size);
    case "Mohawk":
      return getMohawk(fill, size);
    case "Mustache":
      return getMustache(fill, size);
    case "Open":
      return getEyesOpen(fill, size);
    case "Oval":
      return getBodyOval(fill, size);
    case "Pacifier":
      return getMouthPacifier(fill, size);
    case "Pigtails":
      return getPigtails(fill, size);
    case "Pointed":
      return getNosePointed(fill, size);
    case "Round":
      return getBodyRound(fill, size);
    case "Shadow":
      return getShadow(fill, size);
    case "Shortcombover":
      return getShortcombover(fill, size);
    case "Shortcomboverchops":
      return getShortcomboverchops(fill, size);
    case "Sidebuzz":
      return getSidebuzz(fill, size);
    case "Sideeye":
      return getEyesSideeye(fill, size);
    case "Skin":
      return getSkin(fill, size);
    case "Sleepy":
      return getEyesSleepy(fill, size);
    case "Smallround":
      return getNoseSmallround(fill, size);
    case "Smile":
      return getMouthSmile(fill, size);
    case "Smirk":
      return getMouthSmirk(fill, size);
    case "Soulpatch":
      return getSoulpatch(fill, size);
    case "Square":
      return getBodySquare(fill, size);
    case "Straightbun":
      return getStraightbun(fill, size);
    case "Stripes":
      return getBodyStripes(fill, size);
    case "Sunglasses":
      return getEyesSunglasses(fill, size);
    case "Surprise":
      return getMouthSurprise(fill, size);
    case "Tongue":
      return getMouthTongue(fill, size);
    case "Walrus":
      return getWalrus(fill, size);
    case "Whistle":
      return getMouthWhistle(fill, size);
    case "Wink":
      return getEyesWink(fill, size);
    case "Wrinkles":
      return getNoseWrinkles(fill, size);
    default:
      return "";
  }
}
__name(render, "render");

// src/helpers/shareUrl.js
init_modules_watch_stub();
var HEX = /^[0-9A-Fa-f]{6}$/;
var CODE_VERSION = 1;
var B64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
var STYLE_FIELDS = [
  ["hair", "hairStyles", 5],
  ["facialHair", "facialHairStyles", 4],
  ["body", "bodyStyles", 4],
  ["eyes", "eyeStyles", 4],
  ["mouth", "mouthStyles", 4],
  ["nose", "noseStyles", 4],
  ["accessories", "accessoryStyles", 3]
];
var COLOR_FIELDS = [
  ["skinColor", "skinColors"],
  ["hairColor", "hairColors"],
  ["facialHairColor", "facialHairColors"],
  ["bodyColor", "bodyColors"],
  ["accessoriesColor", "accessoryColors"],
  ["bgColor", "bgColors"]
];
function encodeStylesToCode(config, styles) {
  let bits = CODE_VERSION.toString(2).padStart(4, "0");
  for (const [key, listKey, width] of STYLE_FIELDS) {
    const idx = config[listKey].indexOf(styles[key]);
    if (idx < 0 || idx >= 1 << width) return null;
    bits += idx.toString(2).padStart(width, "0");
  }
  for (const [key, listKey] of COLOR_FIELDS) {
    const color = styles[key];
    if (!HEX.test(color)) return null;
    const idx = config[listKey].indexOf(color.toUpperCase());
    if (idx >= 0 && idx < 32) {
      bits += "0" + idx.toString(2).padStart(5, "0");
    } else {
      bits += "1" + parseInt(color, 16).toString(2).padStart(24, "0");
    }
  }
  let code = "";
  for (let i = 0; i < bits.length; i += 6) {
    code += B64URL[parseInt(bits.slice(i, i + 6).padEnd(6, "0"), 2)];
  }
  return code;
}
__name(encodeStylesToCode, "encodeStylesToCode");
function decodeCodeToStyles(config, code) {
  if (!/^[A-Za-z0-9_-]{8,64}$/.test(code)) return null;
  let bits = "";
  for (const ch of code) {
    bits += B64URL.indexOf(ch).toString(2).padStart(6, "0");
  }
  let pos = 0;
  const read = /* @__PURE__ */ __name((width) => {
    if (pos + width > bits.length) return null;
    const v = parseInt(bits.slice(pos, pos + width), 2);
    pos += width;
    return v;
  }, "read");
  if (read(4) !== CODE_VERSION) return null;
  const styles = { skin: "Skin", head: "Head" };
  for (const [key, listKey, width] of STYLE_FIELDS) {
    const idx = read(width);
    if (idx === null || idx >= config[listKey].length) return null;
    styles[key] = config[listKey][idx];
  }
  for (const [key, listKey] of COLOR_FIELDS) {
    const flag = read(1);
    if (flag === null) return null;
    if (flag === 0) {
      const idx = read(5);
      if (idx === null || idx >= config[listKey].length) return null;
      styles[key] = config[listKey][idx];
    } else {
      const raw = read(24);
      if (raw === null) return null;
      styles[key] = raw.toString(16).toUpperCase().padStart(6, "0");
    }
  }
  return styles;
}
__name(decodeCodeToStyles, "decodeCodeToStyles");

// worker/index.js
var CODE_PATH = /^\/[A-Za-z0-9_-]{8,64}$/;
var HEX2 = /^[0-9A-Fa-f]{6}$/;
var CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Mcp-Protocol-Version"
};
var STYLE_PARAMS = [
  ["hair", "hairStyles"],
  ["facialHair", "facialHairStyles"],
  ["body", "bodyStyles"],
  ["eyes", "eyeStyles"],
  ["mouth", "mouthStyles"],
  ["nose", "noseStyles"],
  ["accessories", "accessoryStyles"]
];
var COLOR_PARAMS = [
  "skinColor",
  "hairColor",
  "facialHairColor",
  "bodyColor",
  "accessoriesColor",
  "bgColor"
];
var DEFAULT_STYLES = {
  skin: "Skin",
  skinColor: "B16A5B",
  hair: "Balding",
  hairColor: "E16381",
  facialHair: "Mustache",
  facialHairColor: "6C4545",
  body: "Square",
  bodyColor: "5A45FF",
  eyes: "Glasses",
  mouth: "Pacifier",
  nose: "Smallround",
  accessories: "None",
  accessoriesColor: "F3B63A",
  bgColor: "FFCC65",
  head: "Head"
};
function randomStyles() {
  const pick = /* @__PURE__ */ __name((list) => list[Math.floor(Math.random() * list.length)], "pick");
  return {
    skin: "Skin",
    head: "Head",
    skinColor: pick(config_default.skinColors),
    hair: pick(config_default.hairStyles),
    hairColor: pick(config_default.hairColors),
    facialHair: pick(config_default.facialHairStyles),
    facialHairColor: pick(config_default.facialHairColors),
    body: pick(config_default.bodyStyles),
    bodyColor: pick(config_default.bodyColors),
    eyes: pick(config_default.eyeStyles),
    mouth: pick(config_default.mouthStyles),
    nose: pick(config_default.noseStyles),
    accessories: Math.random() < 0.6 ? "None" : pick(config_default.accessoryStyles),
    accessoriesColor: pick(config_default.accessoryColors),
    bgColor: pick(config_default.bgColors)
  };
}
__name(randomStyles, "randomStyles");
function stylesFromParams(params) {
  const styles = { ...DEFAULT_STYLES };
  const errors = [];
  for (const [key, listKey] of STYLE_PARAMS) {
    const v = params.get(key);
    if (v === null) continue;
    if (config_default[listKey].includes(v)) styles[key] = v;
    else errors.push(`${key}: "${v}" is not one of ${config_default[listKey].join(", ")}`);
  }
  for (const key of COLOR_PARAMS) {
    const v = params.get(key);
    if (v === null) continue;
    if (HEX2.test(v)) styles[key] = v.toUpperCase();
    else errors.push(`${key}: "${v}" is not a 6-digit hex color`);
  }
  return { styles, errors };
}
__name(stylesFromParams, "stylesFromParams");
function composeSvg(styles, size = 512) {
  const layers = [
    ["Background", styles.bgColor],
    [styles.skin, styles.skinColor],
    [styles.hair, styles.hairColor],
    [styles.body, styles.bodyColor],
    [styles.mouth, "000000"],
    [styles.facialHair, styles.facialHairColor],
    [styles.nose, styles.skinColor],
    [styles.eyes, "000000"],
    [styles.accessories, styles.accessoriesColor]
  ];
  const inner = layers.map(([name, fill]) => render(name, "#" + fill, "64")).filter((svg) => svg !== "").join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">` + inner + `</svg>`;
}
__name(composeSvg, "composeSvg");
function avatarUrls(origin, styles) {
  const code = encodeStylesToCode(config_default, styles);
  const params = new URLSearchParams();
  for (const [key] of STYLE_PARAMS) params.set(key, styles[key]);
  for (const key of COLOR_PARAMS) params.set(key, styles[key]);
  return {
    shareUrl: code ? `${origin}/${code}` : `${origin}/?${params}`,
    imageUrl: `${origin}/api/avatar.svg?${params}`,
    params: Object.fromEntries(params)
  };
}
__name(avatarUrls, "avatarUrls");
var MCP_TOOLS = [
  {
    name: "list_avatar_options",
    description: "List every valid style name and color palette for Personas avatars. Colors are 6-digit hex without '#'; any custom hex is also accepted.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false }
  },
  {
    name: "generate_avatar",
    description: "Generate a Personas avatar from the given features. All fields are optional; omitted ones use the classic default. Returns a share URL and an SVG image URL. Use list_avatar_options for valid values.",
    inputSchema: {
      type: "object",
      properties: Object.fromEntries([
        ...STYLE_PARAMS.map(([key, listKey]) => [
          key,
          { type: "string", description: `One of: ${config_default[listKey].join(", ")}` }
        ]),
        ...COLOR_PARAMS.map((key) => [
          key,
          { type: "string", description: "6-digit hex color without '#'" }
        ])
      ]),
      additionalProperties: false
    }
  },
  {
    name: "random_avatar",
    description: "Generate a random Personas avatar. Returns a share URL and an SVG image URL.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false }
  }
];
function mcpToolResult(origin, styles) {
  const { shareUrl, imageUrl, params } = avatarUrls(origin, styles);
  const text = JSON.stringify({ shareUrl, imageUrl, markdown: `![Personas avatar](${imageUrl})`, avatar: params }, null, 2);
  return { content: [{ type: "text", text }] };
}
__name(mcpToolResult, "mcpToolResult");
function handleMcp(body, origin) {
  const { id, method, params } = body;
  const reply = /* @__PURE__ */ __name((result) => ({ jsonrpc: "2.0", id, result }), "reply");
  const error = /* @__PURE__ */ __name((code, message) => ({ jsonrpc: "2.0", id, error: { code, message } }), "error");
  switch (method) {
    case "initialize":
      return reply({
        protocolVersion: params?.protocolVersion || "2025-06-18",
        capabilities: { tools: {} },
        serverInfo: { name: "personas", version: "2.0.0" }
      });
    case "ping":
      return reply({});
    case "tools/list":
      return reply({ tools: MCP_TOOLS });
    case "tools/call": {
      const { name, arguments: args = {} } = params ?? {};
      if (name === "list_avatar_options") {
        return reply({ content: [{ type: "text", text: JSON.stringify(config_default, null, 2) }] });
      }
      if (name === "generate_avatar") {
        const search = new URLSearchParams(
          Object.entries(args).filter(([, v]) => typeof v === "string")
        );
        const { styles, errors } = stylesFromParams(search);
        if (errors.length > 0) {
          return reply({ content: [{ type: "text", text: "Invalid arguments:\n" + errors.join("\n") }], isError: true });
        }
        return reply(mcpToolResult(origin, styles));
      }
      if (name === "random_avatar") {
        return reply(mcpToolResult(origin, randomStyles()));
      }
      return error(-32602, `Unknown tool: ${name}`);
    }
    default:
      return error(-32601, `Method not supported: ${method}`);
  }
}
__name(handleMcp, "handleMcp");
var worker_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }
    if (pathname === "/api/options") {
      return Response.json(config_default, {
        headers: { ...CORS, "Cache-Control": "public, max-age=3600" }
      });
    }
    if (pathname === "/api/avatar.svg") {
      let styles;
      if (url.searchParams.get("random") === "1") {
        styles = randomStyles();
      } else if (url.searchParams.has("code")) {
        styles = decodeCodeToStyles(config_default, url.searchParams.get("code"));
        if (!styles) {
          return Response.json({ error: "Invalid avatar code" }, { status: 400, headers: CORS });
        }
      } else {
        const { styles: s, errors } = stylesFromParams(url.searchParams);
        if (errors.length > 0) {
          return Response.json({ error: "Invalid parameters", details: errors }, { status: 400, headers: CORS });
        }
        styles = s;
      }
      const isRandom = url.searchParams.get("random") === "1";
      return new Response(composeSvg(styles), {
        headers: {
          ...CORS,
          "Content-Type": "image/svg+xml",
          "Cache-Control": isRandom ? "no-store" : "public, max-age=31536000, immutable"
        }
      });
    }
    if (pathname === "/mcp") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: { ...CORS, Allow: "POST, OPTIONS" } });
      }
      let body;
      try {
        body = await request.json();
      } catch {
        return Response.json(
          { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
          { status: 400, headers: CORS }
        );
      }
      if (body.id === void 0 || body.id === null) {
        return new Response(null, { status: 202, headers: CORS });
      }
      return Response.json(handleMcp(body, url.origin), { headers: CORS });
    }
    if (request.method === "GET" && CODE_PATH.test(pathname)) {
      return env.ASSETS.fetch(new Request(new URL("/", url), request));
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-hfhVdy/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-hfhVdy/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map
