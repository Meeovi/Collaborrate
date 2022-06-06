"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CustomerAvgAggregate_1 = require("../outputs/CustomerAvgAggregate");
const CustomerCountAggregate_1 = require("../outputs/CustomerCountAggregate");
const CustomerMaxAggregate_1 = require("../outputs/CustomerMaxAggregate");
const CustomerMinAggregate_1 = require("../outputs/CustomerMinAggregate");
const CustomerSumAggregate_1 = require("../outputs/CustomerSumAggregate");
let CustomerGroupBy = class CustomerGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CustomerGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CustomerGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerGroupBy.prototype, "firstname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerGroupBy.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerGroupBy.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerGroupBy.prototype, "postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerGroupBy.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCountAggregate_1.CustomerCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCountAggregate_1.CustomerCountAggregate)
], CustomerGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerAvgAggregate_1.CustomerAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerAvgAggregate_1.CustomerAvgAggregate)
], CustomerGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerSumAggregate_1.CustomerSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerSumAggregate_1.CustomerSumAggregate)
], CustomerGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerMinAggregate_1.CustomerMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerMinAggregate_1.CustomerMinAggregate)
], CustomerGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerMaxAggregate_1.CustomerMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerMaxAggregate_1.CustomerMaxAggregate)
], CustomerGroupBy.prototype, "_max", void 0);
CustomerGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CustomerGroupBy", {
        isAbstract: true
    })
], CustomerGroupBy);
exports.CustomerGroupBy = CustomerGroupBy;
