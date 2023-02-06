"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const OrdersAvgAggregate_1 = require("../outputs/OrdersAvgAggregate");
const OrdersCountAggregate_1 = require("../outputs/OrdersCountAggregate");
const OrdersMaxAggregate_1 = require("../outputs/OrdersMaxAggregate");
const OrdersMinAggregate_1 = require("../outputs/OrdersMinAggregate");
const OrdersSumAggregate_1 = require("../outputs/OrdersSumAggregate");
let OrdersGroupBy = class OrdersGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersGroupBy.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrdersGroupBy.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrdersGroupBy.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersGroupBy.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersGroupBy.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersGroupBy.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersGroupBy.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersGroupBy.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersGroupBy.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], OrdersGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersGroupBy.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersGroupBy.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCountAggregate_1.OrdersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCountAggregate_1.OrdersCountAggregate)
], OrdersGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersAvgAggregate_1.OrdersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersAvgAggregate_1.OrdersAvgAggregate)
], OrdersGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersSumAggregate_1.OrdersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersSumAggregate_1.OrdersSumAggregate)
], OrdersGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersMinAggregate_1.OrdersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersMinAggregate_1.OrdersMinAggregate)
], OrdersGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersMaxAggregate_1.OrdersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersMaxAggregate_1.OrdersMaxAggregate)
], OrdersGroupBy.prototype, "_max", void 0);
OrdersGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrdersGroupBy", {
        isAbstract: true
    })
], OrdersGroupBy);
exports.OrdersGroupBy = OrdersGroupBy;
