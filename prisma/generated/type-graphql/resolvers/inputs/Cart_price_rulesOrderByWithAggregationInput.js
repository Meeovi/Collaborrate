"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesAvgOrderByAggregateInput_1 = require("../inputs/Cart_price_rulesAvgOrderByAggregateInput");
const Cart_price_rulesCountOrderByAggregateInput_1 = require("../inputs/Cart_price_rulesCountOrderByAggregateInput");
const Cart_price_rulesMaxOrderByAggregateInput_1 = require("../inputs/Cart_price_rulesMaxOrderByAggregateInput");
const Cart_price_rulesMinOrderByAggregateInput_1 = require("../inputs/Cart_price_rulesMinOrderByAggregateInput");
const Cart_price_rulesSumOrderByAggregateInput_1 = require("../inputs/Cart_price_rulesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Cart_price_rulesOrderByWithAggregationInput = class Cart_price_rulesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "rule", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "coupon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "uses_per_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "actions_apply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "actions_discard_subsequent_rules", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "actions_max_qty_discount_is_applied_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "actions_discount_qty_step", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "actions_apply_shipping_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesCountOrderByAggregateInput_1.Cart_price_rulesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesCountOrderByAggregateInput_1.Cart_price_rulesCountOrderByAggregateInput)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesAvgOrderByAggregateInput_1.Cart_price_rulesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesAvgOrderByAggregateInput_1.Cart_price_rulesAvgOrderByAggregateInput)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesMaxOrderByAggregateInput_1.Cart_price_rulesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesMaxOrderByAggregateInput_1.Cart_price_rulesMaxOrderByAggregateInput)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesMinOrderByAggregateInput_1.Cart_price_rulesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesMinOrderByAggregateInput_1.Cart_price_rulesMinOrderByAggregateInput)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesSumOrderByAggregateInput_1.Cart_price_rulesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesSumOrderByAggregateInput_1.Cart_price_rulesSumOrderByAggregateInput)
], Cart_price_rulesOrderByWithAggregationInput.prototype, "_sum", void 0);
Cart_price_rulesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Cart_price_rulesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Cart_price_rulesOrderByWithAggregationInput);
exports.Cart_price_rulesOrderByWithAggregationInput = Cart_price_rulesOrderByWithAggregationInput;
