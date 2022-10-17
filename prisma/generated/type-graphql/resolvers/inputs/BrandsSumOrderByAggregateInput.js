"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BrandsSumOrderByAggregateInput = class BrandsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsSumOrderByAggregateInput.prototype, "product", void 0);
BrandsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandsSumOrderByAggregateInput", {
        isAbstract: true
    })
], BrandsSumOrderByAggregateInput);
exports.BrandsSumOrderByAggregateInput = BrandsSumOrderByAggregateInput;
