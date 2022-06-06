"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomer = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerAvgAggregate_1 = require("../outputs/CustomerAvgAggregate");
const CustomerCountAggregate_1 = require("../outputs/CustomerCountAggregate");
const CustomerMaxAggregate_1 = require("../outputs/CustomerMaxAggregate");
const CustomerMinAggregate_1 = require("../outputs/CustomerMinAggregate");
const CustomerSumAggregate_1 = require("../outputs/CustomerSumAggregate");
let AggregateCustomer = class AggregateCustomer {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCountAggregate_1.CustomerCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCountAggregate_1.CustomerCountAggregate)
], AggregateCustomer.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerAvgAggregate_1.CustomerAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerAvgAggregate_1.CustomerAvgAggregate)
], AggregateCustomer.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerSumAggregate_1.CustomerSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerSumAggregate_1.CustomerSumAggregate)
], AggregateCustomer.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerMinAggregate_1.CustomerMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerMinAggregate_1.CustomerMinAggregate)
], AggregateCustomer.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerMaxAggregate_1.CustomerMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerMaxAggregate_1.CustomerMaxAggregate)
], AggregateCustomer.prototype, "_max", void 0);
AggregateCustomer = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCustomer", {
        isAbstract: true
    })
], AggregateCustomer);
exports.AggregateCustomer = AggregateCustomer;
