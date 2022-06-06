"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeWhereInput_1 = require("../inputs/Product_attributeWhereInput");
let Product_attributeRelationFilter = class Product_attributeRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], Product_attributeRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], Product_attributeRelationFilter.prototype, "isNot", void 0);
Product_attributeRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeRelationFilter", {
        isAbstract: true
    })
], Product_attributeRelationFilter);
exports.Product_attributeRelationFilter = Product_attributeRelationFilter;
