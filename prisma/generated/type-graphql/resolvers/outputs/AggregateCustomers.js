"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomers = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersAvgAggregate_1 = require("../outputs/CustomersAvgAggregate");
const CustomersCountAggregate_1 = require("../outputs/CustomersCountAggregate");
const CustomersMaxAggregate_1 = require("../outputs/CustomersMaxAggregate");
const CustomersMinAggregate_1 = require("../outputs/CustomersMinAggregate");
const CustomersSumAggregate_1 = require("../outputs/CustomersSumAggregate");
let AggregateCustomers = class AggregateCustomers {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCountAggregate_1.CustomersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCountAggregate_1.CustomersCountAggregate)
], AggregateCustomers.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersAvgAggregate_1.CustomersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersAvgAggregate_1.CustomersAvgAggregate)
], AggregateCustomers.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersSumAggregate_1.CustomersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersSumAggregate_1.CustomersSumAggregate)
], AggregateCustomers.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersMinAggregate_1.CustomersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersMinAggregate_1.CustomersMinAggregate)
], AggregateCustomers.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersMaxAggregate_1.CustomersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersMaxAggregate_1.CustomersMaxAggregate)
], AggregateCustomers.prototype, "_max", void 0);
AggregateCustomers = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCustomers", {
        isAbstract: true
    })
], AggregateCustomers);
exports.AggregateCustomers = AggregateCustomers;
