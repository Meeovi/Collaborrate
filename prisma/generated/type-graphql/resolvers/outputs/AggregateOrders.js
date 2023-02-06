"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrders = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersAvgAggregate_1 = require("../outputs/OrdersAvgAggregate");
const OrdersCountAggregate_1 = require("../outputs/OrdersCountAggregate");
const OrdersMaxAggregate_1 = require("../outputs/OrdersMaxAggregate");
const OrdersMinAggregate_1 = require("../outputs/OrdersMinAggregate");
const OrdersSumAggregate_1 = require("../outputs/OrdersSumAggregate");
let AggregateOrders = class AggregateOrders {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCountAggregate_1.OrdersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCountAggregate_1.OrdersCountAggregate)
], AggregateOrders.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersAvgAggregate_1.OrdersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersAvgAggregate_1.OrdersAvgAggregate)
], AggregateOrders.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersSumAggregate_1.OrdersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersSumAggregate_1.OrdersSumAggregate)
], AggregateOrders.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersMinAggregate_1.OrdersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersMinAggregate_1.OrdersMinAggregate)
], AggregateOrders.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersMaxAggregate_1.OrdersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersMaxAggregate_1.OrdersMaxAggregate)
], AggregateOrders.prototype, "_max", void 0);
AggregateOrders = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateOrders", {
        isAbstract: true
    })
], AggregateOrders);
exports.AggregateOrders = AggregateOrders;
