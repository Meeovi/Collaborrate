"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ProductsSumAggregate = class ProductsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsSumAggregate.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsSumAggregate.prototype, "related_product", void 0);
ProductsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductsSumAggregate", {
        isAbstract: true
    })
], ProductsSumAggregate);
exports.ProductsSumAggregate = ProductsSumAggregate;
