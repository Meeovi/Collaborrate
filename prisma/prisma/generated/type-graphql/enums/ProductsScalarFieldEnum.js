"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProductsScalarFieldEnum;
(function (ProductsScalarFieldEnum) {
    ProductsScalarFieldEnum["id"] = "id";
    ProductsScalarFieldEnum["sku"] = "sku";
    ProductsScalarFieldEnum["thumbnail"] = "thumbnail";
    ProductsScalarFieldEnum["name"] = "name";
    ProductsScalarFieldEnum["type"] = "type";
    ProductsScalarFieldEnum["attribute_set"] = "attribute_set";
    ProductsScalarFieldEnum["price"] = "price";
    ProductsScalarFieldEnum["quantity_per_source"] = "quantity_per_source";
    ProductsScalarFieldEnum["salable_quantity"] = "salable_quantity";
    ProductsScalarFieldEnum["visibility"] = "visibility";
    ProductsScalarFieldEnum["status"] = "status";
    ProductsScalarFieldEnum["websites"] = "websites";
    ProductsScalarFieldEnum["product"] = "product";
    ProductsScalarFieldEnum["tax_class"] = "tax_class";
    ProductsScalarFieldEnum["stock_status"] = "stock_status";
    ProductsScalarFieldEnum["weight"] = "weight";
    ProductsScalarFieldEnum["categories"] = "categories";
    ProductsScalarFieldEnum["created_at"] = "created_at";
    ProductsScalarFieldEnum["country"] = "country";
    ProductsScalarFieldEnum["size"] = "size";
    ProductsScalarFieldEnum["format"] = "format";
    ProductsScalarFieldEnum["height"] = "height";
    ProductsScalarFieldEnum["content"] = "content";
    ProductsScalarFieldEnum["short_description"] = "short_description";
    ProductsScalarFieldEnum["image"] = "image";
    ProductsScalarFieldEnum["meta_title"] = "meta_title";
    ProductsScalarFieldEnum["meta_keywords"] = "meta_keywords";
    ProductsScalarFieldEnum["meta_description"] = "meta_description";
    ProductsScalarFieldEnum["meta_url"] = "meta_url";
    ProductsScalarFieldEnum["file"] = "file";
    ProductsScalarFieldEnum["manufacture"] = "manufacture";
})(ProductsScalarFieldEnum = exports.ProductsScalarFieldEnum || (exports.ProductsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductsScalarFieldEnum, {
    name: "ProductsScalarFieldEnum",
    description: undefined,
});
