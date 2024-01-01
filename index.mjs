// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-property-key@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-flags@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,n){if("object"!=typeof s||null===s)throw new TypeError(t("invalid argument. First argument must be an ndarray. Value: `%s`.",s));if(!e(n))throw new TypeError(t("invalid argument. Second argument must be a valid property name. Value: `%s`.",n));return r(s,!1)[n]}export{s as default};
//# sourceMappingURL=index.mjs.map
