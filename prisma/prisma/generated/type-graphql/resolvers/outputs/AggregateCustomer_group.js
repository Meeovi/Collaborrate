"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomer_group = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupAvgAggregate_1 = require("../outputs/Customer_groupAvgAggregate");
const Customer_groupCountAggregate_1 = require("../outputs/Customer_groupCountAggregate");
const Customer_groupMaxAggregate_1 = require("../outputs/Customer_groupMaxAggregate");
const Customer_groupMinAggregate_1 = require("../outputs/Customer_groupMinAggregate");
const Customer_groupSumAggregate_1 = require("../outputs/Customer_groupSumAggregate");
let AggregateCustomer_group = class AggregateCustomer_group {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCountAggregate_1.Customer_groupCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupCountAggregate_1.Customer_groupCountAggregate)
], AggregateCustomer_group.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupAvgAggregate_1.Customer_groupAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupAvgAggregate_1.Customer_groupAvgAggregate)
], AggregateCustomer_group.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupSumAggregate_1.Customer_groupSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupSumAggregate_1.Customer_groupSumAggregate)
], AggregateCustomer_group.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupMinAggregate_1.Customer_groupMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupMinAggregate_1.Customer_groupMinAggregate)
], AggregateCustomer_group.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupMaxAggregate_1.Customer_groupMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupMaxAggregate_1.Customer_groupMaxAggregate)
], AggregateCustomer_group.prototype, "_max", void 0);
AggregateCustomer_group = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCustomer_group", {
        isAbstract: true
    })
], AggregateCustomer_group);
exports.AggregateCustomer_group = AggregateCustomer_group;
