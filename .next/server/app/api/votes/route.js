"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/votes/route";
exports.ids = ["app/api/votes/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvotes%2Froute&page=%2Fapi%2Fvotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvotes%2Froute.ts&appDir=C%3A%5CUsers%5CDSU%20Student%5CDesktop%5CStuff%5CSchool%5CPersonal%5Ccalcaura%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDSU%20Student%5CDesktop%5CStuff%5CSchool%5CPersonal%5Ccalcaura&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvotes%2Froute&page=%2Fapi%2Fvotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvotes%2Froute.ts&appDir=C%3A%5CUsers%5CDSU%20Student%5CDesktop%5CStuff%5CSchool%5CPersonal%5Ccalcaura%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDSU%20Student%5CDesktop%5CStuff%5CSchool%5CPersonal%5Ccalcaura&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_DSU_Student_Desktop_Stuff_School_Personal_calcaura_src_app_api_votes_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/votes/route.ts */ \"(rsc)/./src/app/api/votes/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/votes/route\",\n        pathname: \"/api/votes\",\n        filename: \"route\",\n        bundlePath: \"app/api/votes/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\DSU Student\\\\Desktop\\\\Stuff\\\\School\\\\Personal\\\\calcaura\\\\src\\\\app\\\\api\\\\votes\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_DSU_Student_Desktop_Stuff_School_Personal_calcaura_src_app_api_votes_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/votes/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ2b3RlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdm90ZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ2b3RlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNEU1UlMjBTdHVkZW50JTVDRGVza3RvcCU1Q1N0dWZmJTVDU2Nob29sJTVDUGVyc29uYWwlNUNjYWxjYXVyYSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDRFNVJTIwU3R1ZGVudCU1Q0Rlc2t0b3AlNUNTdHVmZiU1Q1NjaG9vbCU1Q1BlcnNvbmFsJTVDY2FsY2F1cmEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tEO0FBQy9IO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsY2F1cmEvPzYxMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRFNVIFN0dWRlbnRcXFxcRGVza3RvcFxcXFxTdHVmZlxcXFxTY2hvb2xcXFxcUGVyc29uYWxcXFxcY2FsY2F1cmFcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdm90ZXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ZvdGVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdm90ZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ZvdGVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcRFNVIFN0dWRlbnRcXFxcRGVza3RvcFxcXFxTdHVmZlxcXFxTY2hvb2xcXFxcUGVyc29uYWxcXFxcY2FsY2F1cmFcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdm90ZXNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3ZvdGVzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvotes%2Froute&page=%2Fapi%2Fvotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvotes%2Froute.ts&appDir=C%3A%5CUsers%5CDSU%20Student%5CDesktop%5CStuff%5CSchool%5CPersonal%5Ccalcaura%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDSU%20Student%5CDesktop%5CStuff%5CSchool%5CPersonal%5Ccalcaura&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // Note: need to add bcrypt to package.json later if using\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.username || !credentials?.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        username: credentials.username\n                    }\n                });\n                if (!user) return null;\n                const isPasswordValid = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.password);\n                if (!isPasswordValid) return null;\n                return {\n                    id: user.id,\n                    name: user.username,\n                    isAdmin: user.isAdmin\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.isAdmin = token.isAdmin;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.isAdmin = user.isAdmin;\n            }\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2lDO0FBQzVCO0FBQ0wsQ0FBQywwREFBMEQ7QUFFckYsTUFBTUksY0FBYztJQUN6QkMsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtnQkFBTztnQkFDNUNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFlBQVksQ0FBQ0QsYUFBYUksVUFBVSxPQUFPO2dCQUU3RCxNQUFNRSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVQLFVBQVVELFlBQVlDLFFBQVE7b0JBQUM7Z0JBQzFDO2dCQUVBLElBQUksQ0FBQ0ssTUFBTSxPQUFPO2dCQUVsQixNQUFNRyxrQkFBa0IsTUFBTWIsK0NBQU9BLENBQUNJLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFFekUsSUFBSSxDQUFDSyxpQkFBaUIsT0FBTztnQkFFN0IsT0FBTztvQkFDTEMsSUFBSUosS0FBS0ksRUFBRTtvQkFDWFgsTUFBTU8sS0FBS0wsUUFBUTtvQkFDbkJVLFNBQVNMLEtBQUtLLE9BQU87Z0JBQ3ZCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRUMsS0FBSyxFQUFPO1lBQ25DLElBQUlBLE9BQU87Z0JBQ1RELFFBQVFQLElBQUksQ0FBQ0ksRUFBRSxHQUFHSSxNQUFNSixFQUFFO2dCQUMxQkcsUUFBUVAsSUFBSSxDQUFDSyxPQUFPLEdBQUdHLE1BQU1ILE9BQU87WUFDdEM7WUFDQSxPQUFPRTtRQUNUO1FBQ0EsTUFBTUUsS0FBSSxFQUFFRCxLQUFLLEVBQUVSLElBQUksRUFBTztZQUM1QixJQUFJQSxNQUFNO2dCQUNSUSxNQUFNSixFQUFFLEdBQUdKLEtBQUtJLEVBQUU7Z0JBQ2xCSSxNQUFNSCxPQUFPLEdBQUdMLEtBQUtLLE9BQU87WUFDOUI7WUFDQSxPQUFPRztRQUNUO0lBQ0Y7SUFDQUUsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7QUFDRixFQUFFO0FBRUYsTUFBTUMsVUFBVXpCLGdEQUFRQSxDQUFDSTtBQUNrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGNhdXJhLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdFwiOyAvLyBOb3RlOiBuZWVkIHRvIGFkZCBiY3J5cHQgdG8gcGFja2FnZS5qc29uIGxhdGVyIGlmIHVzaW5nXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJVc2VybmFtZVwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy51c2VybmFtZSB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSByZXR1cm4gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICBuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgICAgIGlzQWRtaW46IHVzZXIuaXNBZG1pbixcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfTogYW55KSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XG4gICAgICAgIHNlc3Npb24udXNlci5pc0FkbWluID0gdG9rZW4uaXNBZG1pbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfTogYW55KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICAgIHRva2VuLmlzQWRtaW4gPSB1c2VyLmlzQWRtaW47XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJjb21wYXJlIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzUGFzc3dvcmRWYWxpZCIsImlkIiwiaXNBZG1pbiIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsImp3dCIsInBhZ2VzIiwic2lnbkluIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/votes/route.ts":
/*!************************************!*\
  !*** ./src/app/api/votes/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { incidentId, type } = await req.json(); // type: \"AGREE\" or \"DISAGREE\"\n    // Check if incident exists and is still open\n    const incident = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.incident.findUnique({\n        where: {\n            id: incidentId\n        },\n        include: {\n            votes: true\n        }\n    });\n    if (!incident || [\n        \"APPROVED\",\n        \"REJECTED\"\n    ].includes(incident.status)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            error: \"Incident closed or not found\"\n        }, {\n            status: 400\n        });\n    }\n    // Prevent double voting\n    const existingVote = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.vote.findUnique({\n        where: {\n            userId_incidentId: {\n                userId: session.user.id,\n                incidentId: incidentId\n            }\n        }\n    });\n    if (existingVote) {\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            error: \"You already voted\"\n        }, {\n            status: 400\n        });\n    }\n    // Record the vote\n    const vote = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.vote.create({\n        data: {\n            userId: session.user.id,\n            incidentId,\n            type\n        }\n    });\n    // Rule 2 Logic\n    const allVotes = [\n        ...incident.votes,\n        vote\n    ];\n    const agreeCount = allVotes.filter((v)=>v.type === \"AGREE\").length;\n    const disagreeCount = allVotes.filter((v)=>v.type === \"DISAGREE\").length;\n    // Get total user count to calculate 50%\n    const userCount = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.count();\n    let newStatus = incident.status;\n    let newExpiresAt = incident.expiresAt;\n    if (type === \"DISAGREE\" && incident.status === \"PENDING\") {\n        // If anyone votes \"Disagree\" before it is approved, the status changes to \"Disputed.\"\n        // Once \"Disputed,\" the voting window remains open for 24 hours.\n        newStatus = \"DISPUTED\";\n        newExpiresAt = new Date(incident.createdAt.getTime() + 24 * 60 * 60 * 1000);\n    } else if (agreeCount > userCount / 2 && incident.status === \"PENDING\") {\n        // If more than 50% of the group votes \"Agree\" within 1 hour, the report is automatically \"Approved\"\n        newStatus = \"APPROVED\";\n        // Apply points immediately\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.update({\n            where: {\n                id: incident.offenderId\n            },\n            data: {\n                auraScore: {\n                    increment: incident.auraAmount\n                }\n            }\n        });\n    }\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.incident.update({\n        where: {\n            id: incidentId\n        },\n        data: {\n            status: newStatus,\n            expiresAt: newExpiresAt\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n        vote,\n        status: newStatus\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7UUFDM0IxQixPQUFPO1lBQUVDLElBQUlMO1FBQVc7UUFDeEJlLE1BQU07WUFBRWhCLFFBQVF5QjtZQUFXRSxXQUFXRDtRQUFhO0lBQ3JEO0lBRUEsT0FBT2hDLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7UUFBRWE7UUFBTVgsUUFBUXlCO0lBQVU7QUFDckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjYXVyYS8uL3NyYy9hcHAvYXBpL3ZvdGVzL3JvdXRlLnRzP2ZhN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcblxuICBjb25zdCB7IGluY2lkZW50SWQsIHR5cGUgfSA9IGF3YWl0IHJlcS5qc29uKCk7IC8vIHR5cGU6IFwiQUdSRUVcIiBvciBcIkRJU0FHUkVFXCJcblxuICAvLyBDaGVjayBpZiBpbmNpZGVudCBleGlzdHMgYW5kIGlzIHN0aWxsIG9wZW5cbiAgY29uc3QgaW5jaWRlbnQgPSBhd2FpdCBwcmlzbWEuaW5jaWRlbnQuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IGluY2lkZW50SWQgfSxcbiAgICBpbmNsdWRlOiB7IHZvdGVzOiB0cnVlIH1cbiAgfSk7XG5cbiAgaWYgKCFpbmNpZGVudCB8fCBbXCJBUFBST1ZFRFwiLCBcIlJFSkVDVEVEXCJdLmluY2x1ZGVzKGluY2lkZW50LnN0YXR1cykpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbmNpZGVudCBjbG9zZWQgb3Igbm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIC8vIFByZXZlbnQgZG91YmxlIHZvdGluZ1xuICBjb25zdCBleGlzdGluZ1ZvdGUgPSBhd2FpdCBwcmlzbWEudm90ZS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkX2luY2lkZW50SWQ6IHtcbiAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgIGluY2lkZW50SWQ6IGluY2lkZW50SWRcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChleGlzdGluZ1ZvdGUpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJZb3UgYWxyZWFkeSB2b3RlZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICAvLyBSZWNvcmQgdGhlIHZvdGVcbiAgY29uc3Qgdm90ZSA9IGF3YWl0IHByaXNtYS52b3RlLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICBpbmNpZGVudElkLFxuICAgICAgdHlwZVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gUnVsZSAyIExvZ2ljXG4gIGNvbnN0IGFsbFZvdGVzID0gWy4uLmluY2lkZW50LnZvdGVzLCB2b3RlXTtcbiAgY29uc3QgYWdyZWVDb3VudCA9IGFsbFZvdGVzLmZpbHRlcih2ID0+IHYudHlwZSA9PT0gXCJBR1JFRVwiKS5sZW5ndGg7XG4gIGNvbnN0IGRpc2FncmVlQ291bnQgPSBhbGxWb3Rlcy5maWx0ZXIodiA9PiB2LnR5cGUgPT09IFwiRElTQUdSRUVcIikubGVuZ3RoO1xuXG4gIC8vIEdldCB0b3RhbCB1c2VyIGNvdW50IHRvIGNhbGN1bGF0ZSA1MCVcbiAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgcHJpc21hLnVzZXIuY291bnQoKTtcblxuICBsZXQgbmV3U3RhdHVzID0gaW5jaWRlbnQuc3RhdHVzO1xuICBsZXQgbmV3RXhwaXJlc0F0ID0gaW5jaWRlbnQuZXhwaXJlc0F0O1xuXG4gIGlmICh0eXBlID09PSBcIkRJU0FHUkVFXCIgJiYgaW5jaWRlbnQuc3RhdHVzID09PSBcIlBFTkRJTkdcIikge1xuICAgIC8vIElmIGFueW9uZSB2b3RlcyBcIkRpc2FncmVlXCIgYmVmb3JlIGl0IGlzIGFwcHJvdmVkLCB0aGUgc3RhdHVzIGNoYW5nZXMgdG8gXCJEaXNwdXRlZC5cIlxuICAgIC8vIE9uY2UgXCJEaXNwdXRlZCxcIiB0aGUgdm90aW5nIHdpbmRvdyByZW1haW5zIG9wZW4gZm9yIDI0IGhvdXJzLlxuICAgIG5ld1N0YXR1cyA9IFwiRElTUFVURURcIjtcbiAgICBuZXdFeHBpcmVzQXQgPSBuZXcgRGF0ZShpbmNpZGVudC5jcmVhdGVkQXQuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gIH0gZWxzZSBpZiAoYWdyZWVDb3VudCA+IHVzZXJDb3VudCAvIDIgJiYgaW5jaWRlbnQuc3RhdHVzID09PSBcIlBFTkRJTkdcIikge1xuICAgIC8vIElmIG1vcmUgdGhhbiA1MCUgb2YgdGhlIGdyb3VwIHZvdGVzIFwiQWdyZWVcIiB3aXRoaW4gMSBob3VyLCB0aGUgcmVwb3J0IGlzIGF1dG9tYXRpY2FsbHkgXCJBcHByb3ZlZFwiXG4gICAgbmV3U3RhdHVzID0gXCJBUFBST1ZFRFwiO1xuICAgIFxuICAgIC8vIEFwcGx5IHBvaW50cyBpbW1lZGlhdGVseVxuICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogaW5jaWRlbnQub2ZmZW5kZXJJZCB9LFxuICAgICAgZGF0YTogeyBhdXJhU2NvcmU6IHsgaW5jcmVtZW50OiBpbmNpZGVudC5hdXJhQW1vdW50IH0gfVxuICAgIH0pO1xuICB9XG5cbiAgYXdhaXQgcHJpc21hLmluY2lkZW50LnVwZGF0ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IGluY2lkZW50SWQgfSxcbiAgICBkYXRhOiB7IHN0YXR1czogbmV3U3RhdHVzLCBleHBpcmVzQXQ6IG5ld0V4cGlyZXNBdCB9XG4gIH0pO1xuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHZvdGUsIHN0YXR1czogbmV3U3RhdHVzIH0pO1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJzZXNzaW9uIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiaW5jaWRlbnRJZCIsInR5cGUiLCJpbmNpZGVudCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwiaW5jbHVkZSIsInZvdGVzIiwiaW5jbHVkZXMiLCJleGlzdGluZ1ZvdGUiLCJ2b3RlIiwidXNlcklkX2luY2lkZW50SWQiLCJ1c2VySWQiLCJ1c2VyIiwiY3JlYXRlIiwiZGF0YSIsImFsbFZvdGVzIiwiYWdyZWVDb3VudCIsImZpbHRlciIsInYiLCJsZW5ndGgiLCJkaXNhZ3JlZUNvdW50IiwidXNlckNvdW50IiwiY291bnQiLCJuZXdTdGF0dXMiLCJuZXdFeHBpcmVzQXQiLCJleHBpcmVzQXQiLCJEYXRlIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsInVwZGF0ZSIsIm9mZmVuZGVySWQiLCJhdXJhU2NvcmUiLCJpbmNyZW1lbnQiLCJhdXJhQW1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/votes/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO0tBQVE7QUFDaEIsR0FBRztBQUVMLElBQUlDLElBQXFDLEVBQUVKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGNhdXJhLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFtcInF1ZXJ5XCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvotes%2Froute&page=%2Fapi%2Fvotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvotes%2Froute.ts&appDir=C%3A%5CUsers%5CDSU%20Student%5CDesktop%5CStuff%5CSchool%5CPersonal%5Ccalcaura%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDSU%20Student%5CDesktop%5CStuff%5CSchool%5CPersonal%5Ccalcaura&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();