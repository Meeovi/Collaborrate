"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersOrderByWithAggregationInput_1 = require("../../../inputs/OrdersOrderByWithAggregationInput");
const OrdersScalarWhereWithAggregatesInput_1 = require("../../../inputs/OrdersScalarWhereWithAggregatesInput");
const OrdersWhereInput_1 = require("../../../inputs/OrdersWhereInput");
const OrdersScalarFieldEnum_1 = require("../../../../enums/OrdersScalarFieldEnum");
let GroupByOrdersArgs = class GroupByOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereInput_1.OrdersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereInput_1.OrdersWhereInput)
], GroupByOrdersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersOrderByWithAggregationInput_1.OrdersOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrdersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersScalarFieldEnum_1.OrdersScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrdersArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersScalarWhereWithAggregatesInput_1.OrdersScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersScalarWhereWithAggregatesInput_1.OrdersScalarWhereWithAggregatesInput)
], GroupByOrdersArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrdersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrdersArgs.prototype, "skip", void 0);
GroupByOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOrdersArgs);
exports.GroupByOrdersArgs = GroupByOrdersArgs;
