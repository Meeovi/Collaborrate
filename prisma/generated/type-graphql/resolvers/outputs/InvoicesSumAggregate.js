"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let InvoicesSumAggregate = class InvoicesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], InvoicesSumAggregate.prototype, "invoice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], InvoicesSumAggregate.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], InvoicesSumAggregate.prototype, "id", void 0);
InvoicesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InvoicesSumAggregate", {
        isAbstract: true
    })
], InvoicesSumAggregate);
exports.InvoicesSumAggregate = InvoicesSumAggregate;
