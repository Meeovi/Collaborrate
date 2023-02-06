"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ManufacturerScalarFieldEnum;
(function (ManufacturerScalarFieldEnum) {
    ManufacturerScalarFieldEnum["id"] = "id";
    ManufacturerScalarFieldEnum["created_at"] = "created_at";
    ManufacturerScalarFieldEnum["code"] = "code";
    ManufacturerScalarFieldEnum["name"] = "name";
    ManufacturerScalarFieldEnum["country"] = "country";
    ManufacturerScalarFieldEnum["state"] = "state";
    ManufacturerScalarFieldEnum["isPublic"] = "isPublic";
    ManufacturerScalarFieldEnum["city"] = "city";
    ManufacturerScalarFieldEnum["product"] = "product";
    ManufacturerScalarFieldEnum["description"] = "description";
    ManufacturerScalarFieldEnum["media"] = "media";
    ManufacturerScalarFieldEnum["products"] = "products";
})(ManufacturerScalarFieldEnum = exports.ManufacturerScalarFieldEnum || (exports.ManufacturerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ManufacturerScalarFieldEnum, {
    name: "ManufacturerScalarFieldEnum",
    description: undefined,
});
