"use strict";
(() => {
var exports = {};
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var next_dist_build_webpack_loaders_resolve_url_loader_lib_postcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getRestaurantsList(keyword) {
    return await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://localhost:8443/restaurants-service/v1/find", {
        keyword
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRestaurantsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7707:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.prepend = prepend;
exports.remove = remove;
function prepend(candidate) {
    if (typeof candidate === "string") {
        return "file://" + candidate;
    } else if (candidate && typeof candidate === "object" && Array.isArray(candidate.sources)) {
        return Object.assign({}, candidate, {
            sources: candidate.sources.map(prepend)
        });
    } else {
        throw new Error("expected string|object");
    }
}
function remove(candidate) {
    if (typeof candidate === "string") {
        return candidate.replace(/^file:\/{2}/, "");
    } else if (candidate && typeof candidate === "object" && Array.isArray(candidate.sources)) {
        return Object.assign({}, candidate, {
            sources: candidate.sources.map(remove)
        });
    } else {
        throw new Error("expected string|object");
    }
}

//# sourceMappingURL=file-protocol.js.map

/***/ }),

/***/ 3103:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = process;
var _path = _interopRequireDefault(__webpack_require__(1017));
var _fileProtocol = __webpack_require__(7707);
function process(postcss, sourceFile, sourceContent, params) {
    // #107 libsass emits orphan CR not considered newline, postcss does consider newline (content vs source-map mismatch)
    // prepend file protocol to all sources to avoid problems with source map
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return postcss([
        postcss.plugin("postcss-resolve-url", postcssPlugin)
    ]).process(sourceContent, {
        from: (0, _fileProtocol).prepend(sourceFile),
        map: params.outputSourceMap && {
            prev: !!params.inputSourceMap && (0, _fileProtocol).prepend(params.inputSourceMap),
            inline: false,
            annotation: false,
            sourcesContent: true
        }
    }).then((result)=>({
            content: result.css,
            map: params.outputSourceMap ? (0, _fileProtocol).remove(result.map.toJSON()) : null
        }));
    /**
   * Plugin for postcss that follows SASS transpilation.
   */ function postcssPlugin() {
        return function(styles) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            styles.walkDecls(eachDeclaration);
        };
        /**
     * Process a declaration from the syntax tree.
     * @param declaration
     */ function eachDeclaration(declaration) {
            const isValid = declaration.value && declaration.value.indexOf("url") >= 0;
            if (isValid) {
                // reverse the original source-map to find the original source file before transpilation
                const startPosApparent = declaration.source.start, startPosOriginal = params.sourceMapConsumer && params.sourceMapConsumer.originalPositionFor(startPosApparent);
                // we require a valid directory for the specified file
                const directory = startPosOriginal && startPosOriginal.source && (0, _fileProtocol).remove(_path.default.dirname(startPosOriginal.source));
                if (directory) {
                    declaration.value = params.transformDeclaration(declaration.value, directory);
                } else if (params.sourceMapConsumer) {
                    throw new Error("source-map information is not available at url() declaration " + (ORPHAN_CR_REGEX.test(sourceContent) ? "(found orphan CR, try removeCR option)" : "(no orphan CR found)"));
                }
            }
        }
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ORPHAN_CR_REGEX = /\r(?!\n)(.|\n)?/g;

//# sourceMappingURL=postcss.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6981));
module.exports = __webpack_exports__;

})();