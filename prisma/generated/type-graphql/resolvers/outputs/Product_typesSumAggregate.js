"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Product_typesSumAggregate = class Product_typesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_typesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Product_typesSumAggregate.prototype, "prod_id", void 0);
Product_typesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_typesSumAggregate", {
        isAbstract: true
    })
], Product_typesSumAggregate);
exports.Product_typesSumAggregate = Product_typesSumAggregate;
