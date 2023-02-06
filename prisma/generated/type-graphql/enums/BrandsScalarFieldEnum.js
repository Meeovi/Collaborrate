"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BrandsScalarFieldEnum;
(function (BrandsScalarFieldEnum) {
    BrandsScalarFieldEnum["id"] = "id";
    BrandsScalarFieldEnum["created_at"] = "created_at";
    BrandsScalarFieldEnum["code"] = "code";
    BrandsScalarFieldEnum["name"] = "name";
    BrandsScalarFieldEnum["country"] = "country";
    BrandsScalarFieldEnum["state"] = "state";
    BrandsScalarFieldEnum["isPublic"] = "isPublic";
    BrandsScalarFieldEnum["city"] = "city";
    BrandsScalarFieldEnum["product"] = "product";
    BrandsScalarFieldEnum["description"] = "description";
    BrandsScalarFieldEnum["media"] = "media";
    BrandsScalarFieldEnum["mediamanager"] = "mediamanager";
    BrandsScalarFieldEnum["products"] = "products";
    BrandsScalarFieldEnum["workspaces"] = "workspaces";
})(BrandsScalarFieldEnum = exports.BrandsScalarFieldEnum || (exports.BrandsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BrandsScalarFieldEnum, {
    name: "BrandsScalarFieldEnum",
    description: undefined,
});
