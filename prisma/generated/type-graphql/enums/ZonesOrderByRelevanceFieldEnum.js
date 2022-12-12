"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ZonesOrderByRelevanceFieldEnum;
(function (ZonesOrderByRelevanceFieldEnum) {
    ZonesOrderByRelevanceFieldEnum["name"] = "name";
    ZonesOrderByRelevanceFieldEnum["scope"] = "scope";
    ZonesOrderByRelevanceFieldEnum["type"] = "type";
    ZonesOrderByRelevanceFieldEnum["country"] = "country";
    ZonesOrderByRelevanceFieldEnum["code"] = "code";
})(ZonesOrderByRelevanceFieldEnum = exports.ZonesOrderByRelevanceFieldEnum || (exports.ZonesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ZonesOrderByRelevanceFieldEnum, {
    name: "ZonesOrderByRelevanceFieldEnum",
    description: undefined,
});
