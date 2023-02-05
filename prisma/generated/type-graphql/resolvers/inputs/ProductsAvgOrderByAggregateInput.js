"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductsAvgOrderByAggregateInput = class ProductsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsAvgOrderByAggregateInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsAvgOrderByAggregateInput.prototype, "related_product", void 0);
ProductsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ProductsAvgOrderByAggregateInput);
exports.ProductsAvgOrderByAggregateInput = ProductsAvgOrderByAggregateInput;
