var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

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

// worker/index.js
var CODE_PATH = /^\/[A-Za-z0-9_-]{8,64}$/;
var CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
var worker_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }
    if (url.pathname === "/api/options") {
      return Response.json(config_default, {
        headers: { ...CORS, "Cache-Control": "public, max-age=3600" }
      });
    }
    if (request.method === "GET" && CODE_PATH.test(url.pathname)) {
      const shell = new URL("/", url);
      return env.ASSETS.fetch(new Request(shell, request));
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
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
//# sourceMappingURL=index.js.map
