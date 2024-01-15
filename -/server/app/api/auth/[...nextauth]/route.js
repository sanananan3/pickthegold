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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyoung%2FDesktop%2FKAIST%2FSIP%2FPickTheGold_Test%2Fsolid-nextjs-main%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyoung%2FDesktop%2FKAIST%2FSIP%2FPickTheGold_Test%2Fsolid-nextjs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyoung%2FDesktop%2FKAIST%2FSIP%2FPickTheGold_Test%2Fsolid-nextjs-main%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyoung%2FDesktop%2FKAIST%2FSIP%2FPickTheGold_Test%2Fsolid-nextjs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_young_Desktop_KAIST_SIP_PickTheGold_Test_solid_nextjs_main_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/young/Desktop/KAIST/SIP/PickTheGold_Test/solid-nextjs-main/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_young_Desktop_KAIST_SIP_PickTheGold_Test_solid_nextjs_main_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnlvdW5nJTJGRGVza3RvcCUyRktBSVNUJTJGU0lQJTJGUGlja1RoZUdvbGRfVGVzdCUyRnNvbGlkLW5leHRqcy1tYWluJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnlvdW5nJTJGRGVza3RvcCUyRktBSVNUJTJGU0lQJTJGUGlja1RoZUdvbGRfVGVzdCUyRnNvbGlkLW5leHRqcy1tYWluJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3NEO0FBQ3ZDO0FBQ21FO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbGlkLW5leHRqcy8/NzA2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3lvdW5nL0Rlc2t0b3AvS0FJU1QvU0lQL1BpY2tUaGVHb2xkX1Rlc3Qvc29saWQtbmV4dGpzLW1haW4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3lvdW5nL0Rlc2t0b3AvS0FJU1QvU0lQL1BpY2tUaGVHb2xkX1Rlc3Qvc29saWQtbmV4dGpzLW1haW4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyoung%2FDesktop%2FKAIST%2FSIP%2FPickTheGold_Test%2Fsolid-nextjs-main%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyoung%2FDesktop%2FKAIST%2FSIP%2FPickTheGold_Test%2Fsolid-nextjs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _app_libs_prismaDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/libs/prismaDB */ \"(rsc)/./app/libs/prismaDB.ts\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst authOptions = {\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_app_libs_prismaDB__WEBPACK_IMPORTED_MODULE_0__.prisma),\n    secret: process.env.SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async signIn ({ user, account, profile, email, credentials }) {\n            // 로그인 로직\n            if (account && credentials) {\n                if (account.provider === \"credentials\") {\n                    const dbUser = await _app_libs_prismaDB__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n                        where: {\n                            email: credentials.email\n                        }\n                    });\n                    if (!dbUser) {\n                        return false; // 사용자가 없으면 로그인 실패\n                    }\n                    if (dbUser.password) {\n                        const isValid = await bcrypt__WEBPACK_IMPORTED_MODULE_6___default().compare(String(credentials.password), dbUser.password); // 비밀번호 검증\n                        if (!isValid) {\n                            return false; // 비밀번호 불일치 시 로그인 실패\n                        }\n                    }\n                    return true;\n                }\n                if (account.provider !== \"credentials\") {\n                    const dbUser = await _app_libs_prismaDB__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n                        where: {\n                            email: email\n                        }\n                    });\n                    if (!dbUser) {\n                        // 사용자가 존재하지 않는 경우, 새로운 사용자 레코드 생성\n                        await _app_libs_prismaDB__WEBPACK_IMPORTED_MODULE_0__.prisma.user.create({\n                            data: {\n                                email: email,\n                                name: user.name\n                            }\n                        });\n                    }\n                }\n            }\n            return true; // 로그인 성공\n        },\n        // async redirect({ url, baseUrl }) {\n        //   // 사용자를 mypage로 리디렉션\n        //   return url.startsWith(baseUrl)\n        //     ? Promise.resolve(url)\n        //     : Promise.resolve(baseUrl + '/mypage');\n        // },\n        async redirect ({ url, baseUrl }) {\n            // 항상 /mypage로 리디렉션\n            return baseUrl + \"/mypage\";\n        }\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"Young\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                // check to see if eamil and password is there\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Please enter an email or password\");\n                }\n                // check to see if user already exist\n                const user = await _app_libs_prismaDB__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                // if user was not found\n                if (!user || !user?.password) {\n                    throw new Error(\"No user found\");\n                }\n                // check to see if passwords match\n                const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_6___default().compare(credentials.password, user.password);\n                if (!passwordMatch) {\n                    throw new Error(\"Incorrect password\");\n                }\n                return user;\n            }\n        }),\n        // EmailProvider({\n        //   server: {\n        //     host: process.env.EMAIL_SERVER_HOST,\n        //     port: Number(process.env.EMAIL_SERVER_PORT),\n        //     auth: {\n        //       user: process.env.EMAIL_SERVER_USER,\n        //       pass: process.env.EMAIL_SERVER_PASSWORD,\n        //     },\n        //   },\n        //   from: process.env.EMAIL_FROM,\n        // }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GITHUB_CLIENT_ID || \"\",\n            clientSecret: process.env.GITHUB_CLIENT_SECRET || \"\"\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        })\n    ],\n    debug: \"development\" === \"development\"\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDYTtBQUNDO0FBQ087QUFDVjtBQUNBO0FBRzVCO0FBRXJCLE1BQU1PLGNBQStCO0lBQzFDQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxTQUFTVCx3RUFBYUEsQ0FBQ0Qsc0RBQU1BO0lBQzdCVyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLE1BQU07SUFDMUJDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVCxNQUFNUixRQUFPLEVBQUVTLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFO1lBQ3pELFNBQVM7WUFDVCxJQUFJSCxXQUFXRyxhQUFhO2dCQUMxQixJQUFJSCxRQUFRSSxRQUFRLEtBQUssZUFBZTtvQkFDdEMsTUFBTUMsU0FBUyxNQUFNeEIsc0RBQU1BLENBQUNrQixJQUFJLENBQUNPLFVBQVUsQ0FBQzt3QkFDMUNDLE9BQU87NEJBQ0xMLE9BQU9DLFlBQVlELEtBQUs7d0JBQzFCO29CQUNGO29CQUVBLElBQUksQ0FBQ0csUUFBUTt3QkFDWCxPQUFPLE9BQU8sa0JBQWtCO29CQUNsQztvQkFDQSxJQUFJQSxPQUFPRyxRQUFRLEVBQUU7d0JBQ25CLE1BQU1DLFVBQVUsTUFBTXRCLHFEQUFjLENBQUN3QixPQUFPUixZQUFZSyxRQUFRLEdBQUdILE9BQU9HLFFBQVEsR0FBRyxVQUFVO3dCQUMvRixJQUFJLENBQUNDLFNBQVM7NEJBQ1osT0FBTyxPQUFPLG9CQUFvQjt3QkFDcEM7b0JBQ0Y7b0JBRUEsT0FBTztnQkFDVDtnQkFDQSxJQUFJVCxRQUFRSSxRQUFRLEtBQUssZUFBZTtvQkFDdEMsTUFBTUMsU0FBUyxNQUFNeEIsc0RBQU1BLENBQUNrQixJQUFJLENBQUNPLFVBQVUsQ0FBQzt3QkFDMUNDLE9BQU87NEJBQ0xMLE9BQU9BO3dCQUNUO29CQUNGO29CQUVBLElBQUksQ0FBQ0csUUFBUTt3QkFDWCxrQ0FBa0M7d0JBQ2xDLE1BQU14QixzREFBTUEsQ0FBQ2tCLElBQUksQ0FBQ2EsTUFBTSxDQUFDOzRCQUN2QkMsTUFBTTtnQ0FDSlgsT0FBT0E7Z0NBQ1BZLE1BQU1mLEtBQUtlLElBQUk7NEJBRWpCO3dCQUNGO29CQUNGO2dCQUNGO1lBQ0Y7WUFFQSxPQUFPLE1BQU0sU0FBUztRQUN4QjtRQUNBLHFDQUFxQztRQUNyQyx5QkFBeUI7UUFDekIsbUNBQW1DO1FBQ25DLDZCQUE2QjtRQUM3Qiw4Q0FBOEM7UUFDOUMsS0FBSztRQUNMLE1BQU1DLFVBQVMsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7WUFDN0IsbUJBQW1CO1lBQ25CLE9BQU9BLFVBQVU7UUFDbkI7SUFFRjtJQUVBQyxXQUFXO1FBQ1RsQywyRUFBbUJBLENBQUM7WUFDbEI4QixNQUFNO1lBQ05YLGFBQWE7Z0JBQ1hELE9BQU87b0JBQUVpQixPQUFPO29CQUFTQyxNQUFNO29CQUFRQyxhQUFhO2dCQUFRO2dCQUM1RGIsVUFBVTtvQkFBRVcsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUVBLE1BQU1FLFdBQVVuQixXQUFXO2dCQUN6Qiw4Q0FBOEM7Z0JBQzlDLElBQUksQ0FBQ0EsYUFBYUQsU0FBUyxDQUFDQyxhQUFhSyxVQUFVO29CQUNqRCxNQUFNLElBQUllLE1BQU07Z0JBQ2xCO2dCQUVBLHFDQUFxQztnQkFDckMsTUFBTXhCLE9BQU8sTUFBTWxCLHNEQUFNQSxDQUFDa0IsSUFBSSxDQUFDTyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUNMTCxPQUFPQyxZQUFZRCxLQUFLO29CQUMxQjtnQkFDRjtnQkFFQSx3QkFBd0I7Z0JBQ3hCLElBQUksQ0FBQ0gsUUFBUSxDQUFDQSxNQUFNUyxVQUFVO29CQUM1QixNQUFNLElBQUllLE1BQU07Z0JBQ2xCO2dCQUVBLGtDQUFrQztnQkFDbEMsTUFBTUMsZ0JBQWdCLE1BQU1yQyxxREFBYyxDQUN4Q2dCLFlBQVlLLFFBQVEsRUFDcEJULEtBQUtTLFFBQVE7Z0JBR2YsSUFBSSxDQUFDZ0IsZUFBZTtvQkFDbEIsTUFBTSxJQUFJRCxNQUFNO2dCQUNsQjtnQkFFQSxPQUFPeEI7WUFDVDtRQUNGO1FBRUEsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCwyQ0FBMkM7UUFDM0MsbURBQW1EO1FBQ25ELGNBQWM7UUFDZCw2Q0FBNkM7UUFDN0MsaURBQWlEO1FBQ2pELFNBQVM7UUFDVCxPQUFPO1FBQ1Asa0NBQWtDO1FBQ2xDLE1BQU07UUFFTmQsc0VBQWNBLENBQUM7WUFDYndDLFVBQVVoQyxRQUFRQyxHQUFHLENBQUNnQyxnQkFBZ0IsSUFBSTtZQUMxQ0MsY0FBY2xDLFFBQVFDLEdBQUcsQ0FBQ2tDLG9CQUFvQixJQUFJO1FBQ3BEO1FBRUExQyxzRUFBY0EsQ0FBQztZQUNidUMsVUFBVWhDLFFBQVFDLEdBQUcsQ0FBQ21DLGdCQUFnQixJQUFJO1lBQzFDRixjQUFjbEMsUUFBUUMsR0FBRyxDQUFDb0Msb0JBQW9CLElBQUk7UUFDcEQ7S0FDRDtJQUVEQyxPQUFPdEMsa0JBQXlCO0FBQ2xDLEVBQUU7QUFFRixNQUFNdUMsVUFBVWpELGdEQUFRQSxDQUFDSztBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbGlkLW5leHRqcy8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvYXBwL2xpYnMvcHJpc21hREJcIjtcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xuaW1wb3J0IE5leHRBdXRoLCB7IHR5cGUgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBHaXRIdWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCI7XG5cbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2F1dGgvc2lnbmluXCIsXG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzIH0pIDogUHJvbWlzZTxzdHJpbmcgfCBib29sZWFuPiB7XG4gICAgICAvLyDroZzqt7jsnbgg66Gc7KeBXG4gICAgICBpZiAoYWNjb3VudCAmJiBjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoYWNjb3VudC5wcm92aWRlciA9PT0gXCJjcmVkZW50aWFsc1wiKSB7XG4gICAgICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgYXMgc3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghZGJVc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIOyCrOyaqeyekOqwgCDsl4bsnLzrqbQg66Gc6re47J24IOyLpO2MqFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGJVc2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoU3RyaW5nKGNyZWRlbnRpYWxzLnBhc3N3b3JkKSwgZGJVc2VyLnBhc3N3b3JkKTsgLy8g67mE67CA67KI7Zi4IOqygOymnVxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8g67mE67CA67KI7Zi4IOu2iOydvOy5mCDsi5wg66Gc6re47J24IOyLpO2MqFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY2NvdW50LnByb3ZpZGVyICE9PSBcImNyZWRlbnRpYWxzXCIpIHtcbiAgICAgICAgICBjb25zdCBkYlVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCBhcyBzdHJpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFkYlVzZXIpIHtcbiAgICAgICAgICAgIC8vIOyCrOyaqeyekOqwgCDsobTsnqztlZjsp4Ag7JWK64qUIOqyveyasCwg7IOI66Gc7Jq0IOyCrOyaqeyekCDroIjsvZTrk5wg7IOd7ISxXG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsIGFzIHN0cmluZywgLy8gRml4OiBDYXN0IGVtYWlsIGFzIHN0cmluZ1xuICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAvLyDquLDtg4Ag7ZWE7JqU7ZWcIOygleuztCDstpTqsIBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTsgLy8g66Gc6re47J24IOyEseqztVxuICAgIH0sXG4gICAgLy8gYXN5bmMgcmVkaXJlY3QoeyB1cmwsIGJhc2VVcmwgfSkge1xuICAgIC8vICAgLy8g7IKs7Jqp7J6Q66W8IG15cGFnZeuhnCDrpqzrlJTroInshZhcbiAgICAvLyAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChiYXNlVXJsKVxuICAgIC8vICAgICA/IFByb21pc2UucmVzb2x2ZSh1cmwpXG4gICAgLy8gICAgIDogUHJvbWlzZS5yZXNvbHZlKGJhc2VVcmwgKyAnL215cGFnZScpO1xuICAgIC8vIH0sXG4gICAgYXN5bmMgcmVkaXJlY3QoeyB1cmwsIGJhc2VVcmwgfSkge1xuICAgICAgLy8g7ZWt7IOBIC9teXBhZ2XroZwg66as65SU66CJ7IWYXG4gICAgICByZXR1cm4gYmFzZVVybCArICcvbXlwYWdlJztcbiAgICB9LFxuICAgIFxuICB9LFxuXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIllvdW5nXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGVhbWlsIGFuZCBwYXNzd29yZCBpcyB0aGVyZVxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGVudGVyIGFuIGVtYWlsIG9yIHBhc3N3b3JkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHVzZXIgYWxyZWFkeSBleGlzdFxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpZiB1c2VyIHdhcyBub3QgZm91bmRcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyPy5wYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXIgZm91bmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgcGFzc3dvcmRzIG1hdGNoXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGFzc3dvcmRNYXRjaCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBwYXNzd29yZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIEVtYWlsUHJvdmlkZXIoe1xuICAgIC8vICAgc2VydmVyOiB7XG4gICAgLy8gICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxuICAgIC8vICAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BPUlQpLFxuICAgIC8vICAgICBhdXRoOiB7XG4gICAgLy8gICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1VTRVIsXG4gICAgLy8gICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BBU1NXT1JELFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSxcbiAgICAvLyAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX0ZST00sXG4gICAgLy8gfSksXG5cbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCB8fCBcIlwiLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCB8fCBcIlwiLFxuICAgIH0pLFxuXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgfHwgXCJcIixcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgfHwgXCJcIixcbiAgICB9KSxcbiAgXSxcblxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbn07XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFBZGFwdGVyIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR2l0SHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsImJjcnlwdCIsImF1dGhPcHRpb25zIiwicGFnZXMiLCJzaWduSW4iLCJhZGFwdGVyIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImVtYWlsIiwiY3JlZGVudGlhbHMiLCJwcm92aWRlciIsImRiVXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInBhc3N3b3JkIiwiaXNWYWxpZCIsImNvbXBhcmUiLCJTdHJpbmciLCJjcmVhdGUiLCJkYXRhIiwibmFtZSIsInJlZGlyZWN0IiwidXJsIiwiYmFzZVVybCIsInByb3ZpZGVycyIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJwYXNzd29yZE1hdGNoIiwiY2xpZW50SWQiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJkZWJ1ZyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/libs/prismaDB.ts":
/*!******************************!*\
  !*** ./app/libs/prismaDB.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGlicy9wcmlzbWFEQi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLO1FBQUM7S0FBUTtBQUNoQixHQUFHO0FBRUwsSUFBSUMsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29saWQtbmV4dGpzLy4vYXBwL2xpYnMvcHJpc21hREIudHM/YTE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxuLy8gZXhoYXVzdGluZyB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gbGltaXQuXG4vL1xuLy8gTGVhcm4gbW9yZTpcbi8vIGh0dHBzOi8vcHJpcy5seS9kL2hlbHAvbmV4dC1qcy1iZXN0LXByYWN0aWNlc1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWwgYXMgdW5rbm93biBhcyB7IHByaXNtYTogUHJpc21hQ2xpZW50IH07XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogW1wicXVlcnlcIl0sXG4gIH0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/libs/prismaDB.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@next-auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyoung%2FDesktop%2FKAIST%2FSIP%2FPickTheGold_Test%2Fsolid-nextjs-main%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyoung%2FDesktop%2FKAIST%2FSIP%2FPickTheGold_Test%2Fsolid-nextjs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();