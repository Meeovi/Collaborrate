"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ProductsWhereUniqueInput = class ProductsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsWhereUniqueInput.prototype, "sku", void 0);
ProductsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsWhereUniqueInput", {
        isAbstract: true
    })
], ProductsWhereUniqueInput);
exports.ProductsWhereUniqueInput = ProductsWhereUniqueInput;
