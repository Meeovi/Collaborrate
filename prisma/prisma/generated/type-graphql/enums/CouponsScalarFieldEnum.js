"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CouponsScalarFieldEnum;
(function (CouponsScalarFieldEnum) {
    CouponsScalarFieldEnum["id"] = "id";
    CouponsScalarFieldEnum["name"] = "name";
    CouponsScalarFieldEnum["excerpt"] = "excerpt";
    CouponsScalarFieldEnum["discount"] = "discount";
    CouponsScalarFieldEnum["image"] = "image";
    CouponsScalarFieldEnum["published"] = "published";
    CouponsScalarFieldEnum["expiration"] = "expiration";
    CouponsScalarFieldEnum["categories"] = "categories";
    CouponsScalarFieldEnum["articles"] = "articles";
    CouponsScalarFieldEnum["products"] = "products";
    CouponsScalarFieldEnum["customers"] = "customers";
    CouponsScalarFieldEnum["users"] = "users";
    CouponsScalarFieldEnum["prod_id"] = "prod_id";
})(CouponsScalarFieldEnum = exports.CouponsScalarFieldEnum || (exports.CouponsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CouponsScalarFieldEnum, {
    name: "CouponsScalarFieldEnum",
    description: undefined,
});
