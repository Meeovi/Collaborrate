"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special_discountsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Special_discountsSumOrderByAggregateInput = class Special_discountsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsSumOrderByAggregateInput.prototype, "discount", void 0);
Special_discountsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Special_discountsSumOrderByAggregateInput", {
        isAbstract: true
    })
], Special_discountsSumOrderByAggregateInput);
exports.Special_discountsSumOrderByAggregateInput = Special_discountsSumOrderByAggregateInput;
