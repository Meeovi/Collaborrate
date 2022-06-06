"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Cart_price_rulesAvgOrderByAggregateInput = class Cart_price_rulesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesAvgOrderByAggregateInput.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesAvgOrderByAggregateInput.prototype, "actions_max_qty_discount_is_applied_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesAvgOrderByAggregateInput.prototype, "actions_discount_qty_step", void 0);
Cart_price_rulesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Cart_price_rulesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Cart_price_rulesAvgOrderByAggregateInput);
exports.Cart_price_rulesAvgOrderByAggregateInput = Cart_price_rulesAvgOrderByAggregateInput;
