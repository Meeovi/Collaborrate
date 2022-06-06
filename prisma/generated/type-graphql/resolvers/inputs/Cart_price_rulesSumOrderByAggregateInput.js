"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Cart_price_rulesSumOrderByAggregateInput = class Cart_price_rulesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesSumOrderByAggregateInput.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesSumOrderByAggregateInput.prototype, "actions_max_qty_discount_is_applied_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesSumOrderByAggregateInput.prototype, "actions_discount_qty_step", void 0);
Cart_price_rulesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Cart_price_rulesSumOrderByAggregateInput", {
        isAbstract: true
    })
], Cart_price_rulesSumOrderByAggregateInput);
exports.Cart_price_rulesSumOrderByAggregateInput = Cart_price_rulesSumOrderByAggregateInput;
