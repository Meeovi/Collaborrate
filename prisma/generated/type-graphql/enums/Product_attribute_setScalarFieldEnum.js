"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Product_attribute_setScalarFieldEnum;
(function (Product_attribute_setScalarFieldEnum) {
    Product_attribute_setScalarFieldEnum["id"] = "id";
    Product_attribute_setScalarFieldEnum["name"] = "name";
    Product_attribute_setScalarFieldEnum["based_on"] = "based_on";
    Product_attribute_setScalarFieldEnum["attribute_id"] = "attribute_id";
})(Product_attribute_setScalarFieldEnum = exports.Product_attribute_setScalarFieldEnum || (exports.Product_attribute_setScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Product_attribute_setScalarFieldEnum, {
    name: "Product_attribute_setScalarFieldEnum",
    description: undefined,
});
