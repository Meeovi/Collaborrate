"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DiscountsSumOrderByAggregateInput = class DiscountsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsSumOrderByAggregateInput.prototype, "id", void 0);
DiscountsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DiscountsSumOrderByAggregateInput", {
        isAbstract: true
    })
], DiscountsSumOrderByAggregateInput);
exports.DiscountsSumOrderByAggregateInput = DiscountsSumOrderByAggregateInput;
