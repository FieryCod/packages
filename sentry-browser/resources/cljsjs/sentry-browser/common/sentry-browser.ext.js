/**********************************************************************
 * Extern for Sentry
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var Sentry = {
  "BrowserClient": function () {},
  "Hub": function () {},
  "Integrations": {
    "Breadcrumbs": {
      "addBreadcrumb": function () {},
      "id": {}
    },
    "FunctionToString": {
      "id": {}
    },
    "GlobalHandlers": {
      "id": {}
    },
    "InboundFilters": {
      "id": {}
    },
    "LinkedErrors": {
      "id": {}
    },
    "TryCatch": {
      "id": {}
    },
    "UserAgent": {
      "id": {}
    }
  },
  "SDK_NAME": {},
  "SDK_VERSION": {},
  "Scope": {
    "clone": function () {}
  },
  "Severity": {
    "Critical": {},
    "Debug": {},
    "Error": {},
    "Fatal": {},
    "Info": {},
    "Log": {},
    "Warning": {},
    "fromString": function () {}
  },
  "Span": {
    "fromTraceparent": function () {}
  },
  "Status": {
    "Failed": {},
    "Invalid": {},
    "RateLimit": {},
    "Skipped": {},
    "Success": {},
    "Unknown": {},
    "fromHttpCode": function () {}
  },
  "Transports": {
    "BaseTransport": function () {},
    "FetchTransport": function () {},
    "XHRTransport": function () {}
  },
  "addBreadcrumb": function () {},
  "addGlobalEventProcessor": function () {},
  "captureEvent": function () {},
  "captureException": function () {},
  "captureMessage": function () {},
  "close": function () {},
  "configureScope": function () {},
  "defaultIntegrations": {},
  "flush": function () {},
  "forceLoad": function () {},
  "getCurrentHub": function () {},
  "getHubFromCarrier": function () {},
  "init": function () {},
  "lastEventId": function () {},
  "onLoad": function () {},
  "setContext": function () {},
  "setExtra": function () {},
  "setExtras": function () {},
  "setTag": function () {},
  "setTags": function () {},
  "setUser": function () {},
  "showReportDialog": function () {},
  "withScope": function () {},
  "wrap": function () {}
};
Sentry.BrowserClient.prototype = {
  "_addIntegrations": function () {},
  "_getBackend": function () {},
  "_handleAsyncBeforeSend": function () {},
  "_isClientProcessing": function () {},
  "_isEnabled": function () {},
  "_prepareEvent": function () {},
  "_processEvent": function () {},
  "captureEvent": function () {},
  "captureException": function () {},
  "captureMessage": function () {},
  "close": function () {},
  "constructor": function () {},
  "flush": function () {},
  "getDsn": function () {},
  "getIntegration": function () {},
  "getIntegrations": function () {},
  "getOptions": function () {},
  "showReportDialog": function () {}
};
Sentry.Hub.prototype = {
  "_invokeClient": function () {},
  "addBreadcrumb": function () {},
  "bindClient": function () {},
  "captureEvent": function () {},
  "captureException": function () {},
  "captureMessage": function () {},
  "configureScope": function () {},
  "getClient": function () {},
  "getIntegration": function () {},
  "getScope": function () {},
  "getStack": function () {},
  "getStackTop": function () {},
  "isOlderThan": function () {},
  "lastEventId": function () {},
  "popScope": function () {},
  "pushScope": function () {},
  "run": function () {},
  "setContext": function () {},
  "setExtra": function () {},
  "setExtras": function () {},
  "setTag": function () {},
  "setTags": function () {},
  "setUser": function () {},
  "traceHeaders": function () {},
  "withScope": function () {}
};
Sentry.Integrations.Breadcrumbs.prototype = {
  "_instrumentConsole": function () {},
  "_instrumentDOM": function () {},
  "_instrumentFetch": function () {},
  "_instrumentHistory": function () {},
  "_instrumentXHR": function () {},
  "setupOnce": function () {}
};
Sentry.Integrations.FunctionToString.prototype = {
  "setupOnce": function () {}
};
Sentry.Integrations.GlobalHandlers.prototype = {
  "_eventFromGlobalHandler": function () {},
  "_eventFromIncompleteRejection": function () {},
  "setupOnce": function () {}
};
Sentry.Integrations.InboundFilters.prototype = {
  "_getEventFilterUrl": function () {},
  "_getPossibleEventMessages": function () {},
  "_isBlacklistedUrl": function () {},
  "_isIgnoredError": function () {},
  "_isSentryError": function () {},
  "_isWhitelistedUrl": function () {},
  "_mergeOptions": function () {},
  "_shouldDropEvent": function () {},
  "setupOnce": function () {}
};
Sentry.Integrations.LinkedErrors.prototype = {
  "_handler": function () {},
  "_walkErrorTree": function () {},
  "setupOnce": function () {}
};
Sentry.Integrations.TryCatch.prototype = {
  "_wrapEventTarget": function () {},
  "_wrapRAF": function () {},
  "_wrapTimeFunction": function () {},
  "setupOnce": function () {}
};
Sentry.Integrations.UserAgent.prototype = {
  "setupOnce": function () {}
};
Sentry.Scope.prototype = {
  "_applyFingerprint": function () {},
  "_notifyEventProcessors": function () {},
  "_notifyScopeListeners": function () {},
  "addBreadcrumb": function () {},
  "addEventProcessor": function () {},
  "addScopeListener": function () {},
  "applyToEvent": function () {},
  "clear": function () {},
  "clearBreadcrumbs": function () {},
  "getSpan": function () {},
  "setContext": function () {},
  "setExtra": function () {},
  "setExtras": function () {},
  "setFingerprint": function () {},
  "setLevel": function () {},
  "setSpan": function () {},
  "setTag": function () {},
  "setTags": function () {},
  "setTransaction": function () {},
  "setUser": function () {},
  "startSpan": function () {}
};
Sentry.Span.prototype = {
  "setParent": function () {},
  "setSampled": function () {},
  "toJSON": function () {},
  "toTraceparent": function () {}
};
Sentry.Transports.BaseTransport.prototype = {
  "close": function () {},
  "sendEvent": function () {}
};
Sentry.Transports.FetchTransport.prototype = {
  "close": function () {},
  "constructor": function () {},
  "sendEvent": function () {}
};
Sentry.Transports.XHRTransport.prototype = {
  "close": function () {},
  "constructor": function () {},
  "sendEvent": function () {}
};
/**********************************************************************
 * End Generated Extern for Sentry
/**********************************************************************/