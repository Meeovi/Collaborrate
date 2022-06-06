"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeWhereInput_1 = require("../inputs/Product_attributeWhereInput");
let Product_attributeListRelationFilter = class Product_attributeListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], Product_attributeListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], Product_attributeListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], Product_attributeListRelationFilter.prototype, "none", void 0);
Product_attributeListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeListRelationFilter", {
        isAbstract: true
    })
], Product_attributeListRelationFilter);
exports.Product_attributeListRelationFilter = Product_attributeListRelationFilter;
