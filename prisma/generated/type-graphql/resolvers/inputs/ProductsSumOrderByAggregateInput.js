"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductsSumOrderByAggregateInput = class ProductsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsSumOrderByAggregateInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsSumOrderByAggregateInput.prototype, "related_product", void 0);
ProductsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsSumOrderByAggregateInput", {
        isAbstract: true
    })
], ProductsSumOrderByAggregateInput);
exports.ProductsSumOrderByAggregateInput = ProductsSumOrderByAggregateInput;
