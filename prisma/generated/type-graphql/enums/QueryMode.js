"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMode = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var QueryMode;
(function (QueryMode) {
    QueryMode["default"] = "default";
    QueryMode["insensitive"] = "insensitive";
})(QueryMode = exports.QueryMode || (exports.QueryMode = {}));
TypeGraphQL.registerEnumType(QueryMode, {
    name: "QueryMode",
    description: undefined,
});
