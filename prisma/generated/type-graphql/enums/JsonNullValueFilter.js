"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var JsonNullValueFilter;
(function (JsonNullValueFilter) {
    JsonNullValueFilter["DbNull"] = "DbNull";
    JsonNullValueFilter["JsonNull"] = "JsonNull";
    JsonNullValueFilter["AnyNull"] = "AnyNull";
})(JsonNullValueFilter = exports.JsonNullValueFilter || (exports.JsonNullValueFilter = {}));
TypeGraphQL.registerEnumType(JsonNullValueFilter, {
    name: "JsonNullValueFilter",
    description: undefined,
});
