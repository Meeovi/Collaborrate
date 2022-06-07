"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attribute_setSumOrderByAggregateInput = class Product_attribute_setSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setSumOrderByAggregateInput.prototype, "attribute_id", void 0);
Product_attribute_setSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setSumOrderByAggregateInput", {
        isAbstract: true
    })
], Product_attribute_setSumOrderByAggregateInput);
exports.Product_attribute_setSumOrderByAggregateInput = Product_attribute_setSumOrderByAggregateInput;