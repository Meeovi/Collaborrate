"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Customer_groupSumAggregate = class Customer_groupSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_groupSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupSumAggregate.prototype, "cust_id", void 0);
Customer_groupSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer_groupSumAggregate", {
        isAbstract: true
    })
], Customer_groupSumAggregate);
exports.Customer_groupSumAggregate = Customer_groupSumAggregate;
