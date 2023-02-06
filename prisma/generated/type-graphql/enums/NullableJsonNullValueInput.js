"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableJsonNullValueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var NullableJsonNullValueInput;
(function (NullableJsonNullValueInput) {
    NullableJsonNullValueInput["DbNull"] = "DbNull";
    NullableJsonNullValueInput["JsonNull"] = "JsonNull";
})(NullableJsonNullValueInput = exports.NullableJsonNullValueInput || (exports.NullableJsonNullValueInput = {}));
TypeGraphQL.registerEnumType(NullableJsonNullValueInput, {
    name: "NullableJsonNullValueInput",
    description: undefined,
});
