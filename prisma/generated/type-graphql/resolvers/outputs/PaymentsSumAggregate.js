"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let PaymentsSumAggregate = class PaymentsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], PaymentsSumAggregate.prototype, "id", void 0);
PaymentsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PaymentsSumAggregate", {
        isAbstract: true
    })
], PaymentsSumAggregate);
exports.PaymentsSumAggregate = PaymentsSumAggregate;
