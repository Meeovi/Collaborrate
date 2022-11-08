"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let QuotesSumAggregate = class QuotesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QuotesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QuotesSumAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], QuotesSumAggregate.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QuotesSumAggregate.prototype, "order_id", void 0);
QuotesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("QuotesSumAggregate", {
        isAbstract: true
    })
], QuotesSumAggregate);
exports.QuotesSumAggregate = QuotesSumAggregate;
