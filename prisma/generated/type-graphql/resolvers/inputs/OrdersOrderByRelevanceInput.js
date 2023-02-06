"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersOrderByRelevanceFieldEnum_1 = require("../../enums/OrdersOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let OrdersOrderByRelevanceInput = class OrdersOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersOrderByRelevanceFieldEnum_1.OrdersOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByRelevanceInput.prototype, "search", void 0);
OrdersOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersOrderByRelevanceInput", {
        isAbstract: true
    })
], OrdersOrderByRelevanceInput);
exports.OrdersOrderByRelevanceInput = OrdersOrderByRelevanceInput;
