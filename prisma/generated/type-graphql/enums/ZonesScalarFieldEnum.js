"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ZonesScalarFieldEnum;
(function (ZonesScalarFieldEnum) {
    ZonesScalarFieldEnum["id"] = "id";
    ZonesScalarFieldEnum["created_at"] = "created_at";
    ZonesScalarFieldEnum["name"] = "name";
    ZonesScalarFieldEnum["updated_at"] = "updated_at";
    ZonesScalarFieldEnum["scope"] = "scope";
    ZonesScalarFieldEnum["type"] = "type";
    ZonesScalarFieldEnum["country"] = "country";
    ZonesScalarFieldEnum["code"] = "code";
})(ZonesScalarFieldEnum = exports.ZonesScalarFieldEnum || (exports.ZonesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ZonesScalarFieldEnum, {
    name: "ZonesScalarFieldEnum",
    description: undefined,
});
