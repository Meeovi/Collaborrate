"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Credit_memosSumAggregate = class Credit_memosSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosSumAggregate.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Credit_memosSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosSumAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Credit_memosSumAggregate.prototype, "prod_id", void 0);
Credit_memosSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Credit_memosSumAggregate", {
        isAbstract: true
    })
], Credit_memosSumAggregate);
exports.Credit_memosSumAggregate = Credit_memosSumAggregate;
