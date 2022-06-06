"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setWhereInput_1 = require("../inputs/Product_attribute_setWhereInput");
let Product_attribute_setListRelationFilter = class Product_attribute_setListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereInput_1.Product_attribute_setWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereInput_1.Product_attribute_setWhereInput)
], Product_attribute_setListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereInput_1.Product_attribute_setWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereInput_1.Product_attribute_setWhereInput)
], Product_attribute_setListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereInput_1.Product_attribute_setWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereInput_1.Product_attribute_setWhereInput)
], Product_attribute_setListRelationFilter.prototype, "none", void 0);
Product_attribute_setListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setListRelationFilter", {
        isAbstract: true
    })
], Product_attribute_setListRelationFilter);
exports.Product_attribute_setListRelationFilter = Product_attribute_setListRelationFilter;
