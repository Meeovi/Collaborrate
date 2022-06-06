"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Customer_groupAvgAggregate_1 = require("../outputs/Customer_groupAvgAggregate");
const Customer_groupCountAggregate_1 = require("../outputs/Customer_groupCountAggregate");
const Customer_groupMaxAggregate_1 = require("../outputs/Customer_groupMaxAggregate");
const Customer_groupMinAggregate_1 = require("../outputs/Customer_groupMinAggregate");
const Customer_groupSumAggregate_1 = require("../outputs/Customer_groupSumAggregate");
let Customer_groupGroupBy = class Customer_groupGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_groupGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Customer_groupGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupGroupBy.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCountAggregate_1.Customer_groupCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupCountAggregate_1.Customer_groupCountAggregate)
], Customer_groupGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupAvgAggregate_1.Customer_groupAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupAvgAggregate_1.Customer_groupAvgAggregate)
], Customer_groupGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupSumAggregate_1.Customer_groupSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupSumAggregate_1.Customer_groupSumAggregate)
], Customer_groupGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupMinAggregate_1.Customer_groupMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupMinAggregate_1.Customer_groupMinAggregate)
], Customer_groupGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupMaxAggregate_1.Customer_groupMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupMaxAggregate_1.Customer_groupMaxAggregate)
], Customer_groupGroupBy.prototype, "_max", void 0);
Customer_groupGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer_groupGroupBy", {
        isAbstract: true
    })
], Customer_groupGroupBy);
exports.Customer_groupGroupBy = Customer_groupGroupBy;
