"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Product_typesScalarFieldEnum;
(function (Product_typesScalarFieldEnum) {
    Product_typesScalarFieldEnum["id"] = "id";
    Product_typesScalarFieldEnum["type_name"] = "type_name";
    Product_typesScalarFieldEnum["taxes"] = "taxes";
    Product_typesScalarFieldEnum["isShippable"] = "isShippable";
    Product_typesScalarFieldEnum["meta_url"] = "meta_url";
    Product_typesScalarFieldEnum["meta_description"] = "meta_description";
    Product_typesScalarFieldEnum["filter_options"] = "filter_options";
    Product_typesScalarFieldEnum["product_type"] = "product_type";
    Product_typesScalarFieldEnum["prod_id"] = "prod_id";
    Product_typesScalarFieldEnum["products"] = "products";
})(Product_typesScalarFieldEnum = exports.Product_typesScalarFieldEnum || (exports.Product_typesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Product_typesScalarFieldEnum, {
    name: "Product_typesScalarFieldEnum",
    description: undefined,
});
