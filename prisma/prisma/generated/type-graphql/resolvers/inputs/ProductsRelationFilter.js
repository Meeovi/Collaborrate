"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsWhereInput_1 = require("../inputs/ProductsWhereInput");
let ProductsRelationFilter = class ProductsRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereInput_1.ProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereInput_1.ProductsWhereInput)
], ProductsRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereInput_1.ProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereInput_1.ProductsWhereInput)
], ProductsRelationFilter.prototype, "isNot", void 0);
ProductsRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsRelationFilter", {
        isAbstract: true
    })
], ProductsRelationFilter);
exports.ProductsRelationFilter = ProductsRelationFilter;
